
interface User {
  id: number;
  name: string;
  age?: number;
  email: string;
  isAdmin: boolean;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

class Repository<T extends User> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T {
    return this.items.find(item => item.id === id)!;
  }

  update(id: number, changes: Partial<T>): T {
    const item = this.findById(id);

    Object.assign(item, changes);

    return item;
  }
}

function getUserName(user?: User): string | undefined {
  return user?.name.toUpperCase();
}

function parseUser(json: string): User {
  const data: User = JSON.parse(json);

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    isAdmin: data.isAdmin,
    age: 25,
  };
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  return response.json();
}

async function loadUsers(): Promise<User[]> {
  const response: ApiResponse<User[]> = await fetchData(
    "/api/users"
  );

  return response.data.map(user => ({
    ...user,
    name: user.name.trim(),
  }));
}

function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): string {
  return String(object[key]);
}

const users = new Repository<User>();

users.add({
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: true,
});

users.add({
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  isAdmin: false,
});

const user = users.findById(1);

console.log(user.name.toUpperCase());

const property = getProperty(
  { id: 1, active: true },
  "active"
);

const numbers: number[] = [10, 20, 30];

console.log(numbers[10]?.toFixed(2));

loadUsers().then(users => {
  users.forEach(user => console.log(user.name));
});

//////////// ORIGINAL CODE WITH BUGS ///////////
/*

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: string): T {
    return this.items.find(item => item.id === id);
  }

  update(id: number, changes: Partial<T>): T {
    const item = this.findById(id);

    Object.assign(item, changes);

    return item;
  }
}

function getUserName(user?: User): string {
  return user.name.toUpperCase();
}

function parseUser(json: string): User {
  const data: User = JSON.parse(json);

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    isAdmin: data.isAdmin,
    age: 25,
  };
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  return response.json();
}

async function loadUsers(): Promise<User[]> {
  const response: ApiResponse<User[]> = await fetchData(
    "/api/users"
  );

  return response.data.map(user => ({
    ...user,
    name: user.name.trim(),
  }));
}

function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): string {
  return object[key];
}

const users = new Repository<User>();

users.add({
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: true,
});

users.add({
  id: "2",
  name: "Bob",
  email: "bob@example.com",
  isAdmin: false,
});

const user = users.findById(1);

console.log(user.name.toUpperCase());

const property = getProperty(
  { id: 1, active: true },
  "active"
);

const numbers: number[] = [10, 20, 30];

console.log(numbers[10].toFixed(2));

loadUsers().then(users => {
  users.forEach(user => console.log(user.username));
});

*/