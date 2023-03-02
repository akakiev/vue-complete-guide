const app = Vue.createApp({
    data(){
        return{
            soccerTeam: '',
            submittedSoccerTeam: '',
        };
    },
    methods: {
        submittedInput(event){
            this.submittedSoccerTeam = event.target.value;
        },
        confirmedInput(event, club){
            this.soccerTeam = event.target.value + ' ' + club;
        },
        pressedButton(event){
            alert('The button is pressed!');
          },
    }, 
});

app.mount('#assignment');