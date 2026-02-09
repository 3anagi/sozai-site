const params = new URLSearchParams(location.search);
const id = params.get("id");

const item = materials.find(m => m.id === id);
const detail = document.getElementById("detail");


if (!item) {
  detail.innerHTML = "<p>素材が見つかりません。</p>";
} else {
  detail.innerHTML = `
    <div class="detail-layout">
      <div class="detail-left">
        <img src="${item.thumbnail}" alt="${item.title}" class="detail-img">
      </div>

      <div class="detail-right">
        <h1>${item.title}</h1>

        <a href="${item.file}" download class="download-btn">
          ダウンロード
        </a>

        <p class="detail-description">
          ${item.description}
        </p>
      </div>
    </div>
  `;
}

const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", () => {
  gtag("event", "download", {
    item_id: item.id,
    item_name: item.title
  });
});
