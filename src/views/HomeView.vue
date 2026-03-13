
<template>
    <div class="app">
<AppHeader />

        <div class="layout">
            <div class="panel1">
                <RouterLink to="/Despesa-View" class="BotaoDespesa">Nova despesa</RouterLink>
                
            </div>

            <div class="panel2">
                <h2>Lista do dia</h2>
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
                        <tr v-for="item in filtered" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.category }}</td>
                            <td>{{ item.value }}</td>
                            <td>
                                <button class="small-btn2" @click="removeExpense(item.id)">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="summary">
                    Total do dia: {{ total }}
                </div>
            </div>
        </div>
    </div>
    <AppFooter :filtro-atual="filter" @update-filter="filter = $event" />
</template>

<script setup>
import AppFooter from '../components/layout/appFooter.vue';
import { computed } from 'vue';
import AppHeader from '../components/layout/appHeader.vue';
import { useExpenses } from '../composables/useExpenses.js';


const { expenses, filter, filtered, totalSpent, deleteExpense } = useExpenses();

const total = totalSpent;

function removeExpense(id) {
    deleteExpense(id);
}
</script>
<style>
@import '../assets/css/global.css';


.panel1 {
    text-align: center;
}

.BotaoDespesa {
    display: inline-block;    
    margin: 16px 0;             
    padding: 18px 26px;
    background: #ff91fa;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
}
.small-btn2 {
    margin: 2px 5px;
    padding: 8px 12px;
    background: red;
    color: white;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
}

</style>