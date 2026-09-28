// Sử dụng .remove() để xoá 1 thẻ HTML
let xoaThe = () => {
  let tieuDe = document.querySelector(`.tieu-de`);

  if (tieuDe) {
    // Gọi .remove() để thực hiện xoá thẻ HTML
    tieuDe.remove();
  }
};

// Bài tập 3:
// Thêm nút xoá vào bên trong thẻ li của bài tập số 2

// Bài tập 4: 
// Xây dựng form đăng nhập gồm:
// 1. input tên đăng nhập
// 2. input mật khẩu
// 3. button đăng nhập

// Khi không nhập đầy đủ thông tin 
// => alert báo lỗi: Tên đăng nhập hoặc mặt khẩu không được 
// để trống

// Nếu nhập đúng tên đăng nhập nhưng sai mật khẩu
// => alert báo lỗi: Sai mật khẩu

// Nếu nhập đúng tên đăng nhập là admin và mật khẩu 123 
// Thì hiển thị Xin chào admin
// Và hiển thị thêm form thay đổi thông tin mật khẩu 
// Form yêu cầu nhập mật khẩu mới và xác nhận mật khẩu 
// Phải kiểm tra check trông 2 input này và kiểm tra 
// Mật khẩu có giống không mới cho thực hiển đổi
