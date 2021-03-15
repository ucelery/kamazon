var models = [
    {
        "content": "Bat Rider Eugene",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598515255345152/batgirl-eugine.png?width=139&height=189",
        "price": "1200"
    },
    {
        "content": "Chocolate Passion Idol Eva",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598516761624586/chocolate-passion-idol-eva.png?width=256&height=229",
        "price": "1200"
    },
    {
        "content": "Creature Marvin",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598517709799434/creature-marvin.png?width=193&height=211",
        "price": "1200"
    },
    {
        "content": "Flight Attendant Garam",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598518670557205/flight-attendant-garam.png?width=211&height=252",
        "price": "2400"
    },
    {
        "content": "Graduate Rachel",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598519617421352/graduate-rachel.png?width=189&height=229",
        "price": "1200"
    },
    {
        "content": "Ice Hokey Fan Catherine",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598520880824340/ice-hokey-fan-catherine.png?width=207&height=252",
        "price": "1200"
    },
    {
        "content": "Lady by the Sea Lapice",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598522130071552/lady-by-the-sea-lapice.png?width=274&height=279",
        "price": "2400"
    },
    {
        "content": "Little Rue",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598523099086869/little-rue.png?width=135&height=157",
        "price": "1200"
    },
    {
        "content": "PE Teacher Yuze",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598524432744469/pe-teacher-yuze.png?width=135&height=198",
        "price": "600"
    },
    {
        "content": "Pilot Marina",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598526135762974/pilot-marina.png?width=234&height=229",
        "price": "1200"
    },
    {
        "content": "Polar Bear Ranpang",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598621383950356/polar-bear-ranpang.png?width=162&height=202",
        "price": "600"
    },
    {
        "content": "Winter Sweetheart Miya",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598557282533386/winter-sweetheart-miya.png?width=234&height=243",
        "price": "2400"
    },
    {
        "content": "Yeti and Alef",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598562676015104/yeti-and-alef.png?width=297&height=256",
        "price": "1200"
    },
    {
        "content": "Sailor Suit Akayuki",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598630959677462/sailor-suit-akayuki.png?width=216&height=207",
        "price": "2400"
    },
    {
        "content": "Chocolate Confession Future Princess",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598659929604106/schoolgirl-future-princess.png?width=144&height=171",
        "price": "600"
    },
    {
        "content": "Tree Plushie Aoba",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598690368454696/tree-plushie-aoba.png?width=180&height=256",
        "price": "600"
    },
    {
        "content": "Snowman Rue",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598695505428500/snowman-rue.png?width=234&height=279",
        "price": "600"
    },
    {
        "content": "Shark Pajama Marina",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598693417451530/shark-pajama-marina.png?width=234&height=189",
        "price": "1200"
    },
    {
        "content": "Toy Gun Hekate",
        "picture": "https://media.discordapp.net/attachments/742369003002921031/820598698115334144/toy-gun-hekate.png?width=252&height=211",
        "price": "1200"
    }
];

let cartmodal = document.getElementById('cart-container');
var modal = document.getElementById('modal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add('hide');
    }
    if (event.target === cartmodal) {
        cartmodal.classList.add('hide');
        
    }
}

var addToCartPopUp = (selected) => {
    let header = document.getElementById('header');
    header.innerText = `Add '${selected}' to cart?`;
    
    modal.classList.remove("hide");
}

var addToCart = () => {
    let header = document.getElementById('header');
    let start = header.textContent.indexOf("'");
    let end = header.textContent.lastIndexOf("'");
    var selected;

    for (let index = start+1; index < end; index++) {
        selected += header.textContent[index];
    }

    // close modal
    modal.classList.remove("hide");

    // remove random undefined
    let findItem = models.find(item => item.content === selected.slice(9));
    let numForm = document.createElement('input')
    numForm.classList.add('numform');
    numForm.setAttribute("type", "number");

    let string = findItem.content.split(' ').join('-');
    numForm.setAttribute("name", string);
    numForm.setAttribute("value", 1);

    let list_container = document.createElement('div');
    list_container.classList.add('cart-item');

    let textItem = document.createElement('div');
    textItem.classList.add('cart-text-item');
    textItem.textContent = findItem.content;
    list_container.appendChild(textItem);
    list_container.appendChild(numForm);

    let cartList = document.getElementById('cart-list');
    cartList.appendChild(list_container);

    modal.classList.add("hide");
}

var cancelModal = () => {
    modal.classList.add('hide');
}

var log = (log) => {
    console.log(log);
}