import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import "./news.css";
import spinner from "./images/spinner.svg";

function News(props) {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setpagination] = useState(-1);
  let defaultCountry = "in";
  let defaultCategory = "top";
  let defaultLanguage = "en";
  let country = !props.country ? defaultCountry : props.country;
  let category = !props.category ? defaultCategory : props.category;
  let language = !props.language ? defaultLanguage : props.language;
  let pages = [
    "1679570375f95ef5a8098086758162178535898ae6",
    "16795699659b52daf1c7e5c97316088790a8e408b4",
    "16795685495d29beb6eab4f581316534407e4c29b8",
    "16795674923691551b1f1f6a29f9e3cc79e94412b0",
    "167956552984681e2e70cab0f57d96c9f0d05ab196",
  ];

  function handleNext() {
    setpagination(pagination + 1);
  }
  console.log(pages[pagination]);

  useEffect(() => {
    setLoading(true);
    fetch(
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=726f6bdc21db41a59facc9db4cec16ee`
      // `https://newsdata.io/api/1/news?apikey=pub_19355292bbd3ba50b2b1a59603f56332bac1a&country=in&language=en`
      // `https://newsdata.io/api/1/news?apikey=pub_1936819bd9461c6d43bb39bc52d9fc1c0b956&country=${country}&language=en&category=${category}`
      // `https://newsdata.io/api/1/news?apikey=pub_19403b0e568f259b089e0dc8b0e36018f6bcc&country=${country}&language=${language}&category=${category}`
      // `https://newsdata.io/api/1/news?apikey=pub_19412b095a8b70b8b057353bd2cdf9b504666&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
      `https://newsdata.io/api/1/news?apikey=pub_19415d72f2d551d88fea08420801d0114b838&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNewsList(data.results);
      });
  }, [category, country, language, pages, pagination]);
  // console.log(loading);
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
        {newsList.map(
          (news, id) =>
            id < 9 && (
              <NewsList
                key={id}
                image={news.image_url}
                author={news.author}
                title={news.title}
                link={news.link}
                source={news.source_id}
              />
            )
        )}
      </div>
      <div>
        <button>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default News;
