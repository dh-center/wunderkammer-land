<script lang="ts">
  import active from "svelte-spa-router/active";
  import { link } from "svelte-spa-router";
  import { getQuery, GET_MAIN_MENU } from "@/utils/queries";
  import { MAIN_MENU_ID } from "@/utils/constants";

  const { queryStore: menu } = getQuery(GET_MAIN_MENU, { name: MAIN_MENU_ID });
</script>

{#if $menu.fetching}
  <p>Loading...</p>
{:else if $menu.error}
  <p>Error: {$menu.error.message}</p>
{:else}
  <nav>
    <a href="/" use:link>
      <img src="./assets/logo.png" alt="wunderkammer logotype" />
    </a>
    <ul>
      {#each $menu.data.menu.menuItems.nodes as { url, label }}
        <li><a href={url} use:link use:active>{label}</a></li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  nav :global(a.active) {
    text-decoration: underline;
  }

  nav,
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  nav {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  nav li {
    display: block;
  }

  nav li:not(:last-child) {
    margin-right: 20px;
  }

  img {
    max-width: 200px;
    object-fit: contain;
    margin-left: -20px;
  }
</style>
