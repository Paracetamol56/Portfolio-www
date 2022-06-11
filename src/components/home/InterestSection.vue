<template>
  <section id="interests">
    <div class="container">
      <div class="section-title fade-in">
        <h2>
          <span class="section-title-number">03.</span> Intérêts & loisirs
        </h2>
        <hr />
      </div>

      <div class="interests-container">
        <div class="interest fade-in">
          <h3 class="interest-title">Astronomie</h3>
          <div class="interest-content">
            <i class="interest-logo fas fa-star"></i>
            <p>
              Depuis très jeune, je suis attiré par les étoiles avec la volonté
              d’en apprendre plus sur notre univers. Je pratique l’astronomie
              amateur dans un club ce qui me permet de rencontrer d’autre
              personne qui partage la même passion.
            </p>
          </div>
        </div>
        <div class="interest fade-in">
          <h3 class="interest-title">Electronique</h3>
          <div class="interest-content">
            <i class="interest-logo fas fa-microchip"></i>
            <p>
              Initier par mon père, j’aime aussi créer mes propres montages
              électroniques en particulier avec l’aide de cartes Arduino ou de
              Raspberry Pi. C’est pour moi une application concrète de
              l’informatique de je trouve motivante et formatrice.
            </p>
          </div>
        </div>
        <div class="interest fade-in">
          <h3 class="interest-title">Science</h3>
          <div class="interest-content">
            <i class="interest-logo fas fa-flask"></i>
            <p>
              Je suis passionné de science en tout genre, physique, biologie,
              etc. et j’aime en apprendre plus sur notre monde. De plus avec mon
              esprit cartésien, j’apprécie énormément la méthode scientifique.
            </p>
          </div>
        </div>
        <div class="interest fade-in">
          <h3 class="interest-title">Sports</h3>
          <div class="interest-content">
            <i class="interest-logo fas fa-running"></i>
            <p>
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
};
</script>

<style scoped lang="scss">
.interests-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
}

.interest {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  .interest-title {
    font-family: "Fira Code", monospace;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 5px 0;
    color: #b4e2f9;
  }

  .interest-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: justify;

    .interest-logo {
      font-size: 3rem;
      color: #b4e2f9;
      width: 3rem;
      height: 3rem;
      margin-top: 16px;
      margin-right: 10px;
    }
  }
}
</style>