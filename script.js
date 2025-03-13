document.addEventListener("DOMContentLoaded", function () {
    const sections = [ //เก็บข้อมูล Section ที่ต้องการเปลี่ยนสี พร้อมระบุสีที่จะเปลี่ยน
        { id: "Home", color: "#fce4ec" },
        { id: "About", color: "#e1f5fe" },
        { id: "education", color: "#ffffff" },
        { id: "skill", color: "#f3e5f5" },
        { id: "contact", color: "#B6BBC7" }

    ];

    let currentSection = null; // เก็บ section ที่แสดงผลล่าสุดป้องกันการเปลี่ยนสีซ้ำ

    const observer = new IntersectionObserver(entries => {//ตรวจ Sec ที่กำลังแสดงผล
        let visibleSection = null; // เก็บ section ที่กำลังแสดงใน viewport มากที่สุด

        entries.forEach(entry => { //ตรวจ Sec ที่ Observer กำลังดูอยู่
            if (entry.isIntersecting) {  //ถ้า (entry.isIntersecting) เป็น True คือ Sec นั้นกำลังอยูู่ในจอ 
                visibleSection = entry.target.id; // บันทึก ID ของ Section ที่แสดงผล
            }
        });

        if (visibleSection && visibleSection !== currentSection) { //ถ้า Sec เปลี่ยน เปลี่ยนสีด้วย
            currentSection = visibleSection;
            document.body.style.backgroundColor = sections.find(sec => sec.id === visibleSection).color; //ค้นหาสีที่ตรงกับ visibleSection แล้วนำมาเปลี่ยนสี Bg
        }
    }, { threshold: 0.4 }); //Sec นั้น อยู่ 40% ของจอถึงจะนับว่าแสดงผล 


    sections.forEach(sec => {
        const element = document.getElementById(sec.id);
        if (element) { //เช็คกัน Error
            observer.observe(element);
        }
    });
});


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('#header .nav-list ul').classList.toggle('active');
});
 

