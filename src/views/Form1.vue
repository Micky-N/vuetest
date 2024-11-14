<script setup lang="ts">
import PersonForm from '@/components/form1/PersonForm.vue';
import type { IPerson } from '@/types/main/IPerson';
import { reactive, ref } from 'vue';
import form_1 from '@/json/json1.json';
import FormDate from '@/components/FormDate.vue';
import FormInput from '@/components/FormInput.vue';
import FormSelect from '@/components/FormSelect.vue';
import FormButton from '@/components/FormButton.vue';

const john_doe = reactive<IPerson>(form_1.data.john_doe);
const input_1 = ref(form_1.data.input_1.value);
const date_1 = ref(form_1.data.date_1.value);
const select_1 = ref(form_1.data.select_1.value);
const isSubmitted = ref(false);

const getComponent = (key: (keyof typeof form_1.data) | 'button_1') => {
    return form_1.form.components.find(c => c.key == key)!;
}
</script>

<template>
    <form @submit.prevent="isSubmitted = !isSubmitted">
        <div class="form-container">
            <FormInput :id="getComponent('input_1').key" v-model="input_1" :label="getComponent('input_1').label" />
            <FormDate :label="getComponent('date_1').label" :id="getComponent('date_1').key" v-model="date_1" />
            <FormSelect :id="getComponent('select_1').key" :label="getComponent('select_1').label"
                :options="getComponent('select_1').options!.items" v-model="select_1" />
        </div>
        <PersonForm v-model="john_doe" />
        <FormButton>
            {{ getComponent('button_1').label }}
        </FormButton>
    </form>
    <div>
        <pre v-if="isSubmitted">{{ input_1 }}</pre>
        <pre v-if="isSubmitted">{{ date_1 }}</pre>
        <pre v-if="isSubmitted">{{ select_1 }}</pre>
        <pre v-if="isSubmitted">{{ john_doe }}</pre>
    </div>
</template>

<style scoped>
.form-container {
    margin: 2rem 0;
}
</style>