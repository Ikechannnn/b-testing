<script>
  import Scrolly from './Scrolly.svelte'
  import Bugs from './Bugs.svelte'
  import { storyline } from '../constants/storyline'
  import Grid from './Grid.svelte'
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  let currentStep = $state(null)

  let numOfBugs = $derived.by(() => {
    if (currentStep === null || currentStep === undefined || currentStep === 0)
      return 500
    if (currentStep === 1) return 1500
    if (currentStep === 2) return 1500
    // if (currentStep === 3) return 1500;
  })

  let numOfHighlightedBugs = $derived.by(() => {
    let numOfHighlightedBugs = 5
    if (currentStep === 1) {
      numOfHighlightedBugs = 40
    } else if (currentStep === 2) {
      numOfHighlightedBugs = 600
    }
    return numOfHighlightedBugs
  })

  let bgColor = $state('#000000')

  $inspect({ currentStep })
  $inspect({ numOfBugs })
  $inspect({ numOfHighlightedBugs })

  onMount(() => {
    // const text = new SplitType(story, { types: 'lines' });
    // console.log(text);

    ScrollTrigger.create({
      trigger: '#punchline-box',
      start: 'top 40%',
      // end: '+=80px',
      end: () => `+=${window.innerHeight * 0.9 - punchline.offsetHeight}px`,
      // endTrigger: plh,
      pin: '#punchline',
      toggleActions: 'play none none reverse',
      // markers: true,
      onEnter: () => {
        console.log('enter')
      },
      onLeaveBack: () => {
        console.log('leave')
      },
    })

    // ScrollTrigger.create({
    // 	trigger: '#footer',
    // 	start: 'top bottom',
    // 	// end: 'bottom top',
    // 	toggleActions: 'play none none reverse',
    // 	// markers: true,
    // 	onEnter: () => {
    // 		bgColor = '#f8f8f8';
    // 	},
    // 	onLeaveBack: () => {
    // 		bgColor = '#000000';
    // 	}
    // });
  })

  $effect(() => {
    gsap.to('[id="40"]', {
      duration: 1,
      color: '#383838',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#placeholder',
        start: 'top 50%',
        end: 'bottom 50%',
        // toggleClass: 'step-unhighlight',
        toggleActions: 'play none none reverse',
        // scrub: 1
        // markers: true
      },
    })

    gsap.to('[id="40-num"]', {
      duration: 1,
      color: '#383838',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#placeholder',
        start: 'top 50%',
        end: 'bottom 50%',
        // toggleClass: 'step-unhighlight',
        toggleActions: 'play none none reverse',
        // scrub: 1
        // markers: true
      },
    })

    gsap.to('[id="2584"]', {
      duration: 1,
      color: '#f8f8f8',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#placeholder',
        start: 'top 50%',
        end: 'bottom 50%',
        // toggleClass: 'step-unhighlight',
        toggleActions: 'play none none reverse',
        // scrub: 1
        // markers: true
      },
    })

    gsap.to('[id="2584-num"]', {
      duration: 1,
      color: '#198F51',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#placeholder',
        start: 'top 50%',
        end: 'bottom 50%',
        // toggleClass: 'step-unhighlight',
        toggleActions: 'play none none reverse',
        // scrub: 1
        // markers: true
      },
    })
  })
</script>

<section id="storyline" class="relative w-full">
  <!-- <div class="relative h-[500px] w-full bg-orange-300"></div> -->
  <div class="letf-0 fixed top-0 z-[-10] min-h-[100vh] w-full bg-orange-300">
    <Bugs {numOfBugs} {numOfHighlightedBugs} {bgColor} />
  </div>

  <div
    id="steps"
    class="relative z-[10] flex w-full justify-center pt-[10vh] mobile:pb-[100vh]"
  >
    <Scrolly bind:value={currentStep}>
      {#each storyline as content, i}
        {#if i < 1}
          <div
            id="step"
            class=" h-[70vh] w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px]"
            class:active={currentStep === i}
          >
            <div class="step-bg step-content h-auto px-[1rem] py-[1rem]">
              <p class="step-text">{@html content}</p>
            </div>
          </div>
        {:else if i >= 1}
          <!-- <div class="h-[80vh]" bind:this={punchlineBox}> -->
          <div
            id="punchline-box"
            class=" h-[40vh] w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px]"
            class:active={currentStep === i}
          >
            <div
              id="punchline"
              class="step-content step-bg h-auto px-[1rem] py-[1rem]"
            >
              <p class="step-text">{@html content}</p>
            </div>
          </div>
          <div
            id="placeholder"
            class=" h-[50vh] w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px]"
            class:active={currentStep === i + 1}
          ></div>
          <div
            id="placeholder-end"
            class=" h-0 w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px]"
            class:active={currentStep === i + 1}
          ></div>
          <!-- </div> -->
        {/if}
      {/each}
    </Scrolly>
  </div>
</section>

<!-- <div class="relative h-[500px] w-full bg-orange-300"></div> -->

<style lang="postcss">
  .step-span {
    @apply col-span-4 mobile:col-span-2 mobile:col-start-2 tablet:col-span-4 tablet:col-start-3 laptop:col-span-4 laptop:col-start-5;
  }

  .step-bg {
    @apply rounded border border-solid border-[#2c2c2c] bg-[rgb(44,44,44)]/[.4] backdrop-blur-sm;
  }

  .step-text {
    @apply text-[1.125rem] leading-[1.5rem] tracking-[-0.01013rem] text-[#f8f8f8];
  }

  .step-content {
    border-image: linear-gradient(
        160deg,
        rgba(44, 44, 44, 0.4),
        rgba(44, 44, 44, 0)
      )
      1;
  }

  .step-unhighlight {
    color: #383838;
  }
</style>
