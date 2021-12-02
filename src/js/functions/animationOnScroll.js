// function animation with css animate //
// add class .animate__animated and attribute data-animation-name="" on element //

function animationOnScroll(animElements, dataArrtibute, activeClass, noHideClass) {
    const animItems = document.querySelectorAll(animElements);
    
    if (animItems.length > 0) {
      window.addEventListener('scroll', () => {
        animItems.forEach(item => {
          const itemHeight = item.offsetHeight,
                itemOffset = offset(item),
                animStart = 4,   
                animationName = item.getAttribute(dataArrtibute) || activeClass;      
    
          let itemPoint = window.innerHeight - itemHeight / animStart;
    
          if (itemHeight > window.innerHeight) {
            itemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          
          if (window.pageYOffset > itemOffset - itemPoint && window.pageYOffset < itemOffset + itemHeight) {
            item.classList.add(animationName);
          } else {
            if(!item.classList.contains(noHideClass)) {
              item.classList.remove(animationName);
            }
          }
        });
      });
    
      function offset(el) {
        const rect = el.getBoundingClientRect().top,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect + scrollTop;
      }
    }
}

animationOnScroll('.animate__animated', 'data-animation-name', 'animate_active', 'anim-no-hide');
