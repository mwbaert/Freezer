module.exports = mongoose => {
    const Item = mongoose.model(
        "item",
        mongoose.Schema(
            {
                title: String,
                qrCode: Number,
                monthsUntilExpiration: Number,
                description: String
            },
            { timestamps: true }
        )
    );

    return Item;
};