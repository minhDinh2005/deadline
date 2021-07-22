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

    // ĐỀ BÀI: Input 1 số N. Kiểm tra số đó có phải số chính phương hay không.
    // CODE TỪ ĐÂY
    let x = false
    for (let i = 1; i <= n; i++) {
        if ((i*i)==n) {
            x = true
        }
    
    }
    if(x == true){
        document.write("Yes")
    }
    else{
        document.write("No")
    }


})