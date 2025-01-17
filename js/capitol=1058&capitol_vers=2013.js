function sumCap1058_Rind010() {
    var rowIDs = [
        { id: "82440", rind: "10722.1.1" },
        { id: "82441", rind: "10722.2.1" },
        { id: "82442", rind: "10722.2.2" },
        { id: "82443", rind: "10723.1.1" },
        { id: "82444", rind: "10723.2.1" },
        { id: "82445", rind: "10723.3.1" },
        { id: "82446", rind: "10723.4.1" },
        { id: "82447", rind: "10724.1.1" },
        { id: "82448", rind: "10731.1.1" },
        { id: "82449", rind: "10731.1.2" },
        { id: "82450", rind: "10731.1.3" },
        { id: "82451", rind: "10731.2.1" },
        { id: "82452", rind: "10731.2.2" },
        { id: "82453", rind: "10731.2.3" },
        { id: "82454", rind: "10731.3.1" },
        { id: "82455", rind: "10732.1.1" },
        { id: "82456", rind: "10732.1.2" },
        { id: "82457", rind: "10732.2.1" },
        { id: "82458", rind: "10732.2.2" },
        { id: "82459", rind: "10732.2.3" },
        { id: "82460", rind: "10732.3.1" },
        { id: "82461", rind: "10732.4.1" },
        { id: "82462", rind: "10732.5.1" },
        { id: "82463", rind: "10732.5.2" },
        { id: "82464", rind: "10732.6.1" },
        { id: "82465", rind: "10732.6.2" },
        { id: "82466", rind: "10732.6.3" },
        { id: "82467", rind: "10732.7.1" },
        { id: "82468", rind: "10732.7.2" },
        { id: "82469", rind: "10732.7.3" },
        { id: "82470", rind: "10811.1.1" },
        { id: "82471", rind: "10811.2.1" },
        { id: "82472", rind: "10811.3.1" },
        { id: "82473", rind: "10812.1.1" },
        { id: "82474", rind: "10812.2.1" },
        { id: "82475", rind: "10821.1.1" },
        { id: "82476", rind: "10831.1.1" },
        { id: "82477", rind: "10841.1.1" },
        { id: "82478", rind: "10911.1.1" },
        { id: "82479", rind: "10912.1.1" },
        { id: "82480", rind: "10912.1.2" },
        { id: "82481", rind: "10912.1.3" },
        { id: "82482", rind: "10912.1.4" },
        { id: "82483", rind: "10913.1.1" },
        { id: "82484", rind: "10913.2.1" },
        { id: "82485", rind: "10914.1.1" },
        { id: "82486", rind: "10914.1.2" },
        { id: "82487", rind: "10914.1.3" },
        { id: "82488", rind: "10914.1.4" },
        { id: "82489", rind: "10915.1.1" },
        { id: "82490", rind: "10916.1.1" },
        { id: "82491", rind: "10923.1.1" },
        { id: "82492", rind: "10923.1.2" },
        { id: "82493", rind: "11012.1.1" },
        { id: "82494", rind: "11012.2.1" },
        { id: "82495", rind: "11013.1.1" },
        { id: "82496", rind: "11014.1.1" },
        { id: "82497", rind: "11014.1.2" },
        { id: "82498", rind: "11015.1.1" },
        { id: "82499", rind: "11015.1.2" },
        { id: "82500", rind: "11015.2.1" },
        { id: "82501", rind: "11022.1.1" },
        { id: "82502", rind: "11031.1.1" },
        { id: "82503", rind: "11031.2.1" },
        { id: "82504", rind: "11031.3.1" },
        { id: "82505", rind: "11031.4.1" },
        { id: "82506", rind: "11032.1.1" },
        { id: "82507", rind: "11032.2.1" },
        { id: "82508", rind: "11041.1.1" },
        { id: "82509", rind: "11041.2.1" },
        { id: "82510", rind: "11041.3.1" },
        { id: "82511", rind: "10112.1.1" },
        { id: "82512", rind: "10112.1.2" },
        { id: "82513", rind: "10112.1.3" },
        { id: "82514", rind: "10113.1.1" },
        { id: "82515", rind: "10114.1.1" },
        { id: "82516", rind: "10114.1.2" },
        { id: "82517", rind: "10114.2.1" },
        { id: "82518", rind: "10114.3.1" },
        { id: "82519", rind: "10211.1.1" },
        { id: "82520", rind: "10211.2.1" },
        { id: "82521", rind: "10211.2.2" },
        { id: "82522", rind: "10212.1.1" },
        { id: "82523", rind: "10212.1.2" },
        { id: "82524", rind: "10212.1.3" },
        { id: "82525", rind: "10213.1.1" },
        { id: "82526", rind: "10213.2.1" },
        { id: "82527", rind: "10213.3.1" },
        { id: "82528", rind: "10214.1.1" },
        { id: "82529", rind: "10214.2.1" },
        { id: "82530", rind: "10214.3.1" },
        { id: "82531", rind: "10215.1.1" },
        { id: "82532", rind: "10215.2.1" },
        { id: "82533", rind: "10215.2.2" },
        { id: "82534", rind: "10215.3.1" },
        { id: "82535", rind: "10215.3.2" },
        { id: "82536", rind: "10215.4.1" },
        { id: "82537", rind: "10215.5.1" },
        { id: "82538", rind: "10215.6.1" },
        { id: "82539", rind: "10215.7.1" },
        { id: "82540", rind: "10215.7.2" },
        { id: "82541", rind: "10221.1.1" },
        { id: "82542", rind: "10322.1.1" },
        { id: "82543", rind: "10411.1.1" },
        { id: "82544", rind: "10411.2.1" },
        { id: "82545", rind: "10412.1.1" },
        { id: "82546", rind: "10412.2.1" },
        { id: "82547", rind: "10413.1.1" },
        { id: "82548", rind: "10413.2.1" },
        { id: "82549", rind: "10413.3.1" },
        { id: "82550", rind: "10413.4.1" },
        { id: "82551", rind: "10414.1.1" },
        { id: "82552", rind: "10414.2.1" },
        { id: "82553", rind: "10415.1.1" },
        { id: "82554", rind: "10416.1.1" },
        { id: "82555", rind: "10416.2.1" },
        { id: "82556", rind: "10416.2.2" },
        { id: "82557", rind: "10416.3.1" },
        { id: "82558", rind: "10421.1.1" },
        { id: "82559", rind: "10421.1.2" },
        { id: "82560", rind: "10421.1.3" },
        { id: "82561", rind: "10421.2.1" },
        { id: "82562", rind: "10521.1.1" },
        { id: "82563", rind: "10521.2.1" },
        { id: "82564", rind: "10521.3.1" },
        { id: "82565", rind: "10532.1.1" },
        { id: "82566", rind: "10533.1.1" },
        { id: "82567", rind: "10611.1.1" },
        { id: "82568", rind: "10611.2.1" },
        { id: "82569", rind: "10611.3.1" },
        { id: "82570", rind: "10611.4.1" },
        { id: "82571", rind: "10711.1.1" },
        { id: "82572", rind: "10711.2.1" },
        { id: "82573", rind: "10713.1.1" },
        { id: "82574", rind: "10713.2.1" },
        { id: "82575", rind: "10713.3.1" },
        { id: "82956", rind: "10713.4.1" },
        { id: "82957", rind: "10713.5.1" },
        { id: "82958", rind: "10713.6.1" },
        { id: "82959", rind: "10713.7.1" },
        { id: "82576", rind: "10714.1.1" },
        { id: "82577", rind: "10714.2.1" },
        { id: "82578", rind: "10714.3.1" },
        { id: "82579", rind: "10714.4.1" },
        { id: "82580", rind: "10714.5.1" },
        { id: "82581", rind: "10714.6.1" },
        { id: "82582", rind: "10714.7.1" },
        { id: "82583", rind: "10714.8.1" },
        { id: "82584", rind: "10714.9.1" },
        { id: "82585", rind: "10714.10.1" },
        { id: "82586", rind: "10715.1.1" },
        { id: "82587", rind: "10715.2.1" },
        { id: "82588", rind: "10715.3.1" },
        { id: "82589", rind: "10715.4.1" },
        { id: "82590", rind: "10715.5.1" },
        { id: "82591", rind: "10715.6.1" },
        { id: "82592", rind: "10715.7.1" },
        { id: "82593", rind: "10715.8.1" },
        { id: "82594", rind: "10715.8.2" },
        { id: "82595", rind: "10715.8.3" },
        { id: "82596", rind: "10715.9.1" },
        { id: "82597", rind: "10715.10.1" },
        { id: "82598", rind: "10716.1.1" },
        { id: "82599", rind: "10716.2.1" },
        { id: "82600", rind: "10716.3.1" },
        { id: "82601", rind: "10716.4.1" },
        { id: "82602", rind: "10716.5.1" },
        { id: "82603", rind: "10716.6.1" },
        { id: "82604", rind: "10716.7.1" },
        { id: "82605", rind: "10721.1.1" },
        { id: "82606", rind: "10721.2.1" },
        { id: "82607", rind: "10721.3.1" },
        { id: "82608", rind: "10721.3.2" },
        { id: "82609", rind: "10721.3.3" },
        { id: "82610", rind: "10721.4.1" },
        { id: "82611", rind: "10721.5.1" }    ];
    
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


function sumCap1058_Rind020() {
    var rowIDs = [
        { id: "82612", rind: "20722.1.1" },
        { id: "82613", rind: "20722.2.1" },
        { id: "82614", rind: "20722.2.2" },
        { id: "82615", rind: "20723.1.1" },
        { id: "82616", rind: "20723.2.1" },
        { id: "82617", rind: "20723.3.1" },
        { id: "82618", rind: "20723.4.1" },
        { id: "82619", rind: "20724.1.1" },
        { id: "82620", rind: "20731.1.1" },
        { id: "82621", rind: "20731.1.2" },
        { id: "82622", rind: "20731.1.3" },
        { id: "82623", rind: "20731.2.1" },
        { id: "82624", rind: "20731.2.2" },
        { id: "82625", rind: "20731.2.3" },
        { id: "82626", rind: "20731.3.1" },
        { id: "82627", rind: "20732.1.1" },
        { id: "82628", rind: "20732.1.2" },
        { id: "82629", rind: "20732.2.1" },
        { id: "82630", rind: "20732.2.2" },
        { id: "82631", rind: "20732.2.3" },
        { id: "82632", rind: "20732.3.1" },
        { id: "82633", rind: "20732.4.1" },
        { id: "82634", rind: "20732.5.1" },
        { id: "82635", rind: "20732.5.2" },
        { id: "82636", rind: "20732.6.1" },
        { id: "82637", rind: "20732.6.2" },
        { id: "82638", rind: "20732.6.3" },
        { id: "82639", rind: "20732.7.1" },
        { id: "82640", rind: "20732.7.2" },
        { id: "82641", rind: "20732.7.3" },
        { id: "82642", rind: "20811.1.1" },
        { id: "82643", rind: "20811.2.1" },
        { id: "82644", rind: "20811.3.1" },
        { id: "82645", rind: "20812.1.1" },
        { id: "82646", rind: "20812.2.1" },
        { id: "82647", rind: "20821.1.1" },
        { id: "82648", rind: "20831.1.1" },
        { id: "82649", rind: "20841.1.1" },
        { id: "82650", rind: "20911.1.1" },
        { id: "82651", rind: "20912.1.1" },
        { id: "82652", rind: "20912.1.2" },
        { id: "82653", rind: "20912.1.3" },
        { id: "82654", rind: "20912.1.4" },
        { id: "82655", rind: "20913.1.1" },
        { id: "82656", rind: "20913.2.1" },
        { id: "82657", rind: "20914.1.1" },
        { id: "82658", rind: "20914.1.2" },
        { id: "82659", rind: "20914.1.3" },
        { id: "82660", rind: "20914.1.4" },
        { id: "82661", rind: "20915.1.1" },
        { id: "82662", rind: "20916.1.1" },
        { id: "82663", rind: "20923.1.1" },
        { id: "82664", rind: "20923.1.2" },
        { id: "82665", rind: "21012.1.1" },
        { id: "82666", rind: "21012.2.1" },
        { id: "82667", rind: "21013.1.1" },
        { id: "82668", rind: "21014.1.1" },
        { id: "82669", rind: "21014.1.2" },
        { id: "82670", rind: "21015.1.1" },
        { id: "82671", rind: "21015.1.2" },
        { id: "82672", rind: "21015.2.1" },
        { id: "82673", rind: "21022.1.1" },
        { id: "82674", rind: "21031.1.1" },
        { id: "82675", rind: "21031.2.1" },
        { id: "82676", rind: "21031.3.1" },
        { id: "82677", rind: "21031.4.1" },
        { id: "82678", rind: "21032.1.1" },
        { id: "82679", rind: "21032.2.1" },
        { id: "82680", rind: "21041.1.1" },
        { id: "82681", rind: "21041.2.1" },
        { id: "82682", rind: "21041.3.1" },
        { id: "82683", rind: "20112.1.1" },
        { id: "82684", rind: "20112.1.2" },
        { id: "82685", rind: "20112.1.3" },
        { id: "82686", rind: "20113.1.1" },
        { id: "82687", rind: "20114.1.1" },
        { id: "82688", rind: "20114.1.2" },
        { id: "82689", rind: "20114.2.1" },
        { id: "82690", rind: "20114.3.1" },
        { id: "82691", rind: "20211.1.1" },
        { id: "82692", rind: "20211.2.1" },
        { id: "82693", rind: "20211.2.2" },
        { id: "82694", rind: "20212.1.1" },
        { id: "82695", rind: "20212.1.2" },
        { id: "82696", rind: "20212.1.3" },
        { id: "82697", rind: "20213.1.1" },
        { id: "82698", rind: "20213.2.1" },
        { id: "82699", rind: "20213.3.1" },
        { id: "82700", rind: "20214.1.1" },
        { id: "82701", rind: "20214.2.1" },
        { id: "82702", rind: "20214.3.1" },
        { id: "82703", rind: "20215.1.1" },
        { id: "82704", rind: "20215.2.1" },
        { id: "82705", rind: "20215.2.2" },
        { id: "82706", rind: "20215.3.1" },
        { id: "82707", rind: "20215.3.2" },
        { id: "82708", rind: "20215.4.1" },
        { id: "82709", rind: "20215.5.1" },
        { id: "82710", rind: "20215.6.1" },
        { id: "82711", rind: "20215.7.1" },
        { id: "82712", rind: "20215.7.2" },
        { id: "82713", rind: "20221.1.1" },
        { id: "82714", rind: "20322.1.1" },
        { id: "82715", rind: "20411.1.1" },
        { id: "82716", rind: "20411.2.1" },
        { id: "82717", rind: "20412.1.1" },
        { id: "82718", rind: "20412.2.1" },
        { id: "82719", rind: "20413.1.1" },
        { id: "82720", rind: "20413.2.1" },
        { id: "82721", rind: "20413.3.1" },
        { id: "82722", rind: "20413.4.1" },
        { id: "82723", rind: "20414.1.1" },
        { id: "82724", rind: "20414.2.1" },
        { id: "82725", rind: "20415.1.1" },
        { id: "82726", rind: "20416.1.1" },
        { id: "82727", rind: "20416.2.1" },
        { id: "82728", rind: "20416.2.2" },
        { id: "82729", rind: "20416.3.1" },
        { id: "82730", rind: "20421.1.1" },
        { id: "82731", rind: "20421.1.2" },
        { id: "82732", rind: "20421.1.3" },
        { id: "82733", rind: "20421.2.1" },
        { id: "82734", rind: "20521.1.1" },
        { id: "82735", rind: "20521.2.1" },
        { id: "82736", rind: "20521.3.1" },
        { id: "82737", rind: "20532.1.1" },
        { id: "82738", rind: "20533.1.1" },
        { id: "82739", rind: "20611.1.1" },
        { id: "82740", rind: "20611.2.1" },
        { id: "82741", rind: "20611.3.1" },
        { id: "82742", rind: "20611.4.1" },
        { id: "82743", rind: "20711.1.1" },
        { id: "82744", rind: "20711.2.1" },
        { id: "82745", rind: "20713.1.1" },
        { id: "82746", rind: "20713.2.1" },
        { id: "82747", rind: "20713.3.1" },
        { id: "82960", rind: "20713.4.1" },
        { id: "82961", rind: "20713.5.1" },
        { id: "82962", rind: "20713.6.1" },
        { id: "82963", rind: "20713.7.1" },
        { id: "82748", rind: "20714.1.1" },
        { id: "82749", rind: "20714.2.1" },
        { id: "82750", rind: "20714.3.1" },
        { id: "82751", rind: "20714.4.1" },
        { id: "82752", rind: "20714.5.1" },
        { id: "82753", rind: "20714.6.1" },
        { id: "82754", rind: "20714.7.1" },
        { id: "82755", rind: "20714.8.1" },
        { id: "82756", rind: "20714.9.1" },
        { id: "82757", rind: "20714.10.1" },
        { id: "82758", rind: "20715.1.1" },
        { id: "82759", rind: "20715.2.1" },
        { id: "82760", rind: "20715.3.1" },
        { id: "82761", rind: "20715.4.1" },
        { id: "82762", rind: "20715.5.1" },
        { id: "82763", rind: "20715.6.1" },
        { id: "82764", rind: "20715.7.1" },
        { id: "82765", rind: "20715.8.1" },
        { id: "82766", rind: "20715.8.2" },
        { id: "82767", rind: "20715.8.3" },
        { id: "82768", rind: "20715.9.1" },
        { id: "82769", rind: "20715.10.1" },
        { id: "82770", rind: "20716.1.1" },
        { id: "82771", rind: "20716.2.1" },
        { id: "82772", rind: "20716.3.1" },
        { id: "82773", rind: "20716.4.1" },
        { id: "82774", rind: "20716.5.1" },
        { id: "82775", rind: "20716.6.1" },
        { id: "82776", rind: "20716.7.1" },
        { id: "82777", rind: "20721.1.1" },
        { id: "82778", rind: "20721.2.1" },
        { id: "82779", rind: "20721.3.1" },
        { id: "82780", rind: "20721.3.2" },
        { id: "82781", rind: "20721.3.3" },
        { id: "82782", rind: "20721.4.1" },
        { id: "82783", rind: "20721.5.1" }];

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
    $("#50_1058_81611_020_1").val(sumCol1 !== 0 ? sumCol1 : "").prop("readonly", true);
    $("#50_1058_81611_020_2").val(sumCol2 !== 0 ? sumCol2 : "").prop("readonly", true);
    $("#50_1058_81611_020_3").val(sumCol3 !== 0 ? sumCol3 : "").prop("readonly", true);
    $("#50_1058_81611_020_4").val(sumCol4 !== 0 ? sumCol4 : "").prop("readonly", true);
    $("#50_1058_81611_020_5").val(sumCol5 !== 0 ? sumCol5 : "").prop("readonly", true);
    $("#50_1058_81611_020_6").val(sumCol6 !== 0 ? sumCol6 : "").prop("readonly", true);
    $("#50_1058_81611_020_7").val(sumCol7 !== 0 ? sumCol7 : "").prop("readonly", true);
    $("#50_1058_81611_020_8").val(sumCol8 !== 0 ? sumCol8 : "").prop("readonly", true);
    $("#50_1058_81611_020_9").val(sumCol9 !== 0 ? sumCol9 : "").prop("readonly", true);
    $("#50_1058_81611_020_10").val(sumCol10 !== 0 ? sumCol10 : "").prop("readonly", true);
    $("#50_1058_81611_020_11").val(sumCol11 !== 0 ? sumCol11 : "").prop("readonly", true);
    $("#50_1058_81611_020_12").val(sumCol12 !== 0 ? sumCol12 : "").prop("readonly", true);  // Set as readonly
    $("#50_1058_81611_020_13").val(sumCol13 !== 0 ? sumCol13 : "").prop("readonly", true);
    $("#50_1058_81611_020_14").val(sumCol14 !== 0 ? sumCol14 : "").prop("readonly", true);
    $("#50_1058_81611_020_15").val(sumCol15 !== 0 ? sumCol15 : "").prop("readonly", true);
    $("#50_1058_81611_020_16").val(sumCol16 !== 0 ? sumCol16 : "").prop("readonly", true);
    $("#50_1058_81611_020_17").val(sumCol17 !== 0 ? sumCol17 : "").prop("readonly", true);

}



function sumCap1058_Rind030() {
    var rowIDs = [
        { id: "82784", rind: "30722.1.1" },
        { id: "82785", rind: "30722.2.1" },
        { id: "82786", rind: "30722.2.2" },
        { id: "82787", rind: "30723.1.1" },
        { id: "82788", rind: "30723.2.1" },
        { id: "82789", rind: "30723.3.1" },
        { id: "82790", rind: "30723.4.1" },
        { id: "82791", rind: "30724.1.1" },
        { id: "82792", rind: "30731.1.1" },
        { id: "82793", rind: "30731.1.2" },
        { id: "82794", rind: "30731.1.3" },
        { id: "82795", rind: "30731.2.1" },
        { id: "82796", rind: "30731.2.2" },
        { id: "82797", rind: "30731.2.3" },
        { id: "82798", rind: "30731.3.1" },
        { id: "82799", rind: "30732.1.1" },
        { id: "82800", rind: "30732.1.2" },
        { id: "82801", rind: "30732.2.1" },
        { id: "82802", rind: "30732.2.2" },
        { id: "82803", rind: "30732.2.3" },
        { id: "82804", rind: "30732.3.1" },
        { id: "82805", rind: "30732.4.1" },
        { id: "82806", rind: "30732.5.1" },
        { id: "82807", rind: "30732.5.2" },
        { id: "82808", rind: "30732.6.1" },
        { id: "82809", rind: "30732.6.2" },
        { id: "82810", rind: "30732.6.3" },
        { id: "82811", rind: "30732.7.1" },
        { id: "82812", rind: "30732.7.2" },
        { id: "82813", rind: "30732.7.3" },
        { id: "82814", rind: "30811.1.1" },
        { id: "82815", rind: "30811.2.1" },
        { id: "82816", rind: "30811.3.1" },
        { id: "82817", rind: "30812.1.1" },
        { id: "82818", rind: "30812.2.1" },
        { id: "82819", rind: "30821.1.1" },
        { id: "82820", rind: "30831.1.1" },
        { id: "82821", rind: "30841.1.1" },
        { id: "82822", rind: "30911.1.1" },
        { id: "82823", rind: "30912.1.1" },
        { id: "82824", rind: "30912.1.2" },
        { id: "82825", rind: "30912.1.3" },
        { id: "82826", rind: "30912.1.4" },
        { id: "82827", rind: "30913.1.1" },
        { id: "82828", rind: "30913.2.1" },
        { id: "82829", rind: "30914.1.1" },
        { id: "82830", rind: "30914.1.2" },
        { id: "82831", rind: "30914.1.3" },
        { id: "82832", rind: "30914.1.4" },
        { id: "82833", rind: "30915.1.1" },
        { id: "82834", rind: "30916.1.1" },
        { id: "82835", rind: "30923.1.1" },
        { id: "82836", rind: "30923.1.2" },
        { id: "82837", rind: "31012.1.1" },
        { id: "82838", rind: "31012.2.1" },
        { id: "82839", rind: "31013.1.1" },
        { id: "82840", rind: "31014.1.1" },
        { id: "82841", rind: "31014.1.2" },
        { id: "82842", rind: "31015.1.1" },
        { id: "82843", rind: "31015.1.2" },
        { id: "82844", rind: "31015.2.1" },
        { id: "82845", rind: "31022.1.1" },
        { id: "82846", rind: "31031.1.1" },
        { id: "82847", rind: "31031.2.1" },
        { id: "82848", rind: "31031.3.1" },
        { id: "82849", rind: "31031.4.1" },
        { id: "82850", rind: "31032.1.1" },
        { id: "82851", rind: "31032.2.1" },
        { id: "82852", rind: "31041.1.1" },
        { id: "82853", rind: "31041.2.1" },
        { id: "82854", rind: "31041.3.1" },
        { id: "82855", rind: "30112.1.1" },
        { id: "82856", rind: "30112.1.2" },
        { id: "82857", rind: "30112.1.3" },
        { id: "82858", rind: "30113.1.1" },
        { id: "82859", rind: "30114.1.1" },
        { id: "82860", rind: "30114.1.2" },
        { id: "82861", rind: "30114.2.1" },
        { id: "82862", rind: "30114.3.1" },
        { id: "82863", rind: "30211.1.1" },
        { id: "82864", rind: "30211.2.1" },
        { id: "82865", rind: "30211.2.2" },
        { id: "82866", rind: "30212.1.1" },
        { id: "82867", rind: "30212.1.2" },
        { id: "82868", rind: "30212.1.3" },
        { id: "82869", rind: "30213.1.1" },
        { id: "82870", rind: "30213.2.1" },
        { id: "82871", rind: "30213.3.1" },
        { id: "82872", rind: "30214.1.1" },
        { id: "82873", rind: "30214.2.1" },
        { id: "82874", rind: "30214.3.1" },
        { id: "82875", rind: "30215.1.1" },
        { id: "82876", rind: "30215.2.1" },
        { id: "82877", rind: "30215.2.2" },
        { id: "82878", rind: "30215.3.1" },
        { id: "82879", rind: "30215.3.2" },
        { id: "82880", rind: "30215.4.1" },
        { id: "82881", rind: "30215.5.1" },
        { id: "82882", rind: "30215.6.1" },
        { id: "82883", rind: "30215.7.1" },
        { id: "82884", rind: "30215.7.2" },
        { id: "82885", rind: "30221.1.1" },
        { id: "82886", rind: "30322.1.1" },
        { id: "82887", rind: "30411.1.1" },
        { id: "82888", rind: "30411.2.1" },
        { id: "82889", rind: "30412.1.1" },
        { id: "82890", rind: "30412.2.1" },
        { id: "82891", rind: "30413.1.1" },
        { id: "82892", rind: "30413.2.1" },
        { id: "82893", rind: "30413.3.1" },
        { id: "82894", rind: "30413.4.1" },
        { id: "82895", rind: "30414.1.1" },
        { id: "82896", rind: "30414.2.1" },
        { id: "82897", rind: "30415.1.1" },
        { id: "82898", rind: "30416.1.1" },
        { id: "82899", rind: "30416.2.1" },
        { id: "82900", rind: "30416.2.2" },
        { id: "82901", rind: "30416.3.1" },
        { id: "82902", rind: "30421.1.1" },
        { id: "82903", rind: "30421.1.2" },
        { id: "82904", rind: "30421.1.3" },
        { id: "82905", rind: "30421.2.1" },
        { id: "82906", rind: "30521.1.1" },
        { id: "82907", rind: "30521.2.1" },
        { id: "82908", rind: "30521.3.1" },
        { id: "82909", rind: "30532.1.1" },
        { id: "82910", rind: "30533.1.1" },
        { id: "82911", rind: "30611.1.1" },
        { id: "82912", rind: "30611.2.1" },
        { id: "82913", rind: "30611.3.1" },
        { id: "82914", rind: "30611.4.1" },
        { id: "82915", rind: "30711.1.1" },
        { id: "82916", rind: "30711.2.1" },
        { id: "82917", rind: "30713.1.1" },
        { id: "82918", rind: "30713.2.1" },
        { id: "82919", rind: "30713.3.1" },
        { id: "82964", rind: "30713.4.1" },
        { id: "82965", rind: "30713.5.1" },
        { id: "82966", rind: "30713.6.1" },
        { id: "82967", rind: "30713.7.1" },
        { id: "82920", rind: "30714.1.1" },
        { id: "82921", rind: "30714.2.1" },
        { id: "82922", rind: "30714.3.1" },
        { id: "82923", rind: "30714.4.1" },
        { id: "82924", rind: "30714.5.1" },
        { id: "82925", rind: "30714.6.1" },
        { id: "82926", rind: "30714.7.1" },
        { id: "82927", rind: "30714.8.1" },
        { id: "82928", rind: "30714.9.1" },
        { id: "82929", rind: "30714.10.1" },
        { id: "82930", rind: "30715.1.1" },
        { id: "82931", rind: "30715.2.1" },
        { id: "82932", rind: "30715.3.1" },
        { id: "82933", rind: "30715.4.1" },
        { id: "82934", rind: "30715.5.1" },
        { id: "82935", rind: "30715.6.1" },
        { id: "82936", rind: "30715.7.1" },
        { id: "82937", rind: "30715.8.1" },
        { id: "82938", rind: "30715.8.2" },
        { id: "82939", rind: "30715.8.3" },
        { id: "82940", rind: "30715.9.1" },
        { id: "82941", rind: "30715.10.1" },
        { id: "82942", rind: "30716.1.1" },
        { id: "82943", rind: "30716.2.1" },
        { id: "82944", rind: "30716.3.1" },
        { id: "82945", rind: "30716.4.1" },
        { id: "82946", rind: "30716.5.1" },
        { id: "82947", rind: "30716.6.1" },
        { id: "82948", rind: "30716.7.1" },
        { id: "82949", rind: "30721.1.1" },
        { id: "82950", rind: "30721.2.1" },
        { id: "82951", rind: "30721.3.1" },
        { id: "82952", rind: "30721.3.2" },
        { id: "82953", rind: "30721.3.3" },
        { id: "82954", rind: "30721.4.1" },
        { id: "82955", rind: "30721.5.1" }];

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
    $("#50_1058_81543_030_1").val(sumCol1 !== 0 ? sumCol1 : "").prop("readonly", true);
    $("#50_1058_81543_030_2").val(sumCol2 !== 0 ? sumCol2 : "").prop("readonly", true);
    $("#50_1058_81543_030_3").val(sumCol3 !== 0 ? sumCol3 : "").prop("readonly", true);
    $("#50_1058_81543_030_4").val(sumCol4 !== 0 ? sumCol4 : "").prop("readonly", true);
    $("#50_1058_81543_030_5").val(sumCol5 !== 0 ? sumCol5 : "").prop("readonly", true);
    $("#50_1058_81543_030_6").val(sumCol6 !== 0 ? sumCol6 : "").prop("readonly", true);
    $("#50_1058_81543_030_7").val(sumCol7 !== 0 ? sumCol7 : "").prop("readonly", true);
    $("#50_1058_81543_030_8").val(sumCol8 !== 0 ? sumCol8 : "").prop("readonly", true);
    $("#50_1058_81543_030_9").val(sumCol9 !== 0 ? sumCol9 : "").prop("readonly", true);
    $("#50_1058_81543_030_10").val(sumCol10 !== 0 ? sumCol10 : "").prop("readonly", true);
    $("#50_1058_81543_030_11").val(sumCol11 !== 0 ? sumCol11 : "").prop("readonly", true);
    $("#50_1058_81543_030_12").val(sumCol12 !== 0 ? sumCol12 : "").prop("readonly", true);  // Set as readonly
    $("#50_1058_81543_030_13").val(sumCol13 !== 0 ? sumCol13 : "").prop("readonly", true);
    $("#50_1058_81543_030_14").val(sumCol14 !== 0 ? sumCol14 : "").prop("readonly", true);
    $("#50_1058_81543_030_15").val(sumCol15 !== 0 ? sumCol15 : "").prop("readonly", true);
    $("#50_1058_81543_030_16").val(sumCol16 !== 0 ? sumCol16 : "").prop("readonly", true);
    $("#50_1058_81543_030_17").val(sumCol17 !== 0 ? sumCol17 : "").prop("readonly", true);

}

function f_Capitol_1058() {
    // Execute the custom functions
    sumCap1058_Rind010();
    sumCap1058_Rind020();
    sumCap1058_Rind030();

 }

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1058();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1058);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1058);
});
