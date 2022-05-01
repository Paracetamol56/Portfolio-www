<template>
  <section id="projects" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2><span class="section-title-number">02.</span> Derniers projets</h2>
        <hr />
      </div>

      <ul class="carroussel" ref="carroussel"></ul>

      <a class="cta-button fade-in" href="/project">
        <span class="cta-button-text">Voir tous les projets</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "LastProjectsSection",
  data: function () {
    return {
      interval: null,
    };
  },
  methods: {
    next: function () {
      // Put last element of the carroussel in the first position
      this.$refs.carroussel.insertBefore(
        this.$refs.carroussel.lastElementChild,
        this.$refs.carroussel.firstElementChild
      );

      // Assing classes to the 3 first elements
      this.$refs.carroussel.children[3].classList = "prev carroussel-card";
      this.$refs.carroussel.children[2].classList = "act carroussel-card";
      this.$refs.carroussel.children[1].classList = "next carroussel-card";
      this.$refs.carroussel.children[4].classList = "hide carroussel-card";
    },
    prev: function () {
      // Put first element of the carroussel in the last position
      this.$refs.carroussel.appendChild(
        this.$refs.carroussel.firstElementChild
      );

      // Assing classes to the 3 first elements
      this.$refs.carroussel.children[0].classList = "hide carroussel-card";
      this.$refs.carroussel.children[1].classList = "next carroussel-card";
      this.$refs.carroussel.children[2].classList = "act carroussel-card";
      this.$refs.carroussel.children[3].classList = "prev carroussel-card";
    },
  },
  mounted: function () {
    // Load the content
    // ToDo

    // Initialization
    this.$refs.carroussel.children[3].classList = "prev carroussel-card";
    this.$refs.carroussel.children[2].classList = "act carroussel-card";
    this.$refs.carroussel.children[1].classList = "next carroussel-card";

    // Set the interval to call the next function
    this.interval = setInterval(this.next, 10000);
  },
  beforeUnmount: function () {
    clearInterval(this.interval);
  },
};
</script>

<style scoped lang="scss">
section#projects {
  .carroussel {
    height: 450px;
    width: 100%;
    margin: 40px 0;
    padding: 0;
    position: relative;

    li.carroussel-card {
      list-style-type: none;
      position: absolute;
      left: 50%;
      margin-left: -200px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 400px;
      height: 100%;
      padding: 0;
      overflow: hidden;
      box-shadow: 0 0 20px #5f77ef9a;
      border-radius: 5px;
      background-image: linear-gradient(135deg, #2c1b4f 70%, #111416 100%);
      background-position: 100%;
      background-size: 400%;
      opacity: 0.25;
      border: #5f78ef 2px solid;
      transition: all 1s var(--easing);

      &:hover {
        background-position: 0%;
        transition: all 1s var(--easing);
      }

      &.prev {
        transform: translateX(-500px) scale(0.85);
        cursor: pointer;
        z-index: 1;
        transition: all 1s var(--easing);
      }

      &.act {
        opacity: 1;
        transform: translateX(0) scale(1);
        z-index: 2;
        transition: all 1s var(--easing);
      }

      &.next {
        transform: translateX(500px) scale(0.85);
        cursor: pointer;
        z-index: 1;
        transition: all 1s var(--easing);
      }

      &.hide {
        opacity: 0;
        transform: translateX(0) scale(0.7);
        z-index: 0;
        transition: all 1s var(--easing);
      }

      .carroussel-card-thumbnail {
        width: 100%;
      }

      .carroussel-card-content {
        height: 100%;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;

        .carroussel-card-header-number {
          font-family: "Roboto Mono", monospace;
          font-size: 1.5rem;
          font-weight: 700;
          color: #b4e2f9;
          margin: 0;
          margin-bottom: 10px;
        }

        .carroussel-card-header {
          font-family: "Roboto Mono", monospace;
          font-weight: 500;
          font-size: 1.5rem;
          margin: 10px 0;
        }

        .carroussel-card-button {
          font-family: "Roboto Mono", monospace;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
          position: absolute;
          right: 15px;
          bottom: 10px;
          transition: all 0.5s var(--easing);

          &:hover {
            color: #8251e9;
            right: 10px;
            transition: all 0.5s var(--easing);
          }
        }
      }
    }
  }
}
</style>