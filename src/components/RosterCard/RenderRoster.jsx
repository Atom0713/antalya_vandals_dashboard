import style from "./RenderRoster.module.css";

const RenderRoaster = (props) => {
    const { roaster } = props;

    return (
        roaster.map((item, i) => (
            <div className={style.roaster_card}>
                <img className={style.roaster_card__image} src={item.image_url} alt={item.name} width="600" height="300" />
                <div className={style.roaster_card__desc}>
                    <h2 className={style.roaster_card__desc_name}>{item.name}</h2>
                    <h3 className={style.roaster_card__desc_position}>{item.position}</h3>
                    <p className={style.roaster_card__desc_text}>{item.height} | {item.weight} | {item.position}</p>
                </div>
            </div>
        ))
    )
}

export default RenderRoaster;