let currentSlide = 0;
const slides = document.querySelectorAll('.user-slide');

function moveSlide(direction) {
    // Xóa class active của slide hiện tại
    slides[currentSlide].classList.remove('active');
    
    // Tính toán index slide tiếp theo
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Thêm class active cho slide mới
    slides[currentSlide].classList.add('active');
}

function selectChar(element, imgPath) {
    // Xóa class active cũ
    const items = document.querySelectorAll('.char-item');
    items.forEach(item => item.classList.remove('active'));
    
    // Thêm class active cho cái vừa chọn
    element.classList.add('active');
    
    // Đổi hình ảnh pet chính
    document.getElementById('mainPet').src = imgPath;
}

// Hàm cập nhật thanh Productivity
function updateProgress() {
    const input = document.getElementById('wordCount').value;
    const bar = document.getElementById('myBar');
    const text = document.getElementById('percentText');

    // Giả sử 1000 từ là đạt 100%
    let percentage = (input / 1000) * 100;

    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;

    bar.style.width = percentage + "%";
    text.innerText = Math.floor(percentage) + "%";

    // Thêm hiệu ứng rung nhẹ khi update
    bar.parentElement.classList.add('shake');
    setTimeout(() => bar.parentElement.classList.remove('shake'), 500);
}