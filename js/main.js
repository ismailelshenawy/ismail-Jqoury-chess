// hide()
// show ()
// toggle()
// click()
// slideUp();
// slideDown();
// slideToggle();
// fadeIn
// fadeOut();
// fadeToggle()
// fadeTo(duration, opacity);

$(".divMain").show(2000);
// $(body).animate({ width: "100%" }, 2000);
$(".divMain").animate({ width: "100%" }, 2000);
$(".divMain").animate({height:"100vh"},3000)



$(".btn").click(function () {
    $("h1").toggle(3000)
    $(".imgChess").toggle(5000);
});

// $('div').animate({width:'100px',height:'100vh'} , 3000)

// $('div').animate({height:'100vh'} , 3000)
// $('div').animate({width:'100px'} , 3000)

// $('.mycontainer').animate({height:'100vh'},1000,function(){
//     $('h1').show(1000,
//         function(){
//             $('p').show(1000,
//                 function(){
//                     $('.col-4').slideDown(1000)
//                 }
//             )
//         }
//     )
// })

// $("h1").css({
//   backgroundColor: "red",
//   color: "blue",
// });

// $("p").css("color", "blue");
