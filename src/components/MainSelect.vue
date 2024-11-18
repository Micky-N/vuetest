<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select v-model="model">
            <option
                v-for="option in options.items"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup>
import type { OptionItem } from '@/types/main/Form';
withDefaults(defineProps<{
    label?: string | null
    options: { items: OptionItem[] };
}>(), {
    label: null
});
const model = defineModel();
</script>

<style></style>