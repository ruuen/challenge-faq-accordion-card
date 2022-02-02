// Define state class names
const activeHeadingClass = "faq__item-heading--active";
const activeHeadingIconClass = "faq__item-heading-icon--active";
const hiddenCopyClass = "faq__item-copy--hidden";

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
  accordionItem.children[0].children[0].classList.add(activeHeadingClass);
  accordionItem.children[0].children[1].classList.add(activeHeadingIconClass);
  accordionItem.children[1].classList.remove(hiddenCopyClass);
}

function hideItemCopy(accordionItem) {
  accordionItem.children[0].children[0].classList.remove(activeHeadingClass);
  accordionItem.children[0].children[1].classList.remove(activeHeadingIconClass);
  accordionItem.children[1].classList.add(hiddenCopyClass);
}
