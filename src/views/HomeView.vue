<template>
  <div class="app">
    <appHeader title="Controle de Gastos"/>
    <div class="layout">
      <div class="vazio" v-if="vazio">
        <p>Nenhuma despesa cadastrada.</p>
      </div>
      <div class="panel2" v-else>
        <h2>Lista de despesas</h2>
            <RouterLink
            v-for="expense in filtered"
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
        <div class="summary">Total: R${{ total }}</div>
      </div>
    </div>
    <div class="panel1">
      <appButton @click="$router.push('/Despesa-view/new/edit')">Adicionar despesa</appButton>
      <appButton @click="clearAll">Limpar tudo</appButton>
    </div>
  </div>
  <appFooter :filtro-atual="filter" @update-filter="filter = $event" />
</template>

<script setup>
import appFooter from '../components/layout/appFooter.vue'
import { computed } from 'vue'
import appHeader from '../components/layout/appHeader.vue'
import { useExpenses } from '../composables/useExpenses.js'
import appButton from '@/components/forms/appButton.vue'
import expenseCard from '@/components/cards/expenseCard.vue'
import { RouterLink } from 'vue-router'

const { expenses, filter, filtered, totalSpent, clearAll } = useExpenses()

const total = totalSpent

const vazio = computed(() => expenses.value.length === 0)
</script>
<style>
@import '../assets/css/global.css';

.layout{
    display: flex;
    flex-direction: column;
    margin: 56px 0;
}

.panel1 {
  text-align: center;
  position: sticky;
}

.panel2 {
  overflow-y: auto;
}

a{
  text-decoration: none;
  color: inherit;
}

.vazio p{
  text-align: center;
  color: #555;
  padding: 20px;
}

.summary{
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: #ffaffb;
    border-radius: 28px;
}
</style>
