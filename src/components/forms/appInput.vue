<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: [String, Number],
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
    required: Boolean
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
});

</script>
<template>
<div class="app-input">
    <label v-if="label" class="label">
        {{ label }}
        <span v-if="required">*</span>
    </label>
    <input 
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    class="input"
    >
</div>
</template>
<style scoped>
.app-input{
    margin-bottom: 16px;
}

.label{
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: bold;
    color: #111;
}

.required{
    color: red;
}

input{
    width: 100%;
    min-height: 48px;
    padding: 10px;
    font-size: 16px;
    border: 4px solid #ffaffb;
    border-radius: 28px;
    background: white;
    color: #111;
    transition: border-color 0.3s;
    transition: color 0.3s;
}

.input:focus{
    border-color: #ffaffb;
    outline: none;
    color: #c000b6;
}
</style>
