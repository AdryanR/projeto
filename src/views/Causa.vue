<template>
  <div id="causa" class="causa">
    <div id="menu" class="menu">
      <Menu />
    </div>
    <div
      class="row login_box"
      id="banner"
      :style="'background-image: url(' + causa.banner + ')'"
    >
      <div class="col-md-12 col-xs-12" align="center">
        <div class="outter">
          <img :src="causa.logo" class="image-circle" />
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container overflow-hidden">
        <div class="container">
          <h2 style="color: #125c13">{{ causa.nome.toUpperCase() }}</h2>
          <a>{{ causa.cidade }}/{{ causa.estado }}</a>
          <div class="d-flex justify-content-center align-items-center">
            <div class="p-2">
              <a
                :href="causa.facebook"
                target="_blank"
                class="fab fa-facebook fa-sm"
                style="text-decoration: none; color: black"
              ></a>
            </div>
            <div class="p-2">
              <a
                :href="causa.instagram"
                target="_blank"
                class="fab fa-instagram fa-sm"
                style="text-decoration: none; color: black"
              ></a>
            </div>
            <div class="p-2">
              <a
                :href="causa.whatsapp"
                target="_blank"
                class="fab fa-whatsapp fa-sm"
                style="text-decoration: none; color: black"
              ></a>
            </div>
            <div class="p-2">
              <a
                :href="causa.linkedin"
                target="_blank"
                class="fab fa-linkedin fa-sm"
                style="text-decoration: none; color: black"
              ></a>
            </div>
            <div class="p-2">
              <a
                href="mapa"
                target="_blank"
                class="fas fa-map-marker-alt fa-sm"
                style="text-decoration: none; color: black"
              ></a>
            </div>
          </div>
          <br />
          <h4 class="titulo">QUEM SOMOS</h4>
          <br />
          <a> {{ causa.descricao }}</a
          ><br /><br />
          <hr />
          <br />
          <h4 class="titulo">PRECISAMOS DE</h4>
          <br />
          <a> {{ causa.pedidodesc }} </a><br /><br />
          <hr />
          <br />
          <h4 class="titulo">INFORMAÇÕES</h4>
          <br />
          <div class="row">
            <div class="col-md-6 p-2">
              <i
                class="fas fa-map-marker-alt fa-sm"
                style="vertical-align: middle"
              ></i
              ><a
                >{{ causa.rua }}, {{ causa.numero }}, {{ causa.bairro }},
                {{ causa.cidade }}/{{ causa.estado }}</a
              >
            </div>
            <div class="col-md-6 p-2">
              <i
                class="fas fa-phone-alt fa-sm"
                style="vertical-align: middle"
              ></i
              ><a>{{ causa.telefone }}</a>
            </div>
            <div class="col-md-6 p-2">
              <i
                class="fas fa-envelope fa-sm"
                style="vertical-align: middle"
              ></i
              ><a>{{ causa.email }}</a>
            </div>
            <div class="col-md-6 p-2">
              <i class="fas fa-id-card fa-sm" style="vertical-align: middle"></i
              ><a>{{ causa.cnpj }}</a>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <h4 class="titulo">FOTO INSTITUCIONAL</h4>
          <br />
          <div align="center" v-for="f in causa.userfoto" v-bind:key="f.id">
            <img
              :src="f.foto"
              style="height: 500px; :800px ">
          </div>
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
import axios from "axios";
export default {
  data() {
    return {
      causa: {
        nome: "",
        cnpj: "",
        email: "",
        senha: "",
        cep: "",
        bairro: "",
        numero: "",
        cidade: "",
        estado: "",
        complemento: "",
        referencia: "",
        logo: "",
        banner: "",
        fotoDestaque: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        telefone: "",
        whatsapp: "",
        descricao: "",
        pedidodesc: "",
        userfoto: [
          {
            foto: "",
          },
        ],
      },
    };
  },
  components: {
    Menu,
    Rodape,
  },
  methods: {
    CarregaCausa: function (causa) {
      axios
        //   .get(`http://localhost:8090/usuario/${causa}`)
        .get(`http://localhost:8090/usuario/userbyname/${causa}`)
        .then((response) => {
          var data = response.data[0];
          if (data != null && data.id != null) {
            this.causa.nome = data.nome;
            this.causa.cnpj = data.cnpj;
            this.causa.email = data.email;
            this.causa.facebook = data.facebook;
            this.causa.instagram = data.instagram;
            this.causa.whatsapp = data.whatsapp;
            this.causa.linkedin = data.linkedin;
            this.causa.telefone = data.telefone;
            this.causa.cep = data.cep;
            this.causa.rua = data.rua;
            this.causa.numero = data.numero;
            this.causa.bairro = data.bairro;
            this.causa.cidade = data.cidade;
            this.causa.estado = data.estado;
            this.causa.complemento = data.complemento;
            this.causa.referencia = data.referencia;
            this.causa.banner = data.banner;
            this.causa.logo = data.logo;
            this.causa.fotoDestaque = data.fotoDestaque;
            data.userfoto.map((f) =>
              this.causa.userfoto.push({
                foto: f.foto,
              })
            );
            this.causa.descricao = data.descricao;
            this.causa.pedidodesc = data.pedidodesc;
          }
        });
    },
  },
  mounted() {
    this.CarregaCausa(this.$route.params.causa);
  },
};
</script>

<style scoped>
.titulo {
  color: #125c13;
  font-weight: 700;
}

.thumb {
  margin-bottom: 30px;
}

img.zoom {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
}

.modal-header {
  border-bottom: none;
}
.modal-title {
  color: #000;
}
.modal-footer {
  display: none;
}

.container-fluid {
  align-items: center;
  text-align: center;
  align-self: center;
  padding-top: 80px;
}
.fab,
.fas {
  font-size: 2em;
  padding: 10px;
  text-shadow: 1px 1px 1px #ccc;
}

.a {
  font-size: 17px;
}

.rodape {
  margin-top: 100px;
}

.login_box {
  padding-top: 160px;
}

.image-circle {
  border-radius: 50%;
  width: 175px;
  height: 175px;
  border: 6px solid #4da815;
  margin: 10px;
}

.outter {
  width: 200px;
  height: 200px;
  padding-top: 80px;
}
</style>