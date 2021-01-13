import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getItem: function(data) {
    console.log(`[utils/API] [getItem] - URL being retrieved ${JSON.stringify(data)}`)
    return axios.post("/api/getItem", {
        params: {
            "url": data
        }
    });
  },
  saveUserItem: function(data) {
    console.log(`[utils/API] [saveUserItem] - Item being saved ${JSON.stringify(data)}`)
    return axios.post("api/saveUserItem", {
        params: {
            title : data.itemTitle,
            url : data.itemUrl,
            image : data.itemImage,
            price : data.itemPrice,
            availability : data.itemStatus,
            itemPriceAlert: data.itemPriceAlert,
            itemPriceThreshold: data.itemPriceThreshold,
            itemAvailabilityAlert: data.itemAvailabilityAlert
        }
    });
  },
  getUsersSavedItems: function(user) {
    console.log(`[utils/API] [getUsersSavedItems] - Retrieving saved items for user ${JSON.stringify(user)}`)
    return axios.post("api/getUsersSavedItems", {
        params: {
            user : user,
        }
    });
  },
  deleteUsersSavedItem: function(user, item) {
    console.log(`[utils/API] [deleteUsersSavedItem] - Removing saved item ${item.name}for user ${JSON.stringify(user)}`)
    return axios.post("api/deleteUsersSavedItem", {
        params: {
            user : user,
            item : item,
        }
    });
  },
  updateUsersSavedItems: function(user, item) {
    console.log(`[utils/API] [updateUsersSavedItems] - Update saved item ${item.name} for user ${JSON.stringify(user)}`)
    return axios.post("api/updateUsersSavedItems", {
        params: {
            user : user,
            item : item,
        }
    });
  },
  
};