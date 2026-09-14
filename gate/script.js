const table = document.getElementById("sampleTable")
const insert_Row = () =>{
      const tr = document.createElement("tr")
      const td1 = document.createElement("td")
      const td2 = document.createElement("td")
      td1.textContent = `Row ${table.rows.length + 1} Cell 1`;
      td2.textContent = `Row ${table.rows.length + 1} Cell 2`;
      table.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
}