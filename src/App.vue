<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">Generator of Names using Vue.js, GraphQL e Node.js</h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <div class="row title-card">
              <div class="col-md">
                <h5>Prefixes</h5>
              </div>
              <div class="col-md bg-counter">
                <h5><span class="badge bg-info">{{ prefixes.length }}</span></h5>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" :key="prefix">
                    <div class="row">
                      <div class="col-md">
                        {{ prefix }}
                      </div>
                      <div class="col-md btn-remove">
                        <button class="btn btn-danger" v-on:click="deletePrefix(prefix)">
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input class="form-control" type="text" placeholder="Add Prefix" v-model="prefix" v-on:keyup.enter="addPrefix(prefix)" />
                    <div class="input-group-append">
                    <button class="btn btn-primary" v-on:click="addPrefix(prefix)">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="row title-card">
              <div class="col-md">
                <h5>Sufixes</h5>
              </div>
              <div class="col-md bg-counter">
                <h5><span class="badge bg-info">{{ sufixes.length }}</span></h5>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" :key="sufix">
                    <div class="row">
                      <div class="col-md">
                        {{ sufix }}
                      </div>
                      <div class="col-md btn-remove">
                        <button class="btn btn-danger" v-on:click="deleteSufix(sufix)">
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input class="form-control" type="text" placeholder="Add Sufix" v-model="sufix" v-on:keyup.enter="addSufix(sufix)" />
                  <div class="input-group-append">
                    <button class="btn btn-primary" v-on:click="addSufix(sufix)">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
              <li class="list-group-item" v-for="domain in domains" :key="domain">
                {{ domain }}
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

export default {
	name: "App",
	data: function () {
		return {
			prefix: "",
			sufix: "",
			prefixes: ["Air", "Jet", "Flight"],
			sufixes: ["Hub", "Station", "Mart"],
			domains: ["AirHub", "AirStation", "AirMart", "JetHub", "JetStation", "JetMart", "FlightHub", "FlightStation", "FlightMart"],
		};
	},
	methods: {
		addPrefix(prefix) {
			this.prefixes.push(prefix);
			this.prefix = "";
			this.generateDomains();
		},
		deletePrefix(prefix) {
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
			this.generateDomains();
		},
		addSufix(sufix) {
			this.sufixes.push(sufix);
			this.sufix = "";
			this.generateDomains();
		},
		deleteSufix(sufix) {
			this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
			this.generateDomains();
		},
		generateDomains() {
			this.domains = [];
			for (const prefix of this.prefixes) {
				for (const sufix of this.sufixes) {
					this.domains.push(prefix + sufix);
				}
			}
		},
	}
};
</script>

<style scoped>
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}

#main {
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}

.title-card {
  padding: 0px 10px;
}

.btn-remove,
.bg-counter {
  text-align: end;
}

</style>
