import { Request, Response, Router } from 'express';

export type User = {
  username: string;
  password: string;
};

export type Method =
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch';

export type Handler = (req: Request, res: Response) => any;

export type Route = {
  path: string;
  router: Router;
};
