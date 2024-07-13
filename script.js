async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=77b9be5d-3ecc-4baf-baa1-43fff15ff4b7&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            
            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

         

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();