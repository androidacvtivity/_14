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

$(document).ready(function () {
    form = $("#formDenShort").val();
    f_Capitol_340_Sum("COL2", "COL3", "COL4"); // Calculate COL1 = COL2 + COL3
    validateColumnOne(); // Call the validation function on page load
});

$(function () {
    // Recalculate sums and validate column on input changes
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function () {
        f_Capitol_340_Sum("COL2", "COL3", "COL4");
        validateColumnOne(); // Validate after input changes
    });

    // Handle dynamically added rows and validate column
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", function () {
        f_Capitol_340_Sum("COL2", "COL3", "COL4");
        validateColumnOne(); // Validate after input changes
    });
});

// Generic function to calculate COLn = COLm + COLo
function f_Capitol_340_Sum(targetCol, col1, col2) {
    var rowIDs = [
        { id: "17011", rind: "100" },
        { id: "16980", rind: "101" },
        { id: "16981", rind: "102" },
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
        // Add other rows dynamically as needed
    ];

    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\."); // Escape dots in `rind`

        // Get input elements dynamically
        var target = $("#14_340_" + row.id + "_" + escapedRind + "_" + targetCol.replace("COL", ""));
        var source1 = $("#14_340_" + row.id + "_" + escapedRind + "_" + col1.replace("COL", ""));
        var source2 = $("#14_340_" + row.id + "_" + escapedRind + "_" + col2.replace("COL", ""));

        if (target.length && source1.length && source2.length) {
            target.prop("readonly", true);
            var sum = parseInt(source1.val() || 0) + parseInt(source2.val() || 0);
            target.val(sum !== 0 ? sum : "");
        }
    });
}

// Function to validate column one values
function validateColumnOne() {
    var rowIDs = [
        { id: "17011", rind: "100" },
        { id: "16980", rind: "101" },
        { id: "16981", rind: "102" },
        { id: "17071", rind: "01" },
        { id: "17065", rind: "02" },
        { id: "17064", rind: "03" },
        // Add additional rows as needed
    ];

    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\.");
        var col1 = $("#14_340_" + row.id + "_" + escapedRind + "_1");

        if (col1.length) {
            var value = col1.val().trim();
            var found = codeList.find(function (code) {
                return code.code === value;
            });

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
