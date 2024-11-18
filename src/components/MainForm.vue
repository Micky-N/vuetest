<script setup lang="ts">
import { computed, provide, reactive, ref } from 'vue';
import List from '@/components/List.vue';
import { AddDataS, DataS } from '@/types/types';
import { FormValidationS } from '@/types/main/FormValidationSymbol';
import type { JsonT } from '@/types/types';

const props = defineProps<{
    json: JsonT
}>();
const components = reactive<any>(props.json.form.components as unknown as any);
const isSubmitted = ref(false);
const validation = reactive<Record<string, boolean>>({});
const data = reactive(props.json.data)
const isValid = (key: string, isValid: boolean) => {
    validation[key] = isValid
}

const dataToEdit = ref<Record<string, any>>({});

const hasOneErrorAtLeast = computed(() => {
    const values = Object.values(validation);
    if (!values.length) return false;
    return values.some(v => v === false);
})

const addDataEdited = (key: string, value: any) => {
    dataToEdit.value[key] = value
}

provide(DataS, data);
provide(AddDataS, addDataEdited);
provide(FormValidationS, isValid);
</script>

<template>
    <div style="display: flex; justify-content: space-around;">
        <div>
            <List :components="components" />
            <button
                :disabled="hasOneErrorAtLeast"
                @click="isSubmitted = !isSubmitted"
            >
                Submit
            </button>
        </div>
        <pre v-if="!hasOneErrorAtLeast && isSubmitted">{{ dataToEdit }}</pre>
    </div>
</template>

<style scoped>
.form-container {
    margin: 2rem 0;
}
</style>