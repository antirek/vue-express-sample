<template>
  <div class="user">
    <h2>User {{ $route.params.userId }}</h2>
    <ul>
      <li>
        <router-link
          :to="{ name: 'userHome', params: { id: $route.params.userId } }"
          >home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'userProfile', params: { id: $route.params.userId } }"
          >profile</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'userEdit', params: { id: $route.params.userId } }"
          >edit</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>
