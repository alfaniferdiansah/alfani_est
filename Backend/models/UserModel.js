import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "M_KARYAWAN",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nik: {
      type: DataTypes.STRING(8),
    },
    nama: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    alamat: {
      type: DataTypes.TEXT,
    },
    tgllahir: {
      type: DataTypes.DATE,
    },
    divisi: {
      type: DataTypes.STRING(20),
      validate: {
        isIn: [["IT", "HRD", "FINANCE"]],
      },
    },
    status: {
      type: DataTypes.STRING(20),
      validate: {
        isIn: [["Tetap", "Kontrak"]],
      },
    },
    created_date: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
