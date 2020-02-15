var x = 10;
var s = "";

//alert("Welcome to pluralsight");
console.log("Welcome to Plural Sight");

var theForm = $("#theForm");
theForm.hide();

var buyButton = $("#buyButton");
buyButton.on("click", function () {
    alert("Buying Item");
    console.log("Item bought");
});

var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("You clicked on-" + $(this).text());
})


var toggleForm = $("#ToggleForm");
var popUpForm = $(".PopUpForm");

toggleForm.on("click", function () {
    popUpForm.slideToggle(500);
});