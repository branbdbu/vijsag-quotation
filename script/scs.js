function calculateGrandTotal() {
    // Get the values of totalC and grand-total
    const totalC = parseFloat(document.getElementById('totalC').innerText) || 0;
    const grandTotal = parseFloat(document.getElementById('grand-total').innerText) || 0;
    
    // Calculate the sum
    const totalSum = totalC + grandTotal;
    
    // Display the total sum
    document.getElementById('grandTotalDisplay').innerText = totalSum.toFixed(2);
}

// Example: Call this function when the document is fully loaded
window.onload = calculateGrandTotal;


function updateTotalC(newTotalC) {
    document.getElementById('totalC').innerText = newTotalC.toFixed(2);
    calculateGrandTotal();
}

function updateGrandTotal(newGrandTotal) {
    document.getElementById('grand-total').innerText = newGrandTotal.toFixed(2);
    calculateGrandTotal();
}