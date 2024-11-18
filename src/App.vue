<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="main-container">
        <header>
            <RouterLink to="/form/1">Form 1</RouterLink>
            <RouterLink to="/form/2">Form 2</RouterLink>
            <RouterLink to="/form/3">Form 3</RouterLink>
        </header>

        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
}

main {
  flex-grow: 1;
}

header {
  line-height: 1.5;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

a.router-link-exact-active {
  color: var(--color-text);
}

a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

a:first-of-type {
  border: 0;
}


</style>
