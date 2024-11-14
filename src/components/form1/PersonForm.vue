<template>
    <div>
        <small>Id</small>
        <div class="person-part">
            <FormInput label="Name" id="name" v-model="person.name" />
            <FormInput label="Age" type="number" id="age" v-model="person.age" />
            <FormSelect label="Gender" id="gender" v-model="person.gender" :options="genders" />
        </div>
        <small>Address</small>
        <div class="person-part">
            <FormInput label="Street" id="street" v-model="person.address.street" />
            <FormInput label="City" id="city" v-model="person.address.city" />
            <FormInput label="State" id="state" v-model="person.address.state" />
            <FormInput label="Zip" id="zip" v-model="person.address.zip" />
        </div>
        <small><span @click="countContact--">--</span> Contact <span @click="countContact++">++</span></small>
        <div class="person-part">
            <div v-for="idx in countContact" :key="idx">
            <FormInput label="Type" id="type" v-model="person.phones[idx - 1].type" />
            <FormInput label="Number" id="number" v-model="person.phones[idx - 1].number" />
        </div>
        <FormInput label="Email" id="email" type="email" v-model="person.email" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IPerson } from '@/types/main/IPerson';
import FormInput from '@/components/FormInput.vue'
import FormSelect from '../FormSelect.vue';
import type { OptionItem } from '@/types/main/Form';
import { ref, watch } from 'vue';

const person = defineModel<IPerson>({
    default: {
        name: '',
        age: 0,
        gender: 'male',
        address: {
            street: "",
            city: "",
            state: "",
            zip: ""
        },
        phones: [
            {
                type: "",
                number: ""
            },
            {
                type: "",
                number: ""
            }
        ],
        email: ""
    }
});
const countContact = ref(person.value.phones.length);

const genders: OptionItem[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
]

watch(countContact, () => {
    if (!person.value.phones[countContact.value - 1]) {
        person.value.phones[countContact.value - 1] = {
            type: '',
            number: ''
        }
    }
})
</script>

<style scoped>
.person-part {
    margin: 1rem 0;
}
</style>