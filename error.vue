<script setup lang="ts">
import type { NuxtError } from '#app'
import { defineProps } from 'vue'

const localePath = useLocalePath()

defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <NavBar />
    <section id="error">
      <h1 class="fillTextWithgradient">
        {{ error.message}}
      </h1>
      <h2 class="fillTextWithgradient">
        {{ error.statusCode ? `${$t('error.error')} ${error.statusCode}` : $t('error.fallback') }}
      </h2>
      <UnderlinedButton
        arrow-position="left"
        @click="clearError({ redirect: localePath('/') })"
      >
        {{ $t('error.home') }}
      </UnderlinedButton>
    </section>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
section#error {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: var(--text-color);
  background-color: var(--bg-color);
  h1 {
    font-size: 3cqi;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}
</style>