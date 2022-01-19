interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
};

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}


// implementing interface into classes
class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id]
  } 
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
// myDB.db["foo"] = "baz"
console.log(myDB.get("foo"));


class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
      return JSON.stringify(this.db);
  } 
  restoreFromString(storedState: string): void {
      this.db = JSON.parse(storedState);
  }
}

const myDB2 = new PersistentMemoryDB();
myDB2.set("foo", "bar");
console.log(myDB2.get("foo"));
console.log(myDB2.saveToString())
const saved = myDB2.saveToString()
myDB2.set("foo", "db - bar");
console.log(myDB2.get("foo"))


const myDB3 = new PersistentMemoryDB();
myDB3.restoreFromString(saved);
console.log(myDB3.get("foo"))

