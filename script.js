const streetcarImg = document.getElementById("streetcar");
const whoknowsImg = document.getElementById("whoknows");

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

// dừng tất cả
function stopAll() {
  [audio1, audio2].forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  [streetcarImg, whoknowsImg].forEach(img => {
    img.classList.remove("active");
    img.style.boxShadow = "none";
  });
}

// toggle play / stop
function toggle(img, audio) {
  if (audio.paused) {
    stopAll();
    audio.currentTime = 0;
    audio.play();

    img.classList.add("active");
  } else {
    audio.pause();
    audio.currentTime = 0;

    img.classList.remove("active");
    img.style.boxShadow = "none";
  }
}

// click events
streetcarImg.addEventListener("click", () => {
  toggle(streetcarImg, audio1);
});

whoknowsImg.addEventListener("click", () => {
  toggle(whoknowsImg, audio2);
});

// 🔥 NHẠC CHẠY HẾT → TỰ DỪNG + RESET VISUAL
audio1.addEventListener("ended", () => {
  streetcarImg.classList.remove("active");
  streetcarImg.style.boxShadow = "none";
});

audio2.addEventListener("ended", () => {
  whoknowsImg.classList.remove("active");
  whoknowsImg.style.boxShadow = "none";
});

const audio = document.getElementById("audio1", "audio2");

audio.loop = true;


const lines = document.querySelectorAll('.text p');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.1;

  lines.forEach(line => {
    const lineTop = line.getBoundingClientRect().top;

    if (lineTop < triggerBottom) {
      line.classList.add('show');
    } else {
      line.classList.remove('show');
    }
  });
});

const audios2 = document.getElementById("audio2");
const text = document.getElementById("textBlock");

audios2.addEventListener("play", () => {
  text.style.opacity = "0";
  text.style.pointerEvents = "none";
});

audios2.addEventListener("ended", () => {
  text.style.opacity = "0.7";
  text.style.pointerEvents = "auto";
});
audios2.addEventListener("pause", () => {
  text.style.opacity = "1";
  text.style.pointerEvents = "none";
});

