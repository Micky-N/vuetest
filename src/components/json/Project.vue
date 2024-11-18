<template>
    <div v-if="hasData">
        <FieldWrapper :label="label">
            <div>
                <FormInput
                    v-model="name"
                    :key-id="keyId"
                    label="Name"
                    type="text"
                />
            </div>
            <div v-if="tasks">
                <small>
                    <button @click="countTasks--">--</button> Tasks <button @click="countTasks++">++</button>
                </small>
                <FormSelect
                    v-for="taskIdx in countTasksArray"
                    :key="taskIdx"
                    v-model="tasks[taskIdx]"
                    :options="{items: tasksOptions}"
                />
            </div>
        </FieldWrapper>
    </div>
</template>

<script lang="ts" setup>
import { DataS, type DataT } from '@/types/types';
import FormInput from '../MainInput.vue';
import { computed, inject, ref, toRefs, watch } from 'vue';
import FormSelect from '../MainSelect.vue';
import type { OptionItem } from '@/types/main/Form';
import FieldWrapper from '../FieldWrapper.vue';

type Project = { name: string; tasks?: string[] }
const props = defineProps<{
    keyId: keyof DataT;
    label?: string;
}>();

const data = inject(DataS) as Record<keyof DataT, {name?: string; tasks?: string[]; value?: any}>;

const tasksOptions = computed<OptionItem[]>(() => Object.keys(data).filter(k => k.startsWith('task_') && 'name' in data[k as keyof DataT]).map((k) => ({
    value: k,
    label: data[k as keyof DataT].name!
})));

const hasData = computed(() => data && props.keyId in data && 'name' in data[props.keyId])

const { name, tasks } = toRefs(data[props.keyId] as Project);

const countTasks = ref(tasks?.value?.length || 0);

const countTasksArray = computed(() => [...Array(countTasks.value).keys()])

watch(countTasks, () => {
    if (!tasks?.value) return;
    if (countTasks.value < 0 || !tasksOptions.value.length) countTasks.value = 0;
    tasks.value = countTasksArray.value.map(k => tasks.value![k] || tasksOptions.value[0].value);
})

</script>

<style>

</style>