<template>
    <div>
        <FormInput
            v-model="model"
            :label="label"
            :key-id="keyId"
            :required="required"
            :disabled="disabled"
            type="date"
        />
    </div>
</template>

<script lang="ts" setup>
import FormInput from './MainInput.vue'

withDefaults(defineProps<{
    keyId: string;
    required?: boolean;
    disabled?: boolean;
    label?: string;
}>(), {
    required: true,
    disabled: false
});

const model = defineModel();

</script>

<style></style>