import style from './Card.module.css'

const Card = ({ name, isFriend, idx, handleClick }) => {

    return (
        < div className={style.card} >
            <h3>{name}</h3>
            <button className={`${isFriend ? style.remove : style.add} ${style.btn}`} onClick={() => handleClick(idx)}>{isFriend ? "Remove" : "Add"}</button>
        </div >
    )
};

export default Card;