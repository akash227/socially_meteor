import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './party-details.component.html';
 
@Component({
  selector: 'party-details',
  template
})

export class PartyDetailsComponent {
	partyId: string;
 
  	constructor(private route: ActivatedRoute) {}
}