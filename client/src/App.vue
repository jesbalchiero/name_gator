<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">Generator of Names using Vue.js, GraphQL e Node.js</h6>
    </div>
    <div id="main">
      <DomainList />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import DomainList from "./components/DomainList.vue";

export default {
	name: "App",
	components: {
		DomainList,
	},
};
</script>

<style>
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
  .bg-counter,
  .btn-buy {
    text-align: end;
  }
</style>