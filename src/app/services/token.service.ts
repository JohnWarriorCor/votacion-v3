import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token = new BehaviorSubject(false);

  setTitle(token: boolean) {
    this.token.next(token);
  }
}
