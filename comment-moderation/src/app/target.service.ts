import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  currentTarget = new BehaviorSubject<number>(-1);

  constructor() {
    const target = window.location.href.split("target/")[1].split("/")[0];
    if (target != null) this.currentTarget.next(Number(target))
  }

  setTarget(id: number) {
    this.currentTarget.next(id);
  }
}
