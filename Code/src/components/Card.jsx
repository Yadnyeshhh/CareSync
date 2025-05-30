import 'react';
import { FaCircleUser } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
    const square = props.square;
    const index = props.index;

    const navigate = useNavigate();
    const gotoUpdates = () => {
        navigate("/update-vitals");
    };

    // console.log(square);
    return (
        square &&
        <div key={index} className="square" onClick={gotoUpdates}>
            <div
                className="square-header" 
                style={{ backgroundColor: "#000000" }}
            >
            <div className="square-text">
                <h2 className="square-title">{square.name}</h2>
                <p className="treatment-text">{square.treatment}</p>
            </div>
            <div className="profile-circle">
                <img 
                src={square.profilePic} 
                alt={square.name} 
                className="profile-image"
                />
            </div>
            </div>
            <div className="square-footer">
            <button className="icon-button">
                <FaCircleUser />
            </button>
            <button className="icon-button">
                <CgWebsite />
            </button>
            </div>
        </div>
    );
}
