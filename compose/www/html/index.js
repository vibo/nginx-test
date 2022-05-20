// module
const Main = (function (window, undefined) {
  const document = window.document;

  const getElement = (selector) => document.querySelector(selector);
  const getAttribute = (attribute) => (element) =>
    element.getAttribute(attribute);
  const setAttribute = (attribute) => (value) => (element) =>
    element.setAttribute(attribute, value);

  return {
    getAttribute,
    getElement,
    setAttribute,
  };
})(window);
