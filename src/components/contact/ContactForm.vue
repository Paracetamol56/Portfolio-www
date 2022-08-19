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
        <button id="contact-form-submit" type="submit" value="SEND">
          <i class="fa fa-paper-plane"></i>
          <span class="send-text">&nbsp;{{ $t("form.send") }}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="octicon octicon-chevrow"
            data-v-411b7433=""
            data-v-2b4f4d1e=""
          >
            <path
              fill="currentColor"
              d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              class="octicon-chevrow-right"
              data-v-411b7433=""
            ></path>
            <path
              stroke="currentColor"
              d="M1.75 8H11"
              stroke-width="1.5"
              stroke-linecap="round"
              class="octicon-chevrow-stem"
              data-v-411b7433=""
            ></path>
          </svg>
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
  background-image: url("@/assets/img/BluryBackground.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
    #contact-form-submit {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 46px;
      margin: 32px 0 72px 0;
      padding: 0 18px 0 20px;
      color: var(--primary-color);
      font-family: "Fira Code", monospace;
      font-size: 1.25rem;
      font-weight: 600;
      text-decoration: none;
      background-color: #2c1b4f;
      border-radius: var(--border-radius);
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.25s var(--easing);
      svg.octicon {
        position: relative;
        width: 16px;
        height: 16px;
        transform: translateX(0);
        transition: transform 0.25s var(--easing);
        path.octicon-chevrow-stem {
          stroke-dasharray: 10;
          stroke-dashoffset: 10;
          transition: stroke-dashoffset 0.25s var(--easing);
        }
      }
      &:hover {
        color: var(--secondary-color);
        box-shadow: 0 4px 7px #00000080, 0 100px 80px #b4e2f904,
          0 41.7776px 33.4221px #b4e2f906, 0 22.3363px 17.869px #b4e2f907,
          0 12.5216px 10.0172px #b4e2f909, 0 6.6501px 5.32008px #b4e2f90b,
          0 2.76726px 2.21381px #b4e2f912;
        svg.octicon {
          transform: translateX(4px);
          path.octicon-chevrow-stem {
            stroke-dashoffset: 20;
          }
        }
      }
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