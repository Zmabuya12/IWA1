// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const books = [
    {
        status: document.querySelector
        ('#book0 .status').innerText,
        html: {
            status: document.querySelector
            ('#book0 .status'),
            reserve: document.querySelector
            ('#book0 .reserve'),
            checkout: document.querySelector
            ('#book0 .checkout'),
            checkin: document.querySelector
            ('#book0 .checkin'),
        },
}, {
    status: document.querySelector
    ('#book1 .status').innerText,
    html: {
        status: document.querySelector
        ('#book1 .status'),
        reserve: document.querySelector
        ('#book1 .reserve'),
        checkout: document.querySelector
        ('#book1 .checkout'),
        checkin: document.querySelector
        ('#book1 .checkin'),
    },
}, {
    status: document.querySelector
    ('#book2 .status').innerText,
    html: {
        wrapper: document.querySelector
        ('#book2'),
        status: document.querySelector
        ('#book2 .status'),
        reserve: document.querySelector
        ('#book2 .reserve'),
        checkout: document.querySelector
        ('#book2 .checkout'),
        checkin: document.querySelector
        ('#book2 .checkin'),
    },
}
]

books[0].html.checkin.computedStyleMap.color -''
books[0].html.status.computedStyleMap.color - ''
STATUS_MAP[0].status.color
books[1].html.checkin.computedStyleMap.color -''
books[1].html.status.computedStyleMap.color - ''
STATUS_MAP[1].status.color
books[2].html.checkin.computedStyleMap.color -''
books[2].html.status.computedStyleMap.color - ''
STATUS_MAP[2].status.color