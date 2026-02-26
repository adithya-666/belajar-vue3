<script setup>
import { useRoute } from 'vue-router';
import Products from '../data/products.json'

const route = useRoute();
const { owner } = Products.find((Product) => Product.id === parseInt(route.params.id));
</script>

<template>
    <h1> Owner</h1>
    <h2>{{ owner.name }}</h2>
    <p>Email : {{ owner.email }}</p>
</template>