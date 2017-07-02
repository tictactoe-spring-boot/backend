import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Game } from './game.model';
import { GameCreation } from './game-creation-dialog/game-creation.model';

@Injectable()
export class GameService {
  private baseUrl: string = '/api/game';

  constructor(private http: Http) {}

  findAll(): Observable<Game[]> {
    return this.http.get(`${this.baseUrl}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  create(gameCreation: GameCreation): Observable<Response> {
    return this.http.post(`${this.baseUrl}`, JSON.stringify(gameCreation));
  }

}