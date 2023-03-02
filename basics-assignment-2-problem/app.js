const app = Vue.createApp({
    data(){
        return{

        }
    },
    methods: {
        pressedButton(event){
            alert('The button is pressed!');
          },
    }, 
});

app.mount('#assignment');