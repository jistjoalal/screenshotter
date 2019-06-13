const root = "https://jist-screenshotter.herokuapp.com";

const previews = url => {
  const desktopLink = preview(url, "Desktop");
  const mobileLink = preview("mobile/" + url, "Mobile");
  return container(desktopLink + mobileLink);
};

const preview = (url, text) => `
  <hr />

  <div style="display: flex;">
    <div>
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
    [![Loading...](${root}/${url})](${url})
  </code>
`;

const embedHtml = url => `
  <p>HTML</p>
  <code>
    &lt;img src="https://jist-screenshotter.herokuapp.com/${url}" alt="Loading..." /&gt;
  </code>
`;

const previewImg = url => `
  <a href="/${url}" class="preview"> 
    <img
      alt="Loading..."
      src="/${url}"
    />
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
