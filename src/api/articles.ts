import API from "./config";

export const ArticlesAPI = {
  async getAllArticles() {
    const { data } = await API.get("http://localhost:8000/wp-json/wp/v2/posts?_embed=author,wp:featuredmedia");
    return data;
  },
  async getArticleBySlug(slug: string | undefined) {
    const { data } = await API.get(`http://localhost:8000/wp-json/wp/v2/posts?slug=${slug}&_embed=author,`);
    return data;
  }
};
