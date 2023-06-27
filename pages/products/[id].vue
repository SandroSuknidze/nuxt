<template>
    <div>
        <Head>
            <Title>Nuxt San | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <productDetails :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    const { data: product } = await useFetch(uri);

    if(!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>