<script setup lang="ts">
withDefaults(defineProps<{
    keyId: string;
    disabled?: boolean;
    label: string;
}>(), {
    disabled: false
});

</script>
<template>
    <button
        type="submit"
        :disabled="disabled"
    >
        {{ label }}
    </button>
</template>

<style scoped></style>