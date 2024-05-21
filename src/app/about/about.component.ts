import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, concat, interval, merge, of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //Concat operator
    const concatSource1$ = of(1, 2, 3);
    const concatSource2$ = of(4, 5, 6);
    const concatSource3$ = of(7, 5, 9);

    const result$ = concat(concatSource1$, concatSource2$, concatSource3$);
    // result$.subscribe(console.log);

    //Merge operator
    const mergeSource1$ = interval(1000);
    const mergeSource2$ = mergeSource1$.pipe(map((val) => 10 * val));
    const mergeSource3$ = mergeSource1$.pipe(map((val) => 20 * val));
    const mergeSource4$ = merge(mergeSource1$, mergeSource2$, mergeSource3$);
    const mergeResults$ = mergeSource4$.pipe(map((val) => val + 1));
    // mergeResults$.subscribe(console.log);
  }
}
