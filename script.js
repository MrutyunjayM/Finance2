function displayTransactions(transactions) {
    const transactionSection = document.getElementById("transactionSection");
    transactionSection.classList.remove("hidden");

    const transactionBody = document.getElementById("transactionBody");
    transactionBody.innerHTML = ""; // Clear previous results

    if (transactions.length === 0) {
        transactionBody.innerHTML = `<tr><td colspan="4">No transactions found.</td></tr>`;
        return;
    }

    transactions.forEach(txn => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${formatDate(txn.date)}</td>
            <td>${txn.description}</td>
            <td class="${txn.type === 'Credit' ? 'credit' : 'debit'}">
                ₹${txn.amount.toLocaleString()} 
            </td>
            <td class="${txn.type === 'Credit' ? 'credit' : 'debit'}">${txn.type}</td>
        `;
        transactionBody.appendChild(row);
    });
}

// Function to format date to DD-MM-YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If invalid, return as is
    return date.toLocaleDateString('en-GB'); // Formats to DD/MM/YYYY
}
