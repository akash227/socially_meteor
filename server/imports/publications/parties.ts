import {Parties} from '../../../both/collections/parties.collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('parties', () => Parties.find());