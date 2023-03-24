import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import "./news.css";
import spinner from "./images/spinner.svg";

function News(props) {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setpagination] = useState(0);
  let defaultCountry = "in";
  let defaultCategory = "top";
  let defaultLanguage = "en";
  let country = !props.country ? defaultCountry : props.country;
  let category = !props.category ? defaultCategory : props.category;
  let language = !props.language ? defaultLanguage : props.language;
  let pages = [
    "16796230633e386362be4555179d2561f0444aebff",
    "1679618126827853b7408a2f3334c1e991fb3dcc66",
    "167960802492b2a0d4686885184513f5197e4cbe6b",
    "1679603940b42d2cbcec1d2671b007cb2f30af8161",
    "1679602564817f47eea9da4c17b3251e7aba6c9977",
  ];
  // console.log(country);
  function handleNext() {
    if (pagination >= 0) {
      setpagination(pagination + 1);
    }
  }

  function handlePre() {
    if (pagination > 0) {
      setpagination(pagination - 1)
    }
  }
  // console.log(pages[pagination]);

  useEffect(() => {
    setLoading(true);
    fetch(
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=726f6bdc21db41a59facc9db4cec16ee`
      // `https://newsdata.io/api/1/news?apikey=pub_19355292bbd3ba50b2b1a59603f56332bac1a&country=in&language=en`
      // `https://newsdata.io/api/1/news?apikey=pub_1936819bd9461c6d43bb39bc52d9fc1c0b956&country=${country}&language=en&category=${category}`
      // `https://newsdata.io/api/1/news?apikey=pub_19403b0e568f259b089e0dc8b0e36018f6bcc&country=${country}&language=${language}&category=${category}`
      `https://newsdata.io/api/1/news?apikey=pub_19412b095a8b70b8b057353bd2cdf9b504666&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
      // `https://newsdata.io/api/1/news?apikey=pub_19415d72f2d551d88fea08420801d0114b838&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNewsList(data.results);
      });
  }, [category, country, language,pagination]);
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
      <div className="pagination">
        <button onClick={handlePre} disabled={pagination < 1}>Previous</button>
        <button onClick={handleNext}disabled={pagination > 3}>Next</button>
      </div>
    </div>
  );
}

export default News;
