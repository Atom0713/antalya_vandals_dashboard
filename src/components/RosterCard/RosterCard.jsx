import style from "./RosterCard.module.css";

const RosterCard = (props) => {
    const { item } = props;

    return (
        <div className={style.roaster_card}>
            <img className={style.roaster_card__image} src={item.imageUrl} alt={item.name} width="600" height="300" />
            <div className={style.roaster_card__desc}>
                <h2 className={style.roaster_card__desc_name}>{item.name}</h2>
                <h3 className={style.roaster_card__desc_position}>{item.position}</h3>
                <p className={style.roaster_card__desc_text}>{item.height} cm | {item.weight} kg</p>
            </div>
        </div>
    )
}

export default RosterCard;