const getBooksBtn = document.getElementById("get-books-btn");
const booksTable = document.getElementById("books-table");
const booksBody = booksTable.tBodies[0];

const getBooksUrl =
  "https://bd75751h88.execute-api.ap-southeast-2.amazonaws.com/prod/books";

getBooksBtn.addEventListener("click", async () => {
  const res = await fetch(getBooksUrl);
  console.log("Getting Books");
  const data = await res.json();

  booksBody.innerHTML = "";

  data.body.map((x) => {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = booksBody.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = x.Author;
    cell2.innerHTML = x.Title;
  });
});
