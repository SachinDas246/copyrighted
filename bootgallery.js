var starCountRef = firebase.database().ref('/contents/Gallery');
starCountRef.on('value', function (snapshot) {
  onloaddata(snapshot.val());
});


var dwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if(dwidth<700)
{
  st=document.getElementById("MPIC")
        st.classList.remove("desk")
        st.classList.add("mob")
}


card0 = `<div class="tile is-child box " onclick = "openeven(`
card001=`)" style="padding: 0px;border-radius: 0%; margin:10px;min-width:50px">
<figure class="image ">
    <img src="`
//image url    
card1 = `">
</figure>
<p class="subtitle" style="font-size:18px;font-weight: bold;margin: 0%; padding: 5px;margin-top: 15px;margin-left: 20px;font-family: 'Poppins', sans-serif;">`
//event tittle
card2 = `</p>
<p style="margin-left: 30px;margin-right:30px;padding: 0px;font-size: 15px;height:50px;overflow: hidden;">`
//event discription
card3 = `</p>
<p style="float: right;font-size: 12px;font-weight: lighter;;position:bottom 10px;margin: 20px px;margin-right: 20px;">`
//date
card4 = `</p>
<div style="height: 50px;"></div>
</div> <div style="width: 20px;height: 10px;"></div>`

divd = `</div>
<div class="tile is-parent">`

ender = `</div>
                  
              
</div>`
var Data=""
function onloaddata(dat) {
  if(dat==null)
  {
    return
  }
  Data = Object.values(dat.Functions)
  console.log(Data)
  N = Data.length;

  cde = `<div class="tile is-ancestor">
  <div class="tile is-vertical">
      <div class="tile is-parent">`

  c = 0

  for (i = N - 1; i >= 0; i--) {
    cde = cde + card0+i.toString()+card001+ Data[i].img0 + card1 //imageurl
    cde = cde + Data[i].function_name + card2
    cde = cde + Data[i].short_dis + card3
    cde = cde + Data[i].date + card4
    c++

    if (c == 4) {
      c=0
      if (i != 0) {
        cde = cde + divd
      }
    }

  }

  cde=cde+ender
  cde=cde+"</div>"

  cdslt= document.getElementById("crds")

  cdslt.innerHTML = cde 


}


cd1=`<div class="bg-model">
<div class="model-content">


    <div>
        <div  style="height: 10%;"></div>




        <div>
            <h1 class="title is-1"
                style="margin-bottom: 10px;margin-top: 30px;font-family: 'Poppins', sans-serif;  text-align: center;">
                
                <svg style="float: left;" onclick = "closeevent()" width="50px" height="50px" viewBox="0 0 16 16" class="bi bi-arrow-left-short"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                <div
                    style="font-size: 36px;color: rgb(63, 63, 63) ;text-shadow: 6px 0px 5px rgba(150, 150, 150, 0.66);">`

//Event name
cd2=`                </div>
            </h1>
        </div>
        <div style="margin:10%;margin-top: 5%;">
            <p>`
//event long disc
cd3=`
            </p>
        </div>`
// add images
cd4 = `
        
    </div>

</div>

</div>`

function closeevent()
{
  el = document.getElementById("event")
  el.innerHTML=""

}

cm=""
function openeven(n)
{
  el = document.getElementById("event")
  if(Data=="")
  {
    cm=""
    el.innerHTML=cd1
    return
  }

  cm=cd1+Data[n].function_name+cd2+Data[n].long_dis+cd3+get_imagecode(n)+cd4

  el.innerHTML=cm
}


im1=`<div class="tile is-ancestor" style = "max-width:90%;margin:auto">
<div class="tile is-vertical">
    <div class="tile is-parent">`

im2 =`<div style = "height:10px;width:10px"></div><div class="tile is-child is-3" onclick = "showimage('`
im21 = `')">
<figure class="image box" style="padding:5px;border-radius: 3px;">
    <img src="`
    
 im3 = `">
</figure>
</div>`
iend=`</div>
<div class="tile is-parent">`

ifend =` </div>
          
      
</div>

</div>`


cd=''

function get_imagecode(n)
{
  

  if(Data == null||Data == undefined)
  {
    cd=""
    return cd
  }
  ncd= Object.values(Data[n])
  c =ncd[2]// no of images
  if(c==0)
  {
    cd=""
    return cd
  }
  cd = im1
  f=0
  for(n=0;n<c;n++)
  {
    cd = cd + im2 + ncd[n+3]+im21+ncd[n+3]+im3
    f++
    if(f==4)
    {
      f=0
      if(n!=c-1)
      {
        cd=cd+iend
      }
      
    }

  }
  cd=cd+ifend

  return cd
}



function closepic()
{
    ele = document.getElementById("viewerlb")
    ele.innerHTML=""
    
}

var viewercd=`<div  class="bg-modellb"  onclick="closepic()">
<div class="modellb-content" style = "max-height:80%;max-width:70%">
    <div style="float: right;">
        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="white"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </div>
    <figure  class="image">
        <img
            src="`
viewerend =      `">
    </figure>
</div>
</div>`

function showimage(link)
{    
    console.log(link)
    ele = document.getElementById("viewerlb")
    ele.innerHTML=viewercd+link+viewerend

}






