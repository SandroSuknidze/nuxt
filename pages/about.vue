<template>
    <div>
        <h2>About</h2>
        <p>vaaa ra xdebaa</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: { age:30 }
    // })

    const { data } = await useFetch('/api/currency/GEL')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>