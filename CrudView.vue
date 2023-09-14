<template>
  <div class="myDiv">
    <div class="form-group">
   
      <h3> Add friends personal details to contact them and collaborate</h3>
      <input v-model="prefix" placeholder="Filter prefix">
      <select size="5" v-model="selected">
        <option v-for="name in filteredNames" :key="name">{{ name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label>Name:</label>
      <input v-model="first">
      <label>Email:</label>
      <input v-model="last">
    </div>
    <div class="buttons">
      <button @click="create">Create</button>
      <button @click="update">Update</button>
      <button @click="del">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Peter, Samothrakitis'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<style scoped>
.myDiv {
  border: 5px outset lightgrey;
  background-color: red;
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  color: #333;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.form-group label {
  margin-right: 50px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.buttons button {
  margin: 0 10px;
}
</style>
