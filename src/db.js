const express = require("express");
require("dotenv").config({ path: ".env" });
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

(async () => {
    try {
      await sequelize.sync();
    console.log("All right...");   
    } catch (error) {
        console.log("All Wrong..");
    }
})();

module.exports = sequelize;
