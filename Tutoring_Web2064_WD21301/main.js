// CAMPUSHELP - KHUNG JAVASCRIPT CHO SINH VIÊN TỰ HOÀN THIỆN
// Đề bài quy định dùng fetch().then().catch(), KHÔNG dùng async/await.
// Dùng querySelector(), createElement(), textContent(), appendChild(),
// classList.add/remove(), onclick và onmouseover theo đúng yêu cầu.

const API_URL = "http://localhost:4000/requests";
let allRequests = []; // Mảng để chứa dữ liệu lấy từ API
let editingId = null;

// 1. GET /requests: tải dữ liệu, render và thống kê.
let loadRequests = () => {
  // Dùng fetch gọi API
  fetch(API_URL)
    .then((response) => {
      if (!response.ok)
        throw new Error("Lỗi gọi API hoặc không tải được dữ liệu");
      return response.json();
    })
    .then((data) => {
      allRequests = data;
      //console.log(allRequests);
      // Gọi hàm hiển thị
      renderRequests(allRequests);
    })
    .catch((error) => {
      console.log(`Lỗi gọi api: ${error}`);
    });
};

// 2. Tạo từng .request-card bằng createElement và appendChild.
let renderRequests = (requests) => {
  let requestList = document.querySelector(`#requestList`);
  let emptyState = document.querySelector(`.empty-state`);
  //console.log(requestList);

  if (requestList) {
    // Kiểm tra nếu mảng requests có dữ liệu thì sẽ ẩn phần hiển thị
    console.log(requests.length);
    if (requests.length > 0) {
      emptyState.style.display = `none`;
      for (nhiemVu of requests) {
        let card = document.createElement(`div`);
        let buttonSua = document.createElement(`button`);
        let buttonXoa = document.createElement(`button`);
        let buttonCapNhatTrangThai = document.createElement(`button`);

        // Hiển thị tiêu đề vào thẻ p
        let title = document.createElement(`h3`);
        title.textContent = `Tiêu đề: ${nhiemVu.subject}`;
        card.appendChild(title);

        // Hiển thị tên vào thẻ p
        let studentName = document.createElement(`p`);
        studentName.textContent = `Tên sinh viên: ${nhiemVu.student}`;
        card.appendChild(studentName);

        // Hiển thị độ trạng thái
        let status = document.createElement(`p`);
        status.textContent = `Trạng thái: ${nhiemVu.status}`;
        card.appendChild(status);

        // Hiển thị độ ưu tiên
        let priority = document.createElement(`p`);
        priority.textContent = `Trạng thái: ${nhiemVu.priority}`;
        card.appendChild(status);

        buttonSua.textContent = `Sửa`;
        buttonSua.setAttribute(`onclick`, `editRequest('${nhiemVu.id}')`);
        card.appendChild(buttonSua);

        buttonXoa.textContent = `Xoá`;
        buttonXoa.onclick = () => {
          deleteRequest(nhiemVu.id);
        };
        card.appendChild(buttonXoa);

        if (nhiemVu.status !== `resolved`) {
          buttonCapNhatTrangThai.textContent = `Cập nhật trạng thái`;
          buttonCapNhatTrangThai.setAttribute(
            `onclick`,
            `advanceStatus('${nhiemVu.id}')`,
          );
        } else {
          buttonCapNhatTrangThai.classList.add(`hidden`);
        }

        card.appendChild(buttonCapNhatTrangThai);

        //console.log(card);
        requestList.appendChild(card);
      }
    }
  }
};

// 3. POST: tạo yêu cầu mới với status='new'.
let addRequest = () => {
  // Lấy thông tin người dùng nhập vào các input
  let txtSubject = document.querySelector(`#txtSubject`).value;
  let txtStudent = document.querySelector(`#txtStudent`).value;
  let cboPriority = document.querySelector(`#cboPriority`).value;
  let txtDescription = document.querySelector(`#txtDescription`).value;

  if (txtSubject && txtStudent && cboPriority && txtDescription) {
    // Tạo 1 object để lưu lại các thông tin đã lấy
    let nhiemVu = {
      subject: txtSubject,
      student: txtStudent,
      priority: cboPriority,
      description: txtDescription,
      status: "new",
    };

    // Gọi API để tạo mới 1 nhiệm vụ
    fetch(API_URL, {
      method: `POST`,
      body: JSON.stringify(nhiemVu),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Thêm không thành công`);
      })
      .then(() => {
        // Gọi lại API để hiển thị dữ liệu mới
        loadRequests();
      })
      .catch((error) => {
        console.log(`Lỗi gọi api: ${error}`);
      });
  }
};

// 4. Chuyển form sang chế độ chỉnh sửa.
let editRequest = (request) => {
  console.log(request);
  // lưu lại id khi bấm nút sửa
  fetch(`${API_URL}/${request}`)
    .then((response) => {
      if (!response.ok)
        throw new Error("Lỗi gọi API hoặc không tải được dữ liệu");
      return response.json();
    })
    .then((data) => {
      let txtSubject = (document.querySelector(`#txtSubject`).value =
        data.subject);
      let txtStudent = (document.querySelector(`#txtStudent`).value =
        data.student);
      let cboPriority = (document.querySelector(`#cboPriority`).value =
        data.priority);
      let txtDescription = (document.querySelector(`#txtDescription`).value =
        data.description);

      // Ẩn nút thêm
      document.querySelector(`#btnAdd`).classList.add(`hidden`);

      // Hiển thị nút Lưu và Huỷ
      let btnSave = document.querySelector(`#btnSave`);
      btnSave.classList.remove(`hidden`);
      btnSave.onclick = () => {
        saveRequest(request);
      };
      document.querySelector(`#btnCancel`).classList.remove(`hidden`);
    })
    .catch((error) => {
      console.log(`Lỗi gọi api: ${error}`);
    });
};

// 5. PUT /requests/:id: lưu chỉnh sửa; giữ nguyên id và status.
let saveRequest = (id) => {
  // Lấy thông tin người dùng nhập vào các input
  let txtSubject = document.querySelector(`#txtSubject`).value;
  let txtStudent = document.querySelector(`#txtStudent`).value;
  let cboPriority = document.querySelector(`#cboPriority`).value;
  let txtDescription = document.querySelector(`#txtDescription`).value;

  if (txtSubject && txtStudent && cboPriority && txtDescription) {
    // Tạo 1 object để lưu lại các thông tin đã lấy
    let nhiemVu = {
      subject: txtSubject,
      student: txtStudent,
      priority: cboPriority,
      description: txtDescription,
      status: "new",
    };

    // Gọi API để tạo mới 1 nhiệm vụ
    fetch(`${API_URL}/${id}`, {
      method: `PUT`,
      body: JSON.stringify(nhiemVu),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Sửa không thành công`);
      })
      .then(() => {
        // Gọi lại API để hiển thị dữ liệu mới
        alert(`Sửa thành công`);
        loadRequests();
      })
      .catch((error) => {
        console.log(`Lỗi gọi api: ${error}`);
      });
  }
};

// 6. PUT: new -> processing -> resolved; resolved không chuyển nữa.
let advanceStatus = (request) => {
  let trangThaiTiepTheo = ``;

  fetch(`${API_URL}/${request}`)
    .then((response) => {
      if (!response.ok)
        throw new Error("Lỗi gọi API hoặc không tải được dữ liệu");
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      if (data.status == `new`) {
        trangThaiTiepTheo = `proccessing`;
      } else if (data.status == `proccessing`) {
        trangThaiTiepTheo = `resolved`;
      } else {
        return;
      }

      let nhiemVuMoi = {
        ...data,
        status: trangThaiTiepTheo,
      };

      return nhiemVuMoi;
    })
    .then((nhiemVuMoi) => {
      fetch(`${API_URL}/${request}`, {
        method: `PUT`,
        body: JSON.stringify(nhiemVuMoi),
      })
        .then((response) => {
          if (!response.ok) throw new Error(`Sửa không thành công`);
        })
        .then(() => {
          // Gọi lại API để hiển thị dữ liệu mới
          alert(`Cập nhật trạng thái thành công`);
          loadRequests();
        })
        .catch((error) => {
          console.log(`Lỗi gọi api: ${error}`);
        });
    })
    .catch((error) => {
      console.log(`Lỗi gọi api: ${error}`);
    });
};

// 7. DELETE /requests/:id chỉ sau khi người dùng confirm().
let deleteRequest = (id) => {
  if (!confirm(`Bạn có muốn xoá không?`)) return;

  fetch(`${API_URL}/${id}`, {
    method: `DELETE`,
  })
    .then((response) => {
      if (!response.ok) throw new Error("Không thể thực hiện");
    })
    .then(() => {
      alert(`Xoá thành công`);
    })
    .catch((error) => {
      console.log(`Lỗi gọi api: ${error}`);
    });
};

// 8. Thống kê trên TOÀN BỘ allRequests, không theo danh sách đã lọc.
let updateStatistics = (requests) => {
  // TODO: statTotal, statNew, statProcessing, statResolved.
};

// 10. KHI HOÀN THIỆN: gọi loadRequests() khi trang mở.
loadRequests();
