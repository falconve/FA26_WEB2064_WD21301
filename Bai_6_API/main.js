// API:
// - Dùng cho 2 hệ thống/phần mềm giao tiếp
// trao đổi dữ liệu với nhau

// Phương thức
// 1. GET => LẤY DỮ LIỆU TỪ API
// 2. POST => TẠO MỚI DỮ LIỆU
// 3. PUT => SỬA NHỮNG DỮ LIỆU ĐÃ CÓ
// 4. DELETE => XOÁ NHỮNG DỮ LIỆU ĐÃ CÓ

// 1. PHƯƠNG THỨC GET

// SỬ DỤNG PHƯƠNG THỨC GET ĐỂ LẤY DỮ LIỆU TỪ API
// - SỬ DỤNG fetch (giống như trình duyệt web)
// - CÚ PHÁP: fetch(`link api`).then()

// KHAI BÁO biến để lưu lại link API
// API BÀI VIẾT
// LƯU Ý: ĐỐI VỚI CÁC LINK LIÊN QUAN TỚI API PHẢI DÙNG const
const API_BAI_VIET = `http://localhost:3000/bai-viet`;

// Sử dụng fetch để gọi tới API
// fetch(API_BAI_VIET)
//   .then((res) => res.json()) // res.json() => chuyển dữ liệu sang dạng json
//   .then((data) => {
//     // VÀ HIỂN THỊ LÊN GIAO DIỆN HTML
//     let dsBaiViet = document.querySelector(`.ds-bai-viet`);
//     //console.log(dsBaiViet);

//     if (dsBaiViet) {
//       data.forEach((baiViet) => {
//         dsBaiViet.innerHTML += `
//         <p>Id: ${baiViet.id}</p>
//         <p>Tên bài viết: ${baiViet.ten}</p>
//         <p>Lượt xem: ${baiViet.luotXem}</p>
//         `;
//       });
//     }
//   });

// Khai báo hàm lấy dữ liệu
let layBaiViet = () => {
  return fetch(API_BAI_VIET)
    .then((res) => res.json()) // res.json() => chuyển dữ liệu sang dạng json
    .then((data) => {
      // Chạy hàm
      hienThiBaiViet(data);
    });
};
// Khai báo hàm hiển thị

let hienThiBaiViet = (dataBaiViet) => {
  let dsBaiViet = document.querySelector(`.ds-bai-viet > table > tbody `);
  //console.log(dsBaiViet);

  if (dsBaiViet) {
    // Yêu cầu hiện thị dữ liệu theo dạng bảng
    dataBaiViet.forEach((baiViet) => {
      dsBaiViet.innerHTML += `
        <tr>
          <td>${baiViet.idBaiViet}</td>
          <td>${baiViet.ten}</td>
          <td>${baiViet.luotXem}</td>
        </tr>
        `;
    });
  }
};

let themMoiBaiViet = () => {
  let idBaiViet = document.querySelector(`.id-bai-viet`);
  let tenBaiViet = document.querySelector(`.ten-bai-viet`);
  let luotXemBaiViet = document.querySelector(`.luot-xem`);

  if (idBaiViet && tenBaiViet && luotXemBaiViet) {
    // Tạo object lưu lại các thông tin lấy được từ input
    let objectBaiViet = {
      idBaiViet: idBaiViet.value,
      ten: tenBaiViet.value,
      luotXem: luotXemBaiViet.value,
    };
    // Sử dụng JSON.stringify() => để biến object thành kiểu JSON
    // Sau đó gọi API với phương thức POST
    fetch(API_BAI_VIET, {
      // PHƯƠNG THỨC POST DÙNG ĐỂ TẠO MỚI
      method: `POST`,
      // body: Nội dung sẽ gửi lên API. LƯU Ý: NỘI DUNG PHẢI
      // CHUYỂN SANG KIỂU JSON
      body: JSON.stringify(objectBaiViet),
    }).then(() => {
      alert(`Thêm thành công`);
    });
    // Nhiệm vụ:
    // - Kiểm tra tất cả các trường input phải có dữ liệu mới cho thêm. Còn không
    // hiển thị thông báo thêm thất bại
    // - Nếu trường input có dấu cách thì phải loại bỏ. Dùng .trim()
    // - Lượt xem phải là số nguyên dương
  }
};

layBaiViet();
