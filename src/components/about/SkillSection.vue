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
    "technologies": [
      {
        "name": "C++ <span class='fas fa-heart'></span>",
        "description": "High perfomance application with a good level of abstraction and multithreading, GUI (with QT and WXWidget), game development.",
      },
      {
        "name": "Python",
        "description": "Image rendering algorithms, artificial intelligence (with TensorFlow, PyTorch and Scikit Learn), computer vision (with OpenCV), data visualization (with Matplotlib).",
      },
      {
        "name": "Git",
        "description": "Version control, project management, code review (with Github and Gitlab)",
      },
      {
        "name": "Unity",
        "description": "2D, 3D and VR game development",
      },
      {
        "name": "Relational databases",
        "description": "MySQL, PostgreSQL, SQLite",
      },
      {
        "name": "Non-relational databases",
        "description": "Firebase",
      },
      {
        "name": "Front-end",
        "description": "HTML, CSS, JavaScript, VueJS and React",
      },
      {
        "name": "Backend",
        "description": "NodeJS, ExpressJS",
      },
      {
        "name": "3D modelling",
        "description": "Blender and 3DSMax",
      },
      {
        "name": "Adobe suite",
        "description": "Photoshop, Illustrator, After Effects, Premiere Pro",
      }
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
    "technologies": [
      {
        "title": "C++",
        "description": "Application haute performance avec un niveau d’abstraction élevé et multithreading, interface graphique (avec QT et WXWidget), développement de jeux.",
      },
      {
        "title": "Python",
        "description": "Algorithmes de synthèse d’images, intelligence artificielle (avec TensorFlow, PyTorch et Scikit Learn), vision numérique (avec OpenCV), visualisation de données (avec Matplotlib).",
      },
      {
        "title": "Git",
        "description": "Versionnage, gestion de projet, révision de code (avec Github et Gitlab)",
      },
      {
        "title": "Unity",
        "description": "Développement de jeux 2D, 3D et VR",
      },
      {
        "title": "Bases de données relationnelles",
        "description": "MySQL, PostgreSQL, SQLite",
      },
      {
        "title": "Bases de données non-relationnelles",
        "description": "Firebase",
      },
      {
        "title": "Web frontend",
        "description": "HTML, CSS, JavaScript, VueJS et React",
      },
      {
        "title": "Web backend",
        "description": "NodeJS, ExpressJS",
      },
      {
        "title": "Modélisation 3D",
        "description": "Blender et 3DSMax",
      },
      {
        "title": "Suites Adobe",
        "description": "Photoshop, Illustrator, After Effects et Premiere Pro",
      }
    ]
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
        <h3 class="fillTextWithgradient">
          {{ $t("language-subtitle") }}
        </h3>
      </div>
      <div>
        <h3 class="fillTextWithgradient">
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
        <h3 class="fillTextWithgradient">
          {{ $t("technologies-subtitle") }}
        </h3>
      </div>
      <ul class="tech-list">
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/C++.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.0.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.0.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Python.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.1.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.1.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Git.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.2.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.2.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Unity.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.3.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.3.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/SQL.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.4.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.4.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Firebase.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.5.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.5.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Frontend.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.6.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.6.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Nodejs.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.7.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.7.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Blender.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.8.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.8.description')"></span>
            <br />*/
          </p>
        </li>
        <li class="tech-item">
          <img
            class="tech-item-icon"
            src="@/assets/img/technologies/Adobe.svg"
            alt="-icon"
          />
          <p class="tech-item-name" v-html="$t('technologies.9.name')"></p>
          <p class="tech-item-description">
            /*<br />
            <span v-html="$t('technologies.9.description')"></span>
            <br />*/
          </p>
        </li>
      </ul>
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
h3 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
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
ul.tech-list {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem 1rem;
  li.tech-item {
    display: grid;
    grid-template-columns: 0fr 1fr;
    grid-template-rows: 0fr 0fr;
    gap: 0.5rem;
    grid-template-areas:
      "icon name"
      "icon description";
    img.tech-item-icon {
      grid-area: icon;
      width: 60px;
      height: 60px;
      margin: auto;
    }
    p.tech-item-name {
      grid-area: name;
      position: relative;
      width: fit-content;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-color);
      margin: 0;
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        left: -2px;
        right: -2px;
        z-index: -1;
        background-color: var(--primary-color);
        transform: scaleX(0%);
        transform-origin: right;
        transition: transform 0.25s var(--easing);
      }
    }
    p.tech-item-description {
      grid-area: description;
      font-size: 1rem;
      color: var(--comment-color);
      margin: 0;
    }
    &:hover {
      .tech-item-name {
        &::before {
          transform: scaleX(100%);
          transform-origin: left;
        }
      }
    }
  }
}
</style>