<template>
  <header class="navbar sticky-top navbar-light navbar-expand-lg navigation-clean">
    <div class="container">
      <h1 class="mb-0">
        <router-link class="navbar-brand" to="/" title="Live Crypto Prices">Trader Charts & Conversions</router-link>
      </h1>
      <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
        <span class="visually-hidden">Toggle navigation</span
        ><span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    language () {
      const locale = this.$i18n.locale
      return this.langs.filter(i => i.locale === locale)[0].label
    }
  },
  methods: {
    onDropdown (id) {
      this.show = this.show === id ? null : id
    },
    onSelect (locale) {
      this.show = null
      this.$i18n.locale = locale
    }
  },
  data: () => ({
    show: null,
    langs: [
      {
        code: 'EN',
        locale: 'en',
        label: 'English'
      },
      {
        code: 'TR',
        locale: 'tr',
        label: 'Türkçe'
      },
      {
        code: 'BG',
        locale: 'bg',
        label: 'Български'
      }
    ]
  })
}
</script>

<style scoped>
.dropdown-menu {
  right: 18px;
  transform: translateY(1em);
}
.dropdown-toggle.opened::after {
  transform: rotate(180deg);
}
</style>
