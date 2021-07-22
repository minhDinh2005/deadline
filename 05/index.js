document.write=function(s){
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length-1];
    lastScript.insertAdjacentHTML("beforebegin", s);
}
// CODE ở trong này:
document.getElementById("form").addEventListener("submit",(e)=>{
    // KHÔNG XÓA DÒNG NÀY
    e.preventDefault();

    // CÁC BIẾN (KHÔNG XÓA):
    let n = parseInt(form.n.value.trim()); // Number n

    // ĐỀ BÀI: Input 1 số n. Output phép căn bậc 2 của n.
    // CODE TỪ ĐÂY

    document.write(Math.sqrt(n))  

    
    


})