function addData(event) {
    event.preventDefault();

    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";

    const table = document.getElementById("table");
    const rows = document.getElementsByTagName("tr");
    let isUsername = false;

    for (let i = 0; i < rows.length; i++) {
        const data = rows[i].getElementsByTagName("td");
        if (data.length > 0 && data[0].textContent == username) {
            data[1].textContent = email;
            data[2].textContent = admin;
            isUsername = true;
            break;
        }
    }


    if (isUsername == false) {
        const newRow = document.createElement("tr");

        const usernameInput = document.createElement("td");
        usernameInput.textContent = username;
        newRow.appendChild(usernameInput);

        const emailInput = document.createElement("td");
        emailInput.textContent = email;
        newRow.appendChild(emailInput);

        const adminInput = document.createElement("td");
        adminInput.textContent = admin;
        newRow.appendChild(adminInput);

        table.appendChild(newRow);
    }
}

function emptyTable() {
    const table = document.getElementById("table");
    table.innerText = '';
}

document.getElementById("form").addEventListener("submit", addData);

document.getElementById("empty-table").addEventListener("click", emptyTable);