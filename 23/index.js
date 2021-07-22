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
    let n = form.n.value.trim().split(' ');
    a = []; // Array a
    for(let i in n){
        a.push(parseInt(n[i]))
    }

    // ĐỀ BÀI: Input 1 array số, các phần tử trong array cách nhau bởi 1 dấu cách. 
    // Tìm phần tử lớn nhất và nhỏ nhất trong array đó.

    // CODE TỪ ĐÂY



})