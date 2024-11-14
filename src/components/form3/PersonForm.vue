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
        <small><span @click="countNotes--">--</span> Notes <span @click="countNotes++">++</span></small>
        <div class="person-part">
            <div v-for="idx in countNotes" :key="idx">
                <FormInput label="Type" id="type" v-model="person.notes[idx - 1]" />
            </div>
        </div>
        <small><span @click="countProjects--">--</span> Projects <span @click="countProjects++">++</span></small>
        <div class="person-part">
            <div v-for="idx in countProjects" :key="idx">
                <FormInput label="Type" id="type" v-model="person.projects[idx - 1]" />
            </div>
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
import type { IPerson } from '@/types/form_3/IPerson';
import type { OptionItem } from '@/types/main/Form';
import { ref, watch } from 'vue';
import FormInput from '../FormInput.vue';
import FormSelect from '../FormSelect.vue';

const person = defineModel<IPerson>({
    default: {
        name: '',
        projects: [],
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
const countProjects = ref(person.value.projects.length);
const countNotes = ref(person.value.notes.length);

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

watch(countProjects, () => {
    if (!person.value.projects[countProjects.value - 1]) {
        person.value.projects[countProjects.value - 1] = ''
    }
})

watch(countNotes, () => {
    if (!person.value.notes[countNotes.value - 1]) {
        person.value.notes[countNotes.value - 1] = ''
    }
})
</script>

<style scoped>
.person-part {
    margin: 1rem 0;
}
</style>