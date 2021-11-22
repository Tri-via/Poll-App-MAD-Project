import React, { createContext, useState } from 'react';

export const pollContext = createContext();

export const PollDataProvider = props => {
    const [Polls, setPolls] = useState([
        {
            id: 1,
            question: "What's your favourite brand?",
            choices: [
                { id: 1, choice: 'Nike', votes: 12 },
                { id: 2, choice: 'Adidas', votes: 1 },
                { id: 3, choice: 'Puma', votes: 3 },
                { id: 4, choice: 'Reebok', votes: 5 },
                { id: 5, choice: 'Under Armour', votes: 9 },
            ],
        },
        {
            id: 2,
            question: "What's your favourite Anime?",
            choices: [
                { id: 1, choice: 'Naruto', votes: 12 },
                { id: 2, choice: 'Death Note', votes: 1 },
                { id: 3, choice: 'Demon Slayer', votes: 3 },
                { id: 4, choice: 'Attack on Titan', votes: 5 },
                { id: 5, choice: 'Haikyu', votes: 9 },
            ],
        },
        {
            id: 3,
            question: "What's your favourite brand?",
            choices: [
                { id: 1, choice: 'Nike', votes: 12 },
                { id: 2, choice: 'Adidas', votes: 1 },
                { id: 3, choice: 'Puma', votes: 3 },
                { id: 4, choice: 'Reebok', votes: 5 },
                { id: 5, choice: 'Under Armour', votes: 9 },
            ],
        },
        {
            id: 4,
            question: "What's your favourite brand?",
            choices: [
                { id: 1, choice: 'Nike', votes: 12 },
                { id: 2, choice: 'Adidas', votes: 1 },
                { id: 3, choice: 'Puma', votes: 3 },
                { id: 4, choice: 'Reebok', votes: 5 },
                { id: 5, choice: 'Under Armour', votes: 9 },
            ],
        },
    ]);

    const [pollIndex, setPollIndex] = useState(5);

    console.log("contentProvider run");
    return (
        <pollContext.Provider value={{ Polls, setPolls, pollIndex, setPollIndex }}>
            {props.children}
        </pollContext.Provider>
    );
};