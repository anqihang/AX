const name = "ax_token";

export const getToken = function (): string | null {
  return localStorage.getItem(name);
};
export const setToken = function (_value: string): void {
  localStorage.setItem(name, _value);
};
export const removeToken = function (): void {
  localStorage.removeItem(name);
};
