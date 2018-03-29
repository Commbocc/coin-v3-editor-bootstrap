<template lang="html">
  <div class="">
    <h1>Bootstrap Demo</h1>

    <h2 class="mt-5">Utilities</h2>

    <div class="mx-auto text-center border border-dark w-50 p-2 mb-3" style="">
      <p>centered inline element, border, 50% width, padding, margin-bottom</p>
      <code>mx-auto text-center border border-dark w-50 p-2 mb-3</code>
    </div>

    <div class="bg-info text-white p-3">
      <code class="">bg-info text-white p-3</code>
    </div>

    <h2 class="mt-5">Grid</h2>

    <div class="row mb-3">
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-6 mb-3">
        <div class="p-2 border border-dark h-100">
          Hey
        </div>
      </div>
      <div class="col-6 mb-3">
        <div class="p-2 border border-dark h-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="col-6 mb-3">
        <div class="p-2 border border-dark h-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>

    <h2 class="mt-5">Buttons</h2>

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>

    <h2 class="mt-5">Cards</h2>

    <div class="card mb-3">
      <strong class="card-header bg-primary text-white">
        Featured
      </strong>
      <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="card w-50">
      <img class="card-img-top" src="http://placehold.it/400x200&text=1" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <h2 class="mt-5">Alerts</h2>

    <div class="alert alert-primary" role="alert">
      This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-secondary" role="alert">
      This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-success" role="alert">
      This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-danger" role="alert">
      This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-warning" role="alert">
      This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-info" role="alert">
      This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-light" role="alert">
      This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-dark" role="alert">
      This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>

  </div>
</template>

<script>
export default {
}
</script>
