function validateColumnOne() {
    var rowIDs = [
        { id: "17071", rind: "01" },
        { id: "17065", rind: "02" },
        { id: "17064", rind: "03" },
        { id: "16998", rind: "04" },
        { id: "16997", rind: "05" },
        { id: "16996", rind: "06" },
        { id: "17082", rind: "07" },
        { id: "17056", rind: "08" },
        { id: "17021", rind: "09" },
        { id: "16995", rind: "10" },
        { id: "17019", rind: "11" },
        { id: "17055", rind: "12" },
        { id: "17010", rind: "13" },
        { id: "17063", rind: "14" },
        { id: "17062", rind: "15" },
        { id: "17030", rind: "16" },
        { id: "17054", rind: "17" },
        { id: "17009", rind: "18" },
        { id: "17081", rind: "19" },
        { id: "17053", rind: "20" },
        { id: "17070", rind: "21" },
        { id: "17008", rind: "22" },
        { id: "17080", rind: "23" },
        { id: "17052", rind: "24" },
        { id: "16994", rind: "25" },
        { id: "17029", rind: "26" },
        { id: "16993", rind: "27" },
        { id: "17028", rind: "28" },
        { id: "17051", rind: "29" },
        { id: "16992", rind: "30" },
        { id: "16991", rind: "31" },
        { id: "17007", rind: "32" },
        { id: "17050", rind: "33" },
        { id: "17049", rind: "34" },
        { id: "17027", rind: "35" },
        { id: "17048", rind: "36" },
        { id: "17026", rind: "37" },
        { id: "17079", rind: "38" },
        { id: "16990", rind: "39" },
        { id: "17047", rind: "40" },
        { id: "16989", rind: "41" },
        { id: "17018", rind: "42" },
        { id: "17061", rind: "43" },
        { id: "17046", rind: "44" },
        { id: "17045", rind: "45" },
        { id: "17069", rind: "46" },
        { id: "17025", rind: "47" },
        { id: "17006", rind: "48" },
        { id: "17060", rind: "49" },
        { id: "17005", rind: "50" },
        { id: "17078", rind: "51" },
        { id: "17044", rind: "52" },
        { id: "17043", rind: "53" },
        { id: "17042", rind: "54" },
        { id: "17041", rind: "55" },
        { id: "17040", rind: "56" },
        { id: "17017", rind: "57" },
        { id: "17039", rind: "58" },
        { id: "17004", rind: "59" },
        { id: "17038", rind: "60" },
        { id: "17037", rind: "61" },
        { id: "17003", rind: "62" },
        { id: "17036", rind: "63" },
        { id: "16988", rind: "64" },
        { id: "16987", rind: "65" },
        { id: "17024", rind: "66" },
        { id: "17023", rind: "67" },
        { id: "17077", rind: "68" },
        { id: "16986", rind: "69" },
        { id: "16985", rind: "70" },
        { id: "17076", rind: "71" },
        { id: "16984", rind: "72" },
        { id: "17016", rind: "73" },
        { id: "17002", rind: "74" },
        { id: "17075", rind: "75" },
        { id: "17001", rind: "76" },
        { id: "17074", rind: "77" },
        { id: "17035", rind: "78" },
        { id: "17034", rind: "79" },
        { id: "17059", rind: "80" },
        { id: "17068", rind: "81" },
        { id: "17058", rind: "82" },
        { id: "17033", rind: "83" },
        { id: "17073", rind: "84" },
        { id: "17032", rind: "85" },
        { id: "17000", rind: "86" },
        { id: "17015", rind: "87" },
        { id: "17014", rind: "88" },
        { id: "17067", rind: "89" },
        { id: "17013", rind: "90" },
        { id: "17057", rind: "91" },
        { id: "17066", rind: "92" },
        { id: "17031", rind: "93" },
        { id: "16983", rind: "94" },
        { id: "16999", rind: "95" },
        { id: "17022", rind: "96" },
        { id: "17012", rind: "97" },
        { id: "16982", rind: "98" },
        { id: "17072", rind: "99" }
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

            // Check for duplicates
            if (value && enteredCodes.has(value)) {
                const duplicateMessage = `Cod duplicat: ${value} (Randurile ${enteredCodes.get(value)} și ${row.rind})`;
                showInlineError(col1, duplicateMessage); // Show inline error for duplicates
            } else if (value) {
                // Add the code to enteredCodes map with its row ID
                enteredCodes.set(value, row.rind);
                removeInlineError(col1); // Remove any existing duplicate errors
            }

            // Show error for invalid code
            if (!found && value) {
                showInlineError(col1, "Codul nu face parte din clasificator"); // Show inline error for invalid code
            } else if (found) {
                removeInlineError(col1); // Remove inline error if the code is valid
            }
        }
    });
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
