
    function openit() {
        document.getElementById("idd").src='eng_professional_calc.html'
    }
    
    function check(form)
    {
     
     if(form.userid.value == "abd" && form.pswrd.value == "open")
      {
        openit()
      }
     else
     {
       alert("Error Password or Username")
      }
    }
	
	function writeit(){
		var x = form.userid.value;
		document.write( x );
	}