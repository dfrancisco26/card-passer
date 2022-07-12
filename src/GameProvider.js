import { useState, createContext, useContext } from 'react';
import initialCards from './cards-data';

const GameContext = createContext();

export function GameProvider({ children }) {

  const initialCards = { initialCards };
  const stateAndSetters = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom, to, setTo,
  };

  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
    
  function findCardIndex(value, suit, cards) {
    return cards.findIndex(card => card.value === value && card.suit === suit);
  }


}