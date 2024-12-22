import Card from "../card/Card";
import style from './Body.module.css'

const Body = ({ cards, handleClick }) => (
    <div className={style.body}>
        {cards.map((card, index) => (
            <Card
                key={index}
                name={card.name}
                isFriend={card.isFriend}
                idx={index}
                handleClick={handleClick}
            />
        ))}
    </div>
);

export default Body;