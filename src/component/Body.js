import {useState} from "react";
import { resData } from "../utils/mockData"
import RestoCards from "./RestoCards";

const Body = () => {

    const [restoList, setRestoList] = useState(resData)
    const [filteredRestoList, setFilteredRestoList] = useState(resData)

    const topRatedFilter = () => {
        let copiedData = [...filteredRestoList]
        let filteredData = copiedData.filter((res) => res?.info.avgRating > 4.5)
        setFilteredRestoList(filteredData)
    }

    const resetFilter = () => {
        setFilteredRestoList(restoList)
    }

    return (
        <div className="resto-container">
            <div>
                <button className="rated-btn" onClick={() => topRatedFilter()}>
                    Top Rated Restaurents
                </button>

                <button className="reset-btn" onClick={() => resetFilter()}>
                    Reset
                </button>
            </div>
            <div className="list">
                {filteredRestoList.map((res) => {
                    return <RestoCards key= {res?.info.id} data = {res?.info}/>
                })}
            </div>
        </div>
    )
}

export default Body;