export const COLOURS = {
    white:'#ffffff',
    black:'#000000',
    lightGray:'#B3B4B6',
    accent:'#FFC231',
    accentRed:'FB5D25',
    accentPink:'F96165'
}

export const Categories = [
    {
        name: 'Hamburguer',
        image: require('../database/images/burger.png'),
        items: [
            {
                name: 'Classic Burger',
                weight: 120,
                rating: '5.0',
                price: 30,
                isTopOfTheWeek: true,
                image: require('../database/images/burger/classicburger.png'),
                size:'Grande',
                delivey: 25,
                ingredients: [
                    require('../database/images/flour.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/Tomato.png'),
                ]
            },
            {
                name: 'Aloo Tikki Burger',
                weight: 150,
                rating: '4.5',
                price: 35,
                isTopOfTheWeek: false,
                image: require('../database/images/burger/alootikkiburger.png'),
                size:'Médio',
                delivey: 20,
                ingredients: [
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/Tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                ]
            },
            {
                name: 'Biggie Cheese',
                weight: 250,
                rating: '4.2',
                price: 40,
                isTopOfTheWeek: false,
                image: require('../database/images/burger/biggiecheese.png'),
                size:'Pequeno',
                delivey: 35,
                ingredients: [
                    require('../database/images/Tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/flour.png'),
                ]
            },
        ]
    },
    {
        name: 'Pizza',
        image: require('../database/images/pizza.png'),
        items:[
            {
                name: 'Pizza de Peperoni',
                weight: 250,
                rating: '5.0',
                price: 50,
                isTopOfTheWeek: true,
                image: require('../database/images/pizza/pepperonipizza.png'),
                size: 'Grande"',
                delivery: 30,
                ingredients: [
                  require('../database/images/Tomato.png'),
                  require('../database/images/cheese.png'),
                  require('../database/images/Sliced-Onion.png'),
                  require('../database/images/flour.png'),
                ],
              },
              {
                name: 'Pizza de Queijo',
                weight: 300,
                rating: '4.5',
                price: 60,
                isTopOfTheWeek: false,
                image: require('../database/images/pizza/plaincheesepizza.png'),
                size: 'Média',
                delivery: 25,
                ingredients: [
                  require('../database/images/Sliced-Onion.png'),
                  require('../database/images/flour.png'),
                  require('../database/images/cheese.png'),
                  require('../database/images/Tomato.png'),
                ],
              },
              {
                name: 'Mexican Green Wave',
                weight: 350,
                rating: '4.2',
                price: 65,
                isTopOfTheWeek: false,
                image: require('../database/images/pizza/mexicangreenwave.png'),
                size: 'Média"',
                delivery: 45,
                ingredients: [
                  require('../database/images/flour.png'),
                  require('../database/images/cheese.png'),
                  require('../database/images/Tomato.png'),
                  require('../database/images/Sliced-Onion.png'),
                ],
              },
            ],
          },
          {
            name: 'Bebidas',
            image: require('../database/images/softdrinks.png'),
            items: [
              {
                name: 'Coca Cola',
                weight: 200,
                rating: '5.0',
                price: 10,
                isTopOfTheWeek: true,
                image: require('../database/images/softdrinks/cocacola.png'),
                size: 'Copo Médio',
                delivery: 10,
                ingredients: [require('../database/images/softdrinks/cocacola.png')],
              },
              {
                name: 'Suco de Laranja',
                weight: 500,
                rating: '4.5',
                price: 6,
                isTopOfTheWeek: false,
                image: require('../database/images/softdrinks/orange.png'),
                size: 'Copo Grande',
                delivery: 8,
                ingredients: [require('../database/images/softdrinks/orange.png')],
              },
              {
                name: 'Suco de Manga',
                weight: 150,
                rating: '4.2',
                price: 6,
                isTopOfTheWeek: false,
                image: require('../database/images/softdrinks/mango.png'),
                size: 'Copo Grande',
                delivery: 5,
                ingredients: [require('../database/images/softdrinks/mango.png')],
              },
        ]
    }
]