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
    <hr />
    <div class="causas">
      <div class="container">
        <div class="titulo">
          <h2>{{ titulo_categoria }}</h2>
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
      currentImage: undefined,
      previewImage: undefined,
      categorias: [],
      usuarios: [],
      titulo_categoria: "",
    };
  },
  components: {
    Menu,
    Rodape,
    CardAnuncio,
    CardCategoria,
  },
  methods: {
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
    ListaTodosUsuarios() {
      axios
        .get(`http://localhost:8090/usuario/allusuario`)
        .then((response) => {
          this.usuarios = response.data;
        })
        .catch(() => {
          alert("Algo deu errado ao carregar as causas!");
        });
    },
    ListaUsuarioByCategoria: function (categoria) {
      axios
        .get(`http://localhost:8090/usuario/userbycat/${categoria}`)
        .then((response) => {
          this.usuarios = response.data;
        })
        .catch(() => {
          alert("Algo deu errado ao carregar as causas!");
        });
    },
  },
  mounted() {
    if (this.$route.params.categoria == "todas") {
      this.ListaTodosUsuarios();
      this.titulo_categoria = "TODAS AS CAUSAS";
    } else {
      this.titulo_categoria = this.$route.params.categoria.toUpperCase();
      this.ListaUsuarioByCategoria(this.$route.params.categoria);
    }

    this.ListaCategorias();
  },
watch: {
    $route() {
      this.ListaUsuarioByCategoria(this.$route.params.categoria);
      this.titulo_categoria = this.$route.params.categoria.toUpperCase();
    }
  }
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