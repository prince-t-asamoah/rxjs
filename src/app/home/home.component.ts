import { Component, OnInit } from "@angular/core";
import { noop, Observable } from "rxjs";
import { Course } from "../model/course";
import { createHttpObservable } from "../common/util";
import { map } from "rxjs/operators";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginnersCourses: Course[];
  advancedCourses: Course[];
  beginnersCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor() {}

  ngOnInit() {
    //Use custom observables
    const http$ = createHttpObservable("/api/courses");
    const courses$: Observable<Course[]> = http$.pipe(
      map((res) => res["payload"])
    );

    //Imperative Design
    courses$.subscribe(
      (courses) => {
        this.beginnersCourses = courses.filter(
          (course) => course.category === "BEGINNER"
        );
        this.advancedCourses = courses.filter(
          (course) => course.category === "ADVANCED"
        );
      },
      noop,
      () => console.log("completed")
    );

    //Reactive Design
    this.beginnersCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === "BEGINNER")
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === "ADVANCED")
      )
    );
  }
}
