import Home from "./Home.svelte";
import Post from "./Post.svelte";
import Blog from "./Blog.svelte";
import Page from "./Page.svelte";

const routes = {
  "/": Home,

  "/blog": Blog,

  "/post/:slug": Post,

  "/:slug": Page,
};

export default routes;
