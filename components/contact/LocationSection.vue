<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import iconSVG from '@/assets/img/location-pin.svg';

const zoom = ref(6);
const center = ref({ lat: 45.0414734104549, lng: 3.8838424153521593 });
const centerHumanReadable = ref({
  lat: { dir: '', deg: 0, min: 0, sec: 0 },
  lng: { dir: '', deg: 0, min: 0, sec: 0 }
});

/*const markerIcon = ref(new L.Icon<L.IconOptions>({
  iconUrl: require('@/assets/img/location-pin.svg'),
  iconSize: [25, 35],
  iconAnchor: [12, 35],
}));*/

onMounted(() => {
  // Compute the center coordinates in the human readable format
  centerHumanReadable.value = {
    lat: {
      dir: center.value.lat < 0 ? 'S' : 'N',
      deg: Math.floor(Math.abs(center.value.lat)),
      min: Math.floor((Math.abs(center.value.lat) - Math.floor(Math.abs(center.value.lat))) * 60),
      sec: ((Math.abs(center.value.lat) - Math.floor(Math.abs(center.value.lat))) * 3600 - Math.floor((Math.abs(center.value.lat) - Math.floor(Math.abs(center.value.lat))) * 60) * 60).toFixed(2)
    },
    lng: {
      dir: center.value.lng < 0 ? 'W' : 'E',
      deg: Math.floor(Math.abs(center.value.lng)),
      min: Math.floor((Math.abs(center.value.lng) - Math.floor(Math.abs(center.value.lng))) * 60),
      sec: ((Math.abs(center.value.lng) - Math.floor(Math.abs(center.value.lng))) * 3600 - Math.floor((Math.abs(center.value.lng) - Math.floor(Math.abs(center.value.lng))) * 60) * 60).toFixed(2)
    }
  };
});
</script>

<template>
  <section id="location" class="fade-in">
    <div class="container">
      <div class="section-title centered">
        <h2>
          <span class="section-title-number type-write">01.</span>
          <span class="type-write">{{ $t("contact.map.title") }}</span>
        </h2>
        <hr />
        <p class="section-title-subtitle type-write">
          {{ $t("contact.map.subtitle") }}
        </p>
      </div>
    </div>
    <div id="map-container" style="height: 40rem">
      <LMap
        :zoom="zoom"
        :center="[center.lat, center.lng]"
        :options="{scrollWheelZoom: false}"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker
          :lat-lng="[center.lat, center.lng]"
          :icon="L.icon({ iconUrl: iconSVG, iconSize: [25, 35], iconAnchor: [12, 35] })"
        />
      </LMap>
      <div class="location-infos">
        <p class="location-infos-text">
          <span class="type-write">
            <b>{{ $t("contact.map.planet") }}</b>
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
          <b> {{ $t("contact.map.city") }} </b>, {{ $t("contact.map.region") }} <br />
          <span class="colored">
            {{ $t("contact.map.country") }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#location {
  #map-container {
    position: relative;
    width: 100%;
    .location-infos {
      font-family: "Fira Code", monospace;
      z-index: 401;
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
