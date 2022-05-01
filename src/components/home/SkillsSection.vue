<template>
  <section id="skills">
    <div class="container">
      <div class="section-title fade-in">
        <h2>
          <span class="section-title-number">02.</span> Compétences &
          technologies
        </h2>
        <hr />
      </div>

      <div>
        <h3 class="skill-header fade-in">Langues</h3>
        <div class="language-list">
          <div class="language french fade-in">
            <h5 class="language-title french">Bonjour !</h5>
            <hr class="language-separator french" />
            <p class="language-content french">
              <strong>Français</strong> langue maternelle
            </p>
          </div>
          <div class="language english fade-in">
            <h5 class="language-title english">Hello !</h5>
            <hr class="language-separator english" />
            <p class="language-content english">
              <strong>Anglais</strong> niveau intermédiaire
              <span class="languages-content-color">C1</span>
            </p>
          </div>
          <div class="language german fade-in">
            <h5 class="language-title german">Guten tag !</h5>
            <hr class="language-separator german" />
            <p class="language-content german">
              <strong>Allemand</strong> niveau basique
              <span class="languages-content-color">A2</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="skill-header fade-in">Compétences clés</h3>
        <ul class="skill-container">
          <li class="skill-element fade-in">
            <div class="skill-element-inside">
              <i class="fas fa-laptop-code"></i>
              <h4 class="skill-element-title">Programation logicielle</h4>
              <p>
                En partie en autodidacte et en partie avec ma formation, j’ai
                appris au fil des années à concevoir et à réaliser des
                programmes informatiques.
              </p>
            </div>
          </li>
          <li class="skill-element fade-in">
            <div class="skill-element-inside">
              <i class="fas fa-cogs"></i>
              <h4 class="skill-element-title">Algorithmie</h4>
              <p>
                Avec mon esprit cartésien, j’adore concevoir des algorithmes que
                j’utilise dans mes projets. Curieux, j’aime aussi comprendre les
                mathématique derrière les technologie que j’utilise tous les
                jours.
              </p>
            </div>
          </li>
          <li class="skill-element fade-in">
            <div class="skill-element-inside">
              <i class="fas fa-brain"></i>
              <h4 class="skill-element-title">Résolution de problèmes</h4>
              <p>
                Je défini souvent mon métier comme une suite de problèmes à
                résoudre. C’est pour moi extrêmement important de savoir
                définir, analyser et proposer une solution à ces problèmes.
              </p>
            </div>
          </li>
          <li class="skill-element fade-in">
            <div class="skill-element-inside">
              <i class="fas fa-tasks"></i>
              <h4 class="skill-element-title">Gestion de projet</h4>
              <p>
                Autour de moi, je suis reconnu pour mes compétence dans ce
                domaine. Aussi bien techniquement avec le versionnage Git
                qu’humainement avec la répartition des tâches et les méthode
                Agile, Scrum, etc.
              </p>
            </div>
          </li>
          <li class="skill-element fade-in">
            <div class="skill-element-inside">
              <i class="fas fa-gamepad"></i>
              <h4 class="skill-element-title">Développement de jeux vidéo</h4>
              <p>
                Au cours de ma formation j’ai appris à me servir de moteur de
                jeu tel que Unity ou Unreal Engine aussi bien en 2D que 3D ou
                même en réalité virtuelle.
              </p>
            </div>
          </li>
          <li class="skill-element fade-in">
            <div class="skill-element-inside">
              <i class="fas fa-server"></i>
              <h4 class="skill-element-title">Gestion de serveurs</h4>
              <p>
                Grand enthousiaste de l’auto hébergement, j’ai appris a
                déployer, maintenir et administrer des services sur serveur
                principalement en autodidacte.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="skill-header fade-in">Technologies maitrisés</h3>
        <ul class="technologies-container">
          <li class="technology fade-in">
            <img
              src="/images/technologies/C++.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>C++ 💜</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Python.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Python</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Git.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Git</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Unity.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Unity</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/SQL.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Base de données relationnelles (SQL...)</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Firebase.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Base de données non relationnelles (Firebase...)</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Frontend.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Web frontend (HTML, CSS, JavaScript...)</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Nodejs.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Web backend (Node.js, Express...)</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Adobe.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Suite Adobe (Photoshop, Illustrator...)</p>
          </li>
          <li class="technology fade-in">
            <img
              src="/images/technologies/Blender.svg"
              alt="Firebase.svg"
              draggable="false"
            />
            <p>Modélisation 3D (Blender)</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
};
</script>

<style scoped lang="scss">
.skill-header {
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
}

.language-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.language {
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: all 1s var(--easing);

  &:hover {
    > .language-flag {
      filter: blur(2px);
      opacity: 0.25;
      transition: all 0.5s var(--easing);
    }
  }

  .language-title {
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    font-size: 1.5rem;
    color: #b4e2f9;
    margin: 0;
    width: 100%;
    text-align: left;
    z-index: 2;
  }

  .language-separator {
    width: 100%;
    height: 2px;
    border: none;
    margin: 10px 0;
    z-index: 2;
  }

  .language-separator.french {
    background-image: linear-gradient(90deg, #b4e2f9 0%, #6a6ced 100%);
  }

  .language-separator.english {
    background-image: linear-gradient(90deg, #6a6ced 0%, #9f54e5 100%);
  }

  .language-separator.german {
    background-image: linear-gradient(90deg, #9f54e5 0%, #df7bf5 100%);
  }

  .language-content {
    font-size: 1.2rem;
    width: 100%;
    text-align: left;
    margin: 0;
    z-index: 2;
  }
}

.languages-content-color {
  color: #8251e9;
}

@media only screen and (max-width: 768px) {
  .language-list {
    flex-direction: column;
  }

  .language {
    width: 100%;
    margin: 20px 0;
  }
}

ul.skill-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 20px 0;
  padding: 0;

  li.skill-element {
    width: 100%;
    max-width: 400px;
    height: 150px;
    margin: 15px;
    border: #5f78ef 2px solid;
    border-radius: 5px;
    box-shadow: 0 0 20px #5f77ef9a;
    background-image: linear-gradient(135deg, #2c1b4f 70%, #111416 100%);
    background-position: 100%;
    background-size: 400%;
    overflow-y: hidden;
    transition: all 1s var(--easing);

    &:hover {
      background-position: 0%;
      transition: all 1s var(--easing);

      div.skill-element-inside {
        transform: translate(0, -85px);
        transition: all 0.5s var(--easing);

        h4.skill-element-title {
          color: #b4e2f9;
          transition: all 0.5s var(--easing);
        }
      }
    }

    div.skill-element-inside {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      transform: translate(0, 0);
      transition: all 0.5s var(--easing);

      i.fas {
        font-size: 4rem;
        color: #b4e2f9;
        margin: 20px;
      }

      h4.skill-element-title {
        font-family: "Roboto Mono", monospace;
        font-weight: 500;
        font-size: 1.2rem;
        text-align: center;
        color: #ffffff;
        margin-top: 0;
        margin-bottom: 15px;
      }

      p {
        text-align: center;
        margin: 0 6px;
      }
    }
  }
}

ul.technologies-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;

  li.technology {
    max-width: 400px;
    width: 100%;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    &:hover {
      img {
        filter: grayscale(0%);
        transition: all 0.5s var(--easing);
      }
    }

    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    p {
      color: #b4e2f9;
      font-size: 1.2rem;
      font-family: "Roboto Mono", monospace;
      font-weight: 500;
    }
  }
}

p.technology-name {
  color: #b4e2f9;
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  text-align: center;
}
</style>