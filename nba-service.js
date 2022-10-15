let url = "https://www.balldontlie.io/api/v1/games";
// fetch(url)
//     .then(function (response) {
//         return response.json();
//     }).then(function (json) {
//         console.log(json);
//         let results = "";
//         for (let i = 0; i < json.data.length; i++) {
//             results += "<div> <p>Home: " + json.data[i].home_team.full_name + "  Away: " + json.data[i].visitor_team.full_name + "</p>";
//             results += "<p> Score" + json.data[i].home_team_score + "  Away: " + json.data[i].visitor_team_score + "</p></div>";
//         }
//         document.getElementById("Match").innerHTML = results;

//     });


async function getAllGames() {
    let pages = [...Array(20).keys()];
    let allData = [];

    await Promise.all(
        pages.map(async p => {
            var url = new URL("https://www.balldontlie.io/api/v1/games");
            url.searchParams.append("page", p);
            url.searchParams.append("per_page", 50);
            const res = await fetch(url).then(data => { return data.json(); });
            allData.push(res);
        })
    );
    console.log(allData);
    let results = "";
    for (let j = 0; j < allData.length; j++) {
        let json = allData[j];
        for (let i = 0; i < json.data.length; i++) {
            date = new Date(json.data[i].date).toString().substring(0, 15);
            results += "<div class=\'game\'> <p class=\'date\'> Date: " + date + "</p>";
            results += "<div class=\'teams\'><div class=\'home\'>Home Team: " + json.data[i].home_team.full_name + "</div> <div class=\'away\'>Away Team: " + json.data[i].visitor_team.full_name + "</div></div>";
            results += "<div class=\'score\'>" + json.data[i].home_team_score + " to " + json.data[i].visitor_team_score + "</div></div>";
        }
    }
    document.getElementById("match").innerHTML = results;

}
getAllGames();