<template>
  <div class="modal-login">
    <button
      type="button"
      class="btn btn-success px-3 me-md-2"
      @click="toggleModal"
    >
      Login
    </button>
    <div
      ref="modal"
      class="modal fade"
      :class="{ show, 'd-block': active }"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login - Entidade</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              aria-hidden="true"
              @click="toggleModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="login-form">
              <div class="form-group">
                <h5 style="color: #125c13">Ainda não tem cadastro?</h5>
                <a><router-link to="/cadastre-se">Cadastre-se</router-link></a>
              </div>
              <h3>Insira seus dados</h3>
              <br />
              <form v-if="contaLogin" @submit.prevent="VerificaLogin">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="informe seu e-mail"
                    v-model="contaLogin.email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="informe sua senha"
                    v-model="contaLogin.senha"
                  />
                </div>
                <div class="form-group">
                  <input class="btn btn-primary" type="submit" @click="scrollToTop()" value="Login" />
                </div>
                <div class="form-group">
                  <a
                    ><router-link to="/recuperar-senha" style="color: gray"
                      >Esqueceu a senha?</router-link
                    ></a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "Login",
      active: false,
      show: false,
      contaLogin: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    toggleModal() {
      const body = document.querySelector("body");
      this.active = !this.active;
      this.active
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");
      setTimeout(() => (this.show = !this.show), 10);
    },
    VerificaLogin() {
      axios
        .get(
          `http://localhost:8090/usuario/login?email=${this.contaLogin.email}&senha=${this.contaLogin.senha}`
        )
        .then(
          function (response) {
            if (response.data.id != null) {
              // this.$router.push('/conta')
              this.$router.push({
                name: "Conta",
                params: {
                  idUsuario: response.data.id
                },
              });

            } else {
              alert("Verifique seu e-mail ou senha!");
              console.log("foi nao");
            }
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error.statusText);
        });
    },
    scrollToTop() {
            window.scrollTo(0, 0);
        },
  },
};
</script>

<style scoped>
.login-form {
  padding: 5%;
  text-align: center;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form h3 {
  color: #333;
}
.login-form .ForgetPwd {
  color: #0062cc;
  font-weight: 600;
  text-decoration: none;
}
.btn-success:hover {
  background-color: #4a941cdc;
  color: #fff;
  border: 3px solid rgb(72, 145, 27);
}
</style>

