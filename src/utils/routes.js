import Home from "../pages/Home";
import Cabinet from "../pages/Cabinet";
import Collection from "../pages/Collection";
import Articles from "../pages/Articles";
import SingleArticle from "../pages/SingleArticle";
import About from "../pages/About";
import Map from "../pages/Map";
import Team from "../pages/Team";
import CollectionDetailed from "../pages/CollectionDetailed";
import { COLLECTION_LIST_URL } from "./urls";

const routes = [
  {
    path: "/",
    renderElement: () => <Home />,
    pageTitle: "Wunderkammer",
  },
  {
    path: "cabinet",
    renderElement: () => <Cabinet />,
    pageTitle: "Кабнет | Wunderkammer",
  },
  {
    path: "collection",
    renderElement: () => <Collection />,
    pageTitle: "Коллекция | Wunderkammer",
  },
  {
    path: "articles",
    renderElement: () => <Articles />,
    pageTitle: "Статьи | Wunderkammer",
  },
  {
    path: "single-article/:id",
    renderElement: () => <SingleArticle />,
    pageTitle: "Статьи | Wunderkammer",
  },
  {
    path: "about",
    renderElement: () => <About />,
    pageTitle: "О проекте | Wunderkammer",
  },
  {
    path: "map",
    renderElement: () => <Map />,
    pageTitle: "Карта | Wunderkammer",
  },
  {
    path: "team",
    renderElement: () => <Team />,
    pageTitle: "Команда | Wunderkammer",
  },
  {
    path: COLLECTION_LIST_URL,
    renderElement: () => <CollectionDetailed />,
    pageTitle: "Коллекция | Wunderkammer",
  },
  {
    path: "*",
    renderElement: () => <>404</>,
    pageTitle: "Страница не найдена",
  },
];

export default routes;
