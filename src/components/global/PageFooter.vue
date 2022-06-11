<template>
  <footer>
    <div class="container">
      <ul class="footer-logo-list">
        <li>
          <a
            href="https://github.com/Paracetamol56"
            target="_blank"
            class="footer-logo-icon fab fa-github"
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matheogaluba/"
            target="_blank"
            class="footer-logo-icon fab fa-linkedin"
          ></a>
        </li>
        <li>
          <a
            href="mailto:matheo.galu56@gmail.com"
            target="_blank"
            class="footer-logo-icon fas fa-at"
          ></a>
        </li>
        <li>
          <a
            href="https://discordapp.com/users/609748578004500517/"
            target="_blank"
            class="footer-logo-icon fab fa-discord"
          ></a>
        </li>
      </ul>
      <div class="footer-author">
        <p>
          Made with <span class="hearth fas fa-heart"></span> by Mathéo Galuba -
          Under Apache 2.0
          <a
            href="https://github.com/Paracetamol56/Portfolio/blob/master/LICENSE"
            target="_blank"
            rel="nofollow"
            >License</a
          >
        </p>
      </div>
      <div class="footer-credits">
        <p>
          Icons from
          <a href="https://fontawesome.com/" target="_blank" rel="nofollow"
            >Font Awesome</a
          >. Web fonts from
          <a href="https://fonts.google.com/" target="_blank" rel="nofollow"
            >Google</a
          >.
        </p>
      </div>
    </div>
    <div class="bottom-gradient"></div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  padding: 50px 0;
  position: relative;
  background-color: #111416;
  .footer-logo-list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    margin: 20px auto;
    padding: 0;
    list-style: none;
  }
  .footer-logo-icon {
    font-size: 2rem;
    text-decoration: none;
    color: var(--text-color);
    transform: scale(1);
    transition: color 0.25s var(--easing), transform 0.25s var(--easing);
    &:hover {
      text-decoration: none;
      color: var(--primary-color);
      transform: scale(1.1);
      transition: color 0.1s var(--easing), transform 0.1s var(--easing);
    }
  }
  .footer-author {
    font-family: "Fira Code", monospace;
    font-size: 0.8rem;
    font-weight: 300;
    text-align: center;
    color: #ffffff;
    margin: 20px 0;
    padding: 0;
    span.hearth {
      color: #ffffff;
      transition: all 0.25s var(--easing);
      &:hover {
        color: #8251e9;
        transition: all 0.25s var(--easing);
      }
    }
  }
  .footer-credits {
    font-family: "Fira Code", monospace;
    font-size: 0.8rem;
    font-weight: 300;
    text-align: center;
    color: #ffffff;
    margin: 20px 0;
    padding: 0;
  }
  a {
    color: #ffffff;
    text-decoration: dotted underline;
    transition: all 0.25s var(--easing);

    &:hover {
      color: #8251e9;
      text-decoration: solid underline;
      transition: all 0.25s var(--easing);
    }
  }
  .bottom-gradient {
    width: 100%;
    height: 10px;
    background-image: linear-gradient(
      90deg,
      #b4e2f9 0%,
      #5f78ef 25%,
      #8251e9 50%,
      #ad56e3 75%,
      #df7bf5 100%
    );
    position: absolute;
    bottom: 0;
  }
}
</style>