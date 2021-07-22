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
    let user = {
        name: form.name.data.trim(),
        username: form.username.data.trim(),
        password: form.password.data
    }
    

    // ĐỀ BÀI: Input 1 object gồm thông tin người dùng - tên, tên đăng nhập, password theo 1 object. 
    // Output những thông tin hiện tại đang bị trống.


    // CODE TỪ ĐÂY



})