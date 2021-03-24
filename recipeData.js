import Recipe from './Recipe.js'


    const recipes = {
        chx:
        [
            new Recipe (
                'Chicken Parmesan', 
                [
                    'Chicken Breasts',
                    'Tomato Sauce',
                    'Mozarella Cheese',
                    'Pasta'
                ], 
                [
                    'Slice Chicken Breasts', 
                    'Bread Chicken',
                    'Fry Chicken', 
                    'Cover Chicken in sauce and cheese', 
                    'Bake Chicken',
                    'Boil Pasta and serve'
                ],
                'Michael Izaguirre',
            ),
            new Recipe (
                'Chicken Cacciatore',
                [
                    'Chicken Breasts',
                    'Tomatoes',
                    'Olives',
                    'Onions', 
                    'Basil',
                    'Peppers'
                ],
                [
                    'Cut peppers and onions',
                    'Sear chicken breasts',
                    'Sautee vegetables',
                    'Add tomatoes',
                    'Add chicken and simmer for 30 minutes on medium - low heat'
                ],
                'Michael Izaguirre'
                ),                
        ],
        beef:
        [
            new Recipe(
                'Beef Wellington',
                [
                    'Filet Mignon',
                    'Puff Pastry',
                    'Mushroom Duxelle',
                    'Prosciutto'
                ],
                [
                    'Cover Filet in Mushroom Duxelle',
                    'Wrap Covered Filet in Prosciutto',
                    'Wrap that with Puff Pastry',
                    'Bake at 425 for 40 minutes'
                ],
                'Michael Izaguirre'
            ),
        ]
    }

export default recipes 