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
                <button class="small-btn" :class="{ active: props.filtroAtual === 'Tudo' }" @click="$emit('update-filter', 'Tudo')">Tudo</button>
                <button class="small-btn" :class="{ active: props.filtroAtual === 'Comida' }" @click="$emit('update-filter', 'Comida')">Comida</button>
                <button class="small-btn" :class="{ active: props.filtroAtual === 'Transporte' }" @click="$emit('update-filter', 'Transporte')">Transporte</button>
                <button class="small-btn" :class="{ active: props.filtroAtual === 'Outros' }" @click="$emit('update-filter', 'Outros')">Outros</button>
    </div>
</template>
<style scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffaffb;
  color: white;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 28px 28px 0 0;
}
.small-btn {
    flex: 0 0 auto;
    margin: 2px;
    padding: 10px 16px;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 28px;
    cursor: pointer;
    white-space: nowrap;
}
.small-btn.active {
    background: white;
    color: #ff91fa;
}
</style>

