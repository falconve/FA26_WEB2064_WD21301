// Phương thức .map:
// Biến đổi các phần tử trong mảng thành một phần tử mới
// và trả về một mảng mới

// ĐỀ BÀI: Nhân đôi các số trong mảng soNguyen
let soNguyen = [1, 2, 3];

let ketQuaBienDoi = soNguyen.map((item) => {
  let nhanDoi = item * 2;
  return nhanDoi;
});

console.log(`Mảng mới: ${ketQuaBienDoi}`);
console.log(`Mảng cũ: ${soNguyen}`);

// Phương thức .some
// Chỉ cần 1 phần tử thoả mãn điều kiện thì trả về true

let soNguyen1 = [2, 1, 8];
let kiemTraSo = soNguyen1.some((item) => {
  return item > 1;
});

console.log(kiemTraSo);

// Phương thức .every
// Tất cả phần tử phải thoả mãn điều kiện mới trả về true
let soNguyen2 = [3, 2, 6];
let kiemTraTatCaSo = soNguyen1.every((item) => {
  return item > 3;
});

console.log(kiemTraTatCaSo);

// Bài tâp 1: Sử dụng map để hiển thị kết quả như sau:

let studentList = [
  {
    msv: `PP00001`,
    hoTen: `Tuấn Anh`,
    diem: 8,
  },
  {
    msv: `PP00002`,
    hoTen: `Khánh Lâm`,
    diem: 9,
  },
  {
    msv: `PP00003`,
    hoTen: `Hoàng Thắng`,
    diem: 6,
  },
];

// kết quả hiển thị mong muốn:  [`Tuấn Anh - 8 điểm`, `Khánh Lâm - 9 điểm`, `Hoàng Thắng - 6 điểm`]

// Bài tập 2: Sử dụng .some để kiểm tra xem có bạn nào được trên 6 điểm không
// Nếu có thì hiển thị console.log(`Có học sinh trên 6 điểm`)

// Bài tập 3: Sử dụng .every để kiểm tra điểm sinh viên > 5 điểm
// Nếu có thì hiển thị console.log(`Cả lớp đều trên 5 điểm`)

// Bài tập 4:
// Cho mảng danhSachSanPham
let dsSP = [
  {
    id: 1,
    tenSanPham: `Tivi`,
    giaTien: 1000000,
  },
  {
    id: 2,
    tenSanPham: `Laptop`,
    giaTien: 6500000,
  },
  {
    id: 3,
    tenSanPham: `Điện thoại`,
    giaTien: 10000000,
  },
];

// Sử dụng map để tạo một mảng mới và giảm giả sản phẩm đi 5%
