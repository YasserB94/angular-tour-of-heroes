//ANGULAR
import { Injectable } from '@angular/core';
//RXJS
import { Observable, of } from 'rxjs';
//SERVICES
import { MessageService } from './message.service';
//INTERFACES
import { Hero } from './hero';
//DATA
import { HEROES } from './mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHeroes():Observable<Hero[]>{
    const heroes= of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
}
