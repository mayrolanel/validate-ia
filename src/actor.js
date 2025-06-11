export class Actor {
  constructor(name, abilities = {}) {
    this.name = name;
    this.abilities = abilities;
  }

  whoCan(abilityName, ability) {
    this.abilities[abilityName] = ability;
    return this;
  }

  abilityTo(abilityName) {
    return this.abilities[abilityName];
  }

  async attemptsTo(...tasks) {
    let result;
    for (const task of tasks) {
      result = await task.performAs(this);
    }
    return result;
  }
}
