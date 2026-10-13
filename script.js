// Hiển thị hộp thoại chào mừng khi web tải xong
alert("Chào mừng Indie Hacker Trần Mạnh quay trở lại!");

// In thông báo ẩn kiểm tra trong Console của trình duyệt
console.log("JavaScript đã được kích hoạt thành công!");

// Hàm này sẽ chạy mỗi khi bạn bấm nút "Đổi tiêu đề trang"
function thayDoiTieuDe() {
    // 1. Tìm phần tử có id là "title" trong trang HTML
    let tieuDe = document.getElementById("title");

    // 2. Thay đổi nội dung chữ bên trong nó
    tieuDe.innerText = "Trần Mạnh - Indie Hacker đang nghịch code tùm lum xD";

    // 3. In log kiểm tra trong console
    console.log("Đã đổi tiêu đề thành công!");
}