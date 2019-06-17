const { ROOT } = require("./env");

const previews = url => {
  const desktopLink = preview("/desktop/" + url, "Desktop");
  const mobileLink = preview("/mobile/" + url, "Mobile");
  return container(desktopLink + mobileLink);
};

const preview = (url, text) => `
  <hr />

  <div class="preview">
    <div class="preview__info">
      <h1>${text}</h1>
      ${embedMarkdown(url)}
      ${embedHtml(url)}
    </div>

    ${previewImg(url)}
  </div>
`;

const embedMarkdown = url => `
  <p>Markdown</p>
  <code>
    ![Screenshot](${ROOT}${url})
  </code>
`;

const embedHtml = url => `
  <p>HTML</p>
  <code>
    &lt;img src="${ROOT}${url}" alt="Screenshot" /&gt;
  </code>
`;

const previewImg = url => `
  <a href="${url}" class="preview__img"> 
    <img src="${url}" />
    <span class="spinner"></span>
  </a>
`;

const container = children => `
  <head>
    <link rel="stylesheet" type="text/css" href="/style.css" />
  </head>
  <body>
    <div class="container">
      ${children}
    </div>
  </body>
`;

module.exports = { previews };
