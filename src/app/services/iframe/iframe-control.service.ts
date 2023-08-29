import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedService {
private subject = new Subject<any>();
sendClickEvent() {
  console.log('----9----Service')
  this.subject.next(undefined);
}
getClickEvent(): Observable<any>{ 
  console.log('----13----Service')
  return this.subject.asObservable();
}
}
