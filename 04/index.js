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

    // ĐỀ BÀI: Input 2 số a,b. Output kết quả các phép tính sau: 
    // a+b, a-b, a*b, a/b (thập phân, số dư của a/b)
    // CODE TỪ ĐÂY
    document.write (a+b)
    document.write("<br>")
    document.write(a-b)
    document.write("<br>")
    document.write(a*b)
    document.write("<br>")
    document.write(a/b)
    document.write("<br>")

})