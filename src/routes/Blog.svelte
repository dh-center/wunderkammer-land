<script lang="ts">
  import PostsList from "@/comps/PostsList.svelte";
  import { BLOG_PAGE_URL } from "@/utils/constants";
  import Page from "./Page.svelte";
</script>

<Page params={{ slug: BLOG_PAGE_URL }} mustExist={false} />
<PostsList />
