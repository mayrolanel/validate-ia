export class GetUserById {
  constructor(id) {
    this.id = id;
  }

  async performAs(actor) {
    const api = actor.abilityTo('CallAnApi');
    const response = await api.get(`/users/${this.id}`);
    return response.json();
  }
}
