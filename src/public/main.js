document.body.onload = () => {
  const desktop = document.querySelector("#desktop");
  desktop.addEventListener("submit", submit("/desktop/"));

  const mobile = document.querySelector("#mobile");
  mobile.addEventListener("submit", submit("/mobile/"));

  const previews = document.querySelector("#previews");
  previews.addEventListener("submit", submit("/previews/"));
};

const submit = prefix => e => {
  e.preventDefault();
  const url = e.target.url.value;
  window.open(prefix + url, "_blank");
};
