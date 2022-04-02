import { operationStore, query } from "@urql/svelte";
import { get } from "svelte/store";

export const GET_PAGE_BY_URL = `
    query GetPageByUrl($slug: String) {
        pageBy(uri: $slug) {
            content
            title
        }
    }`;

export const GET_MAIN_MENU = `
    query GetMainMenu($name: ID!) {
        menu(id: $name, idType: NAME) {
            menuItems {
                nodes {
                    url
                    label
                }
            }
        }
    }`;

export const GET_POSTS = `
    query GetPosts {
        posts {
            nodes {
                title
                slug
            }
        }
    }
    `;

export const GET_POST_BY_SLUG = `
    query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            title
            content
        }
    }
    `;

export const getQuery = (queryString, params?) => {
  const queryStore = operationStore(queryString, params);
  query(queryStore);

  const reexecute = (params) => {
    const current = get(queryStore);
    current.variables = { ...current.variables, ...params };
    current.reexecute();
  };

  return { queryStore, reexecute };
};
