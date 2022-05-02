class local {
  public get(key: string): string | null {
    let storageItem = null;
    if (typeof window !== "undefined") {
      storageItem = localStorage.getItem(key);
    }
    return storageItem;
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export default new local();
