import { gql } from 'apollo-server-express';

export default gql`
    type Mutation {
        person(
            first_name: String!,
            last_name: String!,
            gender: String!,
            date_of_birth: String!,
            country_of_birth: String!
        ): Person
        car(
            make: String!
            model: String!
            price: Int!
        ): Car
    }
    type Query {
        people(
            first_name: String,
            last_name: String,
            gender: String,
            date_of_birth: String,
            country_of_birth: String
        ): [
            Person
        ]
    }
    type Person {
        person_uid: Int
        first_name: String
        last_name: String
        gender: String
        email: String
        date_of_birth: String
        country_of_birth: String
        car: Car
    }
    type Car {
        car_uid: Int
        make: String
        model: String
        price: Int
    }
`
