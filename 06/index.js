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
    let n = form.n.value.trim(); // String n

    // ĐỀ BÀI: Input 1 string n. Output độ dài string.
    // CODE TỪ ĐÂY
    
    document.getElementById("form").innerHTML = n.length


})