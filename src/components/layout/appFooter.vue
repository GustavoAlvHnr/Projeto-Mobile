<script>
</script>

<template>
     <div class="app-footer">
                <button class="small-btn" @click="filter = 'all'">Tudo</button>
                <button class="small-btn" @click="filter = 'food'">Comida</button>
                <button class="small-btn" @click="filter = 'transport'">Transporte</button>
                <button class="small-btn" @click="filter = 'other'">Outros</button>
            </div>
</template>
<style scoped>


.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #ff91fa;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}
</style>