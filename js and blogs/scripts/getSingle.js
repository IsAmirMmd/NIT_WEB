const htmlElement = document.createElement("article")
htmlElement.classList.add("post--box")

const webTitle = document.querySelector(".container.hero-section h1")

class UI {
    constructor(post) {
        webTitle.innerText = post.title

        const htmlFormat = sampleContent;
        htmlElement.innerHTML = htmlFormat;

        this.stylize()
    }
    stylize() {
        const allParagraph = htmlElement.querySelectorAll("p");
        allParagraph.forEach(item => {
            item.classList.add("post--box__text")
        })

        const ulList = htmlElement.querySelector("ul");
        ulList.classList.add("content--list")

        const liInList = htmlElement.querySelectorAll("li");
        liInList.forEach(li => {
            li.classList.add("popular--list__item");

            const child = document.createElement("span");
            child.classList.add("list--item__icon");

            const imgElement = document.createElement("img");
            imgElement.src = "../assets/images/Right-Arrow.svg";
            imgElement.alt = "arrow icon";

            child.appendChild(imgElement);

            li.insertBefore(child, li.firstChild);
        });

        this.showInDOM()
    }
    showInDOM() {
        const container = document.querySelector(".container__post")
        container.appendChild(htmlElement)
        this.createTable()
    }
    createTable() {
        const ulElement = document.querySelector(".popular-content .content--list");
        const h2Elements = htmlElement.querySelectorAll("h2")
        h2Elements.forEach((h2, index) => {
            let liElement = document.createElement('li');
            liElement.classList.add("popular--list__item")
            let aElement = document.createElement('a');

            aElement.textContent = h2.textContent;
            h2.id = "part-" + (index + 1);
            aElement.href = '#part-' + (index + 1);

            liElement.appendChild(aElement);

            ulElement.appendChild(liElement);
        });
        ulElement.firstChild.firstChild.classList.add("active-link")

        // adding style base on click
        const allLinks = ulElement.querySelectorAll("a")
        allLinks.forEach(link => {
            link.addEventListener("click", () => {
                allLinks.forEach(eachLink => {
                    eachLink.classList.remove("active-link")
                })
                link.classList.toggle("active-link")
            })
        })
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('');

    fetch(`http://127.0.0.1:3000/api/articles/${id}`).then(res => res.json())
        .then(data => {
            new UI(data)
            document.title = data.title
        })
        .catch(err => console.error(err))

})

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