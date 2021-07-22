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

    // ĐỀ BÀI: Input 2 strings a,b. Tìm vị trí xuất hiện 
    // string b trong string a. Nếu ko xuất hiện thì output -1.

    // CODE TỪ ĐÂY
    document.write(a.search(b))


})