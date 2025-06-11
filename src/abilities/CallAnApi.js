export class CallAnApi {
  constructor(baseURL) {
    this.baseURL = baseURL.replace(/\/$/, "");
  }

  async get(path) {
    return fetch(`${this.baseURL}${path}`);
  }

  async post(path, data) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }

  async put(path, data) {
    return fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }

  async delete(path) {
    return fetch(`${this.baseURL}${path}`, { method: 'DELETE' });
  }
}
