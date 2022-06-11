<template>
  <section id="location" class="fade-in">
    <div class="container">
      <div class="section-title centered">
        <h2>
          <span class="section-title-number type-write">01.</span>
          <span class="type-write">Location</span>
        </h2>
        <hr />
        <p class="section-title-subtitle type-write">
          Where am I in the universe?
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
          <span class="type-write"><b>Earth </b></span>
          <span class="colored">C-137</span>
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
          <b>Matane</b>, Québec <br /><span class="colored">CANADA</span>
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
        lat: 48.84788230218662,
        lng: -67.5450566764216,
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
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#2c2c2c",
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
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
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