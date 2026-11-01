
type User = {
  id: number;
  name: string;
  email?: string;
};

type ApiResponse<T> = {
  data: T;
  error?: string;
};

class Cache<T> {
  private store = new Map<string, T>();

  set(key: string, value: T): void {
    this.store.set(key, value);
  }

  get(key: string): T {
    return this.store.get(key)!;
  }
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob" },
  ];

  return {
    data: users.find(user => user.id === id) as User,
  };
}

async function getUser(
  id: number,
  cache: Cache<User>
): Promise<User> {
  const cached = cache.get(String(id));

  if (cached) {
    return cached;
  }

  const response = await fetchUser(id);
  cache.set(String(id), response.data);

  return response.data;
}

function groupBy<T, K extends keyof T>(
  items: T[],
  key: K
): Record<string, T[]> {
  return items.reduce((result, item) => {
    const group = String(item[key]);

    (result[group] ??= []).push(item);

    return result;
  }, {} as Record<string, T[]>);
}

async function main() {
  const cache = new Cache<User>();

  const first = await getUser(1, cache);
  const second = await getUser(3, cache);

  console.log(first.name.toUpperCase());
  console.log(second.name.toUpperCase());

  const grouped = groupBy(
    [
      { id: 1, role: "admin" },
      { id: 2, role: "user" },
      { id: 3, role: "admin" },
    ],
    "role"
  );

  console.log(grouped.admin?.length);
  console.log(grouped.moderator?.length);
}
main();

//////////// ORIGINAL CODE WITH BUGS///////////
/*

type User = {
  id: number;
  name: string;
  email?: string;
};

type ApiResponse<T> = {
  data: T;
  error?: string;
};

class Cache<T> {
  private store = new Map<string, T>();

  set(key: string, value: T): void {
    this.store.set(key, value);
  }

  get(key: string): T {
    return this.store.get(key)!;
  }
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob" },
  ];

  return {
    data: users.find(user => user.id === id) as User,
  };
}

async function getUser(
  id: number,
  cache: Cache<User>
): Promise<User> {
  const cached = cache.get(String(id));

  if (cached) {
    return cached;
  }

  const response = await fetchUser(id);
  cache.set(String(id), response.data);

  return response.data;
}

function groupBy<T, K extends keyof T>(
  items: T[],
  key: K
): Record<string, T[]> {
  return items.reduce((result, item) => {
    const group = String(item[key]);

    (result[group] ??= []).push(item);

    return result;
  }, {} as Record<string, T[]>);
}

async function main() {
  const cache = new Cache<User>();

  const first = await getUser(1, cache);
  const second = await getUser(3, cache);

  console.log(first.name.toUpperCase());
  console.log(second.name.toUpperCase());

  const grouped = groupBy(
    [
      { id: 1, role: "admin" },
      { id: 2, role: "user" },
      { id: 3, role: "admin" },
    ],
    "role"
  );

  console.log(grouped.admin?.length);
  console.log(grouped.moderator?.length);
}

main();
*/