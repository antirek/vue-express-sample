<template>
  <div>
    <h3>Items List</h3>
    <ul>
      <li v-for="(item, index) in items" :key="item.title">
        <router-link :to="{ path: '/items/detail/' + item.id }">
          {{ index }} - {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'itemsList',
  data: () => {
    return {
      items: [
        {
          id: 'titl1',
          title: 'Title 1',
        },
        {
          id: 'id0',
          title: 'Title 2',
        },
        {
          id: 'qw',
          title: 'Title 3',
        },
      ]
    }
  }
}
</script>