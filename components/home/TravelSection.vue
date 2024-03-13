<script lang="ts" setup>
import { defineProps, onMounted } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Globe from "globe.gl";

const travels_en = [
  {
    id: "1",
    title: "London",
    location: {
      start: ["45.5475", "2.867389"],
      end: ["51.507222", "-0.1275"],
    },
    thumbnail: "/img/travels/1.jpg",
    date: "2012",
    description: "",
    images: [],
  },
  {
    id: "2",
    title: "Roma",
    location: {
      start: ["45.5475", "2.867389"],
      end: ["41.902782", "12.496366"],
    },
    thumbnail: "/img/travels/2.jpg",
    date: "2012",
    description: "",
    images: [],
  },
  {
    id: "3",
    title: "Greece",
    location: {
      start: ["45.5475", "2.867389"],
      end: ["37.983810", "23.727539"],
    },
    thumbnail: "/img/travels/3.jpg",
    date: "2015",
    description: "",
    images: [],
  },
  {
    id: "4",
    title: "New York",
    location: {
      start: ["45.5475", "2.867389"],
      end: ["40.7127", "-74.0059"],
    },
    thumbnail: "/img/travels/4.jpg",
    date: "2018",
    description: "",
    images: [],
  },
  {
    id: "5",
    title: "Philadelphia",
    location: {
      start: ["40.7127", "-74.0059"],
      end: ["39.9526", "-75.1652"],
    },
    thumbnail: "/img/travels/5.jpg",
    date: "2018",
    description: "",
    images: [],
  },
  {
    id: "6",
    title: "Matane",
    location: {
      start: ["45.5475", "2.867389"],
      end: ["48.845", "-67.5228"],
    },
    thumbnail: "/img/travels/6.jpg",
    date: "2022",
    description: "",
    images: [],
  },
  {
    id: "7",
    title: "Québec",
    location: {
      start: ["48.845", "-67.5228"],
      end: ["46.8139", "-71.2080"],
    },
    thumbnail: "/img/travels/7.jpg",
    date: "2022",
    description: "",
    images: [],
  },
  {
    id: "8",
    title: "Montréal",
    location: {
      start: ["48.845", "-67.5228"],
      end: ["45.5475", "-73.5878"],
    },
    thumbnail: "/img/travels/8.jpg",
    date: "2022",
    description: "",
    images: [],
  },
];
const travels_fr = [
	{
		"id": "1",
		"title": "Londres",
		"location": {
			"start": ["45.5475", "2.867389"],
			"end": ["51.507222", "-0.1275"]
		},
		"thumbnail": "/img/travels/1.jpg",
		"date": "2012",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "2",
		"title": "Rome",
		"location": {
			"start": ["45.5475", "2.867389"],
			"end": ["41.902782", "12.496366"]
		},
		"thumbnail": "/img/travels/2.jpg",
		"date": "2012",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "3",
		"title": "Grèce",
		"location": {
			"start": ["45.5475", "2.867389"],
			"end": ["37.983810", "23.727539"]
		},
		"thumbnail": "/img/travels/3.jpg",
		"date": "2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "4",
		"title": "New York",
		"location": {
			"start": ["45.5475", "2.867389"],
			"end": ["40.7127", "-74.0059"]
		},
		"thumbnail": "/img/travels/4.jpg",
		"date": "2018",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "5",
		"title": "Philadelphie",
		"location": {
			"start": ["40.7127", "-74.0059"],
			"end": ["39.9526", "-75.1652"]
		},
		"thumbnail": "/img/travels/5.jpg",
		"date": "2018",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "6",
		"title": "Matane",
		"location": {
			"start": ["45.5475", "2.867389"],
			"end": ["48.845", "-67.5228"]
		},
		"thumbnail": "/img/travels/6.jpg",
		"date": "2018",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "7",
		"title": "Québec",
		"location": {
			"start": ["48.845", "-67.5228"],
			"end": ["46.8139", "-71.2080"]
		},
		"thumbnail": "/img/travels/7.jpg",
		"date": "2018",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	},
	{
		"id": "8",
		"title": "Montréal",
		"location": {
			"start": ["48.845", "-67.5228"],
			"end": ["45.5475", "-73.5878"]
		},
		"thumbnail": "/img/travels/8.jpg",
		"date": "2018",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
		"images": []
	}
];

const { locale } = useI18n();
const modules = [Navigation, Pagination];
const globe = Globe();
const map: Ref<HTMLElement | null> = ref(null);
const swiper: Ref<any | null> = ref(null);
const travels = ref((locale.value === "en" ? travels_en : travels_fr).reverse());


defineProps({
  number: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  displayGlobe();
});

function displayGlobe() {
  globe
    // Initialize the globe
    .width(map.value?.clientWidth ?? 0)
    .height(map.value?.clientHeight ?? 0)
    .backgroundColor("#00000000")
    .globeImageUrl(window.location.origin + "/img/earth-dark.jpg")
    .bumpImageUrl(window.location.origin + "/img/earth-topology.png")
    .atmosphereColor("#b4e2f9")
    .atmosphereAltitude(0.1)
    .lineHoverPrecision(2)
    // Custom HTML elements
    .labelsData(travels.value)
    .labelLat((d: any) => d.location.end[0])
    .labelLng((d: any) => d.location.end[1])
    .labelText(() => "")
    .labelColor(() => "#b4e2f9")
    .labelSize(1)
    .labelDotRadius(0.4)
    // Arcs
    .arcsData(travels.value)
    .arcStartLat((d: any) => d.location.start[0])
    .arcStartLng((d: any) => d.location.start[1])
    .arcEndLat((d: any) => d.location.end[0])
    .arcEndLng((d: any) => d.location.end[1])
    .arcLabel((d: any) => d.title)
    .arcColor(() => "#b4e2f9")
    .arcAltitudeAutoScale(0.25)
    .arcStroke(0.25)
    // Actions
    .onLabelClick((label: any) => {
      slideToId(label.id);
    })
    .onArcClick((arc: any) => {
      slideToId(arc.id);
    });

  if (map.value) {
    globe(map.value);

    globe.controls().enableZoom = false;
    // Relation between canevas size and camera distance : f(x) = -0.11x + 350
    const distance = Math.max(
      -0.11 * map.value.clientWidth + 375,
      -0.11 * map.value.clientHeight + 375
    );
    globe.camera().position.set(0, 0, distance);
    globe.pointOfView({ lat: 20, lng: 0 }, 0);
  }
}

function onSwiper(s: any) {
  swiper.value = s;
}

function slideToId(id: number) {
  const index: number = travels.value.length - id;
  swiper.value?.slideTo(index);
}

function slideChange(e: any) {
  // Change the globe point of view
  globe.pointOfView(
    {
      lat: Math.max(travels.value[e.activeIndex].location.end[0] - 25, -90),
      lng: travels.value[e.activeIndex].location.end[1],
    },
    1000
  );
}
</script>

<template>
  <section id="travels" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">02.</span>
          {{ $t("home.travels.title") }}
        </h2>
        <hr />
      </div>
    </div>
    <div class="map-container">
      <div class="map" ref="map">
        <!--@touchstart="touchStart"
        @mousedown="touchStart"-->
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
          :key="travel.id"
        >
          <TravelCard :travel="travel" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

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
