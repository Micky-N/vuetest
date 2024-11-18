<template>
    <div>
        <FormInput
            v-if="hasData"
            v-model="data![keyId].value"
            :key-id="keyId"
            :required="required"
            :disabled="disabled"
            :validation="validation"
            :type="type"
            :label="label"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed, inject, type InputHTMLAttributes } from 'vue';
import FormInput from '../MainInput.vue';
import { DataS, type DataT } from '@/types/types';
const props = defineProps<{
    keyId: keyof DataT;
    type?: InputHTMLAttributes['type'];
    label?: string;
    required?: boolean;
    disabled?: boolean;
    validation?: string;
}>();

const data = inject(DataS) as Record<keyof DataT, {[key: string]: any, value?: any}>;

const hasData = computed(() => data && props.keyId in data && 'value' in data[props.keyId])

</script>

<style></style>