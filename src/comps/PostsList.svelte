<script lang="ts">
  import { getQuery, GET_POSTS } from "@/utils/queries";

  import { link } from "svelte-spa-router";

  const { queryStore: posts } = getQuery(GET_POSTS);
</script>

{#if $posts.fetching}
  <p>Loading...</p>
{:else if $posts.error}
  <p>Error: {$posts.error.message}</p>
{:else}
  <ul>
    {#each $posts.data.posts.nodes as post}
      <li><a href="/post/{post.slug}" use:link>{post.title}</a></li>
    {/each}
  </ul>
{/if}
