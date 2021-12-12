<template>
  <div class="nossas-causas">
    <div class="menu">
      <Menu />
    </div>
    <div class="container-fluid">
      <div class="categorias">
        <h2 class="titulo">NOSSAS CAUSAS</h2>
        <div class="subtitle">
          <a>Localize uma Instituição e faça sua doação</a>
        </div>
        <br />
        <div class="container overflow-hidden">
          <div class="row">
            <CardCategoria
              categoria="COVID-19"
              icone="fa fa-virus fa-2x"
              link="causa/"
            />
            <CardCategoria
              categoria="ROUPAS"
              icone="fa fa-tshirt fa-2x"
              link="causa/"
            />
            <CardCategoria
              categoria="COVID-19"
              icone="fa fa-virus fa-2x"
              link="causa/"
            />
            <CardCategoria
              categoria="COVID-19"
              icone="fa fa-virus fa-2x"
              link="causa/"
            />
            <CardCategoria
              categoria="COVID-19"
              icone="fa fa-virus fa-2x"
              link="causa/"
            />
            <CardCategoria
              categoria="COVID-19"
              icone="fa fa-virus fa-2x"
              link="causa/"
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="causas">
      <div class="container">
        <div class="titulo">
          <h2>{{ titulo_categoria }}</h2>
        </div>
        <br />
        <div class="row">
          <CardAnuncio
            imagem="https://www.bsocial.com.br/uploads/ongs/listagem-42.jpg"
            titulo="INSTITUTO VITA"
            texto="Temos por missão promover a saúde do atleta de alta performance e em desenvolvimento..."
            link="causa/"
          />
          <CardAnuncio
            imagem="https://www.bsocial.com.br/uploads/ongs/listagem-46.jpg"
            titulo="INAPE"
            texto="Tem a proposta de acolher crianças e adolescentes com deficiência intelectual e/ou dificuldades de aprendizagem..."
            link="causa/"
          />
          <CardAnuncio
            imagem="https://www.bsocial.com.br/uploads/ongs/listagem-ensinabrasil.jpg"
            titulo="ENSINA BRASIL"
            texto="O Ensina Brasil visa mobilizar mais talentos e desenvolver lideranças para transformar a educação..."
            link="causa/"
          />
          <CardAnuncio
            imagem="https://www.bsocial.com.br/uploads/ongs/listagem-ensinabrasil.jpg"
            titulo="ENSINA BRASIL"
            texto="O Ensina Brasil visa mobilizar mais talentos e desenvolver lideranças para transformar a educação..."
            link="causa/"
          />
        </div>
      </div>
    </div>
    <div class="rodape">
      <Rodape />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Rodape from "@/components/Rodape.vue";
import CardAnuncio from "@/components/CardAnuncio.vue";
import CardCategoria from "@/components/CardCategoria.vue";
export default {
  data() {
    return {
      currentImage: undefined,
      previewImage: undefined,
    };
  },
  props: ["titulo_categoria"],
  components: {
    Menu,
    Rodape,
    CardAnuncio,
    CardCategoria,
  },
  mounted() {
    if (this.$route.params.categoria == "todas") {
      this.titulo_categoria = "TODAS AS CAUSAS";
    } else {
      this.titulo_categoria = "categoria";
    }
  },
};
</script>

<style scoped>
.container {
  align-items: center;
  text-align: center;
  align-self: center;
}
.container-fluid {
  align-items: center;
  text-align: center;
  align-self: center;
  padding-top: 130px;
}
.rodape {
  margin-top: 100px;
}
.titulo {
  color: #125c13;
}
.categorias {
  margin-bottom: 50px;
}
.causas {
  margin-top: 55px;
}
</style>