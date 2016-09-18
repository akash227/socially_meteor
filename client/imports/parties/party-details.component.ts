import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { Parties } from '../../../both/collections/parties.collections';

import template from './party-details.component.html';

@Component({
  selector: 'party-details',
  template
})

export class PartyDetailsComponent {
	partyId: string;
 	party: any;

  	constructor(private route: ActivatedRoute) {}

  	ngOnInit() {
	    this.route.params
	      .map(params => params['partyId'])
	      .subscribe(partyId => {
	      	this.partyId = partyId;
	      	
	      	Tracker.autorun(() => {
          		this.party = Parties.findOne(this.partyId);
        	});
	      });
  	}
}