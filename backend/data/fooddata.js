const categories = [
  "Burger",
  "Pizza",
  "Biryani",
  "Paneer",
  "North Indian",
  "Coffee",
  "Cakes",
  "Sweets",
  "Rolls",
  "Sandwiches"
];

const restaurants = [
  "McDonald's",
  "Domino's",
  "Burger King",
  "Pizza Hut",
  "Cupcake House",
  "Starbucks"
];

const foods =[ 
  {
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    name: "Veg Extravaganza",
    category: "Pizza",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
  },

    {
    name: "Classic Veg Burger",
    category: "Burger",
    restaurant: "McDonald's",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    name: "McVeggie Burger",
    category: "Burger",
    restaurant: "McDonald's",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
  },
  {
    name: "McChicken Burger",
    category: "Burger",
    restaurant: "McDonald's",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500",
  },
  {
    name: "Peppy Paneer Pizza",
    category: "Pizza",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500",
  },
  {
    name: "Cheese Burst Pizza",
    category: "Pizza",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500",
  },


   {
    name: "Cold Coffee",
    category: "Cold Coffee",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
  },
  {
    name: "Chocolate Shake",
    category: "Shake",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
  {
    name: "Oreo Shake",
    category: "Shake",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1553787499-6f913324e2c8?w=500",
  },
  {
    name: "Strawberry Shake",
    category: "Shake",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500",
  },


    {
    name: "Classic Cold Coffee",
    restaurant: "Starbucks",
    category: "Cold Coffee",
    price: 220,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
  },
  {
    name: "Caramel Frappuccino",
    restaurant: "Starbucks",
    category: "Coffee",
    price: 280,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500"
  },
  {
    name: "Java Chip Frappuccino",
    restaurant: "Starbucks",
    category: "Coffee",
    price: 320,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500"
  },
  {
    name: "Chocolate Shake",
    restaurant: "McDonald's",
    category: "Shake",
    price: 180,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
  },
   {
    name: "Chicken Biryani",
    category: "Chicken",
    restaurant: "Biryani House",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500",
  },
  {
    name: "Butter Chicken",
    category: "Chicken",
    restaurant: "Punjabi Tadka",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
  },
  {
    name: "Chicken Tikka",
    category: "Chicken",
    restaurant: "Barbeque Nation",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500",
  },




    {
    name: "Paneer Burger",
    category: "Burger",
    restaurant: "Burger Singh",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?w=500",
  },
  {
    name: "Cheese Burst Burger",
    category: "Burger",
    restaurant: "Burger King",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
  },
  {
    name: "Double Patty Burger",
    category: "Burger",
    restaurant: "McDonald's",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500",
  },
 {
    name: "Dal Makhani",
    category: "North Indian",
    restaurant: "Punjabi Tadka",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
  },
  {
    name: "Shahi Paneer",
    category: "North Indian",
    restaurant: "Punjab Grill",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
  },
  {
    name: "Paneer Butter Masala",
    category: "North Indian",
    restaurant: "Bikanervala",
    price: 259,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500",
  },
  {
    name: "Chole Bhature",
    category: "North Indian",
    restaurant: "Haldiram's",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1626132647523-66d6f84a3d4c?w=500",
  },
  {
    name: "Rajma Chawal",
    category: "North Indian",
    restaurant: "Punjabi Rasoi",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=500",
  },
  {
    name: "Aloo Paratha",
    category: "North Indian",
    restaurant: "Paratha Junction",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
  },
  {
    name: "Kadai Paneer",
    category: "North Indian",
    restaurant: "The Yellow Chilli",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3978?w=500",
  },
  {
    name: "Malai Kofta",
    category: "North Indian",
    restaurant: "Punjab Grill",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
  },
  {
    name: "Amritsari Kulcha",
    category: "North Indian",
    restaurant: "Kulcha King",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1626500155537-93690c24099e?w=500",
  },
  {
    name: "Butter Naan Combo",
    category: "North Indian",
    restaurant: "Punjabi Tadka",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500",
  },

    {
    name: "Veggie Delite Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500",
  },
  {
    name: "Paneer Tikka Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
  },
  {
    name: "Aloo Patty Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=500",
  },
  {
    name: "Mexican Patty Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500",
  },
  {
    name: "Chicken Slice Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=500",
  },
  {
    name: "Chicken Tikka Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    name: "Chicken Teriyaki Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 319,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
  },
  {
    name: "Tuna Sub",
    category: "Subway",
    restaurant: "Subway",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=500",
  },



    {
    name: "Gulab Jamun",
    category: "Sweets",
    restaurant: "Haldiram's",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1605197161470-5b87a9b7c7f4?w=500",
  },
  {
    name: "Rasgulla",
    category: "Sweets",
    restaurant: "Bikanervala",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=500",
  },
  {
    name: "Rasmalai",
    category: "Sweets",
    restaurant: "Haldiram's",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500",
  },
  {
    name: "Kaju Katli",
    category: "Sweets",
    restaurant: "Bikanervala",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
  },
  {
    name: "Jalebi",
    category: "Sweets",
    restaurant: "Gopal Sweets",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500",
  },
  {
    name: "Motichoor Laddu",
    category: "Sweets",
    restaurant: "Haldiram's",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=500",
  },
  {
    name: "Milk Cake",
    category: "Sweets",
    restaurant: "Bikanervala",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    name: "Soan Papdi",
    category: "Sweets",
    restaurant: "Haldiram's",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
  },
  {
    name: "Peda",
    category: "Sweets",
    restaurant: "Brijwasi",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=500",
  },
  {
    name: "Besan Laddu",
    category: "Sweets",
    restaurant: "Bikanervala",
    price: 170,
    image:
      "https://images.unsplash.com/photo-1605197161470-5b87a9b7c7f4?w=500",
  },





   {
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    restaurant: "Theobroma",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    name: "Black Forest Cake",
    category: "Cakes",
    restaurant: "Monginis",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500",
  },
  {
    name: "Red Velvet Cake",
    category: "Cakes",
    restaurant: "Theobroma",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1586788680434-30c9e8c6f6b8?w=500",
  },
  {
    name: "Pineapple Cake",
    category: "Cakes",
    restaurant: "Winni",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500",
  },
  {
    name: "Butterscotch Cake",
    category: "Cakes",
    restaurant: "Mio Amore",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500",
  },
  {
    name: "Vanilla Cream Cake",
    category: "Cakes",
    restaurant: "Monginis",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
  },
  {
    name: "Fruit Cake",
    category: "Cakes",
    restaurant: "Theobroma",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500",
  },
  {
    name: "Blueberry Cheesecake",
    category: "Cakes",
    restaurant: "Theobroma",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
  },
  {
    name: "Chocolate Lava Cake",
    category: "Cakes",
    restaurant: "Domino's",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
  {
    name: "KitKat Chocolate Cake",
    category: "Cakes",
    restaurant: "Winni",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500",
  },


    {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500",
  },
  {
    name: "Cheese Burst Pizza",
    category: "Pizza",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500",
  },
  {
    name: "Garlic Breadsticks",
    category: "Sides",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
  },
  {
    name: "Stuffed Garlic Bread",
    category: "Sides",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500",
  },
  {
    name: "Veg Taco Mexicana",
    category: "Taco",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500",
  },



    {
    name: "Lucknowi Chicken Biryani",
    category: "Biryani",
    restaurant: "Behrouz Biryani",
    price: 359,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
  },
  {
    name: "Fish Biryani",
    category: "Biryani",
    restaurant: "Coastal Kitchen",
    price: 379,
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=500",
  },
  {
    name: "Biryani Combo Meal",
    category: "Biryani",
    restaurant: "Biryani Blues",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500",
  },

  {
  "name": "Chicken Biryani",
  "category": "Chicken",
  "price": 249,
  "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
  "restaurant": "Food Hub",
 
},
  {
    name: "Choco Lava Cake",
    category: "Dessert",
    price: 109,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
  {
    name: "Coca Cola",
    category: "Beverage",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500",
  },


    {
    name: "Cheese Burst Burger",
    category: "Burger",
    restaurant: "Burger King",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
  },
  {
    name: "Double Patty Burger",
    category: "Burger",
    restaurant: "McDonald's",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500",
  },
  {
    name: "Spicy Chicken Burger",
    category: "Burger",
    restaurant: "KFC",
    price: 259,
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500",
  },




   {
    name: "Strawberry Shake",
    category: "Shake",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500",
  },
  {
    name: "Mango Smoothie",
    category: "Smoothie",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500",
  },
  {
    name: "Fresh Orange Juice",
    category: "Juice",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500",
  },
  {
    name: "Lemon Mint Mojito",
    category: "Mocktail",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500",
  },
  {
    name: "Coca-Cola",
    category: "Cold Drink",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",
  },
  {
    name: "Pepsi",
    category: "Cold Drink",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500",
  },








    {
    name: "Rainbow Cake",
    category: "Cakes",
    restaurant: "Ferns N Petals",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500",
  },
  {
    name: "Coffee Walnut Cake",
    category: "Cakes",
    restaurant: "Theobroma",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500",
  },
  {
    name: "Red Bull Energy Drink",
    category: "Energy Drink",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=500",
  },
  {
    name: "Paneer Butter Masala",
    category: "North Indian",
    restaurant: "Bikanervala",
    price: 259,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500",
  },
  {
    name: "Chole Bhature",
    category: "North Indian",
    restaurant: "Haldiram's",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1626132647523-66d6f84a3d4c?w=500",
  },
  {
    name: "Rajma Chawal",
    category: "North Indian",
    restaurant: "Punjabi Rasoi",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=500",
  },



   {
    name: "Veg Biryani",
    category: "Biryani",
    restaurant: "Biryani House",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=500",
  },
  {
    name: "Chicken Dum Biryani",
    category: "Biryani",
    restaurant: "Behrouz Biryani",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
  },
  {
    name: "Mutton Biryani",
    category: "Biryani",
    restaurant: "Paradise Biryani",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
  },
  {
    name: "Aloo Paratha",
    category: "North Indian",
    restaurant: "Paratha Junction",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
  },
  {
    name: "Kadai Paneer",
    category: "North Indian",
    restaurant: "The Yellow Chilli",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3978?w=500",
  },
  {
    name: "Malai Kofta",
    category: "North Indian",
    restaurant: "Punjab Grill",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
  },
  {
    name: "Amritsari Kulcha",
    category: "North Indian",
    restaurant: "Kulcha King",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1626500155537-93690c24099e?w=500",
  },




   {
    name: "White Forest Cake",
    category: "Cakes",
    restaurant: "Mio Amore",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500",
  },
  {
    name: "Pistachio Cake",
    category: "Cakes",
    restaurant: "Ferns N Petals",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    name: "Ferrero Rocher Cake",
    category: "Cakes",
    restaurant: "Theobroma",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
  {
    name: "Oreo Chocolate Cake",
    category: "Cakes",
    restaurant: "Winni",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1586788680434-30c9e8c6f6b8?w=500",
  },
  {
    name: "Mango Cake",
    category: "Cakes",
    restaurant: "Monginis",
    price: 529,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500",
  },
  {
    name: "Rasmalai Cake",
    category: "Cakes",
    restaurant: "Bikanervala",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    name: "Butter Naan Combo",
    category: "North Indian",
    restaurant: "Punjabi Tadka",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500",
  }

];

// Generate remaining items up to 70
for (let i = foods.length + 1; i <= 70; i++) {
  const category = categories[i % categories.length];
  const restaurant = restaurants[i % restaurants.length];

  foods.push({
    name: `${restaurant} ${category} Special ${i}`,
    image: `https://picsum.photos/400/300?random=${i}`,
    price: 99 + i * 10,
    category: [category],
    restaurant: [restaurant],
    rating: Number((4 + Math.random()).toFixed(1))
  });
}

module.exports = foods;