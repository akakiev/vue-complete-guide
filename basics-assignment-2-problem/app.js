const app = Vue.createApp({
    data(){
        return{
            soccerTeam: '',
        };
    },
    methods: {
        pressedButton(event){
            alert('The button is pressed!');
          },
        confirmedInput(event, club){
            this.soccerTeam = event.target.value + ' ' + club;
        }
    }, 
});

app.mount('#assignment');