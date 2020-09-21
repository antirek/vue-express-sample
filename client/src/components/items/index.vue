<template>
  <div>
    <div v-if="items">
      <h3>Items List</h3>
      <router-link :to="{path:'/items/new'}"> add </router-link>
      <ul>
        <li v-for="(item, index) in items" :key="item.title">
          <router-link :to="{ path: '/items/' + item._id }">
            {{ index }} - {{ item.title }}
          </router-link>
        </li>
      </ul>
      <br/>
      <router-view />
    </div>
  </div>
</template>

<script>
import api from 'utils/api';

export default {
  name: 'itemsList',
  data: () => {
    return {
      items: null
    }
  },
  created: function () {
    this.$bus.on('updatelist', this.getList);
    this.getList();
  },
  methods: {
    getList: function () {
      api.get('/items').then(res => {
        this.items = res.data;
      })
    }
  },
}
</script>