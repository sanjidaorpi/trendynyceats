function load_results() {
  var results = document.getElementById("results"); //get an existing div from your html page
  var title = document.createElement("h1"); //creates a new <h1></h1>
  title.textContent = "These are your search results:" //puts text inside the h1 tags
  results.appendChild(title); //add the title to your html document
}
