<template>
  <nav class="cl-nav">
    <div>
      <ul class="dividers">
        <li><a :href="homeLink"><span class="home">Home</span></a></li>
        <li v-for="page in console.components.pages" v-if="page.available(user)">
          <router-link :to="pageLink(page)">{{page.title}}</router-link>
        </li>
      </ul>
    </div>
    <div v-if="console.components.nav2.length > 0">
      <div class="nav2">
        <div class="left">
          <component v-if="console.components.nav2left" :is="console.components.nav2left"></component>
        </div>
        <div class="center">
          <div v-for="c in console.components.nav2"><component :is="c.component" :short="console.components.nav2.length > 2"></component></div>
        </div>
        <div class="right">
          <component v-if="console.components.nav2right" :is="console.components.nav2right"></component>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
  export default {
      props: ['console', 'user'],
      data: function() {
          return {
              homeLink: ''
          }
      },
      mounted() {
      	  this.homeLink = this.$site.root + '/';
      },
      methods: {
          pageLink(page) {
              return `${this.$site.root}/cl/console${page.route}`;
          }
      }
  }
</script>