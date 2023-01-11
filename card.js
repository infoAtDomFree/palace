const Card = (() => {
    let sms;
    let suit;
    let rank;
    let isInDeck;
    let isInDiscardPile;
    let isNuke;
    let isWild;
    
    let isDown;
    let isUp;
    let isInHand;
    
    let isFlipped;
    let isNuked;
    let heldByPlayer;


    return {
        Init: (SMS, id) => {
            sms = SMS;
            rank = id % 13;
            suit = (id - rank) / 13;
            isInDeck = true;
            isInDiscardPile = false;
            isNuke = rank === 8;
            isWild = rank === 0;
            isDown = isUp = isFlipped = false;
            isNuked = false;
            heldByPlayer = 0;
            isInHand = false;
        },
        CanPlay: (DiscardPile) => {
            return false;
        },
        Play: (DiscardPile) => {
            // if 4 in a row of same rank, nukes the discard pile
            // if isNuke also nukes the discard pile
            return false;
        },
        Flip: () => {
            return false;
        },
        CanFlip: (Player) => {
            // rules:
            // 1) can't have any cards in hand
            // 2) can't have any up cards
            // 3) can't have any flipped down cards.
            return false;
        },
        CanPlaceUpCard: (Player) => {
            
        },
        PlaceAsUpCard: (Player) => {

        }

        
    };
})();

export default Card;

