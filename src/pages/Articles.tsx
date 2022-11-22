import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticlesAPI } from "../api/articles";
import BigLogoImage from "../components/BigLogoImage";

const Articles = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [articles, setArticles] = useState([]);
  const [isAriclesLoaded, setIsArticlesLoaded] = useState(false);

  useEffect(() => {
    ArticlesAPI.getAllArticles().then((res) => {
      setArticles(res);
      setIsArticlesLoaded(true);
    });
  }, []);

  return (
    <main className="layout_main flex row mobile--column content--space-between mobile-content--start items--start">
      <div className="main_section left desktop-only">
        <div className="section_logo">
          <Link to="/">
            <BigLogoImage />
          </Link>
        </div>

        <div className="section_image_wrapper">{imageUrl && <img src={imageUrl} alt="" className="fade_show" />}</div>
      </div>

      <div className="main_section right flex column content--start items--start">
        <h1 className="section_title blue">Статьи</h1>
        <div className="section_content articles_container">
          {isAriclesLoaded
            ? articles.map((article: any) => (
                <div key={article.id} className="articles_block">
                  <Link
                    className="articles_link"
                    to={`/single-article/${article.slug}`}
                    onMouseEnter={() => setImageUrl(article._embedded["wp:featuredmedia"][0].source_url)}
                    onMouseLeave={() => setImageUrl("")}
                  >
                    <div className="articles_title">{article.title.rendered}</div>
                    <div className="articles_author">Автор: {article._embedded.author[0].name}</div>
                  </Link>
                </div>
              ))
            : "Загрузка статей..."}
        </div>
      </div>
    </main>
  );
};

export default Articles;
