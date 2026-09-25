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
