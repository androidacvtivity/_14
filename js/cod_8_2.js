function validateColumnOne() {
    var rowIDs = [
        { id: "17071", rind: "01" },
        { id: "17065", rind: "02" },
        { id: "17064", rind: "03" },
        { id: "16998", rind: "04" },
        // Add other rows dynamically as needed
    ];

    const enteredCodes = new Map(); // Track entered codes and their rows

    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\."); // Escape dots in rind
        var col1 = $("#14_340_" + row.id + "_" + escapedRind + "_1"); // Get the COL1 element

        if (col1.length) {
            var value = col1.val().trim(); // Get the value in the input field

            // Check if the code exists in the classifier
            var found = codeList.find(function (code) {
                return code.code === value;
            });

            // Detect duplicate code
            if (enteredCodes.has(value)) {
                const toastMessage = `Cod duplicat: ${value} (Randurile ${enteredCodes.get(value)} și ${row.rind})`;
                showToast(toastMessage, "red");
            } else if (value) {
                // Add code to enteredCodes map with its row ID
                enteredCodes.set(value, row.rind);
            }

            // Show error for invalid code
            if (!found && value) {
                showToast(`Codul nu face parte din clasificator: ${value}`, "red");
                showInlineError(col1, "Codul nu face parte din clasificator");
            } else {
                removeInlineError(col1); // Remove inline error if code is valid
            }
        }
    });
}

// Helper function to show a toast message
function showToast(message, color) {
    // Create a toast container dynamically if it doesn't exist
    if (!document.getElementById("toastContainer")) {
        const toastContainer = document.createElement("div");
        toastContainer.id = "toastContainer";
        toastContainer.style.position = "fixed";
        toastContainer.style.bottom = "20px";
        toastContainer.style.right = "20px";
        toastContainer.style.zIndex = "1000";
        toastContainer.style.maxWidth = "300px";
        document.body.appendChild(toastContainer);
    }

    // Show the toast message
    const toast = document.createElement("div");
    toast.style.backgroundColor = color;
    toast.style.color = "white";
    toast.style.padding = "10px";
    toast.style.marginBottom = "10px";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    toast.textContent = message;

    const toastContainer = document.getElementById("toastContainer");
    toastContainer.appendChild(toast);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Helper function to show inline error
function showInlineError(col1, message) {
    // Remove any existing error message first
    const existingError = col1.next(".error-message");
    if (existingError.length) {
        existingError.remove();
    }

    // Add a new error message next to the input field
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.marginLeft = "10px";
    errorMessage.textContent = message;
    col1[0].parentNode.appendChild(errorMessage);
}

// Helper function to remove inline error
function removeInlineError(col1) {
    const existingError = col1.next(".error-message");
    if (existingError.length) {
        existingError.remove();
    }
}
