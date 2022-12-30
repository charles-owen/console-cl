<template>
<div class="content">
  <p>Page does not exist...</p>
</div>
</template>

<script>
    module.exports = {
        mounted() {
            this.$root.setTitle('Page does not exist...');
        }
    }
</script>
