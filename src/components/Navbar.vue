<template>
<nav class="navbar navbar-expand-md navbar-dark bg-navy fixed-top py-3">
  <div class="container">
    <h1 class="navbar-brand mb-0">
        <router-link to="/" class="logo nav-text">
            <i class="fas fa-map-pin"></i>
        </router-link>
    </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-0">
                <li class="nav-item">
                <router-link to="/" class="h5 mb-0 nav-link nav-text pe-md-2">關於高雄</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/home" class="h5 mb-0 nav-link nav-text">景點介紹</router-link>
                </li>
            </ul>
        </div>
  </div>
</nav>
</template>
