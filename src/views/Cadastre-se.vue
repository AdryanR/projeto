<template>
  <div class="cadastre-se">
    <div class="menu">
      <Menu />
    </div>
    <div class="container-fluid">
      <h3>Cadastro de entidades</h3>
      <br />
      <div class="container overflow-hidden">
        <form
          class="row gy-2 gx-4 align-items-center p-3"
          style="border: 1px solid #d3d3d3"
          v-if="requisicao"
          @submit.prevent="addUsuario"
        >
          <div class="col-md-4 py-2">
            <label class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nome entidade"
              v-model="requisicao.nome"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">CNPJ</label>
            <masked-input
              class="form-control"
              mask="11.111.111/1111-11"
              placeholder="22.368.692/0001-68"
              v-model="requisicao.cnpj"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">E-mail</label>
            <input
              type="email"
              class="form-control"
              placeholder="nome@example.com"
              v-model="requisicao.email"
              required
            />
          </div>
          <div class="col-md-2 py-2">
            <label class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              placeholder="Senha para login"
              v-model="requisicao.senha"
              required
            />
          </div>
          <div class="col-md-2 py-2">
            <label class="form-label">CEP</label>
            <input
              type="text"
              class="form-control"
              placeholder="89030-101"
              maxlength="9"
              id="cep"
              v-on:change="consultaCep"
              v-model="requisicao.cep"
              required
            />
          </div>
          <div class="col-md-6 py-2">
            <label class="form-label">Endereço</label>
            <input
              type="text"
              class="form-control"
              placeholder="R Engenheiro paul werner"
              id="logradouro"
              v-model="requisicao.rua"
              required
            />
          </div>
          <div class="col-md-1 py-2">
            <label class="form-label">Número</label>
            <input
              type="text"
              class="form-control"
              placeholder="638"
              id="numero"
              v-model="requisicao.numero"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">Bairro</label>
            <input
              type="text"
              class="form-control"
              placeholder="Itoupava Seca"
              id="bairro"
              v-model="requisicao.bairro"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">Cidade</label>
            <input
              type="text"
              class="form-control"
              placeholder="Blumenau"
              id="cidade"
              v-model="requisicao.cidade"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">Estado</label>
            <input
              type="text"
              class="form-control"
              placeholder="Santa Catarina"
              id="estado"
              v-model="requisicao.estado"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">Complemento</label>
            <input
              type="text"
              class="form-control"
              placeholder="Torre B, sala 04"
              id="complemento"
              v-model="requisicao.complemento"
            />
          </div>
          <div class="col-md-3 py-2">
            <label class="form-label">Referência</label>
            <input
              type="text"
              class="form-control"
              placeholder="Prédio San Pietro"
              v-model="requisicao.referencia"
              id="referencia"
            />
          </div>
          <div class="col-md-4 py-2">
            <label class="form-label">Facebook</label>
            <input
              type="text"
              class="form-control"
              placeholder="https://facebook.com/entidade"
              v-model="requisicao.facebook"
            />
          </div>
          <div class="col-md-4 py-2">
            <label class="form-label">Instagram</label>
            <input
              type="text"
              class="form-control"
              placeholder="https://instagram.com/entidade"
              v-model="requisicao.instagram"
            />
          </div>
          <div class="col-md-4 py-2">
            <label class="form-label">LinkedIn</label>
            <input
              type="text"
              class="form-control"
              placeholder="https://linkedin.com/in/entidade"
              v-model="requisicao.linkedin"
            />
          </div>
          <div class="col-md-4 py-2">
            <label class="form-label">Telefone</label>
            <masked-input
              class="form-control"
              mask="(11) 11111-1111"
              placeholder="(47) 3533-4049"
              v-model="requisicao.telefone"
              required
            />
          </div>
          <div class="col-md-4 py-2">
            <label class="form-label">WhatsApp</label>
            <masked-input
              v-model="requisicao.whatsapp"
              class="form-control"
              mask="(11) 11111-1111"
              placeholder="(47) 98901-9578"
            />
          </div>
          <div class="col-md-4 py-2">
            <label>Categorias de doações</label><a>⠀</a
            ><i
              title="Categorias na qual a entidade precisa de ajuda, 
use a tela CONTROL para selecionar mais de uma."
              data-toggle="popover"
              data-trigger="hover focus"
              class="fa fa-info-circle"
            ></i>
            <select
              v-model="requisicao.categoria"
              multiple
              class="form-control"
              id="exampleFormControlSelect1"
              required
            >
              <option
                v-for="categoria in categorias"
                v-bind:key="categoria.id"
                :value="categoria"
              >
                {{ categoria.nome }}
              </option>
            </select>
          </div>
          <div class="col-md-3 py-2">
            <label for="formFileLogo" class="form-label"
              >Logo da entidade</label
            >
            <input
              class="form-control"
              type="file"
              accept="image/*"
              id="imgLogo"
              @change="getFile('logo')"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label for="formFileBanner" class="form-label"
              >Banner do perfil</label
            >
            <input
              class="form-control"
              type="file"
              accept="image/*"
              id="imgBanner"
              @change="getFile('banner')"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label for="formFileFotos" class="form-label"
              >Foto de destaque</label
            >
            <input
              class="form-control"
              type="file"
              accept="image/*"
              id="formFileFotos"
              @change="getFile('fotoDestaque')"
              :v-model="requisicao.fotoDestaque"
              required
            />
          </div>
          <div class="col-md-3 py-2">
            <label for="formFileFotos" class="form-label"
              >Foto institucional</label
            >
            <input
              class="form-control"
              type="file"
              accept="image/*"
              id="formFileFotos"
              @change="getFile('fotoINS')"
              :v-model="userfoto.foto"
              required
            />
          </div>
          <div class="col-12 py-3">
            <label for="textareaDescricao" class="form-label"
              >Descrição da entidade</label
            >
            <textarea
              class="form-control"
              id="textareaDescricao"
              rows="3"
              placeholder="Ex: Associação Solidariedade em Marcha – SOMAR, é uma Organização da Sociedade Civil, sem fins de lucro, que tem como missão promover condições de vida dignas que permitam o desenvolvimento integral das pessoas assistidas.

A SOMAR realiza o seu trabalho dentro de comunidades de extrema vulnerabilidade social tendo como objetivo oferecer oportunidades para seus moradores e assim auxiliá-los a alcançar sua autonomia dentro do seu próprio território. Atuamos nas cidades do Rio de Janeiro, Petrópolis e São Paulo."
              required
              v-model="requisicao.descricao"
            ></textarea>
          </div>
          <div class="col-12 py-3">
            <label for="textareaPedidos" class="form-label"
              >Descrição dos pedidos de doação</label
            >
            <textarea
              class="form-control"
              id="textareaPedidos"
              rows="3"
              placeholder="Ex: Precisamos de: 
              20kg de Arroz por mês
              30l de Álcool em Gel
              Roupas para adultos"
              required
              v-model="requisicao.pedidodesc"
            ></textarea>
          </div>
          <div class="col-12 py-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Ao se cadastrar aceito os termos e condições
              </label>
            </div>
          </div>
          <div class="col-12">
            <input class="btn btn-primary" type="submit" value="Cadastre-se" />
          </div>
          <span></span>
        </form>
      </div>
    </div>

    <div class="rodape">
      <Rodape />
    </div>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-storage.js"></script>
<script>
import Menu from "@/components/Menu.vue";
import MaskedInput from "vue-masked-input";
import Rodape from "@/components/Rodape.vue";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyBYI67rcRjVF4buNNUCqWj4uGYnuyRMm7g",
  authDomain: "doemaisapi-efd9c.firebaseapp.com",
  projectId: "doemaisapi-efd9c",
  storageBucket: "doemaisapi-efd9c.appspot.com",
  messagingSenderId: "223198834046",
  appId: "1:223198834046:web:acbe0d8e9bb6f5aae6972f",
};
firebase.initializeApp(firebaseConfig);

export default {
  data() {
    return {
      File: null,
      value: null,
      preview: null,
      isPic: false,
      categorias: [],
      userfoto: {
        foto: null,
      },
      requisicao: {
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
        categoria: [
          // {
          //     id: '1'
        ],
        userfoto: [
          // {
          //   foto: 'caminhodaimagem',
          // }
        ],
      },
    };
  },
  components: {
    Menu,
    Rodape,
    MaskedInput,
  },
  methods: {
    consultaCep: function () {
      if (this.requisicao.cep.length >= 8) {
        axios
          .get(`https://viacep.com.br/ws/${this.requisicao.cep}/json/`)
          .then(
            function (response) {
              this.requisicao.rua = response.data.logradouro;
              this.requisicao.bairro = response.data.bairro;
              this.requisicao.cidade = response.data.localidade;
              this.requisicao.estado = response.data.uf;
              this.requisicao.complemento = response.data.complemento;
            }.bind(this)
          )
          .catch(function (error) {
            console.log(error.statusText);
          });
      }
    },
    getFile: function (nome) {
      this.File = event.target.files[0];
      this.preview = null;
      this.isPic = false;
      if (this.File.name.includes(".png") || this.File.name.includes(".jpg")) {
        this.isPic = true;
      }
      this.submitFile(nome);
    },
    submitFile: function (nome) {
      const storage = firebase.storage().ref().child(`${this.File.name}`);
      const storageRef = storage.put(this.File);
      setTimeout(() => {
        if (nome == "banner") {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.requisicao.banner = url;
          });
        }
        if (nome == "logo") {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.requisicao.logo = url;
          });
        }
        if (nome == "fotoINS") {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.userfoto.foto = url;
            this.requisicao.userfoto.push({ ...this.userfoto });
          });
        }
         if (nome == "fotoDestaque") {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.requisicao.fotoDestaque = url;
          });
        }
      }, 3000);
    },
    addUsuario() {
      axios({
        method: "post",
        url: "http://localhost:8090/usuario/newusuario",
        data: this.requisicao,
      })
        .then((response) => {
          console.log(response.data);

          alert("Usuário cadastrado!");
          this.LimpaCampos();
        })
        .catch((error) => alert(error));
    },
    LimpaCampos() {
      document.querySelector("form").reset();
    },
  },
  mounted() {
    this.userfoto = {
      foto: null,
    };
  },
  beforeCreate() {
    axios
      .get(`http://localhost:8090/categoria/allcategoria`)
      .then((response) => {
        this.categorias = response.data;
      })
      .catch(() => {
        alert("Algo deu errado ao carregar as categorias!");
      });
  },
  watch: {},
};
</script>

<style scoped>
.container-fluid {
  align-items: center;
  text-align: center;
  align-self: center;
  padding-top: 120px;
}
.rodape {
  margin-top: 100px;
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
</style>