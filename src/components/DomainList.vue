<template>
    <div>
        <div id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                    <AppItemList title="Prefixes" :items="prefixes" v-on:addItem="addPrefix" v-on:deleteItem="deletePrefix" />
                    </div>
                    <div class="col-md">
                    <AppItemList title="Sufixes" :items="sufixes" v-on:addItem="addSufix" v-on:deleteItem="deleteSufix"/>
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
                            <div class="col-md">
                            {{ domain.name }}
                            </div>
                            <div class="col-md btn-buy">
                            <a class="btn btn-primary" :href="domain.checkout" target="_blank">
                                <span class="fa fa-shopping-cart"></span>
                            </a>
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
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import AppItemList from "./AppItemList.vue";
  
export default {
	name: "App",
	components: {
		AppItemList,
	},
	data: function () {
		return {
			prefix: "",
			sufix: "",
			prefixes: ["Air", "Jet", "Flight"],
			sufixes: ["Hub", "Station", "Mart"],
		};
	},
	methods: {
		addPrefix(prefix) {
			this.prefixes.push(prefix);
		},
		deletePrefix(prefix) {
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
		},
		addSufix(sufix) {
			this.sufixes.push(sufix);
		},
		deleteSufix(sufix) {
			this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
		},
	},
	computed: {
		domains() {
			const domains = [];
			for (const prefix of this.prefixes) {
				for (const sufix of this.sufixes) {
					const name = prefix + sufix;
					const checkout = `https://registro.br/busca-dominio/?fqdn=${name.toLowerCase()}`;
                
					domains.push({
						name,
						checkout
					});
				}
			}
			return domains;
		},
	},
};
</script>