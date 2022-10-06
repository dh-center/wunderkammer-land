import Petr from "../assets/images/articles_petr.jpg";
import PageLayout from "../components/PageLayout";

const SingleArticle = () => (
  <PageLayout
    breadcrumbs={[
      { label: "Кабинет", link: "/cabinet" },
      { label: "Статьи", link: "/articles", active: true }
    ]}
  >
    <article className="article_container">
      <h1 className="article_title">
        Приказал подать cамый большой бокал, какой только могли найти.
        <br />
        Три этюда о кубке
      </h1>

      <div className="article_author flex row content--start items--start">
        <div className="article_author_point">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle r="50%" cx="50%" cy="50%" fill="#0000ff" stroke="#0000ff" strokeWidth="0"></circle>
          </svg>
        </div>
        <div className="article_author_name">Автор: Марина Брюханова</div>
      </div>

      <h2 className="article_subtitle">Kубок заздравный</h2>

      <p className="article_content">
        В образах ярких, выдающихся исторических личностей необыкновенно притягательны их человеческие, житейские привычки и
        пристрастия, которые многократно приближают к нам людей прошедших эпох, сокращая временную и социальную дистанцию. В
        этом смысле Петр Великий оставил потомкам исключительное нематериальное наследие, получившее воплощение в конкретных
        материальных памятниках. Мы же, со своей стороны, стремимся через них постичь личность первого российского императора.
      </p>

      <p className="article_content">
        В образах ярких, выдающихся исторических личностей необыкновенно притягательны их человеческие, житейские привычки и
        пристрастия, которые многократно приближают к нам людей прошедших эпох, сокращая временную и социальную дистанцию. В
        этом смысле Петр Великий оставил потомкам исключительное нематериальное наследие, получившее воплощение в конкретных
        материальных памятниках. Мы же, со своей стороны, стремимся через них постичь личность первого российского императора.
      </p>

      <img className="article_image" src={Petr} alt="" />

      <p className="article_content">
        В образах ярких, выдающихся исторических личностей необыкновенно притягательны их человеческие, житейские привычки и
        пристрастия, которые многократно приближают к нам людей прошедших эпох, сокращая временную и социальную дистанцию. В
        этом смысле Петр Великий оставил потомкам исключительное нематериальное наследие, получившее воплощение в конкретных
        материальных памятниках. Мы же, со своей стороны, стремимся через них постичь личность первого российского императора.
      </p>
    </article>
  </PageLayout>
);

export default SingleArticle;
