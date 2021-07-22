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
        firstname: form.firstname.data.trim(),
        lastname: form.lastname.data.trim(),
        username: form.username.data.trim(),
        password: form.lastname.data,
        confirm_password: form.password.data
    }
    let usernames = ["bob","alice","phamlam24","xxxiiii"]

    // ĐỀ BÀI: Input 1 object gồm thông tin người dùng - họ, tên, tên đăng nhập, 
    // password, confirm password theo 1 object.
    // Có một array là tên đăng nhập đã được đăng kí sẵn trong code.

    // Output: Họ tên người dùng (họ tên = họ + tên)
    // Kiểm tra xem tên đăng nhập đã bị lấy hay chưa
    // Kiểm tra xem password đã trùng với confirm password hay chưa


    // CODE TỪ ĐÂY



})