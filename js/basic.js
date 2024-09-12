function addData(event) {
    event.preventDefault();

    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";

    const table = document.getElementById("table");

    const newRow = document.createElement("tr");

    const usernameInput = document.createElement("td");
    usernameInput.textContent = username;
    newRow.appendChild(usernameCell);

    const emailInput = document.createElement("td");
    emailInput.textContent = email;
    newRow.appendChild(emailCell);

    const adminInput = document.createElement("td");
    adminInput.textContent = admin;
    newRow.appendChild(adminCell);

    table.appendChild(newRow);
}

document.getElementById("form").addEventListener("submit", addData);