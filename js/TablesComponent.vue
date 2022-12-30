<template>
  <div class="content">
  <h2>Database Tables Management</h2>
    <p class="center red"><em>Use with caution!</em></p>
  <p>The page provides an Administrator the ability to create and destroy database tables.
    Only use during course startup! The create option will not drop an existing table
    unless the drop and create option is selected. The clean option allows for cleaning
    of orphaned records from tables.</p>
    <div>

      <table>
        <tr>
          <th>Tables</th>
          <th colspan="3">Operations</th>
        </tr>
        <tr v-for="table in tables">
          <td>{{table.title}}</td>
          <td><button @click.prevent="create(table, false)">create</button></td>
          <td><button @click.prevent="dropCreate(table)">drop-and-create</button></td>
          <td><button @click.prevent="clean(table)">clean</button></td>
        </tr>
      </table>

    </div>
    <pre v-if="results.length > 0" class="code">{{results}}</pre>
  </div>
</template>

<script>
import Dialog from 'dialog-cl';

export default {
    data: function() {
        return {
            tables: this.$root.console.tables.tables,
            results: ''
        }
    },
    mounted() {
        this.$root.setTitle(': Database Tables');
	      this.$root.console.tables.tables.sort(function(a, b) {
            return a.order - b.order;
        })
    },
    methods: {
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
	    },
	    clean: function(table) {
		    this.$site.api.post(table.api, {clean: 'yes'})
			    .then((response) => {
				    if(!response.hasError()) {
				    	let result = response.getData('table-clean').attributes;

				    	this.results += table.title + " Tables\n\n" + result + "\n";
				    	console.log(result);
				    } else {
					    this.$site.toast(this, response);
				    }

			    })
			    .catch((error) => {
				    this.$site.toast(this, error);
			    });
	    }
    }
}
</script>

<style lang="scss" scoped>
  table td {
    padding: 0.25em;
  }

  table button {
    display: inline-block;
    font-size: 0.85em;
    font-style: italic;
  }

  li span {
    display: inline-block;
    width: 6em;
    font-size: inherit;
    font-style: normal;
  }


</style>
