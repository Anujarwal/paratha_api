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
        name: "Paneer Paratha",
        price: 100,
        description: "Extra Sauce, Yogurt, Cheese",
        qty: 1,
        category: "Cheese paratha",
      },
      {
          id: "7",
        img: "https://b.zmtcdn.com/data/dish_photos/f24/0d6673fdece45efd2a47b556f17d2f24.jpg?fit=around|130:130&crop=130:130;*,*",
        name: "Paneer Paratha",
        price: 100,
        description: "Extra Sauce, Yogurt, Cheese",
        qty: 1,
        category: "Cheese paratha",
      },{
          id: "8",
        img: "https://b.zmtcdn.com/data/dish_photos/f24/0d6673fdece45efd2a47b556f17d2f24.jpg?fit=around|130:130&crop=130:130;*,*",
        name: "Paneer Paratha",
        price: 100,
        description: "Extra Sauce, Yogurt, Cheese",
        qty: 1,
        category: "Cheese paratha",
      }
    ]);
  }


  module.exports = {getParatha}