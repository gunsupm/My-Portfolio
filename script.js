document.addEventListener("DOMContentLoaded", function () { //รอให้ HTML โหลดเสร็จก่อน แล้วค่อยทำงาน JavaScript
    const aboutSec = document.getElementById("About"); //ดึง section ที่มี id="About" มาเก็บไว้

    const observer = new IntersectionObserver(entries => {//เช็คว่า Element นี้อยู่ในหน้าจอไหม
        entries.forEach(entry => { // วนลูปผ่านแต่ละ Element ที่กำลังถูกสังเกต
            if (entry.isIntersecting) { //เป็น true ถ้า #About ปรากฏในหน้าจอ
                document.body.style.backgroundColor = "#b3e5fc"; // เปลี่ยนสี #About
            } else {
                document.body.style.backgroundColor = "#ffffff"; // กลับเป็นสีขาวเมื่อออกจาก #About
            }
        });
    }, { threshold: 0.7 });

    observer.observe(aboutSec);
});
//Hamburgerbar ในโทรศัพท์
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    // กด Hamburger เพื่อเปิด-ปิดเมนู
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // กดลิงก์ในเมนูแล้วให้ปิดเมนู
    document.querySelectorAll(".nav-list a").forEach(link => {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navList.classList.remove("active");
        });
    });
});

