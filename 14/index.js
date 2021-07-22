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

    // ĐỀ BÀI: BMI được tính theo công thức sau:
    // BMI = (cân nặng) / (chiều cao)^2. Cân nặng tính bằng kg, chiều cao tính bằng m.
    // Input cân nặng và chiều cao. Tính BMI và xét sức khỏe của họ:
    // Nếu BMI < 20 →  thiếu cân
    // 20 <= BMI <= 26 → đủ cân
    // 26 < BMI →  thừa cân

    // CODE TỪ ĐÂY
    let c = a/(b*2)
    if (c<20) {
        document.write("Thiếu cân")
    }
   else if (20<c<26) {
        document.write("Đủ cân")
    }
    else  {
        document.write("Thừa cân")
    }


})