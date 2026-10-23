interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function updateField<T,K extends keyof T>(
  entity: T,
  key: K,
  value:T[K]
): T {
  return {
    ...entity,
    [key]: value
  };
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

const updated = updateField(user, "name","Elvis");
console.log(updated);

///////// ORIGINAL CODE WITH BUGS
/*
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function updateField<T>(
  entity: T,
  key: keyof T,
  value: T[keyof T]
): T {
  return {
    ...entity,
    [key]: value
  };
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

const updated = updateField(user, "name", 100);
*/