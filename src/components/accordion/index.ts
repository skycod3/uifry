import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem } from "flowbite";

const HTMLAccordionItems = [...document.querySelectorAll(".accordion-item")] as HTMLElement[];

const accordionItems: AccordionItem[] = HTMLAccordionItems.map((item) => {
  const id = item.getAttribute("data-accordion-id")!;
  const triggerEl = item.querySelector(item.getAttribute("data-accordion-trigger")!) as HTMLElement;
  const targetEl = item.querySelector(item.getAttribute("data-accordion-target")!) as HTMLElement;
  const iconEl = item.querySelector(item.getAttribute("data-accordion-icon")!) as HTMLElement;
  const active = item.getAttribute("data-accordion-active") === "true" ? true : false;

  return { id, triggerEl, targetEl, iconEl, active };
});

function handleIconClass(item: AccordionItem) {
  const active = item.active ? "after:content-['-']" : "after:content-['+']";

  item.iconEl?.removeAttribute("class");
  item.iconEl?.classList.add(active);
}

const options: AccordionOptions = {
  alwaysOpen: true,
  activeClasses: "bg-primary-300 text-white",
  inactiveClasses: "bg-white text-primary-900",

  onOpen: (accordion) => accordion._items.forEach((item) => handleIconClass(item)),
  onToggle: (accordion) => accordion._items.forEach((item) => handleIconClass(item)),
};

new Accordion(accordionItems, options);
