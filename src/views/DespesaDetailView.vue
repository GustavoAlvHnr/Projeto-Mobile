<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import appHeader from '@/components/layout/appHeader.vue';
import appButton from '@/components/forms/appButton.vue';
import { useExpenses } from '../composables/useExpenses.js';

const router = useRouter();
const route = useRoute();
const { getExpense, deleteExpense } = useExpenses();

const expense = ref(null);

onMounted(() => {
  expense.value = getExpense(route.params.id);
  if (!expense.value) {
    alert('Despesa não encontrada');
    router.back();
  }
});

function deleteExpenseHandler() {
  if (confirm('Tem certeza que deseja excluir esta despesa?')) {
    deleteExpense(expense.value.id);
    router.back();
  }
}

function editExpenseHandler() {
  router.push(`/Despesa-view/${expense.value.id}/edit`);
}
</script>
<template>
<div v-if="expense">
    <appHeader :title="expense.title" show-back @back="router.back()"/>
    <div class="page">
        <div class="card">
        <h2 class="title">{{ expense.title }}</h2>
        <p class="value">Valor: R$ {{ expense.value }}</p>
        <p class="category">Categoria: {{ expense.category }}</p>
        </div>
        <div class="buttons">
        <appButton variant="secondary" @click="editExpenseHandler">Editar</appButton>
        <appButton variant="danger" @click="deleteExpenseHandler">Excluir</appButton>
        </div>
    </div>
</div>
</template>
<style scoped>
@import  '../assets/css/global.css';
.card{
    background: #ffaffb;
    border-radius: 28px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    margin: 16px;
    color: white;
}

.buttons{
    display: flex;
    justify-content: space-around;
    margin: 16px;
}
.title{
    color: white;
}
.value{
    color: white;
}
.category{
    color: white;
}
</style>