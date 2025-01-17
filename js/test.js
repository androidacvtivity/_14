var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    f_Capitol_340_04();
});

$(function () {
    // Recalculate when inputs change
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function () {
        f_Capitol_340_04();
    });

    // Handle dynamically added rows
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", function () {
        f_Capitol_340_04();
    });
});

function f_Capitol_340_04() {
    var rowIDs = [
        { id: "17011", rind: "100" },
        { id: "16980", rind: "101" }, // Skip this row
        { id: "16981", rind: "102" },
        // Add other rows dynamically as needed
    ];

    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\."); // Escape dots in `rind`

        // Skip row 101
        if (row.rind === "101") {
            return; // Skip this iteration
        }

        // Get input elements for COL1, COL2, and COL3
        var col1 = $("#14_340_" + row.id + "_" + escapedRind + "_2");
        var col2 = $("#14_340_" + row.id + "_" + escapedRind + "_3");
        var col3 = $("#14_340_" + row.id + "_" + escapedRind + "_4");

        if (col1.length && col2.length && col3.length) {
            // Ensure COL1 is always read-only
            col1.prop("readonly", true);

            // Calculate sum for the current row
            var sum = Number(parseFloat(col2.val() || 0) + parseFloat(col3.val() || 0));

            // Update COL1 inline: If sum is zero, show empty string; otherwise, display sum
            col1.val(sum !== 0 ? sum.toFixed(0) : "");
        }
    });
}
