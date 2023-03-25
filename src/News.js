import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import "./news.css";
import spinner from "./images/spinner.svg";

function News(props) {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setpagination] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [totalResults, setTotalResults] = useState();

  let defaultCountry = "in";
  let defaultCategory = "top";
  let defaultLanguage = "en";
  let country = !props.country ? defaultCountry : props.country;
  let category = !props.category ? defaultCategory : props.category;
  let language = !props.language ? defaultLanguage : props.language;

  let pages = [
    "",
    "1679714298a2de08ea2d2a498cc1ff60d1309b07d6",
    "1679712205a3263e8c9b01bcbbad91688b2b9dfe89",
    "1679701703d9ed5546503c99b3e250b8e98181c0ef",
    "167968519052b563a5af47082a5ed35eee56b36e58",
    "16796832181ba39f034b2806c54eb274c1fc1448ee",
  ];

  function handleNext() {
    if (pagination >= 0) {
      setpagination(pagination + 1);
    }
  }

  function handlePre() {
    if (pagination > 0) {
      setpagination(pagination - 1);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=726f6bdc21db41a59facc9db4cec16ee`
      // `https://newsdata.io/api/1/news?apikey=pub_19355292bbd3ba50b2b1a59603f56332bac1a&country=in&language=en`
      // `https://newsdata.io/api/1/news?apikey=pub_1936819bd9461c6d43bb39bc52d9fc1c0b956&country=${country}&language=en&category=${category}`
      // `https://newsdata.io/api/1/news?apikey=pub_19403b0e568f259b089e0dc8b0e36018f6bcc&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
      // `https://newsdata.io/api/1/news?apikey=pub_19412b095a8b70b8b057353bd2cdf9b504666&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
      `https://newsdata.io/api/1/news?apikey=pub_19415d72f2d551d88fea08420801d0114b838&country=${country}&language=${language}&category=${category}&page=${pages[pagination]}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNewsList(data.results);
        setTotalPage(data.nextPage);
        setTotalResults(data.totalResults)
      });
  }, [category, country, language, pagination]);

  if (loading) {
    return (
      <section className="loading-section">
        <img src={spinner} alt="loading" className="loading" />
      </section>
    );
  }
  return (
    <div className="newsInner">
      <div className={totalResults === 0 ? "error" : "newsSec"}>
        {totalResults === 0 ? <div className="no-news">No News Found</div> : newsList.map(
          (news, id) =>
            // newsList.length - 1 > id && (
              <NewsList
                key={id}
                image={news.image_url}
                author={news.author}
                title={news.title}
                link={news.link}
                source={news.source_id}
              />
            // )
        )}
      </div>
      {totalPage !== null && (
        <div className="pagination">
          <button onClick={handlePre} disabled={pagination < 1}>
            Previous
          </button>
          <button onClick={handleNext} disabled={pagination > 3}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default News;
