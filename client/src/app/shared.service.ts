import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  sharedUser: {
          username: string;
      };
  constructor() { }

}
