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
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=726f6bdc21db41a59facc9db4cec16ee'
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNewsList(data.articles);
      });
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
      <div className="newsSec">Demo
        {newsList?.map((news, id) => (
          <NewsList
            key={id}
            image={news.urlToImage}
            author={news.author}
            title={news.title}
            link={news.url}
            source={news.source.name}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
