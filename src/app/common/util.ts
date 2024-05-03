import { Observable } from "rxjs";
import { Course } from "../model/course";

//Create custom observables
export function createHttpObservable(url: string): Observable<Course[]> {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => response.json())
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
