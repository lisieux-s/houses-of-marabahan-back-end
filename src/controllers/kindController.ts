import { Request, Response } from 'express';

import * as kindService from '../services/kindService.js';

export async function initializeKinds(req: Request, res: Response) {
    await kindService.initializeKinds();
    res.sendStatus(201)
}

export async function getKinds(req: Request, res: Response) {
    const kinds = await kindService.findMany();
    res.send(kinds);
}