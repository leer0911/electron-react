import { request } from '../../utils';

export interface LoginParam {
  username: string;
  password: string;
}

export interface Response {
  code: number;
}

export function login(data: LoginParam): Promise<Response> {
  return request.post('/api/login', data);
}

export function fetchUsers() {
  return request.get('/api/users');
}
