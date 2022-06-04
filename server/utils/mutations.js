import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            _id
            email
            password
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser()
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: Numbers!) {
        saveBook(bookId: $bookId){
            _id
            bookId
        }
    }

`;

export const REMOVE_BOOK = gql`
    mutation removeBook()

`;