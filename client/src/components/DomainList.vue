<template>
    <div>
        <div id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                    <AppItemList title="Prefixes" type="prefix" :items="items.prefix" v-on:addItem="addItem" v-on:deleteItem="deleteItem" />
                    </div>
                    <div class="col-md">
                    <AppItemList title="Suffixes" type="suffix" :items="items.suffix" v-on:addItem="addItem" v-on:deleteItem="deleteItem"/>
                    </div>
                </div>
                <br />
                <div class="row title-card">
                    <div class="col-md">
                    <h5>Domains</h5>
                    </div>
                    <div class="col-md bg-counter">
                    <h5><span class="badge bg-info">{{ domains.length }}</span></h5>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="domain in domains" :key="domain.name">
                        <div class="row">
                            <div class="col-md-6">
								{{ domain.name }}
							</div>
							<div class="col-md-3">
								<span class="badge bg-info">
									{{ (domain.available) ? "Available" : "Not Available"}}
								</span>
							</div>
                            <div class="col-md-3 btn-buy">
								<a class="btn btn-primary" :href="domain.checkout" target="_blank">
									<span class="fa fa-shopping-cart"></span>
								</a>
								&emsp;
								<button class="btn btn-primary" v-on:click="openDomain(domain)">
									<span class="fa fa-search"></span>
								</button>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from "vuex";
import AppItemList from "./AppItemList.vue";
  
export default {
	name: "App",
	components: {
		AppItemList,
	},
	data: function () {
		return {};
	},
	methods: {
		...mapActions(["addItem", "deleteItem", "getItems", "generateDomains"]),
		openDomain(domain) {
			this.$router.push({
				path: `/domains/${domain.name}`
			});
		}
	},
	computed: {
		...mapState(["items", "domains"])
	}
};
</script>

<style>

</style>