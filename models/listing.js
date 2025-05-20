const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/silhouette-of-stone-on-seashore-during-golden-hour-63JKK67yGUE",
        set: (v) => v === "" ? "https://unsplash.com/photos/silhouette-of-stone-on-seashore-during-golden-hour-63JKK67yGUE" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: {
        type: Schema.Types.ObjectId,

    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;