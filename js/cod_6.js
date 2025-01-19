// Define the list of codes and names directly in the JavaScript file
const codeList = [
    { code: "111", name: "Științe ale educației" },
    { code: "211", name: "Arte audiovizuale" },
    { code: "212", name: "Design" },
    { code: "213", name: "Arte vizuale" },
    { code: "215", name: "Artă muzicală" },
    { code: "219", name: "Studii culturale și management artistic" },
    { code: "220", name: "Antropologie" },
    { code: "221", name: "Teologie" },
    { code: "222", name: "Istorie și arheologie" },
    { code: "223", name: "Filozofie" },
    { code: "231", name: "Filologie" },
    { code: "312", name: "Științe politice" },
    { code: "313", name: "Psihologie" },
    { code: "321", name: "Științe ale comunicării" },
    { code: "400", name: "Științe administrative" },
    { code: "411", name: "Științe economice" },
    { code: "421", name: "Drept" },
    { code: "500", name: "Științe chimice" },
    { code: "511", name: "Științe biologice" },
    { code: "521", name: "Științe ale mediului" },
    { code: "532", name: "Științe ale pământului" },
    { code: "541", name: "Științe matematice" },
    { code: "611", name: "Tehnologii ale informației și comunicațiilor" },
    { code: "710", name: "Inginerie și management" },
    { code: "711", name: "Inginerie chimică și biotehnologii" },
    { code: "712", name: "Tehnologii de protecție a mediului" },
    { code: "713", name: "Energetică și inginerie electrică" },
    { code: "714", name: "Inginerie electronică" },
    { code: "715", name: "Mecanică" },
    { code: "721", name: "Tehnologii de fabricare și prelucrare" },
    { code: "731", name: "Arhitectură" },
    { code: "732", name: "Inginerie geodezică" },
    { code: "733", name: "Inginerie civilă" },
    { code: "811", name: "Științe agricole" },
    { code: "821", name: "Silvicultură" },
    { code: "841", name: "Medicină veterinară" },
    { code: "910", name: "Sănătate publică" },
    { code: "911", name: "Stomatologie" },
    { code: "912", name: "Medicină" },
    { code: "916", name: "Farmacie" },
    { code: "1000", name: "Științe ale sportului" },
    { code: "1031", name: "Științe militare" },
    { code: "1039", name: "Informații, ordine publică și securitate națională" }
];

// Set up real-time validation for current row
$(document).ready(function () {
    setupRealTimeValidation();
});

// Function to set up real-time validation for current row
function setupRealTimeValidation() {
    $("input[data-col='1']").on("input", function () {
        const col1 = $(this); // The current input field
        const row = col1.closest("tr"); // Get the current row
        const rowID = row.attr("data-id"); // Get the row ID
        const value = col1.val().trim(); // Get the entered value

        // Validate the code for the current row only
        validateCode(value, rowID);
    });
}

// Function to validate a single code in the current row
function validateCode(value, rowID) {
    const found = codeList.find((code) => code.code === value);

    if (!found && value) {
        alert(`Row ${rowID}: The value entered is not a code in the list: ${value}`);
    } else if (found) {
        alert(`Row ${rowID}: The value entered is the code: ${found.code}, Name: ${found.name}`);
    }
}
