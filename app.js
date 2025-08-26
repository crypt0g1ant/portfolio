// SOCIAL BUTTONS
const whatsapp = document.querySelectorAll('.wbtn')
const twitter = document.querySelectorAll('.tbtn')



whatsapp.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.t.me/jotunn_eth"
    })
})

twitter.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.x.com/crypt0g1ant"
    })
})



// TOP BUTTON
const topBtn = document.querySelector ('.top-button')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show-btn')
    } 
    else {
        topBtn.classList.remove('show-btn')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


// PROJECTS
const pages = [
    {
        id: 1,
        image: 'assets/pfp.jpeg',
        title: 'I eat doge&#8482;',
    },
    {
        id: 2,
        image: 'assets/allo pass.jpeg',
        title: 'Allo Pass',
    },
    {
        id: 3,
        image: 'assets/abby.jpeg',
        title: 'Abby 1',
    },
    {
        id: 4,
        image: 'assets/abby 2.jpeg',
        title: 'Abby 2',
    },
    {
        id: 5,
        image: 'assets/toasty 1.jpeg',
        title: 'toasty 1',
    },
    {
        id: 6,
        image: 'assets/toasty 2.jpeg',
        title: 'toasty 2',
    },
    {
        id: 7,
        image: 'assets/pepecat 1.jpeg',
        title: 'pepecat 1',
    },
    {
        id: 8,
        image: 'assets/cave.jpeg',
        title: 'cave',
    },
    {
        id: 9,
        image: 'assets/noctra.jpeg',
        title: 'noctra',
    },
    {
        id: 10,
        image: 'assets/out ofthe nest.jpeg',
        title: 'out of the nest',
    },
    {
        id: 11,
        image: 'assets/harold 2.jpg',
        title: 'harold 2',
    },
    {
        id: 12,
        image: 'assets/chadonic.jpeg',
        title: 'chadonic',
    },
    {
        id: 13,
        image: 'assets/pepecat 2.png',
        title: 'pepecat 2',
    },
    {
        id: 14,
        image: 'assets/bulls club 1.png',
        title: 'bulls club',
    },
    {
        id: 15,
        image: 'assets/harold.jpeg',
        title: 'harold 1',
    },
    {
        id: 16,
        image: 'assets/kulu 1.jpeg',
        title: 'kulu 1',
    },
    {
        id: 17,
        image: 'assets/hege.jpeg',
        title: 'hege',
    },
    {
        id: 18,
        image: 'assets/kulu 2.jpeg',
        title: 'kulu 2',
    },
    {
        id: 19,
        image: 'assets/titcoin.jpeg',
        title: 'titcoin',
    },
    {
        id: 20,
        image: 'assets/stash.jpeg',
        title: 'stash',
    },
    {
        id: 21,
        image: 'assets/grby.jpeg',
        title: 'grby',
    },
    {
        id: 22,
        image: 'assets/floki 1.jpeg',
        title: 'floki 1',
    },
    {
        id: 23,
        image: 'assets/zeus.jpeg',
        title: 'zeus',
    },
    {
        id: 24,
        image: 'assets/springer.jpeg',
        title: 'springer 1',
    },
    {
        id: 25,
        image: 'assets/floki 2.jpeg',
        title: 'floki 2',
    },
    {
        id: 26,
        image: 'assets/klaus.jpeg',
        title: 'klaus',
    },
    {
        id: 27,
        image: 'assets/springer 2.jpeg',
        title: 'springer 2',
    },
    {
        id: 28,
        image: 'assets/zeus, pepecat & skop.jpeg',
        title: 'zeus, pepecat & skop',
    },
    {
        id: 29,
        image: 'assets/unfk.jpeg',
        title: 'unfk',
    },
    {
        id: 30,
        image: 'assets/fego.jpeg',
        title: 'fego',
    },
    {
        id: 31,
        image: 'assets/orc.jpeg',
        title: 'orc',
    },
    {
        id: 32,
        image: 'assets/iceland.jpeg',
        title: 'iceland',
    },
    {
        id: 33,
        image: 'assets/fartless.jpeg',
        title: 'fartless',
    },
    {
        id: 34,
        image: 'assets/fugz&gugo.jpeg',
        title: 'fugz & gugo',
    },
];

// Sort alphabetically by title
pages.sort((a, b) => a.title.localeCompare(b.title));

const article = document.querySelector('.projects-content');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(pages);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
            <article class="project">
                <div class="project-image">
                    <img src="${item.image}" alt="artwork">
                </div>

                <div class="project-text">
                    <h1>${item.title}</h1>
                </div>

                <div class="project-buttons">
                    <button class="code-button" data-src="${item.image}">view artwork</button>
                </div>
            </article>
        `;
    });

    article.innerHTML = displayMenu.join('');

    // Reattach modal listeners
    attachArtworkListeners();
}

function attachArtworkListeners() {
    const modal = document.getElementById('artwork-modal');
    const fullImg = document.getElementById('artwork-full');

    document.querySelectorAll('.code-button').forEach(button => {
        button.addEventListener('click', () => {
            const src = button.getAttribute('data-src');
            fullImg.src = src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}