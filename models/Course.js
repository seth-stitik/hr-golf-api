module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      courseID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      courseName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numHoles: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      timeStampUpdated: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      golfClubName: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'golf_clubs',
          key: 'name'
        }
      }
    });
  
    Course.associate = (models) => {
      Course.hasMany(models.Hole, { foreignKey: 'courseID' });
      Course.belongsTo(models.GolfClub, { foreignKey: 'golfClubName' });
    };
  
    return Course;
  };
  