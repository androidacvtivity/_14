var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    fM1_CAPII();
});

$(function () {
    // OnKeyPress ```````````````````````````````````````````````````````````````````````````````
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        fM1_CAPII();
    });
});


function fM1_CAPII() {

    var R10_C1 = $("#76_28_78303_10_1");
    var R10_C2 = $("#76_28_78303_10_2");
    var R10_C3 = $("#76_28_78303_10_3");
    var R10_C4 = $("#76_28_78303_10_4");
    var R10_C5 = $("#76_28_78303_10_5");
    var R10_C6 = $("#76_28_78303_10_6");
    var R10_C7 = $("#76_28_78303_10_7");
    var R10_C8 = $("#76_28_78303_10_8");
    var R10_C9 = $("#76_28_78303_10_9");
    var R10_C10 = $("#76_28_78303_10_10");
    var R10_C11 = $("#76_28_78303_10_11");
    var R10_C12 = $("#76_28_78303_10_12");

    var R20_C1 = $("#76_28_78304_20_1");
    var R20_C2 = $("#76_28_78304_20_2");
    var R20_C3 = $("#76_28_78304_20_3");
    var R20_C4 = $("#76_28_78304_20_4");
    var R20_C5 = $("#76_28_78304_20_5");
    var R20_C6 = $("#76_28_78304_20_6");
    var R20_C7 = $("#76_28_78304_20_7");
    var R20_C8 = $("#76_28_78304_20_8");
    var R20_C9 = $("#76_28_78304_20_9");
    var R20_C10 = $("#76_28_78304_20_10");
    var R20_C11 = $("#76_28_78304_20_11");
    var R20_C12 = $("#76_28_78304_20_12");

    var R30_C1 = $("#76_28_78305_30_1");
    var R30_C2 = $("#76_28_78305_30_2");
    var R30_C3 = $("#76_28_78305_30_3");
    var R30_C4 = $("#76_28_78305_30_4");
    var R30_C5 = $("#76_28_78305_30_5");
    var R30_C6 = $("#76_28_78305_30_6");
    var R30_C7 = $("#76_28_78305_30_7");
    var R30_C8 = $("#76_28_78305_30_8");
    var R30_C9 = $("#76_28_78305_30_9");
    var R30_C10 = $("#76_28_78305_30_10");
    var R30_C11 = $("#76_28_78305_30_11");
    var R30_C12 = $("#76_28_78305_30_12");

    var R40_C1 = $("#76_28_78306_40_1");
    var R40_C2 = $("#76_28_78306_40_2");
    var R40_C3 = $("#76_28_78306_40_3");
    var R40_C4 = $("#76_28_78306_40_4");
    var R40_C5 = $("#76_28_78306_40_5");
    var R40_C6 = $("#76_28_78306_40_6");
    var R40_C7 = $("#76_28_78306_40_7");
    var R40_C8 = $("#76_28_78306_40_8");
    var R40_C9 = $("#76_28_78306_40_9");
    var R40_C10 = $("#76_28_78306_40_10");
    var R40_C11 = $("#76_28_78306_40_11");
    var R40_C12 = $("#76_28_78306_40_12");

    var R50_C1 = $("#76_28_78307_50_1");
    var R50_C2 = $("#76_28_78307_50_2");
    var R50_C3 = $("#76_28_78307_50_3");
    var R50_C4 = $("#76_28_78307_50_4");
    var R50_C5 = $("#76_28_78307_50_5");
    var R50_C6 = $("#76_28_78307_50_6");
    var R50_C7 = $("#76_28_78307_50_7");
    var R50_C8 = $("#76_28_78307_50_8");
    var R50_C9 = $("#76_28_78307_50_9");
    var R50_C10 = $("#76_28_78307_50_10");
    var R50_C11 = $("#76_28_78307_50_11");
    var R50_C12 = $("#76_28_78307_50_12");

    var R60_C1 = $("#76_28_78308_60_1");
    var R60_C2 = $("#76_28_78308_60_2");
    var R60_C3 = $("#76_28_78308_60_3");
    var R60_C4 = $("#76_28_78308_60_4");
    var R60_C5 = $("#76_28_78308_60_5");
    var R60_C6 = $("#76_28_78308_60_6");
    var R60_C7 = $("#76_28_78308_60_7");
    var R60_C8 = $("#76_28_78308_60_8");
    var R60_C9 = $("#76_28_78308_60_9");
    var R60_C10 = $("#76_28_78308_60_10");
    var R60_C11 = $("#76_28_78308_60_11");
    var R60_C12 = $("#76_28_78308_60_12");

    var R70_C1 = $("#76_28_78309_70_1");
    var R70_C2 = $("#76_28_78309_70_2");
    var R70_C3 = $("#76_28_78309_70_3");
    var R70_C4 = $("#76_28_78309_70_4");
    var R70_C5 = $("#76_28_78309_70_5");
    var R70_C6 = $("#76_28_78309_70_6");
    var R70_C7 = $("#76_28_78309_70_7");
    var R70_C8 = $("#76_28_78309_70_8");
    var R70_C9 = $("#76_28_78309_70_9");
    var R70_C10 = $("#76_28_78309_70_10");
    var R70_C11 = $("#76_28_78309_70_11");
    var R70_C12 = $("#76_28_78309_70_12");

    var R80_C1 = $("#76_28_78310_80_1");
    var R80_C2 = $("#76_28_78310_80_2");
    var R80_C3 = $("#76_28_78310_80_3");
    var R80_C4 = $("#76_28_78310_80_4");
    var R80_C5 = $("#76_28_78310_80_5");
    var R80_C6 = $("#76_28_78310_80_6");
    var R80_C7 = $("#76_28_78310_80_7");
    var R80_C8 = $("#76_28_78310_80_8");
    var R80_C9 = $("#76_28_78310_80_9");
    var R80_C10 = $("#76_28_78310_80_10");
    var R80_C11 = $("#76_28_78310_80_11");
    var R80_C12 = $("#76_28_78310_80_12");

    var R90_C1 = $("#76_28_78311_90_1");
    var R90_C2 = $("#76_28_78311_90_2");
    var R90_C3 = $("#76_28_78311_90_3");
    var R90_C4 = $("#76_28_78311_90_4");
    var R90_C5 = $("#76_28_78311_90_5");
    var R90_C6 = $("#76_28_78311_90_6");
    var R90_C7 = $("#76_28_78311_90_7");
    var R90_C8 = $("#76_28_78311_90_8");
    var R90_C9 = $("#76_28_78311_90_9");
    var R90_C10 = $("#76_28_78311_90_10");
    var R90_C11 = $("#76_28_78311_90_11");
    var R90_C12 = $("#76_28_78311_90_12");

    var R100_C1 = $("#76_28_78312_100_1");
    var R100_C2 = $("#76_28_78312_100_2");
    var R100_C3 = $("#76_28_78312_100_3");
    var R100_C4 = $("#76_28_78312_100_4");
    var R100_C5 = $("#76_28_78312_100_5");
    var R100_C6 = $("#76_28_78312_100_6");
    var R100_C7 = $("#76_28_78312_100_7");
    var R100_C8 = $("#76_28_78312_100_8");
    var R100_C9 = $("#76_28_78312_100_9");
    var R100_C10 = $("#76_28_78312_100_10");
    var R100_C11 = $("#76_28_78312_100_11");
    var R100_C12 = $("#76_28_78312_100_12");

    var R110_C1 = $("#76_28_78313_110_1");
    var R110_C2 = $("#76_28_78313_110_2");
    var R110_C3 = $("#76_28_78313_110_3");
    var R110_C4 = $("#76_28_78313_110_4");
    var R110_C5 = $("#76_28_78313_110_5");
    var R110_C6 = $("#76_28_78313_110_6");
    var R110_C7 = $("#76_28_78313_110_7");
    var R110_C8 = $("#76_28_78313_110_8");
    var R110_C9 = $("#76_28_78313_110_9");
    var R110_C10 = $("#76_28_78313_110_10");
    var R110_C11 = $("#76_28_78313_110_11");
    var R110_C12 = $("#76_28_78313_110_12");

    var R120_C1 = $("#76_28_78314_120_1");
    var R120_C2 = $("#76_28_78314_120_2");
    var R120_C3 = $("#76_28_78314_120_3");
    var R120_C4 = $("#76_28_78314_120_4");
    var R120_C5 = $("#76_28_78314_120_5");
    var R120_C6 = $("#76_28_78314_120_6");
    var R120_C7 = $("#76_28_78314_120_7");
    var R120_C8 = $("#76_28_78314_120_8");
    var R120_C9 = $("#76_28_78314_120_9");
    var R120_C10 = $("#76_28_78314_120_10");
    var R120_C11 = $("#76_28_78314_120_11");
    var R120_C12 = $("#76_28_78314_120_12");

    var R160_C1 = $("#76_28_78315_160_1");
    var R160_C2 = $("#76_28_78315_160_2");
    var R160_C3 = $("#76_28_78315_160_3");
    var R160_C4 = $("#76_28_78315_160_4");
    var R160_C5 = $("#76_28_78315_160_5");
    var R160_C6 = $("#76_28_78315_160_6");
    var R160_C7 = $("#76_28_78315_160_7");
    var R160_C8 = $("#76_28_78315_160_8");
    var R160_C9 = $("#76_28_78315_160_9");
    var R160_C10 = $("#76_28_78315_160_10");
    var R160_C11 = $("#76_28_78315_160_11");
    var R160_C12 = $("#76_28_78315_160_12");




    //--------------readOnly input -----------------------
    
    R10_C1.prop("readonly", true);
    R20_C1.prop("readonly", true);
    R30_C1.prop("readonly", true);
    R40_C1.prop("readonly", true);
    R50_C1.prop("readonly", true);
    R60_C1.prop("readonly", true);
    R70_C1.prop("readonly", true);
    R80_C1.prop("readonly", true);
    R80_C1.prop("readonly", true);
    R90_C1.prop("readonly", true);
    R100_C1.prop("readonly", true);
    R110_C1.prop("readonly", true);
    R120_C1.prop("readonly", true);
    R160_C1.prop("readonly", true);

    R10_C2.prop("readonly", true);
    R10_C3.prop("readonly", true);
    R10_C4.prop("readonly", true);
    R10_C5.prop("readonly", true);
    R10_C6.prop("readonly", true);
    R10_C7.prop("readonly", true);
    R10_C8.prop("readonly", true);
    R10_C9.prop("readonly", true);
    R10_C10.prop("readonly", true);
    R10_C11.prop("readonly", true);
    R10_C11.prop("readonly", true);
    R10_C12.prop("readonly", true);



    R10_C1.val(Number(parseFloat(Number(R10_C2.val())) + parseFloat(Number(R10_C3.val())) + parseFloat(Number(R10_C4.val())) +
        parseFloat(Number(R10_C5.val())) + parseFloat(Number(R10_C6.val())) + parseFloat(Number(R10_C7.val())) + parseFloat(Number(R10_C8.val())) +
        parseFloat(Number(R10_C9.val())) + parseFloat(Number(R10_C10.val())) + parseFloat(Number(R10_C11.val())) + parseFloat(Number(R10_C12.val()))).toFixed(0));

    R20_C1.val(Number(parseFloat(Number(R20_C2.val())) + parseFloat(Number(R20_C3.val())) + parseFloat(Number(R20_C4.val())) +
        parseFloat(Number(R20_C5.val())) + parseFloat(Number(R20_C6.val())) + parseFloat(Number(R20_C7.val())) + parseFloat(Number(R20_C8.val())) +
        parseFloat(Number(R20_C9.val())) + parseFloat(Number(R20_C10.val())) + parseFloat(Number(R20_C11.val())) + parseFloat(Number(R20_C12.val()))).toFixed(0));

    R30_C1.val(Number(parseFloat(Number(R30_C2.val())) + parseFloat(Number(R30_C3.val())) + parseFloat(Number(R30_C4.val())) +
        parseFloat(Number(R30_C5.val())) + parseFloat(Number(R30_C6.val())) + parseFloat(Number(R30_C7.val())) + parseFloat(Number(R30_C8.val())) +
        parseFloat(Number(R30_C9.val())) + parseFloat(Number(R30_C10.val())) + parseFloat(Number(R30_C11.val())) + parseFloat(Number(R30_C12.val()))).toFixed(0));

    R40_C1.val(Number(parseFloat(Number(R40_C2.val())) + parseFloat(Number(R40_C3.val())) + parseFloat(Number(R40_C4.val())) +
        parseFloat(Number(R40_C5.val())) + parseFloat(Number(R40_C6.val())) + parseFloat(Number(R40_C7.val())) + parseFloat(Number(R40_C8.val())) +
        parseFloat(Number(R40_C9.val())) + parseFloat(Number(R40_C10.val())) + parseFloat(Number(R40_C11.val())) + parseFloat(Number(R40_C12.val()))).toFixed(0));

    R50_C1.val(Number(parseFloat(Number(R50_C2.val())) + parseFloat(Number(R50_C3.val())) + parseFloat(Number(R50_C4.val())) +
        parseFloat(Number(R50_C5.val())) + parseFloat(Number(R50_C6.val())) + parseFloat(Number(R50_C7.val())) + parseFloat(Number(R50_C8.val())) +
        parseFloat(Number(R50_C9.val())) + parseFloat(Number(R50_C10.val())) + parseFloat(Number(R50_C11.val())) + parseFloat(Number(R50_C12.val()))).toFixed(0));

    R60_C1.val(Number(parseFloat(Number(R60_C2.val())) + parseFloat(Number(R60_C3.val())) + parseFloat(Number(R60_C4.val())) +
        parseFloat(Number(R60_C5.val())) + parseFloat(Number(R60_C6.val())) + parseFloat(Number(R60_C7.val())) + parseFloat(Number(R60_C8.val())) +
        parseFloat(Number(R60_C9.val())) + parseFloat(Number(R60_C10.val())) + parseFloat(Number(R60_C11.val())) + parseFloat(Number(R60_C12.val()))).toFixed(0));

    R70_C1.val(Number(parseFloat(Number(R70_C2.val())) + parseFloat(Number(R70_C3.val())) + parseFloat(Number(R70_C4.val())) +
        parseFloat(Number(R70_C5.val())) + parseFloat(Number(R70_C6.val())) + parseFloat(Number(R70_C7.val())) + parseFloat(Number(R70_C8.val())) +
        parseFloat(Number(R70_C9.val())) + parseFloat(Number(R70_C10.val())) + parseFloat(Number(R70_C11.val())) + parseFloat(Number(R70_C12.val()))).toFixed(0));

    R80_C1.val(Number(parseFloat(Number(R80_C2.val())) + parseFloat(Number(R80_C3.val())) + parseFloat(Number(R80_C4.val())) +
        parseFloat(Number(R80_C5.val())) + parseFloat(Number(R80_C6.val())) + parseFloat(Number(R80_C7.val())) + parseFloat(Number(R80_C8.val())) +
        parseFloat(Number(R80_C9.val())) + parseFloat(Number(R80_C10.val())) + parseFloat(Number(R80_C11.val())) + parseFloat(Number(R80_C12.val()))).toFixed(0));

    R90_C1.val(Number(parseFloat(Number(R90_C2.val())) + parseFloat(Number(R90_C3.val())) + parseFloat(Number(R90_C4.val())) +
        parseFloat(Number(R90_C5.val())) + parseFloat(Number(R90_C6.val())) + parseFloat(Number(R90_C7.val())) + parseFloat(Number(R90_C8.val())) +
        parseFloat(Number(R90_C9.val())) + parseFloat(Number(R90_C10.val())) + parseFloat(Number(R90_C11.val())) + parseFloat(Number(R90_C12.val()))).toFixed(0));

    R100_C1.val(Number(parseFloat(Number(R100_C2.val())) + parseFloat(Number(R100_C3.val())) + parseFloat(Number(R100_C4.val())) +
        parseFloat(Number(R100_C5.val())) + parseFloat(Number(R100_C6.val())) + parseFloat(Number(R100_C7.val())) + parseFloat(Number(R100_C8.val())) +
        parseFloat(Number(R100_C9.val())) + parseFloat(Number(R100_C10.val())) + parseFloat(Number(R100_C11.val())) + parseFloat(Number(R100_C12.val()))).toFixed(0));

    R110_C1.val(Number(parseFloat(Number(R110_C2.val())) + parseFloat(Number(R110_C3.val())) + parseFloat(Number(R110_C4.val())) +
        parseFloat(Number(R110_C5.val())) + parseFloat(Number(R110_C6.val())) + parseFloat(Number(R110_C7.val())) + parseFloat(Number(R110_C8.val())) +
        parseFloat(Number(R110_C9.val())) + parseFloat(Number(R110_C10.val())) + parseFloat(Number(R110_C11.val())) + parseFloat(Number(R110_C12.val()))).toFixed(0));

    R120_C1.val(Number(parseFloat(Number(R120_C2.val())) + parseFloat(Number(R120_C3.val())) + parseFloat(Number(R120_C4.val())) +
        parseFloat(Number(R120_C5.val())) + parseFloat(Number(R120_C6.val())) + parseFloat(Number(R120_C7.val())) + parseFloat(Number(R120_C8.val())) +
        parseFloat(Number(R120_C9.val())) + parseFloat(Number(R120_C10.val())) + parseFloat(Number(R120_C11.val())) + parseFloat(Number(R120_C12.val()))).toFixed(0));

    R160_C1.val(Number(parseFloat(Number(R160_C2.val())) + parseFloat(Number(R160_C3.val())) + parseFloat(Number(R160_C4.val())) +
        parseFloat(Number(R160_C5.val())) + parseFloat(Number(R160_C6.val())) + parseFloat(Number(R160_C7.val())) + parseFloat(Number(R160_C8.val())) +
        parseFloat(Number(R160_C9.val())) + parseFloat(Number(R160_C10.val())) + parseFloat(Number(R160_C11.val())) + parseFloat(Number(R160_C12.val()))).toFixed(1));
    // in R160_C1 not calculated R160_C6 

    R10_C1.val(Number(parseFloat(Number(R20_C1.val())) + parseFloat(Number(R30_C1.val())) + parseFloat(Number(R40_C1.val())) + parseFloat(Number(R50_C1.val())) +
        parseFloat(Number(R60_C1.val())) + parseFloat(Number(R70_C1.val())) + parseFloat(Number(R80_C1.val())) + parseFloat(Number(R90_C1.val())) +
        parseFloat(Number(R100_C1.val())) + parseFloat(Number(R110_C1.val())) + parseFloat(Number(R120_C1.val()))).toFixed(0));

    R10_C2.val(Number(parseFloat(Number(R20_C2.val())) + parseFloat(Number(R30_C2.val())) + parseFloat(Number(R40_C2.val())) + parseFloat(Number(R50_C2.val())) +
        parseFloat(Number(R60_C2.val())) + parseFloat(Number(R70_C2.val())) + parseFloat(Number(R80_C2.val())) + parseFloat(Number(R90_C2.val())) +
        parseFloat(Number(R100_C2.val())) + parseFloat(Number(R110_C2.val())) + parseFloat(Number(R120_C2.val()))).toFixed(0));

    R10_C3.val(Number(parseFloat(Number(R20_C3.val())) + parseFloat(Number(R30_C3.val())) + parseFloat(Number(R40_C3.val())) + parseFloat(Number(R50_C3.val())) +
        parseFloat(Number(R60_C3.val())) + parseFloat(Number(R70_C3.val())) + parseFloat(Number(R80_C3.val())) + parseFloat(Number(R90_C3.val())) +
        parseFloat(Number(R100_C3.val())) + parseFloat(Number(R110_C3.val())) + parseFloat(Number(R120_C3.val()))).toFixed(0));

    R10_C4.val(Number(parseFloat(Number(R20_C4.val())) + parseFloat(Number(R30_C4.val())) + parseFloat(Number(R40_C4.val())) + parseFloat(Number(R50_C4.val())) +
        parseFloat(Number(R60_C4.val())) + parseFloat(Number(R70_C4.val())) + parseFloat(Number(R80_C4.val())) + parseFloat(Number(R90_C4.val())) +
        parseFloat(Number(R100_C4.val())) + parseFloat(Number(R110_C4.val())) + parseFloat(Number(R120_C4.val()))).toFixed(0));

    R10_C5.val(Number(parseFloat(Number(R20_C5.val())) + parseFloat(Number(R30_C5.val())) + parseFloat(Number(R40_C5.val())) + parseFloat(Number(R50_C5.val())) +
        parseFloat(Number(R60_C5.val())) + parseFloat(Number(R70_C5.val())) + parseFloat(Number(R80_C5.val())) + parseFloat(Number(R90_C5.val())) +
        parseFloat(Number(R100_C5.val())) + parseFloat(Number(R110_C5.val())) + parseFloat(Number(R120_C5.val()))).toFixed(0));

    R10_C6.val(Number(parseFloat(Number(R20_C6.val())) + parseFloat(Number(R30_C6.val())) + parseFloat(Number(R40_C6.val())) + parseFloat(Number(R50_C6.val())) +
        parseFloat(Number(R60_C6.val())) + parseFloat(Number(R70_C6.val())) + parseFloat(Number(R80_C6.val())) + parseFloat(Number(R90_C6.val())) +
        parseFloat(Number(R100_C6.val())) + parseFloat(Number(R110_C6.val())) + parseFloat(Number(R120_C6.val()))).toFixed(0));

    R10_C7.val(Number(parseFloat(Number(R20_C7.val())) + parseFloat(Number(R30_C7.val())) + parseFloat(Number(R40_C7.val())) + parseFloat(Number(R50_C7.val())) +
        parseFloat(Number(R60_C7.val())) + parseFloat(Number(R70_C7.val())) + parseFloat(Number(R80_C7.val())) + parseFloat(Number(R90_C7.val())) +
        parseFloat(Number(R100_C7.val())) + parseFloat(Number(R110_C7.val())) + parseFloat(Number(R120_C7.val()))).toFixed(0));

    R10_C8.val(Number(parseFloat(Number(R20_C8.val())) + parseFloat(Number(R30_C8.val())) + parseFloat(Number(R40_C8.val())) + parseFloat(Number(R50_C8.val())) +
        parseFloat(Number(R60_C8.val())) + parseFloat(Number(R70_C8.val())) + parseFloat(Number(R80_C8.val())) + parseFloat(Number(R90_C8.val())) +
        parseFloat(Number(R100_C8.val())) + parseFloat(Number(R110_C8.val())) + parseFloat(Number(R120_C8.val()))).toFixed(0));

    R10_C9.val(Number(parseFloat(Number(R20_C9.val())) + parseFloat(Number(R30_C9.val())) + parseFloat(Number(R40_C9.val())) + parseFloat(Number(R50_C9.val())) +
        parseFloat(Number(R60_C9.val())) + parseFloat(Number(R70_C9.val())) + parseFloat(Number(R80_C9.val())) + parseFloat(Number(R90_C9.val())) +
        parseFloat(Number(R100_C9.val())) + parseFloat(Number(R110_C9.val())) + parseFloat(Number(R120_C9.val()))).toFixed(0));

    R10_C10.val(Number(parseFloat(Number(R20_C10.val())) + parseFloat(Number(R30_C10.val())) + parseFloat(Number(R40_C10.val())) + parseFloat(Number(R50_C10.val())) +
        parseFloat(Number(R60_C10.val())) + parseFloat(Number(R70_C10.val())) + parseFloat(Number(R80_C10.val())) + parseFloat(Number(R90_C10.val())) +
        parseFloat(Number(R100_C10.val())) + parseFloat(Number(R110_C10.val())) + parseFloat(Number(R120_C10.val()))).toFixed(0));

    R10_C11.val(Number(parseFloat(Number(R20_C11.val())) + parseFloat(Number(R30_C11.val())) + parseFloat(Number(R40_C11.val())) + parseFloat(Number(R50_C11.val())) +
        parseFloat(Number(R60_C11.val())) + parseFloat(Number(R70_C11.val())) + parseFloat(Number(R80_C11.val())) + parseFloat(Number(R90_C11.val())) +
        parseFloat(Number(R100_C11.val())) + parseFloat(Number(R110_C11.val())) + parseFloat(Number(R120_C11.val()))).toFixed(0));

    R10_C12.val(Number(parseFloat(Number(R20_C12.val())) + parseFloat(Number(R30_C12.val())) + parseFloat(Number(R40_C12.val())) + parseFloat(Number(R50_C12.val())) +
        parseFloat(Number(R60_C12.val())) + parseFloat(Number(R70_C12.val())) + parseFloat(Number(R80_C12.val())) + parseFloat(Number(R90_C12.val())) +
        parseFloat(Number(R100_C12.val())) + parseFloat(Number(R110_C12.val())) + parseFloat(Number(R120_C12.val()))).toFixed(0));

}
