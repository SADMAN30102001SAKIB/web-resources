const Card = ({ cover, name, desc, tags, deliveryTime, rating }) => (
    <div className="card">
        <div>
            <div className="card-image">
                <img src={cover} alt="restaurant" />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <p>{desc}</p>
                <div className="food-tags">
                    {
                        tags.map((tag, index) => <span key={index} className="food-tag">{tag}</span>)
                    }
                </div>
            </div>
        </div>
        <div className="card-info">
            <p className="card-info-item">{deliveryTime} mins</p>
            <p className="card-info-item">{rating} stars</p>
        </div>
    </div>
);

export default Card;