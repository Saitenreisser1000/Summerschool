<template>
  <div v-for="(lesson, id) in lessons" :key="id" @click="setStatus(lesson, true)" :class={isActive:getLesson(lesson).isActive} >{{ getLesson(lesson).lessonname }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props:['lessons'],
    computed: {
    ...mapGetters(['getLesson'])
    },
    methods:{
        ...mapActions(
            ['setStatus']
        ),
    }
}
</script>

<style>
    .isActive{
        color:green;
        background-color: rgb(0, 128, 0,0.3);;
        
    }
</style>