// รับคะแนนมาจากผู้ใช้
let score = prompt("กรอกคะแนนสักทีเถอะ:");

// แปลงค่าคะแนนให้เป็นตัวเลข (เนื่องจาก prompt จะได้ข้อมูลเป็น string)
score = parseFloat(score);

// ตรวจสอบคะแนนและกำหนดเกรด
let grade;
if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "ติด F นะจ่ะ เปลืองตังพ่อแม่มากเลย";
}

// แสดงผลลัพธ์
alert("คุณได้เกรด: " + grade);