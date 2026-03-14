import { ref,computed } from "vue";

//Estado compartilhado
const expenses = ref([]);

const filter = ref('Tudo');

//Nome da chave para armazenamento local
const STORAGE_KEY = 'expenses';

function loadExpenses(){
    const stored = localStorage.getItem(STORAGE_KEY);
    if(stored){
        expenses.value = JSON.parse(stored);
    }
};

function saveExpenses(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses.value));
};

//Carregar despesas ao iniciar
loadExpenses();

export function useExpenses(){
    const totalExpenses = computed(() => expenses.value.length);
    const totalSpent = computed(() => {
        return expenses.value.reduce((sum, item) => sum + Number(item.value || 0), 0);
    });

    function addExpense(expense){
        const newExpense = {
            id: Date.now(),
            ...expense,
            createdAt: new Date().toISOString()
        };
        expenses.value.unshift(newExpense);
        saveExpenses();
    };

    function getExpense(id){
        return expenses.value.find((e) => e.id === parseInt(id));
    };

    function updateExpense(id, updates){
        const index = expenses.value.findIndex((e) => e.id === parseInt(id));
        if(index !== -1){
            expenses.value[index] = {
                ...expenses.value[index],
                ...updates,
                updatedAt: new Date().toISOString()
            };
            saveExpenses();
            return expenses.value[index];
            }
        return null;
    };

    function deleteExpense(id){
        expenses.value = expenses.value.filter((e) => e.id !== parseInt(id));
        saveExpenses();
    };

    function clearAll(){
        if(!confirm('Tem certeza?')){
            return;
        }
        expenses.value = []
        saveExpenses();
    }

    const filtered = computed(() => {
        if(filter.value === 'Tudo'){
            return expenses.value;
        }
        return expenses.value.filter((e) => e.category === filter.value);
    });


    return{
        //estado
        expenses,
        filter,

        //computed
        totalExpenses,
        totalSpent,

        //funções
        addExpense,
        getExpense,
        updateExpense,
        deleteExpense,
        filtered,
        clearAll
    }

}
