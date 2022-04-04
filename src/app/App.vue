<template>
	<Header />
	<Card />
	<RouterView />
	<Footer />
</template>

<script>
	import Header from '../components/Header.vue';
	import Card from '../components/Card.vue';
	import Footer from '../components/Footer.vue'

	export default {
		components: {
			Header,
			Card,
			Footer
		}
	}
</script>


<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
