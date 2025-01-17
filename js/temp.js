function sumCap1058_Rind010() {
    var rowIDs = [
        { id: "82440", rind: "10722.1.1" },
        { id: "82441", rind: "10722.2.1" },
        // Add all rows as required...
        { id: "82611", rind: "10721.5.1" }
    ];

    // Declare variables to store the sums for 17 columns
    var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0, sumCol4 = 0, sumCol5 = 0,
        sumCol6 = 0, sumCol7 = 0, sumCol8 = 0, sumCol9 = 0, sumCol10 = 0,
        sumCol11 = 0, sumCol12 = 0, sumCol13 = 0, sumCol14 = 0, sumCol15 = 0,
        sumCol16 = 0, sumCol17 = 0;

    // Loop through each row
    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\.");  // Escape the dots in `rind`

        // Sum the values for each column (1 to 17)
        sumCol1 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_1").val()) || 0;
        sumCol2 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_2").val()) || 0;
        sumCol3 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_3").val()) || 0;
        sumCol4 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_4").val()) || 0;
        sumCol5 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_5").val()) || 0;
        sumCol6 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_6").val()) || 0;
        sumCol7 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_7").val()) || 0;
        sumCol8 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_8").val()) || 0;
        sumCol9 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_9").val()) || 0;
        sumCol10 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_10").val()) || 0;
        sumCol11 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_11").val()) || 0;

        // Calculate sum for column 12 as sum of columns 4, 6, 8, and 10
        var col12 = (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_4").val()) || 0)
            + (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_6").val()) || 0)
            + (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_8").val()) || 0)
            + (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_10").val()) || 0);

        // Update the value of column 12 and set it to readonly
        $("#50_1058_" + row.id + "_" + escapedRind + "_12").val(col12).prop("readonly", true);

        sumCol12 += col12; // Add the calculated column 12 value to the total sum
        sumCol13 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_13").val()) || 0;
       // Cap.I(Col.14) = Sum(Col.5, 7, 9, 11)(Rînd.*)
       
        
        
        // Calculate sum for column 12 as sum of columns 4, 6, 8, and 10
        var col14 = (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_5").val()) || 0)
            + (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_7").val()) || 0)
            + (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_9").val()) || 0)
            + (parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_11").val()) || 0);

        // Update the value of column 12 and set it to readonly
        $("#50_1058_" + row.id + "_" + escapedRind + "_14").val(col14).prop("readonly", true);

        sumCol14 += col14; // Add the calculated column 12 value to the total sum
        
        sumCol15 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_15").val()) || 0;
        sumCol16 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_16").val()) || 0;
        sumCol17 += parseInt($("#50_1058_" + row.id + "_" + escapedRind + "_17").val()) || 0;
    });

    // Set the calculated values into the respective readonly fields for row 010
    $("#50_1058_81545_010_1").val(sumCol1 !== 0 ? sumCol1 : "").prop("readonly", true);
    $("#50_1058_81545_010_2").val(sumCol2 !== 0 ? sumCol2 : "").prop("readonly", true);
    $("#50_1058_81545_010_3").val(sumCol3 !== 0 ? sumCol3 : "").prop("readonly", true);
    $("#50_1058_81545_010_4").val(sumCol4 !== 0 ? sumCol4 : "").prop("readonly", true);
    $("#50_1058_81545_010_5").val(sumCol5 !== 0 ? sumCol5 : "").prop("readonly", true);
    $("#50_1058_81545_010_6").val(sumCol6 !== 0 ? sumCol6 : "").prop("readonly", true);
    $("#50_1058_81545_010_7").val(sumCol7 !== 0 ? sumCol7 : "").prop("readonly", true);
    $("#50_1058_81545_010_8").val(sumCol8 !== 0 ? sumCol8 : "").prop("readonly", true);
    $("#50_1058_81545_010_9").val(sumCol9 !== 0 ? sumCol9 : "").prop("readonly", true);
    $("#50_1058_81545_010_10").val(sumCol10 !== 0 ? sumCol10 : "").prop("readonly", true);
    $("#50_1058_81545_010_11").val(sumCol11 !== 0 ? sumCol11 : "").prop("readonly", true);
    $("#50_1058_81545_010_12").val(sumCol12 !== 0 ? sumCol12 : "").prop("readonly", true);  // Set as readonly
    $("#50_1058_81545_010_13").val(sumCol13 !== 0 ? sumCol13 : "").prop("readonly", true);
    $("#50_1058_81545_010_14").val(sumCol14 !== 0 ? sumCol14 : "").prop("readonly", true);
    $("#50_1058_81545_010_15").val(sumCol15 !== 0 ? sumCol15 : "").prop("readonly", true);
    $("#50_1058_81545_010_16").val(sumCol16 !== 0 ? sumCol16 : "").prop("readonly", true);
    $("#50_1058_81545_010_17").val(sumCol17 !== 0 ? sumCol17 : "").prop("readonly", true);
}

function f_Capitol_1058() {
    // Execute the custom functions
    sumCap1058_Rind010();
}

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1058();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1058);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1058);
});
