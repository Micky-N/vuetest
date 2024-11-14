<script setup lang="ts">
import PersonForm from '@/components/form2/PersonForm.vue';
import { reactive, ref } from 'vue';
import form_2 from '@/json/json2.json';
import FormDate from '@/components/FormDate.vue';
import FormInput from '@/components/FormInput.vue';
import FormButton from '@/components/FormButton.vue';
import type { IPerson } from '@/types/form_2/IPerson';

const john_doe = reactive<IPerson>(form_2.data.john_doe);
const project_1 = ref(form_2.data.project_1.name);
const input_1 = ref(form_2.data.input_1.value);
const date_1 = ref(form_2.data.date_1.value);
const isSubmitted = ref(false);

const getComponent = (key: (keyof typeof form_2.data) | 'button_1') => {
    return form_2.form.components.find(c => c.key == key)!;
}
</script>

<template>
    <form @submit.prevent="isSubmitted = !isSubmitted">
        <div class="form-container">
            <FormInput id="project" v-model="project_1" label="Project" />
            <FormInput :id="getComponent('input_1').key" v-model="input_1" :label="getComponent('input_1').label" />
            <FormDate :label="getComponent('date_1').label" :id="getComponent('date_1').key" v-model="date_1" />
        </div>
        <PersonForm v-model="john_doe" />
        <FormButton>
            {{ getComponent('button_1').label }}
        </FormButton>
    </form>
    <div>
        <pre v-if="isSubmitted">{{ project_1 }}</pre>
        <pre v-if="isSubmitted">{{ input_1 }}</pre>
        <pre v-if="isSubmitted">{{ date_1 }}</pre>
        <pre v-if="isSubmitted">{{ john_doe }}</pre>
    </div>
</template>

<style scoped>
.form-container {
    margin: 2rem 0;
}
</style>