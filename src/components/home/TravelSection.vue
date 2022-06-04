<template>
  <section id="travels" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2><span class="section-title-number">02.</span> Mes voyages</h2>
        <hr />
      </div>
    </div>
    <div
      class="map-container"
      ref="mapContainer"
      @mousedown="touchStart"
      @touchstart="touchStart"
    >
      <div class="map-overlay"></div>
    </div>
  </section>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "TravelSection",
  data: function () {
    return {
      locations: [
        {
          name: "Paris",
          lat: 48.856614,
          lng: 2.352222,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "New York",
          lat: 40.73061,
          lng: -73.935242,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Tokyo",
          lat: 35.6895,
          lng: 139.6917,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Sydney",
          lat: -33.86882,
          lng: 151.20929,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "London",
          lat: 51.507351,
          lng: -0.127758,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Rio de Janeiro",
          lat: -22.90683,
          lng: -43.17285,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Barcelona",
          lat: 41.38504,
          lng: 2.173404,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Madrid",
          lat: 40.416775,
          lng: -3.70379,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Rome",
          lat: 41.90278,
          lng: 12.496366,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Berlin",
          lat: 52.520007,
          lng: 13.404954,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Amsterdam",
          lat: 52.373801,
          lng: 4.89105,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Barcelona",
          lat: 41.38504,
          lng: 2.173404,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Madrid",
          lat: 40.416775,
          lng: -3.70379,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Rome",
          lat: 41.90278,
          lng: 12.496366,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
        {
          name: "Berlin",
          lat: 52.520007,
          lng: 13.404954,
          arcOriginLat: 45.5475,
          arcOriginLng: 2.867389,
        },
      ],
    };
  },
  mounted: function () {
    document.querySelectorAll(".map-spot").forEach((spot) => {
      // Extract the property data-coordinates
      let coordinates = spot.dataset.coordinates.split(",");
      let x = (coordinates[1] / 360) * 85;
      let y = (coordinates[0] / 180) * 123;

      x = x + 50;
      y = -y + 50;

      console.log(x, y);

      spot.style.left = `${x}%`;
      spot.style.top = `${y}%`;
    });

    const globe = Globe();

    globe
      // Initialize the globe
      .width(1000)
      .height(1000)
      .backgroundColor("#0c0816")
      .globeImageUrl(window.location.origin + "/8k_earth_colormap.png")
      .atmosphereColor("#b4e2f9")
      .atmosphereAltitude(0.1)
      // Custom HTML elements
      .labelsData(this.locations)
      .labelLat((d) => d.lat)
      .labelLng((d) => d.lng)
      .labelText(() => "")
      .labelColor(() => "#b4e2f9")
      .labelSize(1)
      .labelDotRadius(0.25)
      // Arcs
      .arcsData(this.locations)
      .arcStartLat((d) => d.arcOriginLat)
      .arcStartLng((d) => d.arcOriginLng)
      .arcEndLat((d) => d.lat)
      .arcEndLng((d) => d.lng)
      .arcLabel((d) => d.name)
      .arcColor(() => "#b4e2f9")
      .arcAltitudeAutoScale(0.25)
      .arcStroke(0.25);
    // .arcDashLength(() => Math.random())
    // .arcDashGap(() => Math.random())
    // .arcDashAnimateTime(() => 1000);

    globe(this.$refs.mapContainer);
  },
};
</script>

<style scoped lang="scss">
section#travels {
  .map-container {
    width: 100vw;
    height: 100vh;
    margin: 1rem 0;
    position: relative;
    overflow: hidden;
    .map {
      position: relative;
      height: 100%;
      aspect-ratio: 2.33371055495;
      margin: 0;
      padding: 0;
      svg.map-vector {
        height: 100%;
        aspect-ratio: 2.33371055495;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        path {
          stroke: #3f4950;
          stroke-width: 0.25;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: #171a1d;
          transition: fill 0.25s var(--easing);
          &:hover {
            fill: #3f4950;
          }
        }
      }
      .map-spot {
        position: absolute;
        width: 10px;
        height: 10px;
        transform: translate(-16px, 65px);
        border-radius: 50%;
        background: var(--primary-color);
        z-index: 1;
      }
    }
    .map-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        var(--background-color) 0%,
        #00000000 15%,
        #00000000 85%,
        var(--background-color) 100%
      );
      pointer-events: none;
    }
  }
}
</style>