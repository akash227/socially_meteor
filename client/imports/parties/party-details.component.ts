import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { Party } from '../../../both/interfaces/party.interface';
import { Parties } from '../../../both/collections/parties.collections';
import { CanActivate } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import template from './party-details.component.html';

@Component({
  selector: 'party-details',
  template,
  directives: [ROUTER_DIRECTIVES]
})

export class PartyDetailsComponent {
	partyId: string;
 	party: Party;

  	constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

  	ngOnInit() {
	    this.route.params
	      .map(params => params['partyId'])
	      .subscribe(partyId => {
	      	this.partyId = partyId;
	      	/*
				To make it reactive, we use Tracker 
				because we don't know if the subscription is ready by now.
	      	*/
	      	Tracker.autorun(() => {
	      		/*
					To apply any change of party to UI, we have to use NgZone.run() method.
	      		*/
          		this.ngZone.run(() => {
            		this.party = Parties.findOne(this.partyId);
          		});
        	});
	      });
  	}

  	saveParty() {
	    if (Meteor.userId()) {
	      Parties.update(this.party._id, {
	        $set: {
	          name: this.party.name,
	          description: this.party.description,
	          location: this.party.location
	        }
	      });
	    } else {
	      alert('Please log in to change this party');
	    }
  	}

}

