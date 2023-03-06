<template>
  <v-table class="table">
    <thead>
        <tr>
            <th scope="col">Stunde</th>
            <th scope="col">Montag</th>
            <th scope="col">Dienstag</th>
            <th scope="col">Mittwoch</th>
            <th scope="col">Donnerstag</th>
            <th scope="col">Freitag</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">7:45 - 9:30</th>          
            <td><div class="my-btn-toggle"><v-btn-toggle :vertical="true" v-model="this.monday"><v-btn v-for="(lesson, id) in mon" :key="id" :value=id>{{ getLesson(lesson).lessonname }}</v-btn></v-btn-toggle></div></td>
            <!--td><v-list><v-list-item v-for="(lesson, id) in tue" :key="id" :value=id @click="getSelected(lesson)" >{{ getLesson(lesson).lessonname }}</v-list-item></v-list></td>
            <td><v-list><v-list-item v-for="(lesson, id) in wed" :key="id" :value=id @click="getSelected(lesson)" >{{ getLesson(lesson).lessonname }}</v-list-item></v-list></td>
            <td><v-list><v-list-item v-for="(lesson, id) in thu" :key="id" :value=id @click="getSelected(lesson)" >{{ getLesson(lesson).lessonname }}</v-list-item></v-list></td>
            <td><v-list><v-list-item v-for="(lesson, id) in fri" :key="id" :value=id @click="getSelected(lesson)" >{{ getLesson(lesson).lessonname }}</v-list-item></v-list></td-->
                                               
        </tr>
        <tr>
            <th scope="row">9:45 - 11:30</th>
                <td><v-list-item>{{getLesson(5).lessonname}}</v-list-item><v-list-item>{{getLesson(6).lessonname}}</v-list-item><v-list-item>{{getLesson(7).lessonname}}</v-list-item><v-list-item>{{getLesson(8).lessonname}}</v-list-item></td>
                <td><v-list-item>{{getLesson(5).lessonname}}</v-list-item><v-list-item>{{getLesson(6).lessonname}}</v-list-item><v-list-item>{{getLesson(10).lessonname}}</v-list-item><v-list-item>{{getLesson(8).lessonname}}</v-list-item></td>
                <td><v-list-item>{{getLesson(14).lessonname}}</v-list-item><v-list-item>{{getLesson(15).lessonname}}</v-list-item><v-list-item>{{getLesson(16).lessonname}}</v-list-item><v-list-item>{{getLesson(17).lessonname}}</v-list-item></td>
                <td><v-list-item>{{getLesson(19).lessonname}}</v-list-item><v-list-item>{{getLesson(14).lessonname}}</v-list-item><v-list-item>{{getLesson(12).lessonname}}</v-list-item><v-list-item>{{getLesson(15).lessonname}}</v-list-item></td>
                <td><v-list-item>{{getLesson(19).lessonname}}</v-list-item><v-list-item>{{getLesson(13).lessonname}}</v-list-item><v-list-item>{{getLesson(10).lessonname}}</v-list-item><v-list-item>{{getLesson(17).lessonname}}</v-list-item></td>
        </tr>
    </tbody>
  </v-table>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    data() {    
        return{
            mon:[1,2,3,4],
            tue:[9,2,1,4],
            wed:[9,11,12,13],
            thu:[11,18,16,20,],
            fri:[18,3,20,17],
            selected:[,,0,],
            isActive:false,
            monday:1,
            tuesday:null,
            wednesday:null,
            thursday:null,
            friday:null
        }
    },
    computed: {
    ...mapGetters(['getLesson', 'getLessons'])
    },
    methods:{
        ...mapActions(
            ['setStatus']
        ),
        getSelected(sel){
            console.log(sel)
        }
    },
    created(){

    }
}
</script>

<style>
    .my-btn-toggle {
    display: flex !important;
    flex-direction: column !important;
}
</style>