<template>
  <div id="app" class="fr-view">

    <section>
      <div is="TestComponent"></div>
    </section>

  </div>
</template>

<script>
import TestComponent from '@/components/Test'

export default {
  name: 'app',
  components: {
    TestComponent
  }
}
</script>

<style src="@/sass/_main.scss" lang="scss" />
