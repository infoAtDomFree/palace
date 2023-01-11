const Deck = (() => {
    let sms;
    let cards = [];
    return {
        Init: (SMS) => sms = SMS,
        AddCard: (Card) => {
            cards.push(Card);
        },
        Take: (Player) => {
            const ret = cards.pop();
            ret.isInHand = true;
            ret.heldByPlayer = Player;
        },
        IsEmpty: () => {
            return cards.length == 0;
        },
        Deal: (Player1, Player2, Player3, Player4) => {
            //shuffle and deal cards out.
            return false;
        }
    };
})();

export default Deck;