<template>
  <section id="about" class="fade-in">
    <div class="container">
      <div class="about-occupation fade-in">
        <p>
          <b>Etudiant en informatique</b> spécialisé en imagerie numerique à
          l’Université Clermont Auvergne.<br />
          <b>En mobilité internationnale</b> au Cégep de Matane au Quebec.<br />
          <b>En stage de developpement web</b> chez Cosmoss, la Matanie.
        </p>
      </div>
      <div class="about-introduction fade-in">
        <p>
          Les nouvelles technologies prennent une place grandissante dans nos
          vies. C’est pourquoi j’étudie aujourd’hui l’informatique, domaine que
          je désire appliquer à des causes concrètes. Curieux et désireux
          d’apprendre, j’aime découvrir et m’investir dans de nouveaux domaines
          de la technologie : intelligence artificielle, web, systèmes
          embarqués, etc…
        </p>
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
  .about-introduction {
    grid-area: 1 / 1 / 2 / 3;
    font-size: 1.25rem;
    text-align: center;
  }

  .about-occupation {
    grid-area: 2 / 1 / 3 / 2;
    font-size: 1rem;
    text-align: center;
  }
}
</style>