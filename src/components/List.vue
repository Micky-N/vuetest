<template>
    <div style="padding: 10px 0;">
        <component :is="label ? 'fieldset' : 'div'">
            <legend v-if="label">{{ label }}</legend>
            <div
                v-for="component in components"
                :key="component.key"
                :style="{ 'padding-left': `${z * 10}px` }"
            >
                <component
                    :is="getComponent(component.type)"
                    v-if="component.type !== 'list'"
                    :key-id="component.key"
                    v-bind="component"
                />
                <List
                    v-else
                    :z="z + 1"
                    :label="component.label"
                    :components="component.components"
                />
            </div>
        </component>
    </div>
</template>

<script lang="ts" setup>
import { AddDataS, DataS, type DataT } from '@/types/types';
import { defineAsyncComponent, inject, onMounted } from 'vue';

const props = withDefaults(defineProps<{
    components: {type: string, [x: string]: any; key: keyof DataT}[];
    label?: string;
    z?: number
}>(), {
    z: 0
})

const addDataEdited = inject(AddDataS);


const data = inject(DataS);

const upperFirst = (val: string) => String(val).charAt(0).toUpperCase() + String(val).slice(1);

const getComponent = (type: string) => {
    return defineAsyncComponent(() => import(`@/components/json/${upperFirst(type)}.vue`));
}

onMounted(() => {
    if (addDataEdited && data) {
        for(const component of props.components) {
            addDataEdited(component.key, data[component.key])
        }
    }
})
</script>

<style></style>