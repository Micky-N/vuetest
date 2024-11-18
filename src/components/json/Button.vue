<script setup lang="ts">
import MainButton from '../MainButton.vue';
import type { DataT } from '@/types/types';

withDefaults(defineProps<{
    keyId: keyof DataT;
    disabled?: boolean;
    label: string;
}>(), {
    type: 'submit',
    disabled: false
});

</script>
<template>
    <MainButton
        :key-id="keyId"
        :label="label"
        type="submit"
        :disabled="disabled"
    />
</template>

<style scoped></style>