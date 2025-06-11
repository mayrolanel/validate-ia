export class UpdateUser {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  async performAs(actor) {
    const api = actor.abilityTo('CallAnApi');
    const response = await api.put(`/users/${this.id}`, this.data);
    return response.json();
  }
}
