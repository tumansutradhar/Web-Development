const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="table">
      <table>
        <tr>
          <th>KEY</th>
          <th>CODE</th>
          <th>KEY CODE</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.code}</td>
          <td>${e.keyCode}</td>
        </tr>
      </table>
    </div>
  `;
});
