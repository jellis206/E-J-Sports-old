let url = "https://www.balldontlie.io/api/v1/games";
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
       for (let i=0; i < json.data.length; i++)
       {
           results += "<div> Home: " + json.data[i].home_team.full_name + "</div>";
       }
       document.getElementById("Match").innerHTML = results;
       
      });
      
      



