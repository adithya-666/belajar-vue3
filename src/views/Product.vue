<script setup>
import { useRoute, useRouter ,RouterView } from 'vue-router';
import Products from '../data/products.json'

const route = useRoute();
const router = useRouter();
const ProductId = parseInt(route.params.id);

const Product = Products.find((Product) => Product.id === ProductId);

function showOwner() {
    router.push({
        name: 'owner',
        params: { id: ProductId}
    });
    
}
</script>
<template>
    <div v-if="Product">
            <h1> Product</h1>
            <h2>{{ Product.name }} - {{ Product.price }}</h2>
            <p>Year : {{ Product.year }}</p>
            <button @click="showOwner" >Show Owner</button>
            <RouterView />
    </div>
    <div v-else>
        <h1>Product Not Found</h1>
        <p>Sorry, the product you are looking for does not exist.</p>
    </div>
</template>