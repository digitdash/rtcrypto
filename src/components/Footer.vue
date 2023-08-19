<template>
  <footer class="footer-basic">
    <p class="copyright">Dash © {{ year }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }

}
</script>
