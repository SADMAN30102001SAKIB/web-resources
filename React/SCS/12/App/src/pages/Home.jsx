import { useState } from "react";
import Body from "../components/body/body/Body";
import Header from "../components/header/Header";
import { jsonData as data } from "../data/mocks/friends";

const Home = () => {
    const [cards, setCards] = useState(data?.cards);

    const handleClick = (idx) => setCards(() =>
        cards.map((item, index) =>
            (idx == index) ? { ...item, isFriend: !item.isFriend } : item
        )
    );

    return (
        <>
            <Header cards={cards} />
            <Body
                cards={cards}
                handleClick={handleClick}
            />
        </>
    );
};

export default Home;