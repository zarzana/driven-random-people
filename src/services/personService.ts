import { countPersons, getPerson } from "../repositories/personRepository";
import { Person } from "../protocols";

async function getRandomPersonService(): Promise<Person> {
    const personCount: number = await countPersons();
    const randomId: number = Math.floor(Math.random() * personCount) + 1;
    const person = await getPerson(randomId);
    return person;
}

const personService = {
    getRandomPersonService,
}

export default personService;
