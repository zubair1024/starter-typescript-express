import { Handler } from '../types';

export const home: Handler = (req, res) => {
  res.status(200).send({ success: true });
};
