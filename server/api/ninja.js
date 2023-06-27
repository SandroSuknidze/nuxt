export default defineEventHandler(async (event) => {
    
    // const { name } = getQuery(event)

    // const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=1Xrf6XqffPTiDa8M12x0xwyobaybR5BNMrgKPUjW')

    // return {
    //     message: `Hello, ${name}! You are ${age} years old`
    // }

    return data
})