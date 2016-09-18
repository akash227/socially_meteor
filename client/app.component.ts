import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { Parties } from '../both/collections/parties.collections';
import { PartiesFormComponent } from './imports/parties/parties-form.component';
//noinspection TypeScriptCheckImport
import template from './app.component.html';

@Component({
    selector: 'app',
    template,
    directives: [PartiesFormComponent]
})

export class AppComponent {
    parties:Mongo.Cursor<any>;
    constructor() {
        this.parties = Parties.find();
    }
    removeParty(party) {
    	Parties.remove(party._id);
  	}
}