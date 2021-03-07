module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
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

    return Tutorial;
};