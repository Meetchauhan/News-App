import blankImage from "./images/blank-image.png";
import "./newsList.css";
import newsImage from "./images/news.jpg";

function NewsList(props) {
  return (
    <div className="newsWrapSec">
      <a href={props.link} target="_blank" rel="noreferrer" className="link">
        <div className="news-wrapper">
          <div
            className="image"
            style={{
              backgroundImage: `url(${props.image ? props.image : newsImage})`,
            }}
          >
            <img src={blankImage} alt={props.author} />
          </div>
          <div className="content">
            <div className="source">Source : {props.source}</div>
            <div className="title">{props.title}</div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default NewsList;
