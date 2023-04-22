<script lang="ts">
  import Header from '$lib/components/navigator/header.svelte';
  import Footer from '$lib/components/navigator/footer.svelte';
  import 'atra.css';
</script>

<svelte:head>
  <title>atra.css - A lightly modern reset CSS.</title>
  <meta name="description" content="atra.css is a modern CSS library that provides cross-browser default styles." />
  <meta property="og:title" content="atra.css - A lightly modern reset CSS." />
  <meta
    property="og:description"
    content="atra.css is a modern CSS library that provides cross-browser default styles."
  />
  <meta property="og:url" content="https://atra.re-taro.dev" />
  <meta property="og:image" content="https://ogp.re-taro.dev/api/ogp?title=atra.css&domain=atra.re-taro.dev" />
  <meta property="og:site_name" content="atra.css" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@10969_rintaro" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
</svelte:head>
<Header />
<main>
  <slot />
</main>
<Footer />

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

  main {
    max-width: 980px;
    margin: 5vh auto;
    padding: 0 5vw;
  }
</style>
