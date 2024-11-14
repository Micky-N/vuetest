<template>
    <div>
        <label v-if="label" :for="id">
            {{ label }}
        </label>
        <input :required="required" :disabled="disabled" :id="id" :type="type" v-model="model">
    </div>
</template>

<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';

withDefaults(defineProps<{
    id: string;
    type?: InputHTMLAttributes['type'];
    label?: string | null;
    required?: boolean;
    disabled?: boolean;
}>(), {
    type: 'text',
    label: null,
    disabled: false,
    required: true
});

const model = defineModel();
</script>

<style></style>