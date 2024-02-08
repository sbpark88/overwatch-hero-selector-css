const $ = (selector) => {
  const nodeList = document.querySelectorAll(selector);
  return nodeList.length === 1 ? nodeList[0] : nodeList;
};

const arrayCheck = (something) => something instanceof Array;
const htmlArrayRemoveComma = (arr) => arr.join("");
const safeHtml = (html) =>
  arrayCheck(html) ? htmlArrayRemoveComma(html) : html;
const render =
  (el) =>
  (html = "") =>
    (el.innerHTML = safeHtml(html));

export { $, render };
