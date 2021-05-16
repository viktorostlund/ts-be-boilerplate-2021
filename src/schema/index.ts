import { gql } from 'apollo-server-express';

export default gql`
    type Mutation {
        createPerson(
        first_name: String!,
        last_name: String!,
        gender: String!,
        date_of_birth: String!,
        country_of_birth: String!
        ): Person
    }
    type Query {
        getNumberOfPeople(first_name: String): Int,
        getAllPeople: [
            Person
        ]
    }
    type Person {
        id: Int
        first_name: String
        last_name: String
        gender: String
        email: String
        date_of_birth: String
        country_of_birth: String
        car_uid: String
    }
`