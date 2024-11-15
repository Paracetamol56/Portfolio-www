<script lang="ts" setup>
const { locale } = useI18n();
const resume: Ref<HTMLElement | null> = ref(null);
const glow: Ref<HTMLElement | null> = ref(null);
let bounds: DOMRect;
let center = { x: 0, y: 0 };
let distance = reactive({ value: 0 });

function getBounds() {
  bounds = resume.value!.getBoundingClientRect();
}

function rotateToMouse(e: MouseEvent) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  resume.value!.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )`;

  glow.value!.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #8251e90f,
      #8251e955
    )
  `;
}

function resetRotation() {
  resume.value.style.transform = "rotate3d(0, 0, 0, 0deg)";
}
</script>

<template>
  <div class="resume">
    <a class="resume-thumbnail-container" ref="resume" :href="`/CV_${locale}_2024.pdf`" download>
      <NuxtImg src="/img/CV_en_2024.jpg" format="webp" placeholder loading="lazy" quality="50" alt="Resume Thumbnail"
        class="resume-thumbnail" @mouseenter="getBounds" @mousemove="rotateToMouse" @mouseleave="resetRotation" />
      <div class="resume-thumbnail-glow" ref="glow" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin: 0 0 3rem 0;
  perspective: 1500px;

  .resume-thumbnail-container {
    position: relative;
    margin: 20px 0;
    width: 20rem;
    aspect-ratio: 0.707;
    box-shadow: 0 1px 5px #00000099;
    border-radius: 10px;
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: rotate3d(0);

    &:hover {
      box-shadow: 0 4px 7px #00000080, 0 100px 80px #b4e2f904,
        0 41.7776px 33.4221px #b4e2f906, 0 22.3363px 17.869px #b4e2f907,
        0 12.5216px 10.0172px #b4e2f909, 0 6.6501px 5.32008px #b4e2f90b,
        0 2.76726px 2.21381px #b4e2f912;
    }

    .resume-thumbnail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .resume-thumbnail-glow {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-image: radial-gradient(circle at 50% -20%,
          #8251e90f,
          #8251e955);
    }
  }
}
</style>
