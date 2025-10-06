
// تحديد العناصر من الصفحة
const btnEl = document.querySelector(".btn"); // الزرار
const closeIconEl = document.querySelector(".close-icon"); // أيقونة الإغلاق
const trailerContainerEl = document.querySelector(".trailer-container"); // نافذة الفيديو
const videoEl = document.querySelector("video"); // الفيديو نفسه


// لما المستخدم يضغط على الزرار
btnEl.addEventListener("click", () => {

  // إزالة الكلاس "active" لعرض نافذة الفيديو
  trailerContainerEl.classList.remove("active");
});

// لما المستخدم يضغط على أيقونة الإغلاق
closeIconEl.addEventListener("click", () => {
  // إرجاع الكلاس "active" لإخفاء النافذة
  trailerContainerEl.classList.add("active");

  // إيقاف الفيديو
  videoEl.pause();

  // إعادة الفيديو للبداية
  videoEl.currentTime = 0;
});
