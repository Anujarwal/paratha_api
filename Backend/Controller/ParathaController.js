const getParatha = (req, res) => {
  res.json([
    {
      id: 1,
      img: "https://b.zmtcdn.com/data/dish_photos/a6b/126aa7e892cbad15adbf696d060bba6b.png?fit=around|130:130&crop=130:130;*,*",
      name: "Plain paratha + Yogurt",
      price: 40,
      description: "Extra Sauce",
      qty: 1,
      category: "spicy paratha",
    },
    {
      id: "2",
      img: "https://b.zmtcdn.com/data/dish_photos/23f/5ffa97ac943424bd301189912f04723f.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Aalo Paratha",
      price: 50,
      description: "Extra Sauce, Yogurt, Cheese",
      qty: 1,
      category: "Sweet paratha",
    },
    {
      id: "3",
      img: "https://b.zmtcdn.com/data/dish_photos/16f/e4555967361aa1ceb249fabc27c5a16f.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Veg Paratha",
      price: 50,
      description: "Corn, Cabbage, Fenugreek, Cheese",
      qty: 1,
      category: "Cheese paratha",
    },
    {
      id: "4",
      img: "https://b.zmtcdn.com/data/dish_photos/849/7135abe633165d3227ed54c9e4f4e849.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Double Cheese Paratha",
      price: 70,
      description: "Extra Sauce, Yogurt, Corn",
      qty: 1,
      category: "spicy paratha",
    },
    {
      id: "5",
      img: "https://b.zmtcdn.com/data/dish_photos/6b8/19789e0fec1c374884865abd461ee6b8.png?fit=around|130:130&crop=130:130;*,*",
      name: "Corn Cheese Paratha",
      price: 80,
      description: "Extra Sauce, Yogurt, Cheese",
      qty: 1,
      category: "spicy paratha",
    },
    {
      id: "6",
      img: "https://b.zmtcdn.com/data/dish_photos/f24/0d6673fdece45efd2a47b556f17d2f24.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Methi Paratha",
      price: 100,
      description: "Extra Sauce, Yogurt, Cheese",
      qty: 1,
      category: "Cheese paratha",
    },
    {
      id: "7",
      img: "https://b.zmtcdn.com/data/dish_photos/f24/0d6673fdece45efd2a47b556f17d2f24.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Gobi Paratha",
      price: 100,
      description: "Extra Sauce, Yogurt, Cheese",
      qty: 1,
      category: "Cheese paratha",
    },
    {
      id: "8",
      img: "https://b.zmtcdn.com/data/dish_photos/f24/0d6673fdece45efd2a47b556f17d2f24.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Sev Paratha",
      price: 100,
      description: "Extra Sauce, Yogurt, Cheese",
      qty: 1,
      category: "Cheese paratha",
    },
  ]);
};

const getPizza = (req, res) => {
  res.json([
    {
      id: 1,
      img: "https://b.zmtcdn.com/data/dish_photos/2ff/0e7df98b7cffdb0b88856464014ad2ff.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Schezwan Margherita",
      price: 219,
      description:
        "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese",
      qty: 1,
    },
    {
      id: 2,
      img: "https://b.zmtcdn.com/data/dish_photos/4f3/0c4c12819d98a35144e3f08451ae64f3.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Mexican Fiesta",
      price: 319,
      description:
        "Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.",
      qty: 1,
    },
    {
      id: 3,
      img: "https://b.zmtcdn.com/data/dish_photos/1e7/3e7ddf66b3fbb8447f66e707a40981e7.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "Bold BBQ Veggies",
      price: 319,
      description:
        "Our signature pan sauce, with BBQ Sauce drizzle, topped with mushroom, onion, green capsicum, & red paprika",
      qty: 1,
    },
    {
      id: 4,
      img: "https://b.zmtcdn.com/data/dish_photos/59a/b7d1f56df6414f8b6e49001af95e259a.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Ultimate Tandoori Veggie",
      price: 379,
      description:
        "An ultimate combination of your favourite veggies- onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.",
      qty: 1,
    },
    {
      id: 5,
      img: "https://b.zmtcdn.com/data/dish_photos/41c/bf62afee565475fb92a204206321a41c.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Mazedar Makhni Paneer",
      price: 379,
      description:
        "A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle",
      qty: 1,
    },
    {
      id: 6,
      img: "https://b.zmtcdn.com/data/dish_photos/a8c/9bd233c76aaf2d2745c5c07332609a8c.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Awesome American Cheesy",
      price: 379,
      description:
        "Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce.",
      qty: 1,
    },
    {
      id: 7,
      img: "https://b.zmtcdn.com/data/dish_photos/793/8b46ba82727c451f87740cda85b89793.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Margherita",
      price: 169,
      description:
        "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
      qty: 1,
    },
    {
      id: 8,
      img: "https://b.zmtcdn.com/data/dish_photos/423/9b867d56f10ca8761ab6362cd4a5d423.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Corn & Cheese",
      price: 219,
      description:
        "A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce.",
      qty: 1,
    },
  ]);
};

const getBurger = (req, res) => {
  res.json([
    {
      id: 1,
      img: "https://b.zmtcdn.com/data/dish_photos/252/28d4d94291cf9d70f5f559d1dfa46252.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "Corn & Cheese Burger",
      price: 151.84,
      description:
        "A juicy corn and cheese patty, topped with extra cheese, Cocktail sauce, with some heat from jalapenos & crunch from onions",
      qty: 1,
    },
    {
      id: 2,
      img: "https://b.zmtcdn.com/data/dish_photos/87f/b13811eeee71e578bc6ca89eca0ec87f.png?fit=around|130:130&crop=130:130;*,*",
      name: "McAloo Tikki Burger",
      price: 69.52,
      description:
        "The World's favourite Indian burger! A crispy Aloo patty, tomato mayo sauce & ... read more",
      qty: 1,
    },
    {
      id: 3,
      img: "https://b.zmtcdn.com/data/dish_photos/631/51352086abd3efaaef530188aec16631.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "McChicken Burger",
      price: 141.65,
      description:
        "Enjoy the classic, tender chicken patty with creamy mayonnaise and lettuce in every bite",
      qty: 1,
    },
    {
      id: 4,
      img: "https://b.zmtcdn.com/data/dish_photos/084/a25f25f74a6a6068e55fcbced1580084.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "McVeggie Burger",
      price: 149.14,
      description:
        "Savour your favorite spiced veggie patty, lettuce, mayo, between toasted sesame buns in every bite",
      qty: 1,
    },
    {
      id: 6,
      img: "https://b.zmtcdn.com/data/dish_photos/6f2/7a248018e36c112eb3fb0b877b4b06f2.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "Veg Maharaja Mac Burger",
      price: 224.19,
      description:
        "Savor our filling 11 layer burger! Double the indulgence with 2 corn & ... read more",
      qty: 1,
    },
    {
      id: 7,
      img: "https://b.zmtcdn.com/data/dish_photos/1b4/167aeccf27bab14940fa646c8328b1b4.png?fit=around|130:130&crop=130:130;*,*",
      name: "Mexican McAloo Tikki Burger",
      price: 224.19,
      description:
        "Savor our filling 11 layer burger! Double the indulgence with 2 corn & ... read more",
      qty: 1,
    },
    {
      id: 8,
      img: "https://b.zmtcdn.com/data/dish_photos/1b4/167aeccf27bab14940fa646c8328b1b4.png?fit=around|130:130&crop=130:130;*,*",
      name: "McSpicy Paneer Burger",
      price: 214.71,
      description:
        "Indulge in rich & filling spicy paneer patty served with creamy sauce, and crispy lettuce—irresistibly satisfying!",
      qty: 1,
    },
  ]);
};

const getDrink = (req, res) => {
  res.json([
    {
      id: 1,
      img: "https://b.zmtcdn.com/data/dish_photos/2c2/61211451e0abf54239fd3cfa6639c2c2.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Coke Zero 330mlCan",
      price: 66.67,
      description:
        "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese",
      qty: 1,
    },
    {
      id: 2,
      img: "https://b.zmtcdn.com/data/dish_photos/abd/3587c675ed5c99ebf4f9881001d0babd.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "Sprite 330ml Can",
      price: 66,
      description:
        "Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.",
      qty: 1,
    },
    {
      id: 3,
      img: "https://b.zmtcdn.com/data/dish_photos/81a/22de958003b68126207ecc4da9f1681a.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Thums Up 330ml Can",
      price: 60,
      description:
        "Our signature pan sauce, with BBQ Sauce drizzle, topped with mushroom, onion, green capsicum, & red paprika",
      qty: 1,
    },
    {
      id: 4,
      img: "https://b.zmtcdn.com/data/dish_photos/b8d/aadd52b612692763e6e6de1e9bfb9b8d.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Maaza 300ml Can",
      price: 69,
      description:
        "An ultimate combination of your favourite veggies- onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.",
      qty: 1,
    },
    {
      id: 5,
      img: "https://b.zmtcdn.com/data/dish_photos/740/740cdac4beecb713169908dd8c068740.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: "Minute Maid Pulpy orange 300ml Can",
      price: 95,
      description:
        "A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle",
      qty: 1,
    },
    {
      id: 6,
      img: "https://b.zmtcdn.com/data/dish_photos/66a/f75f6e15e7ea788ac6a56835485fd66a.jpeg?fit=around|130:130&crop=130:130;*,*",
      name: " Fanta 330ml Can",
      price: 67,
      description:
        "Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce.",
      qty: 1,
    },
    {
      id: 7,
      img: "https://b.zmtcdn.com/data/dish_photos/4ad/820fc83bf1eb6b9ebe6181e49214b4ad.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Raw Coconut Water 200ml",
      price: 95.24,
      description:
        "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
      qty: 1,
    },
    {
      id: 8,
      img: "https://b.zmtcdn.com/data/dish_photos/1e6/e841521ad8415f5e5d4a56f8b48241e6.jpg?fit=around|130:130&crop=130:130;*,*",
      name: "Raw Choco Mint Protein Shake 195ml",
      price: 119,
      description:
        "A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce.",
      qty: 1,
    },
  ]);
};

module.exports = { getParatha, getPizza, getBurger, getDrink };
