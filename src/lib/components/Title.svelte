<script>
  import gsap from 'gsap'
  import { onMount } from 'svelte'

  let { loaded = $bindable() } = $props()

  onMount(() => {
    gsap.from(['#diff-title', '#diff-subtitle'], {
      duration: 1.6,
      opacity: 0,
      stagger: 0.4,
      y: 30,
      ease: 'expo.out',
      delay: 1.6, // the duration of logo animations
      onComplete: () => {
        // After all the landing animations, reactivate scroll
        document.body.style.overflow = 'auto'
        // After all the landing animations, set loaded to true to display the scroll down arrow
        loaded = true

        gsap.to(['#diff-title', '#diff-subtitle'], {
          duration: 1,
          autoAlpha: 0,
          ease: 'power3.inOut',
          // mixBlendMode: 'normal',
          onComplete: () => {
            // title.style.mixBlendMode = 'normal';
          },
        })
        gsap.to(['#normal-title', '#normal-subtitle'], {
          duration: 1,
          autoAlpha: 1,
          ease: 'power3.inOut',
          onComplete: () => {
            gsap.to(['#normal-title', '#normal-subtitle'], {
              autoAlpha: 0,
              // duration: 1,
              ease: 'linear',
              scrollTrigger: {
                trigger: '#steps', // See Storyline.svelte
                start: 'top bottom',
                end: 'top+=500 bottom-=100',
                scrub: 1,
                // markers: true,
                toggleActions: 'play none none reverse',
              },
            })
          },
        })
      },
    })

    gsap.to('.rotate-sign', {
      rotation: '-=90',
      duration: 1,
      stagger: 0.2,
      repeat: -1, // number of repeats (-1 for infinite)
      repeatDelay: 4, // seconds between repeats
      repeatRefresh: true, // targets are refreshed before each repeat
      ease: 'elastic.out(1, 0.3)',
      yoyo: true,
      yoyoEase: 'elastic.out(1, 0.3)',
    })
  })
</script>

<div>
  <div class="title-wrapper mix-blend-difference">
    <p id="diff-title" class="title">
      B<span class="rotate-sign">+</span><span class="rotate-sign">+</span>
    </p>
    <p id="diff-subtitle" class="subtitle">
      Insects as proxies of biodiversity
    </p>
  </div>
  <div class="title-wrapper">
    <p id="normal-title" class="title opacity-0">
      B<span class="rotate-sign">+</span><span class="rotate-sign">+</span>
    </p>
    <p id="normal-subtitle" class="subtitle opacity-0">
      Insects as proxies of biodiversity
    </p>
  </div>
</div>

<style lang="postcss">
  .rotate-sign {
    @apply inline-block origin-center;
  }

  .title-wrapper {
    @apply fixed bottom-[10%] w-full text-center leading-none text-[#F8f8f8];
  }

  .title {
    @apply font-sans text-[4rem] font-[700] mobile:text-[6rem];
  }

  .subtitle {
    @apply font-serif text-[1.5rem] font-[400] italic mobile:text-[2rem];
  }
</style>
