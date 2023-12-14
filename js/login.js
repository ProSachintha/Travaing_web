    var m=parseInt(localStorage.getItem('reg'));
    if(m==1){
      document.getElementById("loginbut").style.visibility="visible";
      
      document.getElementById("lblmsg").style.visibility="hidden";
    }

 function signup(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
    
}

function login(){
  var un=localStorage.getItem('username');
  var pass=localStorage.getItem('password');
  var lun=document.getElementById('lun').value;
  var lpass=document.getElementById('lpass').value;
  if(lun==un && lpass==pass){
    alert("sucess");
    window.open("dashbord.html");
  }
  else{
    alert("Invalid user name or password")
  }
}

function signin(){
    y.style.left="450px";
    x.style.left="50px";
    z.style.left="0px";
}
var x,y,z;

        x=document.getElementById("signin");
        y=document.getElementById("signup");
        z=document.getElementById("btn");

        
        
       
        function signingup(){

            





            localStorage.setItem('tripcount1',"0");
            localStorage.setItem('tripcount2',"0");
            localStorage.setItem('tripcount3',"0");
            localStorage.setItem('tripcount4',"0");
            localStorage.setItem('tripcount5',"0");
            localStorage.setItem('tripcount6',"0");
            localStorage.setItem('tripcount7',"0");
            localStorage.setItem('tripcount8',"0");
            localStorage.setItem('tripcount9',"0");
            localStorage.setItem('tripcount10',"0");
            
            localStorage.setItem('email',0);
            localStorage.setItem('repass',0);
            localStorage.setItem('uname',0);
            localStorage.setItem('pass',0);
             localStorage.setItem('reg',1);
             
            localStorage.setItem('username',document.getElementById("UName").value);
            localStorage.setItem('password',document.getElementById("pass").value);

        

       
      
      
        
     }

     var divs = new Array();
    
     divs[0] = "errUName";
     divs[1] = "errEmail";
     
     divs[2] = "errPassword";
     divs[3] = "errConfirm";
     function validate()
   {
       var inputs = new Array();
       
       inputs[0] = document.getElementById('UName').value;
       inputs[1] = document.getElementById('email').value;
       inputs[2] = document.getElementById('pass').value;
       inputs[3] = document.getElementById('confirm').value;
       var errors = new Array();
       
       errors[0] = "<span style='color:red'>Please enter your User Name name!</span>";
       errors[1] = "<span style='color:red'>Please enter your email!</span>";
       errors[2] = "<span style='color:red'>Please enter your password!</span>";
       errors[3] = "<span style='color:red'>Please confirm your password!</span>";
       for (i in inputs)
       {
         var errMessage = errors[i];
         var div = divs[i];
         if (inputs[i] == "")
           document.getElementById(div).innerHTML = errMessage;
         else if (i==1)
         {
           var atpos=inputs[i].indexOf("@");
           var dotpos=inputs[i].lastIndexOf(".");
           if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
           document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
           else
           document.getElementById(div).innerHTML = "";
           localStorage.setItem('email',1);
         }
         else if (i==3)
         {
           var first = document.getElementById('pass').value;
           var second = document.getElementById('confirm').value;
           if (second != first)
           document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
           else
            document.getElementById(div).innerHTML = "";
             localStorage.setItem('repass',1);
         }
         else
           document.getElementById(div).innerHTML = "";
           localStorage.setItem('uname',1);
           localStorage.setItem('pass',1);
           
               var c=0
              var a=parseInt(localStorage.getItem('uname'));
              var b=parseInt(localStorage.getItem('email'));
              var d=parseInt(localStorage.getItem('pass'));
              var e=parseInt(localStorage.getItem('repass'));
              c=a+b+e+d;
              if(c==4){
                document.getElementById("signupbut").style.visibility="visible";
              }else{
                document.getElementById("signupbut").style.visibility="hidden";
              }
        }
      }
 
 
         




     