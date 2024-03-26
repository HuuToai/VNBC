// Function to scroll to a specific element
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to update URL
function updateUrl(targetId) {
  history.pushState({}, "", targetId);
}

// Add event listeners to each navigation link
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-link");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      var targetId = this.getAttribute("href").replace("/", ""); // Get the target element id
      scrollToElement(targetId); // Scroll to the target element
      updateUrl(targetId); // Update URL
    });
  });
});

// Lắng nghe sự kiện khi bấm vào liên kết
document.addEventListener("DOMContentLoaded", function () {
  var link = document.querySelector(".nav-link1"); // Chọn liên kết cần xử lý
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    // Cuộn lên phần đầu trang (sử dụng phương thức smooth để cuộn mượt hơn)
    document
      .getElementById("homesection01")
      .scrollIntoView({ behavior: "smooth" });
  });
});
