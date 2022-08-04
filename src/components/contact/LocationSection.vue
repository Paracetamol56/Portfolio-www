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

45.90089632660961, 6.128813463775949

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
    <div class="map-container">
      <GMapMap
        :center="center"
        :zoom="zoom"
        :options="options"
        map-type-id="terrain"
        style="width: 100%; height: 40rem"
      >
        <GMapMarker :position="center" />
      </GMapMap>
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
export default {
  name: "LocationSection",
  data: function () {
    return {
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
      zoom: 6,
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#111416",
              },
            ],
          },
          {
            elementType: "geometry.fill",
            stylers: [
              {
                weight: 1,
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#212121",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                color: "#757575",
              },
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#181818",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1b1b1b",
              },
            ],
          },
          {
            featureType: "road",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#2c2c2c",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8a8a8a",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#373737",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#3c3c3c",
              },
            ],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
              {
                color: "#4e4e4e",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#0c0816",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3d3d3d",
              },
            ],
          },
        ],
      },
    };
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
        font-size: 1.4rem;
        color: var(--text-color);
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