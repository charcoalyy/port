import { Link } from "react-router-dom";

const Thumb = ({name, desc, img, link, tags}) => {
    return(
        <Link to={link} className="thumbnail-link">
            <div className="thumbnail">
                <div className="thumbnail-container">
                    <img src={img}></img>
                </div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="tags">
                    {tags && tags.map(tag => {
                        return <p className="tag">{tag}</p>
                    })}
                </div>
            </div>
        </Link>
    )
}

export default Thumb;