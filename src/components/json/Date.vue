<template>
    <div>
        <FormDate
            v-if="hasData"
            v-model="data[keyId].value"
            :key-id="keyId"
            :required="required"
            :disabled="disabled"
            :label="label"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import FormDate from '../MainDate.vue';
import { DataS, type DataT } from '@/types/types';

const props = withDefaults(defineProps<{
    keyId: keyof DataT;
    required?: boolean;
    disabled?: boolean;
    label: string;
}>(), {
    required: true,
    disabled: false
});

const data = inject(DataS) as Record<keyof DataT, {[key: string]: any, value?: any}>;

const hasData = computed(() => data && props.keyId in data && 'value' in data[props.keyId])

</script>

<style></style>