import faker from 'faker'

export const inventory = [
    {
        id: 1,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.animals(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 2,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.business(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 3,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.cats(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 4,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.city(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 5,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.fashion(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 6,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.food(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 7,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.image(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 8,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.lorempicsum.image(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 9,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.nature(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 10,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.nightlife(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 11,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.sports(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    },
    {
        id: 12,
        productTitle: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.technics(),
        price: parseFloat(faker.finance.amount()),
        inventory: 3,
        quantity: 0
    }
    // {
    //     id: 13,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 14,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 15,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 16,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 17,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 18,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 19,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 20,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 21,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 22,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 23,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 24,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 25,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 26,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 27,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 28,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 29,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 30,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 31,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 32,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 33,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 34,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 35,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 36,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 37,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 38,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 39,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 40,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 41,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 42,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 43,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 44,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 45,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 46,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 47,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 48,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 49,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
    // {
    //     id: 50,
    //     productTitle: faker.commerce.product(),
    //     productDescription: faker.commerce.productDescription(),
    //     productImage: faker.image.fashion(),
    //     price: faker.finance.amount(),
    //     inventory: 3
    // },
]
