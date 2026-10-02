//  JS Cơ bản
// .push: thêm vào phần tử vào cuối mảng
// .splice: thêm hoặc xoá phần tử ở bất cứ vị trí nào trong mảng
// .indexOf: tìm kiếm vị trí của 1 phần tử trong mảng:
// - Nếu tìm thấy thì hiện thị vị trí của phần tử đó
// - Nếu không tìm thấy thì hiển thị -1
// .forEach: vòng lặp

// JS nâng cao
// .find
// .includes
// .filter

// Khai báo 1 mảng gồm các phần tử sau
let dsMonHoc = [`HTML`, `CSS`, `JS CƠ BẢN`];

// Sử dụng .indexOf
// Yêu cầu tìm kiếm xem có môn CSS trong mảng dsMonHoc không?
// if (dsMonHoc.indexOf(`CSDL`) > -1) {
//   console.log(`Tìm thấy môn học này`);
// } else {
//   console.log(`Không tìm thấy`);
// }

// Sử dụng .includes: Kết quả trả về true hoặc false
if (dsMonHoc.includes(`CSS`)) {
  console.log(`Tìm thấy môn học này`);
} else {
  console.log(`Không tìm thấy`);
}

// .find
let dsSinhVien = [
  {
    msv: `PP00002`,
    hoTen: `Tuấn Anh`,
    lop: `WD21301`,
  },
  {
    msv: `PP00003`,
    hoTen: `Khánh Lâm`,
    lop: `SD21301`,
  },
  {
    msv: `PP00001`,
    hoTen: `Tuấn Anh`,
    lop: `WD21301`,
  },
];

let timKiemSV = dsSinhVien.find((hocSinh) => {
  // điều kiện tìm kiếm: Tìm họ tên sinh viên là Tuấn Anh
  return hocSinh.hoTen == `Tuấn Anh`;
});

// Kết quả .find():
// - Phần tử đầu tiên thoả mãn điều kiện
// LƯU Ý: Chỉ có 1 phần tử được hiển thị

//console.log(timKiemSV);

// .filter: Hiển thị tất cả cá phần tử thoả mãn điều kiện
let timKiemTatCaSV = dsSinhVien.filter((hocSinh) => {
  return hocSinh.hoTen == `Tuấn Anh`;
});

console.log(timKiemTatCaSV);

// Xây dựng 1 giao diện tìm kiếm sản phẩm điện thoại:
// Frontend:
// - 1 input nhập thông tin tìm kiếm
// - 1 nút tìm kiếm
// - 1 thẻ div hiển thị kết quả tìm kiếm

// Backend:
// - Khai báo 1 mảng gồm ít nhất 5 sản phẩm điện thoại như sau:
// LƯU Ý: Các sản phẩm trong mảng có ít nhất 2 hãng giống nhau và các sản phẩm
// còn lại phải là các hãng khác
// [
//     {
//         id: 1,
//         tenSanPham: `iPhone 18 Promax`,
//         giaTien: 40500000,
//         hang: `Apple`
//     }
// ]
// - Sử dụng phương thức phù hợp để hiển thị đầy đủ tất các sản phẩm theo từ khoá
// mà người dùng nhập ở ô input (Tìm kiếm theo tên hãng)
let dsDienThoai = [
  {
    id: 1,
    tenSanPham: `iPhone 18 Promax`,
    giaTien: 40500000,
    hang: `Apple`,
  },
  {
    id: 2,
    tenSanPham: `iPhone 17`,
    giaTien: 1500000,
    hang: `Apple`,
  },
  {
    id: 3,
    tenSanPham: `Xiaomi 19`,
    giaTien: 30500000,
    hang: `Xiaomi`,
  },
];

let sanPhamTimKiem = document.querySelector(`.san-pham-tim-kiem`);
let ketQuaTimKiem = document.querySelector(`.ket-qua-tim-kiem`);

let timKiem = () => {
  if (sanPhamTimKiem && ketQuaTimKiem) {
    if (sanPhamTimKiem.value !== "") {
      let dsSPTimKiem = dsDienThoai.filter((dienThoai) => {
        return (
          // Sử dụng .toLowerCase() => để đưa tất cả chữ cái về viết thường
          dienThoai.hang.toLowerCase() == sanPhamTimKiem.value.toLowerCase()
        );
      });
      console.log(dsSPTimKiem);

      if (dsSPTimKiem.length > 0) {
        dsSPTimKiem.forEach((item) => {
          ketQuaTimKiem.innerHTML += `
      <p>Tên sản phẩm: ${item.tenSanPham}</p>  
      <p> Giá sản phẩm: ${item.giaTien} </p>
      <p> Hãng: ${item.hang} </p> 
      `;

          // Sử dụng .appendChild khi tạo thẻ HTML bằng JS (document.createElement)
          //document.body.appendChild(div);
        });
      } else {
        let thongBao = document.createElement(`p`);
        thongBao.textContent = `Không tìm thấy sản phẩm`;
        ketQuaTimKiem.appendChild(thongBao);
      }
    } else {
      alert(`Bạn cần nhập thông tin để tìm kiếm`);
    }
  }
};
