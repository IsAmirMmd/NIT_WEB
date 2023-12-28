import Header from "../components/Header";
import arrowImage from "../assets/images/Right-Arrow.svg";
import Footer from "../components/Footer";
import { useArticles } from "../hooks/useArticle";
import SingleArticle from "../components/SingleArticle";
/* eslint-disable react/no-unescaped-entities */

const sideBarLinks = [
  { text: "Lorem ipsum dolor sit." },
  { text: "Lorem ipsum dolor sit." },
  { text: "Lorem ipsum dolor sit." },
  { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
];

const Home = () => {
  const [articles, state] = useArticles();

  return (
    <>
      <Header />

      <div className="wave-block">
        <div className="hero-title">
          <h1>Hey there, I'm Amir Mohammad 👋</h1>
        </div>
        <div className="hero-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 1440 70"
            fill="none"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z" />
          </svg>
        </div>
      </div>

      <main className="container home-page">
        <section className="recent-post">
          <h4>RECENTLY PUBLISHED</h4>
          <div className="container__post">
            {state === "loaded" ? (
              articles
                .slice(0, 4)
                .map((article) => (
                  <SingleArticle article={article} key={article.id} />
                ))
            ) : (
              <span>loading...</span>
            )}
          </div>
        </section>

        <aside className="popular-content">
          <h4>POPULAR CONTENT</h4>
          <ul className="content--list">
            {sideBarLinks.map((link, index) => (
              <li key={index} className="popular--list__item">
                <span className="list--item__icon">
                  <img src={arrowImage} alt="arrow icon" />
                </span>
                <p>{link.text}</p>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <Footer />
    </>
  );
};

export default Home;
