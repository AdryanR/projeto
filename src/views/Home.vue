<template>
  <div class="home">
    <Menu />
    <header>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div
            class="carousel-item active"
            style="
              background-image: url('https://image.freepik.com/free-photo/closeup-diverse-people-joining-their-hands_53876-96081.jpg');
            "
          ></div>
          <div class="carousel-caption">
            <h2 class="animated fadeInLeft">AJUDE QUEM ESTÁ DO SEU LADO!</h2>
            <p class="animated fadeInUp">
              Conectamos causas com necessidade a boas pessoas
            </p>
            <p class="animated fadeInUp">
              <a
                ><router-link
                  class="btn btn-transparent btn-rounded btn-large"
                  to="/nossas-causas/todas"
                  >ESCOLHA UMA CAUSA</router-link
                ></a
              >
            </p>
          </div>

          <div
            class="carousel-item"
            style="
              background-image: url('https://image.freepik.com/free-photo/group-different-people-volunteering-foodbank-poor-people_23-2149012210.jpg');
            "
          ></div>
        </div>
      </div>
    </header>
    <div class="container-fluid">
      <div class="categorias">
        <h2 class="titulo">ENCONTRE UMA CAUSA</h2>
        <div class="subtitle">
          <a>Localize uma Instituição e faça sua doação</a>
        </div>
        <br />
        <div class="container overflow-hidden">
          <a v-for="cat in categorias" :key="cat.id">
            <div class="row">
              <CardCategoria
                :categoria="cat.nome"
                :icone="cat.icone"
                link="causa/"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="causaDestaque">
      <div class="jumbotron">
        <div class="container">
          <div
            class="
              row
              p-4
              pb-0
              pe-lg-0
              pt-lg-5
              align-items-center
              rounded-3
              border
              shadow-lg
            "
          >
            <div class="col-lg-3 offset-lg-1 p-0 overflow-hidden">
              <img
                class="rounded-circle z-depth-2"
                width="250"
                height="250"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNuvkdNv0Q7r6tzk9fSXbmLIw1KTOGT_0EQ&usqp=CAU"
                data-holder-rendered="true"
              />
            </div>
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-5 fw-bold lh-1">CAUSA EM DESTAQUE</h1>
              <p class="lead">
                Lorem ipsum laboriosam quia qui odit in cupiditate recusandae
                non vero incidunt aut incidunt commodi ea nobis voluptates.
              </p>
              <button
                type="button"
                class="btn btn-success btn-lg px-4 me-md-2 fw-bold"
              >
                CONHECER CAUSA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="causas">
      <div class="container">
        <div class="title"><h2>ALGUMAS CAUSAS</h2></div>
        <div class="subtitle">
          <a>Escolha uma Instituição perto de você e faça sua doação</a>
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
import axios from "axios";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      categorias: [],
    };
  },
  components: {
    Menu,
    Rodape,
    CardAnuncio,
    CardCategoria,
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    ListaCategorias() {
      axios
        .get(`http://localhost:8090/categoria/allcategoria`)
        .then((response) => {
          this.categorias = response.data;
        })
        .catch(() => {
          alert("Algo deu errado ao carregar as categorias!");
        });
    },
  },
  mounted() {
    this.ListaCategorias();
  },
};
</script>

<style scoped>
.carousel-inner {
  height: 100%;
  background: #000;
}

.carousel-caption {
  padding-bottom: 210px;
}

.carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.5;
}

.btn-transparent {
  background-color: #3e7c17c9;
  color: #fff;
  border: 2px solid rgb(72, 145, 27);
}
.btn-transparent:hover {
  background-color: #4a941cdc;
  color: #fff;
}

.btn-rounded {
  border-radius: 70px;
}

.btn-large {
  padding: 11px 45px;
  font-size: 18px;
}

.container-fluid {
  align-items: center;
  text-align: center;
  align-self: center;
}

.btn-success {
  background: #3e7c17e7;
  margin-left: 10px;
  border: 3px solid rgb(72, 145, 27);
}

.btn-success:hover {
  background-color: #4a941cdc;
  color: #fff;
  border: 3px solid rgb(72, 145, 27);
}

.container {
  align-items: center;
  text-align: center;
  align-self: center;
}

.jumbotron {
  background: #e8e1d9;
}

.rodape {
  margin-top: 100px;
}

.categorias,
.causas {
  margin-top: 65px;
  margin-bottom: 65px;
}

.titulo {
  color: #125c13;
}
</style>
