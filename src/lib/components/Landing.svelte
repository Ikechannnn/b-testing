<script>
  import bgVideoSrc from '/static/videos/bg-video_rc_10s.mp4'
  import fallbackGifSrc from '/static/videos/bg-video_fallback.gif'
  import sclLogoSrc from '/static/images/scl_logo.svg'
  import mitLogoSrc from '/static/images/mit_logo.svg'
  import Title from './Title.svelte'
  import ScrollDownArrow from './ScrollDownArrow.svelte'
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  let bgVideo
  let fallbackGif
  let sclLogo
  let mitLogo
  let loaded = $state(false)
  $inspect(loaded)
  let videoPlayError = $state(false)

  function playVideo() {
    if (bgVideo) {
      bgVideo.play().catch((error) => {
        console.error('Error attempting to play video: ', error)
        videoPlayError = true
      })
    }
  }

  function animateLogo(logo, slideInPos, slideOutPos) {
    gsap.from(logo, {
      duration: 1.2,
      autoAlpha: 0,
      x: slideInPos,
      ease: 'power3.inOut',
      delay: 1,
      onComplete: () => {
        gsap.to(logo, {
          x: slideOutPos,
          autoAlpha: 0,
          ease: 'linear',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: sclLogo,
            start: 'top top',
            end: '+=400',
            scrub: 1,
            // markers: true
          },
        })
      },
    })
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Play the video when the component mounts
    playVideo()

    // Disable scrolling
    document.body.style.overflow = 'hidden'

    // Logos animations
    animateLogo(sclLogo, -36, -150)
    animateLogo(mitLogo, 36, 150)

    // const bgMedia = videoPlayError ? fallbackGif : bgVideo;

    // Background video animation
    gsap.from(videoPlayError ? fallbackGif : bgVideo, {
      scale: 1.4,
      duration: 1.6,
      ease: 'power4.inOut',
      transformOrigin: 'center center',
      onComplete: () => {
        gsap.to(videoPlayError ? fallbackGif : bgVideo, {
          autoAlpha: 0,
          // duration: 1.6,
          ease: 'linear',
          scrollTrigger: {
            trigger: '#steps', // See Storyline.svelte
            start: 'top bottom',
            end: 'top+=500 bottom-=100',
            scrub: 1,
            // markers: true,
            toggleActions: 'restart none none reverse',
          },
        })
      },
    })
  })
</script>

<section class="relative min-h-screen w-screen">
  <!-- Background video -->
  <video
    autoplay
    muted
    playsinline
    loop
    preload="auto"
    bind:this={bgVideo}
    class="bg-media"
    class:hidden={videoPlayError}
  >
    <source src={bgVideoSrc} type="video/mp4" />
  </video>
  <!-- Fallback gif -->
  <img
    src={fallbackGifSrc}
    alt="Background_video"
    bind:this={fallbackGif}
    class="bg-media"
    class:hidden={!videoPlayError}
  />
  <!-- Logos -->
  <div class="landing-logo left-[2rem]" bind:this={sclLogo}>
    <img src={sclLogoSrc} alt="scl_logo" />
  </div>
  <div class="landing-logo right-[2rem]" bind:this={mitLogo}>
    <img src={mitLogoSrc} alt="mit_logo" />
  </div>
  <!-- Title -->
  <Title bind:loaded />
  {#if loaded}
    <ScrollDownArrow />
  {/if}
</section>

<style lang="postcss">
  /* video {
		width: 100vw;
		min-height: 100vh;
		object-fit: cover;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	} */

  .bg-media {
    @apply fixed left-0 top-0 z-[-1] min-h-[100vh] w-full object-cover;
  }

  .hidden {
    display: none;
  }

  .landing-logo {
    @apply fixed top-[2rem] mix-blend-difference;
  }
</style>
