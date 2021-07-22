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
    let a = form.a.value.trim(); // String a
    let b = form.b.value.trim(); // String b

    // ĐỀ BÀI: Input 2 strings. Output độ dài của string dài hơn. Nếu 
    // 2 string bằng nhau thì viết độ dài của string bất kỳ.

    // CODE TỪ ĐÂY
     if (a.length<=b.length) {
        document.write(b.length)
    }
    else {
        document.write(a.length)
    }


})