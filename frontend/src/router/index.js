// import Vue from 'vue';
// import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

// Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//     },
//   ],
// });
import Vue from 'vue';
import Router from 'vue-router';
import Ping from '@/components/Ping';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping,
    },
  ],
})
;
