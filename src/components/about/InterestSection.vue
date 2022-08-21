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
            <div class="interest-row-illustration-gradient"></div>
            <svg
              id="astronomy-vector"
              class="interest-row-illustration-vector"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 520 500"
            >
              <defs>
                <radialGradient
                  id="radial-gradient"
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
            <div class="interest-row-illustration-gradient"></div>
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
            <div class="interest-row-illustration-gradient"></div>
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
            <div class="interest-row-illustration-gradient"></div>
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
  .interest-wrapper {
    margin-top: 5rem;
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
              fill: url(#radial-gradient);
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
        }
      }
    }
  }
}
</style>