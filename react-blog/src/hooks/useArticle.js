import { useEffect, useState } from "react";
import { getArticles } from "../apis/article";

export function useArticles() {
    const [articles, setArticles] = useState([]);
    const [state, setState] = useState("loading");

    useEffect(() => {
        (async () => {
            const allArticles = await getArticles();
            setArticles(allArticles);
            setState("loaded");
        })();
    }, []);

    return [articles, state];
}
