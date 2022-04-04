import Home from './views/Home.vue';
import About from './views/About.vue';
import Store from './views/Store.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'about', path: '/about', component: About},
	{ name: 'store', path: '/store', component: Store}
];
