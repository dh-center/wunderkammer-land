import PageLayout from "../components/PageLayout";
import { useParams } from "react-router-dom";
import { ArticlesAPI } from "../api/articles";
import { useEffect, useState } from "react";

const SingleArticle = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState<any>(null);
  const [isArticleLoaded, setIsArticlesLoaded] = useState(false);

  useEffect(() => {
    ArticlesAPI.getArticleBySlug(id).then((res) => {
      setArticleData(res.length > 0 ? res[0] : null);
      setIsArticlesLoaded(true);
    });
  }, [id]);

  return id ? (
    <PageLayout
      breadcrumbs={[
        { label: "Кабинет", link: "/cabinet" },
        { label: "Статьи", link: "/articles", active: true }
      ]}
    >
      {isArticleLoaded ? (
        articleData ? (
          <article className="article_container">
            <h1 className="article_title">{articleData.title.rendered}</h1>

            <div className="article_author flex row content--start items--start">
              <div className="article_author_point">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
                </svg>
              </div>
              <div className="article_author_name">Автор: {articleData._embedded.author[0].name}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: articleData.content.rendered }}></div>
          </article>
        ) : (
          <p>Статья не найдена</p>
        )
      ) : (
        <p>Загрузка статьи...</p>
      )}
    </PageLayout>
  ) : (
    <div>Error 404</div>
  );
};

export default SingleArticle;
