import { useState } from "react";
import Card from "./Card";
import { jsonData as data } from "../../data/mocks/restaurant";

const Body = () => {
    const [cards, setCards] = useState(data?.cards);
    const [filtered, setFiltered] = useState(false);

    const filterTopRated = () => {
        if (filtered) {
            setCards(data?.cards);
            setFiltered(false);
        }
        else {
            const filteredCards = cards?.filter((card) => card.rating >= 4.3);
            setCards(filteredCards);
            setFiltered(true);
        }
    };

    const filterSearched = (e) => {
        e.preventDefault();
        const searchValue = document.querySelector(".search-bar input").value;
        if (searchValue === "") {
            return;
        }
        else {
            const filteredCards = data?.cards.filter((card) =>
                card.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setCards(filteredCards);
            document.querySelector(".search-bar input").value = "";
            setFiltered(false);
        }
    };

    return (
        <div className="body">
            <div className="search-bar">
                <form className="search-bar-container">
                    <input type="text" placeholder="Search..." />
                    <button onClick={filterSearched}>🔍</button>
                </form>
            </div>
            <div className="filter-btn">
                <button onClick={filterTopRated}>{(filtered ? "Show All" : "Filter Top Rated")}</button>
            </div>
            <div className="cards-container">
                {(cards?.length) ? (cards.map((card, index) => (
                    <Card
                        key={index}
                        cover={card.cover}
                        name={card.name}
                        desc={card.desc}
                        tags={card.tags}
                        deliveryTime={card.deliveryTime}
                        rating={card.rating}
                    />
                ))) : (<h1>No data found.</h1>)}
            </div>
        </div>
    );
};

export default Body;