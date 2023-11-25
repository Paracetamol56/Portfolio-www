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
			<!--<div class="about-occupation fade-in">
				<p>
					<b>
						<svg
							class="about-occupation-vector"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
						>
							<path
								fill="currentColor"
								d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
							/>
						</svg>
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
						<svg
							class="about-occupation-vector"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
							/>
						</svg>
						{{ $t("occupations.2.strong") }}
					</b>
					<a href="https://www.hunimalis.com/" target="_blank">
						{{ $t("occupations.2.normal") }}
					</a>
				</p>
			</div>-->
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
		@media (max-width: 768px) {
			font-size: 1rem;
			text-align: left;
		}
	}

	.about-occupation {
		font-size: 1rem;
		text-align: left;
		margin: 16px 0;
		svg.about-occupation-vector {
			height: 1rem;
		}
	}
}
</style>