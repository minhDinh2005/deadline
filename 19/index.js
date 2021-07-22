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

    // ĐỀ BÀI: Input 1 số N. Output N string chữ cái “a” lặp lại 
    // N lần, mỗi string nằm ở 1 dòng.

    // CODE TỪ ĐÂY
    let itg = ""

    for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
           itg += "a"
       }    
       itg += "\r\n"
    
    }
    
    document.write(itg)





})