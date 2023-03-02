const app = Vue.createApp({
  data() {
    return{
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm(event){
      //event.preventDefault();
      alert('Submitted!');
    },
    confirmInput(event){
      this.confirmedName = this.name;
    },
    setName(event, lastname){
      this.name = event.target.value + ' ' + lastname;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');