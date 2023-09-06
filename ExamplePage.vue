<script setup>
import { ref } from 'vue'

const itemId = ref(0)
const shoppingitem = ref('')
const shoppinglist = ref([])
const shopped = ref(false)

function addItem() {
  shoppinglist.value.push({
    id: itemId.value++,
    item: shoppingitem.value,
    status: shopped.value
  })
  shoppingitem.value = ''
}

function removeItem(id) {
  shoppinglist.value = shoppinglist.value.filter(item => item.id !== id)
}
</script>

<template>
  <div class="myDiv">
    <h1>My Homework list</h1>
    <input type="text" v-model="shoppingitem">
    <button @click="addItem">Add Item</button>

    <ol>
      <li v-for="(item, index) in shoppinglist" :key="item.id">
        <input type="checkbox" v-model="item.status">
        <span :class="{ done: item.status }">{{ item.item }}</span>
        <button @click="removeItem(item.id)">X</button>
      </li>
    </ol>

    <h1 v-if="shoppinglist.length < 1">No items</h1>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
.myDiv {
  border: 5px outset lightgrey;
  background-color: aqua;
  text-align: center;
  padding: 60px;
}
</style>

