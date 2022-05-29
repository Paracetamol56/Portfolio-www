<template>
  <section id="contact" class="fade-in">
    <div class="container">
      <div class="contact-networks-form">
        <ul class="contact-networks">
          <li class="contact-networks-item">
            <a class="contact-networks-item-link" href="#" target="_blank">
              <i class="contact-networks-item-link-vector fa-brands fa-github">
              </i>
            </a>
          </li>
          <li class="contact-networks-item">
            <a class="contact-networks-item-link" href="#" target="_blank">
              <i
                class="contact-networks-item-link-vector fa-brands fa-linkedin"
              >
              </i>
            </a>
          </li>
          <li class="contact-networks-item">
            <a class="contact-networks-item-link" href="#" target="_blank">
              <i class="contact-networks-item-link-vector fa-solid fa-at"> </i>
            </a>
          </li>
          <li class="contact-networks-item">
            <a class="contact-networks-item-link" href="#" target="_blank">
              <i class="contact-networks-item-link-vector fa-brands fa-discord">
              </i>
            </a>
          </li>
        </ul>
        <form id="contact-form" class="contact-form" role="form">
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
          <select
            class="contact-form-select"
            name="subject"
            id="subject"
            required
          >
            <option
              class="contact-form-select-option"
              value=""
              selected
              disabled
            >
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
          <button
            class="cta-button"
            id="contact-form-submit"
            type="submit"
            value="SEND"
          >
            <i class="fa fa-paper-plane"></i
            ><span class="send-text"> Envoyer</span>
          </button>
          <p class="contact-form-state" id="state-feedback"></p>
        </form>
      </div>
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
  background-color: #0c0e0f;
  .contact-networks-form {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    ul.contact-networks {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      width: 100%;
      li.contact-networks-item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        a.contact-networks-item-link {
          width: 5rem;
          height: 5rem;
          border: #b4e2f9 solid 2px;
          border-radius: 50%;
          background-image: linear-gradient(
            200deg,
            #00000000 0%,
            #00000000 50%,
            #b4e2f9 50%,
            #b4e2f9 100%
          );
          background-size: 400% auto;
          background-position: 100% 0%;
          position: relative;
          transition: background-position 0.25s var(--easing);
          i.contact-networks-item-link-vector {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            color: #b4e2f9;
            transition: color 0.25s var(--easing), font-size 0.25s var(--easing),
              transform 0.25s var(--easing);
          }
          &:hover {
            background-position: 0% 0%;
            i.contact-networks-item-link-vector {
              color: #0c0e0f;
              font-size: 3rem;
              transform: translate(-50%, -50%) rotateY(360deg);
            }
          }
        }
      }
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0;

      .contact-form-input {
        width: 100%;
        margin: 10px 0;
        height: 40px;
        border: none;
        border-bottom: #b4e2f9 2px solid;
        background-color: transparent;
        color: #b4e2f9;
        font-size: 1rem;
        font-family: "Roboto Mono", monospace;
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
        font-family: "Roboto Mono", monospace;
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
          font-family: "Roboto Mono", monospace;
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
        font-family: "Roboto Mono", monospace;
        font-weight: 500;
        margin: 10px 0;
      }
    }
  }
}
</style>