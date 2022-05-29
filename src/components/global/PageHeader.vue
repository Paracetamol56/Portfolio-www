<template>
  <header ref="background" @mousemove="mouseMove">
    <div class="background-gradient" ref="backgroundGradient"></div>
    <div class="background" id="codeBlocksBackground"></div>

    <div class="titles" id="titles">
      <h1 class="fillTextWithgradient lang" key="title">{{ title }}</h1>
      <h2 class="fillTextWithgradient lang" key="subtitle">{{ subtitle }}</h2>
    </div>

    <div v-if="sectionLink !== ''" class="downButton" @click="scrollToMain()">
      VOIR PLUS<br />
      <i class="fas fa-chevron-down"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    sectionLink: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: function () {
    return {
      interval: null,
    };
  },
  methods: {
    triggerHover: function () {
      let codeBlocksBackground = document.getElementById(
        "codeBlocksBackground"
      );
      let randomChild =
        codeBlocksBackground.children[
          Math.floor(Math.random() * codeBlocksBackground.children.length)
        ];
      randomChild.classList.add("light");
      this.writeContent(randomChild, this.generateBlockContent());
      setTimeout(function () {
        randomChild.classList.remove("light");
      }, 400);
    },
    mouseMove: function (event) {
      // Get the mouse position
      let x = event.clientX - window.innerWidth / 2;
      let y = event.clientY - window.innerHeight / 2;

      this.$refs.backgroundGradient.style.top = -y / 5 + "px";
      this.$refs.backgroundGradient.style.left = -x / 5 + "px";
    },
    generateBlockContent: function () {
      let randomCharacters = "-_+=*&^%$#@!~`<>?:;.,|\\/{}[]()\"'";

      let randomContent = "";
      // generate a random content in a list of random types
      let randomNumber = Math.random();
      if (randomNumber <= 0.25) {
        // generate 4 lines of 8 random characters in hexadecimal
        for (let k = 0; k < 4; k++) {
          randomContent += Math.random()
            .toString(16)
            .substr(2, 8)
            .toUpperCase();
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
              randomCharacters[
                Math.floor(Math.random() * randomCharacters.length)
              ];
          }
          randomContent += "\n";
        }
      } else {
        randomContent = "////////\n////////\n////////\n////////";
      }
      return randomContent;
    },
    writeContent: async function (element, content) {
      element.innerHTML = "";
      // write content in element character by character
      let i = 0;
      let interval = setInterval(function () {
        if (i < content.length) {
          element.innerHTML += content[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, 10);
    },
    scrollToMain: function () {
      window.scrollTo(0, window.innerHeight);
    },
  },
  mounted: function () {
    // Header paralax
    let backgroundParalax = document.getElementById("codeBlocksBackground");
    let titleParalax = document.getElementById("titles");
    window.addEventListener("scroll", function () {
      backgroundParalax.style.transform =
        "translateY(" + window.pageYOffset / 2 + "px)";
      titleParalax.style.transform =
        "translateY(" + window.pageYOffset / 3 + "px)";
    });

    // Header background
    let codeBlocksBackground = document.getElementById("codeBlocksBackground");

    // get the grid size of the codeBlocksBackground
    var gridSize = [window.innerWidth / 80, window.innerHeight / 80];

    let grays = ["#343739", "#2d3032", "#26292b", "#1f2224", "#191c1e"];

    // list of predifined colors
    let colors = ["#b4e2f9", "#5f78ef", "#8251e9", "#ad56e3", "#df7bf5"];

    // for each cell of the grid
    for (let i = 0; i < gridSize[0]; i++) {
      for (let j = 0; j < gridSize[1]; j++) {
        // If the cell is lucky
        if (Math.random() <= 0.7) {
          // create a p element in this cell
          let codeBlock = document.createElement("p");
          codeBlock.classList.add("bgCodeBox");

          this.writeContent(codeBlock, this.generateBlockContent());

          // random color from the list of grays
          let randomColor = grays[Math.floor(Math.random() * grays.length)];
          codeBlock.style.setProperty("--bgCodeBox-color", randomColor);

          // random color from the list of colors
          randomColor =
            colors[Math.floor(Math.random() * colors.length)] + "50";
          codeBlock.style.setProperty("--bgCodeBox-hover-color", randomColor);

          codeBlock.style.gridColumn = i + 1;
          codeBlock.style.gridRow = j + 1;

          // append the codeBlock to the codeBlocksBackground
          codeBlocksBackground.appendChild(codeBlock);
        }
      }
    }

    // Set an interval to trigger the hover effect
    this.interval = setInterval(
      this.triggerHover,
      Math.floor(Math.random() * 500)
    );
  },
  beforeUnmount: function () {
    clearInterval(this.interval);
  },
};
</script>

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
    margin: auto;
    text-align: center;
    pointer-events: none;
    transform: translateY(-50%), translateZ(200px);
    font-family: "Roboto mono", monospace;
    font-weight: 300;
    h1 {
      font-size: 4rem;
      margin: 0;
    }

    h2 {
      font-size: 2.5rem;
      margin-top: 10px;
      margin-bottom: 0;
    }
  }

  div.downButton {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    cursor: default;
    transition: all 0.1s ease-in;
    text-decoration: none;
    font-family: "Roboto mono", monospace;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.5s var(--easing);

    &:hover {
      transform: translate(-50%, 5px);
      transition: transform 0.1s ease-in;
    }
  }
}
</style>