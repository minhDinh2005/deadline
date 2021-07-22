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

    // ĐỀ BÀI: Input 1 string. Output string đó với tất cả chữ cái viết hoa.
    // CODE TỪ ĐÂY
    document.write(a.toUpperCase())


})