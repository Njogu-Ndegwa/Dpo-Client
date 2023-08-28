import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IframeControlService {
  private closeIframeSubject = new Subject<void>();
  closeIframe$ = this.closeIframeSubject.asObservable();

  closeIframe() {
    console.log(this.closeIframe$)
    console.log('------13----')
    this.closeIframeSubject.next();
  }
}