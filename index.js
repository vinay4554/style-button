button=document.querySelector("button");
let code={}

function showresult(){

    res="<pre> { \n"
    for(let i in code){
        res+=i+":"+code[i]+";"+"\n"
    }
    res+="} </pre>"
    document.getElementsByClassName("code")[0].innerHTML=res
}
function Settext(){
    button.innerHTML=this.value;
}
function Setcolor(){
    button.style.color=this.value;
    code[this.name]=this.value;
    showresult()
}
function SetBgcolor(){
    button.style.backgroundColor=this.value;
    code["backgroundcolor"]=this.value;
    showresult()
}
function Setwidth(){
    button.style.width=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Settextsize(){
    button.style.fontSize=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Setborderradius(){
    button.style.borderRadius=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Setborderlength(){
    button.style.borderWidth=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Setbordercolor(){
    button.style.borderColor=this.value;
    code[this.name]=this.value;
    showresult()
}
function Setborderstyle(){
    button.style.borderStyle=this.value;
    code[this.name]=this.value;
    showresult()
}
function Setpaddingtop(){
    button.style.paddingTop=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Setpaddingrigth(){
    button.style.paddingRight=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Setpaddingbottom(){
    button.style.paddingBottom=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
function Setpaddingleft(){
    button.style.paddingLeft=this.value+"px";
    code[this.name]=this.value+"px";
    showresult()
}
document.getElementById("text").onchange=Settext;
document.getElementById("color").onchange=Setcolor;
document.getElementById("bg-color").onchange=SetBgcolor;
document.getElementById("width").onchange=Setwidth;
document.getElementById("text-size").onchange=Settextsize;
document.getElementById("border-redius").onchange=Setborderradius;
document.getElementById("border-length").onchange=Setborderlength;
document.getElementById("border-color").onchange=Setbordercolor;
document.getElementById("border-style").onchange=Setborderstyle;
document.getElementById("padding-top").onchange=Setpaddingtop;
document.getElementById("padding-right").onchange=Setpaddingrigth;
document.getElementById("padding-bottom").onchange=Setpaddingbottom;
document.getElementById("padding-left").onchange=Setpaddingleft;


