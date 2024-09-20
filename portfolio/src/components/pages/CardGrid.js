import React, { useState } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Draggable from 'react-draggable';

const CardGrid = () => {
  const [cards, setCards] = useState([
    { id: 1, component: <Card1 />, position: { x: 0, y: 0 } },
    { id: 2, component: <Card2 />, position: { x: 350, y: 0 } },
    { id: 3, component: <Card3 />, position: { x: 700, y: 0 } },
    { id: 4, component: <Card4 />, position: { x: 0, y: 350 } },
    { id: 5, component: <Card5 />, position: { x: 0, y: 350 } },
  ]);

  const gridSize = 350;

  const handleStop = (e, data, cardId) => {
    const newPosition = {
      x: Math.round(data.x / gridSize) * gridSize,
      y: Math.round(data.y / gridSize) * gridSize,
    };

    const updatedCards = cards.map(card =>
      card.id === cardId ? { ...card, position: newPosition } : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="relative w-full h-[100vh] bg-gray-100 flex justify-center items-center">
      <div className="relative w-[1050px] h-[700px] bg-white border border-gray-300">
        {cards.map((card) => (
          <Draggable
            key={card.id}
            position={card.position}
            onStop={(e, data) => handleStop(e, data, card.id)}
            bounds="parent"
            grid={[gridSize, gridSize]}
          >
            <div style={{ position: 'absolute', top: card.position.y, left: card.position.x }}>
              {card.component}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
