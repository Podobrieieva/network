export interface User {
  id?: number;
  name: string;
  surname: string;
  password: string;
  email: string;
}

export interface PermissionToEnter {
  ok: boolean;
  data: {
    token: string;
  };
}
