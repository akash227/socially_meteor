import { Component, OnInit } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Party } from '../../../both/interfaces/party.interface';
import { Parties }   from '../../../both/collections/parties.collections';
import { PartiesFormComponent } from './parties-form.component';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';

import template from './parties-list.component.html';
 
@Component({
  selector: 'parties-list',
  template,
  directives: [PartiesFormComponent, ROUTER_DIRECTIVES, LoginButtons]
})

export class PartiesListComponent extends MeteorComponent implements OnInit {
  parties: Mongo.Cursor<Party>;
 
  constructor() {
    super();
  }
  
  ngOnInit() {
    this.parties = Parties.find();
  }
 
  removeParty(party) {
    Parties.remove(party._id);
  }
}