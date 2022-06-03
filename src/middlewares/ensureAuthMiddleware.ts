import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as houseService from '../services/houseService.js';

dotenv.config();

export async function ensureAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers['authorization'];
  if (!authorization)
    throw { type: 'UNAUTHORIZED', message: 'Missing authorization header' };

  const token = authorization.replace('Bearer ', '');
  if (!token) throw { type: 'UNAUTHORIZED', message: 'Missing token' };

  try {
    const { houseId } = jwt.verify(token, process.env.JWT_SECRET) as {
      houseId: number;
    };
    const house = await houseService.findById(houseId);
    res.locals.house = house;

    next();
  } catch {
    throw { type: 'UNAUTHORIZED', message: 'Invalid token' };
  }
}
