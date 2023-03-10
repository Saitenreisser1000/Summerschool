<template>
    <v-container>
        <h1>Kursangebot</h1>
    <v-card v-for="(lesson, i) in lessons" :key=i class="ma-6">
        <v-row no-gutters>
        <v-col cols="2">
            <v-img src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"></v-img>
        </v-col>
        <v-col>
            <v-card-item>
                <v-card-title>{{ lesson.title }}</v-card-title>
                <v-card-text>{{ lesson.text }}</v-card-text>
            </v-card-item>
        </v-col>
    </v-row>
    </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            lessons:[
                {title:"Weltreise (GW)", tutor:"WT", text:"Eine Weltreise mit allen Sinnen Wir erkunden unterschiedliche Länder der Welt und lernen die Kultur, die Kulinarik, die Gewohnheiten der Menschen, die Musik und die Landschaft der einzelnen Staaten näher kennen."},
                {title:"3D-Modelling", tutor:"HW", text:"Wir lernen das 3D-Animationsprogramm “Blender” kennen und ergründen, wie in Filmen und Computerspielen Charaktere und ganze Welten entstehen."},
                {title:"Filzen", tutor:"HK", text:"Wir gestalten mittels der flächenbildenden Technik “Filzen” aus Schafwolle eine Handy- oder Tablet Hülle sowie andere kleine gefilzte Gegenstände nach Wunsch (Unkostenbeitrag 20€/Person)Max. 12 TeilnehmerInnenMitzubringen: 1 altes Handtuch"},
                {title:"Keramik", tutor:"HK", text:"Wir lernen einige keramische Aufbaumethoden kennen und gestalten ein fantastisches Tierwesen mit dem Werkstoff Ton. (Unkostenbeitrag 10€/ Person)Max. 12 TeilnehmerInnen"},
                {title:"Italienisch", tutor:"BI", text:"Ciao ragazzi! Du möchtest mehr als Pizza, Pasta und Ciao verstehen? Dann tauche ein in die italienische Sprache und lerne spielerisch erste Basics des Italienischen kennen. Ci vediamo! "},
                {title:"Französisch", tutor:"BI", text:"Möchtest du gerne wissen, wie Französisch wirklich ist? Dann lass uns gemeinsam erste Eindrücke der französischen Sprache sammeln! Auf spielerische Weise geht’s in die Heimat von Baguette, Croissant und Eiffelturm! "},
                {title:"Foto/Cyanotypie", tutor:"STR", text:"Entdecke die Welt der Fotografie und experimentiere mit einem alten Druckverfahren - der Cyanotypie! Verbessere deine fotografischen Fähigkeiten und lerne, wie man die Bilder in einem einzigartigen blauen Farbton entwickelt."},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                {title:"", tutor:"", text:""},
                ]
        }
    }
}
</script>

<style>
    
</style>
   
