interface Database<K, T> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

// implementing interface into classes
class InMemoryDatabase<K extends DBKeyType, T> implements Database<K, T> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

const myDB = new InMemoryDatabase();
myDB.set('foo', 'bar');
// myDB.db["foo"] = "baz"
console.log(myDB.get('foo'));

class PersistentMemoryDB<K extends DBKeyType, T>
  extends InMemoryDatabase<K, T>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB2 = new PersistentMemoryDB<string, string>();
myDB2.set('foo', 'bar');
console.log(myDB2.get('foo'));
console.log(myDB2.saveToString());
const saved = myDB2.saveToString();
myDB2.set('foo', 'db - bar');
console.log(myDB2.get('foo'));

const myDB3 = new PersistentMemoryDB();
myDB3.restoreFromString(saved);
console.log(myDB3.get('foo'));
