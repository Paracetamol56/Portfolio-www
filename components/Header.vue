<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
});

let interval: any;
const background: Ref<HTMLElement | null> = ref(null);
const backgroundGradient: Ref<HTMLElement | null> = ref(null);
const codeBlocksBackground: Ref<HTMLElement | null> = ref(null);

function triggerHover() {
  let randomChild =
    codeBlocksBackground.value?.children[
      Math.floor(Math.random() * codeBlocksBackground.value.children.length)
    ]!;
  if (randomChild.classList.contains("light")) {
    return;
  }
  randomChild.classList.add("light");
  writeContent(randomChild, generateBlockContent());
  setTimeout(function () {
    randomChild.classList.remove("light");
  }, 400);
}

function mouseMove(event: MouseEvent) {
  // Get the mouse position
  let x = event.clientX - window.innerWidth / 2;
  let y = event.clientY - window.innerHeight / 2;

  if (backgroundGradient.value) {
    backgroundGradient.value.style.top = -y / 5 + "px";
    backgroundGradient.value.style.left = -x / 5 + "px";
  }
}

function generateBlockContent() {
  let randomCharacters: string[] = [..."_=*^#@<>:;.,"]; // [..."-_+=*&^%$#@!~<>?:;.,|/{}[]()"];

  let randomContent = "";
  // generate a random content in a list of random types
  let randomNumber = Math.random();
  if (randomNumber <= 0.25) {
    // generate 4 lines of 8 random characters in hexadecimal
    for (let k = 0; k < 4; k++) {
      randomContent += Math.random().toString(16).substr(2, 8).toUpperCase();
      randomContent += "\n";
    }
  } else if (randomNumber <= 0.5) {
    // generate a random number of random characters in binary
    randomNumber = Math.floor(Math.random() * 8) + 1;
    for (let k = 0; k < 4; k++) {
      randomContent += Math.random().toString(2).substr(2, 8).toUpperCase();
      randomContent += "\n";
    }
  } else if (randomNumber <= 0.9) {
    // generate a random character
    for (let k = 0; k < 4; k++) {
      for (let l = 0; l < 8; l++) {
        randomContent +=
          randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
      }
      randomContent += "\n";
    }
  } else {
    randomContent = "////////\n////////\n////////\n////////";
  }
  return randomContent;
}

async function writeContent(element: Element, content: string) {
  element.innerHTML = "";
  // write content in element character by character
  let i = 0;
  let characterInterval = setInterval(function () {
    if (i < content.length) {
      element.innerHTML += content[i];
      i++;
    } else {
      clearInterval(characterInterval);
    }
  }, 10);
}

function scrollToMain() {
  window.scrollTo(0, window.innerHeight);
}

onMounted(() => {
  // Header paralax
  let titleParalax: HTMLElement = document.getElementById("titles")!;
  window.addEventListener("scroll", function () {
    codeBlocksBackground.value!.style.transform =
      "translateY(" + window.pageYOffset / 2 + "px)";
    titleParalax.style.transform =
      "translateY(" + window.pageYOffset / 3 + "px)";
  });

  // get the grid size of the codeBlocksBackground
  var gridSize = [window.innerWidth / 80, window.innerHeight / 80];

  let grays = ["#343739", "#2d3032", "#26292b", "#1f2224", "#191c1e"];

  // list of predifined colors
  let colors = ["#b4e2f9", "#5f78ef", "#8251e9", "#ad56e3", "#df7bf5"];

  // for each cell of the grid
  for (let i = 0; i < gridSize[0]; i++) {
    for (let j = 0; j < gridSize[1]; j++) {
      // If the cell is lucky
      if (Math.random() <= 0.6) {
        // create a p element in this cell
        let codeBlock = document.createElement("p");
        codeBlock.classList.add("bgCodeBox");

        writeContent(codeBlock, generateBlockContent());

        // random color from the list of grays
        let randomColor = grays[Math.floor(Math.random() * grays.length)];
        codeBlock.style.setProperty("--bgCodeBox-color", randomColor);

        // random color from the list of colors
        randomColor = colors[Math.floor(Math.random() * colors.length)] + "50";
        codeBlock.style.setProperty("--bgCodeBox-hover-color", randomColor);

        codeBlock.style.gridColumn = (i + 1).toString();
        codeBlock.style.gridRow = (j + 1).toString();

        // append the codeBlock to the codeBlocksBackground
        codeBlocksBackground.value?.appendChild(codeBlock);
      }
    }
  }

  // Wait for 1000 ms and set an interval to trigger the hover effect
  setTimeout(() => {
    interval = setInterval(triggerHover, Math.floor(Math.random() * 500));
  }, 1000);
});

onBeforeRouteLeave(() => {
  clearInterval(interval);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <header ref="background" @mousemove="mouseMove">
    <div class="background-gradient" ref="backgroundGradient"></div>
    <div
      class="background"
      ref="codeBlocksBackground"
      id="codeBlocksBackground"
    ></div>

    <div class="titles" id="titles">
      <h1 class="fillTextWithgradient type-write" key="title">
        {{ title }}
      </h1>
      <h2 class="fillTextWithgradient type-write" key="subtitle">
        {{ subtitle }}
      </h2>
    </div>

    <div class="downButton" @click="scrollToMain()">
      {{ $t("see-more") }}<br />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
        ></path>
      </svg>
    </div>
  </header>
</template>

<style lang="scss">
header {
  div.background {
    height: 100%;
    width: 100%;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(25, 1fr);
    grid-template-rows: repeat(20, 1fr);

    p.bgCodeBox {
      width: 80px;
      height: 80px;
      z-index: 1;
      background-color: transparent;
      padding: 2px;
      margin: 0;
      text-align: left;
      cursor: default;
      user-select: none;
      font-family: "Fira Code", monospace;
      font-size: 16px;
      line-height: 20px;
      color: var(--bgCodeBox-color) !important;
      animation-name: bummer;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      transition: all 0.75s var(--easing);

      &:hover,
      &.light {
        color: var(--bgCodeBox-hover-color) !important;
        transition: all 0s;
      }
    }
  }
}
</style>

<style scoped lang="scss">
header {
  background-color: #111416;
  height: 100vh;
  max-height: 1600px;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  div.background-gradient {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(
      calc(-1 * max(25vh, 25vw)),
      calc(-1 * max(50vh, 50vw))
    );
    filter: blur(50px);
    width: calc(max(100vh, 100vw) * 1.5);
    height: calc(max(100vh, 100vw) * 1.5);
    z-index: -1;
    background-image: radial-gradient(
      circle,
      #2c1b4fff 0%,
      #11141600 50%
    ) !important;
    background-size: cover;
    background-repeat: no-repeat;
  }

  div.titles {
    width: fit-content;
    z-index: 2;
    margin: auto 1rem;
    text-align: center;
    pointer-events: none;
    transform: translateY(-50%), translateZ(200px);
    font-family: "Fira Code", monospace;
    font-weight: 300;
    h1 {
      font-size: 4rem;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    h2 {
      font-size: 2.5rem;
      margin-top: 10px;
      margin-bottom: 0;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  div.downButton {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-family: "Fira Code", monospace;
    color: #ffffff;
    fill: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    transition: transform 0.5s var(--easing);

    &:hover {
      transform: translate(-50%, 5px);
      transition: transform 0.2s var(--easing);
    }
  }
}
</style>
