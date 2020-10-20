var dwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if(dwidth<700)
{
  st=document.getElementById("MPIC")
        st.classList.remove("desk")
        st.classList.add("mob")
}