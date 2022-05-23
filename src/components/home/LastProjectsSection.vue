<template>
  <section id="projects" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2><span class="section-title-number">02.</span> Derniers projets</h2>
        <hr />
      </div>

      <ul class="project-list" ref="project-list">
        <li class="project-item">
          <img
            class="project-item-image"
            src="https://via.placeholder.com/500x600"
          />
          <div class="project-item-text">
            <p class="project-item-text-date">2020 - 2022</p>
            <h3 class="project-item-text-title">
              <span class="project-item-text-title-number">01.</span> Projet 1
            </h3>
            <p class="project-item-text-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              commodi placeat, recusandae aspernatur harum tempora architecto?
            </p>
            <a class="project-item-text-link" href="#">Voir le projet</a>
          </div>
        </li>
        <li class="project-item">
          <img
            class="project-item-image"
            src="https://via.placeholder.com/500x600"
          />
          <div class="project-item-text">
            <p>2020 - 2022</p>
            <h3>Projet 1</h3>
            <p></p>
            <a href="#">Voir le projet</a>
          </div>
        </li>
      </ul>

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
  methods: {},
  mounted: function () {
    // Load the content
    // ToDo
  },
  beforeUnmount: function () {},
};
</script>

<style scoped lang="scss">
section#projects {
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;

    .project-item {
      height: 600px;
      margin: 0;
      padding: 0;
      position: relative;
      list-style: none;
      overflow: hidden;

      .project-item-image {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(max(100%, 600px));
      }

      .project-item-text {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        background-image: linear-gradient(
          135deg,
          #2c1b4fa0 70%,
          #111416a0 100%
        );
        background-size: 400%;
        background-position: 100%;
        transition: background-position 1s var(--easing);

        &:hover {
          background-position: 0%;
          .project-item-text-link {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .project-item-text-date {
          font-family: "Roboto-Mono", monospace;
          font-size: 1rem;
          margin: 0;
        }

        .project-item-text-title {
          font-family: "Roboto-Mono", monospace;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .project-item-text-description {
          font-family: "Roboto-Mono", monospace;
          font-size: 1rem;
          margin: 0;
        }

        .project-item-text-link {
          font-family: "Roboto-Mono", monospace;
          font-size: 1rem;
          text-decoration: none;
          margin: 0;
          opacity: 0;
          transform: translateX(1rem);
          transition: opacity 0.5s var(--easing), transform 0.5s var(--easing);
        }
      }
    }
  }
}
</style>