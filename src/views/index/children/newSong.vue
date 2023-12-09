<template>
  <Card :title="resource.uiElement.subTitle.title"> </Card>
</template>

<script>
import Card from './card.vue';
export default {
    components: { Card },
    props: {
        resource: {
        type: Object,
        required: true,
        },
    },
    created() {},
}
</script>

<style scoped>
   .card {
    height: 100px;
    background-color: red;
   }
</style>