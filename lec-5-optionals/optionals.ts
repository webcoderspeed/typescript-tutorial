function printIngredient(quantity: string, ingredient:string, extra?: string) {
  console.log(
    `${quantity} ${ingredient} ${extra ? `${extra}`: ''}`
  )
}

printIngredient("1", "Milk Can");
printIngredient("1", "Milk Can", "with sugar");

interface User {
  id: string;
  info?: {
    email?: string;
  }
}

function getEmail(user: User) {
  if (user.info) {
    return user.info.email;
  }
  return "";
}

function getEmailEasy(user: User) {
  return user?.info?.email ?? "";
}


function addWithCallback(x: number, y: number, callback?:() => void): void {
  console.log(x + y);
  // optional callback
  // if (callback) {
  //   callback();
  // }
  
  // calling callback in easy way
  callback?.();
}