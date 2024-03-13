<script lang="ts" setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { updateFadeInElements } from "~/app.vue";
import { FileDown } from "lucide-vue-next";

const modules = [Navigation, Pagination];
const { locale } = useI18n();
const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug[0]
  : route.params.slug;

type Data = {
  content: {
    title: string;
    subtitle: string;
    status: string;
    dates: {
      start: string;
      end: string;
    };
    technologies: {
      name: string;
      icon: string;
      description: string;
    }[];
    team: {
      name: string;
      role: string;
    }[];
    images: string[];
    links: {
      name: string;
      url: string;
      icon: string;
    }[];
  };
  surround: [string, string];
};

const { data }: { data: Ref<Data> } = await useAsyncData("page", async () => {
  const [content, surround] = await Promise.all([
    queryContent(`${locale.value}/${slug}`).findOne(),
    queryContent().only("_path").findSurround(`/${locale.value}/${slug}`),
  ]);
  return {
    content,
    surround: surround.map((s: any) => s?._path.split("/").pop()),
  };
});

if (!data.value) {
  const route = useRoute();
  throw createError({
    statusCode: 404,
    message: `Page not found: ${route.fullPath}`,
  });
}

onMounted(() => {
  updateFadeInElements();
  useHead({
    title: data.value.content?.title,
    meta: [
      {
        name: "description",
        content: data.value.content?.subtitle,
      },
      { name: "og:title", content: data.value.content?.title },
      { name: "og:description", content: data.value.content?.subtitle },
      { name: "twitter:title", content: data.value.content?.title },
      { name: "twitter:description", content: data.value.content?.subtitle },
    ],
  });
});
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
            <hr />
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
              class="technology-item fade-in"
              v-for="technology in data.content?.technologies"
              :key="technology.name"
            >
              <img
                class="technology-item-vector"
                :src="`https://cdn.simpleicons.org/${technology.icon}/f5f3fa`"
                alt="icon"
              />
              <p class="technology-item-name">{{ technology.name }}</p>
              <p class="technology-item-description">
                // {{ technology.description }}
              </p>
            </li>
          </ul>
          <h3 class="fillTextWithgradient fade-in">{{ $t("project.team") }}</h3>
          <ul class="team-list">
            <li
              class="team-item fade-in"
              v-for="member in data.content?.team"
              :key="member.name"
            >
              <p class="team-item-name">{{ member.name }}</p>
              <p class="team-item-role">// {{ member.role }}</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="image fade-in">
        <Swiper
          v-if="data.content?.images?.length > 1"
          class="project-slider"
          :slides-per-view="1"
          :space-between="20"
          :navigation="true"
          :pagination="{ clickable: true }"
          :loop="false"
          :grab-cursor="true"
          :centeredSlides="true"
          :modules="modules"
        >
          <SwiperSlide
            class="project-slider-item"
            v-for="image in data.content?.images"
            :key="image"
          >
            <img v-bind:src="image" alt="" />
          </SwiperSlide>
        </Swiper>
        <img
          v-else-if="data.content?.images"
          id="header-image"
          v-bind:src="data.content?.images[0]"
          alt=""
        />
      </section>
      <section id="links">
        <div class="container">
          <div class="section-title centered fade-in">
            <h2>
              <span class="section-title-number">02.</span>
              {{ $t("project.sections.links") }}
            </h2>
            <hr />
          </div>
          <ul class="link-list" v-if="data.content?.links?.length > 0">
            <li
              class="link-item fade-in"
              v-for="link in data.content?.links"
              :key="link.name"
            >
              <a class="link-item-anchor" :href="link.url" target="_blank">
                <div v-if="link.icon == 'download'" class="link-item-vector">
                  <FileDown :size="60" color="#f5f3fa" />
                </div>
                <img
                  v-else
                  class="link-item-vector"
                  :src="`https://cdn.simpleicons.org/${link.icon}/f5f3fa`"
                  alt="icon"
                />
                <p class="link-item-text" v-html="link.name"></p>
              </a>
            </li>
          </ul>
          <div class="link-empty fade-in" v-else>
            <p class="link-empty-text">
              /*<br />
              &nbsp;* {{ $t("project.noLinks.1") }}<br />
              &nbsp;* {{ $t("project.nolinks.2") }}<br />
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
            <hr />
          </div>
          <div class="presentation-content-block fade-in">
            <ContentRenderer :value="data?.content" />
          </div>
        </div>
      </section>
      <section id="project-navigation">
        <div class="container fade-in">
          <UnderlinedButton
            :href="`/project/${data.surround[1]}`"
            arrowPosition="left"
            :disabled="data.surround[1] === undefined"
          >
            {{ $t("project.nav.next") }}
          </UnderlinedButton>
          <UnderlinedButton
            :href="`/project/${data.surround[0]}`"
            arrowPosition="right"
            :disabled="data.surround[0] === undefined"
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
  width: 100%;
  .project-slider {
    .project-slider-item {
      width: 100%;
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
