interface MyUser {
  id: string;
  name: string;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//   id?: string;
//   name?: string;
//   email?: string;
// }


const merge = (
  user: MyUser,
  override: MyUserOptionals
): MyUser => ({
  ...user,
  ...override
})

console.log(merge({
  id: "1",
  name: "Nik",
  email: "dontemail@gmail.com",
  phone: "123456789"
}, {
  email: "nevereveremail@gmail.com"
}));

type RequiredUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">

// const mapById = (
//   user: MyUser[]
// ): Record<string, MyUser> => {
//   return user.reduce((acc, curr) => ({
//     ...acc,
//     [curr.id]: curr
//   }), {})
// }

type UserWithoutID = Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<MyUser["id"], MyUser> => {
  return users.reduce((acc, curr) => ({
    ...acc,
    [curr.id]: curr
  }), {})
}

console.log(
  mapById([
    {
      id: "1",
      name: "Nik",
    }
    ,{
      id: "2",
      name: "Fury",
    }
  ]));