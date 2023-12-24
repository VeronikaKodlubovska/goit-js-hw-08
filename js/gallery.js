const images = [{
        preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = images.reduce((html, element) => html + `<li class="gallery-item"> <a class="gallery-link" href="${element.original}"> <img class="gallery-image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"/>
        </a>
        </li> `, "");

const links = galleryEl.querySelectorAll(".gallery-link");
links.forEach(link => {
    link.addEventListener('click', handleGalleryClick);
});

function handleGalleryClick(event) {
    event.preventDefault();

    const clickedLink = event.target.closest('.gallery-link');

    if (clickedLink) {
        const bigImg = clickedLink.querySelector('.gallery-image').dataset.source;
        const altText = clickedLink.querySelector('.gallery-image').alt;

        openModal(bigImg, altText);
    }
}

function openModal(bigImg, altText) {
    const instance = basicLightbox.create(
        `<img src="${bigImg}" alt="${altText}">`, {
            onShow: (instance) => {
                document.addEventListener('keydown', handleKeyPress);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', handleKeyPress);
            }
        }
    );

    instance.show();

    function handleKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}