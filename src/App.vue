<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue Router</a>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">
              <i class="bi bi-house-dash-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">
              <i class="bi bi-person"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">
              <i class="bi bi-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>
<script>
</script>