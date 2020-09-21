<template>
  <div>
    profile
    <div v-if="profile">
      <h2>{{ profile.title }}</h2>
      <p>{{ profile.data }}</p>
      <router-link :to="{ path: '/items/' + profile._id  + '/edit'}">edit</router-link>
    </div>
  </div>
</template>

<script>

import api from 'utils/api';

export default {
  name: "UserProfile",
  data: function() {
    return {
      profile: null,
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
      api.get('/items/' + this.$route.params.id).then(res=>{
        this.profile = res.data;
      })
    }
  }
};
</script>
