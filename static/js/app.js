
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