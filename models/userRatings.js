module.exports = (sequelize, DataTypes) => {
    const Fight = sequelize.define('fight', {
        fighter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fighterRatings: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Fight;
}

// 32 characters total - ask if I should do all lines or just 10 since we're ranking top 10 //