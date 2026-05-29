export type DemoWallet = {
  currency: string;
  name: string;
  balance: string;
  status: string;
};

export type DemoTransaction = {
  id: string;
  name: string;
  type: string;
  amount: string;
  status: string;
};

const WALLETS_KEY = "zentry_demo_wallets";
const TRANSACTIONS_KEY = "zentry_demo_transactions";

export const defaultWallets: DemoWallet[] = [
  { currency: "USD", name: "US Dollar Wallet", balance: "$8,240.50", status: "Active" },
  { currency: "EUR", name: "Euro Wallet", balance: "€2,180.00", status: "Active" },
  { currency: "GBP", name: "British Pound Wallet", balance: "£1,150.00", status: "Active" },
  { currency: "RWF", name: "Rwandan Franc Wallet", balance: "RWF 1,650,000", status: "Active" },
];

export const defaultTransactions: DemoTransaction[] = [
  { id: "TXN-1001", name: "Freelance payout", type: "Incoming", amount: "+$2,400.00", status: "Completed" },
  { id: "TXN-1002", name: "Currency conversion", type: "Exchange", amount: "-$320.00", status: "Completed" },
  { id: "TXN-1003", name: "Client invoice", type: "Incoming", amount: "+$980.00", status: "Pending" },
  { id: "TXN-1004", name: "Team payout", type: "Outgoing", amount: "-$740.00", status: "Completed" },
];

export function getWallets() {
  const saved = localStorage.getItem(WALLETS_KEY);
  return saved ? (JSON.parse(saved) as DemoWallet[]) : defaultWallets;
}

export function saveWallets(wallets: DemoWallet[]) {
  localStorage.setItem(WALLETS_KEY, JSON.stringify(wallets));
}

export function getTransactions() {
  const saved = localStorage.getItem(TRANSACTIONS_KEY);
  return saved ? (JSON.parse(saved) as DemoTransaction[]) : defaultTransactions;
}

export function saveTransactions(transactions: DemoTransaction[]) {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
}

export function addTransaction(transaction: DemoTransaction) {
  const current = getTransactions();
  saveTransactions([transaction, ...current]);
}