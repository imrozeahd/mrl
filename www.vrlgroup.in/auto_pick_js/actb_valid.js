
			function getKeyCode(event)
			{
				if (! event.keyCode )
				{
					return event.which;
				}
				else
				{
					return event.keyCode;
				}

			}


/*function setKeyCode(kc,event)
{
	if(1 )
	{
		try{
		alert("ok");
		window.event.keyCode = kc;
		if (window.event.preventDefault)
			window.event.preventDefault();
			return true;
		}catch(e) {alert(e);} 
	}
}*/


			function setKeyCode(kc,event)
			{
			
				if ( ! event.keyCode  )
				{
							
				}
				else
				{
					event.keyCode = kc;
				}
			}

		/*function getnextelement(fld)
		{
			var x;
			var found = false;
			for ( x in document.forms[0].elements)
			{
				if (found == true ) return document.forms[0].elements[x]; 
				if ( document.forms[0].elements[x] == fld )
				{
					found = true;
				}
				
			} 
			return null;
		}*/


			function checkpick(field,arr,nxt,fldname) {
                var frmbkg = document.form1;        
                var str="'" +  arr + "'";        
                if (str.indexOf(field ) > -1) {    
                    document.getElementById(nxt).focus();             
                    //document.getElementById('txtself').focus();
                } else {
                    alert('String Not Found IN List');  
                    document.getElementById(nxt).focus();   
                    document.getElementById(fldname).value = "";  
                    document.getElementById(fldname).focus();  
                }
            }
            
            function checkInList(field,arr)
			{
				var v = field.value;
				var t="";
				var found=0;
				for(i=0;i<arr.length;i++)
				{
				    t = arr[i];
				    if ( t.indexOf("~") == -1  )
				        t = t;
				    else
				        t = t.substring(0,t.indexOf("~"));
				         
					if(v == t )
					{
						found = 1;
						i = arr.length;
					}
				}
				//alert ('dsd' +  v + found + arr );
				if(found == 0) {
				    //alert ('Not found');
				    return false;
				} else {
				    //alert ('found');
				    return true;
				}    
			}

			function initialfocus(field)
			{
				field.focus();
			}
			/*function focusnext(txt,event)
			{
				var t = txt.value;
				var kc = getKeyCode(event);
				if ( kc == 13 )
				{
					var nfld = getnextelement(txt);
					txt.value = t.toUpperCase();
					if ( nfld != null ) nfld.focus();
					//document.forms[0].elements[txt.tabIndex].focus();
				}
			}*/

			function focusnext(txt,event)
			{
				var t = txt.value;
				var kc = getKeyCode(event);
				if ( kc == 13 )
				{
					txt.value = t.toUpperCase();
					setKeyCode(9,event);
				}
			}


			function focusnext2(txt,event,nxt)
			{
			    var t = txt.value;
				var kc = getKeyCode(event);
				if ( kc == 13 )
				{
				    txt.value = t.toUpperCase();
			        document.getElementById(nxt).focus();
			        return false;
				}
				return true;
			}

			function ankeys(field,event,dot)
			{
				var kc = getKeyCode(event);

				if ( kc >= 48 && kc <= 57 )
				{
					return true;
				}
				else if (String.fromCharCode(kc) =='.'  && dot == true )
				{
					if (field.value.indexOf('.') == -1 )
						return true;
					else
						return false;
				}
				else if ( kc ==  8 ) // Back Space
				{
					
					return true;
				}
				else
				{
					return false;
				}
			}

			function atkeys(field,event)
			{
				var kc = getKeyCode(event);
				if ( kc >= 97 && kc <= 122 )
					return true;
				else if ( kc >= 65 && kc <= 90 )
					return true;
				else if ( kc ==  32 ) // space
					return true;
				else if ( kc ==  44 ) // ,
					return true;
				else if ( kc ==  47 ) // /
					return true;
				else if ( kc ==  45 ) // -
					return true;
				else if ( kc ==  40 || kc == 41  ) // ()
					return true;
				else if ( kc >= 48 && kc <= 57 )
					return true;
				else if ( kc ==  8 ) // Back Space
					return true;
				else if ( kc ==  9 ) // Tab
					return true;
				else if (String.fromCharCode(kc) =='.' )
					return true;
				else if (String.fromCharCode(kc) =='#' )
					return true;
				else if (String.fromCharCode(kc) =='@' )
					return true;
				else if (String.fromCharCode(kc) =='&' )
					return true;
				else if (String.fromCharCode(kc) =='%' )
					return true;
				else if (String.fromCharCode(kc) =='*' )
					return true;
				else
					return false;
			}

            function lockkeys(field,event)
			{
			        var kc = getKeyCode(event);
				    if ( kc == 13 )
				        return false;
				    else
					    return false;
			}

             function adkeys(field,event)
			{
				
				var dtmsk = field.value;
				
				var kc = getKeyCode(event);
				dtmsk = dtmsk.replace("--","");
				dtmsk = dtmsk.replace(".","");
				dtmsk = dtmsk.replace("/","");
				dtmsk = dtmsk.replace("  ","");
				if (dtmsk.length == 2){
					dtmsk = dtmsk.replace("-","");
					dtmsk = dtmsk.replace(" ","");
					dtmsk = dtmsk + "-";
				} else if (dtmsk.length == 5){
					
					dtmsk = dtmsk.replace("--","");
 					dtmsk = dtmsk.replace(" ","");
					dtmsk = dtmsk + "-20";
				}
				
				dtmsk = dtmsk.replace("--","");
				dtmsk = dtmsk.replace(".","");
				dtmsk = dtmsk.replace("/","");
				dtmsk = dtmsk.replace("  ","");
				field.value = dtmsk;
				
				
				if ( kc >= 48 && kc <= 57 )
					return true;
				else if (String.fromCharCode(kc) =='.' )
					return false;
				else if (String.fromCharCode(kc) =='-' )
					return false;
				else if (String.fromCharCode(kc) =='/' )
					return false;
				else
					return false;
				
			}
			
			function adkeys_o(field,event)
			{
				var kc = getKeyCode(event);
				if ( kc >= 48 && kc <= 57 )
					return true;
				else if (String.fromCharCode(kc) =='.' )
					return true;
				else if (String.fromCharCode(kc) =='-' )
					return true;
				else if (String.fromCharCode(kc) =='/' )
					return true;
				else if ( kc ==  8 ) // Back Space
					return false;
				else
					return false;
			}


				function checkDate(dt)
				{
					var tdt;
					var dd;
					var mm;
					var yy;
					var check;
					tdt = dt.split("-");

					dd = tdt[0];
					mm = tdt[1];
					yy = tdt[2];
					

					check = true;
				if ( mm == 1  ||  mm == 3 ||  mm == 5 ||  mm == 7 ||  mm == 8 ||  mm == 10 ||  mm == 12 )
				{
					if (dd >=1 && dd<=31 )
						check = true;
					else
						check = false;
				}
				else if ( mm == 4 || mm == 6 || mm == 9 || mm == 11 )
				{
					if (dd >=1 && dd<=30 )
						check = true;
					else
						check = false;
				}
				else if ( mm == 2 )
				{
					if ( ( yy % 4 ) == 0 )
					{
						if (dd >=1 && dd<=29 )
							check = true;
						else
							check = false;
					}
					else
					{
						if (dd >=1 && dd<=28 )
							check = true;
						else
							check = false;
					}

				}
				else
				{
					check = false;
				}
					return check;

				}



				function formatDates(field)
				{
					
					var dt =field.value;
					var tdt ;

					if (dt == "") 
						dt="00-00-0000";

					if ( dt.indexOf("-") != -1 )
					{
						tdt= dt.split("-");
						dt = tdt[0] + "-" + tdt[1] + "-" + tdt[2] ;
					}
					else if ( dt.indexOf("/") != -1 )
					{
						tdt= dt.split("/");
						dt = tdt[0] + "-" + tdt[1] + "-" + tdt[2] ;
					}
					else if ( dt.indexOf(".") != -1 )
					{
						tdt= dt.split(".");
						dt = tdt[0] + "-" + tdt[1] + "-" + tdt[2] ;
					}
					else
					{
						tdt = dt.split("");
						dt = tdt[0] + tdt[1] + "-" + tdt[2] + tdt[3] + "-" + tdt[4] + tdt[5] + tdt[6] + tdt[7] ;

					}
					
					return dt;
				}


	function roundn(num,dec) 
	{
		var numberField = num
		var rnum = num;
		var rlength = dec; // The number of decimal places to round to
		var newnumber;
		if (rnum > 8191 && rnum < 10485) 
		{
			rnum = rnum-5000;
			newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
			newnumber = newnumber+5000;
		} 
		else 
		{
			newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
		}
		
		return ( newnumber);
	}

function selectall(a,b)
    {
    var checked=false;
  
        if(a.checked)
            checked=true;
        var i=0;	 
        var v=b.length;
        for(i=0;i<v;i++)
        {
            if (!b[i].disabled)
             {
                b[i].checked=checked;
             }
        } 
        if (i==0)
        b.checked=checked;
 
    }
    
    function chkbox(a,tsk,tskon)
{
  var msg1=""
  var msg2=""
  if(tsk==1)
  {
    msg1="Activate"
	msg2="Are you sure you want to update these "+ tskon
  }
  else if(tsk==2)
  {
    msg1="DeActivate"
	msg2="Are you sure you want to Update these "+ tskon
	
  }
  else if(tsk==3)
  {
    msg1="Delete"
	msg2="WARNING! ALL RECORDS WILL BE LOST!  ARE YOU SURE?"
  }
  else if(tsk==4)
  {
    msg1="Delete"
	msg2="WARNING! ALL SELECTED FILES WILL BE LOST!  ARE YOU SURE?"
  }
   else if(tsk==5)
  {
    msg1="Delete"
	msg2="WARNING! ALL SELECTED FILES WILL BE LOST!  ARE YOU SURE?"
  }
   else if(tsk==6)
  {
    msg1="Unsubscribe"
	msg2="Are you Sure you want to Unsubscribe the Customers?"
  }
   if(tsk==7)
  {
    //msg1="Activate"
	msg2="Are you sure you want to Approve these Stations"
  }
  if(tsk==8)
  {
    msg2="Are you sure you want to Submit Quotation"
  }
  if(tsk==9)
  {
    msg2="Are you sure you want to Send P.O"
  }
  if (tsk==10)
  {
    msg2="Are You sure to Add to Float"
  }
  
  flag=0;
  var v=a.length;
  for(i=0;i<v;i++)
  {
    if(a[i].checked)
    {
      flag=flag+1;		  
    }
  }
  if ((flag==0) && (a.checked))
   flag++;
    
  if(flag==0)
  {
	alert("You must choose Atleast One Record ");
	return false;
  }
  else
  { 
	if(confirm(msg2))
 	  return true;
 	else
	  return false;
  }
}