
alert("Welcome to our website")
var name = prompt("What is your favorite car?")
alert("This is your favorite car" + name)

var Carwant = prompt("what is your fav car from these (SEDAN, Sport Car , Coupe)?")


if(Carwant == "SEDAN"){
  document.write("<p>"+ "great thing you love SEDAN car"+"</p>")
}
 else if(Carwant == "Sport Car")
{
 document.write("<div>"+"<h3>"+"Sport Car"+"</h3>"+
        "<img src='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy' >"+
      "</div>"
 )


}

else if(Carwant == "Coupe")
{
 document.write("<p>"+ "great thing you love Coupe car"+"</p>")
}

else{
  alert("sorry we don't have this car")
}