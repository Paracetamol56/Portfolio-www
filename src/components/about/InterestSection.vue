<i18n>
{
	"en": {
		"title": "Interests",
	},
	"fr": {
		"title": "Centres d'intérêts",
	}
}
</i18n>

<template>
  <section id="interest">
    <div class="container">
      <div class="section-title fade-in">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("title") }}
        </h2>
        <hr />
      </div>
      <div class="interest-wrapper">
        <div class="interest-row">
          <div class="interest-row-illustration">
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
              <g id="Telescope">
                <g id="Stand">
                  <circle class="cls-1" cx="249.42" cy="253.21" r="15.36" />
                  <line
                    class="cls-1"
                    x1="256.21"
                    y1="268.34"
                    x2="281.94"
                    y2="320.51"
                  />
                  <line
                    class="cls-1"
                    x1="216.9"
                    y1="320.51"
                    x2="242.63"
                    y2="268.34"
                  />
                </g>
                <g id="Tube">
                  <path
                    class="cls-2"
                    d="M181.75,176l30.55,10.58-17.63,50.9L164.13,226.9,181.75,176m0-8.51a8.5,8.5,0,0,0-8,5.73l-17.63,50.9a8.51,8.51,0,0,0,5.25,10.82l30.55,10.58a8.72,8.72,0,0,0,2.78.47,8.51,8.51,0,0,0,8-5.73l17.63-50.9a8.51,8.51,0,0,0-5.26-10.82L184.53,168a8.72,8.72,0,0,0-2.78-.47Z"
                  />
                  <path
                    class="cls-1"
                    d="M266.36,257.5l50.07,14.05a7.23,7.23,0,0,0,8.78-4.59l7.9-22.82a7.22,7.22,0,0,0-4.06-9l-97.6-40.39"
                  />
                  <line
                    class="cls-1"
                    x1="214.75"
                    y1="242.94"
                    x2="232.94"
                    y2="248.47"
                  />
                  <line
                    class="cls-1"
                    x1="340.4"
                    y1="268.61"
                    x2="345.96"
                    y2="252.55"
                  />
                </g>
              </g>
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
            <h3 class="interest-row-title">Astronomy</h3>
            <p class="interest-row-description">
              Depuis très jeune, je suis attiré par les étoiles avec la volonté
              d’en apprendre plus sur notre univers. Je pratique l’astronomie
              amateur dans un club ce qui me permet de rencontrer d’autre
              personne qui partage la même passion.
            </p>
          </div>
        </div>
        <div class="interest-row">
          <div class="interest-row-illustration">
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
              <g id="Chip">
                <path
                  class="cls-3"
                  d="M279,221v58H221V221h58m0-8.5H221a8.49,8.49,0,0,0-8.5,8.5v58a8.49,8.49,0,0,0,8.5,8.5h58a8.49,8.49,0,0,0,8.5-8.5V221a8.49,8.49,0,0,0-8.5-8.5Z"
                />
                <path
                  class="cls-3"
                  d="M279,202a19,19,0,0,1,19,19V279a19,19,0,0,1-19,19H221a19,19,0,0,1-19-19V221a19,19,0,0,1,19-19H279m0-8.5H221A27.57,27.57,0,0,0,193.5,221V279A27.57,27.57,0,0,0,221,306.5H279A27.57,27.57,0,0,0,306.5,279V221A27.57,27.57,0,0,0,279,193.5Z"
                />
                <line class="cls-4" x1="197" y1="227" x2="179" y2="227" />
                <line class="cls-4" x1="197" y1="250" x2="179" y2="250" />
                <line class="cls-4" x1="197" y1="273" x2="179" y2="273" />
                <line class="cls-4" x1="303" y1="227" x2="321" y2="227" />
                <line class="cls-4" x1="303" y1="250" x2="321" y2="250" />
                <line class="cls-4" x1="303" y1="273" x2="321" y2="273" />
                <line class="cls-4" x1="227" y1="179.25" x2="227" y2="196.75" />
                <line class="cls-4" x1="250" y1="179.25" x2="250" y2="196.75" />
                <line class="cls-4" x1="273" y1="179.25" x2="273" y2="196.75" />
                <line class="cls-4" x1="227" y1="303.25" x2="227" y2="320.75" />
                <line class="cls-4" x1="250" y1="303.25" x2="250" y2="320.75" />
                <line class="cls-4" x1="273" y1="303.25" x2="273" y2="320.75" />
              </g>
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">Electronique</h3>
            <p class="interest-row-description">
              Initier par mon père, j’aime aussi créer mes propres montages
              électroniques en particulier avec l’aide de cartes Arduino ou de
              Raspberry Pi. C’est pour moi une application concrète de
              l’informatique de je trouve motivante et formatrice.
            </p>
          </div>
        </div>
        <div class="interest-row">
          <div class="interest-row-illustration">
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
              <g id="Erlen">
                <path
                  class="cls-4"
                  d="M225.4,231.5h6V270L199,341.31a15,15,0,0,0,13.65,21.19h74.66A15,15,0,0,0,301,341.31L268.6,270V231.5h6"
                  transform="translate(8 -12)"
                />
                <circle class="cls-4" cx="230.5" cy="172.5" r="18" />
                <circle class="cls-4" cx="271.5" cy="134.5" r="9" />
                <circle class="cls-4" cx="277.5" cy="327.5" r="9" />
                <circle class="cls-5" cx="268.75" cy="201.75" r="6.25" />
                <circle class="cls-5" cx="248.75" cy="288.75" r="6.25" />
                <line
                  class="cls-4"
                  x1="222.5"
                  y1="303.8"
                  x2="293.5"
                  y2="303.5"
                />
              </g>
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">Science</h3>
            <p class="interest-row-description">
              Je suis passionné de science en tout genre, physique, biologie,
              etc. et j’aime en apprendre plus sur notre monde. De plus avec mon
              esprit cartésien, j’apprécie énormément la méthode scientifique.
            </p>
          </div>
        </div>
        <div class="interest-row">
          <div class="interest-row-illustration">
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
              <circle class="cls-4" cx="270.99" cy="166.98" r="12.98" />
              <path
                class="cls-4"
                d="M258,202.1l-15.75,40.15a19,19,0,0,0,6,21.86L286.41,294l-12.54,40"
                transform="translate(0 -12)"
              />
              <path
                class="cls-4"
                d="M195.28,213.59l23.19-19.47A109.7,109.7,0,0,1,258,202.05c14.45,5.74,21.24,19.6,24.11,27.93a9.91,9.91,0,0,0,9.37,6.68h16.63"
                transform="translate(0 -12)"
              />
              <polyline
                class="cls-4"
                points="231.33 259.27 225.21 274.41 191.88 274.41"
              />
            </svg>
          </div>
          <div class="interest-row-content">
            <h3 class="interest-row-title">Sports</h3>
            <p class="interest-row-description">
              Détestant ne rien faire, j’ai toujours pratiqué au moins un sport.
              Au-delà de l’aspect physique, cela m’aide à me détacher de mon
              écran et de mon travail. Natation, escrime, VTT, escalade, plongée
              sous-marine et parapente, j’ai fini par développer une passion
              pour les sports à risque. Ils m’ont appris à maitriser mon stress
              et à analyser chaque situation sans paniquer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InterestSection",
  props: {
    number: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
section#interest {
  overflow: hidden;
  .interest-wrapper {
    margin: 5rem 0 7rem 0;
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