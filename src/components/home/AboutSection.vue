<i18n>
{
  "en": {
    "title": "Presentation",
    "main-paragraph": "New technologies are taking a growing place in our lives. This is why I'm currently studying computer science, a field that I want to apply to concrete causes. Curious and having the will to learn, I like to discover and get involved in new areas of technology: digital imaging, artificial intelligence, web, embedded systems, etc... My long-term ambition is to work in a sector that I particularly like: aerospace. Indeed, having always been passionate about the stars, I want to participate in the development of humanity in space.",
    "occupations": {
      "1": {
        "strong": "Computer science student ",
        "normal": "in professional bachelor's degree in multiplatform computer development in Annecy (France)"
      },
      "2": {
        "strong": "Work-study contract in web development and IT infrastructure ",
        "normal": "at Hunimalis in Annecy (France)"
      },
    },
  },
  "fr": {
    "title": "Présentation",
    "main-paragraph":
      "Les nouvelles technologies prennent une place croissante dans nos vies. C'est pourquoi j'étudie actuellement l'informatique, un domaine que je souhaite appliquer à des causes concrètes. Curieux et ayant la volonté d'apprendre, j'aime découvrir et m'impliquer dans de nouveaux domaines de la technologie : imagerie numérique, intelligence artificielle, web, systèmes embarqués, etc. Mon ambition à long terme est de travailler dans un secteur qui me tient particulièrement à cœur : l'aérospatiale. En effet, ayant toujours été passionné par les étoiles, je souhaite participer au développement de l'humanité dans l'espace.",
    "occupations": {
      "1": {
        "strong": "Etudiant en informatique ",
      "normal": "en licence professionnelle de développement informatique multisupport à Annecy (France)"
      },
      "2": {
        "strong": "Contrat en alternance dans le développement web et l'infrastructure informatique ",
        "normal": "chez Hunimalis à Annecy (France)"
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
					<b>
						<i class="fa-solid fa-graduation-cap"></i>
						{{ $t("occupations.1.strong") }}
					</b>
					<a
						href="https://formations-iuta.univ-smb.fr/fr/toute-l-offre-de-formation/licence-professionnelle-DP/sciences-technologies-sante-STS/licence-professionnelle-metiers-de-l-informatique-conception-developpement-et-test-logiciels-I2WYFB5X//lp-developpeur-informatique-multi-supports-alternance-I2WYLMKA.html?search-keywords=LP,D%C3%A9veloppeur,informatique,multi,supports,en,apprentissage"
						target="_blank"
					>
						{{ $t("occupations.1.normal") }}
					</a>
				</p>
				<p>
					<b>
						<i class="fa-solid fa-briefcase"></i>
						{{ $t("occupations.2.strong") }}
					</b>
					<a href="https://www.hunimalis.com/" target="_blank">
						{{ $t("occupations.2.normal") }}
					</a>
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
	}
}
</style>