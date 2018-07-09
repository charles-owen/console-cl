<template>
<div id="console-main">
  <div class="content">
  <p>Page does not exist...</p>
  </div>
</div>
</template>

<script>
    module.exports = {
        mounted() {
            this.$parent.setTitle('Page does not exist...');
        }
    }
</script>
