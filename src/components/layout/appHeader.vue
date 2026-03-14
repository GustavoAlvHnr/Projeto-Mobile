<script setup>
defineProps({
    title: {
        type: String,
        default: 'Controle de Gastos'
    },
    showBack: Boolean
});
</script>
<template>
     <header>
        <button v-if="showBack" @click="$emit('back')" class="btn-back">←</button>
        <h1>{{ title }}</h1>
        <div class="spacer"></div>
     </header>
</template>
<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #ffaffb;
    border-radius: 0 0 28px 28px;
    color: white;
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 100;
    & h1{
        font-size: 18px;
        font-weight: bold;
        flex: 1;
    }
}
.spacer{
    width: 40px;
}
.btn-back{
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    margin-right: 8px;
}


</style>