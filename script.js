// ====== Menu Toggle ======
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
};

window.onscroll = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
};

// ====== Skills Section Animation ======
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".proficiency-fill");
        bars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0%";
          setTimeout(() => {
            bar.style.width = width;
          }, 300);
        });
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }
);

document.querySelectorAll(".skill-box").forEach((box) => {
  observer.observe(box);
});
