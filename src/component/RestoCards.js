import { RES_IMG } from "../utils/constant"

const RestoCards = ({data}) => {

    return (
        <div className="resto-card">
                <img className="logo" src={RES_IMG + data.cloudinaryImageId} />
                <h3>{data.name}</h3>
                <p><i>{data.cuisines.join(", ")}</i></p>
                <p>Rating: <b>{data.avgRating}</b></p>
                <p>{data.costForTwo}</p>
                <p>{data.locality}</p>
        </div>
    )
}

export default RestoCards;