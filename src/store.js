import query from '../src/groq/card.groq?raw'
import viewMixins from '../src/mixins/viewMixin.js'

export default {

	mixins: [viewMixins],
	async created() {
		await this.sanityFetch(query)
	}, 

	state() {
		return {
			// visible: false,
			cart: [],
			products: [
				// { id: '001', name: 'Kirkeveien',     price: 123, color: 'red', },
				// { id: '002', name: 'Bygdøy ale',     price: 341, color: 'green', },
				// { id: '003', name: 'Slemdal',        price: 121, color: 'blue', },
				// { id: '004', name: 'Ullevål hageby', price: 221, color: 'green', },
				// { id: '005', name: 'Prinsens gate',  price: 521, color: 'grey', },
				// { id: '006', name: 'Torggata',       price: 821, color: 'yellow', },
				// { id: '007', name: 'Stortings gata', price: 121, color: 'pink', }

			], 
		};
	},
// ??????????????????????????????????
	methods: {
		getCards() {
			this.products += this.content
		}
	},

	getters: {
		getProducts(state) {
			return state.products;
		},

		getCart(state) {
			return state.cart;
		},

		getVisble(state) {
			return state.visible;
		}

	},

	mutations: {
		addToCart(state, product) {
			state.cart.push(product);
		},

		removeAll(state) {
			state.cart = []
			console.log(state.cart, ' se her')
		},

		addProducts(state, result) {
			state.products = result
		}

	},

	actions: {
		removeAll({ commit }) {
			commit('removeAll');
		},

		updateProducts({ commit }, result) {
			commit('addProducts', result)
		}
	}

};
