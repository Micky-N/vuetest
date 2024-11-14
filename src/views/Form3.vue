<script setup lang="ts">
import PersonForm from '@/components/form3/PersonForm.vue';
import { reactive, ref } from 'vue';
import form_2 from '@/json/json3.json';
import FormButton from '@/components/FormButton.vue';
import type { IPerson } from '@/types/form_3/IPerson';

const john_doe = reactive<IPerson>(form_2.data.john_doe);
const isSubmitted = ref(false);

const getComponent = (key: (keyof typeof form_2.data) | 'button_1') => {
    return form_2.form.components.find(c => c.key == key)!;
}
</script>

<template>
    <form @submit.prevent="isSubmitted = !isSubmitted">
        <PersonForm v-model="john_doe" />
        <FormButton>
            {{ getComponent('button_1').label }}
        </FormButton>
    </form>
    <div>
        <pre v-if="isSubmitted">{{ john_doe }}</pre>
    </div>
</template>

<style scoped>
.form-container {
    margin: 2rem 0;
}
</style>