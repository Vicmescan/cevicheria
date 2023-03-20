# Cevicheria Website

## Intro

This website was created for the restaurant La Cevicheria located at Dresdener Straße 120, Berlin, and is deployed on the xxx platform.

For this project I basically used React, React Bootstrap for the design and some libraries for the translations, the routing, the icons or the coockies sign.

## To update meals or beverages

- Delete components representing food/drink in src/components/MenuDishes.js or src/components/MenuDrinks.js components.
- Delete in src/i18n/de, src/i18n/en and src/i18n/es the variables with their translations corresponding to the components deleted in the previous step.
- Create a variable in src/i18n/de, src/i18n/en and src/i18n/es (always the same in the three documents) and write the corresponding translation in the three languages of all the dishes/drinks to be added.
- Create in the desired position of src/components/MenuDishes or src/components/MenuDrinks.js a component corresponding to what you want to add, being MenuDishesDish for dishes MenuDrinksDrink for drinks and MenuDrinksWine for wines.
- Pass to the components created as Props the names as "title" in a format that can be translated by i18n, the price as "price", in case of some beverages add the size as "size", and if they have additives add them as "additives". There is also a props called "no02" for wines (MenuDrinksWine) that if given the value "true" does not show the size 0.2 in the quantities, as in the case of cava.