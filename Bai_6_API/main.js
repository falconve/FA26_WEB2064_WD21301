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
      hienThiBaiViet(data);
    });
};
// Khai báo hàm hiển thị

let hienThiBaiViet = (dataBaiViet) => {
  let dsBaiViet = document.querySelector(`.ds-bai-viet`);
  //console.log(dsBaiViet);

  if (dsBaiViet) {
    dataBaiViet.forEach((baiViet) => {
      dsBaiViet.innerHTML += `
        <p>Id: ${baiViet.id}</p>
        <p>Tên bài viết: ${baiViet.ten}</p>
        <p>Lượt xem: ${baiViet.luotXem}</p>
        `;
    });
  }
};

layBaiViet();
