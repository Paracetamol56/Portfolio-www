<template>
  <section id="about" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2><span class="section-title-number">01.</span> Présentation</h2>
        <hr />
      </div>
      <div class="about-grid">
        <div class="about-introduction fade-in">
          <p>
            Les nouvelles technologies prennent une place grandissante dans nos
            vies. C’est pourquoi j’étudie aujourd’hui l’informatique, domaine
            que je désire appliquer à des causes concrètes. Curieux et désireux
            d’apprendre, j’aime découvrir et m’investir dans de nouveaux
            domaines de la technologie : intelligence artificielle, web,
            systèmes embarqués, etc… Mon ambition sur le long terme est de
            travailler dans un secteur qui me tient très à cœur : l’aérospatial.
            En effet, ayant toujours été passionné par les étoiles, je désire
            participer au développement de l’humanité dans l’espace.
          </p>
        </div>
        <div class="about-picture fade-in">
          <img
            src="https://github.com/Paracetamol56/Portfolio/raw/master/public/images/portrait (light).png"
            alt="Mathéo Galuba"
          />
        </div>
        <div class="about-occupation fade-in">
          <h3><i class="fa-solid fa-building"></i> Occupation</h3>
          <p>
            <b>Etudiant en informatique</b> spécialisé en imagerie numerique à
            l’Université Clermont Auvergne.<br />
            <b>En mobilité internationnale</b> au Cégep de Matane au Quebec.
            <b>En stage de developpement web</b> chez Cosmoss, la Matanie.
          </p>
        </div>
        <div class="about-situation fade-in">
          <h3><i class="fa-solid fa-location-dot"></i> Situation</h3>
          <p>
            <b>Cégep de Matane</b><br />
            616 Avenue St Rédempteur,<br />
            Matane, QC G4W 1L1<br />
            Canada
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped lang="scss">
section#about {
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 0fr;
    grid-template-rows: 0fr 0fr;
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    overflow: hidden;

    .about-introduction {
      grid-area: 1 / 1 / 2 / 3;
      font-size: 1.4rem;
      text-align: justify;
    }

    .about-picture {
      grid-area: 1 / 3 / 3 / 4;
      max-height: 450px;
      margin-top: 22.4px;
      background-image: radial-gradient(circle, #2c1b4f 0%, #111416 100%);
      background-size: 100% 100%;
      background-position: center;
      transition: all 0.5s var(--easing);

      &:hover {
        background-size: 200% 200%;
      }

      img {
        width: 300px;
        object-fit: cover;
        overflow: hidden;
      }
    }

    @media only screen and (max-width: 1200px) {
      .about-picture {
        display: none;
      }
    }

    .about-occupation {
      grid-area: 2 / 1 / 3 / 2;
    }

    .about-situation {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
}
</style>