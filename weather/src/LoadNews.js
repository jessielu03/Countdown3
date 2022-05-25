import * as React from 'react';
import { useState } from "react";
import './App.css';

function LoadNews (props) {
    const [news, setNews] = useState(null);
    const [title, setTitle] = useState("");
    const [byline, setByline] = useState("");
    const [abstract, setAbstract] = useState("");
    const [link, setLink] = useState("");

    const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=J7DfQrdeb568vCh4cg1unTPEzkW2nP5N";

    const generateNews = () => {
        console.log("getting")
        fetch(url)
        .then((res) => res.json())
        .then((data) => setNews(data.results));

        console.log(news);
        setTitle(news[0].title);
        setByline(news[0].byline);
        setAbstract(news[0].abstract);
        setLink(news[0].url);

      }


    return (
        <>
            <button onClick = {generateNews}>Load News Article</button>
            <h3>{title}</h3>
            <h3>{byline}</h3>
            <p>{abstract}</p>
            <a href={link}>{link}</a>
         </>
    );
}

export default LoadNews;