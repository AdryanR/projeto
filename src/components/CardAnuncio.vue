<template>
  <div class="col-6 col-md-3 py-2">
    <router-link style="text-decoration: none; color: #0b4619" :to="{name: 'Causa', params:{causa:link}}">
      <div class="card h-100 text-dark mb-3" style="max-width: 15rem">
        <img :src="imagem" class="card-img-top" width="200px" height="190px" />
        <div class="card-body">
          <h5 class="card-title">{{ titulo.toUpperCase() }}</h5>
          <p class="card-text">{{ texto }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "CardAnuncio",
    };
  },
  props: ["imagem", "titulo", "texto", "link"],
  methods: {
  },
};
</script>

<style scoped>
/* .container-fluid {
  align-items: center;
  text-align: center;
  align-self: center;
} */
.card {
  background: #ffffff;
}
.card:hover {
  background: #6cc98177;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
/* @media screen and (max-width: 600px) {
  .card-text {
    visibility: hidden;
  } 

} */
</style>