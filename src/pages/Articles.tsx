import { useState } from "react";
import { Link } from "react-router-dom";
import BigLogoImage from "../components/BigLogoImage";
import { ARTICLES } from "../utils/articlesMock";

const Articles = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

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
          {ARTICLES.map((article) => (
            <div className="articles_block">
              <Link
                className="articles_link"
                to={`/single-article/${article.slug}`}
                onMouseEnter={() => setImageUrl(article.preview)}
                onMouseLeave={() => setImageUrl("")}
              >
                <div className="articles_title">{article.title}</div>
                <div className="articles_author">Автор: {article.author}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Articles;
