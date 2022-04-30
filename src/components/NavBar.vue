<template>
  <nav>
    <div class="nav-container container">
      <div class="nav-logo">
        <a class="nav-logo-link coloredOnHover" href="/">
          <svg
            class="nav-logo-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 900"
          >
            <polygon
              class="cls-1"
              points="346.07 287.66 512.15 0 1080 0 1080 180 616.07 180 450 467.66 346.07 287.66"
            />
            <polygon
              class="cls-1"
              points="450 647.56 180 180 0 180 180 540 346.07 827.65 450 647.56"
            />
            <polygon
              class="cls-1"
              points="1080 269.9 1080 900 630 900 720 720 900 720 900 449.9 771.91 450 875.86 269.95 1080 269.9"
            />
            <polygon
              class="cls-2"
              points="667.98 270 346.07 827.65 387.85 900 512.1 900 875.86 269.95 667.98 270"
            />
            <polygon class="cls-2" points="0 900 180 900 180 540 0 180 0 900" />
          </svg>
          <span class="nav-logo-link-bold">Portfolio</span>
          <span class="nav-logo-link-thin"> Mathéo Galuba</span>
        </a>
      </div>
      <div class="nav-menu">
        <ul class="nav-menu-list" v-bind:class="{ 'nav-active': navActive }">
          <li class="nav-menu-list-element">
            <a class="active" href="/">
              <span>Accueil</span>
              <div></div>
            </a>
          </li>
          <li class="nav-menu-list-element">
            <a href="/project">
              <span>Projets</span>
              <div></div>
            </a>
          </li>
          <li class="nav-menu-list-element">
            <a href="/contact">
              <span>Contact</span>
              <div></div>
            </a>
          </li>
        </ul>
        <input
          id="nav-menu-toggle-id"
          class="nav-menu-toggle"
          type="checkbox"
          @click="navActive = !navActive"
        />
        <label for="nav-menu-toggle-id">
          <svg class="nav-menu-toggle-icon" viewBox="0 0 60 30">
            <g class="nav-menu-toggle-icon-group">
              <g class="nav-menu-toggle-icon-open">
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
              </g>
              <g class="nav-menu-toggle-icon-close">
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
              </g>
            </g>
          </svg>
        </label>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      navActive: false,
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  z-index: 4;
  position: fixed;
  color: #ffffff;

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .nav-logo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;

      .nav-logo-link {
        display: block;
        color: #ffffff;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: "Roboto Mono", monospace;
        font-weight: 200;
        letter-spacing: 0.1rem;

        .nav-logo-svg {
          height: 20px;
          margin-right: 10px;

          .cls-1 {
            fill: #ffffff;
            transition: all 0.2s var(--easing);
          }

          .cls-2 {
            fill: #b4b4b4;
            transition: all 0.2s var(--easing);
          }

          .cls-1:hover,
          .cls-2:hover {
            fill: #8251e9;
            transition: all 0.2s var(--easing);
          }
        }

        .nav-logo-link-bold {
          font-weight: 700;
        }
      }

      @media only screen and (max-width: 768px) {
        .nav-logo-link .nav-logo-link-thin {
          display: none;
        }
      }
    }

    .nav-menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 28%;
      min-width: 375px;

      ul.nav-menu-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        list-style: none;

        li.nav-menu-list-element {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;

          a {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 0;
            text-decoration: none;
            height: 100%;
            transition: all var(--easing) 0.5s;

            &.active > span {
              color: #8251e9;
            }

            span {
              text-align: center;
              font-family: "Roboto Mono", monospace;
              font-weight: 500;
              font-size: 1rem;
              color: #ffffff;
              transition: all var(--easing) 0.5s;
            }

            div {
              height: 2px;
              width: 100%;
              position: absolute;
              bottom: 0;
              background-color: #8251e9;
              margin: 0;
              padding: 0;
              transform: scaleX(0%);
              transition: all var(--easing) 0.5s;
            }

            &:hover {
              > a {
                color: #8251e9;
                transition: all var(--easing) 0.2s;
              }

              > div {
                transform: scaleX(100%);
                transition: all var(--easing) 0.2s;
              }
            }
          }
        }
      }

      input.nav-menu-toggle {
        display: none;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        opacity: 0;
        white-space: nowrap;

        + label {
          display: none;
          width: 30px;
          height: 30px;
          cursor: pointer;

          svg.nav-menu-toggle-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            stroke-width: 6;
            stroke: #ffffff;

            .nav-menu-toggle-icon-group {
              transform: translateX(0%);
              transition: transform 0.25s var(--easing);

              .nav-menu-toggle-icon-close {
                transform: translateX(100%);
              }
            }
          }
        }

        &:checked {
          + label {
            .nav-menu-toggle-icon {
              .nav-menu-toggle-icon-group {
                transform: translateX(-100%);
                transition: transform 0.25s var(--easing);
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .nav-menu {
      width: fit-content !important;
      min-width: 0 !important;

      ul.nav-menu-list {
        margin: 0;
        background-color: #000000;
        position: absolute;
        right: -100%;
        top: 50px;
        width: 40% !important;
        min-width: 200px !important;
        height: calc(100vh - 50px) !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        align-items: center !important;
        padding: 0;
        transition: all 0.25s var(--easing);

        &.nav-active {
          right: 0;
        }

        li.nav-menu-list-element {
          height: 50px !important;
          width: 100%;

          a {
            height: 100%;
            width: 100%;

            span {
              font-size: 1.5rem;
            }

            div {
              display: none;
            }
          }
        }
      }

      input.nav-menu-toggle {
        + label {
          display: block !important;
        }
      }
    }
  }
}
</style>