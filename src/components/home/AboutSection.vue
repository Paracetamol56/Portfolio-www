<i18n>
{
  "en": {
    "title": "Presentation",
    "main-paragraph": "New technologies are taking a growing place in our lives. This is why I'm currently studying computer science, a field that I want to apply to concrete causes. Curious and having the will to learn, I like to discover and get involved in new areas of technology: artificial intelligence, web, embedded systems, etc...",
    "occupations": {
      "1": {
        "strong": "Computer science student",
        "normal": " in Annecy (France)"
      },
      "2": {
        "strong": "Work-study student in web development and server management",
        "normal": " at Hunimalis in Annecy (France)"
      },
    },
  },
  "fr": {
    "title": "Présentation",
    "main-paragraph":
      "Les technologies sont en train de s'intéresser. C'est pourquoi aujourd'hui je suis en train de faire des études en informatique. C'est pourquoi je suis curieux et à l'esprit de découvrir et de participer à des nouveaux domaines de technologie: intelligence artificielle, web, systèmes embarqués, etc…",
    "occupations": {
      "1": {
        "strong": "Etudiant en informatique",
      "normal": " à Annecy"
      },
      "2": {
        "strong": "Etudiant en alternance dans le développement web et la gestion de serveurs",
        "normal": " chez Hunimalis en Annecy"
      }
    },
  }
}
</i18n>

<template>
  <section id="about" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("title") }}
        </h2>
        <hr />
      </div>
      <div class="about-introduction fade-in">
        <p v-html="$t('main-paragraph')"></p>
      </div>
      <div class="about-occupation fade-in">
        <p>
          <b>{{ $t("occupations.1.strong") }}</b>
          {{ $t("occupations.1.normal") }}
        </p>
        <p>
          <b>{{ $t("occupations.2.strong") }}</b>
          {{ $t("occupations.2.normal") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    number: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
section#about {
  .about-introduction {
    font-size: 1.25rem;
    text-align: justify;
  }

  .about-occupation {
    font-size: 1rem;
    text-align: left;
    margin: 16px 0;
    p {
      margin: 4px 0;
      b {
        background: var(--primary-color);
        color: var(--background-color);
        padding: 0 4px;
      }
    }
  }
}
</style>