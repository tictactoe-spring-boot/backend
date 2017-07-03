import { BaseRequestOptions, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {

  merge(options?: RequestOptionsArgs): RequestOptions {
    options.headers = new Headers({
      'Content-Type': 'application/json'
    });

    return super.merge(options);
  }
}