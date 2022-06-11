<template>
  <section id="contact" class="fade-in">
    <div class="container">
      <div class="section-title centered">
        <h2>
          <span class="section-title-number">02.</span>
          <span class="type-write">Contact</span>
        </h2>
        <hr />
        <p class="section-title-subtitle type-write">Let's get in touch</p>
      </div>
      <form
        id="contact-form"
        class="contact-form"
        role="form"
        action="https://formsubmit.co/f56d1dfa92f74b144fde232317962208"
        method="POST"
      >
        <div class="concat-form-horizontal-wrapper">
          <input
            type="text"
            class="contact-form-input"
            id="name"
            placeholder="Nom"
            name="name"
            value=""
            required
          />
          <input
            type="email"
            class="contact-form-input"
            id="email"
            placeholder="Email"
            name="email"
            value=""
            required
          />
        </div>
        <select
          class="contact-form-select"
          name="_subject"
          id="subject"
          required
        >
          <option class="contact-form-select-option" value="" selected disabled>
            Sujet
          </option>
          <option class="contact-form-select-option" value="help">
            Besoin d'aide sur un projet
          </option>
          <option class="contact-form-select-option" value="work">
            Travailler avec moi sur le long terme
          </option>
          <option class="contact-form-select-option" value="discuss">
            Discuter de technologie, ou d'autre chose
          </option>
          <option class="contact-form-select-option" value="hello">
            Simplement me dire bonjour
          </option>
        </select>
        <textarea
          class="contact-form-input"
          id="message"
          rows="10"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Your message has been sent. I will get back to you as soon as possible."
        />
        <input type="hidden" name="_template" value="basic" />
        <button
          class="cta-button"
          id="contact-form-submit"
          type="submit"
          value="SEND"
        >
          <i class="fa fa-paper-plane"></i>
          <span class="send-text"> Envoyer</span>
        </button>
        <p class="contact-form-state" id="state-feedback"></p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="scss" scoped>
#contact {
  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;

    .concat-form-horizontal-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0;
      .contact-form-input {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    .contact-form-input {
      width: 100%;
      margin: 10px 0;
      height: 40px;
      border: none;
      border-bottom: #b4e2f9 2px solid;
      background-color: transparent;
      color: #b4e2f9;
      font-size: 1rem;
      font-family: "Fira Code", monospace;
      font-weight: 500;
      transition: all 0.5s var(--easing);

      &:focus {
        outline: none;
        border-bottom: #8251e9 2px solid;
        color: #8251e9;
        transition: all 0.5s var(--easing);
      }
    }

    .contact-form-select {
      width: 100%;
      margin: 10px 0;
      height: 40px;
      border: none;
      border-bottom: #b4e2f9 2px solid;
      background-color: transparent;
      color: #b4e2f9;
      font-size: 1rem;
      font-family: "Fira Code", monospace;
      font-weight: 500;
      transition: all 0.5s var(--easing);

      &:focus {
        outline: none;
        border-bottom: var(--primary-color) 2px solid;
        color: var(--primary-color);
        transition: all 0.5s var(--easing);
      }

      .contact-form-select-option {
        font-size: 1rem;
        font-family: "Fira Code", monospace;
        font-weight: 500;
      }
    }

    textarea.contact-form-input {
      resize: vertical;
      min-height: 200px;
      max-height: 400px;
      overflow: auto;
    }

    .contact-form-state {
      font-size: 1rem;
      color: #b4e2f9;
      font-family: "Fira Code", monospace;
      font-weight: 500;
      margin: 10px 0;
    }
  }
}
</style>