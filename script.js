//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a). Get all the countries from Asia continent /region using Filter function
      
      var request = new XMLHttpRequest();
      request.open("GET","https://restcountries.com/v3.1/all",true)
      request.send();
      request.onload = function() {
       var result = JSON.parse(request.response);
       result.filter((countries)=> {
       return countries.region==="Asia";
      })
       console.log(result);
    }
// b).Get all the countries with a population of less than 2 lakhs using Filter function
   
      /* var request = new XMLHttpRequest();
       request.open("GET","https://restcountries.com/v3.1/all",true)
       request.send();
       request.onload = function() {
       var resultt = JSON.parse(request.response);
       const pop=resultt.filter((element)=>{
       return element.population<200000;
       })
       console.log(pop);
      } 
 // c).Print the following details name, capital, flag, using forEach function
 
       var request = new XMLHttpRequest();
       request.open("GET","https://restcountries.com/v3.1/all",true)
       request.send();
       request.onload = function() {
       var result1 = JSON.parse(request.response);
       var total = result1.reduce((acc,curr)=>{
       return acc+curr.population;
        });
      console.log(total); 
       }
      
  //d). Print the total population of countries using reduce function

       var request = new XMLHttpRequest();
       request.open("GET","https://restcountries.com/v3.1/all",true)
       request.send();
       request.onload = function() {
        var resul = JSON.parse(request.response);
      resul.forEach((element)=>{
      console.log(element.name);
      console.log(element.capital);
      console.log(element.flag);
      })}

   //e).Print the country that uses US dollars as currency.
       var request = new XMLHttpRequest();
       request.open("GET","https://restcountries.com/v3.1/all",true)
       request.send();
       request.onload = function() {
       var res = JSON.parse(request.response);
       var currency=res.filter((element)=>{
       for(let key in element.currencies){
        if(element.currencies[key].code==="USD"){
        return element;
        }}
      })
       console.log(res);
    }*/

      


















