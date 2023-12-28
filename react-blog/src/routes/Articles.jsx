import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SingleArticle from "../components/SingleArticle";
import { useArticles } from "../hooks/useArticle";

const Articles = () => {
  const [articles, state] = useArticles();

  useEffect(() => {
    document.body.classList.add("article-page");
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="recent-post latest-content">
          <h1>latest content</h1>
          <div className="container__post container__content">
            {state === "loaded" ? (
              articles.map((article) => (
                <SingleArticle article={article} key={article.id} />
              ))
            ) : (
              <span>loading...</span>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Articles;
