
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (JavaScript library for graphics)
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    //Empty the table
    tbody.html("");

    //Add the forEach Function
    data.forEach((dataRow) => {
        //Create a variable that will append a row to the table body ('tr' is html syntax for table row)
        let row = tbody.append("tr");
        //Loop Through Data Rows (we're telling our code put each sighting onto its own row of data)
        Object.values(dataRow).forEach((val) => {
            //Append data into a table data tag (<td>)
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

//Add filters
function handleClick() {
    //Grab the datetime value from the filter //D3 to look for the #datetime id in the HTML tags 
    let date = d3.select("#datetime").property("value");
    //Set a default filter
    let filteredData = tableData;
    //Check to see if a date was entered and filter the data using that date
    if (date) {
        //Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Rebuild the table using the filtered data
    //@NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

//Listen for the event //#filter-btn: selector string that contains the id for another HTML tag (button)
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);