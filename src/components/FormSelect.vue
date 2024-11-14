<template>
    <div>
        <label v-if="label" :for="id">{{ label }}</label>
        <select :id="id" v-model="model">
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup>
import type { OptionItem } from '@/types/main/Form';
withDefaults(defineProps<{
    label?: string | null
    id: string;
    options: OptionItem[];
}>(), {
    label: null
});

const model = defineModel();
</script>

<style></style>