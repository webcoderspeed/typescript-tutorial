function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType 
): DataType[KeyType][] {
  return items.map(item => item[key]);
}

const Humans = [
  {
    name: "Max",
    age: 10,
    hobbies: ["Sports", "Cooking"]
  },
  {
    name: "Angel",
    age: 20,
    hobbies: ["Sports", "Dancing"]
  }
]

console.log(pluck(Humans, "hobbies"));
console.log(pluck(Humans, "name"));
console.log(pluck(Humans, "age"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & {
    quantity: number;
    productId: number;
  };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  event: EventMap[Name]
): void {
  console.log([
    name, event
  ])
}

sendEvent("addToCart", {
  time: new Date().getTime(),
  user: "Max",
  quantity: 2,
  productId: 1
})

sendEvent("checkout", {
  time: new Date().getTime(),
  user: "Angel"
})