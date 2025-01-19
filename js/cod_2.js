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

// Store validated codes
const validatedCodes = new Set();

$(document).ready(function () {
    form = $("#formDenShort").val();
    validateNewCode(); // Call validation for new code on page load
});

$(function () {
    // Validate column when input changes
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function () {
        validateNewCode($(this).closest("tr")); // Only validate the current row
    });

    // Handle dynamically added rows and validate column
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", function () {
        validateNewCode($(this).closest("tr")); // Only validate the current row
    });
});

// Function to validate only new code in the current row
function validateNewCode(currentRow) {
    const row = currentRow || $("tr"); // If no specific row is provided, process all rows
    row.each(function () {
        const col1 = $(this).find("[data-col='1']"); // Assuming COL1 is identified by `data-col='1'`
        if (col1.length) {
            const value = col1.val().trim();

            // Skip validation if already validated
            if (validatedCodes.has(value)) {
                return;
            }

            // Mark code as validated
            validatedCodes.add(value);

            const found = codeList.find((code) => code.code === value);

            if (!found && value) {
                alert("The value entered is not a code in the list: " + value);
            } else if (found) {
                alert(
                    "The value entered is the code: " +
                    found.code +
                    ", Name: " +
                    found.name
                );
            }
        }
    });
}
