const https = require('https');
const apiUrl = "https://jsonmock.hackerrank.com/api/moviesdata/search/?Title="
const movieTitles = "spiderman"

function makeCall(reqUrl, titles, substr) {

    let result = '';

    return new Promise( (resolve, reject) => {
        https.get(reqUrl, (res) => {
            res.on('data', (d) => {
                result += d;
            });

            res.on('end', () => {
                try {
                    if (typeof result === 'string') result = JSON.parse(result);
                }
                catch(err) {
                    return reject([]);
                }

                let page = result.page;
                let total_pages = result.total_pages;
                let title = result.data;

                for(let i = 0; i<title.length; i++){
                    titles.push(title[i].Title);
                }

                if (page == total_pages) {
                    return resolve(titles);
                } else {
                    let url = apiUrl + substr + "&page=" + Number(Number(page) + 1);
                    return resolve(makeCall(url, titles, substr));
                }
            });

        }).on('error', (e) => {
        console.error(e);
        reject(e);
        });
    });

}
function getMovies(substr) {

    let reqUrl = apiUrl + substr;

    let titles = [];

    return new Promise( (resolve, reject) => {
        makeCall(reqUrl, titles, substr)
        .then( result => {
            titles = result.sort();
            resolve(titles);
        });
    });
}

getMovies(movieTitles).then(result => {
    console.log("list of " + movieTitles + " movies")
    console.log(result);
    console.log("total movies : " + result.length);
});