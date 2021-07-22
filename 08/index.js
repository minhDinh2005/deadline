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
    let n = form.n.value.trim() // String n
    let a = parseInt(form.a.value.trim()); // Number a
    let b = parseInt(form.b.value.trim()); // Number b

    // ĐỀ BÀI: Input 1 string và 2 số a,b. Output string con từ 
    // vị trí a đến vị trí b của nó.

    // CODE TỪ ĐÂY
    
    document.write(n.slice(a,b))

})