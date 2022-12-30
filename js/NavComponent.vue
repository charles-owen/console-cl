<template>
  <nav class="cl-nav">
    <div>
      <ul class="dividers">
        <li><a :href="homeLink"><span class="home">Home</span></a></li>
        <li v-for="page in pages">
          <router-link :to="pageLink(page)">{{page.title}}</router-link>
        </li>
      </ul>
    </div>
    <div v-if="console.components.nav2.length > 0">
      <div class="nav2">
        <div class="left">
          <component v-if="console.components.nav2left" :is="toRaw(console.components.nav2left)"></component>
        </div>
        <div class="center">
          <div v-for="c in console.components.nav2"><component :is="toRaw(c.component)" :short="console.components.nav2.length > 2"></component></div>
        </div>
        <div class="right">
          <component v-if="console.components.nav2right" :is="toRaw(console.components.nav2right)"></component>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import {toRaw} from 'vue'

export default {
  props: ['console', 'user'],
  data: function () {
    return {
      homeLink: ''
    }
  },
  computed: {
    /**
     * Get the pages that are available to this user
     * @returns array of pages
     */
    pages() {
      let ret = []
      for (let page of this.console.components.pages) {
        if (page.available(this.user)) {
          ret.push(page)
        }
      }

      return ret
    },
    /**
     * Get the components to place in the middle of the navigation bar.
     *
     * The uses toRaw since Vue 3 will not allow a component that is a
     * reactive object.
     * @returns {*[]}
     */
    nav2() {
      let ret = []
      for (let nav of this.console.components.nav2) {
        ret.push(toRaw(nav.component))
      }
      return ret
    },
    short() {
      return this.console.components.nav2.length > 2
    }
  },
  mounted() {
    this.homeLink = this.$site.root + '/';
  },
  methods: {
    pageLink(page) {
      return `${this.$site.root}/cl/console${page.route}`;
    },
    toRaw(c) {
      return toRaw(c)
    }
  }
}
</script>