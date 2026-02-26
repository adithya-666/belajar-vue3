<script setup>
import Products from '../data/products.json';
import { RouterLink } from 'vue-router';
</script>

<template>
    <h1 >Home</h1>
        <div class="product">
            <RouterLink v-for="product in Products"
            :key="product.id"
            :to="`/product/${product.id}/owner`"
             > {{ product.name }}</RouterLink> 
        </div>
</template>

<style scoped>
.product{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>