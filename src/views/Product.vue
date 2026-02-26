<script setup>
import { useRoute, RouterView } from 'vue-router';
import Products from '../data/products.json'

const route = useRoute();
console.log(route.params.id);

const Product = Products.find((Product) => Product.id === parseInt(route.params.id));
</script>
<template>
    <h1> Product</h1>
    <h2>{{ Product.name }} - {{ Product.price }}</h2>
    <p>Year : {{ Product.year }}</p>
   <RouterView />
</template>