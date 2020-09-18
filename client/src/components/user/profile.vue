<template>
  <div>
    profile
    <div v-if="profile">
      <h2>{{ profile.title }}</h2>
      <p>{{ profile.body }}</p>
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
        this.profile = res.body;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
