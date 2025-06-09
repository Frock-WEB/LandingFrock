<script>
export default {
  name : "languageSwitcher",
  data() {
    return {
      languages: [],
    }
  },
  created() {
    this.languages = this.$i18n.availableLocales;
  }
}
</script>
<template>
  <pb-SelectButton v-model="$i18n.locale" :options="languages">
  </pb-SelectButton>

</template>