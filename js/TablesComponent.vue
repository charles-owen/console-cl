<template>
  <div class="content">
  <h2>Database Tables Management</h2>
    <p class="center red"><em>Use with caution!</em></p>
  <p>The page provides an Administrator the ability to create and destroy database tables.
    Only use during course startup! The create option will not drop an existing table
    unless the drop and create option is selected.</p>
    <ul>
      <li v-for="table in tables"><a @click.prevent="create(table, false)">{{table.title}}</a>
      <a @click.prevent="dropCreate(table)">drop-and-create</a></li>
    </ul>
  </div>
</template>

<script>
import Dialog from 'dialog-cl';

export default {
    data: function() {
        return {
            tables: this.$site.console.tables.tables,
            create: function(table, drop) {
                this.$site.api.post(table.api, {drop: drop ? 'yes' : 'no'})
                    .then((response) => {
                        if(!response.hasError()) {
                            if(drop) {
                                this.$site.toast(this, table.title + ' tables dropped and recreated');
                            } else {
	                            this.$site.toast(this, table.title + ' tables created');
                            }
                        } else {
	                        this.$site.toast(this, response);
                        }

                    })
                    .catch((error) => {
	                    this.$site.toast(this, error);
                    });
            },
            dropCreate: function(table) {
                new Dialog.MessageBox("Are you sure?",
                  'Are you sure you want to drop and recreate the ' + table.title +
                ' tables?', Dialog.MessageBox.OKCANCEL, () => {
                    this.create(table, true);
                    });
            }
        }
    },
    mounted() {
        this.$parent.setTitle(': Database Tables');
	      this.$site.console.tables.tables.sort(function(a, b) {
            return a.order - b.order;
        })
    }
}
</script>

<style lang="scss" scoped>
  li a:first-child {
    display: inline-block;
    width: 12em;
  }

  li a:nth-child(2) {
    font-size: 0.85em;
    font-style: italic;
  }
</style>
