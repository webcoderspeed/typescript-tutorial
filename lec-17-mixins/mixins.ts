function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = '';

    log(str: string) {
      console.log(str);
      this.completeLog += str;
    }
    dumpLog() {
      return this.completeLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger = new MyLogger();
logger.log('Foo');
console.log(logger.dumpLog());

function CreateSimpleInMemoryDatabase<T>() {
  return class SimpleInMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string) {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = CreateSimpleInMemoryDatabase<string>();

const sbd1 = new StringDatabase();
sbd1.set('Hello', 'Speed');

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{
  getObject(): object
}>>(Base: T) {
  return class extends Base {
    dump() {
      console.log(this.getObject());
    }
  }
}

const DumbableStringDatabse = Dumpable(StringDatabase);
const sbd2 = new DumbableStringDatabse();
sbd2.set('Hello', 'Speed Sharma');
sbd2.dump();