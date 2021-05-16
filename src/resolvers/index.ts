import { createPerson, getNumberOfPeople, getAllPeople } from '../models';
import { Person } from '../types/types';

export default {
    Mutation: {
        createPerson: async (parent: any, args: Person) => {
            return await createPerson(args);
        },
    },
    Query: {
        getNumberOfPeople: async (parent: any, {first_name}: {first_name: string}) => {
            return await getNumberOfPeople(first_name);
        },
        getAllPeople: async () => {
            return await getAllPeople();
        },
    }
}