// 1. Attribute & Property

// Viết lệnh để chọn vào thẻ input có class="ho-ten"
let hoTen = document.querySelector(`.ho-ten`);

if (hoTen) {
  // logic ...
  // Sử dụng .getAttribute để lấy giá trị của thuộc tính => Attribute
  let giaTriHoTen = hoTen.getAttribute(`value`);
  console.log(giaTriHoTen);

  // Sử dụng .value cập nhật lại giá trị cho input => Property
  hoTen.value = `Hoàng Thắng`;
  //console.log(giaTriHoTen);

  // Khác biệt giữa Property và Attribute
  // - Attribute: Lấy giá trị ban đầu (khai báo) của thuộc tính
  // - Property: Lấy giá trị hiện tại khi JS đã chạy
}

// 2. Dùng JS để CSS cho thẻ
// CÚ PHÁP: .style.tên-css
// LƯU Ý:
//  color => giữ nguyên
//  font-size => fontSize
//  background-color => backgroundColor
//  width => giữ nguyên
//  border-radius => borderRadius
// => CÔNG THỨC:
// - Những thuộc tính CSS có 1 từ thì giữ nguyên
// - Những thuộc tính CSS có 2 từ trở lên thì loại bỏ dấu - và
// viết hoa chữ cái đầu tiên của từ (như đặt tên biến)

// Select thẻ div, bên trong thẻ div:
// - tạo thẻ h2 có nội dung: Thẻ sinh viên
// - tạo thẻ p có nội dung Họ tên:
// - tạo thẻ p có nội dung Mã sinh viên:
// - tạo thẻ p có nội dung Lớp:
// - Tạo 1 thẻ button có nội dung Xem chi tiết

// CSS:
// - Màu nền thẻ div: Cam
// - Thẻ div có border: 1px solid/dashed/dotted black
// - thẻ h2 màu: xanh
// - Họ tên, mã sinh viên, lớp: in đậm
// - Nút ấn: bo góc, nền cam, chữ trắng, border: 1px dashed, padding: 5px, 10px

// Gợi ý:
// 1.  Selector class .student-card
// 2. Tạo CSS cho .style.border
// 3. .createElement: h2, p, button => .appendChild
// 4. .style.fontWeight = `bold`
// 5. .style.borderRadius
// 6. .style.padding
// 7. .style.width

// class trong JS
// Thêm mới class: .classList.add(`tên class`)
// Xoá class: .classList.remove(`tên class`)
// Toggle class .classList.toggle => kết hợp add và remove

// Xoá class
let theH3 = document.querySelector(`.the-h3`);

if (theH3) {
  // Xoá class
  theH3.classList.remove(`the-h3`);
  // Thêm class
  theH3.classList.add(`demo-them-class-moi`);
}

// Ví dụ: Ấn chuột vào nút để đổi màu chữ
let doiMau = () => {
  // cách 1: thêm CSS
  //theH3.style.color = `red`;
  // cách 2: thêm class đã tạo sẵn
  theH3.classList.add(`mau-do`);

  // Add và remove => toggle
  theH3.classList.toggle(`mau-do`);
};

// Bài tập 1:
// Tạo 1 thẻ div và đặt tên class: to-do-list
// Tạo 1 thẻ input có class: cong-viec và 1 button: gửi đi

// Bài tập 2:
let themMoi = () => {
  let tenMon = document.querySelector(`.ten-mon`);
  let danhSachMonHoc = document.querySelector(`.danh-sach-mon-hoc`);

  if (tenMon && danhSachMonHoc) {
    if (tenMon.value !== "") {
      let theLi = document.createElement(`li`);

      theLi.innerText = tenMon.value;
      //console.log(theLi);
      danhSachMonHoc.appendChild(theLi);
      tenMon.value = "";
    } else {
      alert(`Tên môn không được để trống`);
    }
  }
};

let doiCoChu = () => {
  let danhSachMonHoc = document.querySelectorAll(`.danh-sach-mon-hoc`);

  danhSachMonHoc.forEach((item) => {
    item.style.fontSize = `30px`;
  });
};

let gachChan = () => {
  let danhSachMonHoc = document.querySelectorAll(`.danh-sach-mon-hoc >li`);

  danhSachMonHoc.forEach((item) => {
    //console.log(item);
    item.classList.toggle(`gach-chan-chu`);
  });
};

// 1. Sau khi ấn nút thêm mới thì sẽ xoá trắng ô input
// 2. Nếu ô input trống (Validate input tên môn)
// thì khi ấn thêm mới sẽ alert (`Bạn chưa nhập tên môn`)
