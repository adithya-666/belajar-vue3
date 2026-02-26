<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div>
        <RouterLink active-class="active" to="/" >Home</RouterLink>
        <RouterLink active-class="active" to="/about" >About</RouterLink>
    </div>
</template>

<style scoped>
div{
    display: flex;
    gap : 20px;
}

.active{
    font-weight: 900;
    color: white;
    background-color: red;
    padding: 2px 10px;
    text-decoration: none;
}
</style>