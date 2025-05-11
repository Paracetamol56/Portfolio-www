<script lang="ts" setup>
import { GraduationCap, Sparkles } from "lucide-vue-next";
import { defineProps } from "vue";
import UnderlinedButton from "../UnderlinedButton.vue";

const props = defineProps({
  number: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section id="about" class="fade-in">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="section-title-number">{{ number }}.</span>
          {{ $t("home.about.title") }}
        </h2>
        <hr />
      </div>
      <div class="about-introduction fade-in">
        <p v-html="$t('home.about.main-paragraph')"></p>
      </div>
      <SocialList />
      <div class="about-spotlight">
        <div class="about-spotlight fade-in">
          <h3 class="about-spotlight-title"><GraduationCap />Occupation</h3>
          <p class="about-spotlight-subtitle">
            <strong>{{ $t("home.about.occupation.1.strong") }}</strong>
            {{ $t("home.about.occupation.1.normal") }}
          </p>
          <p class="about-spotlight-subtitle">
            <strong>{{ $t("home.about.occupation.2.strong") }}</strong>
            {{ $t("home.about.occupation.2.normal") }}
          </p>
        </div>
      </div>
      <div class="about-spotlight">
        <div class="about-spotlight fade-in">
          <h3 class="about-spotlight-title"><Sparkles />Spotlight</h3>
          <ul class="about-spotlight-list">
            <li class="about-spotlight-item">
              <h4 class="about-spotlight-subtitle">Dev website</h4>
              <div class="about-spotlight-item-content">
                <NuxtImg
                  src="/img/spotlights/dev.png"
                  format="webp"
                  placeholder
                  loading="lazy"
                  quality="50"
                  alt="Dev website"
                  class="about-spotlight-logo"
                />
                <div>
                  <p class="about-spotlight-description">
                    A blog to share my knowledge and my projects.
                  </p>
                  <UnderlinedButton
                    href="https://dev.matheo-galuba.com"
                    target="_blank"
                  >
                    Go
                  </UnderlinedButton>
                </div>
              </div>
            </li>
            <li class="about-spotlight-item">
              <h4 class="about-spotlight-subtitle">Ticketing</h4>
              <div class="about-spotlight-item-content">
                <NuxtImg
                  src="/img/spotlights/ticket.png"
                  format="webp"
                  placeholder
                  loading="lazy"
                  quality="50"
                  alt="Ticketing"
                  class="about-spotlight-logo"
                />
                <div>
                  <p class="about-spotlight-description">
                    A personal ticketing system.
                  </p>
                  <UnderlinedButton
                    href="https://ticket.matheo-galuba.com"
                    target="_blank"
                  >
                    Go
                  </UnderlinedButton>
                </div>
              </div>
            </li>
            <li class="about-spotlight-item">
              <h4 class="about-spotlight-subtitle">Les actus de Bob</h4>
              <div class="about-spotlight-item-content">
                <NuxtImg
                  src="/img/spotlights/actus-de-bob.png"
                  format="webp"
                  placeholder
                  loading="lazy"
                  quality="50"
                  alt="Les actus de Bob"
                  class="about-spotlight-logo"
                />
                <div>
                  <p class="about-spotlight-description">
                    A blog about useless facts.
                  </p>
                  <UnderlinedButton
                    href="https://actus-de-bob.fun"
                    target="_blank"
                  >
                    Go
                  </UnderlinedButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section#about {
  .about-introduction {
    font-size: 1.25rem;
    text-align: justify;
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
    }
  }

  .about-occupation {
    font-size: 1rem;
    text-align: left;
    margin: 16px 0;
    svg.about-occupation-vector {
      height: 1rem;
    }
  }

  .about-spotlight {
    margin-top: 32px;
    .about-spotlight-title {
      font-size: 1.5rem;
      margin-bottom: 16px;
			display: flex;
			align-items: center;
			gap: 4px;
    }

    .about-spotlight-list {
      display: grid;
      list-style: none;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
			padding: 0;
      .about-spotlight-item {
        .about-spotlight-subtitle {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }
        .about-spotlight-item-content {
          display: flex;
					align-items: center;
          gap: 16px;
          .about-spotlight-logo {
            height: 75px;
          }
          .about-spotlight-description {
            font-size: 1rem;
						margin-top: 0;
            margin-bottom: 8px;
          }
          .about-spotlight-link {
            font-size: 1rem;
            color: var(--color-primary);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
