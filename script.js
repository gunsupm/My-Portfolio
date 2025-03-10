document.addEventListener("DOMContentLoaded", function () { //รอให้ HTML โหลดเสร็จก่อน แล้วค่อยทำงาน JavaScript
    const aboutSec = document.getElementById("About"); //ดึง section ที่มี id="About" มาเก็บไว้

    const Aboutbg = new IntersectionObserver(entries => {//เช็คว่า Element นี้อยู่ในหน้าจอไหม
        entries.forEach(entry => { // วนลูปผ่านแต่ละ Element ที่กำลังถูกสังเกต
            if (entry.isIntersecting) { //เป็น true ถ้า #About ปรากฏในหน้าจอ
                document.body.style.backgroundColor = "#e1f5fe"; // เปลี่ยนสี #About
            } else {
                document.body.style.backgroundColor = "#ffffff"; // กลับเป็นสีขาวเมื่อออกจาก #About
            }
        });
    }, { threshold: 0.7 });

    const HomeSec = document.getElementById("Home"); //ดึง section ที่มี id="..." มาเก็บไว้
    const Homebg = new IntersectionObserver(entries => {//เช็คว่า Element นี้อยู่ในหน้าจอไหม
    entries.forEach(entry => { // วนลูปผ่านแต่ละ Element ที่กำลังถูกสังเกต
        if (entry.isIntersecting) { //เป็น true ถ้า #... ปรากฏในหน้าจอ
            document.body.style.backgroundColor = "#ECD4D4"; // เปลี่ยนสี #...
        } else { 
            cument.body.style.backgroundColor = "#ffffff";// กลับเป็นสี...เมื่อออกจาก #...
        }
    });
}, { threshold: 0.3 });

Homebg.observe(HomeSec);
Aboutbg.observe(aboutSec);
});
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('#header .nav-list ul').classList.toggle('active');
});


