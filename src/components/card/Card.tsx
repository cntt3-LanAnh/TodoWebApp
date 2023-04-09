import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Cards } from "../../models/board";
import ProgressBar from "@ramonak/react-progress-bar";
import CardDetail from "../card-detail/CardDetail";
interface CardProps {
  boardId: number;
  card: Cards;
  index: number;
  updateCard: (boardIdFrom: number, boardIdTo: number, card: Cards) => void;
  removeCard: (boardId: number, cardId: string) => void;
}

const Card: React.FC<CardProps> = ({
  card,
  boardId,
  index,
  updateCard,
  removeCard,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onUpdateCard = (
    idBoardFrom: number,
    idBoardTo: number,
    cardItem: Cards
  ) => {
    updateCard(idBoardFrom, idBoardTo, cardItem);
    setShowModal(false);
  };

  const onRemoveCard = (idBoard: number, idCard: string) => {
    removeCard(idBoard, idCard);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <CardDetail
          boardId={boardId}
          card={card}
          onClose={() => setShowModal(false)}
          updateCard={onUpdateCard}
          removeCard={onRemoveCard}
        />
      )}
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <div
            className="flex flex-col bg-white rounded-[16px] cursor-pointer shadow-lg mt-6 p-4 h-[240px]"
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            onClick={() => setShowModal(true)}
          >
            <h3 className="text-lg font-bold py-4 text-ellipsis overflow-hidden whitespace-nowrap">
              {card.name}
            </h3>
            <div className="text-base text-cyan-950 flex-auto flex line-clamp-3 ">
              {card.description}
            </div>
            <ProgressBar
              completed={
                (card.tasks.filter((item) => item.checked).length /
                  (card.tasks.length === 0 ? 1 : card.tasks.length)) *
                100
              }
            />
            <div className="flex justify-between items-center mt-3 pt-3 border-gray-300 ">
              <div className="w-6 h-6 text-[#E10D30] border-[2px] border-gray-400 rounded-3xl" />
              <div className="text-xs">{card.createdAt}</div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Card;
