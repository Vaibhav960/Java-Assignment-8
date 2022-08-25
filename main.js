(function () {
  const table = document.getElementById("table");
  const fetchData = async () => {
    const raw = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await raw.json();
    const data = res.map((el) => {
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");
      const cell3 = document.createElement("td");
      const cellText1 = document.createTextNode(el.name);
      const cellText2 = document.createTextNode(el.email);
      const cellText3 = document.createTextNode(el.phone);
      cell1.appendChild(cellText1);
      cell2.appendChild(cellText2);
      cell3.appendChild(cellText3);
      row.appendChild(cell1);
      row.appendChild(cell2)
      row.appendChild(cell3)
      
      table.appendChild(row);
    });
  };
  fetchData();
})();
