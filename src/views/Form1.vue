<script setup lang="ts">
import MainForm from '@/components/MainForm.vue';
import json from '@/json/1.json';
</script>

<template>
    <MainForm :json="json" />
</template>