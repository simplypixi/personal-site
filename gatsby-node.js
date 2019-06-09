const path = require('path');
const data = require('./src/data/data');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: path.resolve(`./src/routes/home/home.component.js`),
    context: { data },
  })
};
