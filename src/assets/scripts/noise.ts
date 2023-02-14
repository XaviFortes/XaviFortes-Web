export function createNoise() {
  for (let i = 0; i < 100; i++) {
    const noise = document.createElement("span");
    noise.classList.add("noise-block");
    noise.style.left = `${Math.floor(Math.random() * 100)}%`;
    noise.style.top = `${Math.floor(Math.random() * 100)}%`;
    document.body.appendChild(noise);
  }
}

export function removeNoise() {
  const noiseDiv = document.querySelector(".noise");
  if (noiseDiv) {
    noiseDiv.remove();
  }
}
