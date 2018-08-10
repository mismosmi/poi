# poi
A simple nodejs POI API.

Run the server with `npm start`.

Visit `localhost:3000`.

API-usage is:
```
?by=id&id=%ID% 
=> restaurant by id

?by=boundingbox&latMin=%minimum latitude%&latMax=%maximum latitude%&lngMin=%minimum longitude%&lngMax=%maximum longitude%
=> return array of restaurants within bounding box
```

Example data read from tour-pedia.org API. Thanks!
