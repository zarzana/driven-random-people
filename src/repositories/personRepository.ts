import { Person } from "protocols";
import { db } from "../database/database";

export async function countPersons(): Promise<number> {
    const dbResponse = await db.query(`
        SELECT COUNT(*) 
            FROM "people";
    `)
    return dbResponse.rows[0].count;
}

export async function getPerson(id: number): Promise<Person> {
    const dbResponse = await db.query(`
        SELECT * 
            FROM "people"
            WHERE "id" = ${id};
    `)
    return dbResponse.rows[0];
}

