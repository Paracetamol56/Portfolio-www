<template>
    <section id="school" class="fade-in">
        <div class="container">

            <div class="section-title">
                <h2><span class="section-title-number">01.</span> Formation</h2>
                <hr>
            </div>

            <div class="cv-and-school">
                <div class="school-table">
                    <div class="fade-in school-table-tr">
                        <div class="school-table-years">
                            <p>2022</p>
                            <span></span>
                            <p>2022</p>
                        </div>
                        <div class="school-table-description">
                            <h3>
                                Dernière session d'IUT
                            </h3>
                            <p>
                                Cégep de Matane, Matane, Quebec
                            </p>
                            <p>
                                <strong>
                                    Compétences aquises :
                                </strong>
                                <br>
                            <ul>
                                <li>Analyse des risques et prevention en matière de securité informatique</li>
                                <li>Développement de jeu/simulation en réalité virtuelle</li>
                                <li>Développement d'un site portfolio</li>
                                <li>Maintenace de projet</li>
                                <li>Deployement de serveurs internet (AWS)</li>
                                <li>Intelligence artificielle évolutive</li>
                            </ul>
                            </p>
                            <a class="school-link" href="https://www.cegep-matane.qc.ca/" target="_blank">VOIR PLUS <i
                                    class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="fade-in school-table-tr">
                        <div class="school-table-years">
                            <p>2022</p>
                            <span></span>
                            <p>2020</p>
                        </div>
                        <div class="school-table-description">
                            <h3>
                                Diplôme universitaire technologique en informatique spécialisé en imagerie numérique
                            </h3>
                            <p>
                                IUT de l’Université Clermont Auvergne (UCA), Le Puy-en-Velay, France
                            </p>
                            <p>
                                <strong>
                                    Compétences aquises :
                                </strong>
                                <br>
                            </p>
                            <ul>
                                <li>Développement d'applications (C++, Qt)</li>
                                <li>Informatique avancée en imagerie numérique (Python, mathématiques 3D)</li>
                                <li>Conception d'applications 3D temps réel (Unity, C#)</li>
                                <li>Architecture et programmation des mécanismes de base d'un système informatique (C++)
                                </li>
                                <li>Programmation web backend : JavaScript avec le framework React Native et Express
                                </li>
                                <li>Programmation web frontend : HTML, CSS et Javascript</li>
                                <li>Gestion de bases de données relationnelles : SQL</li>
                                <li>Gestion de bases de données non relationnelles : Firebase</li>
                                <li>Mathématiques discrètes, algèbre linéaire</li>
                                <li>Anglais et informatique</li>
                                <li>Production de ressources 2D et 3D (Affinity Designer, 3dsMax)</li>
                            </ul>
                            <a class="school-link" href="https://ig.iut-clermont.fr/" target="_blank">VOIR PLUS <i
                                    class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="fade-in school-table-tr">
                        <div class="school-table-years">
                            <p>2020</p>
                            <span></span>
                            <p>2017</p>
                        </div>
                        <div class="school-table-description">
                            <h3>
                                Baccalauréat scientifique spécialisé en informatique et science du numerique
                            </h3>
                            <p>
                                Lycée polyvalent Saint Jacque de Compostelle, Le Puy-en-Velay, France
                            </p>
                            <a class="school-link" href="https://sites.google.com/a/sjc43.fr/sjc43/"
                                target="_blank">VOIR
                                PLUS <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <a class="cta-button fade-in"
                    href="https://github.com/Paracetamol56/Portfolio/raw/master/public/CV_web.pdf" target="_parent">
                    <span class="cta-button-text">Voir mon CV <i class="fas fa-download"></i></span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "SchoolSection",
};
</script>

<style scoped lang="scss">
.cv-and-school {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }

  .school-table {
    width: 100%;
    margin: 20px 0 0;
    padding: 0;
    border-collapse: collapse;
  }

  .school-table-tr {
    box-shadow: 0 0 20px #5f77ef9a;
    border: #5f78ef 2px solid;
    border-radius: 5px;
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-image: linear-gradient(135deg, #2c1b4f 70%, #111416 100%);
    background-position: 100%;
    background-size: 400%;
    transition: all 1s var(--easing);

    &:hover {
      background-position: 0%;
      transition: all 1s var(--easing);
    }
  }

  .school-table-years {
    padding: 10px;
    border: none;
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    font-size: 1.1rem;
    color: #b4e2f9;
    width: 50px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }

    span {
      position: absolute;
      left: auto;
      top: 35px;
      bottom: 35px;
      right: auto;
      width: 2px;
      background-color: #b4e2f9;
    }
  }

  .school-table-description {
    color: #ffffff;
    padding: 10px;
    border: none;
    margin-left: 70px;

    ul {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 20px;
      }
    }

    p {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 20px;
      }
    }

    h3 {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 20px;
      }
    }

    h4 {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 20px;
      }
    }
  }

  .school-link {
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    right: 15px;
    bottom: 10px;
    transition: all 0.5s var(--easing);

    &:hover {
      color: #8251e9;
      right: 10px;
      transition: all 0.5s var(--easing);
    }
  }
}
</style>