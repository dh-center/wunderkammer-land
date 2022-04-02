<script lang="ts">
  export let title = "";
  export let content = "";

  const updateRelativeLinks = (contentString) =>
    contentString?.replace(/href=\"\//g, 'href="#/');
</script>

{#if title}
  <h2>
    {title}
  </h2>
{/if}
{#if content}
  <div class="postContent">{@html updateRelativeLinks(content)}</div>
{/if}

<style>
  .postContent :global(figure) {
    margin: 0;
  }
  .postContent :global(figure img) {
    max-width: 100%;
    object-fit: contain;
    height: auto;
  }
  .postContent :global(figure figcaption) {
    font-style: italic;
  }
</style>
