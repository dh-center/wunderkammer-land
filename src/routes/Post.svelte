<script lang="ts">
  import { link } from "svelte-spa-router";
  import Catch404 from "@/comps/Catch404.svelte";
  import Error from "@/comps/Error.svelte";
  import { getQuery, GET_POST_BY_SLUG } from "@/utils/queries";
  import WordpressContent from "@/comps/WordpressContent.svelte";

  export let params = { slug: "" };

  const { queryStore: post, reexecute } = getQuery(GET_POST_BY_SLUG, params);
  $: reexecute(params);
</script>

{#if $post.fetching}
  <p>Loading...</p>
{:else if $post.error}
  <Error msg={$post.error.message} slug={params.slug} />
  <p>Error: {$post.error.message}</p>
{:else if $post.data.post !== null}
  <WordpressContent
    title={$post.data.post.title}
    content={$post.data.post.content}
  />
{:else}
  <Catch404 slug={params.slug} />
{/if}

<a href="/blog" use:link>Все записи в блоге</a>
