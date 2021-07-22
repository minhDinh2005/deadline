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
    let a = parseInt(form.a.value.trim()); // Number a
    let b = parseInt(form.b.value.trim()); // Number b

    // ĐỀ BÀI: Input 2 số a,b. Output số lớn hơn trong 2 số đó. Nếu 
    // hai số bằng nhau thì viết số nào cũng được.

    // CODE TỪ ĐÂY
    if (a<=b) {
        document.write(b)
    }
    else {
        document.write(a)
    }


})