import PageLayout from "../components/PageLayout";
import { useParams } from "react-router-dom";
import { ARTICLES } from "../utils/constants";

const SingleArticle = () => {
  const { id } = useParams();
  const article = ARTICLES.find((article) => article.slug === id);
  return article ? (
    <PageLayout
      breadcrumbs={[
        { label: "Кабинет", link: "/cabinet" },
        { label: "Статьи", link: "/articles", active: true }
      ]}
    >
      <article className="article_container">
        <h1 className="article_title">{article.title}</h1>

        <div className="article_author flex row content--start items--start">
          <div className="article_author_point">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
            </svg>
          </div>
          <div className="article_author_name">Автор: {article.author}</div>
        </div>
        {article.content}
      </article>
    </PageLayout>
  ) : (
    <div>Error 404</div>
  );
};

export default SingleArticle;
