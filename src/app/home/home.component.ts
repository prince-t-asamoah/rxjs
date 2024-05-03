import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

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

  ngOnInit() {}
}
