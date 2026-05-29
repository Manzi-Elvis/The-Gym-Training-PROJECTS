export const DEMO_AUTH_KEY = "zentry_demo_auth";

export function setDemoAuth() {
  localStorage.setItem(DEMO_AUTH_KEY, "true");
}

export function clearDemoAuth() {
  localStorage.removeItem(DEMO_AUTH_KEY);
}

export function isDemoAuthenticated() {
  return localStorage.getItem(DEMO_AUTH_KEY) === "true";
}