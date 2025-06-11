export class DeleteUser {
  constructor(id) {
    this.id = id;
  }

  async performAs(actor) {
    const api = actor.abilityTo('CallAnApi');
    const response = await api.delete(`/users/${this.id}`);
    return response.json();
  }
}
