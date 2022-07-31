# <img src="https://img.icons8.com/fluency/48/000000/node-js.png"/> api request - get data using nodejs
### api request read data using node.js for backend test and live coding
### Api `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=`

input :

example movieTitles = "spiderman"

```javascript
getMovies(movieTitles).then(result => {
    console.log("list of " + movieTitles + " movies")
    console.log(result);
    console.log("total movies : " + result.length);
});
```
output :
```yaml
list of spiderman movies
[                                                           
  'Fighting, Flying and Driving: The Stunts of Spiderman 3',
  'Italian Spiderman',                                      
  'Spiderman',                                              
  'Spiderman 5',                                            
  'Spiderman in Cannes',                                    
  'Superman, Spiderman or Batman'                           
]                                                           
total movies : 6 
```

