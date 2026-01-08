function playVideo(container) {
  const allVideos = document.querySelectorAll(".swiper-slide video");
  allVideos.forEach((v) => {
    if (v !== container.querySelector("video")) {
      v.pause();
      v.currentTime = 0; // reset về đầu
      const btn = v.closest(".relative").querySelector(".play-btn");
      if (btn) btn.style.display = "block"; // hiện lại icon play
    }
  });

  const video = container.querySelector("video");
  const btn = container.querySelector(".play-btn");
  if (!video.paused) {
    video.pause();
    btn.style.display = "block";
    return;
  }

  video.play();
  btn.style.display = "none";
}

//
function toggleAccordion(element) {
  const content = element.querySelector(".accordion-content");
  content.classList.toggle("open");
}

//
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector("i");

    // Mở/đóng FAQ
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = null; // đóng
      icon.classList.remove("rotate-180"); // icon quay lại
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // mở
      icon.classList.add("rotate-180"); // icon xoay xuống
    }
  });
});

