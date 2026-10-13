const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Vue = require('vue');

const root = path.resolve(__dirname, '..');
const context = {
  window: {},
  document: { documentElement: {} },
  localStorage: { getItem: () => null, setItem: () => {} },
};
vm.createContext(context);
for (const file of ['translations.en.js', 'i18n.js', 'about.d5804f2d.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'js', file), 'utf8'), context);
}
context.window.installPortfolioLanguage(Vue);
function requireModule(id) {
  if (id === '2b0e') return { a: Vue };
  if (id === '2877') return { a(component, render, staticRenderFns) {
    const options = component.options || component;
    return { exports: Object.assign(options, { render, staticRenderFns }) };
  } };
  return {};
}
requireModule.r = () => {};
const exportsObject = {};
context.window.webpackJsonp[0][1]['4d97']({}, exportsObject, requireModule);
const instance = new Vue(exportsObject.default);
assert.equal(instance.projects[0].id, 'shikaku-cats');
function flatten(node) {
  assert(!Array.isArray(node), 'Render output must contain VNodes, not nested arrays');
  return [node, ...(node.children || []).flatMap(flatten)];
}
function nodeText(node) {
  return (node.text || '') + (node.children || []).map(nodeText).join('');
}
for (const language of ['vi', 'en']) {
  instance.$setLanguage(language);
  instance.selectedProject = null;
  const cards = flatten(instance._render()).filter(node => node.data?.staticClass === 'project-item');
  assert.equal(cards.length, instance.projects.length);
  cards.forEach((card, index) => {
    const project = instance.projects[index];
    const translate = value => language === 'vi' ? value : context.window.portfolioEnglish[value];
    assert(nodeText(card).includes(translate(project.status)), project.id + ': card status');
    if (project.role) assert(nodeText(card).includes(translate(project.role)), project.id + ': card role');
  });
  for (const project of instance.projects) {
    instance.selectedProject = project;
    const tree = instance._render();
    const nodes = flatten(tree);
    const rendered = nodeText(tree);
    if (project.role) assert(rendered.includes(language === 'vi' ? project.role : context.window.portfolioEnglish[project.role]));
    assert(!rendered.includes('undefined'), project.id + ': undefined text');
    const articles = nodes.filter(node => node.data?.staticClass === 'technical-challenge');
    assert.equal(articles.length, (project.challenges || []).length, project.id);
    for (const [index, challenge] of (project.challenges || []).entries()) {
      for (const value of Object.values(challenge)) {
        const expected = language === 'vi' ? value : context.window.portfolioEnglish[value];
        assert(expected, 'Missing translation: ' + value);
        assert(nodeText(articles[index]).includes(expected), project.id + ': missing ' + expected);
      }
    }
  }
}
console.log('PASS: all five project popups render valid VNodes and every technical challenge in VI/EN.');
