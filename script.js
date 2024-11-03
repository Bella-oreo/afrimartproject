const bar = document.getElementById('bar');
        const close = document.getElementById('close');
        const nav = document.getElementById('navbar');

        if (bar) {
            console.log('Bar button found');
            bar.addEventListener('click', () => {
                console.log('Bar button clicked');
                nav.classList.add('active');
                console.log('Nav classes:', nav.className);
            });
        }

        if (close) {
            console.log('Close button found');
            close.addEventListener('click', () => {
                console.log('Close button clicked');
                nav.classList.remove('active');
                console.log('Nav classes:', nav.className);
            });
        }
