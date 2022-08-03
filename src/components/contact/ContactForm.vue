<i18n>
{
  "en": {
    "title": "Message",
    "subtitle": "Let's get in touch",
    "form": {
      "name": "Name",
      "email": "Email",
      "subject": "Subject",
      "subject-option": {
        "1": "Need help on a project",
        "2": "Work with me for the long term",
        "3": "Discuss about technology, or something else",
        "4": "Just say hello to me",
      },
      "message": "Message",
      "send": "Send",
    },
  },
  "fr": {
    "title": "Message",
    "subtitle": "Prenons contact",
    "form": {
      "name": "Nom",
      "email": "Email",
      "subject": "Sujet",
      "subject-option": {
        "1": "Besoin d'aide sur un projet",
        "2": "Travailler avec moi sur le long terme",
        "3": "Discuter de technologie, ou d'autre chose",
        "4": "Simplement me dire bonjour",
      },
      "message": "Message",
      "send": "Envoyer",
    },
  },
}
</i18n>

<template>
  <section id="contact" class="fade-in">
    <div class="container">
      <div class="section-title centered">
        <h2>
          <span class="section-title-number">02.</span>
          <span class="type-write">
            {{ $t("title") }}
          </span>
        </h2>
        <hr />
        <p class="section-title-subtitle type-write">
          {{ $t("subtitle") }}
        </p>
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
            :placeholder="$t('form.name')"
            name="name"
            value=""
            required
          />
          <input
            type="email"
            class="contact-form-input"
            id="email"
            :placeholder="$t('form.email')"
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
            {{ $t("form.subject") }}
          </option>
          <option class="contact-form-select-option" value="help">
            {{ $t("form.subject-option.1") }}
          </option>
          <option class="contact-form-select-option" value="work">
            {{ $t("form.subject-option.2") }}
          </option>
          <option class="contact-form-select-option" value="discuss">
            {{ $t("form.subject-option.3") }}
          </option>
          <option class="contact-form-select-option" value="hello">
            {{ $t("form.subject-option.4") }}
          </option>
        </select>
        <textarea
          class="contact-form-input"
          id="message"
          rows="10"
          :placeholder="$t('form.message')"
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
          <span class="send-text">&nbsp;{{ $t("form.send") }}</span>
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