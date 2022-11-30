

var newsList = [
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "What books should an aspiring journalist read?",
    "Marie Colvin shined a light on war-torn corners of the world",
    "I am a cool web developer", "A"
  ];
  
  
  
  function sort(type) {
  
    if (type == "ascending") {
      //Write your code here for sorting (ascending)
      newsList.sort((a,b) =>{
        return a.replace(/[.*+'^?!${}()|[\]\\]/g, "").localeCompare(b.replace(/[.*+'^?!${}()|[\]\\]/g, ""))
      });
      
    } else {
      //Write your code here for sorting (descending)
     newsList.sort((a,b) =>{
      return b.replace(/[.*+'^?!${}()|[\]\\]/g, "").localeCompare(a.replace(/[.*+'^?!${}()|[\]\\]/g, ""))
     });
    }
  
    return newsList;
  }
  function search(inputValue){
  var Searching = newsList.filter(a => a.includes(inputValue))
    return newsList = Searching
}
search("I")
/*  
  function trueflase(){
  var x=[]
    for (let index = 0; index < newsList.length; index++) {
       newsList[index].replace(/[.*+'^?!${}()|[\]\\]/g, "") ;
      
    }
  
  
    if(newsList[4][1].toLowerCase !== newsList[4][1].toUpperCase){
      return console.log(
        newsList.sort((a,b)=> {
          return a.replace(/[.*+'^?!${}()|[\]\\]/g, "").localeCompare(b.replace(/[.*+'^?!${}()|[\]\\]/g, ""))
        })
      )
    }else{
      return console.log("false")
    }
  
  
  }
  */
  //trueflase()
  //sort("descending");
  
  console.log(newsList)
  
  