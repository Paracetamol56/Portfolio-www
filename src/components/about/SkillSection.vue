<i18n>
{
  "en": {
    "title": "Skills and technologies",
    "language-subtitle": "Languages",
    "skill-subtitle": "Key skills",
    "technologies-subtitle": "Mastered technologies",
  },
  "fr": {
    "title": "Compétences et technologies",
    "language-subtitle": "Langues",
    "skill-subtitle": "Compétences clés",
    "technologies-subtitle": "Technologies maîtrisées",
  }
}
</i18n>

<template>
  <section id="formations" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("title") }}
        </h2>
        <hr />
      </div>
      <div>
        <h3>
          {{ $t("language-subtitle") }}
        </h3>
      </div>
      <div>
        <h3>
          {{ $t("skill-subtitle") }}
        </h3>
      </div>
      <div>
        <h3>
          {{ $t("technologies-subtitle") }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>