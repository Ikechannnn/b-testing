import { j as bind_props, e as pop, p as push, k as copy_payload, l as assign_payload, m as attr, o as stringify, v as value_or_fallback, q as slot, t as ensure_array_like } from "../../chunks/index.js";
import "p5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
function html(value) {
  var open = "<!---->";
  return `${open}${value}<!---->`;
}
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
const bgVideoSrc = "/b-testing/_app/immutable/assets/bg-video_rc_10s.DczdKUdN.mp4";
const fallbackGifSrc = "/b-testing/_app/immutable/assets/bg-video_fallback.Ck2nYTSv.gif";
const sclLogoSrc = "/b-testing/_app/immutable/assets/scl_logo.IdOb5teQ.svg";
const mitLogoSrc = "data:image/svg+xml,%3csvg%20width='38'%20height='24'%20viewBox='0%200%2038%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_74_419'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='2'%20width='38'%20height='20'%3e%3cpath%20d='M38%202H0V22H38V2Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_74_419)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.4443%206.21053H37.9999V2H27.4443V6.21053Z'%20fill='white'%20style='mix-blend-mode:difference'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.86084%2015.6842H11.083V2H6.86084V15.6842Z'%20fill='white'%20style='mix-blend-mode:difference'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.7222%2022H17.9444V2H13.7222V22Z'%20fill='white'%20style='mix-blend-mode:difference'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2022H4.22222V2H0V22Z'%20fill='white'%20style='mix-blend-mode:difference'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.4443%2021.9995H31.6665V8.84216H27.4443V21.9995Z'%20fill='white'%20style='mix-blend-mode:difference'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.5835%206.21053H24.8057V2H20.5835V6.21053Z'%20fill='white'%20style='mix-blend-mode:difference'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.5835%2022H24.8057V8.84216H20.5835V22Z'%20fill='%23BCBCBC'%20style='mix-blend-mode:difference'/%3e%3c/g%3e%3c/svg%3e";
function Title($$payload, $$props) {
  push();
  let { loaded = void 0 } = $$props;
  $$payload.out += `<div><div class="title-wrapper mix-blend-difference svelte-15soqgu"><p id="diff-title" class="title svelte-15soqgu">B<span class="rotate-sign svelte-15soqgu">+</span><span class="rotate-sign svelte-15soqgu">+</span></p> <p id="diff-subtitle" class="subtitle svelte-15soqgu">Insects as proxies of biodiversity</p></div> <div class="title-wrapper svelte-15soqgu"><p id="normal-title" class="title opacity-0 svelte-15soqgu">B<span class="rotate-sign svelte-15soqgu">+</span><span class="rotate-sign svelte-15soqgu">+</span></p> <p id="normal-subtitle" class="subtitle opacity-0 svelte-15soqgu">Insects as proxies of biodiversity</p></div></div>`;
  bind_props($$props, { loaded });
  pop();
}
function ScrollDownArrow($$payload, $$props) {
  push();
  $$payload.out += `<!---->/** **/ // https://codepen.io/web_designer_sanchit/pen/dqZLQx <div id="scroll-down-sign" class="scroll-down fixed bottom-[8%] left-[50%] svelte-kq92vc"><span class="svelte-kq92vc"></span></div>`;
  pop();
}
function Landing($$payload, $$props) {
  push();
  let loaded = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section class="relative min-h-screen w-screen"><video autoplay muted playsinline loop preload="auto"${attr("class", `bg-media svelte-15eh2vh ${stringify([""].filter(Boolean).join(" "))}`)}><source${attr("src", bgVideoSrc)} type="video/mp4"></video> <img${attr("src", fallbackGifSrc)} alt="Background_video"${attr("class", `bg-media svelte-15eh2vh ${stringify(["hidden"].filter(Boolean).join(" "))}`)}> <div class="landing-logo left-[2rem] svelte-15eh2vh"><img${attr("src", sclLogoSrc)} alt="scl_logo"></div> <div class="landing-logo right-[2rem] svelte-15eh2vh"><img${attr("src", mitLogoSrc)} alt="mit_logo"></div> `;
    Title($$payload2, {
      get loaded() {
        return loaded;
      },
      set loaded($$value) {
        loaded = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    if (loaded) {
      $$payload2.out += "<!--[-->";
      ScrollDownArrow($$payload2);
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function Scrolly($$payload, $$props) {
  push();
  let root = value_or_fallback($$props["root"], () => null);
  let top = value_or_fallback($$props["top"], () => 0);
  let bottom = value_or_fallback($$props["bottom"], () => 0);
  let increments = value_or_fallback($$props["increments"], () => 100);
  let value = value_or_fallback($$props["value"], () => void 0);
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  const update = () => {
    if (!nodes.length) return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0) value = maxIndex;
    else value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index]) intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  update();
  $$payload.out += `<div><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { root, top, bottom, increments, value });
  pop();
}
function Bugs($$payload, $$props) {
  push();
  let { numOfBugs, numOfHighlightedBug, bgColor } = $$props;
  (() => {
    if (numOfHighlightedBug > 0) {
      return Array.from({ length: numOfHighlightedBug }, (_, i) => i);
    } else {
      return [];
    }
  })();
  $$payload.out += `<div></div>`;
  pop();
}
const storyline = [
  '<span class="text-[1.25rem] font-[700] font-serif text-[#198F51]">41%</span> of ecosystems are on the brink of collapse, and biodiversity is closely linked to this crisis.<br><br>We employ computer vision to monitor the <span class="text-[1.25rem] font-[600] font-serif text-[#198F51]">abundance</span> and <span class="text-[1.25rem] font-[600] font-serif text-[#198F51]">diversity</span> of insects as biodiversity proxies.',
  '<span id="40" >While existing models can detect up to <span id="40-num" class="text-[1.25rem] font-[700] font-serif text-[#198F51]">40</span> insect species,</span> <span id="2584" class="text-[#383838]">our model significantly extends this capability to <span id="2584-num"class="text-[1.25rem] font-[700] font-serif text-[#383838]">2,584</span> species.</span>'
];
function Storyline($$payload, $$props) {
  push();
  let currentStep = null;
  let numOfBugs = (() => {
    if (currentStep === null || currentStep === void 0 || currentStep === 0) return 500;
    if (currentStep === 1) return 1500;
    if (currentStep === 2) return 1500;
  })();
  let numOfHighlightedBugs = (() => {
    let numOfHighlightedBugs2 = 5;
    if (currentStep === 1) {
      numOfHighlightedBugs2 = 40;
    } else if (currentStep === 2) {
      numOfHighlightedBugs2 = 600;
    }
    return numOfHighlightedBugs2;
  })();
  let bgColor = "#000000";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section id="storyline" class="relative w-full"><div class="letf-0 fixed top-0 z-[-10] min-h-[100vh] w-full bg-orange-300">`;
    Bugs($$payload2, { numOfBugs, numOfHighlightedBugs, bgColor });
    $$payload2.out += `<!----></div> <div id="steps" class="relative z-[10] flex w-full justify-center pt-[10vh] mobile:pb-[100vh]">`;
    Scrolly($$payload2, {
      get value() {
        return currentStep;
      },
      set value($$value) {
        currentStep = $$value;
        $$settled = false;
      },
      children: ($$payload3, $$slotProps) => {
        const each_array = ensure_array_like(storyline);
        $$payload3.out += `<!--[-->`;
        for (let i = 0; i < each_array.length; i++) {
          const content = each_array[i];
          if (i < 1) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div id="step"${attr("class", ` h-[70vh] w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px] ${stringify([currentStep === i ? "active" : ""].filter(Boolean).join(" "))}`)}><div class="step-bg step-content h-auto px-[1rem] py-[1rem] svelte-10j716y"><p class="step-text svelte-10j716y">${html(content)}</p></div></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
            if (i >= 1) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<div id="punchline-box"${attr("class", ` h-[40vh] w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px] ${stringify([currentStep === i ? "active" : ""].filter(Boolean).join(" "))}`)}><div id="punchline" class="step-content step-bg h-auto px-[1rem] py-[1rem] svelte-10j716y"><p class="step-text svelte-10j716y">${html(content)}</p></div></div> <div id="placeholder"${attr("class", ` h-[50vh] w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px] ${stringify([currentStep === i + 1 ? "active" : ""].filter(Boolean).join(" "))}`)}></div> <div id="placeholder-end"${attr("class", ` h-0 w-[80vw] mobile:w-[600px] tablet:w-[600px] laptop:w-[600px] ${stringify([currentStep === i + 1 ? "active" : ""].filter(Boolean).join(" "))}`)}></div>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          }
          $$payload3.out += `<!--]-->`;
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
const amsLogoSrc = "/b-testing/_app/immutable/assets/ams_logo_dark.D0lQsnmx.svg";
const mitsclLogoSrc = "/b-testing/_app/immutable/assets/mit-scl_logo_dark.D1MG_wVA.svg";
function Footer($$payload, $$props) {
  push();
  $$payload.out += `<footer id="footer" class="footer-not-mobile footer-mobile z-50 w-full select-text overflow-y-auto bg-[#f8f8f8] opacity-0 mix-blend-difference svelte-1fey909"><div class="grid-ctn columns note-body h-auto w-full py-[4rem] svelte-1fey909"><div class="left-section hrchy-1 svelte-1fey909"><div class="hrchy-2 svelte-1fey909"><p class="note-header svelte-1fey909">Description</p> <p>The loss of biodiversity is a global crisis with profound ecological
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
          visual AI models to monitor insect species across climatic regions.</p></div> <div class="hrchy-2 w-auto svelte-1fey909"><p class="note-header svelte-1fey909">Team</p> <div class="hrchy-2 svelte-1fey909"><p>Carlo Ratti, Director</p> <div class="hrchy-3 svelte-1fey909"><p class="note-subtitle svelte-1fey909">Research</p> <div><p>Titus Venverloo, Lead</p> <p>Fábio Duarte</p></div></div> <div class="hrchy-3 svelte-1fey909"><p class="note-subtitle svelte-1fey909">Web &amp; Visualization</p> <p>Muxing Chen</p></div></div></div></div> <div class="right-section hrchy-1 svelte-1fey909"><div class="hrchy-2 svelte-1fey909"><p class="note-header svelte-1fey909">Publication</p> <p>Venverloo, T., Duarte, F. (2024) <a class="underline svelte-1fey909" href="https://senseable.mit.edu/papers/pdf/20240815_Venvenloo-Duarte_InsectSpecies_ScientificReports.pdf">Towards real‑time monitoring of insect species populations.</a> Scientific Reports (Nature).</p></div> <div class="hrchy-2 svelte-1fey909"><p class="note-header svelte-1fey909">Press</p> <p><a class="underline svelte-1fey909">Download the Press Material</a><br><br>The
          material on this website can be used freely in any publication
          provided that:<br>1. it is duly credited as a project by the MIT
          Senseable City Lab.<br> 2. a PDF copy of the publication is sent to <a class="svelte-1fey909">senseable-press@mit.edu.</a></p></div> <div class="hrchy-2 svelte-1fey909"><p class="note-header svelte-1fey909">In collaboration with</p> <a href="https://www.ams-institute.org/" class="svelte-1fey909"><img class="note-logo origin-top-left scale-[1.25] stroke-black svelte-1fey909"${attr("src", amsLogoSrc)} alt="ams_logo"></a></div> <div class="hrchy-1 svelte-1fey909"><div class="hrchy-2 svelte-1fey909"><p>For more information,<br> senseable-contacts@mit.edu</p> <a href="https://senseable.mit.edu/" class="svelte-1fey909"><img class="note-logo svelte-1fey909"${attr("src", mitsclLogoSrc)} alt="mit-scl_logo"></a></div> <a class="underline svelte-1fey909" href="https://accessibility.mit.edu/">Accessibility</a></div></div></div></footer>`;
  pop();
}
gsap.registerPlugin(ScrollTrigger);
function _page($$payload) {
  $$payload.out += `<main class="overflow-x: hidden; pd-[100vh] relative">`;
  Landing($$payload);
  $$payload.out += `<!----> `;
  Storyline($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
