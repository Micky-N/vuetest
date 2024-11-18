<template>
    <div>
        <label v-if="label">
            {{ label }}
        </label>
        <input
            v-model="model"
            :required="required"
            :disabled="disabled"
            type="email"
        >
    </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    keyId: string;
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