// In this case work but in you case not work

var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    f_Capitol_340_04();
});

$(function () {
    // OnKeyPress ```````````````````````````````````````````````````````````````````````````````
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        f_Capitol_340_04();
    });

    // Use event delegation to handle dynamically added rows
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", function (e) {
        f_Capitol_340_04();
    });
});


function f_Capitol_340_04() {

    var R100_C1 = $("#14_340_17011_100_2");
    var R100_C2 = $("#14_340_17011_100_3");
    var R100_C3 = $("#14_340_17011_100_4");
   




    //--------------readOnly input -----------------------

    R100_C1.prop("readonly", true);
   



    R100_C1.val(Number(parseFloat(Number(R100_C2.val())) + parseFloat(Number(R100_C3.val()))).toFixed(0));

   

}