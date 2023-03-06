<template>
    <div>
        <v-card width="100%">
            <h2 style="margin:20px">Wochenplan</h2>
            <v-table>
                <thead>
                    <tr>
                        <th>Montag</th>
                        <th>Dienstag</th>
                        <th>Mittwoch</th>
                        <th>Donnerstag</th>
                        <th>Freitag</th>
                    </tr>
                </thead>
                <tbody>
                    <br>
                    <v-container>
                        <div style="text-align:left">8:00 - 9:45</div>   
                    </v-container>
                    <tr v-for="i in 4" :key="i">
                        <td v-for="day in daysEarly" :key="day.day">
                            <div>
                                <v-btn width="210" :rounded="0" :class="getClass(day, i)" @click="onClick(day, i)" :color=getLesson(getLid(day,i)).btncolor>
                                    {{ getLesson(getLid(day, i)).lessonname }}
                                </v-btn>
                            </div>
                        </td>
                    </tr>
                    <br>
                    <br>
                    <v-container>
                        <div style="text-align: left;">10:00 - 11:45</div>   
                    </v-container>
                    <tr v-for="i in 4" :key="i">
                        <td v-for="day in daysLate" :key="day.day">
                            <div>
                                <v-btn width="210" :rounded="0" :class="getClass(day, i)" @click="onClick(day, i)" :color=getLesson(getLid(day,i)).btncolor>
                                    {{ getLesson(getLid(day, i)).lessonname }}
                                </v-btn>
                            </div>
                        </td>
                    </tr>                
                </tbody>
            </v-table>
                <br>
                <div style="margin:10px">gewählte Kurse:</div>
                <v-chip variant="text" v-for="(lesson,i) in this.activeLessons" :key="i">
                    {{lesson.lessonname}}
                </v-chip>
            
        </v-card>
</div>
</template>
  
<script>
export default {
    data() {
        return {
            daysEarly: [
                { day: "Montag", lid: [1, 2, 3, 4] },
                { day: "Dienstag", lid: [9, 2, 1, 4] },
                { day: "Mittwoch", lid: [9, 11, 12, 13] },
                { day: "Donnerstag", lid: [11, 18, 16, 20] },
                { day: "Freitag", lid: [18, 3, 20, 7] },
            ],
            daysLate:[
                { day: "Montag", lid: [5, 6, 7, 8] },
                { day: "Dienstag", lid: [5, 6, 10, 8] },
                { day: "Mittwoch", lid: [14, 15, 16, 17] },
                { day: "Donnerstag", lid: [19, 14, 12, 15] },
                { day: "Freitag", lid: [19, 13, 10, 17] },
            ],
            lessons: [
                { lessonid: 1, ldays: [], lessonname: "Biologie (nähen)", active: false, btncolor: "green"},
                { lessonid: 2, ldays: [], lessonname: "Filzen", active: false, btncolor: "red"},
                { lessonid: 3, ldays: [], lessonname: "bewegtes Leben", active: false, btncolor: "grey" },
                { lessonid: 4, ldays: [], lessonname: "Chor", active: false, btncolor: "lightblue" },
                { lessonid: 5, ldays: [], lessonname: "Spanisch", active: false, btncolor: "#e8e289" },
                { lessonid: 6, ldays: [], lessonname: "Keramik", active: false, btncolor: "#f7d497" },
                { lessonid: 7, ldays: [], lessonname: "Schach", active: false, btncolor: "#c0c6cf" },
                { lessonid: 8, ldays: [], lessonname: "Percussion", active: false, btncolor: "#83aef2" },
                { lessonid: 9, ldays: [], lessonname: "Foto/Cyanotypie", active: false, btncolor: "#eda64e" },
                { lessonid: 10, ldays: [], lessonname: "Gesang", active: false, btncolor: "#41aee0" },
                { lessonid: 11, ldays: [], lessonname: "Tontechnik", active: false, btncolor: "#293791" },
                { lessonid: 12, ldays: [], lessonname: "Italienisch", active: false, btncolor: "#c4b164" },
                { lessonid: 13, ldays: [], lessonname: "Biologie", active: false, btncolor: "#2bba23" },
                { lessonid: 14, ldays: [], lessonname: "Philosophie", active: false, btncolor: "#7f8a7f" },
                { lessonid: 15, ldays: [], lessonname: "Spieleprogrammierung", active: false, btncolor: "#825214" },
                { lessonid: 16, ldays: [], lessonname: "Französisch", active: false, btncolor: "#f0e0c9" },
                { lessonid: 17, ldays: [], lessonname: "Weltreise", active: false, btncolor: "#8c8984" },
                { lessonid: 18, ldays: [], lessonname: "Englisch", active: false, btncolor: "#99691a" },
                { lessonid: 19, ldays: [], lessonname: "Chemie", active: false, btncolor: "#5fc441" },
                { lessonid: 20, ldays: [], lessonname: "3D Modelling", active: false, btncolor: "#a1894c" },
            ],
            activeLessons:null,
        };
    },
    created() {
        this.fillLdays();
    },
    methods: {
        fillLdays() {
            this.daysEarly.forEach((day) => {
                day.lid.forEach((lid) => {
                    this.getLesson(lid).ldays.push(day);
                });
            });
            this.daysLate.forEach((day) => {
                day.lid.forEach((lid) => {
                    this.getLesson(lid).ldays.push(day);
                });
            });
        },
        getClass(day, index) {
            return {
                selected: this.getLesson(day.lid[index - 1]).active,
            };
        },
        getLesson(id) {
            return this.lessons.find((lesson) => lesson.lessonid === id);
        },
        getLid(day, index) {
            return day.lid[index - 1];
        },
        onClick(day, index) {
            //trigger on off
            if (this.getLesson(day.lid[index - 1]).active) {
                this.getLesson(day.lid[index - 1]).active = false;
            } else {
                this.getLesson(day.lid[index - 1]).active = true;
                this.setOtherFalse(day,index)
            }
            this.activeLessons = this.lessons.filter(element => element.active === true)
           
        },
        setOtherFalse(day, index){
            //set elements from same block inactive
            day.lid.forEach((element) => {this.getLesson(element).active = false})

            //set elements from chained course inactive
            this.getLesson(day.lid[index-1]).ldays.forEach((el) => {
                el.lid.forEach((e) => {
                    this.getLesson(e).active = false;
                });
            });
            //set clicked active
            day.lid.forEach((element) => {
                if (element === this.getLid(day, index)) {
                    //set all day elements inactive except clicked
                    this.getLesson(element).active = true;
                }
            });
        }
    },
};
</script>
  
<style scoped>
table {
    border-collapse: collapse;
    margin: 20px 0;
}

th,
td {
    border: 1px solid #ddd;
    padding: 0px;
}


th {
    background-color: #f2f2f2;
}

button {
    background-color: #E3F2FD;
    
    color:black !important;   
}

.selected {
    background-color: #2196F3;
    color:white !important;
    opacity:1;
}</style>