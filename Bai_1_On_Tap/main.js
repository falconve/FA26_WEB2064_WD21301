// Câu 1:
// Tạo 1 mảng gồm 5 phần tử là dạng object []
let dsSinhVien = [
  {
    msv: `PP00001`,
    hoTen: `Tuấn Anh`,
    diaChi: `Hải Phòng`,
    diem: 9,
  },
  {
    msv: `PP00002`,
    hoTen: `Khánh Lâm`,
    diaChi: `Hải Phòng`,
    diem: 8,
  },
  {
    msv: `PP00003`,
    hoTen: `Hoàng Thắng`,
    diaChi: `Hà Nội`,
    diem: 7.5,
  },
  {
    msv: `PP00004`,
    hoTen: `Xuân Huy`,
    diaChi: `Hưng Yên`,
    diem: 10,
  },
  {
    msv: `PP00005`,
    hoTen: `Minh Quân`,
    diaChi: `TP. HCM`,
    diem: 6,
  },
];
// Object này gồm các key: msv, hoTen, diaChi, diem {}

// Câu 2:
// Sử dụng vòng lặp for để hiển thị tên và điểm của từng sinh viên
for (let i = 0; i < dsSinhVien.length; i++) {
  console.log(`Họ tên: ${dsSinhVien[i].hoTen} - Điểm: ${dsSinhVien[i].diem}`);
  //   console.log("Họ tên: " + dsSinhVien[i].hoTen + " - " + "Điểm: " + dsSinhVien[i].diem);
}

// Câu 3:
// - Sử dụng phương thức nào để thêm phần tử vào cuối mảng? push
dsSinhVien.push({
  msv: `PP00006`,
  hoTen: `Mạnh Tùng`,
  diaChi: `Đồng Nai`,
  diem: 5,
});
console.log(dsSinhVien);
// - Sau đó thêm thực hiện thêm 1 phần tử vào sau msv PP00005
// - Xoá 1 phần tử ở vị trí số 2 splice
dsSinhVien.splice(2, 1);
console.log(dsSinhVien);

// CÚ PHÁP:
// - tên mảng.splice =>
// - tên mảng.push => thêm phần tử vào cuối mảng

// Tạo hàm: Arrow function
// Tạo hàm tính tổng 2 số

// Hàm có tham số nhưng không có return (trả về)
let tinhTong = (soThu1, soThu2) => {
  console.log(`Kết quả tổng 2 số là:`, soThu1 + soThu2);
};

// KQ MONG MUỐN: tong(1, 2) => hiển thị kết quả tổng ở console.log
tinhTong(1, 2);

// Hàm có tham số có trả về kết quả
// Hàm tính diện tích hình chữ nhật

let dienTichHCN = (chieuDai, chieuRong) => {
  let dienTich = chieuDai * chieuRong;
  //console.log(dienTich);
  return dienTich;
};

let ketQuaDienTichHCN = dienTichHCN(5, 6); // kết quả = 30

// Dùng kết quả diện tích vừa tính từ hàm dienTichHCN
// Để thực nhân đôi

console.log(ketQuaDienTichHCN * 2);

// DOM: Document Object Model
// Thông thường để làm việc với DOM, chúng ta cần đặt id
// hoặc class cho các thẻ HTML

// Cách đặt tên id và class:
// id và class có 2 từ trở lên thì sẽ ngăn cách nhau bởi dấu -
// VD: the-h1, xin-chao

// Yêu cầu: tạo thẻ h1 bên trong thẻ body và đặt class="the-h1"

// CÚ PHÁP: document.querySelector(`.tên class hoặc #id`);
// LƯU Ý:
// - nên đặt tên biến khi sử dụng cú pháp querySelector
// - Sử dụng if để kiểm tra các querySelector
let theH1 = document.querySelector(`.the-h1`);
if (theH1) {
  console.log(theH1);
}

// Chọn nhiều thẻ HTML
// CÚ PHÁP: document.querySelectorAll(`.tên class hoặc #id`);
// Nodelist khác mảng (array)
// Nodelist không thể sử dụng đầy đủ được các phương thức của mảng

let dsTheH2 = document.querySelectorAll(`.the-h2`);

if (dsTheH2) {
  console.log(dsTheH2);
}

// Bài tập
// - Tạo 1 thẻ div và tên class cho thẻ div
// - Sử dụng .createElement để tạo thẻ p bên trong thẻ div
// - Sử dụng .innerText để thêm nội dung cho thẻ p

// <div class="the-div">
//    <p>Nội dung thẻ p</p>
// </div>
