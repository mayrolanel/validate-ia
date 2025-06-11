import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Actor } from '../src/actor.js';
import { CallAnApi } from '../src/abilities/CallAnApi.js';
import { CreateUser } from '../src/tasks/CreateUser.js';
import { GetAllUsers } from '../src/tasks/GetAllUsers.js';
import { GetUserById } from '../src/tasks/GetUserById.js';
import { UpdateUser } from '../src/tasks/UpdateUser.js';
import { DeleteUser } from '../src/tasks/DeleteUser.js';

const baseURL = process.env.BASE_URL ?? 'http://localhost:3000';

const actor = new Actor('API Tester').whoCan('CallAnApi', new CallAnApi(baseURL));

test('user route automation using Screenplay pattern', async () => {
  const newUser = { name: 'John Doe', email: 'john@example.com' };
  const created = await actor.attemptsTo(new CreateUser(newUser));
  assert.ok(created.id, 'User should have an id');

  const users = await actor.attemptsTo(new GetAllUsers());
  assert.ok(Array.isArray(users), 'Should return user array');

  const fetched = await actor.attemptsTo(new GetUserById(created.id));
  assert.equal(fetched.id, created.id);

  const updated = await actor.attemptsTo(new UpdateUser(created.id, { name: 'John Updated' }));
  assert.equal(updated.name, 'John Updated');

  const deleted = await actor.attemptsTo(new DeleteUser(created.id));
  assert.ok(deleted);
});
