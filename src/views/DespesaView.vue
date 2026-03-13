<template>
  
  <AppHeader />
  

  <div class="layout">
    <div class="panel">
      <h2>Nova despesa</h2>
      <input v-model="title" class="input" placeholder="Descricao" />
      <input v-model="value" class="input" placeholder="Valor" />
      <input v-model="category" class="input" placeholder="Categoria" />
      <div class="row">
        <button class="small-btn" @click="addExpenseHandler">Add</button>
        <router-link to="/" class="small-btn">Voltar</router-link>
        <button class="small-btn" @click="clearAll">Limpar tudo</button>
      </div>
    </div>

    <div class="panel">
      <h2>Lista de despesas</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Descricao</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in expenses" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.value }}</td>
            <td>
              <button class="small-btn2" @click="deleteExpense(item.id)">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useExpenses } from '../composables/useExpenses.js';
import AppHeader from '@/components/layout/appHeader.vue';

const { addExpense, clearAll, deleteExpense, expenses } = useExpenses();

const title = ref('');
const value = ref('');
const category = ref('');

function addExpenseHandler() {
  if (!title.value.trim() || !value.value.trim()) {
    alert('Preencha tudo');
    return;
  }

  addExpense({
    title: title.value,
    value: value.value,
    category: category.value || 'other',
  });

  title.value = '';
  value.value = '';
  category.value = '';
}
</script>

<style>
@import '../assets/css/global.css';

.input {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 8px 12px;
    background: white;
    color: #ff91fa;
    border: 1px solid #ff91fa;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom: 2vh;
}

.small-btn {
    margin: 2px 5px;
    padding: 13px 21px;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    height: 48px;
    vertical-align: top;
}

.row{
    margin-top: 5vh;
}
</style>