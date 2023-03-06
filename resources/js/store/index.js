import { createStore } from "vuex"

export default createStore({
    state: {
        lessons: [
            {lessonid:1, lessonname:"Biologie (nähen)", active:false},
            {lessonid:2, lessonname:"Filzen", active:false},
            {lessonid:3, lessonname:"bewegtes Leben", active:false},
            {lessonid:4, lessonname:"Chor", active:false},
            {lessonid:5, lessonname:"Spanisch", active:false},
            {lessonid:6, lessonname:"Keramik", active:false},
            {lessonid:7, lessonname:"Schach", active:false},
            {lessonid:8, lessonname:"Percussion", active:false},
            {lessonid:9, lessonname:"Foto/Cyanotypie", active:false},
            {lessonid:10, lessonname:"Gesang", active:false},
            {lessonid:11, lessonname:"Tontechnik", active:false},
            {lessonid:12, lessonname:"Italienisch", active:false},
            {lessonid:13, lessonname:"Biologie", active:false},
            {lessonid:14, lessonname:"Philosophie", active:false},
            {lessonid:15, lessonname:"Spieleprogrammierung", active:false},
            {lessonid:16, lessonname:"Französisch", active:false},
            {lessonid:17, lessonname:"Weltreise", active:false},
            {lessonid:18, lessonname:"Englisch", active:false},
            {lessonid:19, lessonname:"Chemie", active:false},
            {lessonid:20, lessonname:"3D Modelling", active:false}
        ]
    },
    mutations: {
        setStatus(state, id, status){
            state.lessons.find(lessons => lessons.lessonid === id).active = status
        }
    },
    actions:{
        setStatus({commit}, id, status){
            commit('setStatus', id, status);
        }
    },
    getters:{
        getLesson: (state) => (id) => {return state.lessons.find(lesson => lesson.lessonid === id)},
        getLessons:(state) => (ids) => {return state.lessons.filter(lesson => lesson.lessonid === ids)}
    }
})