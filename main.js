
const ApiKey = config.gitHubApiKey;
let tbody = document.getElementById("tbody");

axios.all([axios.get(`https://api.github.com/users/pablodelacruz1?apiKey=${ApiKey}`), 
axios.get(`https://api.github.com/users/PabloDeLaCruz1/repos?apiKey=${ApiKey}`)])
    .then(result => {
        const res = result[0].data;
        const res2 = result[1].data;
        // Set avatar URL
        document.getElementById("avatar_url").setAttribute("src", res.avatar_url);
        //Set profile name
        document.getElementById("github_id").innerHTML = res.login;
        //Set button link to my github
        document.getElementById("github_link").setAttribute("href", res.html_url);
        
        //Set repos list 

        console.log("res1", res);
        console.log("res2", res2);

        res2.forEach(element => {
            let repo = document.createElement("tr");
            repo.innerHTML = `<td>${element.id}</td>
            <td>${element.name}</td>`;

            tbody.appendChild(repo);
        });



    })
    .catch(err => {
        console.log("ERR!!", err);

    });