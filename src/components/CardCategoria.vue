<template>
  <div class="col-4">
    <router-link style="text-decoration: none; color: #0B4619;" :to="link">
      <div class="card text-center">
        <div class="p-2">
          <h6 class="card-title">{{ categoria }}</h6>
          <h2><i :class="icone"></i></h2>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "CardCategoria",
    };
  },
  props: ["categoria", "icone", "link"],
};
</script>

<style scoped>
.card-title {
    font-weight: 600;
}
.col-4 {
  margin-top: 15px;
}
.card {
  background: #E8E1D9;
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