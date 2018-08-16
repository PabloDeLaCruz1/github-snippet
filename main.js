const ApiKey = config.gitHubApiKey;

axios.all([axios.get(`https://api.github.com/users/pablodelacruz1?access_token=${ApiKey}`),
        axios.get(`https://api.github.com/users/PabloDeLaCruz1/repos?access_token=${ApiKey}`)
    ])
    .then(result => {
        const tbody = document.getElementById("tbody");
        const res = result[0].data;
        const res2 = result[1].data;

        // Set avatar URL
        document.getElementById("avatar_url").setAttribute("src", res.avatar_url);
        //Set profile name
        document.getElementById("github_id").innerHTML = res.login;
        //Set button link to my github
        document.getElementById("github_link").setAttribute("href", res.html_url);

        //Set total amount of repos and repos list / 
        document.getElementById("totalRepos").innerHTML = `Total: ${res.public_repos}`;
        res2.forEach(element => {
            let repo = document.createElement("tr");
            repo.innerHTML = `<td>
                                 <a href=${element.html_url}>
                                      <div>${element.name}</div>
                                 </a>
                             </td>`;

            tbody.appendChild(repo);
        });



    })
    .catch(err => {
        console.log("ERR!!", err);

    });