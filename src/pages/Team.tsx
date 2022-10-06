import { Link } from "react-router-dom";
import BigLogoImage from "../components/BigLogoImage";

const Team = () => {
  return (
    <main className="layout_main flex row mobile--column content--space-between mobile-content--start items--start">
      <div className="main_section left about desktop-only flex column content--space-between items--start">
        <div className="section_logo">
          <Link to="/">
            <BigLogoImage />
          </Link>
        </div>
      </div>

      <div className="main_section right flex column content--space-between items--start">
        <div className="section_title_container flex row content--space-between items--start">
          <h1 className="section_title red">Команда</h1>
        </div>
        <div className="section_content">
          <p className="team_person">
            <span className="position">Руководитель:</span>
            <br />
            <span className="name">Антонина Пучковская</span>
          </p>
          <p className="team_person">
            <span className="position">Менеджер:</span>
            <br />
            <span className="name">Лада Зимина</span>
          </p>
          <p className="team_person">
            <span className="position">Главный редактор и куратор контента:</span>
            <br />
            <span className="name">Александр Белоусов</span>
          </p>
          <p className="team_person">
            <span className="position">Куратор технической разработки:</span>
            <br />
            <span className="name">Александр Ботенков</span>
          </p>
          <p className="team_person">
            <span className="position">Старший разработчик:</span>
            <br />
            <span className="name">Илья Черепанов</span>
          </p>
          <p className="team_person">
            <span className="position">Дизайн:</span>
            <br />
            <span className="name">Андрей Шелютто, Ирина Чекмарева</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Team;
