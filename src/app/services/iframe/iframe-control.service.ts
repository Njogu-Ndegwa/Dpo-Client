// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class IframeControlService {
//   private closeIframeSubject = new Subject<void>();
//   closeIframe$ = this.closeIframeSubject.asObservable();

//   closeIframe() {
//     console.log(this.closeIframe$)
//     console.log('------13----')
//     this.closeIframeSubject.next();
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedService {
private subject = new Subject<any>();
sendClickEvent(data:any) {
  this.subject.next(data);
}
getClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
}

