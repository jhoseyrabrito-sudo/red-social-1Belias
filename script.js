document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("like-btn");
  const likeCountSpan = document.getElementById("like-count");
  const likeSvg = likeBtn.querySelector("svg");

  // Contador inicial (1200 referente a 1.2K)
  let count = 1200;
  let isLiked = false;

  // Formata o número (ex: 1200 -> 1.2K)
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  // Evento de clique
  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;

    if (isLiked) {
      count++;
      likeBtn.classList.add("liked");
    } else {
      count--;
      likeBtn.classList.remove("liked");
    }

    // Atualiza a exibição no elemento <span>
    likeCountSpan.textContent = formatLikes(count);

    // Animação de pulso no ícone
    likeSvg.style.transform = "scale(1.3)";
    setTimeout(() => {
      likeSvg.style.transform = "scale(1)";
    }, 150);
  });
});