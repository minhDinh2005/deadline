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
    let c = parseInt(form.c.value.trim()); // Number c

    // ĐỀ BÀI: Input 3 số a,b,c. Nếu giá trị 3 số là giá trị 3 cạnh 
    // của 1 tam giác hợp lệ thì ghi là “YES”, còn không thì ghi là “NO”

    // CODE TỪ ĐÂY
 if ((a+b)>c,(a+c)>b,(b+c)>a) {
        document.write("YES")
    } else {
        document.write("NO")
    }

})