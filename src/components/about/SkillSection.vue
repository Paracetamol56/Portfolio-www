<i18n>
{
  "en": {
    "title": "Skills and technologies",
    "language-subtitle": "Languages",
    "skill-subtitle": "Key skills",
    "technologies-subtitle": "Mastered technologies",
    "skills": [
      {
        "title": "Software programming",
        "description": "Partly self-taught and partly at school, I learned over the years to design and create computer programs.",
      },
      {
        "title": "Algorithm",
        "description": "With my Cartesian mind, I love designing algorithms that I use in my projects. Curious, I also like to understand the mathematics behind the technologies I use every day.",
      },
      {
        "title": "Problems solving",
        "description": "I often define my job as a series of problems to be solved. It is extremely important for me to know how to define, analyze and propose a solution to these problems."
      },
      {
        "title": "Project management",
        "description": "Around me, I am recognized for my skills in this area. Both technically with Git versioning and humanly with the distribution of tasks and Agile or Scrum methods.",
      },
      {
        "title": "Video game development",
        "description": "During my training, I learned to use a game engine such as Unity or Unreal Engine in 2D as well as 3D or even in virtual reality.",
      },
      {
        "title": "Server management",
        "description": "As a great self-hosting enthusiast, I learned to deploy, maintain and administer server-based services mainly on my own.",
      },
    ],
  },
  "fr": {
    "title": "Compétences et technologies",
    "language-subtitle": "Langues",
    "skill-subtitle": "Compétences clés",
    "technologies-subtitle": "Technologies maîtrisées",
    "skills": [
      {
        "title": "Programation logicielle",
        "description": "En partie en autodidacte et en partie avec ma formation, j’ai appris au fil des années à concevoir et à réaliser des programmes informatiques.",
      },
      {
        "title": "Algorithmie",
        "description": "Avec mon esprit cartésien, j’adore concevoir des algorithmes que j’utilise dans mes projets. Curieux, j’aime aussi comprendre les mathématiques derrière les technologies que j’utilise tous les jours.",
      },
      {
        "title": "Résolution de problèmes",
        "description": "Je définis souvent mon métier comme une suite de problèmes à résoudre. C’est pour moi extrêmement important de savoir définir, analyser et proposer une solution à ces problèmes.",
      },
      {
        "title": "Gestion de projet",
        "description": "Autour de moi, je suis reconnu pour mes compétences dans ce domaine. Aussi bien techniquement avec le versionnage Git qu’humainement avec la répartition des tâches et les méthodes Agile ou Scrum.",
      },
      {
        "title": "Développement de jeux vidéo",
        "description": "Au cours de ma formation, j'ai appris à me servir de moteur de jeu tel que Unity ou Unreal Engine aussi bien en 2D que 3D ou même en réalité virtuelle.",
      },
      {
        "title": "Gestion de serveurs",
        "description": "Grand enthousiaste de l’auto-hébergement, j’ai appris à déployer, maintenir et administrer des services sur serveur principalement en autodidacte.",
      },
    ],
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
        <ul class="skill-list">
          <li class="skill-item">
            <div class="skill-item-content">
              <div class="skill-item-content-visible">
                <i class="fas fa-laptop-code"></i>
                <h4 class="skill-item-title">
                  {{ $t("skills.0.title") }}
                </h4>
              </div>
              <div class="skill-item-content-invisible">
                <p class="skill-item-description">
                  {{ $t("skills.0.description") }}
                </p>
              </div>
            </div>
          </li>
          <li class="skill-item">
            <div class="skill-item-content">
              <div class="skill-item-content-visible">
                <i class="fas fa-cogs"></i>
                <h4 class="skill-item-title">
                  {{ $t("skills.1.title") }}
                </h4>
              </div>
              <div class="skill-item-content-invisible">
                <p class="skill-item-description">
                  {{ $t("skills.1.description") }}
                </p>
              </div>
            </div>
          </li>
          <li class="skill-item">
            <div class="skill-item-content">
              <div class="skill-item-content-visible">
                <i class="fas fa-brain"></i>
                <h4 class="skill-item-title">
                  {{ $t("skills.2.title") }}
                </h4>
              </div>
              <div class="skill-item-content-invisible">
                <p class="skill-item-description">
                  {{ $t("skills.2.description") }}
                </p>
              </div>
            </div>
          </li>
          <li class="skill-item">
            <div class="skill-item-content">
              <div class="skill-item-content-visible">
                <i class="fas fa-tasks"></i>
                <h4 class="skill-item-title">
                  {{ $t("skills.3.title") }}
                </h4>
              </div>
              <div class="skill-item-content-invisible">
                <p class="skill-item-description">
                  {{ $t("skills.3.description") }}
                </p>
              </div>
            </div>
          </li>
          <li class="skill-item">
            <div class="skill-item-content">
              <div class="skill-item-content-visible">
                <i class="fas fa-gamepad"></i>
                <h4 class="skill-item-title">
                  {{ $t("skills.4.title") }}
                </h4>
              </div>
              <div class="skill-item-content-invisible">
                <p class="skill-item-description">
                  {{ $t("skills.4.description") }}
                </p>
              </div>
            </div>
          </li>
          <li class="skill-item">
            <div class="skill-item-content">
              <div class="skill-item-content-visible">
                <i class="fas fa-server"></i>
                <h4 class="skill-item-title">
                  {{ $t("skills.5.title") }}
                </h4>
              </div>
              <div class="skill-item-content-invisible">
                <p class="skill-item-description">
                  {{ $t("skills.5.description") }}
                </p>
              </div>
            </div>
          </li>
        </ul>
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
ul.skill-list {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  li.skill-item {
    height: 200px;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(
      135deg,
      rgba(44, 27, 79, 0.6274509804) 70%,
      rgba(17, 20, 22, 0.6274509804) 100%
    );
    background-size: 400%;
    background-position: 100%;
    transition: background-position 1s var(--easing);
    .skill-item-content {
      width: 100%;
      height: 200%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      transform: translateY(0);
      transition: transform 0.5s var(--easing);
      .skill-item-content-visible {
        flex: 0.5;
        width: 100%;
        margin: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i.fas {
          width: 100%;
          margin-top: auto;
          text-align: center;
          font-size: 4rem;
          color: var(--secondary-color);
        }
        h4.skill-item-title {
          width: 100%;
          margin-bottom: auto;
          text-align: center;
          font-size: 1.5rem;
        }
      }
      .skill-item-content-invisible {
        flex: 0.5;
        width: 100%;
        margin: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          text-align: center;
        }
      }
    }
    &:hover {
      background-position: 0%;
      .skill-item-content {
        transform: translateY(-50%);
      }
    }
  }
}
</style>