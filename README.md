# Stylidex
a MERN stack style generator
## Overview
Stylidex is a outfit generator that produces possible outfits for the user to choose from which are assembled based on clothing items withing the users own personal wardrobe. These outfits can be compiled using a number of factors including, but not limited to:
- date of last usage
- current weather/seasonal conditions
- coordiation with other currently chosen items
## Functionality
The user will login to their account at which point they will then have access to their personal database of clothing items. The user will be able to add/remove items from their wardrobe. Upon login a new outfit will be generated based on the seasonal conditions as well as based on items that have least recently been used. The user can choose to either accept this suggestion as the one which they will wear, or generate a new suggestion. If the user wishes to keep one or more items from the previous suggestion, only the items they wish to swap out will generate new suggestions. 
## MVPs
- User will be able to add/remove clothing items from their collection with parameters such as season, type of item (pants/jacket/etc), color, etc. These parameter will give Stylidex insight as to how to match items together to make up an outfit
- Users will be geo-located to give insight into season/weather to appropriately match outfits to the current weather conditions
- Clothing items will be time stammped on their last usage to give users insight as to when they were last worn and whether they should be used or removed from the user's wardrobe.
- Clothing items will keep record of how well they match other items based on users feedback
- Search feature for user to find what items they have in their wardrobe
## Technologies
#### Backend: Node, Express, MongoDB
#### Frontend: React and React Native with Redux
## Team Members & Work Breakdown
David Campuzano, Peter Kim, Brian Klein, Will Marino
### Day 1
- David - Begin routes/validations users/items
- Will - Begin front-end routes users/items
- Peter - Design UI/sample state/projected routes
- Brian - Organize workflow/support on any issues
### Day 2
- David - Routes/validations for items/collections
- Will - Front-end routes collections
- Peter - Flex
- Brian - Integrate AWS
### Day 3
- David - Finish collections backend
- Will - Begin styling
- Peter - Flex
- Brian - Support on any issues/review code/Help styling
### Day 4
- David - Finalize all backend work
- Will - Finalize styling
- Peter - Flex
- Brian - Support on any issues/review code/clean up code
