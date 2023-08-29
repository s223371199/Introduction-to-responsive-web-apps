<template>
    <div>
        This is from projects component!
        <br>
        Title: {{ title }}
        <br>
        Id: {{ id }}
        Description:
        <p> {{ body }}</p>
        <button @click="$emit('increase-size')">Increase Font</button>

        <button> Button without SLOT</button>
        <button><slot></slot></button>
        <footer>
            <slot name="footer">

            </slot>

        </footer>
    </div>

</template>
<script setup>
const props = defineProps({
    title: String,
    id: Number,
    body: String
})
</script>

<style scoped>
</style>