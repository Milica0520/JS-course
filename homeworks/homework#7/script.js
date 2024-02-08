// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

//row = tr
//column/sell = td

let rows = parseInt(prompt("Enter number of rows!"));
let columns = parseInt(prompt("Enter number of columns!"));

function createDynamicTable(rows, columns) {
  let container = document.getElementById("tableContainer");
  let table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= columns; j++) {
      let cell = document.createElement("td"); //create sell
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  container.appendChild(table);
}

createDynamicTable(rows, columns);
