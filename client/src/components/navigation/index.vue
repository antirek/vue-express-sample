/** * Created by vouill on 11/13/17. */

<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <router-link class="navbar-brand" to="/">
      <img src="../../assets/logo.png" width="40px" /><strong
        >DOGEBOOK</strong
      >
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/items" class="nav-link"><span>Catalog</span></router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item" v-if="isProfileLoaded">
          <router-link to="/account" class="nav-link">{{ name }}</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated" @click="logout">
          <span class="nav-link">Logout</span>
        </li>
        <li class="nav-item" v-if="!isAuthenticated && !authLoading">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
    </div>   
  </nav>
</template>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}
.navigation {
  display: flex;
  color: white;
  align-items: center;
  background-color: #ffa035;
  padding: 5px;

  ul {
    display: flex;
    &:first-child {
      flex-grow: 1;
    }
    li {
      padding-right: 1em;
    }
  }
}
.brand {
  display: flex;
  align-items: center;
}
.logout {
  &:hover {
    cursor: pointer;
  }
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "actions/auth";

export default {
  name: "navigation",
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push("/login");
        });
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  }
};
</script>
