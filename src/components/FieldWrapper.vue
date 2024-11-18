<script setup lang="ts">
defineProps<{
    label?: string;
}>();

defineSlots<{
    default(): void;
}>();

</script>
<template>
    <fieldset>
        <legend v-if="label">{{ label }}</legend>
        <slot />
    </fieldset>
</template>

<style scoped></style>