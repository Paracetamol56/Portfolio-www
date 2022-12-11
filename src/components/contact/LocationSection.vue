<i18n>
{
  "en": {
    "title": "Location",
    "subtitle": "Where am I in the universe?",
    "planet": "Earth",
    "city": "Annecy",
    "region": "Haute-Savoie",
    "country": "FRANCE",
  },
  "fr": {
    "title": "Emplacement",
    "subtitle": "Où suis-je dans l'univers?",
    "planet": "Terre",
    "city": "Annecy",
    "region": "Haute-Savoie",
    "country": "FRANCE",
  },
}
</i18n>

<template>
  <section id="location" class="fade-in">
    <div class="container">
      <div class="section-title centered">
        <h2>
          <span class="section-title-number type-write">01.</span>
          <span class="type-write">{{ $t("title") }}</span>
        </h2>
        <hr />
        <p class="section-title-subtitle type-write">
          {{ $t("subtitle") }}
        </p>
      </div>
    </div>
    <div class="map-container" style="height: 40rem;">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[center.lat, center.lng]"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>

        <l-marker :lat-lng="[center.lat, center.lng]" draggable @moveend="log('moveend')">
          <l-popup>
            lol
          </l-popup>
        </l-marker>
      </l-map>
      <div class="location-infos">
        <p class="location-infos-text">
          <span class="type-write">
            <b>{{ $t("planet") }}</b>
          </span>
          <span class="colored"> C-137</span>
        </p>
        <p class="location-infos-text coordinates">
          {{ centerHumanReadable.lat.deg }}<span class="colored">°</span>
          {{ centerHumanReadable.lat.min }}<span class="colored">'</span>
          {{ centerHumanReadable.lat.sec
          }}<span class="colored">" {{ centerHumanReadable.lat.dir }}</span>
          <br />
          {{ centerHumanReadable.lng.deg }}<span class="colored">°</span>
          {{ centerHumanReadable.lng.min }}<span class="colored">'</span>
          {{ centerHumanReadable.lng.sec
          }}<span class="colored">" {{ centerHumanReadable.lng.dir }}</span>
        </p>
        <p class="location-infos-text">
          <b> {{ $t("city") }} </b>, {{ $t("region") }} <br />
          <span class="colored">
            {{ $t("country") }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "LocationSection",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data: function () {
    return {
      zoom: 5,
      iconWidth: 25,
      iconHeight: 40,
      center: {
        lat: 45.90089632660961,
        lng: 6.128813463775949,
      },
      centerHumanReadable: {
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
      },
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
  mounted: function () {
    // Compute the center coordinates in the human readable format
    this.centerHumanReadable = {
      lat: {
        dir: this.lat < 0 ? "S" : "N",
        deg: Math.floor(Math.abs(this.center.lat)),
        min: Math.floor(
          (Math.abs(this.center.lat) - Math.floor(Math.abs(this.center.lat))) *
            60
        ),
        sec: (
          (Math.abs(this.center.lat) - Math.floor(Math.abs(this.center.lat))) *
            3600 -
          Math.floor(
            (Math.abs(this.center.lat) -
              Math.floor(Math.abs(this.center.lat))) *
              60
          ) *
            60
        ).toFixed(2),
      },
      lng: {
        dir: this.lng < 0 ? "W" : "E",
        deg: Math.floor(Math.abs(this.center.lng)),
        min: Math.floor(
          (Math.abs(this.center.lng) - Math.floor(Math.abs(this.center.lng))) *
            60
        ),
        sec: (
          (Math.abs(this.center.lng) - Math.floor(Math.abs(this.center.lng))) *
            3600 -
          Math.floor(
            (Math.abs(this.center.lng) -
              Math.floor(Math.abs(this.center.lng))) *
              60
          ) *
            60
        ).toFixed(2),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#location {
  .map-container {
    position: relative;
    width: 100%;
    .location-infos {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      p.location-infos-text {
        display: block;
        width: fit-content;
        padding: 0 2px;
        font-size: 1.4rem;
        color: var(--text-color);
        background-color: #0c0816bf;
        &.coordinates {
          font-weight: 300;
        }
        span.colored {
          color: var(--secondary-color);
        }
      }
    }
  }
}
</style>