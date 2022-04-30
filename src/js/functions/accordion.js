// accordion

function accordions(accordionsSelector, contentSelector, controlSelector, activeClass) {
    const accordions = document.querySelectorAll(accordionsSelector);
    
    accordions.forEach(el => {
        el.addEventListener('click', ({currentTarget, target}) => {
            const currentContent = currentTarget.querySelector(contentSelector),
            currentController = currentTarget.querySelector(controlSelector);
            
            if(target.closest(controlSelector)) {
                function hide(parent, content, controller) {
                    parent.classList.remove(activeClass);
                    content.style.maxHeight = '';
                    controller.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true)
                }
        
                if(el.classList.contains(activeClass)) {
                    hide(currentTarget, currentContent, currentController);
                } else {
                    
                    accordions.forEach(item => {
                        const content = item.querySelector(contentSelector),
                        controller = item.querySelector(controlSelector);
        
                        hide(item, content, controller);
                    });
        
                    currentTarget.classList.add(activeClass);
                    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
                    currentController.setAttribute('aria-expanded', true);
                    currentContent.setAttribute('aria-hidden', false);
                }
            }
        });
    });
}
accordions('.accordion__item', '.accordion__content', '.accordion__control', 'open' )
// accordion end