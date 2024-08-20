function calculateTotalAmount() {
    const deliveryCharges = parseFloat(document.getElementById('deliveryCharges').value) || 0;
    const pickupCharges = parseFloat(document.getElementById('pickupCharges').value) || 0;
    const installationCharges = parseFloat(document.getElementById('installation').value) || 0;
    const withoutLiftDelivery = parseFloat(document.getElementById('withoutliftd').value) || 0;
    const withoutLiftPickup = parseFloat(document.getElementById('withoutliftp').value) || 0;

    // Sum all the charges to get the total amount
    // const totalAmount = deliveryCharges + pickupCharges + installationCharges   ;withoutLiftDelivery + withoutLiftPickup
    const totalAmount = deliveryCharges  + installationCharges +  withoutLiftDelivery ;

    // Update the total amount in the HTML
    document.getElementById('totalC').textContent = `₹${totalAmount.toFixed(2)}`;
}

// Add event listeners to update the total amount whenever any of the input values change
document.getElementById('deliveryCharges').addEventListener('input', calculateTotalAmount);
document.getElementById('pickupCharges').addEventListener('input', calculateTotalAmount);
document.getElementById('installation').addEventListener('input', calculateTotalAmount);
document.getElementById('withoutliftd').addEventListener('input', calculateTotalAmount);
document.getElementById('withoutliftp').addEventListener('input', calculateTotalAmount);

// Initial calculation to ensure the total is updated on page load
calculateTotalAmount();






















// function calculateTotalAmount() {
//     const totalC = parseFloat(document.getElementById('totalC').value) || 0;
//     const grand = parseFloat(document.getElementById('grand-total').value) || 0;


//     // Sum all the charges to get the total amount
//     const totalAmount = totalC+grand;

//     // Update the total amount in the HTML
//     document.getElementById('totalC').textContent = `₹${totalAmount.toFixed(2)}`;
// }

// // Add event listeners to update the total amount whenever any of the input values change
// document.getElementById('totalC').addEventListener('input', calculateTotalAmount);
// document.getElementById('grand-total').addEventListener('input', calculateTotalAmount);
// d

// // Initial calculation to ensure the total is updated on page load
// calculateTotalAmount();












