<script lang="ts" setup>
import {defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>

<template>
  <a class="button" :href="href" :target="target">
    <slot></slot>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="octicon octicon-chevrow"
      data-v-411b7433=""
      data-v-2b4f4d1e=""
    >
      <path
        fill="currentColor"
        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
        class="octicon-chevrow-right"
        data-v-411b7433=""
      ></path>
      <path
        stroke="currentColor"
        d="M1.75 8H11"
        stroke-width="1.5"
        stroke-linecap="round"
        class="octicon-chevrow-stem"
        data-v-411b7433=""
      ></path>
    </svg>
  </a>
</template>

<style lang="scss" scoped>
a.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin: 32px 0 72px;
  padding: 0 18px 0 20px;
  color: var(--primary-color);
  font-family: "Fira Code", monospace;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  background-color: #2c1b4f;
  border-radius: var(--border-radius);
  transition: all 0.25s var(--easing);
  svg.octicon {
    position: relative;
    width: 16px;
    height: 16px;
    transform: translateX(0);
    transition: transform 0.25s var(--easing);
    path.octicon-chevrow-stem {
      stroke-dasharray: 10;
      stroke-dashoffset: 10;
      transition: stroke-dashoffset 0.25s var(--easing);
    }
  }
  &:hover {
    color: var(--secondary-color);
    box-shadow: 0 4px 7px #00000080, 0 100px 80px #b4e2f904,
      0 41.7776px 33.4221px #b4e2f906, 0 22.3363px 17.869px #b4e2f907,
      0 12.5216px 10.0172px #b4e2f909, 0 6.6501px 5.32008px #b4e2f90b,
      0 2.76726px 2.21381px #b4e2f912;
    svg.octicon {
      transform: translateX(4px);
      path.octicon-chevrow-stem {
        stroke-dashoffset: 20;
      }
    }
  }
}
</style>