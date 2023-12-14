document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:3000/api/articles").then(res => res.json()).then(data =>
        window.location.pathname.includes("articles") ? showInDOM("all", data) : showInDOM("some", data)
    ).catch(err => console.error(err))
})

const postContainers = document.querySelector(".container__post")

function showInDOM(location = "some", posts) {
    let tempElement = ""
    location === "some" ? posts.slice(0, 4).map(post => {
        tempElement += `
        <article class="post--box" data-id="${post.id}">
            <a href="./\pages/\single-article.html?=${post.id}">
                <h5>${post.title}</h5>
                <p class="post--box__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci, vitae eum. Provident exercitationem, quia, consequatur
                    tenetur libero quos, necessitatibus quam iure officia error cum
                    iste enim minus nostrum perspiciatis ut aliquid soluta!
                    Voluptatem, alias officiis?
                </p>
                <span> Read More </span>
            </a>
        </article>
        `;
    }) : posts.map(post => {
        tempElement += `
        <article class="post--box" data-id="${post.id}">
            <a href="./\single-article.html?=${post.id}">
                <h5>${post.title}</h5>
                <p class="post--box__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci, vitae eum. Provident exercitationem, quia, consequatur
                    tenetur libero quos, necessitatibus quam iure officia error cum
                    iste enim minus nostrum perspiciatis ut aliquid soluta!
                    Voluptatem, alias officiis?
                </p>
                <span> Read More </span>
            </a>
        </article>
        `;
    })

    postContainers.innerHTML = tempElement
}