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
  const translate = value => language === 'vi' ? value : context.window.portfolioEnglish[value];
  const cards = flatten(instance._render()).filter(node => node.data?.staticClass === 'project-item');
  assert.equal(cards.length, instance.projects.length);
  cards.forEach((card, index) => {
    const project = instance.projects[index];
    assert.equal(card.tag, 'router-link');
    assert.equal(card.data.attrs.to, '/game-projects/' + project.id);
    assert(nodeText(card).includes(translate(project.status)), project.id + ': card status');
    if (project.role) assert(nodeText(card).includes(translate(project.role)), project.id + ': card role');
  });
  for (const project of instance.projects) {
    const detail = new Vue({ ...exportsObject.default, propsData: { projectId: project.id } });
    const tree = detail._render();
    const nodes = flatten(tree);
    const rendered = nodeText(tree);
    assert.equal(nodeText(nodes.find(node => node.tag === 'h1')), translate(project.name) || project.name);
    assert(nodes.some(node => node.tag === 'router-link' && node.data.attrs.to === '/game-projects'));
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
  const missing = new Vue({ ...exportsObject.default, propsData: { projectId: 'unknown-project' } });
  const missingPage = nodeText(missing._render());
  assert(missingPage.includes(language === 'vi' ? 'Không tìm thấy dự án game' : 'Game project not found'));
}
console.log(`PASS: all ${instance.projects.length} project links and detail pages, technical challenges and unknown IDs in VI/EN.`);
