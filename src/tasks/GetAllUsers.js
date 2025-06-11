export class GetAllUsers {
  async performAs(actor) {
    const api = actor.abilityTo('CallAnApi');
    const response = await api.get('/users');
    return response.json();
  }
}
