

// Annual Rev Calculator
    function calculateTotal() {
      var getMyGoal = document.getElementById("myGoal").value;
      var getMyCogs = document.getElementById("myCogs").value;
      var getMyExp = document.getElementById("myExp").value;
      var getMyAsp = document.getElementById("myAsp").value;
      var getMyStr = document.getElementById("myStr").value;
      var getMyFees = document.getElementById("myFees").value;

      var annualGoal =
        Math.round((parseInt(getMyGoal) + (parseInt(getMyCogs) * 12) + (parseInt(getMyExp) * 12)) * (100 / (100 - (parseInt(getMyFees)))));

      var dolSales = Math.round((parseInt(annualGoal) * (1 / 365)));
      var numSales = Math.round((parseInt(dolSales) * (1 / (getMyAsp))));
      var dolList = Math.round((parseInt(dolSales) * (100 / getMyStr)));
      var numList = Math.round((parseInt(numSales) * (100 / (getMyStr))));

      document.getElementById("annualRev").innerHTML = "Annual Sales $" + annualGoal;
      document.getElementById("dolSales").innerHTML = "Average of $" + dolSales + " daily sales.";
      document.getElementById("numSales").innerHTML = "Average of " + numSales + " sales.";
      document.getElementById("dolList").innerHTML = "Need Average Daily Listing Value of $" + dolList;
      document.getElementById("numList").innerHTML = "Need Average Daily Listing Quantity # " + numList;

    }
