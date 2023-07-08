<i18n>
{
  "en": {
    "title": "My travels",
  },
  "fr": {
    "title": "Mes voyages",
  },
}
</i18n>

<template>
  <section id="travels" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">02.</span>
          {{ $t("title") }}
        </h2>
        <hr />
      </div>
    </div>
    <div class="map-container">
      <div
        class="map"
        ref="map"
        @mousedown="touchStart"
        @touchstart="touchStart"
      >
        <!-- The globe goes here -->
      </div>
      <Swiper
        class="travel-slider"
        @swiper="onSwiper"
        @slideChange="slideChange"
        :slides-per-view="1.1"
        :space-between="20"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="false"
        :grab-cursor="true"
        :centeredSlides="true"
        :breakpoints="{
          576: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.4,
            spaceBetween: 60,
          },
          992: {
            slidesPerView: 1.6,
            spaceBetween: 80,
          },
          1200: {
            slidesPerView: 1.8,
            spaceBetween: 100,
          },
          1400: {
            slidesPerView: 2.2,
            spaceBetween: 100,
          },
        }"
        :modules="modules"
      >
        <SwiperSlide
          class="project-slider-item"
          v-for="travel in travels"
          :key="travel"
        >
          <TravelCard :travel="travel" />
        </SwiperSlide>
      </Swiper>
    </div>

  </section>
</template>

<script>
import TravelCard from "@/components/miscellaneous/TravelCard.vue";

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import Globe from "globe.gl";

export default {
  name: "TravelSection",
  components: {
    TravelCard,
    Swiper,
    SwiperSlide,
  },
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  data: function () {
		return {
			modules: [Navigation, Pagination],
			travels: [],
      globe: Globe(),
      swiper: null
		};
	},
  methods: {
    loadTravels: async function () {
			await axios
				.get(`/data/${this.$i18n.locale}_travels.json`)
				.then((response) => {
					this.travels = response.data.reverse();
        })
				.catch((error) => {
					console.log(error);
				});
    },
    displayGlobe: function () {
      this.globe
        // Initialize the globe
        .width(this.$refs.map.clientWidth)
        .height(this.$refs.map.clientHeight)
        .backgroundColor("#00000000")
        .globeImageUrl(window.location.origin + "/8k_earth_colormap.png")
        .atmosphereColor("#b4e2f9")
        .atmosphereAltitude(0.1)
        .lineHoverPrecision(2)
        // Custom HTML elements
        .labelsData(this.travels)
        .labelLat((d) => d.location.end[0])
        .labelLng((d) => d.location.end[1])
        .labelText(() => "")
        .labelColor(() => "#b4e2f9")
        .labelSize(1)
        .labelDotRadius(0.4)
        // Arcs
        .arcsData(this.travels)
        .arcStartLat((d) => d.location.start[0])
        .arcStartLng((d) => d.location.start[1])
        .arcEndLat((d) => d.location.end[0])
        .arcEndLng((d) => d.location.end[1])
        .arcLabel(() => "")
        .arcColor(() => "#b4e2f9")
        .arcAltitudeAutoScale(0.25)
        .arcStroke(0.25)
        // Actions
        .onLabelClick((label) => {
          this.slideToId(label.id);
        })
        .onArcClick((arc) => {
          this.slideToId(arc.id);
        })
        ;

      this.globe(this.$refs.map);

      this.globe.controls().enableZoom = false;
      // Relation between canevas size and camera distance : f(x) = -0.11x + 350
      const distance = Math.max(
        -0.11 * this.$refs.map.clientWidth + 350,
        -0.11 * this.$refs.map.clientHeight + 350
      );
      this.globe.camera().position.set(0, 0, distance);
      this.globe.pointOfView({ lat: 20, lng: 0 }, 0);
    },
    onSwiper: function (swiper) {
      this.swiper = swiper;
    },
    slideToId: function (id) {
      const index = this.travels.length - id;
      this.swiper.slideTo(index);
    },
    slideChange: function (e) {
      // Change the globe point of view
      this.globe.pointOfView(
        {
          lat: Math.max(this.travels[e.activeIndex].location.end[0] - 25, -90),
          lng: this.travels[e.activeIndex].location.end[1],
        },
        1000
      );
    },
  },
  mounted() {
    this.loadTravels().then(() => {
      this.displayGlobe();
    });

    // Watch this.$i18n.locale to update the project
		this.$watch("$i18n.locale", () => {
			this.loadTravels();
		});
  },
};
</script>

<style scoped lang="scss">
section#travels {
  .map-container {
    position: relative;
    .map {
      width: 100vw;
      height: 100vh;
      max-height: 120vw;
      margin: 1rem 0;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    .travel-slider {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }
}
</style>