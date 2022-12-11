<i18n>
{
	"en": {
		"more": "See more"
	},
	"fr": {
		"more": "Voir plus"
	}
}
</i18n>

<template>
	<div class="travel-card">
		<img class="travel-card-image" />
		<div class="travel-card-text">
			<p class="travel-card-text-date">
				{{
					`${travel.date.replaceAll("-", "/")}`
				}}
			</p>
			<h3 class="travel-card-text-title">
				<span class="travel-card-text-title-number">
					{{ `${("0" + travel.id).slice(-2)}. ` }}
				</span>
				{{ travel.title }}
			</h3>
			<p class="travel-card-text-description">
				/*<br />
          {{ locationHumanReadable.lat.deg }}<span class="colored">°</span>
          {{ locationHumanReadable.lat.min }}<span class="colored">'</span>
          {{ locationHumanReadable.lat.sec
          }}<span class="colored">" {{ locationHumanReadable.lat.dir }}</span>
          <br />
          {{ locationHumanReadable.lng.deg }}<span class="colored">°</span>
          {{ locationHumanReadable.lng.min }}<span class="colored">'</span>
          {{ locationHumanReadable.lng.sec
          }}<span class="colored">" {{ locationHumanReadable.lng.dir }}</span>
				<br />*/
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TravelCard",
	props: {
		travel: {
			type: Object,
			required: true,
		},
	},
	data: function () {
		return {
			locationHumanReadable: {
				lat: {
          dir: "",
          deg: 0,
          min: 0,
          sec: 0,
        },
        lng: {
          dir: "",
          deg: 0,
          min: 0,
          sec: 0,
        },
			}
		};
	},
	methods: {
		updateFadeInElements: function () {
			const fadeInElements = document.getElementsByClassName("fade-in");
			// Enter in viewport observer
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("appear");
						}
					});
				},
				{
					threshold: 0.5,
				}
			);

			// For each element
			for (let i = 0; i < fadeInElements.length; i++) {
				// If element is already in viewport
				if (
					fadeInElements[i].getBoundingClientRect().top < window.innerHeight
				) {
					// Add class "appear"
					fadeInElements[i].classList.add("appear");
				} else {
					// Add observer
					observer.observe(fadeInElements[i]);
				}
			}
		},
	},
	mounted: function () {
		// Compute the center coordinates in the human readable format
    this.locationHumanReadable = {
      lat: {
        dir: this.travel.location.end[0] < 0 ? "S" : "N",
        deg: Math.floor(Math.abs(this.travel.location.end[0])),
        min: Math.floor(
          (Math.abs(this.travel.location.end[0]) - Math.floor(Math.abs(this.travel.location.end[0]))) *
            60
        ),
        sec: (
          (Math.abs(this.travel.location.end[0]) - Math.floor(Math.abs(this.travel.location.end[0]))) *
            3600 -
          Math.floor(
            (Math.abs(this.travel.location.end[0]) -
              Math.floor(Math.abs(this.travel.location.end[0]))) *
              60
          ) *
            60
        ).toFixed(2),
      },
      lng: {
        dir: this.travel.location.end[1] < 0 ? "W" : "E",
        deg: Math.floor(Math.abs(this.travel.location.end[1])),
        min: Math.floor(
          (Math.abs(this.travel.location.end[1]) - Math.floor(Math.abs(this.travel.location.end[1]))) *
            60
        ),
        sec: (
          (Math.abs(this.travel.location.end[1]) - Math.floor(Math.abs(this.travel.location.end[1]))) *
            3600 -
          Math.floor(
            (Math.abs(this.travel.location.end[1]) -
              Math.floor(Math.abs(this.travel.location.end[1]))) *
              60
          ) *
            60
        ).toFixed(2),
      },
    };
		this.updateFadeInElements();
	},
};
</script>

<style lang="scss" scoped>
.travel-card {
	width: 100%;
	aspect-ratio: 16/9;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	border-radius: var(--border-radius);
	@media (max-width: 576px) {
		aspect-ratio: unset;
	}
	img.travel-card-image {
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		// make the image 80% transparent
		opacity: 0.5;
	}
	.travel-card-text {
		width: 100%;
		height: 100%;
		padding: 1.5rem;
		background-image: linear-gradient(135deg, #2c1b4fa0 70%, #111416a0 100%);
		background-size: 400%;
		background-position: 100%;
		transition: background-position 1s var(--easing);
		&:hover {
			background-position: 0%;
		}
		.colored {
			color: var(--secondary-color);
		}
		.travel-card-text-date {
			font-size: 1rem;
			color: var(--secondary-color);
			margin: 0.5rem 0;
			@media (max-width: 768px) {
				font-size: 0.8rem;
			}
		}
		.travel-card-text-title {
			font-size: 2.5rem;
			font-weight: 500;
			margin: 0;
			@media (max-width: 768px) {
				font-size: 1.2rem;
			}
			.travel-card-text-title-number {
				color: var(--secondary-color);
				font-weight: 700;
			}
		}
		.travel-card-text-description {
			font-size: 1rem;
			font-weight: 300;
			margin: 0 0 1rem 0;
			@media (max-width: 768px) {
				font-size: 0.8rem;
			}
		}
		.travel-card-text-link {
			font-size: 1rem;
			font-weight: 500;
			padding: 0.2rem 0.5rem;
			color: var(--text-color);
			text-decoration: none;
			border: 1px solid var(--text-color);
			transform: translate(0, 0) scale(1) !important;
			transition: color 0.2s var(--easing), border 0.2s var(--easing);
			@media (max-width: 768px) {
				font-size: 0.8rem;
			}
			&:hover {
				color: var(--secondary-color);
				border: 1px solid var(--secondary-color);
			}
		}
	}
}
</style>