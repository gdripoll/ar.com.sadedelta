export const handleScrollTo = (el) => {
  const ob = document.getElementById(el);
  console.log(ob);
  ob.scrollIntoView({ behavior: "smooth", block: "start" });
};
export const handleScrollToTop = () => {
  handleScrollTo("headerBar");
};
export const handleScrollToBottom = () => {
  handleScrollTo("footerBar");
};
