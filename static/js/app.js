// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {
    
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);

  // Use the form input to filter the data by date
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);


// Display the Data in the Table
// Get a reference to the table body and show filtered data
var tbody = d3.select("tbody");
console.log(filteredData);

// Fill the table with the Filtered data
filteredData.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
});