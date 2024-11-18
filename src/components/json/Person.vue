<template>
    <div>
        <FieldWrapper :label="label">
            <small>Id</small>
            <div class="person-part">
                <FormInput
                    v-model="person.name"
                    :key-id="keyId"
                    label="Name"
                />
                <FormInput
                    v-model="person.age"
                    :key-id="keyId"
                    label="Age"
                    type="number"
                />
                <FormSelect
                    v-model="person.gender"
                    :key-id="keyId"
                    label="Gender"
                    :options="genders"
                />
            </div>
            <small>Address</small>
            <div class="person-part">
                <FormInput
                    v-model="person.address.street"
                    :key-id="keyId"
                    label="Street"
                />
                <FormInput
                    v-model="person.address.city"
                    :key-id="keyId"
                    label="City"
                />
                <FormInput
                    v-model="person.address.state"
                    :key-id="keyId"
                    label="State"
                />
                <FormInput
                    v-model="person.address.zip"
                    :key-id="keyId"
                    label="Zip"
                />
            </div>
            <template v-if="'notes' in person">
                <small>
                    <button @click="countNotes--">--</button> Notes <button @click="countNotes++">++</button>
                </small>
                <div class="person-part">
                    <div
                        v-for="noteIdx in countArray(countNotes)"
                        :key="noteIdx"
                    >
                        <FormSelect
                            v-model="person.notes![noteIdx]"
                            :options="{items: noteOptions}"
                        />
                    </div>
                </div>
            </template>
            <template v-if="'projects' in person">
                <small>
                    <button @click="countProjects--">--</button> Projects <button @click="countProjects++">++</button>
                </small>
                <div class="person-part">
                    <div
                        v-for="projectIdx in countArray(countProjects)"
                        :key="projectIdx"
                    >
                        <FormSelect
                            v-model="person.projects![projectIdx]"
                            :options="{items: projectOptions}"
                        />
                    </div>
                </div>
            </template>
            <small>
                <button @click="countPhones--">--</button> Contact <button @click="countPhones++">++</button>
            </small>
            <div class="person-part">
                <div
                    v-for="idx in countArray(countPhones)"
                    :key="idx"
                >
                    <FormInput
                        v-model="person.phones[idx].type"
                        :key-id="keyId"
                        label="Type"
                    />
                    <FormInput
                        v-model="person.phones[idx].number"
                        :key-id="keyId"
                        label="Number"
                    />
                </div>
            </div>
            <div class="person-part">
                <FormInput
                    v-model="person.email"
                    :key-id="keyId"
                    label="Email"
                    type="email"
                />
            </div>
        </FieldWrapper>
    </div>
</template>

<script lang="ts" setup>
import type { IPerson } from '@/types/main/IPerson';
import type { OptionItem } from '@/types/main/Form';
import { computed, inject, onMounted, ref, watch } from 'vue';
import FormInput from '../MainInput.vue';
import FormSelect from '../MainSelect.vue';
import { AddDataS, DataS, type DataT } from '@/types/types';
import FieldWrapper from '../FieldWrapper.vue';

const props = defineProps<{
    keyId: keyof DataT;
    label?: string
}>();
const data = inject(DataS) as Record<keyof DataT, {[key: string]: any}>;

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
const countPhones = ref(0);
const countProjects = ref(0);
const countNotes = ref(0);

const genders: { items: OptionItem[] } = {
    items: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ]
}

const hasData = computed(() => data && props.keyId in data);

const countArray = (count: number) => [...Array(count).keys()];

const projectOptions = computed<OptionItem[]>(() => Object.keys(data!).filter(k => k.startsWith('project_') && 'name' in data![k as keyof DataT]).map((k) => ({
    value: k,
    label: data![k as keyof DataT].name
})));

const noteOptions = computed<OptionItem[]>(() => Object.keys(data!).filter(k => k.startsWith('note_') && 'value' in data![k as keyof DataT]).map((k) => ({
    value: k,
    label: data![k as keyof DataT].value
})));

const addDataEdited = inject(AddDataS);

watch(countProjects, () => {
    if (!person.value.projects) return;
    if (countProjects.value < 0 || !person.value.projects.length) countProjects.value = 0;
    person.value.projects = countArray(countProjects.value).map(k => person.value.projects![k] || projectOptions.value[0].value);
})

watch(countPhones, () => {
    if (!person.value.phones) return;
    if (countPhones.value < 0 || !person.value.phones.length) countPhones.value = 0;
    person.value.phones = countArray(countPhones.value).map(k => person.value.phones![k] || {
        type: '',
        number: ''
    });
})

watch(countNotes, () => {
    if (!person.value.notes) return;
    if (countNotes.value < 0 || !person.value.notes.length) countNotes.value = 0;
    person.value.notes = countArray(countNotes.value).map(k => person.value.notes![k] || noteOptions.value[0].value);
})

onMounted(() => {
    if (data && hasData.value) {
        person.value = data[props.keyId] as IPerson;
        countPhones.value = person.value.phones?.length || 0;
        countProjects.value = person.value.projects?.length || 0;
        countNotes.value = person.value.notes?.length || 0;
    }
    if (addDataEdited) {
        addDataEdited(props.keyId, person.value)
    }
})

</script>

<style scoped>
.person-part {
    margin: 1rem 0;
}
</style>