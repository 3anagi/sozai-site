const list = document.getElementById("list");

materials.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.thumbnail}" alt="${item.title}">
    <h2>${item.title}</h2>
  `;

  // カード全体クリック
  card.addEventListener("click", () => {
    location.href = `detail.html?id=${item.id}`;
  });

  list.appendChild(card);



});
