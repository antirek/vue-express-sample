<template>
  <div>home
    {{ $route.params.id}}
    <ul>
      <li>
        <router-link :to="{path:'/items/' + $route.params.id + '/profile'}">view </router-link> | 
        <router-link :to="{path:'/items/' + $route.params.id + '/edit'}">edit </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
