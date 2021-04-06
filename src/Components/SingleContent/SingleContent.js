import { Badge } from "@material-ui/core";
import {unavailable } from '../config/config';
import "./SingleContent.css";

//import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  location,
  type,
}) => {
  return (
        <div className ="media">
            <Badge badgeContent ={type} color={ type === "Full Time" ? "primary" : "secondary" }/>
            <img className = "poster" src = {poster ?`${poster}`: unavailable} alt = {title} />
            <b className = "title">{title}</b>
            <span className = "subTitle">
                {location}
                <span className = "subTitle">{date}</span>
            </span>
        </div>
    );
};

export default SingleContent;