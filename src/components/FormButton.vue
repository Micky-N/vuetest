<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

withDefaults(defineProps<{
    type?: ButtonHTMLAttributes['type'];
    disabled?: boolean;
}>(), {
    type: 'submit',
    disabled: false
});

defineSlots<{
    default(): void;
}>();

</script>
<template>
    <button :type="type" :disabled="disabled">
        <slot />
    </button>
</template>

<style scoped></style>