import { useState } from 'react';

import './Exercise_1.css'
let cardArray = [
    {
        id: 1,
        name: 'earth',
        img: 'exercise_1/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'exercise_1/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'exercise_1/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'exercise_1/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'exercise_1/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'exercise_1/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'exercise_1/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'exercise_1/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'exercise_1/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'exercise_1/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'exercise_1/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'exercise_1/uranus.svg'
    }
]

let card1Id = ''
let card1Name = ''



cardArray.sort(() => 0.5 - Math.random())



export default function Exercise_1() {
    
    const [score, setScore] = useState(0); // Estado para almacenar el puntaje
    const [attempts, setAttempts] = useState(0);
    const [cards, setCards] = useState(cardArray);
    const [selectedCards, setSelectedCards] = useState([]);
    const click = (event) => {
    console.log(event.target.alt)
    console.log(event.target.id)
    if (event.target.alt === 'tick') {
        console.log('Ya esta validado')
    }else if (card1Id === '') {
        card1Id = event.target.id;
        card1Name = event.target.alt;
    } else if (card1Id !== event.target.id && card1Name === event.target.alt) {
        console.log('Son iguales')
        card1Id = ''
        card1Name = ''
        setScore((prevScore) => prevScore + 1);
        const updatedCards = cards.map((card) => {
        if (card.id === event.target.id) {
          return { ...card, img: './exercise_1/tick.svg', name: 'tick' };
        }
        return card;
      });
      setCards(updatedCards);
    } else if (card1Id === event.target.id) {
        console.log('No vayas de espabilado')
        card1Id = ''
        card1Name = ''
        setAttempts((prevAttempts) => prevAttempts + 1);
    }else {
        console.log('No son igules')
        card1Id = ''
        card1Name = ''
        setAttempts((prevAttempts) => prevAttempts + 1);
    }
    
};
  return (
        <div className='grid'>
          <h3>Score: <span data-function="score">{score}</span></h3>
          <h3>Attempts: <span data-function="attempts">{attempts}</span></h3>
          <div>
          {cardArray.map((card, i) => {
              return (
                  <img id={card.id} onClick={(event)=>click(event)} key={i} src={card.img} alt={card.name} /> 
              )
          })}
              <img onClick={(event)=>click(event)} src="./exercise_1/tick.svg" alt="tick" />
          </div>
         
        </div>
  )
}
