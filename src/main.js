import Vue from 'vue';
import App from './App.vue';

// one way
// new Vue({
//     el: '#app',
//     render: (createElement) => createElement(App)
// });

// another way of rendering
new Vue({
    render: (createElement) => createElement(App)
}).$mount('#app');