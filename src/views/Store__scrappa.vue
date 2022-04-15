<template>
	<main class="store">
		<section v-if="visible" class="store__cart">
			<div class="cart__product">
				<Card />
			</div>
			<div class="cart__product">
				<Card />
			</div>
			<div class="cart__product">
				<Card />
			</div>
			<div class="cart__total">
				<div>total:</div>
				<div>123$</div>
			</div>
		</section>

		<section class="store__latest">
			<h1 class="latest__headline">Latest:</h1>
			<div class="lateset__product">
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
		},

		data() {
			return {
				
			}
		},

		methods: {
			addToCart() {
				console.log(this.products[1].name)
			}
		},
	}
</script>

<style scoped>

	.store {
		padding-top: 20px;
	}

	.store__cart {
		width: 100vw;
		height: 100vh;
		background: var(--primary-color);
		display: grid;
		justify-content: center;
		overflow: scroll;
	}

	.cart__product {
		margin-top: 20px;
	}

	.cart__total {
		border-top: solid 2px;
		margin-top: 20px;
		padding-top: 20px;
		width: 306px;
		display: flex;
		justify-content: space-between;
	}

	.cart__total div {
		font-size: 1.5rem;
	}

	.store__latest {
		display: grid;
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