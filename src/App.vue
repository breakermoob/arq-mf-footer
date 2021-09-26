<template>
  <div id="app">
    <footer class="bg-dark text-light text-center text-md-left">
      <div class="container">
        <div class="row pt-4">
          <div class="col-sm-6 col-md-3 pb-4">
            <h4 class="mb-4">Services</h4>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light">Web design</a>
              </li>
              <li>
                <a href="#" class="text-light">Development</a>
              </li>
              <li>
                <a href="#" class="text-light">Hosting</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 pb-4">
            <h4 class="mb-4">About</h4>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light">Company</a>
              </li>
              <li>
                <a href="#" class="text-light">Team</a>
              </li>
              <li>
                <a href="#" class="text-light">Careers</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 pb-4">
            <h4 class="mb-4">Web development tools</h4>
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://www.phpcrudgenerator.com/tutorials/how-to-create-a-bootstrap-crud-admin-dashboard"
                  class="text-light"
                  >How to create a Bootstrap Admin Dashboard in PHP</a
                >
              </li>
              <li>
                <a
                  href="https://www.phpformbuilder.pro/drag-n-drop-form-builder/index.html"
                  class="text-light"
                  >Drag &amp; drop form builder</a
                >
              </li>
              <li>
                <a
                  href="https://www.tinymce-bootstrap-plugin.com/"
                  class="text-light"
                  >Bootstrap plugin for TinyMce</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <a
            href="https://github.com/breakermoob"
            target="_blank"
            class="d-block px-3"
          >
            <i class="fab fa-github fa-2x arq-mf-icon"></i
          ></a>
          <a
            href="https://www.instagram.com/leo_argam/"
            target="_blank"
            class="d-block px-3"
          >
            <i class="fab fa-instagram fa-2x arq-mf-icon"></i
          ></a>
          <a class="d-block px-3">
            <i class="fab fa-vuejs fa-5x arq-mf-icon--center"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/breakermoob/"
            target="_blank"
            class="d-block px-3"
          >
            <i class="fab fa-linkedin fa-2x arq-mf-icon"></i
          ></a>
          <a
            href="https://speakerdeck.com/breakermoob/"
            target="_blank"
            class="d-block px-3"
          >
            <i class="fab fa-speaker-deck fa-2x arq-mf-icon"></i
          ></a>
        </div>
        <p
          class="
            text-center text-secondary
            border-top border-secondary
            py-4
            mb-0
          "
        >
          Arquitectura Microfrontends por Leon Arango © 2021
        </p>
      </div>
    </footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style>
.arq-mf-icon {
  color: #4b5055;
}
.arq-mf-icon--center {
  color: #42b883;
}
.arq-mf-icon:hover {
  color: #6a7179;
}
</style>
