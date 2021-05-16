import { createPerson, getPersons } from '../models';
import { Person } from '../types/types';

export default {
    Mutation: {
        person: async (parent: any, args: Person) => {
            return await createPerson(args);
        },
    },
    Query: {
        persons: async () => {
            return await getPersons();
        },
    }
}