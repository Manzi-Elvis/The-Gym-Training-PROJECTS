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