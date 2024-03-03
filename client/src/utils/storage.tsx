interface IStorage {
  get(key: string): any,
  set(key: string, value: any): void,
  remove(key: string): void
}

const storageProvider = (provider: Storage): IStorage => ({
  get: (key: string) => {
    const inLS = localStorage.getItem(key);

    if (inLS) {
      return JSON.parse(inLS);
    }

    return null;
  },
  set: (key: string, value: storageSetParams | storageKeyPairParams | boolean) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  }
};

export default storage;
