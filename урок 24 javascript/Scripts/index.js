$(document).ready(function (){
    $("#btn").on('click', function () {
        $(".container").html("<p>2 lvl</p>");
        $(".container").prepend(" <img src='./image/artworks-000067258250-7kaf85-t500x500.jpg' alt=''>")
        $(".container").append("<p>2 lvl</p>")
    });
});