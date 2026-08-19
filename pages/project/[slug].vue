<script lang="ts" setup>
import { updateFadeInElements } from '~/app.vue'

const localePath = useLocalePath()
const { locale } = useI18n()
const route = useRoute()
const setI18nParams = useSetI18nParams()

type Data = {
  content: any
  surround: any[]
}

const slug = computed(() => route.params.slug as string)

const { data, error } = await useAsyncData(
  `page-${locale.value}-${slug.value}`,
  async () => {
    try {
      // 1. Try querying the content collection matching current locale
      let content = await queryCollection(locale.value as any)
        .path(`/${locale.value}/${slug.value}`)
        .first()

      // Fallback: try without the leading locale prefix
      if (!content) {
        content = await queryCollection(locale.value as any)
          .path(`/${slug.value}`)
          .first()
      }

      if (!content) return null

      // 2. Safely load surrounding links (previous / next projects)
      const surround = await queryCollectionItemSurroundings(
        locale.value as any,
        `/${locale.value}/${slug.value}`,
      ).catch(() => [])

      return { content, surround }
    }
    catch (e) {
      return null
    }
  },
  { watch: [locale, slug] },
)

// Gracefully handle missing content with a proper 404 response
if (!data.value || !data.value.content || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Project not found: ${route.fullPath}`,
    fatal: true,
  })
}

// Map the alternate language slugs to @nuxtjs/i18n
// This resolves /project/[fr-slug] vs /fr/project/[en-slug] cross-linking errors during SSR/prerendering
const content = data.value.content
const slugEn = content.slugEn || content.slug_en || (locale.value === 'en' ? slug.value : null)
const slugFr = content.slugFr || content.slug_fr || (locale.value === 'fr' ? slug.value : null)

if (slugEn || slugFr) {
  setI18nParams({
    en: { slug: slugEn || slug.value },
    fr: { slug: slugFr || slug.value },
  })
}

// Dynamic page head setup
useHead({
  title: content.title,
  meta: [
    { name: 'description', content: content.subtitle },
    { name: 'og:title', content: content.title },
    { name: 'og:description', content: content.subtitle },
    { name: 'twitter:title', content: content.title },
    { name: 'twitter:description', content: content.subtitle },
  ],
})

onMounted(() => {
  updateFadeInElements()
})
</script>

<template>
  <div>
    <Header
      :title="data.content?.title ?? ''"
      :subtitle="data.content?.subtitle"
    />
    <main>
      <section id="info">
        <div class="container">
          <div class="section-title centered fade-in">
            <h2>
              <span class="section-title-number">01.</span>
              {{ $t("project.sections.info") }}
            </h2>
            <hr>
          </div>
          <div class="info-status-dates fade-in">
            <p class="info-status">
              <span class="colored">{{ $t("project.status") }}:</span>
              {{ data.content?.status }}
            </p>
            <p class="info-dates">
              <span class="colored">{{ $t("project.dates") }}:</span>
              {{ data.content?.dates?.start.replaceAll("-", "/") }} -
              {{ data.content?.dates?.end.replaceAll("-", "/") }}
            </p>
          </div>
          <h3 class="fillTextWithgradient fade-in">
            {{ $t("project.technologies") }}
          </h3>
          <ul class="technology-list">
            <li
              v-for="technology in data.content?.technologies"
              :key="technology.name"
              class="technology-item fade-in"
            >
              <img
                class="technology-item-vector"
                :src="`https://cdn.simpleicons.org/${technology.icon}/f5f3fa`"
                alt="icon"
              >
              <p class="technology-item-name">
                {{ technology.name }}
              </p>
              <p class="technology-item-description">
                // {{ technology.description }}
              </p>
            </li>
          </ul>
          <h3 class="fillTextWithgradient fade-in">
            {{ $t("project.team") }}
          </h3>
          <ul class="team-list">
            <li
              v-for="member in data.content?.team"
              :key="member.name"
              class="team-item fade-in"
            >
              <p class="team-item-name">
                {{ member.name }}
              </p>
              <p class="team-item-role">
                // {{ member.role }}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="image"
        class="fade-in"
      >
        <ClientOnly>
          <Swiper
            v-if="data.content?.images?.length > 1"
            class="project-slider"
            :slides-per-view="1"
            :space-between="20"
            :navigation="true"
            :pagination="{ clickable: true }"
            :loop="false"
            :grab-cursor="true"
            :centered-slides="true"
            :modules="modules"
          >
            <SwiperSlide
              v-for="image in data.content?.images"
              :key="image"
              class="project-slider-item"
            >
              <NuxtImg
                :src="image"
                format="webp"
                placeholder
                loading="lazy"
                quality="50"
                :alt="`Project ${data.content?.title}`"
              />
            </SwiperSlide>
          </Swiper>
          <NuxtImg
            v-else-if="data.content?.images"
            id="header-image"
            :src="data.content?.images[0]"
            format="webp"
            placeholder
            loading="lazy"
            quality="50"
            alt="Project {{ data.content?.title }}"
          />
        </ClientOnly>
      </section>
      <section id="links">
        <div class="container">
          <div class="section-title centered fade-in">
            <h2>
              <span class="section-title-number">02.</span>
              {{ $t("project.sections.links") }}
            </h2>
            <hr>
          </div>
          <ul
            v-if="data.content?.links?.length > 0"
            class="link-list"
          >
            <li
              v-for="link in data.content?.links"
              :key="link.name"
              class="link-item fade-in"
            >
              <a
                class="link-item-anchor"
                :href="link.url"
                target="_blank"
              >
                <div
                  v-if="link.icon == 'download'"
                  class="link-item-vector"
                >
                  <FileDown
                    :size="60"
                    color="#f5f3fa"
                  />
                </div>
                <div
                  v-if="link.icon == 'web'"
                  class="link-item-vector"
                >
                  <ExternalLink
                    :size="60"
                    color="#f5f3fa"
                  />
                </div>
                <img
                  v-else
                  class="link-item-vector"
                  :src="`https://cdn.simpleicons.org/${link.icon}/f5f3fa`"
                  alt="icon"
                >
                <p
                  class="link-item-text"
                  v-html="link.name"
                />
              </a>
            </li>
          </ul>
          <div
            v-else
            class="link-empty fade-in"
          >
            <p class="link-empty-text">
              /*<br>
              &nbsp;* {{ $t("project.noLinks.1") }}<br>
              &nbsp;* {{ $t("project.nolinks.2") }}<br>
              &nbsp;*/
            </p>
          </div>
        </div>
      </section>
      <section id="presentation">
        <div class="container">
          <div class="section-title centered fade-in">
            <h2>
              <span class="section-title-number">03.</span>
              {{ $t("project.sections.presentation") }}
            </h2>
            <hr>
          </div>
          <div class="presentation-content-block fade-in">
            <ContentRenderer :value="data?.content" />
          </div>
        </div>
      </section>
      <section id="project-navigation">
        <div class="container fade-in">
          <UnderlinedButton
            :href="data.surround[0] === null ? '#' : localePath(`/project/${data.surround[0].path.split('/').pop()}`)"
            arrow-position="left"
            :disabled="data.surround[0] === null"
          >
            {{ $t("project.nav.next") }}
          </UnderlinedButton>
          <UnderlinedButton
            :href="data.surround[1] === null ? '#' : localePath(`/project/${data.surround[1].path.split('/').pop()}`)"
            arrow-position="right"
            :disabled="data.surround[1] === null"
          >
            {{ $t("project.nav.last") }}
          </UnderlinedButton>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
section#info {
  .info-status-dates {
    // Made this two columns
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    p {
      width: calc(50% - 0.5rem);
      margin: 8px 0;
      font-size: 1.5rem;
      line-height: 1.5rem;

      .colored {
        color: var(--secondary-color);
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;

      p {
        width: 100%;
        font-size: 1.2rem;
        line-height: 1.2rem;
      }
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  ul.technology-list {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

    li.technology-item {
      margin: 1rem;
      max-width: 300px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .technology-item-name {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;
      }

      .technology-item-description {
        color: var(--comment-color);
      }

      .technology-item-vector {
        flex: 1;
        max-height: 60px;
        max-width: 60px;
        margin-bottom: 1rem;
      }
    }
  }

  ul.team-list {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li.team-item {
      margin: 0.5rem 0;
      text-align: center;

      .team-item-name {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;
      }

      .team-item-role {
        color: var(--comment-color);
        margin: 0;
      }
    }
  }
}

section#image {
  overflow: hidden;
  width: 100vw;

  .project-slider {
    .project-slider-item {
      width: 100vw;
      aspect-ratio: 16/9;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  img#header-image {
    width: 100%;
    object-fit: cover;
  }
}

section#links {
  background-color: #0c081693;

  ul.link-list {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

    li.link-item {
      margin: 1rem;
      max-width: 300px;
      width: 100%;
      text-align: center;

      a.link-item-anchor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;

        .link-item-vector {
          max-height: 60px;
          max-width: 60px;
          margin-bottom: 1rem;
        }
      }

      p.link-item-text {
        position: relative;
        width: fit-content;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;

        &::before {
          content: "";
          position: absolute;
          height: 100%;
          left: -2px;
          right: -2px;
          z-index: -1;
          background-color: var(--primary-color);
          transform: scaleX(0%);
          transform-origin: right;
          transition: transform 0.25s var(--easing);
        }
      }

      &:hover {
        p.link-item-text {
          &::before {
            transform: scaleX(100%);
            transform-origin: left;
          }
        }
      }
    }
  }

  .link-empty {
    display: grid;
    place-items: center;

    p.link-empty-text {
      color: var(--comment-color);
      margin: 0;
    }
  }
}

section#presentation {
  .presentation-content-block {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.25rem;
      text-align: justify;

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        text-align: left;
      }
    }
  }
}

section#project-navigation {
  margin: 0 0 2rem;
  height: 2rem;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
