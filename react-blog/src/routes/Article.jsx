/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import arrowImage from "../assets/images/Right-Arrow.svg";
import Header from "../components/Header";
import { getSingleArticle } from "../apis/article";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const { id } = params;
  const article = await getSingleArticle(id);
  return { article };
}

const parseHTMLContent = (htmlContent) => {
  const parser = new DOMParser();

  const doc = parser.parseFromString(htmlContent, 'text/html');
  const elements = doc.body.children;

  const jsxElements = [];
  const h2Titles = [];

  let liCounter = 0;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const tagName = element.tagName.toLowerCase();
    let jsxElement;

    switch (tagName) {
      case 'h2':
        liCounter += 1;
        const id = `part-${liCounter}`;
        jsxElement = React.createElement('h2', { id }, element.textContent);
        h2Titles.push({ id, text: element.textContent });
        break;

      case 'p':
        jsxElement = React.createElement('p', { className: 'post--box__text' }, element.textContent);
        break;
      case 'img':
        jsxElement = React.createElement('img', { src: element.getAttribute('src'), alt: element.getAttribute('alt') });
        break;
      case 'ul':
        jsxElement = React.createElement('ul', { className: 'content--list' }, [...element.children].map((li, index) => {
          const imgElement = (
            <img
              src={arrowImage}
              alt="arrow icon"
            />
          );

          const listItemContent = (
            <React.Fragment key={`li-${index}`}>
              <span className="list--item__icon">{imgElement}</span>
              <p>{li.textContent}</p>
            </React.Fragment>
          );

          return React.createElement('li', { className: 'popular--list__item' }, listItemContent);
        }));
        break;

      default:
        jsxElement = null;
    }

    if (jsxElement) {
      jsxElements.push(jsxElement);
    }
  }
  return { jsxElements, h2Titles };
};


const Article = () => {
  const { article } = useLoaderData();
  const { jsxElements, h2Titles } = parseHTMLContent(article.id === 1 ? article.content : sampleContent);

  const [activeLink, setActiveLink] = useState("part-1");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    document.body.classList.add("sn-article-page");
    document.title = article.title
  }, []);

  return (<>
    <Header />

    <section className="container hero-section">
      <h1>{article.title}</h1>
    </section>

    <main className="container home-page">
      <section className="recent-post">
        <div className="container__post">
          <article className="post--box">
            {jsxElements}
          </article>
        </div>
      </section>

      <aside className="popular-content">
        <h4>TABLE OF CONTENT</h4>
        <ul className="content--list">
          {h2Titles.map(({ id, text }) => (
            <li key={id}>
              <a className={id === activeLink ? 'active-link' : ''} href={`#${id}`} onClick={() => handleLinkClick(id)}>{text}</a>
            </li>
          ))}
        </ul>
      </aside>
    </main>

    <Footer />
  </>);
}

export default Article;

const sampleContent = `<h2>Lorem ipsum dolor sit amet</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco labori
</p>
<img
  src="https://tur1ng.s3.ir-thr-at1.arvanstorage.ir/web-ta/cover.png?versionId="
  alt="cover image"
/>
<ul>
  <li>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatibus
    illum laborum placeat, eos dolor.
  </li>
  <li>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptates
    adipisci.
  </li>
</ul>

<h2>Lorem ipsum dolor sit amet</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco labori
</p>`