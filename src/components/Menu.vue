<template>
  <nav class="navbar navbar-expand-lg navbar-dark scrolling-navbar fixed-top">
    <a class="navbar-brand" href="#">
      <router-link class="navbar-brand" to="/#">
        <img
          src="../assets/logo.png"
          class="d-inline-block align-top"
          alt="logo_DOEMAIS"
        />
      </router-link>
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#basicExampleNav"
      aria-controls="basicExampleNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse justify-content-end"
      id="basicExampleNav"
    >
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <a
            ><router-link class="nav-link" to="/"
              >Home
              <span class="sr-only">(current)</span>
            </router-link></a
          >
        </li>
        <li class="nav-item dropdown">
          <router-link
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            :to="{ name: 'Nossas Causas', params: { categoria: 'todas' } }"
          >
            Nossas Causas</router-link
          >
          <div
            class="dropdown-menu dropdown-primary"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <router-link v-for="cat in categorias"
              :key="cat.id"
              class="dropdown-item"
              :to="{ name: 'Nossas Causas', params: { categoria: cat.nome } }"
              >{{cat.nome.toUpperCase()}}</router-link
            >
          </div>
        </li>
        <li class="nav-item">
          <a
            ><router-link class="nav-link" to="/about"
              >Quem Somos</router-link
            ></a
          >
          <!-- <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Login</a> -->
        </li>
        <li class="nav-item ml-auto">
          <Login />
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
import Login from "@/components/Login.vue";
import axios from "axios";
export default {
  data() {
    return {
      name: "Menu",
      categorias: [],
    };
  },
  components: {
    Login,
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
  },
  mounted() {
    this.ListaCategorias();
  },
};
</script>


<style scoped>
.navbar-nav .nav-item .nav-link {
  color: white;
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item:hover .nav-link {
  color: #76ce40;
}

.dropdown:hover > .dropdown-menu {
  display: block;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.459);
  align-items: center;
}
.scrolling-navbar {
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.top-nav-collapse {
  background-color: #3e7c17;
}
footer.page-footer {
  background-color: #3e7c17;
}

@media only screen and (max-width: 768px) {
  .navbar {
    background-color: #3e7c17;
  }
  .ml-auto {
    margin-left: inherit !important;
  }
}
</style>
