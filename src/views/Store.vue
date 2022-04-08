<template>
	<main class="store">
		<section class="store__latest">
			<div class="products__card">
				<Card />
			</div>
		</section>
		<section class="store__products">
			<div class="products__card">
				<Card />
			</div>
			<div class="products__card">
				<Card />
			</div>
			<div class="products__card">
				<Card />
			</div>
						<div class="products__card">
				<Card />
			</div>
						<div class="products__card">
				<Card />
			</div>
						<div class="products__card">
				<Card />
			</div>
						<div class="products__card">
				<Card />
			</div>
						<div class="products__card">
				<Card />
			</div>
			
		</section>
	</main>
</template>

<script>
	import Card from '../components/Card.vue';

	export default {
		components: {
			Card
		}
	}
</script>

<style scoped>

	.store {
		padding-top: 20px;
	}

	.store__latest {
		display: flex;
		justify-content: center;
	}

	.store__products {
		display: flex;
		justify-content: center;
		width: 100vw;
		overflow: scroll;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.products__card {
		margin-left: 20px;
	}
</style>