const preview = (url, text) =>
  `<div>
    <h1>${text}</h1>
    <a href="/${url}">
      <img
        style="
          border: 1px solid black;
          width: 300px;
          margin: 12px;
        "
        src="/${url}"
      />
    </a>
  </div>`;

const container = children =>
  `<div style="display: flex;">
    ${children}
  </div>`;

const previews = (desktop, mobile) => {
  const desktopLink = preview(desktop, "Desktop");
  const mobileLink = preview(mobile, "Mobile");
  return container(desktopLink + mobileLink);
};

module.exports = { previews };
