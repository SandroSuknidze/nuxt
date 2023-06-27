<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" v-bind:key="p.id">
                <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products",
    });

    const { data: products } = await useFetch("https://fakestoreapi.com/products");

    useHead({
        title: 'Nuxt San | Merch',
        meta: [
            { name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })


</script>

<style scoped></style>