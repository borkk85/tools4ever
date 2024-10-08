// This is all you.

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.inline-menu li a');
    const sections = document.querySelectorAll('section[id]');

    function setActiveMenuItem() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

        menuItems.forEach((item) => item.parentElement.classList.remove('active'));
        menuItems[index].parentElement.classList.add('active');
    }

    setActiveMenuItem();
    window.addEventListener('scroll', setActiveMenuItem);
});

document.addEventListener('alpine:init', () => {
    Alpine.data('submenu', () => ({
        activeItem: null,
        init() {
            this.setActiveItemOnScroll();
            window.addEventListener('scroll', () => this.setActiveItemOnScroll());
        },
        setActiveItem(item) {
            this.activeItem = item;
        },
        setActiveItemOnScroll() {
            const sections = document.querySelectorAll('section[id]');
            let index = sections.length;

            while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

            this.activeItem = sections[index].id;
        }
    }));
});