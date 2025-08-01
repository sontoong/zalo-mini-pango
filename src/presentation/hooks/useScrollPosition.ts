import { useEffect, useState } from "react";

export const useScrollPosition = (scrollContainerSelector: string) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      const scrollTop = target.scrollTop;
      setScrollY(scrollTop);
    };

    const scrollContainer = document.querySelector(scrollContainerSelector);

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.warn(
        `Scroll container not found with selector: ${scrollContainerSelector}`,
      );
      return () => {};
    }
  }, [scrollContainerSelector]);

  return { scrollY };
};
