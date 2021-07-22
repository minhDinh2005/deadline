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

    // ĐỀ BÀI: Input 1 số N (N >= 2). Kiểm tra xem số đó có phải số nguyên tố hay không.
    // CODE TỪ ĐÂY
    let y = false
    for (let i = 2; i <= n; i++) {
        if ((i*i)==n) {
            y = true
        }
    
    }
    if(y == true){
        document.write("Yes")
    }
    else{
        document.write("No")
    }


})