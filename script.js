function validateform(){  
    var name=document.myform.name.value;  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");
    var number = document.getElementById('number');
    var password=document.myform.password.value;
    var password=document.myform.password.value;  
    var confirmpassword=document.myform.confirmpassword.value;    
    
    if (name.length<5){  
      alert("Full Name must be at least 5 characters long ");  
      return false;  
    
    }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");  
      return false;  
    }else if (  number.value.length!=10){  
      alert("required 10 digits Phone number.");  
      return false;
    }else if(password.length<8){
      alert("Password must be at least 8 characters long.");  
      return false;  
      }else if(password==confirmpassword){
        return true;
      }
      else{  
      alert("password Not same, Pls enter same and strog password");  
      return false;  
      }  
    }