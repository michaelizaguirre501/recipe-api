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
        ],
        fish:[
            new Recipe(
                'Sole a la Meuniere',
                [
                    'Dover Sole Filet',
                    'Butter',
                    'Lemon Juice',
                    'Parsley',
                    'All Purpose Flour'
                ],
                [
                    'Cover Dover Sole Filet in flour and shake off excess flour',
                    'In a skillet heat oil and sautee filet until golden brown flip and repeat on other side',
                    'Add butter to skillet and spoon melted butter onto filet as it cooks',
                    'Add lemon juice and spoon over fish',
                    'Remove from heat and spinkle with parsley'
                ],
                'Michael Izaguirre'
            ),
            new Recipe(
                'Honey Glazed Salmon',
                [
                    'Salmon Filets',
                    'Honey',
                    'Soy Sauce',
                    'Sriracha',
                    'Lemon Juice',
                    'Minced Garlic',
                    'Butter'
                ],
                [
                    'In a large skillet, add butter, garlic, honey, soy sauce, lemon juice, and sriracha. Cook for 30 seconds or so until sauce is heated thru',
                    'Add salmon skin side down, and cook for 3 minutes, baste frequently with sauce from the skillet',
                    'Put whole skillet in the broiler for 5-6 minutes, or until desired doneness'
                ],
                'Michael Izaguirre'
            )
        ]
    }

export default recipes 