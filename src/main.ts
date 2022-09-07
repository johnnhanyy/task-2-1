import "/src/style.scss";
var themeSwitch = document.querySelector("#theme-btn");
var dark =false;
themeSwitch?.addEventListener("click", function () {
  
  if(dark===false){
    document.documentElement.style.setProperty('--dark','#ffffff');
    document.documentElement.style.setProperty('--blue','#FAFf00');
    document.documentElement.style.setProperty('--white','#272727');
    document.documentElement.style.setProperty('--grey','#D4D4D4');
    
    dark=true;
  }
  else if(dark===true){
    document.documentElement.style.setProperty('--dark','#272727');
    document.documentElement.style.setProperty('--blue','#0047ff');
    document.documentElement.style.setProperty('--white','#ffffff');
    document.documentElement.style.setProperty('--grey','#888888');
    dark=false;
  }
});
var localem =document.querySelector("#sign-btn");
localem?.addEventListener("click",function(){

  var inputValue = (<HTMLInputElement>document.getElementById('email-inp')).value;
  // alert(inputValue);
  localStorage.setItem("inputValue", inputValue.toString());
  
  

})
