<template>
<div class="content">
  <p>Page does not exist...</p>
</div>
</template>

<script>
    module.exports = {
        mounted() {
            this.$parent.setTitle('Page does not exist...');
        }
    }
</script>
