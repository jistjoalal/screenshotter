document.body.onload = () => {
  const routes = ["desktop", "mobile", "previews", "ssr", "pdf"];
  routes.forEach(route => {
    const form = document.querySelector(`#${route}`);
    form.addEventListener("submit", submit(`/${route}/`));
  });
};

const submit = prefix => e => {
  e.preventDefault();
  const url = e.target.url.value;
  window.open(prefix + url, "_blank");
};
