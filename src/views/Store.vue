   <template>

	<!-- 
		dette mangler: 
			skjule/vise cart,
			removeFromCart(),
			sanity!!!,
			color
	 -->
		<section class="cart">
			<div class="card" v-for="product in cart" :key="product.id">
				<div class="card__border">
					<h2 class="card__header">{{ product.name }}</h2>
					<ul class="card__list">
						<li class="list__element">Med 1 hus 145kr</li>
						<li class="list__element">Med 2 hus 145kr</li>
						<li class="list__element">Med 3 hus 1450kr</li>
						<li class="list__element">Med 4 hus 1905kr</li>
						<li class="list__element">Med Hotel 2450kr</li>
					</ul>
					<div class="card__price">{{ product.price }}</div>
					<button @click="removeItem(index)">Remove from cart</button>
				</div>
			</div>
			<div v-for="product in cart" :key="product.id">
				<div>{{ product.price }}</div>
			</div>
		</section>

		<h1 class="headline" >Velg dine kort:</h1>
		<section class="store">
			<div class="card" v-for="product in products" :key="product.id">
				<div class="card__border">
					<h2 v-bind:style="{'background-color': color }" class="card__header">{{ product.name }}</h2>
					<ul class="card__list">
						<li class="list__element">Med 1 hus 145kr</li>
						<li class="list__element">Med 2 hus 145kr</li>
						<li class="list__element">Med 3 hus 1450kr</li>
						<li class="list__element">Med 4 hus 1905kr</li>
						<li class="list__element">Med Hotel 2450kr</li>
					</ul>
					<div class="card__price">{{ product.price }}</div>
					<button @click="addProductToCart(product)">Add to cart</button>
				</div>
			</div>
		</section>

</template>

<script>
	export default {
		
		data() {
			return {
				visible: true,
				color: 'blue',
				sum: 0
			}
		},

		computed: {
			products() {
				return this.$store.getters.getProducts;
			},

			cart() {
				return this.$store.getters.getCart;
			},

			visible() {
				return this.$store.getters.getVisible;
			},

			setColor() {
				this.color = 'pink'
			}		
		},

		methods: {
			addProductToCart(product) {
				this.$store.commit('addToCart', product)
				this.setColor()
			},

			removeItem(itemIndex) {
				this.$store.commit('removeItem', itemIndex)
			}
		},
	}
</script>

<style scoped>

	.cart {
		position: absolute;
		right: 0px;
		z-index: 1;
		display: grid;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		overflow: scroll;
		background: white;
	}

	@media screen and (min-width: 1000px) {
		.cart {
			width: 346px;
		}
	}

	.headline {
		margin: 20px;
	}

	.store {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		overflow: scroll;
		padding-top: 20px;
		padding-bottom: 20px;
	}

   .card {
      border: solid 2px;
      width: 306px;
      height: 459px;
      padding: 13px;
      display: grid;
      justify-content: center;
      background: white;
		margin: 10px;
   }

   .card__border {
      border: solid 2px;
      width: 272px;
      height: 425px;
      display: grid;
      justify-content: center;
   }

   .card__header {
      border: solid 2px;
      text-align: center;
      padding-top: 15px;
      width: 210px;
      height: 80px;
      margin-top: 13px;
      /* background: #E39F38; */
   }

   .list__element {
      list-style: none;
   }

   .card__amount {
      width: 100px;
      height: 25px;
      text-align: center;
   }

</style>