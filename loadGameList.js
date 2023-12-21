const sheetLink = "https://sheets.googleapis.com/v4/spreadsheets/1TqoQFEjnZtWwUC2AVBpCvMK72vmBNE6HKRHjoX9UJgs/values/all/?key=AIzaSyB3gtv2pVjqdW3h1tWwOJ1CyInQ2kkYrFU"

async function createGameLists() {

    var data = await fetch(sheetLink).then((response) => { return response.json() });
    var gameList = data.values;

    for (game in gameList) {
        var title = gameList[game][0];
        var img = gameList[game][1];
        var link = gameList[game][2];

        var article = gameList[game][4];

        document.getElementById(article + '-list').innerHTML += '<div class="game_cell"><a href="'
            + link + '"><img src="' + img + '"></a><a href="' + link + '">' + title + '</a></div>';
    }
}
  

createGameLists()