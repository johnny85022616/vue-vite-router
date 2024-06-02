<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter();
setTimeout(() => {
  // router.push('about') //轉頁後會紀錄上一頁
  // router.replace('about') // 轉頁後不會記錄上一頁
}, 1000)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <h3>router</h3>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nested">Nested</RouterLink>
        <!-- query的路徑只可用path也可用name -->
        <RouterLink :to="{ name: 'query', query: { name: '張三', age: 22 } }">query</RouterLink>
        <!-- param的路徑只可用name -->
        <RouterLink :to="{ name: 'param', params: { first: 'L0001', second: 'M0002' } }">Param</RouterLink>
        <h3>vue3</h3>
        <RouterLink to="/vue3/ref&reactive">ref&reactive</RouterLink>
        <RouterLink to="/vue3/toRefs">toRefs</RouterLink>
        <RouterLink to="/vue3/computed">computed</RouterLink>
        <RouterLink to="/vue3/watch">watch</RouterLink>
        <RouterLink to="/vue3/watchEffect">watchEffect</RouterLink>
        <RouterLink to="/vue3/typescript">typescript</RouterLink>
        <RouterLink to="/vue3/props">Props</RouterLink>
        <RouterLink to="/vue3/emit">Emit</RouterLink>
        <RouterLink to="/vue3/slot">Slot</RouterLink>
        <RouterLink to="/vue3/componentVmodel">Component v-model</RouterLink>
        <RouterLink to="/vue3/composables">Composables</RouterLink>
        <RouterLink to="/vue3/defineExpose">DefineExpose</RouterLink>
        <RouterLink to="/vue3/parent">$parent</RouterLink>
        <RouterLink to="/vue3/provideInject">Provide & Inject</RouterLink>
        <RouterLink to="/vue3/useAttrs">useAttrs</RouterLink>
        <h3>Pinia</h3>
        <RouterLink to="/vue3/pinia">pinia</RouterLink>
        <h3>Test</h3>
        <RouterLink to="/vue3/test/debounce">debounce</RouterLink>
        <RouterLink to="/vue3/test/throttle">throttle</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
