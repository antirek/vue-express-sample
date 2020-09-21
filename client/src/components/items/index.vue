<template>
  <div>
    <div v-if="items">
      <h3>Items List</h3>
      <ul>
        <li v-for="(item, index) in items" :key="item.title">
          <router-link :to="{ path: '/items/' + item._id }">
            {{ index }} - {{ item.title }}
          </router-link>
        </li>
      </ul>
      <br/>
      <a href="#" v-on:click="show">show</a>
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
    alert: function () {
      console.log('dbdb')
    },
    show: function () {
      console.log(this.$listeners);
    },
    getList: function () {
      api.get('/items').then(res => {
        this.items = res.data;
      })
    }
  },
}
</script>