import { Request, Response } from "express";
import personService from "../services/personService";
import { Person } from "protocols";

async function getRandomPerson(req: Request, res: Response) {
    const person: Person = await personService.getRandomPersonService();
    res.send(person);
}

const personController = {
    getRandomPerson,
}

export default personController;