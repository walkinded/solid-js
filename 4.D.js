/*
    Dependency Inversion Principle - Принцип инверсии зависимостей.

    Объектом зависимости должна быть абстракция, а не что-то конкретное.

    Модули верхних уровней не должны зависеть от модулей нижних уровней.
    Оба типа модулей должны зависеть от абстракций.

    Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
*/

class Fetch {
  request(url) {
    // return fetch(url).then((r) => r.json());
    return Promise.resolve('data from fetch');
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage';
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  getClient() {
    return this.fetch.request('vk.com');
  }
}

class LocalStorageClient {
  constructor(client) {
    this.client = client;
  }
  getClient() {
    return this.client.getClient();
  }
}

class Database {
  constructor() {
    this.fetch = new Fetch();
  }
  getData() {
    return this.fetch.request('vk.com');
  }
}

const db = new Database(new LocalStorageClient());
db.getData();
