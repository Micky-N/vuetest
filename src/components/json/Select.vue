<template>
    <div>
        <FormSelect
            v-if="hasData"
            v-model="data![keyId].value"
            :key-id="keyId"
            :options="options"
            :label="label"
        />
    </div>
</template>

<script lang="ts" setup>
import type { OptionItem } from '@/types/main/Form';
import { computed, inject } from 'vue';
import FormSelect from '../MainSelect.vue';
import { DataS, type DataT } from '@/types/types';
const props = defineProps<{
    keyId: keyof DataT;
    label?: string
    options: { items: OptionItem[] };
}>();

const data = inject(DataS) as Record<keyof DataT, {[key: string]: any, value?: any}>;

const hasData = computed(() => data && props.keyId in data && 'value' in data[props.keyId])
</script>

<style></style>