<script setup>
import { ref, computed, onMounted } from 'vue';
import { useExpenses } from '../composables/useExpenses.js';
import appHeader from '@/components/layout/appHeader.vue';
import appInput from '@/components/forms/appInput.vue';
import appButton from '@/components/forms/appButton.vue';
import expenseCard from '@/components/cards/expenseCard.vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { addExpense, clearAll, expenses } = useExpenses();

const title = ref('');
const value = ref('');
const category = ref('');

const isEditMode = computed(() => route.params.id !== 'new');

onMounted(() => {
  if (isEditMode.value) {
    console.log("ID da Rota:", route.params.id);
    console.log("Lista de Despesas:", expenses.value);
    const expense = expenses.value.find(e => String(e.id) === String(route.params.id));
    if (expense) {
      title.value = expense.title;
      value.value = expense.value;
      category.value = expense.category;
    } else {
      alert('Despesa não encontrada');
      router.back();
    }
  }
});


function handleSave() {
  if (!title.value.trim() || !value.value.trim()) {
    alert('Preencha tudo');
    return;
  }

  const expenseData = {
    title: title.value,
    value: value.value,
    category: category.value || 'other',
  };

  if (isEditMode.value) {
    // Aqui você deve chamar a função de update passando o ID da rota
    updateExpense(route.params.id, expenseData); 
    router.push('/'); // Volta para a home ou lista
  } else {
    addExpense(expenseData);
  }

  // Limpa os campos
  title.value = '';
  value.value = '';
  category.value = '';
}
const vazio = computed(() => expenses.value.length === 0);
</script>
<template>
  <appHeader :title="isEditMode ? 'Editar Despesa' : 'Adicionar Despesa'" 
  show-back=true 
  @back="router.back()
  "/>
  <div class="layout">
    <div class="vazio" v-if="vazio">
      <p>Nenhuma despesa cadastrada.</p>
    </div>
    <div class="panel" v-else>
      <h2>Lista de despesas</h2>
      <RouterLink
            v-for="expense in expenses"
            :key="expense.id"
            :to="`/Despesa-view/${expense.id}`"
            class="expense-link"
            >
            <expenseCard
            :title="expense.title"
            :category="expense.category"
            :value="expense.value"
            />
            </RouterLink>
    </div>
    <div class="panel">
      <h2>Nova despesa</h2>
      <appInput v-model="title" class="input" placeholder="Descrição" />
      <appInput v-model="value" class="input" placeholder="Valor" />
      <appInput v-model="category" class="input" placeholder="Categoria" />
      <div class="row">
        <appButton class="small-btn" @click="handleSave">Add</appButton>
        <appButton class="small-btn" @click="clearAll">Limpar tudo</appButton>
      </div>
    </div>
  </div>
</template>
<style>
@import '../assets/css/global.css';
.layout{
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 56px 0;
}

.panel h2{
  padding: 5px 5px 10px;
}

.vazio p{
  text-align: center;
  color: #555;
  padding: 20px;
}

a{
  text-decoration: none;
  color: inherit;
}

</style>