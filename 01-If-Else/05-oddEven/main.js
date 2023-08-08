// รับ input จากผู้ใช้และแปลงเป็นตัวเลข
const input = prompt("กรุณาใส่ตัวเลข:");

// ตรวจสอบว่า input หารด้วย 2 ลงตัวหรือไม่
if (input % 2 === 0) {
  alert("Even number"); // ถ้าหารด้วย 2 ลงตัว แสดงข้อความ "Even number"
} else {
  alert("Odd number"); // ถ้าหารด้วย 2 ไม่ลงตัว แสดงข้อความ "Odd number"
}