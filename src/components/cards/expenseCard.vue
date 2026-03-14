<script setup>
defineProps({
    title: String,
    value: String,
    category: String
});
</script>
<template>
    <div class="expenseCard">
        <div class="expenseInfo">
            <h3 class="title">{{ title }}</h3>
            <p class="category">{{ category }}</p>
        </div>
        <div class="expenseValue">
            <p class="value">R${{ value }}</p>
        </div>
    </div>
</template>
<style scoped>
    .expenseCard{
        background: #ffaffb;
        border-radius: 28px;
        padding: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        cursor: pointer;
        margin: 5px 0;
        width: 100%;
    }
    .title{
        font-size: 18px;
        font-weight: bold;
        color: white;
    }
    .category{
        font-size: 14px;
        color: white;
    }
    .expenseValue{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 600;
        color: white;
    }
</style>