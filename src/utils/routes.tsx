import Home from "../pages/Home";
import Cabinet from "../pages/Cabinet";
import Collection from "../pages/Collection";
import Articles from "../pages/Articles";
import SingleArticle from "../pages/SingleArticle";
import About from "../pages/About";
import Map from "../pages/Map";
import Team from "../pages/Team";
import CollectionDetailed from "../pages/CollectionDetailed";
import InteractiveMap from "../pages/InteractiveMap";
import {
  ABOUT_URL,
  ARTICLES_URL,
  CABINET_URL,
  COLLECTION_URL,
  COLLECTION_LIST_URL,
  INTERACTIVE_MAP_URL,
  MAP_URL,
  SINGLE_ARTICLE_URL,
  TEAM_URL
} from "./urls";

type Route = {
  path: string;
  renderElement: () => JSX.Element;
  pageTitle: string;
};

const routes: Route[] = [
  {
    path: "/",
    renderElement: () => <Home />,
    pageTitle: "Wunderkammer"
  },
  {
    path: CABINET_URL,
    renderElement: () => <Cabinet />,
    pageTitle: "Кабнет | Wunderkammer"
  },
  {
    path: COLLECTION_URL,
    renderElement: () => <Collection />,
    pageTitle: "Коллекция | Wunderkammer"
  },
  {
    path: ARTICLES_URL,
    renderElement: () => <Articles />,
    pageTitle: "Статьи | Wunderkammer"
  },
  {
    path: SINGLE_ARTICLE_URL,
    renderElement: () => <SingleArticle />,
    pageTitle: "Статьи | Wunderkammer"
  },
  {
    path: ABOUT_URL,
    renderElement: () => <About />,
    pageTitle: "О проекте | Wunderkammer"
  },
  {
    path: MAP_URL,
    renderElement: () => <Map />,
    pageTitle: "Карта | Wunderkammer"
  },
  {
    path: TEAM_URL,
    renderElement: () => <Team />,
    pageTitle: "Команда | Wunderkammer"
  },
  {
    path: COLLECTION_LIST_URL,
    renderElement: () => <CollectionDetailed />,
    pageTitle: "Коллекция | Wunderkammer"
  },
  {
    path: INTERACTIVE_MAP_URL,
    renderElement: () => <InteractiveMap />,
    pageTitle: "Карта | Wunderkammer"
  },
  {
    path: "*",
    renderElement: () => <>404</>,
    pageTitle: "Страница не найдена"
  }
];

export default routes;
