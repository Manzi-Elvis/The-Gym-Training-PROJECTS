abstract class Notification<T> {
  constructor(protected payload: T) {}

  abstract send(data: T): Promise<boolean>;

  getPayload(): T {
    return this.payload;
  }
}

interface EmailPayload {
  to: string;
  subject?: string;
  body?: string;
}

class EmailNotification extends Notification<EmailPayload> {
  override send(data: EmailPayload): Promise<boolean> {
    return Promise.resolve(true);
  }
}

class SMSNotification extends Notification<string> {
  constructor(payload: string) {
    super(payload)
    this.payload = payload;
  }

  override async send(data: string): Promise<boolean> {
    console.log(data);
    return true;
  }
}

const notification: Notification<EmailPayload> =
  new EmailNotification({
    to: "peter@gmail.com",
    subject: "Hello",
    body: "Welcome"
  });

notification.send({ to: "peter@gmail.com" });

///////// ORIGINAL CODE WITH BUGS:
/*
abstract class Notification<T> {
  constructor(protected readonly payload: T) {}

  abstract send(data: T): Promise<boolean>;

  getPayload(): T {
    return this.payload;
  }
}

interface EmailPayload {
  to: string;
  subject: string;
  body: string;
}

class EmailNotification extends Notification<EmailPayload> {
  override send(data: string): Promise<string> {
    return Promise.resolve(`Sent to ${data}`);
  }
}

class SMSNotification extends Notification<string> {
  constructor(payload: string) {
    this.payload = payload;
  }

  override send(data: string): boolean {
    console.log(data);
    return true;
  }
}

const notification: Notification<EmailPayload> =
  new EmailNotification({
    to: "peter@gmail.com",
    subject: "Hello",
    body: "Welcome"
  });

notification.send({ to: "peter@gmail.com" });
*/