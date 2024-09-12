function addData(event) {
    event.preventDefault();

    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";
    const image = document.getElementById("input-image");
    const file = image.files[0];


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

        if (file) {
            const reader = new FileReader();
            reader.onload = function(f) {
                const imageUrl = f.target.result;
                const imageInput = document.createElement('td');
                const newImage = document.createElement("img");
                newImage.src = imageUrl;
                newImage.width = 64;
                newImage.height = 64;
                imageInput.appendChild(newImage);
                newRow.appendChild(imageInput);
                table.appendChild(newRow);
                
            }
            reader.readAsDataURL(file);
        } else {
            const imageInput = document.createElement('td');
            imageInput.textContent = '';
            newRow.appendChild(imageInput);
            table.appendChild(newRow);
        }
    }
}

function emptyTable() {
    const table = document.getElementById("table");
    table.innerText = '';
}

document.getElementById("form").addEventListener("submit", addData);

document.getElementById("empty-table").addEventListener("click", emptyTable);