<script>
  import amsLogoSrc from '/static/images/ams_logo_dark.svg'
  import mitsclLogoSrc from '/static/images/mit-scl_logo_dark.svg'

  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      '#footer',
      {
        y: 100,
        duration: 1.6,
        ease: 'linear',
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'linear',
        scrollTrigger: {
          trigger: '#placeholder', // See Storyline.svelte
          start: 'bottom 20%',
          end: 'bottom top',
          scrub: 1,
          // markers: true,
          toggleActions: 'restart none none reverse',
          onScrubComplete: () => {
            console.log('Scrub complete')
          },
        },
      }
    )
  })
</script>

<footer
  id="footer"
  class="footer-not-mobile footer-mobile z-50 w-full select-text overflow-y-auto bg-[#f8f8f8] opacity-0 mix-blend-difference"
>
  <div class="grid-ctn columns note-body h-auto w-full py-[4rem]">
    <div class="left-section hrchy-1">
      <div class="hrchy-2">
        <p class="note-header">Description</p>
        <p>
          The loss of biodiversity is a global crisis with profound ecological
          and economic consequences. Among the numerous threats to biodiversity,
          the rapid decline in insect populations is particularly concerning, as
          around 65% of insect species could go extinct over the next one
          hundred years. This could have disastrous consequences, as insects
          play critical roles in pollination and nutrient cycling, and act as a
          food source for other species. In B++ we propose a computer vision
          model to insect species on a large scale—increase in more than 60
          folds species detected in existing models. We make available an image
          data source and a recent improvement in the YOLO computer vision
          architecture to present a quick and open-access method to develop
          visual AI models to monitor insect species across climatic regions.
        </p>
      </div>
      <div class="hrchy-2 w-auto">
        <p class="note-header">Team</p>
        <div class="hrchy-2">
          <p>Carlo Ratti, Director</p>
          <div class="hrchy-3">
            <p class="note-subtitle">Research</p>
            <div>
              <p>Titus Venverloo, Lead</p>
              <p>Fábio Duarte</p>
            </div>
          </div>
          <div class="hrchy-3">
            <p class="note-subtitle">Web & Visualization</p>
            <p>Muxing Chen</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-section hrchy-1">
      <div class="hrchy-2">
        <p class="note-header">Publication</p>
        <p>
          Venverloo, T., Duarte, F. (2024) <a
            class="underline"
            href="https://senseable.mit.edu/papers/pdf/20240815_Venvenloo-Duarte_InsectSpecies_ScientificReports.pdf"
            >Towards real‑time monitoring of insect species populations.</a
          > Scientific Reports (Nature).
        </p>
      </div>
      <div class="hrchy-2">
        <p class="note-header">Press</p>
        <p>
          <a class="underline">Download the Press Material</a><br /><br />The
          material on this website can be used freely in any publication
          provided that:<br />1. it is duly credited as a project by the MIT
          Senseable City Lab.<br />
          2. a PDF copy of the publication is sent to
          <a>senseable-press@mit.edu.</a>
        </p>
      </div>
      <div class="hrchy-2">
        <p class="note-header">In collaboration with</p>
        <a href="https://www.ams-institute.org/"
          ><img
            class="note-logo origin-top-left scale-[1.25] stroke-black"
            src={amsLogoSrc}
            alt="ams_logo"
          /></a
        >
      </div>
      <div class="hrchy-1">
        <div class="hrchy-2">
          <p class="">
            For more information,<br />
            senseable-contacts@mit.edu
          </p>
          <a href="https://senseable.mit.edu/"
            ><img class="note-logo" src={mitsclLogoSrc} alt="mit-scl_logo" /></a
          >
        </div>
        <a class="underline" href="https://accessibility.mit.edu/"
          >Accessibility</a
        >
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  .left-section {
    @apply col-span-4 col-start-1 mobile:col-span-4 mobile:col-start-1 tablet:col-span-5 tablet:col-start-2 laptop:col-span-5 laptop:col-start-1;
  }

  .team-section {
    @apply col-span-4 col-start-1 mobile:col-span-2 mobile:col-start-4 tablet:col-span-2 tablet:col-start-6 laptop:col-span-2 laptop:col-start-6;
  }

  .right-section {
    @apply col-span-4 col-start-1 mobile:col-span-4 mobile:col-start-5 tablet:col-span-4 tablet:col-start-8 laptop:col-span-5 laptop:col-start-7;
  }

  .note-header {
    @apply font-serif text-[1.125rem] font-bold leading-none tracking-[-0.01575rem];
  }

  .note-subtitle {
    @apply font-serif italic text-[#757575];
  }

  .note-body {
    @apply font-sans text-[1rem] font-[300] leading-[130%] tracking-[-0.014rem] text-[#101213];
  }

  .note-logo {
    @apply h-[1.5rem] mobile:h-[1.5rem] tablet:h-[2rem] laptop:h-[2rem];
  }

  .hrchy-1 {
    @apply flex flex-col gap-[2rem];
  }

  .hrchy-2 {
    @apply flex flex-col gap-[1rem];
  }

  .hrchy-3 {
    @apply flex flex-col gap-[0.25rem];
  }

  a {
    @apply underline-offset-1;
  }

  .footer-mobile {
    /* @apply relative top-0 h-auto overflow-y-visible; */
  }

  .footer-not-mobile {
    @apply mobile:fixed mobile:left-0 mobile:top-0 mobile:min-h-[100vh];
  }
</style>
