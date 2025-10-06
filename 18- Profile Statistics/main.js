// بنمسك كل العناصر اللي عندها الكلاس "counter" (يعني الأرقام)
const counterEl = document.querySelectorAll(".counter");

// بنعدي على كل رقم فيهم
counterEl.forEach((counterEl) => {
  // نخلي البداية دايمًا من صفر
  counterEl.innerText = "0";

  // نستدعي الدالة اللي هتزود الرقم بالتدريج
  incrementCounter();

  // دي الدالة اللي بتخلي الرقم يزيد شوية شوية
  function incrementCounter() {
    // نحول الرقم الحالي من نص لرقم
    let currentNum = +counterEl.innerText;

    // نجيب القيمة النهائية اللي المفروض يوصلها الرقم (من الـ data-ceil)
    const dataCeil = counterEl.getAttribute("data-ceil");

    // نحدد مقدار الزيادة كل مرة (كل رقم يزيد بنسبة معينة)
    const increment = dataCeil / 15;

    // نزود الرقم الحالي
    currentNum = Math.ceil(currentNum + increment);

    // لو الرقم لسه أقل من المطلوب، نحدثه ونكرر التحديث بعد 50 ملّي ثانية
    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50); // نعيد تشغيل الدالة كل 50 ملّي ثانية
    }
    // لو وصل الرقم للنهاية، نخليه يثبت على القيمة النهائية
    else {
      counterEl.innerText = dataCeil;
    }
  }
});
