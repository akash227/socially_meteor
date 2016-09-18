import {Mongo} from 'meteor/mongo';
 
import {Party} from '../interfaces/party.interface';
 
export const Parties = new Mongo.Collection<Party>('parties');

function loggedIn() {
  return !!Meteor.user();
}

