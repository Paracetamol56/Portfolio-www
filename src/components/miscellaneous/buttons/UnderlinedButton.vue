<template>
  <a
    :class="{
      left: arrowPosition === 'left',
      right: arrowPosition === 'right',
      disabled: disabled,
    }"
    class="button"
    :href="href"
    :name="name"
    :title="name"
    :target="target"
  >
    <span v-if="arrowPosition === 'right'">{{ text }}</span>
    <svg
      :class="{
        left: arrowPosition === 'left',
        right: arrowPosition === 'right',
      }"
      class="octicon octicon-chevrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
    <span v-if="arrowPosition === 'left'">{{ text }}</span>
  </a>
</template>

<script>
export default {
  name: "UnderlinedButton",
  props: {
    text: {
      type: String,
      default: "Button",
    },

    href: {
      type: String,
      default: "#",
    },
    name: {
      type: String,
      default: "button",
    },
    target: {
      type: String,
      default: "_self",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    arrowPosition: {
      type: String,
      validator: (value) => {
        return ["left", "right"].includes(value);
      },
      default: "right",
    },
  },
};
</script>

<style lang="scss" scoped>
a.button {
  position: relative;
  color: transparent;
  font-family: "Fira Code", monospace;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  background-image: linear-gradient(90deg, #b4e2f9 0%, #5f78ef 100%);
  background-clip: text;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: calc(100% - 16px);
    height: 2px;
    background-image: linear-gradient(90deg, #b4e2f9 0%, #5f78ef 100%);
    transition: transform 0.25s var(--easing);
    transform: scaleX(0%);
  }
  &.left::before {
    right: 0;
    transform-origin: left;
  }
  &.right::before {
    left: 0;
    transform-origin: right;
  }
  svg.octicon {
    &.left {
      transform: scaleX(-1);
    }
    &.right {
      transform: scaleX(1);
    }
    position: relative;
    top: 3px;
    width: 16px;
    height: 16px;
    color: #5f78ef;
    transform: translateX(0);
    transition: transform 0.25s var(--easing);
    path.octicon-chevrow-stem {
      stroke-dasharray: 10;
      stroke-dashoffset: 10;
      transition: stroke-dashoffset 0.25s var(--easing);
    }
  }
  &:hover {
    svg.octicon {
      &.left {
        transform: scaleX(-1) translateX(4px);
      }
      &.right {
        transform: scaleX(1) translateX(4px);
      }
      path.octicon-chevrow-stem {
        stroke-dashoffset: 20;
      }
    }
    &::before {
      transform: scaleX(100%);
    }
    &.left::before {
      transform-origin: right;
    }
    &.right::before {
      transform-origin: left;
    }
  }
}
</style>