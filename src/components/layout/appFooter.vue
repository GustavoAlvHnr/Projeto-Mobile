<script setup>
defineProps({
    filtroAtual: {
        type: String,
        default: 'all'
    }
});

defineEmits(['update-filter']);
</script>

<template>
     <div class="app-footer">
                <button class="small-btn" :class="{ active: filtroAtual === 'all' }" @click="$emit('update-filter', 'all')">Tudo</button>
                <button class="small-btn" :class="{ active: filtroAtual === 'food' }" @click="$emit('update-filter', 'food')">Comida</button>
                <button class="small-btn" :class="{ active: filtroAtual === 'transport' }" @click="$emit('update-filter', 'transport')">Transporte</button>
                <button class="small-btn" :class="{ active: filtroAtual === 'other' }" @click="$emit('update-filter', 'other')">Outros</button>
            </div>
</template>
<style scoped>


.app-footer {
  

  height: 56px;
  background: #ff91fa;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  
  margin-top: 12vh;
  position: fixed;
  top: 40vh;
}

.small-btn {
    margin: 0 8px;
    padding: 8px 16px;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
}

.small-btn.active {
    background: white;
    color: #ff91fa;
}


</style>

