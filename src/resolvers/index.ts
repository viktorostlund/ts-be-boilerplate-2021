import { createPerson, getPerson } from '../models';
import { Person } from '../types/types';

export default {
    Mutation: {
        createPerson: async (parent: any, args: Person) => {
        return await createPerson(args);
        },
    },
    Query: {
        getPerson: async (parent: any, {name}: {name: string}) => {
        return await getPerson(name);
        },
    }
}