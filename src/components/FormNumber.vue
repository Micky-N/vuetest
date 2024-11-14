<template>
    <div>
        <label v-if="label" :for="id">
            {{ label }}
        </label>
        <input :required="required" :disabled="disabled" :id="id" type="number" v-model="model">
    </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    id: string;
    label?: string | null;
    required?: boolean;
    disabled?: boolean;
}>(), {
    label: null,
    disabled: false,
    required: true
});

const model = defineModel();
</script>

<style></style>