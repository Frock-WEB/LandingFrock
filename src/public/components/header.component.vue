<script setup>
import languageSwitcher from "./language-switcher.component.vue";

</script>

<template>
  <header>
    <div id="header-container">
      <img src="/src/assets/img/logo-chapaturuta.png" alt="logo" class="logoChapa">
      <nav>
        <ul>
          <li><a href="#">{{$t('nav.home')}}</a></li>
          <li><a href="#">{{$t('nav.how-it-works')}}</a></li>
          <li><a href="#">{{$t('nav.advantages')}}</a></li>
          <li><a href="#">{{$t('nav.collaborate')}}</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
      <language-switcher/>
    </div>
  </header>
</template>

<style scoped>

</style>