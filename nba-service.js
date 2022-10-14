let url = "https://www.balldontlie.io/api/v1/games";
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
       for (let i=0; i < json.data.length; i++)
       {
           results += "<div> <p>Home: " + json.data[i].home_team.full_name + "  Away: "+ json.data[i].visitor_team.full_name +"</p>";
           results += "<p> Score" + json.data[i].home_team_score + "  Away: "+ json.data[i].visitor_team_score + "</p></div>";
       }
       document.getElementById("Match").innerHTML = results;
       
      });
      
      



