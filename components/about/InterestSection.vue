<script lang="ts" setup>
import { Atom, Bike, Cpu, Telescope } from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps({
	number: {
		type: String,
		required: true,
	},
});
</script>

<template>
  <section id="interest">
    <div class="container">
      <div class="section-title fade-in">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("about.interest.title") }}
        </h2>
        <hr />
      </div>
      <div class="interest-wrapper">
        <div class="interest-row fade-in">
          <div class="interest-row-illustration">
            <Telescope size="256" stroke-width="1" color="var(--primary-color)" />
            <svg
              id="astronomy-vector"
              class="interest-row-illustration-vector"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 500 500"
            >
              <defs>
                <radialGradient
                  id="radial-gradient-1"
                  cx="186.4"
                  cy="330.79"
                  r="102.5"
                  gradientTransform="translate(-204.62 -556.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ad56e3" stop-opacity="0.3" />
                  <stop
                    offset="0.01"
                    stop-color="#ad56e3"
                    stop-opacity="0.29"
                  />
                  <stop
                    offset="0.27"
                    stop-color="#ad56e3"
                    stop-opacity="0.16"
                  />
                  <stop
                    offset="0.52"
                    stop-color="#ad56e3"
                    stop-opacity="0.07"
                  />
                  <stop
                    offset="0.76"
                    stop-color="#ad56e3"
                    stop-opacity="0.02"
                  />
                  <stop offset="1" stop-color="#ad56e3" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-2"
                  cx="152.78"
                  cy="302.5"
                  r="52.48"
                  gradientTransform="translate(-204.62 -556.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#5f78ef" stop-opacity="0.1" />
                  <stop
                    offset="0.17"
                    stop-color="#5f78ef"
                    stop-opacity="0.07"
                  />
                  <stop
                    offset="0.59"
                    stop-color="#5f78ef"
                    stop-opacity="0.02"
                  />
                  <stop offset="1" stop-color="#5f78ef" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-3"
                  cx="230.68"
                  cy="322.18"
                  r="52.48"
                  xlink:href="#radial-gradient-2"
                />
              </defs>
              <g id="Gradients">
                <circle
                  id="MainGradient"
                  class="cls-3"
                  cx="250"
                  cy="250"
                  r="250"
                />
                <circle
                  id="Gradient3"
                  class="cls-4"
                  cx="168"
                  cy="181"
                  r="128"
                />
                <circle
                  id="Gradient4"
                  class="cls-5"
                  cx="358"
                  cy="229"
                  r="128"
                />
              </g>
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">
              {{ $t("about.interest.1.title") }}
            </h3>
            <p class="interest-row-description">
              {{ $t("about.interest.1.description") }}
            </p>
          </div>
        </div>
        <div class="interest-row fade-in">
          <div class="interest-row-illustration">
            <Cpu size="256" stroke-width="1" color="var(--primary-color)" />
            <svg
              id="electronic-vector"
              class="interest-row-illustration-vector"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 500 500"
            >
              <defs>
                <radialGradient
                  id="radial-gradient-4"
                  cx="200.75"
                  cy="345.14"
                  r="88.15"
                  gradientTransform="translate(-204.62 -556.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#df7bf5" stop-opacity="0.3" />
                  <stop
                    offset="0.05"
                    stop-color="#df7bf5"
                    stop-opacity="0.27"
                  />
                  <stop
                    offset="0.29"
                    stop-color="#df7bf5"
                    stop-opacity="0.15"
                  />
                  <stop
                    offset="0.53"
                    stop-color="#df7bf5"
                    stop-opacity="0.07"
                  />
                  <stop
                    offset="0.77"
                    stop-color="#df7bf5"
                    stop-opacity="0.02"
                  />
                  <stop offset="1" stop-color="#df7bf5" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-5"
                  cx="154.42"
                  cy="322.59"
                  r="62.73"
                  gradientTransform="translate(-204.62 -556.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#8251e9" stop-opacity="0.1" />
                  <stop
                    offset="0.16"
                    stop-color="#8251e9"
                    stop-opacity="0.07"
                  />
                  <stop
                    offset="0.59"
                    stop-color="#8251e9"
                    stop-opacity="0.02"
                  />
                  <stop offset="1" stop-color="#8251e9" stop-opacity="0" />
                </radialGradient>
              </defs>
              <g id="Gradients">
                <circle
                  id="MainGradient"
                  class="cls-1"
                  cx="285"
                  cy="285"
                  r="215"
                />
                <circle
                  id="Gradient3"
                  class="cls-2"
                  cx="172"
                  cy="230"
                  r="153"
                />
              </g>
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">
              {{ $t("about.interest.2.title") }}
            </h3>
            <p class="interest-row-description">
              {{ $t("about.interest.2.description") }}
            </p>
          </div>
        </div>
        <div class="interest-row fade-in">
          <div class="interest-row-illustration">
            <Atom size="256" stroke-width="1" color="var(--primary-color)" />
            <svg
              id="science-vector"
              class="interest-row-illustration-vector"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 455 479"
            >
              <defs>
                <radialGradient
                  id="radial-gradient-6"
                  cx="168.77"
                  cy="321.36"
                  r="88.15"
                  gradientTransform="translate(-196.62 -568.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#8251e9" stop-opacity="0.3" />
                  <stop
                    offset="0.03"
                    stop-color="#8251e9"
                    stop-opacity="0.28"
                  />
                  <stop
                    offset="0.28"
                    stop-color="#8251e9"
                    stop-opacity="0.16"
                  />
                  <stop
                    offset="0.52"
                    stop-color="#8251e9"
                    stop-opacity="0.07"
                  />
                  <stop
                    offset="0.77"
                    stop-color="#8251e9"
                    stop-opacity="0.02"
                  />
                  <stop offset="1" stop-color="#8251e9" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-7"
                  cx="204.44"
                  cy="366.87"
                  r="62.73"
                  gradientTransform="translate(-196.62 -568.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#df7bf5" stop-opacity="0.1" />
                  <stop
                    offset="0.18"
                    stop-color="#df7bf5"
                    stop-opacity="0.07"
                  />
                  <stop offset="0.6" stop-color="#df7bf5" stop-opacity="0.02" />
                  <stop offset="1" stop-color="#df7bf5" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-8"
                  cx="201.16"
                  cy="289.38"
                  r="40.18"
                  xlink:href="#radial-gradient-7"
                />
              </defs>
              <g id="Gradients">
                <circle
                  id="MainGradient"
                  class="cls-1"
                  cx="215"
                  cy="215"
                  r="215"
                />
                <circle
                  id="Gradient3"
                  class="cls-2"
                  cx="302"
                  cy="326"
                  r="153"
                />
                <circle
                  id="Gradient3-2"
                  data-name="Gradient3"
                  class="cls-3"
                  cx="294"
                  cy="137"
                  r="98"
                />
              </g>
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">
              {{ $t("about.interest.3.title") }}
            </h3>
            <p class="interest-row-description">
              {{ $t("about.interest.3.description") }}
            </p>
          </div>
        </div>
        <div class="interest-row fade-in">
          <div class="interest-row-illustration">
            <Bike size="256" stroke-width="1" color="var(--primary-color)" />
            <svg
              id="sport-vector"
              class="interest-row-illustration-vector"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 481.72 480"
            >
              <defs>
                <radialGradient
                  id="radial-gradient-9"
                  cx="183"
                  cy="331.61"
                  r="98.4"
                  gradientTransform="translate(-204.62 -568.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#5f78ef" stop-opacity="0.3" />
                  <stop
                    offset="0.04"
                    stop-color="#5f78ef"
                    stop-opacity="0.28"
                  />
                  <stop
                    offset="0.29"
                    stop-color="#5f78ef"
                    stop-opacity="0.16"
                  />
                  <stop
                    offset="0.53"
                    stop-color="#5f78ef"
                    stop-opacity="0.07"
                  />
                  <stop
                    offset="0.77"
                    stop-color="#5f78ef"
                    stop-opacity="0.02"
                  />
                  <stop offset="1" stop-color="#5f78ef" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-10"
                  cx="142.23"
                  cy="331.04"
                  r="58.33"
                  gradientTransform="translate(-204.62 -568.81) scale(2.44 2.44)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#b4e2f9" stop-opacity="0.1" />
                  <stop
                    offset="0.19"
                    stop-color="#b4e2f9"
                    stop-opacity="0.07"
                  />
                  <stop offset="0.6" stop-color="#b4e2f9" stop-opacity="0.02" />
                  <stop offset="1" stop-color="#b4e2f9" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="radial-gradient-11"
                  cx="210.61"
                  cy="349.61"
                  r="42.82"
                  xlink:href="#radial-gradient-10"
                />
              </defs>
              <g id="Gradients">
                <circle
                  id="MainGradient"
                  class="cls-1"
                  cx="241.72"
                  cy="240"
                  r="240"
                />
                <circle
                  id="Gradient3"
                  class="cls-2"
                  cx="142.28"
                  cy="238.61"
                  r="142.28"
                />
                <circle
                  id="Gradient3-2"
                  data-name="Gradient3"
                  class="cls-3"
                  cx="309.07"
                  cy="283.9"
                  r="104.44"
                />
              </g>
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">
              {{ $t("about.interest.4.title") }}
            </h3>
            <p class="interest-row-description">
              {{ $t("about.interest.4.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section#interest {
  overflow: hidden;
  .interest-wrapper {
    margin: 5rem 0 7rem;
    .interest-row {
      margin: 3rem 0;
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex-direction: row;
      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
      .interest-row-illustration {
        position: relative;
        width: 40%;
        z-index: -1;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        // allow the svg to go outside the container

        svg.interest-row-illustration-vector {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          &#astronomy-vector {
            g#Gradients {
              transform-origin: center;
              transform: scale(0.8);
              transition: transform 0.5s var(--easing);
            }
            .cls-1 {
              fill: none;
              stroke: #8251e9;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 8.5px;
            }
            .cls-2 {
              fill: #8251e9;
            }
            .cls-3 {
              fill: url(#radial-gradient-1);
            }
            .cls-4 {
              fill: url(#radial-gradient-2);
            }
            .cls-5 {
              fill: url(#radial-gradient-3);
            }
          }
          &#electronic-vector {
            g#Gradients {
              transform-origin: center;
              transform: scale(0.8);
              transition: transform 0.5s var(--easing);
            }
            .cls-1 {
              fill: url(#radial-gradient-4);
            }
            .cls-2 {
              fill: url(#radial-gradient-5);
            }
            .cls-3 {
              fill: #8251e9;
            }
            .cls-4 {
              fill: none;
              stroke: #8251e9;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 8.5px;
            }
          }
          &#science-vector {
            g#Gradients {
              transform-origin: center;
              transform: scale(0.8);
              transition: transform 0.5s var(--easing);
            }
            .cls-1 {
              fill: url(#radial-gradient-6);
            }
            .cls-2 {
              fill: url(#radial-gradient-7);
            }
            .cls-3 {
              fill: url(#radial-gradient-8);
            }
            .cls-4 {
              fill: none;
              stroke: #8251e9;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 8.5px;
            }
            .cls-5 {
              fill: #8251e9;
            }
          }
          &#sport-vector {
            g#Gradients {
              transform-origin: center;
              transform: scale(0.8);
              transition: transform 0.5s var(--easing);
            }
            .cls-1 {
              fill: url(#radial-gradient-9);
            }
            .cls-2 {
              fill: url(#radial-gradient-10);
            }
            .cls-3 {
              fill: url(#radial-gradient-11);
            }
            .cls-4 {
              fill: none;
              stroke: #8251e9;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 8.5px;
            }
          }
        }
      }
      .interest-row-content {
        width: 60%;
        .interest-row-title {
          margin: 0.2rem 0;
          font-size: 2rem;
          font-weight: bold;
          color: var(--text-color);
        }
        .interest-row-description {
          font-size: 1rem;
          color: var(--text-color);
        }
      }
      &:hover {
        .interest-row-illustration svg.interest-row-illustration-vector {
          &#astronomy-vector {
            g#Gradients {
              transform: scale(1);
            }
          }
          &#electronic-vector {
            #Gradients {
              transform: scale(1);
            }
          }
          &#science-vector {
            #Gradients {
              transform: scale(1);
            }
          }
          &#sport-vector {
            #Gradients {
              transform: scale(1);
            }
          }
        }
      }
      @media (max-width: 991px) {
        flex-direction: row;
        .interest-row-illustration {
          display: none;
        }
        .interest-row-content {
          width: 100%;
        }
      }
    }
  }
}
</style>