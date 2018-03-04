/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    header: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parentCategory: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  });

  return Category
};
