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
        <h2 class="titulo">NOSSAS CAUSAS</h2>
        <div class="subtitle">
          <a>Localize uma Instituição e faça sua doação</a>
        </div>
        <br />
        <div class="container overflow-hidden">
          <div class="row">
            <CardCategoria
              v-for="cat in categorias"
              :key="cat.id"
              :categoria="cat.nome"
              :icone="cat.icone"
              :link="cat.nome"
            />
          </div>
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
            <div class="col-lg-3 my-auto offset-lg-1 p-0 overflow-hidden">
              <img
                class="rounded-circle z-depth-2"
                width="250"
                height="250"
                :src="causaDestaque.logo"
                data-holder-rendered="true"
              />
            </div>
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-5 fw-bold lh-1">{{ causaDestaque.nome.toUpperCase() }}</h1>
              <p class="descDestaque">
                {{ causaDestaque.descricao }}
              </p>
              <router-link
                style="text-decoration: none; color: #0b4619"
                :to="{ name: 'Causa', params: { causa: causaDestaque.nome } }"
              >
                <button
                  type="button"
                  class="btn btn-success btn-lg px-4 me-md-2 fw-bold"
                >
                  CONHECER CAUSA
                </button>
              </router-link>
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
            v-for="user in usuarios"
            :key="user.id"
            :titulo="user.nome"
            :imagem="user.fotoDestaque"
            :texto="user.descricao"
            :link="user.nome"
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
      usuarios: [],
      causaDestaque: {
        nome: "",
        logo: "",
        descricao: "",
      },
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
    ListaUsuarios() {
      axios
        .get(`http://localhost:8090/usuario/allusuario`)
        .then((response) => {
          this.usuarios = response.data;
        })
        .catch(() => {
          alert("Algo deu errado ao carregar as causas!");
        });
    },
    CarregaCausaDestaque() {
      // var id = Math.floor(4* Math.random() + 1);
      axios
        .get(`http://localhost:8090/usuario/8`)
        .then(
          function (response) {
            this.causaDestaque.nome = response.data.nome;
            this.causaDestaque.logo = response.data.logo;
            this.causaDestaque.descricao = response.data.descricao;
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error.statusText);
        });
    },
  },
  mounted() {
    this.ListaCategorias();
    this.ListaUsuarios();
    this.CarregaCausaDestaque();
  },
  beforeCreate() {},
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

.descDestaque {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
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
