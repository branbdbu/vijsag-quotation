
























let totalCost = 0;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    
    if (itemName && quantity && price) {
        const table = document.getElementById('quotationTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        const total = quantity * price;
        totalCost += total;

        cell1.textContent = itemName;
        cell2.textContent = quantity;
        cell3.textContent = `₹${price}`;
        cell4.textContent = `₹${total.toFixed(2)}`;

        costt();
        document.getElementById('quotationForm').reset();
    } else {
        alert('Please fill out all fields');
    }
}

function costt() {
    const grandTotalMultiplied = totalCost * 2;

    document.getElementById('totalCost').textContent = `₹${totalCost.toFixed(2)}`;
    
    // Displaying the grand total multiplied by 2
    document.getElementById('grandTotalDisplay').textContent = 
        `Refundable Deposite: ₹  ${grandTotalMultiplied.toFixed(2)}`;
}

function calculateTotalAmount() {
    const installationCharges = parseFloat(document.getElementById('installation').value) || 0;
    const withoutLiftDelivery = parseFloat(document.getElementById('withoutliftd').value) || 0;
    const withoutLiftPickup = parseFloat(document.getElementById('withoutliftp').value) || 0;

    // Sum the remaining charges to get the total amount
    const totalAmount = installationCharges + withoutLiftDelivery + withoutLiftPickup;

    // Update the total amount in the HTML
    document.getElementById('totalC').textContent = `₹${totalAmount.toFixed(2)}`;
}

// // Add event listeners to update the total amount whenever any of the remaining input values change
// document.getElementById('installation').addEventListener('input', calculateTotalAmount);
// document.getElementById('withoutliftd').addEventListener('input', calculateTotalAmount);
// document.getElementById('withoutliftp').addEventListener('input', calculateTotalAmount);

















function printQuotation() {
    window.print();
}





document.getElementById("button1").onclick = function() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("image1").style.display = "block";
};

document.getElementById("button2").onclick = function() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("image2").style.display = "block";
};








 