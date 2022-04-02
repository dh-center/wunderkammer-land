<script lang="ts">
  export let msg = "";
  export let slug = "";
</script>

<svelte:head>
  <title>Error on the page</title>
</svelte:head>

<h3>Page {slug} was not loaded due to error</h3>

Error message:
<pre>{msg}</pre>
