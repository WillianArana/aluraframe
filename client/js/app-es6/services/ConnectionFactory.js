export class ConnectionFactory {
  constructor() {
    throw new Error('Não é possível criar instâncias de ConnectionFactory');
  }

  static #currentVersion = 1;
  static #dbName = 'aluraframe';
  static #dbConnection = null;
  static #close = null;

  static #migrations = {
    [ConnectionFactory.#currentVersion]: ['negociacoes'],
  };

  static getConnection() {
    return new Promise((resolve, reject) => {
      if (ConnectionFactory.#dbConnection) {
        resolve(ConnectionFactory.#dbConnection);
        return;
      }

      const version = ConnectionFactory.#currentVersion;
      const dbName = ConnectionFactory.#dbName;
      const request = window.indexedDB.open(dbName, version);

      request.onupgradeneeded = (event) => {
        this.#onUpgradeIfIsVesion1(event);
      };

      request.onsuccess = () => {
        const dbConnection = request.result;
        ConnectionFactory.#dbConnection = dbConnection;
        ConnectionFactory.#close = dbConnection.close.bind(dbConnection);
        dbConnection.close = null;
        resolve(dbConnection);
      };

      request.onerror = () => {
        const error = request.error;
        console.error(error);
        reject(error.name);
      };
    });
  }

  static #onUpgradeIfIsVesion1(event) {
    const version = 1;
    if (event.oldVersion < version) {
      const dbConnection = event.target.result;
      const stores = ConnectionFactory.#migrations[version];
      for (const store of stores) {
        dbConnection.createObjectStore(store, { autoIncrement: true });
      }
    }
  }

  static closeConnection() {
    if (ConnectionFactory.#close) {
      ConnectionFactory.#close();
      ConnectionFactory.#dbConnection = null;
      ConnectionFactory.#close = null;
    }
  }
}
