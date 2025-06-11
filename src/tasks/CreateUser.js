import { CallAnApi } from '../abilities/CallAnApi.js';

export class CreateUser {
  constructor(data) {
    this.data = data;
  }

  async performAs(actor) {
    const api = actor.abilityTo('CallAnApi');
    const response = await api.post('/users', this.data);
    return response.json();
  }
}
