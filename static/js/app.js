// Main data source
var tableData = data;

// Filter the table with the FILTER TABLE button
var buttonFind = d3.select("#filter-btn");

// Complete the click handler for the form
buttonFind.on("click", function() {
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

  // Use the form input to filter the data by date
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

  // Display the filtered data in the table body
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

// Clear the table with the CLEAR TABLE button
var buttonClear = d3.select("#clear-btn");
buttonClear.on("click", function() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove()
});

