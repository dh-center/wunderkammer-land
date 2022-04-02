<script lang="ts">
  import {
    createClient,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    setClient,
  } from "@urql/svelte";
  import { retryExchange } from "@urql/exchange-retry";

  import Router from "svelte-spa-router";
  import MainMenu from "@/comps/MainMenu.svelte";
  import routes from "@/routes/routes";

  const options = {
    initialDelayMs: 3000,
    maxDelayMs: 15000,
    maxNumberAttempts: 2,
    retryIf: (err) => err && err.networkError,
  };

  // Note the position of the retryExchange - it should be placed prior to the
  // fetchExchange and after the cacheExchange for it to function correctly
  const client = createClient({
    url: "https://dwa.peterhofmuseum.ru/graphql",
    exchanges: [
      dedupExchange,
      cacheExchange,
      retryExchange(options),
      fetchExchange,
    ],
  });

  setClient(client);
</script>

<div>
  <MainMenu />
  <Router {routes} on:routeLoading={() => window.scrollTo({ top: 0 })} />
</div>

<style>
  div {
    padding: 10px;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
