const app = Vue.createApp({
  data() {
    return{
      counter: 0,
      name: '',
      confirmedName: '',
      fullname: '',
    };
  },
  watch: {
    name(value){
      if (value === '') {
        this.fullname = '';
      } else {
      this.fullname = value + ' ' + 'Baraban';
      }
    },
  },
  computed:{
    //fullname(){
      //if (this.name === ''){
      //  return '';
      //}
      //return this.name + ' ' + 'Baraban';
    //}
  },
  methods: {
    outputFullName(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Baraban';
    },
    submitForm(event){
      //event.preventDefault();
      alert('Submitted!');
    },
    confirmInput(event){
      this.confirmedName = this.name;
    },
    setName(event, lastname){
      this.name = event.target.value;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
    },
  }
});

app.mount('#events');