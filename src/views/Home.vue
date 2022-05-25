<template>
   <section class="home">
      <h1 class="home__headline">Monopolbutikken!</h1>
      <h2 class="home__subline">Lenge leve markedskapitailsmen</h2>
      <div class="home__logo">$</div>
   </section>
</template>

<script>

   import query from '../groq/card.groq?raw'
	import viewMixins from '../mixins/viewMixin.js'

   export default {
      mixins: [viewMixins],
      async created() {
         this.sanityFetch(query)
      }

   }

</script>

<style scoped>
   .home {
      display: grid;
      justify-content: center;
      text-align: center;
   }

   .home__headline, .home__subline {
      font-weight: 100;
   }

   .home__headline {
      margin-top: 40px;
      margin-bottom: 20px;
   }

   .home__logo {
      font-size: 300px;
      margin-top: 20px;
      margin-bottom: 30px;
   }
</style>