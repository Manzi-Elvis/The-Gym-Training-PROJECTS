
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "user";
}

class UserManager<T extends User> {
  private users: T[] = [];

  addUser(user: T): void {
    this.users.push(user);
  }

  getUser(id: number): T | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(
    id: number,
    updates: Partial<T>
  ): T | undefined {
    const user = this.getUser(id);

    if (!user) return undefined;

    Object.assign(user, updates);

    return user;
  }

  getField<K extends keyof T>(
    id: number,
    field: K
  ): string {
    const user = this.getUser(id);

    return String(user![field]);
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(
      user => user.id === id
    );

    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

const manager = new UserManager<User>();

manager.addUser({
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  role: "admin"
});

const user = manager.getUser(1);

if (user) {
  user.id = 10;
}

const email = manager.getField(1, "email");
const age = manager.getField(1, "age");
