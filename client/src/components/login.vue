
<template>
  <div>
      <h1>Sign in</h1>
      <h3 v-if="$store.error">{{message}}</h3>
      <label>Username</label>
      <input 
        required 
        v-model="username" 
        type="text" 
        placeholder="Your username" 
      />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <input type="button" value="Login" v-on:click="login()"/>  
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: "",
        password: "",
        message: "Error auth, try again"
      };
    },
    created: function() {
      this.checkLogged();
    },
    methods: {
      checkLogged: function(){
        if (this.$store.getters.isAuthenticated) {
          console.log('logged already');
          this.$router.push('/');
        }
      },
      login: function() {
        const { username, password } = this;
        this.$store.dispatch('AUTH_REQUEST', { username, password })
          .then(() => {
            this.$router.push("/");
          }).catch(err =>{
            this.message = "Not auth, try again";
            console.log(err);
          })
        }
    }
  };
</script>