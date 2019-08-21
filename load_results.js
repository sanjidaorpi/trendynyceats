// const axios = require('axios');

function show_results() {
    fetch("/show_results").then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var results = document.getElementById("results");
        data = JSON.parse(data);
        var business_list = data.businesses;


        for (var i = 0; i < Math.min(5, business_list.length); i++) {
            var business = business_list[i];

            //create the result box
            var result = document.createElement("div")
            result.className = "result";

            //create the details box
            var details = document.createElement("div")
            details.className = "details";

            //get url for restuarants yelp Page
            var url = document.createElement("a");
            var name = document.createElement("h2");
            name.textContent = business.name;

            url.appendChild(name);
            url.href = business.url;

            details.appendChild(url);

            //name of restaurant

            // details.appendChild(name);


            //image thumbnail

            var img = document.createElement("img");
            img.className = "thumbnail";
            img.src = business.image_url;
            result.appendChild(img);

            //location
            var location= document.createElement("h3");
            location.textContent = business.location.display_address;
            details.appendChild(location);

            var rating= document.createElement("h3");
            rating.textContent = "Rating: " + business.rating;
            details.appendChild(rating);

            //add result box to html webpage
            result.appendChild(details);
            results.appendChild(result);
            console.log(business.name);
        }
    });
}
