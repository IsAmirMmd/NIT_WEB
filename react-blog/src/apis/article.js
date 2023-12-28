import { ARTICLES } from "../constants/api";

export function getArticles() {
    return fetch(`${ARTICLES}`)
        .then((res) => res.json())
        .then((data) => data);
}

export function getSingleArticle(id) {
    return fetch(`${ARTICLES}/${id}`)
        .then((res) => res.json())
        .then((data) => data);
}