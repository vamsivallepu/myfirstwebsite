function convert(){
    var input=document.getElementById("input").value;
var from=document.getElementById("from").value;
var to=document.getElementById("to").value;
var result=0;
if (from==="centimetres"){
    if (to==="inches"){
        result=input*0.3937007874015748;
    }else if (to==="millimetres"){
        result=input*10;
    }else if(to==="metres"){
        result=input*0.01;
    }else if(to==="kilometres"){
        result=input/100000;
    }else if(to==="micrometres"){
        result=input*10000;
    }else if(to==="nanometres"){
        result=input*10000000;
    }else if(to==="miles"){
        result=input*0.0000062137;
    }else if(to==="foot"){
        result=input/30.48;
    }else{
        result=input;
    }
}
if (from==="millimetres"){
if (to==="inches"){
result=input/25.4;
}else if (to==="centimetres"){
result=input/10;
}else if(to==="metres"){
result=input/1000;
}else if(to==="kilometres"){
result=input*0.000001;
}else if(to==="micrometres"){
result=input*1000;
}else if(to==="nanometres"){
result=input*1000000;
}else if(to==="miles"){
result=input/1609344;
}else if(to==="foot"){
result=input/305;
}else{
result=input;
}
}
else if (from==="inches"){
if (to==="millimetres"){
result=input*25.4;
}else if (to==="centimetres"){
result=input*2.54;
}else if(to==="metres"){
result=input/39.37;
}else if(to==="kilometres"){
result=input/39370;
}else if(to==="micrometres"){
result=input*25400;
}else if(to==="nanometres"){
result=input*25400000;
}else if(to==="miles"){
result=input/63360; }
else if(to==="foot"){
result=input/12;
}else{
result=input;
}
}
else if (from==="metres"){
if (to==="millimetres"){
result=input*1000;
}else if (to==="centimetres"){
result=input*100;
}else if(to==="inches"){
result=input*39.37;
}else if(to==="kilometres"){
result=input/1000;
}else if(to==="micrometres"){
result=input*1000000;
}else if(to==="nanometres"){
result=input*1000000000;
}else if(to==="miles"){
result=input/1609; }
else if(to==="foot"){
result=input*3.281;
}else{
result=input;
}
}
else if (from==="nanometres"){
if (to==="millimetres"){
result=input*0.000001;
}else if (to==="centimetres"){
result=input*Math.pow(10,-7);
}else if(to==="inches"){
result=input*3.937*Math.pow(10,-8);
}else if(to==="kilometres"){
result=input*Math.pow(10,-12);
}else if(to==="micrometres"){
result=input/1000;
}else if(to==="metres"){
result=input*Math.pow(10,-9);
}else if(to==="miles"){
result=input*6.2137*Math.pow(10,-13); }
else if(to==="foot"){
result=input*(3.208*(Math.pow(10,-9)));
}else{
result=input;
}
}
else if (from==="micrometres"){
if (to==="millimetres"){
result=input/1000;
}else if (to==="centimetres"){
result=input/10000;
}else if(to==="inches"){
result=input/25400;
}else if(to==="kilometres"){
result=input/Math.pow(10,9);
}else if(to==="nanometres"){
result=input*1000;
}else if(to==="metres"){
result=input/Math.pow(10,6);
}else if(to==="miles"){
result=input/(1.609*Math.pow(10,9)); 
}else if(to==="foot"){
result=input/304800;
}else{
result=input;
} 
}
else if (from==="kilometres"){
if (to==="millimetres"){
result=input*Math.pow(10,6);
}else if (to==="centimetres"){
result=input*100000;
}else if(to==="inches"){
result=input*39370;
}else if(to==="micrometres"){
result=input*Math.pow(10,9);
}else if(to==="nanometres"){
result=input*Math.pow(10,12);
}else if(to==="metres"){
result=input*1000;
}else if(to==="miles"){
result=input*0.621371; 
}else if(to==="foot"){
result=input*3281;
}else{
result=input;
} 
}
else if (from==="miles"){
if (to==="millimetres"){
result=input*1.609*Math.pow(10,6);
}else if (to==="centimetres"){
result=input*160934;
}else if(to==="inches"){
result=input*63360;
}else if(to==="micrometres"){
result=input*1.609*Math.pow(10,9);
}else if(to==="nanometres"){
result=input*1.609*Math.pow(10,12);
}else if(to==="metres"){
result=input*1609.34;
}else if(to==="kilometres"){
result=input*1.60934; 
}else if(to==="foot"){
result=input*5280;
}else{
result=input;
} 
}

else if (from==="foot"){
if (to==="millimetres"){
result=input*304.8;
}else if (to==="centimetres"){
result=input*30.48;
}else if(to==="inches"){
result=input*12;
}else if(to==="micrometres"){
result=input*304800;
}else if(to==="nanometres"){
result=input*3.048*Math.pow(10,8);
}else if(to==="metres"){
result=input*0.3048;
}else if(to==="kilometres"){
result=input*0.0003048; 
}else if(to==="miles"){
result=input/5280;
}else{
result=input;
} 
}
if (String(result).length>13){
    alert("your answer is:"+result)
    result="To large"
}
if (!input){
    alert("please enter a valid input")
    result="error"
}

if (from==="0" || to==="0"){
    alert("please select From and To units")
    result="error"
}
document.getElementById("output").innerHTML=result;
}

//--------------------------------------------------//


function convert2(){
    var input2=document.getElementById("input2").value;
    var from2=document.getElementById("from2").value;
    var to2=document.getElementById("to2").value;
    var result2=0;
    if (from2==="celsius"){
        if (to2==="fahrenheit"){
            result2=(input2*(9/5))+32
        }else if (to2==="kelvin"){
            result2=parseInt(input2)+273.15
        }else{
            result2=input2
        }
    }
    else if (from2==="fahrenheit"){
        if (to2==="celsius"){
            result2=(input2-32)*(5/9)
        }else if (to2==="kelvin"){
            result2=((input2-32)*(5/9))+273.15
        }else{
            result2=input2
        }  
    }
    else if (from2==="kelvin"){
        if(to2=="celsius"){
            result2=input2-273.15
        }else if(to2==="fahrenheit"){
            result2=(input2-273.15)*(9/5) + 32 
        }else{
            result2=input2
        }
    }
  if(!input2){
      alert("please enter a valid input");
      result2="error"
  }
  if (from2==="0" || to2==="0"){
      alert("please select From and To units");
  } document.getElementById("output2").innerHTML=result2
}
//----------------------------------------------------

function convert3(){
    var input3=document.getElementById("input3").value
    var from3=document.getElementById("from3").value
    var to3=document.getElementById("to3").value
    var result3=0
    
    if (from3==="kilometres"){
        if (to3==="metres"){
            result3=input3*1e+6
        }else if(to3==="foot"){
            result3=input3*(1.076e+7)
        }else if(to3==="inches"){
            result3=input3*1.55e+9
        }else if(to3==="hectare"){
            result3=input3*100
        }else if(to3==="acre"){
            result3=input3*247.105
        }else{
            result3=input3
        }
    }
    
    else if (from3==="metres"){
        if (to3==="kilometres"){
            result3=input3*1e-6
        }else if(to3==="foot"){
            result3=input3*10.7639
        }else if(to3==="inches"){
            result3=input3*1550
        }else if(to3==="hectare"){
            result3=input3*1e-4
        }else if(to3==="acre"){
            result3=input3*0.0002471
        }else{
            result3=input3
        }
        }
    else if (from3==="foot"){
        if (to3==="kilometres"){
            result3=input3*9.2903e-8
        }else if(to3==="metres"){
            result3=input3/10.764
        }else if(to3==="inches"){
            result3=input3*144
        }else if(to3==="hectare"){
            result3=input3*9.2903e-6
        }else if(to3==="acre"){
            result3=input3/43560
        }else{
            result3=input3
        }
        }
    else if (from3==="inches"){
        if (to3==="kilometres"){
            result3=input3*6.4516e-10
        }else if(to3==="metres"){
            result3=input3/1550
        }else if(to3==="foot"){
            result3=input3/144
        }else if(to3==="hectare"){
            result3=input3*6.4516e-8
        }else if(to3==="acre"){
            result3=input3*1.5942e-7
        }else{
            result3=input3
        }
        }
        else if (from3==="hectare"){
        if (to3==="kilometres"){
            result3=input3/100
        }else if(to3==="metres"){
            result3=input3*10000
        }else if(to3==="foot"){
            result3=input3*107639
        }else if(to3==="inches"){
            result3=input3*1.55e+7
        }else if(to3==="acre"){
            result3=input3*2.47105
        }else{
            result3=input3
        }
        }
        else if (from3==="acre"){
        if (to3==="kilometres"){
            result3=input3/247.105
        }else if(to3==="metres"){
            result3=input3*4046.86
        }else if(to3==="foot"){
            result3=input3*43560
        }else if(to3==="inches"){
            result3=input3*6.273e+6
        }else if(to3==="hectare"){
            result3=input3*0.404686
        }else{
            result3=input3
        }
        }

if(!input3){
      alert("please enter a valid input");
      result3="error"
  }
  if (from3==="0"|| to3==="0"){
      alert("please select From and To units");
  }
  if (String(result3).length>13){
    alert("your answer is:"+result3)
    result3="To large"
} 

    document.getElementById("output3").innerHTML=result3
}

//----------------------------------------------------

function convert4(){
    var input4=document.getElementById("input4").value
    var from4=document.getElementById("from4").value 
    var to4=document.getElementById("to4").value 
    var result4=0
    
    if (from4==="kilogram"){
        if (to4=="gram"){
            result4=input4*1000
        }else if (to4==="milligram"){
            result4=input4*1e6
        }else if (to4==="microgram"){
            result4=input4*1e9
        }else if (to4==="tonn"){
            result4=input4/1000
        }else if (to4==="pound"){
            result4=input4*2.20462
        }else if (to4==="ounce"){
            result4=input4*35.274
        }else{
            result4=input4
        }
    }
    
    else if (from4==="gram"){
        if (to4=="kilogram"){
            result4=input4/1000
        }else if (to4==="milligram"){
            result4=input4*1000
        }else if (to4==="microgram"){
            result4=input4*1e+6
        }else if (to4==="tonn"){
            result4=input4*1e-6
        }else if (to4==="pound"){
            result4=input4/453.593
        }else if (to4==="ounce"){
            result4=input4/28.349
        }else{
            result4=input4
        }
    }
    
    else if (from4==="milligram"){
        if (to4=="kilogram"){
            result4=input4*1e-6
        }else if (to4==="gram"){
            result4=input4/1000
        }else if (to4==="microgram"){
            result4=input4*1000
        }else if (to4==="tonn"){
            result4=input4*1e-9
        }else if (to4==="pound"){
            result4=input4/453593
        }else if (to4==="ounce"){
            result4=input4/28349
        }else{
            result4=input4
        }
    }

    else if (from4==="microgram"){
        if (to4=="kilogram"){
            result4=input4*1e-9
        }else if (to4==="gram"){
            result4=input4*1e-6
        }else if (to4==="milligram"){
            result4=input4/1000
        }else if (to4==="tonn"){
            result4=input4*1e-12
        }else if (to4==="pound"){
            result4=input4*2.2046e-9
        }else if (to4==="ounce"){
            result4=input4*3.5274e-8
        }else{
            result4=input4
        }
    }
    
    else if (from4==="tonn"){
        if (to4=="kilogram"){
            result4=input4*1000
        }else if (to4==="gram"){
            result4=input4*1e+6
        }else if (to4==="milligram"){
            result4=input4*1e+9
        }else if (to4==="microgram"){
            result4=input4*1e+12
        }else if (to4==="pound"){
            result4=input4*2204.62
        }else if (to4==="ounce"){
            result4=input4*35274
        }else{
            result4=input4
        }
    }
    
    else if (from4==="pound"){
        if (to4=="kilogram"){
            result4=input4*0.453592
        }else if (to4==="gram"){
            result4=input4*453.592
        }else if (to4==="milligram"){
            result4=input4*453592
        }else if (to4==="microgram"){
            result4=input4*4.536e+8
        }else if (to4==="tonn"){
            result4=input4/2205
        }else if (to4==="ounce"){
            result4=input4*16
        }else{
            result4=input4
        }
    }
    
    else if (from4==="ounce"){
        if (to4=="kilogram"){
            result4=input4/35.274
        }else if (to4==="gram"){
            result4=input4*28.3495
        }else if (to4==="milligram"){
            result4=input4*28349.5
        }else if (to4==="microgram"){
            result4=input4*2.835e+7
        }else if (to4==="tonn"){
            result4=input4/35274
        }else if (to4==="pound"){
            result4=input4/16
        }else{
            result4=input4
        }
    }
    
    if(!input4){
      alert("please enter a valid input");
      result4="error"
  }
  if (from4==="0"|| to4==="0"){
      alert("please select From and To units");
  }
  if (String(result4).length>13){
    alert("your answer is:"+result4)
    result4="To large"
} 
    document.getElementById("output4").innerHTML=result4
}

//----------------------------------------------------

function convert5(){
    var input5=document.getElementById("input5").value 
    var from5=document.getElementById("from5").value
    var to5=document.getElementById("to5").value
    var result5=0
    
    if (from5==="nanosecond"){
        if (to5==="microsecond"){
            result5=input5/1000
        }else if (to5==="millisecond"){
            result5=input5*1e-6
        }else if (to5==="second"){
            result5=input5*1e-9
        }else if (to5==="minute"){
            result5=input5*1.6667e-11
        }else if (to5==="hour"){
            result5=input5*2.7778e-13
        }else if (to5==="day"){
            result5=input5*1.1574e-14
        }else if (to5==="week"){
            result5=input5*1.6534e-15
        }else if (to5==="month"){
            result5=input5*3.8052e-16
        }else if (to5==="year"){
            result5=input5*3.171e-17
        }else if (to5==="decade"){
            result5=input5*3.171e-18
        }else if (to5==="century"){
            result5=input5*3.171e-19
        }else{
            result5=input5
        }
    }
    
    else if (from5==="microsecond"){
        if (to5==="nanosecond"){
            result5=input5*1000
        }else if (to5==="millisecond"){
            result5=input5/1000
        }else if (to5==="second"){
            result5=input5*1e-6
        }else if (to5==="minute"){
            result5=input5*1.6667e-8
        }else if (to5==="hour"){
            result5=input5*2.7778e-10
        }else if (to5==="day"){
            result5=input5*1.1574e-11
        }else if (to5==="week"){
            result5=input5*1.6534e-12
        }else if (to5==="month"){
            result5=input5*3.8052e-13
        }else if (to5==="year"){
            result5=input5*3.171e-14
        }else if (to5==="decade"){
            result5=input5*3.171e-14
        }else if (to5==="century"){
            result5=input5*3.171e-16
        }else{
            result5=input5
        }
    }
    
    else if (from5==="millisecond"){
        if (to5==="nanosecond"){
            result5=input5*1e+6
        }else if (to5==="microsecond"){
            result5=input5*1000
        }else if (to5==="second"){
            result5=input5/1000
        }else if (to5==="minute"){
            result5=input5*1.6667e-5
        }else if (to5==="hour"){
            result5=input5*2.7778e-7
        }else if (to5==="day"){
            result5=input5*1.1574e-8
        }else if (to5==="week"){
            result5=input5*1.6534e-9
        }else if (to5==="month"){
            result5=input5*3.8052e-10
        }else if (to5==="year"){
            result5=input5*3.171e-11
        }else if (to5==="decade"){
            result5=input5*3.171e-12
        }else if (to5==="century"){
            result5=input5*3.171e-13
        }else{
            result5=input5
        }
    }
    
    else if (from5==="second"){
        if (to5==="nanosecond"){
            result5=input5*1e+9
        }else if (to5==="microsecond"){
            result5=input5*1e+6
        }else if (to5==="millisecond"){
            result5=input5*1000
        }else if (to5==="minute"){
            result5=input5/60
        }else if (to5==="hour"){
            result5=input5/3600
        }else if (to5==="day"){
            result5=input5*1.1574e-5
        }else if (to5==="week"){
            result5=input5*1.6534e-6
        }else if (to5==="month"){
            result5=input5*3.8052e-7
        }else if (to5==="year"){
            result5=input5*3.171e-8
        }else if (to5==="decade"){
            result5=input5*3.171e-9
        }else if (to5==="century"){
            result5=input5*3.171e-10
        }else{
            result5=input5
        }
    }
    
    else if (from5==="minute"){
        if (to5==="nanosecond"){
            result5=input5*6e+10
        }else if (to5==="microsecond"){
            result5=input5*6e+7
        }else if (to5==="millisecond"){
            result5=input5*60000
        }else if (to5==="second"){
            result5=input5*60
        }else if (to5==="hour"){
            result5=input5/60
        }else if (to5==="day"){
            result5=input5/1440
        }else if (to5==="week"){
            result5=input5*9.9206e-5
        }else if (to5==="month"){
            result5=input5*2.2831e-5
        }else if (to5==="year"){
            result5=input5*1.9026e-6
        }else if (to5==="decade"){
            result5=input5*1.9026e-7
        }else if (to5==="century"){
            result5=input5*1.9026e-8
        }else{
            result5=input5
        }
    }
    
    else if (from5==="hour"){
        if (to5==="nanosecond"){
            result5=input5*3.6e+12
        }else if (to5==="microsecond"){
            result5=input5*3.6e+9
        }else if (to5==="millisecond"){
            result5=input5*3.6e+6
        }else if (to5==="second"){
            result5=input5*3600
        }else if (to5==="minute"){
            result5=input5*60
        }else if (to5==="day"){
            result5=input5/24
        }else if (to5==="week"){
            result5=input5/168
        }else if (to5==="month"){
            result5=input5/730
        }else if (to5==="year"){
            result5=input5/8760
        }else if (to5==="decade"){
            result5=input5/87600
        }else if (to5==="century"){
            result5=input5/876000
        }else{
            result5=input5
        }
    }
    
    else if (from5==="day"){
        if (to5==="nanosecond"){
            result5=input5*8.64e+13
        }else if (to5==="microsecond"){
            result5=input5*8.64e+10
        }else if (to5==="millisecond"){
            result5=input5*8.64e+7
        }else if (to5==="second"){
            result5=input5*86400
        }else if (to5==="minute"){
            result5=input5*1440
        }else if (to5==="hour"){
            result5=input5*24
        }else if (to5==="week"){
            result5=input5/7
        }else if (to5==="month"){
            result5=input5/30.417
        }else if (to5==="year"){
            result5=input5/365
        }else if (to5==="decade"){
            result5=input5/3650
        }else if (to5==="century"){
            result5=input5/36500
        }else{
            result5=input5
        }
    }
    
    else if (from5==="week"){
        if (to5==="nanosecond"){
            result5=input5*6.048e+14
        }else if (to5==="microsecond"){
            result5=input5*6.048e+11
        }else if (to5==="millisecond"){
            result5=input5*6.048e+8
        }else if (to5==="second"){
            result5=input5*604800
        }else if (to5==="minute"){
            result5=input5*10080
        }else if (to5==="hour"){
            result5=input5*168
        }else if (to5==="day"){
            result5=input5*7
        }else if (to5==="month"){
            result5=input5/4.345
        }else if (to5==="year"){
            result5=input5/52.143
        }else if (to5==="decade"){
            result5=input5/521.43
        }else if (to5==="century"){
            result5=input5/5214.3
        }else{
            result5=input5
        }
    }
    
      else if (from5==="month"){
        if (to5==="nanosecond"){
            result5=input5*2.628e+15
        }else if (to5==="microsecond"){
            result5=input5*2.628e+12
        }else if (to5==="millisecond"){
            result5=input5*2.628e+9
        }else if (to5==="second"){
            result5=input5*2.628e+6
        }else if (to5==="minute"){
            result5=input5*43800
        }else if (to5==="hour"){
            result5=input5*730.001
        }else if (to5==="day"){
            result5=input5*30.147
        }else if (to5==="week"){
            result5=input5*4.345
        }else if (to5==="year"){
            result5=input5/12
        }else if (to5==="decade"){
            result5=input5/120
        }else if (to5==="century"){
            result5=input5/1200
        }else{
            result5=input5
        }
    }
    
    else if (from5==="year"){
        if (to5==="nanosecond"){
            result5=input5*3.154e+16
        }else if (to5==="microsecond"){
            result5=input5*3.154e+13
        }else if (to5==="millisecond"){
            result5=input5*3.154e+10
        }else if (to5==="second"){
            result5=input5*3.154e+7
        }else if (to5==="minute"){
            result5=input5*525600
        }else if (to5==="hour"){
            result5=input5*8760
        }else if (to5==="day"){
            result5=input5*365
        }else if (to5==="week"){
            result5=input5*52.1429
        }else if (to5==="month"){
            result5=input5*12
        }else if (to5==="decade"){
            result5=input5/10
        }else if (to5==="century"){
            result5=input5/100
        }else{
            result5=input5
        }
    }
    
    else if (from5==="decade"){
        if (to5==="nanosecond"){
            result5=input5*3.154e+17
        }else if (to5==="microsecond"){
            result5=input5*3.154e+14
        }else if (to5==="millisecond"){
            result5=input5*3.154e+11
        }else if (to5==="second"){
            result5=input5*3.154e+8
        }else if (to5==="minute"){
            result5=input5*5.256e+6
        }else if (to5==="hour"){
            result5=input5*87600
        }else if (to5==="day"){
            result5=input5*3650
        }else if (to5==="week"){
            result5=input5*521.429
        }else if (to5==="month"){
            result5=input5*120
        }else if (to5==="year"){
            result5=input5*10
        }else if (to5==="century"){
            result5=input5/10
        }else{
            result5=input5
        }
    }
    
    else if (from5==="century"){
        if (to5==="nanosecond"){
            result5=input5*3.154e+18
        }else if (to5==="microsecond"){
            result5=input5*3.154e+15
        }else if (to5==="millisecond"){
            result5=input5*3.154e+12
        }else if (to5==="second"){
            result5=input5*3.154e+9
        }else if (to5==="minute"){
            result5=input5*5.256e+7
        }else if (to5==="hour"){
            result5=input5*876000
        }else if (to5==="day"){
            result5=input5*36500
        }else if (to5==="week"){
            result5=input5*5214.29
        }else if (to5==="month"){
            result5=input5*1200
        }else if (to5==="year"){
            result5=input5*100
        }else if (to5==="decade"){
            result5=input5*10
        }else{
            result5=input5
        }
    }
    
    if(!input5){
      alert("please enter a valid input");
      result5="error"
  }
  if (from5==="0"|| to5==="0"){
      alert("please select From and To units");
  }
  if (String(result5).length>13){
    alert("your answer is:"+result4)
    result5="To large"
} 
    document.getElementById("output5").innerHTML=result5
    
    
}
//----------------------------------------------------

function length(){
    document.getElementById("length").scrollIntoView()
}
function temperature(){
document.getElementById("temperature").scrollIntoView()
}

function area(){
    document.getElementById("area").scrollIntoView()
}

function mass(){
    document.getElementById("mass").scrollIntoView()
}

function time(){
var elmnt=document.getElementById("time");
elmnt.scrollIntoView();

}
