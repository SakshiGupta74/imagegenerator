import { useState,useContext } from "react";
import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import "./imagegenerator.css"
// import { useState, useContext } from "react";

const ImageGenerator = () => {
    // const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        try {
            const res = await fetch(`/api/v1/images`, {
                method: "POST",
                body: JSON.stringify({
                    searchText: searchText,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("authorization"),

                },
            });
            const data = await res.json();
            if (data?.status === 'success') {
                setImgSrc(data.data.imageUrl);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar page="imageGenerator" />
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src={imageSrc} />
                    <input onChange={(e) => { func(e) }} />
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
};

export default ImageGenerator;