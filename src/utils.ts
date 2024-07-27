export const scrollToElement = (element: HTMLElement | null) => {
  if (!element) return;

  const offset = window.innerWidth >= 768 ? 114 : 10;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}