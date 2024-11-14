<template>
    <div>
        <FormInput :required="required" :disabled="disabled" label="Date" :id="id" type="datetime" v-model="model" />
    </div>
</template>

<script lang="ts" setup>
import FormInput from './FormInput.vue'

withDefaults(defineProps<{
    id: string;
    required?: boolean;
    disabled?: boolean;
}>(), {
    required: true,
    disabled: false
});

const model = defineModel();
</script>

<style></style>