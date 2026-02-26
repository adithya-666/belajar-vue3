<script setup>
import { useRoute } from 'vue-router';
import Products from '../data/products.json'

const route = useRoute();
const { owner } = Products.find((Product) => Product.id === parseInt(route.params.id));
</script>

<template>
    <div v-if="owner">
             <h1> Owner</h1>
            <h2>{{ owner.name }}</h2>
            <p>Email : {{ owner.email }}</p>
    </div>
    <div v-else>
        <h1>Owner Not Found</h1>
        <p>Sorry, the owner information for this product is not available.</p>
    </div>
</template>