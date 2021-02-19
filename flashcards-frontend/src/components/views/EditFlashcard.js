import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

const FLASHCARD_QUERY = gql`
    query getFlashcard($_id: ID!) {
        getFlashcard(_id: $_id) {
            _id
            question
            answer
        }
    }
`;

const EDIT_FLASHCARD = gql`
    mutation updateFlashcard($_id: ID!, $question: String, $answer: String) {
        updateFlashcard(_id: $_id, input: { question: $question, answer: $answer }) {
            _id
            question
            answer
        }
    }
`;

const EditFlashcard = ({ match, history }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const { loading, error, data } = useQuery(FLASHCARD_QUERY, {
        variables: {
            _id: match.params.id,
        },
    });

    const [updateFlashcard] = useMutation(EDIT_FLASHCARD, { onCompleted() { history.push('/'); } });

    if (loading) return 'Loading...';
    if (error) return `Error ${error.mesage}`;

    const flashcard = data;

    return (
        <div className="container mt-3">
            <h1 className="title">Edit Flashcard</h1>
        </div>
    );
};
    
export default EditFlashcard;