<script lang="ts">
  import Catch404 from "@/comps/Catch404.svelte";
  import Error from "@/comps/Error.svelte";
  import { getQuery, GET_PAGE_BY_URL } from "@/utils/queries";
  import WordpressContent from "@/comps/WordpressContent.svelte";

  export let params = { slug: "" };
  export let mustExist = true;
  const { queryStore: page, reexecute } = getQuery(GET_PAGE_BY_URL, {
    slug: params.slug,
  });
  $: reexecute(params);
</script>

{#if $page.fetching}
  <p>Loading...</p>
{:else if $page.error}
  <Error msg={$page.error.message} slug={params.slug} />
{:else if $page.data.pageBy !== null}
  <WordpressContent
    title={$page.data.pageBy.title}
    content={$page.data.pageBy.content}
  />
{:else if mustExist}
  <Catch404 slug={params.slug} />
{/if}
