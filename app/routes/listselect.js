import Ember from 'ember';

export default Ember.Route.extend({

   selected: null,
  actions: {

  	onSelect(){
       var x=document.getElementById("sel");
       for (var i = 0; i < x.options.length; i++) {
       if(x.options[i].selected){
        alert(x.options[i].value);
       }
      }
    }, 

  }
});
