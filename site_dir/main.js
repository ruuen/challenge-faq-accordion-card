// Get all accordion items
const accordionItems = document.querySelectorAll(".faq__accordion-item");
// Set the initial accordion item
let activeAccordionItem = accordionItems[1];
showItemCopy(activeAccordionItem);

accordionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    hideItemCopy(activeAccordionItem);
    activeAccordionItem = e.currentTarget;
    showItemCopy(activeAccordionItem);
  });
});

function showItemCopy(accordionItem) {
  accordionItem.children[1].classList.remove("faq__item-copy--hidden");
}

function hideItemCopy(accordionItem) {
  accordionItem.children[1].classList.add("faq__item-copy--hidden");
}
