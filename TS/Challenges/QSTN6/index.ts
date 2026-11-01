type PaymentResult =
  | {
      status: "success";
      transactionId: string;
      amount: number;
    }
  | {
      status: "failed";
      error: string;
    }
  | {
      status: "pending";
      retryAfter: number;
    }
  | {
      status: "refunded";
      refundId: string
      amount: number
    }

function handlePayment(result: PaymentResult): number | string {
  if (result.status === "success") {
    return `Paid: ${result.amount}`;
  }

  if ("error" in result) {
    return result.error.toUpperCase();
  }

  if(result.status === "pending"){
    return result.retryAfter;
  }
  
  return result.status;
}

function getPaymentValue(
  result: PaymentResult
): number {
  if (result.status !== "failed" && result.status !== "pending") {
    return result.amount;
  }

  return 0;
}

function assertNever(value: string): string {
  throw new Error(`Unexpected value: ${value}`);
}

function processPayment(result: PaymentResult): string {
  switch (result.status) {
    case "success":
      return result.transactionId;

    case "failed":
      return result.error;

    case "pending":
      return result.status
    
    case "refunded":
      return result.refundId
    default:
      return assertNever(result);
  }
}

/////// ORIGINAL CODE WITH BUGS:
/*
You're building a payment processing system. The following
implementation contains subtle type errors and an incomplete
state-handling design.

```tsx
type PaymentResult =
  | {
      status: "success";
      transactionId: string;
      amount: number;
    }
  | {
      status: "failed";
      error: string;
    }
  | {
      status: "pending";
      retryAfter: number;
    };

function handlePayment(result: PaymentResult): string {
  if (result.status === "success") {
    return `Paid: ${result.amount}`;
  }

  if ("error" in result) {
    return result.error.toUpperCase();
  }

  return result.transactionId;
}

function getPaymentValue(
  result: PaymentResult
): number {
  if (result.status !== "failed") {
    return result.amount;
  }

  return 0;
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function processPayment(result: PaymentResult): string {
  switch (result.status) {
    case "success":
      return result.transactionId;

    case "failed":
      return result.error;

    default:
      return assertNever(result);
  }
}
```

Your tasks:

1. Identify every type error and explain why TypeScript
  reports it.
2. Correct all three functions.
3. Make `processPayment()` exhaustive so adding
  a new payment status produces a compiler error
  until it is handled.

**Additional challenge**: Add a `"refunded"` status
containing `refundId: string` and `amount: number`.
Your exhaustive switch must detect the newly unhandled status.
*/