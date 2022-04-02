Это временный лендинг проекта Wunderkammer, пока идёт разработка Сороки. В роли CMS — headless wp.

## Headless Wordpress:
- Развернуть Wordpress
- Плагин https://wordpress.org/plugins/wp-graphql/
- Тема `src/twentytwentytwo-child`, которая добавит публикацию меню в graphql и сделает ссылки внутри wp относительными
- url slugs страниц, требующих дополнительного рендеринга, находятся в `utils/constants.ts`, среди них главная страница и список записей в блоге
- там же id, который нужно дать меню, в самом меню нужно поставить глочку `publish for graphql`
- `/post/%postname%/` в Settings-permalinks

## Front:
- npm i && npm run build
- используется svelte-spa-router, там, где это возможно, включен `use:link`, чтобы добавить `#/` к относительным ссылкам. В контенте из постов wp замена по regexp (WordpressContent.svelte)