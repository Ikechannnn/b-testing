<script>
  /**
   * Created by Sanchit Sharma
   * Link: https://codepen.io/web_designer_sanchit/pen/dqZLQx
   */
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMount } from 'svelte'

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('#scroll-down-sign', {
      autoAlpha: 0,
      // duration: ,
      // ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#steps', // See Storyline.svelte
        start: 'top bottom',
        end: 'top+=500 bottom-=100',
        // markers: true,
      },
    })
  })
</script>

/** **/ // https://codepen.io/web_designer_sanchit/pen/dqZLQx

<div id="scroll-down-sign" class="scroll-down fixed bottom-[8%] left-[50%]">
  <span></span>
  <!-- <span></span> -->
</div>

<style>
  .scroll-down {
  }
  /* .scroll-down span:nth-child(2) {
		animation-delay: -0.2s;
	}
	.scroll-down span:nth-child(3) {
		animation-delay: -0.4s;
	} */
  .scroll-down span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 4px solid #fff;
    border-right: 4px solid #fff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 1.6s infinite;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-6px, -6px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(6px, 6px);
    }
  }
</style>
