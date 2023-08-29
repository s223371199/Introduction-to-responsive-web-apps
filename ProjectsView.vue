<template>
    <div :style= "{fontSize: postFontSize + 'em'}">

This is projects page!
<div>
<ol> 
<li v-for="post in posts">{{ post.title }}</li>
</ol>
</div>

<ProjectsComponent
    v-for="post in posts"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :body="post.body"

    @increase-size="increaseSize"
    >

    import datafile from '../data/file.json'
    const datalist = ref(datafile.projects)
{{ post.id }}
<template #footer>
This is name SLOT
</template>
 

</ProjectsComponent>
</div>

</template>
<script setup>
import {ref, onMounted } from 'vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'


const posts = ref ([])
const fetchposts = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()

        posts.value = data
    }
    catch (error)
    {
        console.error("Error fetching data..", error)
    }
}
onMounted(fetchposts)
const postFontSize = ref(1)
function increaseSize(){
postFontSize.value += 1
}
</script>

<style scoped>
div{
    width: 100%;
    height: 100%;
    border-style: solid;
    padding: 10px;
}
</style>