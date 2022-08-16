<i18n>
{
	"en": {
		"title": "Formation",
		"formation": [
			{
				"start": "2022",
				"end": "2022",
				"title": "International mobility in Quebec for the last semester of DUT",
				"school": "Cégep de Matane, Matane, QC Canada",
				"description": "<b>Skills acquired:</b><ul><li>Risk analysis and prevention in IT security</li><li>Virtual reality game/simulation development</li><li>Development of a portfolio/personal website</li><li>Project maintenance</li><li>Cloud computing and deployment of web servers: Amazon Web Services (AWS)</li><li>Evolutionary artificial intelligence</li></ul>",
				"link": "https://www.cegep-matane.qc.ca/"
			},
			{
				"start": "2020",
				"end": "2022",
				"title": "Technological university degree in computer science specialized in digital imaging",
				"school": "Institute of Technology (IUT) of the Université Clermont Auvergne (UCA), Le Puy-en-Velay, France",
				"description": "<b>Skills acquired:</b><ul><li>Application development (C++, Qt)</li><li>Advanced computing in digital imaging (Python, 3D mathematics)</li><li>Design of real-time 3D applications (Unity, C#)</li><li>Architecture and programming of the basic mechanisms of a computer system (C++)</li><li>Backend web programming: Javascript/TypeScript with the React Native and Express framework</li><li>Frontend web programming: HTML, CSS and JavaScript</li><li>Management of relational databases: MySQL</li><li>Non-relational database management: Firebase</li><li>Discrete mathematics, linear algebra</li><li>English and IT</li><li>Production of 2D and 3D assets (Affinity Designer, 3dsMax, Substance Painter)</li></ul>",
				"link": "https://ig.iut-clermont.fr/"
			},
			{
				"start": "2017",
				"end": "2020",
				"title": "Scientific baccalauréat specialized in computer science",
				"school": "Polyvalent high school Saint Jacque de Compostelle, Le Puy-en-Velay, France",
				"description": "",
				"link": "https://sites.google.com/a/sjc43.fr/sjc43/"
			}
		],
		"school-website-button": "Visit school website",
	},
	"fr": {
		"title": "Formation",
		"formations": [
			{
				"start": "2022",
				"end": "2022",
				"title": "Mobilité internationale au Québec pour le dernière semestre de DUT",
				"school": "Cégep de Matane, Matane, QC Canada",
				"description": "<b>Compétences acquises:</b><ul><li>Analyse des risques et prevention en matière de securité informatique</li><li>Développement de jeu/simulation en réalité virtuelle</li><li>Développement de portfolio/site personnel</li><li>Maintenance de projets</li><li>Cloud computing et déploiement de serveurs web : Amazon Web Services (AWS)</li><li>Intelligence artificielle évolutionniste</li></ul>",
				"link": "https://www.cegep-matane.qc.ca/"
			},
			{
				"start": "2020",
				"end": "2022",
				"title": "Diplôme universitaire technologique en informatique spécialisé en imagerie numérique",
				"school": "IUT de l’Université Clermont Auvergne (UCA), Le Puy-en-Velay, France",
				"description": "<b>Compétences acquises:</b><ul><li>Développement d'applications (C++, Qt)</li><li>Informatique avancée en imagerie numérique  (Python, mathématiques 3D)</li><li>Conception d'applications 3D temps réel (Unity, C#)</li><li>Architecture et programmation des mécanismes de base d'un système informatique (C++)</li><li>Programmation web backend : Javascript/TypeScript avec les frameworks React Native et Express</li><li>Programmation web frontend : HTML, CSS et JavaScript</li><li>Gestion de bases de données relationnelles : MySQL</li><li>Gestion de bases de données non-relationnelles : Firebase</li><li>Mathématiques discrètes, algèbre linéaire</li><li>Anglais et informatique</li><li>Production d'assets 2D et 3D (Affinity Designer, 3dsMax, Substance Painter)</li></ul>",
				"link": "https://ig.iut-clermont.fr/",
			},
			{
				"start": "2017",
				"end": "2020",
				"title": "Baccalauréat scientifique spécialisé en informatique et science du numerique",
				"school": "Lycée polyvalent Saint Jacque de Compostelle, Le Puy-en-Velay, France",
				"description": "",
				"link": "https://sites.google.com/a/sjc43.fr/sjc43/",
			},
		],
		"school-website-button": "Visiter le site de l'école",
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
      <ul class="formation-list">
        <li class="formation-item">
          <div class="formatioon-item-timeline">
            <p class="formation-start-date">{{ $t("formations.0.start") }}</p>
            <span class="formation-start-date-separator"></span>
            <p class="formation-end-date">{{ $t("formation.0.end") }}</p>
          </div>
          <div class="formatioon-item-content">
            <h3 class="formation-title">{{ $t("formation.0.title") }}</h3>
            <p class="formation-school">{{ $t("formation.0.school") }}</p>
            <p
              class="formation-description"
              v-html="$t('formation.0.description')"
            ></p>
            <a
              class="formation-link"
              :href="$t('formations.0.link')"
              target="_blank"
            >
              {{ $t("school-website-button") }}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </li>
        <li class="formation-item">
          <div class="formatioon-item-timeline">
            <p class="formation-start-date">{{ $t("formations.1.start") }}</p>
            <span class="formation-start-date-separator"></span>
            <p class="formation-end-date">{{ $t("formation.1.end") }}</p>
          </div>
          <div class="formatioon-item-content">
            <h3 class="formation-title">{{ $t("formation.1.title") }}</h3>
            <p class="formation-school">{{ $t("formation.1.school") }}</p>
            <p class="formation-description"></p>
            <p
              class="formation-description"
              v-html="$t('formation.1.description')"
            ></p>
            <a
              class="formation-link"
              :href="$t('formations.1.link')"
              target="_blank"
            >
              {{ $t("school-website-button") }}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </li>
        <li class="formation-item">
          <div class="formatioon-item-timeline">
            <p class="formation-start-date">{{ $t("formations.2.start") }}</p>
            <span class="formation-start-date-separator"></span>
            <p class="formation-end-date">{{ $t("formation.2.end") }}</p>
          </div>
          <div class="formatioon-item-content">
            <h3 class="formation-title">{{ $t("formation.2.title") }}</h3>
            <p class="formation-school">{{ $t("formation.2.school") }}</p>
            <!-- No description here -->
            <a
              class="formation-link"
              :href="$t('formations.2.link')"
              target="_blank"
            >
              {{ $t("school-website-button") }}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
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
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
ul.formation-list {
  list-style: none;
  padding: 0;
  margin: 0;
  li.formation-item {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    margin-bottom: 2rem;
    p,
    h3 {
      margin: 0.5rem 0;
    }
    .formatioon-item-timeline {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      p.formation-start-date,
      p.formation-end-date {
        margin: 0;
        color: var(--secondary-color);
      }
      span.formation-start-date-separator {
        width: 2px;
        flex: 1;
        background-color: var(--secondary-color);
      }
    }
    .formatioon-item-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h3.formation-title {
        margin-top: 0;
      }
      p.formation-description {
        ul {
          list-style: none;
          background-color: red;
        }
      }
    }
  }
}
</style>