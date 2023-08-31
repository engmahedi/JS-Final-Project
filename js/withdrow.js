
const withdrowBtn = document.getElementById("withdrowBtn");


withdrowBtn.addEventListener("click", function () {
  
  const withdrowInput = document.getElementById("withdrowInput").value;
  console.log(withdrowInput);
  

  document.getElementById("withdrowInput").value = '';

  const balance = document.getElementById("balance").innerText;
  

  
    if (withdrowInput < balance && withdrowInput>=10){
    
      // Total Withdraw Display
      
      const withdrowAmount = document.getElementById("withdrowAmount").innerText;
      
      
      
      const totalWithdraw=Math.floor(withdrowAmount)+Math.floor(withdrowInput)
      document.getElementById("withdrowAmount").innerText = totalWithdraw;


      // Save data in Localstorage

      localStorage.setItem("totalWithdraw", totalWithdraw);

      const getWithdraw = localStorage.getItem("totalWithdraw");
      console.log(getWithdraw);
  
      // Total Amount Display
  
      
      const totalBalance = Math.floor(balance) - Math.floor(withdrowInput);
      document.getElementById("balance").innerText = totalBalance;
      
      

      // Save data in Localstorage

    localStorage.setItem("totalBalance", totalBalance);

    const getBalance = localStorage.getItem("totalBalance");
    console.log(getBalance);
  
      swal("Withdraw Sucessfull!", "Thank You", "success");
    } else {

      swal("Insufficient amount!", "Minimum 100 TK", "error");
  }
  
   
    
 
  
})
