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
            <h5>Prefixes <span class="badge bg-info">{{ prefixes.length }}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" :key="prefix">
                    {{ prefix }} 
                  </li>
                </ul>
                <br />
                <input class="form-control" type="text" placeholder="Type the Prefix" />
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>Sufixes <span class="badge bg-info">{{ sufixes.length }}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" :key="sufix">
                    {{ sufix }}
                  </li>
                </ul>
                <br />
                <input class="form-control" type="text" placeholder="Type the Sufix" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <h5>Domains <span class="badge bg-info">{{ domains.length }}</span></h5>
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
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

export default {
  name: 'App',
  data: function () {
    return {
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
      domains: ['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlightStation', 'FlightMart'],
    }
  }
}
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

</style>
