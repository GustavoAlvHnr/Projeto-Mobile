<script setup>
const props = defineProps({
    filtroAtual: {
        type: String,
        default: 'all'
    }
});

defineEmits(['update-filter']);
</script>

<template>
     <div class="app-footer" :style="{ top: props.topOffset }">
                <button class="small-btn" :class="{ active: props.filtroAtual === 'all' }" @click="$emit('update-filter', 'all')">Tudo</button>
                <button class="small-btn" :class="{ active: props.filtroAtual === 'food' }" @click="$emit('update-filter', 'food')">Comida</button>
                <button class="small-btn" :class="{ active: props.filtroAtual === 'transport' }" @click="$emit('update-filter', 'transport')">Transporte</button>
                <button class="small-btn" :class="{ active: props.filtroAtual === 'other' }" @click="$emit('update-filter', 'other')">Outros</button>
            </div>
</template>
<style scoped>


.app-footer {
  background: #ff91fa;
  color: white;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center;
  padding: 8px 36px; 
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  margin-top: 12vh;
  
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
}

.small-btn.active {
    background: white;
    color: #ff91fa;
}


</style>

