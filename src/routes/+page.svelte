<script>
  import Landing from '../lib/components/Landing.svelte'
  import Storyline from '../lib/components/Storyline.svelte'
  import Footer from '../lib/components/Footer.svelte'
  import { smoothScroll } from '../lib/utils/lenis'
</script>

<main class="overflow-x: hidden; pd-[100vh] relative" use:smoothScroll>
  <Landing />
  <Storyline />
  <Footer />
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    height: -webkit-fill-available;
  }

  :global(body) {
    background-color: #000000;
    font-optical-sizing: auto;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
</style>
