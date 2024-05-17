import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/vue3/props",
      name: "props",
      component:() => import("../views/vue3/props/index.vue"),
    },
    {
      path: "/vue3/ref&reactive",
      name: "ref&reactive",
      component:() => import("../views/vue3/ref&reactive/ref&reactive.vue"),
    },
    {
      path: "/vue3/toRefs",
      name: "toRefs",
      component:() => import("../views/vue3/toRefs/index.vue"),
    },
    {
      path: "/vue3/computed",
      name: "computed",
      component:() => import("../views/vue3/computed/index.vue"),
    },
    {
      path: "/vue3/watch",
      name: "watch",
      component:() => import("../views/vue3/watch/index.vue"),
    },
    {
      path: "/vue3/watchEffect",
      name: "watchEffect",
      component:() => import("../views/vue3/watchEffect/index.vue"),
    },
    {
      path: "/vue3/emit",
      name: "emit",
      component:() => import("../views/vue3/emit/index.vue"),
    },
    {
      path: "/vue3/slot",
      name: "slot",
      component:() => import("../views/vue3/slot/index.vue"),
    },
    {
      path: "/vue3/componentVmodel",
      name: "componentVmodel",
      component:() => import("../views/vue3/componentVmodel/index.vue"),
    },
    {
      path: "/vue3/composables",
      name: "composables",
      component:() => import("../views/vue3/composables/index.vue"),
    },
    {
      path: "/vue3/defineExpose",
      name: "defineExpose",
      component:() => import("../views/vue3/defineExpose/index.vue"),
    },
    {
      path: "/vue3/parent",
      name: "parent",
      component:() => import("../views/vue3/parent/index.vue"),
    },
    {
      path: "/vue3/provideInject",
      name: "provideInject",
      component:() => import("../views/vue3/provideInject/index.vue"),
    },
    {
      path: "/vue3/useAttrs",
      name: "useAttrs",
      component:() => import("../views/vue3/useAttrs/index.vue"),
    },
    {
      path: "/vue3/pinia",
      name: "pinia",
      component:() => import("../views/vue3/pinia/index.vue"),
    },
    {
      path: "/vue3/test/debounce",
      name: "debounce",
      component:() => import("../views/vue3/test/debounce.vue"),
    },
    {
      path: "/vue3/test/throttle",
      name: "throttle",
      component:() => import("../views/vue3/test/throttle.vue"),
    },
    {
      path: "/nested",
      name: "nested",
      component: () => import("../views/nested.vue"),
      children: [
        {
          path: "a",
          name: "a",
          component: () => import("../views/nested/a.vue"),
        },
        {
          path: "b",
          name: "b",
          component: () => import("../views/nested/b.vue"),
        },
      ],
    },
    {
      path: "/:id",
      name: "userName",
      component: () => import("../views/[id].vue"),
    }, //動態路由
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/404.vue"),
    }, //未匹配到任何路由
  ],
});

export default router;
