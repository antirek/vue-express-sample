<template>
  <div>
    profile
    <div v-if="profile">
      <h2>{{ profile.title }}</h2>
      <input v-model="profile.title" placeholder="title" />
      <input v-model="profile.body" placeholder="body" />
      <input type="button" value="send" @click="sendProfile()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data: function() {
    return {
      profile: null,
      profileUrl: this.$appUrl + "user/"
    };
  },
  watch: {
    $route: "getProfile"
  },
  created: function() {
    this.getProfile();
  },
  methods: {
    getProfile: function() {
      this.$http.get(this.profileUrl + this.$route.params.userId).then(res => {
        console.log("res", res.body);
        this.profile = res.body;
      });
    },
    sendProfile: function() {
      this.$http
        .post(this.profileUrl + this.$route.params.userId, this.profile)
        .then(res => {
          console.log("OK", res);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
