<template>
  <div class="container">
    <footer
      class="
        d-flex
        flex-wrap
        justify-content-between
        align-items-center
        py-3
        my-4
        border-top
      "
    >
      <p class="col-md-4 mb-0 text-muted">
        DoeMais Projetos e Ações Sociais <br> CNPJ 24.713.983/0002-53 &copy; 2021
      </p>

      <a
        href="/"
        class="
          col-md-4
          d-flex
          align-items-center
          justify-content-center
          mb-3 mb-md-0
          me-md-auto
          link-dark
          text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32" alt="logo">
          <use xlink:href="#bootstrap" />
        </svg>
      </a>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a class="nav-link px-2 text-muted"
            ><router-link to="/" style="text-decoration: none; color: gray">
              Home
            </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 text-muted"
            ><router-link
              :to="{ name: 'Nossas Causas', params: { categoria: 'todas' } }"
              style="text-decoration: none; color: gray"
            >
              Nossas Causas
            </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 text-muted"
            ><router-link
              to="/about"
              style="text-decoration: none; color: gray"
            >
              Quem Somos
            </router-link></a
          >
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Rodape",
};
</script>
