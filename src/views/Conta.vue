<template>
  <div class="conta">
    <div class="menu">
      <Menu />
    </div>
    <div class="container-fluid">
      <div class="container overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 style="text-align: left">Bem vindo, {{ conta.nome }}</h3>
            </div>
            <div class="col-md-6" style="text-align: right">
              <button class="btn btn-success me-md-2 fw-bold">
                Ver perfil
              </button>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-2 mb-3">
              <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="dados-tab"
                    data-toggle="tab"
                    href="#dados"
                    role="tab"
                    aria-controls="dados"
                    aria-selected="true"
                    >Dados</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="categoria-tab"
                    data-toggle="tab"
                    href="#categoria"
                    role="tab"
                    aria-controls="categoria"
                    aria-selected="false"
                    >Categoria</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="descricoes-tab"
                    data-toggle="tab"
                    href="#descricoes"
                    role="tab"
                    aria-controls="descricoes"
                    aria-selected="false"
                    >Descrições</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="redessociais-tab"
                    data-toggle="tab"
                    href="#redessociais"
                    role="tab"
                    aria-controls="redessociais"
                    aria-selected="false"
                    >Redes Sociais</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="fotos-tab"
                    data-toggle="tab"
                    href="#fotos"
                    role="tab"
                    aria-controls="fotos"
                    aria-selected="false"
                    >Fotos</a
                  >
                </li>
              </ul>
            </div>

            <div class="col-md-10">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="dados"
                  role="tabpanel"
                  aria-labelledby="dados-tab"
                >
                  <h4>Dados</h4>
                  <form
                    class="row gy-2 gx-4 align-items-center p-3"
                    style="border: 1px solid #e3e3e3"
                  >
                    <div class="col-md-4 py-2">
                      <label class="form-label">Nome</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nome entidade"
                        v-model="conta.nome"
                        required
                      />
                    </div>
                    <div class="col-md-3 py-2">
                      <label class="form-label">CNPJ</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="22.368.692/0001-68"
                        v-model="conta.cnpj"
                        required
                      />
                    </div>
                    <div class="col-md-3 py-2">
                      <label class="form-label">E-mail</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="nome@example.com"
                        v-model="conta.email"
                        required
                      />
                    </div>
                    <div class="col-md-2 py-2">
                      <label class="form-label">Senha</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Senha login"
                        v-model="conta.senha"
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
                        v-model="conta.cep"
                        required
                      />
                    </div>
                    <div class="col-md-5 py-2">
                      <label class="form-label">Endereço</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="R Engenheiro paul werner"
                        id="logradouro"
                        v-model="conta.rua"
                        required
                      />
                    </div>
                    <div class="col-md-2 py-2">
                      <label class="form-label">Número</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="638"
                        id="numero"
                        v-model="conta.rua"
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
                        v-model="conta.bairro"
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
                        v-model="conta.cidade"
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
                        v-model="conta.estado"
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
                        v-model="conta.complemento"
                      />
                    </div>
                    <div class="col-md-3 py-2">
                      <label class="form-label">Referência</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Prédio San Pietro"
                        id="referencia"
                        v-model="conta.referencia"
                      />
                    </div>
                    <div class="col-md-6 py-2">
                      <label class="form-label">Telefone</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="(47) 3533-4049"
                        id="referencia"
                        v-model="conta.telefone"
                      />
                    </div>
                    <div class="col-md-6 py-2">
                      <label class="form-label">WhatsApp</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="(47) 98901-9578"
                        id="referencia"
                        v-model="conta.whatsapp"
                      />
                    </div>
                    <div class="col-12 py-3">
                      <button
                        @click="alterarDados"
                        class="btn btn-success px-4 me-md-2 fw-bold"
                      >
                        Alterar dados
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="descricoes"
                  role="tabpanel"
                  aria-labelledby="descricoes-tab"
                >
                  <h4>Descrições</h4>
                  <form
                    class="row gy-2 gx-4 align-items-center p-3"
                    style="border: 1px solid #e3e3e3"
                  >
                    <div class="col-12 py-2">
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
                      ></textarea>
                    </div>
                    <div class="col-12 py-2">
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
                      ></textarea>
                    </div>
                    <div class="col-12 py-3">
                      <button
                        @click="alterarDescricao"
                        class="btn btn-success px-4 me-md-2 fw-bold"
                      >
                        Alterar descrições
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="redessociais"
                  role="tabpanel"
                  aria-labelledby="redessociais-tab"
                >
                  <h4>Redes sociais</h4>
                  <form
                    class="row gy-2 gx-4 align-items-center p-3"
                    style="border: 1px solid #e3e3e3"
                  >
                    <div class="col-md-4 py-2">
                      <label class="form-label">Facebook</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://facebook.com/entidade"
                        required
                      />
                    </div>
                    <div class="col-md-4 py-2">
                      <label class="form-label">Instagram</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://instagram.com/entidade"
                        required
                      />
                    </div>
                    <div class="col-md-4 py-2">
                      <label class="form-label">LinkedIn</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://linkedin.com/in/entidade"
                        required
                      />
                    </div>
                    <div class="col-12 py-3">
                      <button
                        @click="alterarDescricao"
                        class="btn btn-success px-4 me-md-2 fw-bold"
                      >
                        Alterar redes sociais
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="fotos"
                  role="tabpanel"
                  aria-labelledby="fotos-tab"
                >
                  <h4>Fotos</h4>
                  <form
                    class="row gy-2 gx-4 align-items-center p-3"
                    style="border: 1px solid #e3e3e3"
                  >
                    <div class="col-md-4 py-2">
                      <label for="formFileLogo" class="form-label"
                        >Logo da entidade</label
                      >
                      <input
                        class="form-control"
                        type="file"
                        id="formFileLogo"
                        required
                      />
                    </div>
                    <div class="col-md-4 py-2">
                      <label for="formFileBanner" class="form-label"
                        >Banner do perfil</label
                      >
                      <input
                        class="form-control"
                        type="file"
                        id="formFileBanner"
                        required
                      />
                    </div>
                    <div class="col-md-4 py-2">
                      <label for="formFileFotos" class="form-label"
                        >Fotos da entidade (Até 08 fotos)</label
                      >
                      <input
                        class="form-control"
                        type="file"
                        id="formFileFotos"
                        multiple
                        required
                      />
                    </div>
                    <div class="col-12 py-3">
                      <button
                        @click="alterarFotos"
                        class="btn btn-success px-4 me-md-2 fw-bold"
                      >
                        Alterar fotos
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="categoria"
                  role="tabpanel"
                  aria-labelledby="categoria-tab"
                >
                  <h4>Categorias</h4>
                  <form
                    class="row gy-2 gx-4 align-items-center p-3"
                    style="border: 1px solid #e3e3e3"
                  >
                    <div class="col-md-12 py-2">
                      <label for="exampleFormControlSelect1"
                        >Categorias de doações</label
                      ><a>⠀</a
                      ><i
                        title="Categorias na qual a entidade precisa de ajuda, 
use a tela CONTROL para selecionar mais de uma."
                        data-toggle="popover"
                        data-trigger="hover focus"
                        class="fa fa-info-circle"
                      ></i>
                      <select
                        v-model="conta.categoria"
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
                    <div class="col-12 py-3">
                      <button
                        @click="alterarCategorias"
                        class="btn btn-success px-4 me-md-2 fw-bold"
                      >
                        Alterar categorias
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
// import MaskedInput from "vue-masked-input";
import axios from "axios";
export default {
  data() {
    return {
      conta: {
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
        categoria: [
          {
            id: "",
            nome: "",
          },
        ],
      },
      idLogado: "",
      categorias: [],
    };
  },
  props: ["idUsuario"],
  components: {
    Menu,
    Rodape,
    // MaskedInput,
  },
  methods: {
    CarregaInfosByUser() {
      if (this.idUsuario != null) {
        axios
          .get(`http://localhost:8090/usuario/${this.idUsuario}`)
          .then(
            function (response) {
              this.conta.nome = response.data.nome;
              this.conta.cnpj = response.data.cnpj;
              this.conta.email = response.data.email;
              this.conta.senha = response.data.senha;
              this.conta.facebook = response.data.facebook;
              this.conta.instagram = response.data.instagram;
              this.conta.whatsapp = response.data.whatsapp;
              this.conta.linkedin = response.data.linkedin;
              this.conta.telefone = response.data.telefone;
              this.conta.cep = response.data.cep;
              this.conta.rua = response.data.rua;
              this.conta.numero = response.data.numero;
              this.conta.bairro = response.data.bairro;
              this.conta.cidade = response.data.cidade;
              this.conta.estado = response.data.estado;
              this.conta.complemento = response.data.complemento;
              this.conta.referencia = response.data.referencia;
              this.conta.banner = response.data.banner;
              this.conta.logo = response.data.logo;
              this.conta.fotoDestaque = response.data.fotoDestaque;
              response.data.userfoto.map((f) =>
                this.conta.userfoto.push({
                  foto: f.foto,
                })
              );
              response.data.categoria.map((cat) =>
                this.conta.categoria.push({
                  id: cat.id,
                  nome: cat.nome,
                })
              );
              this.conta.descricao = response.data.descricao;
              this.conta.pedidodesc = response.data.pedidodesc;
            }.bind(this)
          )
          .catch(function (error) {
            console.log(error.statusText);
          });
      } else {
        alert("Algo deu errado ao carregar suas informações!");
      }
    },

    VerPerfil() {
      this.$router.replace({
        name: "Causa",
        params: {
          causa: this.conta.nome,
        },
      });
    },
    consultaCep: function () {
      if (this.conta.cep.length >= 8) {
        axios
          .get(`https://viacep.com.br/ws/${this.conta.cep}/json/`)
          .then(
            function (response) {
              this.conta.rua = response.data.logradouro;
              this.conta.bairro = response.data.bairro;
              this.conta.cidade = response.data.localidade;
              this.conta.estado = response.data.uf;
              this.conta.complemento = response.data.complemento;
            }.bind(this)
          )
          .catch(function (error) {
            console.log(error.statusText);
          });
      }
    },

  },
  mounted() {
    this.CarregaInfosByUser();
  },
  // beforeCreate() {
  //   axios
  //     .get(`http://localhost:8090/categoria/allcategoria`)
  //     .then((response) => {
  //       this.categorias = response.data;
  //     })
  //     .catch(() => {
  //       alert("Algo deu errado ao carregar as categorias!");
  //     });
  // },
};
</script>

<style scoped>
a.active.nav-link {
  background-color: #4faa17 !important;
}
a {
  color: black;
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