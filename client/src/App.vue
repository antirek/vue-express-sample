<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login" v-if="!isAuthenticated">Login</router-link> |
      <a href="#" @click="logout" v-if="isAuthenticated">Logout</a> |

      <router-link to="/user/vasya">Go to Vasya</router-link> |
      <router-link to="/user/sergey">Go to Sergey</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "App", 
    created: function() {
      console.log('app created')
    if (!this.$store.getters.isAuthenticated) {
      //this.$store.dispatch('AUTH_LOGIN');
      this.$router.push('/login');
    }
  },
  methods: {
    logout: function() {
      console.log('logout');
      this.$store.dispatch('AUTH_LOGOUT')
        .then(() => {
          this.$router.push("/login");
          //this.$router.replace("/login")
        }).catch(err=>{console.log(err)});
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  }
};
</script>
