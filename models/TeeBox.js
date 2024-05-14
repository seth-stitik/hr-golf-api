module.exports = (sequelize, DataTypes) => {
    const TeeBox = sequelize.define('TeeBox', {
      teetype: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      teeColor: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      distance: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      holeNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'holes',
          key: 'holeNumber'
        }
      }
    }, {
      timestamps: true,
      tableName: 'tee_boxes'  // Explicitly specify the table name
    });
  
    TeeBox.associate = (models) => {
      TeeBox.belongsTo(models.Hole, { foreignKey: 'holeNumber' });
    };
  
    return TeeBox;
  };
  