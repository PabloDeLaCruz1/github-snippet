let reposDiv = document.getElementById("reposDiv");

axios.all([axios.get("https://swapi.co/api/planets/1"), axios.get("https://swapi.co/api/planets/2")])
    .then(result => {
const res = result[0];
const res2 = result[1];
    //Set avatar URL
    // document.getElementById("avatar_url").setAttribute("src", res.avatar_url);
    // //Set profile name
    // document.getElementById("github_id").innerHTML = res.login;
    // //Set button link to my github
    // document.getElementById("github_link").setAttribute("href", red.html_url);
    //Set 

    console.log("res1", res);
    console.log("res2", res2);
    
    
    })
    .catch(err => {
        console.log("ERR!!", err);

    });