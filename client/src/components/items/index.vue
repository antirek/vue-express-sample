<template>
  <div class="row">
    <div v-if="items" class="col col-md-4">
      <h3>Items List</h3>
      <router-link :to="{path:'/items/new'}"> add </router-link>
      <ul v-if="items">
        <li v-for="(item, index) in items" :key="item.title">
          <router-link :to="{ path: '/items/' + item._id }">
            {{ index }} - {{ item.title }}
          </router-link>
        </li>
      </ul>
      <br/>
      
    </div>
    <router-view class="col col-md-8"/>
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