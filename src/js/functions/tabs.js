// tabs
const tabsContainer = document.querySelector('.tabs__navigation');
const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function hideTabs() {
    tabsContent.forEach(item => {
        item.classList.remove('show');
        item.setAttribute('aria-hidden', true);
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-expanded', false);
    });
}

function showTabs(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].setAttribute('aria-hidden', false);
    tabs[i].classList.add('active');
    tabs[i].setAttribute('aria-expanded', true);
}

hideTabs();
showTabs();

tabsContainer.addEventListener('click', ({target}) => {
    if(target.classList.contains('tabs__btn')) {
        tabs.forEach((item, i) => {
            if(target == item) {
                hideTabs();
                showTabs(i);
            }
        });
    }
});
// tabs end