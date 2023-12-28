const SingleArticle = ({ article }) => {
    return (<article className="post--box">
        <a href={`/articles/${article.id}`}>
            <h5>{article.title}</h5>
            <p className="post--box__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, vitae eum. Provident exercitationem, quia,
                consequatur tenetur libero quos, necessitatibus quam iure
                officia error cum iste enim minus nostrum perspiciatis ut
                aliquid soluta! Voluptatem, alias officiis?
            </p>
            <span> Read More </span>
        </a>
    </article>);
}

export default SingleArticle;