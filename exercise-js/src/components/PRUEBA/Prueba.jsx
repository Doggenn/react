import './Prueba.css';
import { useState, useEffect } from 'react';

const cardArray = [
  { id: 1, name: 'earth', img: 'exercise_1/earth.svg' },
  { id: 2, name: 'jupiter', img: 'exercise_1/jupiter.svg' },
  { id: 3, name: 'mars', img: 'exercise_1/mars.svg' },
  { id: 4, name: 'mercury', img: 'exercise_1/mercury.svg' },
  { id: 5, name: 'saturn', img: 'exercise_1/saturn.svg' },
  { id: 6, name: 'uranus', img: 'exercise_1/uranus.svg' },
  { id: 7, name: 'earth', img: 'exercise_1/earth.svg' },
  { id: 8, name: 'jupiter', img: 'exercise_1/jupiter.svg' },
  { id: 9, name: 'mars', img: 'exercise_1/mars.svg' },
  { id: 10, name: 'mercury', img: 'exercise_1/mercury.svg' },
  { id: 11, name: 'saturn', img: 'exercise_1/saturn.svg' },
  { id: 12, name: 'uranus', img: 'exercise_1/uranus.svg' }
];

const Prueba = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      if (card1.name !== card2.name) {
        // Si las cartas no coinciden, esperamos un segundo y luego las volvemos a voltear
        const timer = setTimeout(() => {
          setFlippedCards([]);
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        // Si las cartas coinciden, incrementamos el puntaje y reiniciamos las cartas volteadas
        setScore(score + 1);
        setFlippedCards([]);
        if (score + 1 === cardArray.length / 2) {
          setGameComplete(true);
        }
      }
    }
  }, [flippedCards, score]);

  const handleCardClick = (id, name) => {
    if (flippedCards.length === 0 || flippedCards.length === 1) {
      // Si no hay cartas volteadas o solo hay una, volteamos la carta seleccionada
      setFlippedCards([...flippedCards, { id, name }]);
    }
    setAttempts(attempts + 1);
  };

  return (
    <div className='grid'>
      <h3>Score: {score}</h3>
      <h3>Attempts: {attempts}</h3>
      {gameComplete && <div>Congratulations! You've completed the game!</div>}
      {cardArray.map(card => (
        <div key={card.id} onClick={() => handleCardClick(card.id, card.name)}>
          {flippedCards.some(c => c.id === card.id) ? (
            <img src={card.img} alt={card.name} />
          ) : (
            <img src={`exercise_1/universe.svg`} alt='back' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Prueba;
