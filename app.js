const app = Vue.createApp({
  data() {
    return{
      counter: 0,
      name: '',
      lastname: '',
      confirmedName: '',
      //fullname: '',
    };
  },
  watch: {
    counter(value){
      if (value > 50){
        const that = this;
        setTimeout(function (){
        that.counter = 0;
      }, 2000);
      }
    }
    // name(value){
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //   this.fullname = value + ' ' + 'Baraban';
    //   }
    // },
  },
  computed:{
    fullname(){
      if (this.name === '' || this.lastname === ''){
       return '';
      }
      return this.name + ' ' + this.lastname;
    }
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