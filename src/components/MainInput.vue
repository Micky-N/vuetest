<template>
    <div>
        <label v-if="label">
            {{ label }}
        </label>
        <input
            v-model="model"
            :required="required"
            :disabled="disabled"
            :type="type"
        >
    </div>
</template>

<script lang="ts" setup>
import { FormValidationS } from '@/types/main/FormValidationSymbol';
import { inject, watch, type InputHTMLAttributes } from 'vue';

const props = withDefaults(defineProps<{
    keyId: string;
    type?: InputHTMLAttributes['type'];
    label?: string | null;
    required?: boolean;
    disabled?: boolean;
    validation?: string;
}>(), {
    type: 'text',
    label: null,
    disabled: false,
    required: false
});

const isValid = inject(FormValidationS);

const model = defineModel();

const validateEmail = () => !!String(model.value)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const isEmpty = () => model.value === '';

watch(model, () => {
    if (isValid) {
        if (props.required) isValid(props.keyId, !isEmpty())
        if (props.validation == 'email') isValid(props.keyId, validateEmail());
    }
}, {immediate: true})
</script>

<style></style>