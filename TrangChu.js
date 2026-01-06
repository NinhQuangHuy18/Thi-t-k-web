const openLogin = document.getElementById("openLogin");
const openRegister = document.getElementById("openRegister");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

// Mở modal với form đăng nhập
openLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

// Mở modal với form đăng ký
openRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Đóng modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Chuyển form
switchToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
function changeContent(type, event) {
  event.preventDefault(); // Ngăn load lại trang
  const mainImage = document.getElementById("mainImage");

  let newSrc = "";
  switch (type) {
    case "weddings":
      newSrc = "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432401-2x1?wid=1100"; // đúng tên file bạn có
      break;
    case "meetings":
      newSrc = "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-4070391001-2x1?wid=1100";
      break;
    case "penfolds":
      newSrc = "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432536-2x1?wid=1100";
      break;
    case "dining":
      newSrc = "https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432387-2x1?wid=1100";
      break;
  }

  console.log("Ảnh mới:", newSrc); // test xem đường dẫn đúng chưa

  // Đổi ảnh kèm hiệu ứng mờ
  mainImage.classList.remove("active");
  setTimeout(() => {
    mainImage.src = newSrc;
    mainImage.classList.add("active");
  }, 300);
}


