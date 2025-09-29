const bodyEl = document.querySelector("body");

// إنشاء شكل عند تحريك الماوس
bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  // دالة لإنشاء أي عنصر بالشكل المطلوب
  function createShape(className, maxSize) {
    const el = document.createElement("span");
    if (className) el.className = className; // قلب أو نجمة
    el.style.left = xPos + "px";
    el.style.top = yPos + "px";

    const size = Math.random() * 100;
    el.style.width = size + "px";
    el.style.height = size + "px";

    bodyEl.appendChild(el);
    setTimeout(() => el.remove(), 50000);
  }

  // قلب دائمًا
  createShape("", 100);

  // نجمة بنسبة 50%
  if (Math.random() > 0.5) {
    createShape("star", 80);
  }
  // ❄️ تلج بنسبة 30%
  if (Math.random() > 0.7) {
    createShape("snow", 60);
  }
});




const startMsg = document.getElementById("start-msg");

// دالة تخفي العنصر
function hideStart() {
  startMsg.classList.add("hide");
  // إزالة المستمعين حتى ما يتكرر
  window.removeEventListener("mousemove", hideStart);
  window.removeEventListener("keydown", hideStart);
  window.removeEventListener("click", hideStart);
}

// نخفي الرسالة عند أول حركة ماوس أو كيبورد أو كليك
window.addEventListener("mousemove", hideStart);
window.addEventListener("keydown", hideStart);
window.addEventListener("click", hideStart);

