const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Ensure correct import

const TeeBox = sequelize.define('TeeBox', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teetype: {
    type: DataTypes.STRING,
    allowNull: false
  },
  teeColor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  holeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'holes',
      key: 'holeNumber'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'tee_boxes',
  timestamps: true
});

TeeBox.associate = (models) => {
  TeeBox.belongsTo(models.Hole, { foreignKey: 'holeNumber' });
};

module.exports = TeeBox;
