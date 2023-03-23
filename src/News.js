import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import "./news.css";
import spinner from "./images/spinner.svg";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=726f6bdc21db41a59facc9db4cec16ee`
      `https://newsdata.io/api/1/news?apikey=pub_19355292bbd3ba50b2b1a59603f56332bac1a&country=in&language=en`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNewsList(data.results);
      })
  }, []);

  if (loading) {
    return (
      <section className="loading-section">
        <img src={spinner} alt="loading" className="loading" />
      </section>
    );
  }
  return (
    <div className="newsInner">
      <div className="newsSec">
        {newsList.map((news, id) => (
          <NewsList
            key={id}
            image={news.image_url}
            author={news.author}
            title={news.title}
            link={news.link}
            source={news.source_id}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
