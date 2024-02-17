//This File is created by Krishna
import React, { useState, useEffect } from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Banner from "../Assets/banner.png";
import ArticleCard from "../Components/ArticleCard/articleCard";
import { ArticleServices } from "../Services/articleServices";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchArticles();
    }, [searchTerm]);

    const fetchArticles = () => {
        setLoading(true);
        ArticleServices.getArticlesBySearchTerm(searchTerm)
            .then(data => {
                setArticles(data.response.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching articles.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSearchTermChange = (value) => {
        setSearchTerm(value);
    };

    return (
        <>
            <Header />
            <main>
                <div className="banner" style={{backgroundImage: `url(${Banner})`}}>
                    <div className="search_bar">
                        <input
                            type="text"
                            placeholder="Search for articles"
                            value={searchTerm}
                            onChange={(e) => handleSearchTermChange(e.target.value)}
                        />
                    </div>
                </div>
                <section className="media">
                    <div className="container">
                        <h2>Search Result: {searchTerm}</h2>
                        <div className="article_wrap">
                            {articles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    headline={article.fields.headline}
                                    thumbnail={article.fields.thumbnail}
                                    sectionName={article.sectionName}
                                    webPublicationDate={article.webPublicationDate}
                                    webUrl={article.webUrl}
                                    tags={article.fields.tags}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;