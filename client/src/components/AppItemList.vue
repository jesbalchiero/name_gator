<template>
  <div>
    <div class="row title-card">
      <div class="col-md">
        <h5>{{ title }}</h5>
      </div>
      <div class="col-md bg-counter">
        <h5><span class="badge bg-info">{{ items.length }}</span></h5>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in items" :key="item">
            <div class="row">
              <div class="col-md">
                {{ item }}
              </div>
              <div class="col-md btn-remove">
                <button class="btn btn-danger" v-on:click="deleteItem(item)">
                  <span class="fa fa-trash"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <br />
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Add Item" v-model="item" v-on:keyup.enter="addItem(item)" />
            <div class="input-group-append">
            <button class="btn btn-primary" v-on:click="addItem(item)">
              <span class="fa fa-plus"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "AppItemList",
	props: ["title", "items"],
	data(){
		return {
			item: "",
		};
	},
	methods: {
		addItem(item) {
			if (!item.length > 0) {
				return alert("Add a text to include a Item!");
			}
      
			this.$emit("addItem", item);
			this.item = "";
		},
		deleteItem(item) {
			this.$emit("deleteItem", item);
		}
	}
};
</script>

<style scoped>

</style>
