/*
ORIGINAL BUGGED CODE
interface Account {
  readonly id: number;
  name: string;
  roles: readonly string[];
}

function promote(account: Account): Account {
  account.id = 99;
  account.roles.push("admin");

  return {
    ...account,
    name: 123
  };
}

const account: Account = {
  id: 1,
  name: "Alice",
  roles: ["user"]
};

promote(account);

*/


interface Account {
  id: number;
  name: string | number;
  roles: string[];
}

function promote(account: Account): Account {
  account.id = 99;
  account.roles.push("admin");

  return {
    ...account,
    name: 123
  };
}

const account: Account = {
  id: 1,
  name: "Alice",
  roles: ["user"]
};

promote(account);