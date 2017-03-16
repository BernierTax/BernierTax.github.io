	          function maximeTax(totalincome) {
	            var tax = 0;
	            var income  = totalincome;
				var personalamount = 15000 * 0.15;
				tax = tax - personalamount;
	            
	            
	            if(income > 0) {
	              if(income < 100000) {
	                 tax += income * 0.15;            
	              } else {
	                  tax += 100000 * 0.15;
	              }
	            } 
	            
	            if(income > 100000) {
	              tax += (income - 100000) * 0.25;
	              }
	              
	              if(tax < 0) {
					  tax = 0;
				  }
	              return tax;
	          }

	            
	    
	          function currentTax(totalincome) {
	            var tax = 0;
	            var income  = totalincome;
	            var personalamount = 11635 * 0.15;
				tax = tax - personalamount;
	            
	            if (income < 0) {
	              return tax;
	            }
	            
	            if(income > 0) {
	              if(income < 45916) {
	                 tax += income * 0.15;            
	              }  else {
	                 tax += 45916 * 0.15;
	              }

	            } 
	            
	            if(income > 45916) {
	              if(income < 91831) {
	                tax += (income - 45916) * 0.205;
	              } else {
	                tax += (91831-45916) * 0.205;
	              }
	            } 
	            
	            if(91831 < income) {
	              if(income < 142353) {
	                tax = tax +  (income - 91831) * 0.26;
	              } else {
	                tax += (142353 - 91831) * 0.26;
	              }
	            } 
	            
	            if (income > 142353) {
	                if(income < 202800) {
	                  tax = tax + (income - 142353) * 0.29;
	                } else {
	                  tax += (202800 - 142353) * 0.29;
	                }
	            } 
	            
	            if(income > 202800) {
	             tax = tax + (income - 202800) * 0.33; 
	            }
	            if(tax <0)
	            {
					tax = 0;
				}
	            return tax;
	            
	          }
