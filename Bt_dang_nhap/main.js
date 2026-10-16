let API_DANG_NHAP = `http://localhost:3000/nguoi-dung`;

let dangNhap = () => {
  // Lấy thẻ input tên đăng nhập và mật khẩu
  let tenDangNhap = document.querySelector(`.ten-dang-nhap`);
  let matKhau = document.querySelector(`.mat-khau`);

  if (tenDangNhap && matKhau) {
    // GỌI API
    fetch(API_DANG_NHAP)
      .then((res) => res.json()) // chuyển dữ liệu sang dạng JSON
      // lưu vào biến data => data chính mảng dữ liệu lấy được từ API
      .then((data) => {
        //console.log(data);
        // Sử dụng phương thức find với mảng data
        let kiemTraDangNhap = data.find((nguoiDung) => {
          return (
            // Dùng so sánh bằng để đi kiểm tra thông tin nhập từ input với các
            // phần tử của mảng data
            nguoiDung.taiKhoan == tenDangNhap.value &&
            nguoiDung.matKhau == matKhau.value
          );
        });

        if (kiemTraDangNhap) {
          alert(`Đăng nhập thành công`);
        } else {
          alert(`Đăng nhập thất bại`);
        }
      });
  }
};
