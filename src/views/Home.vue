<template>
  <main class="home">
    <Container class="home__container">
      <div class="home__content">
        <p>Welcome to the page of our theater!</p>
        <p>You can buy the tickets <router-link :to="{name: 'tickets'}">here</router-link></p>
      </div>
    </Container>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  mounted () {
    this.$store.commit('RESET_STATE')
    this.$store.commit('SET_PERFORMANCES_FORM')
  }
}
</script>

<style lang="scss">
.home__container {
  display: flex;

  height: 100vh;

  align-items: center;
  justify-content: center;
}

.home__content {
  @include bp(tablet) {
    font-size: 48px;
  }

  font-size: 32px;

  text-align: center;

  p {
    margin-top: 0;
  }
}

</style>
