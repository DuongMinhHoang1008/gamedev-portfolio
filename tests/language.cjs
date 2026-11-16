const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const Vue = require('vue');
const storage = new Map();
const context = { window: {}, document: { documentElement: {} }, localStorage: { getItem: k => storage.get(k), setItem: (k, v) => storage.set(k, v) } };
vm.createContext(context);
for (const file of ['js/translations.en.js', 'js/i18n.js', 'js/about.d5804f2d.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
context.window.installPortfolioLanguage(Vue);
const modules = context.window.webpackJsonp[0][1];
function req(id) {
  if (id === '2b0e') return { a: Vue };
  if (id === '2877') return { a: (component, render, staticRenderFns) => {
    const options = typeof component === 'function' ? component.options : component;
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    return { exports: options };
  } };
  return {};
}
req.r = () => {};
function text(node) {
  return (node.text || '') + (node.children || []).map(text).join('');
}
function attrs(node, result = []) {
  if (node.data && node.data.attrs) result.push(node.data.attrs);
  (node.children || []).forEach(child => attrs(child, result));
  return result;
}
for (const [id, expected] of [['f820', 'I am'], ['1ba2', 'Work experience'], ['b8fa', 'Feel free'], ['4d97', 'Game projects']]) {
  const exports = {};
  modules[id]({}, exports, req);
  const instance = new Vue(exports.default);
  instance.$setLanguage('vi');
  const original = text(instance._render());
  assert(!original.includes('Vĩnh Tuy'), id + ': outdated address');
  if (id === '1ba2') {
    for (const value of ['05/2025 - 11/2026', 'Shikaku Cats', 'công cụ kiểm thử', 'Shuriken Rush', 'khoảng 20 lên 57 với 1.000 kẻ địch trong Unity Editor', 'Unity Profiler', 'VAT Baking', 'Netcode for GameObjects', 'Dog Simulator', 'Photon Fusion 2 Shared Mode', 'Trợ lý AI']) {
      assert(original.includes(value), id + ': missing CV content: ' + value);
    }
    const links = attrs(instance._render());
    assert(links.some(a => a.href === 'd/UNITY%20GAME%20DEVELOPER.pdf?v=20261116'));
    for (const slug of ['shikaku-cats', 'cookingdom', 'shuriken-rush', 'missile-rally', 'dog-simulator']) {
      assert(links.some(a => a.to === '/game-projects/' + slug), id + ': missing demo link: ' + slug);
    }
  }
  instance.$setLanguage('en');
  assert(text(instance._render()).includes(expected), id);
  assert.equal(context.document.documentElement.lang, 'en');
  const english = text(instance._render());
  if (id === 'b8fa') assert(english.includes('Hai Bà Trưng, Hanoi'), id + ': contact translation');
  if (id === '1ba2') {
    for (const value of ['· Hanoi', 'Shikaku Cats', 'testing tools', 'Shuriken Rush', 'about 20 to 57 with 1,000 enemies in the Unity Editor', 'Dog Simulator', 'private rooms by code', 'average prediction accuracy across four ping levels increased from 69.8% to 91.6%', 'AI assistants']) {
      assert(english.includes(value), id + ': CV translation: ' + value);
    }
  }
  if (instance.projects) {
    for (const project of instance.projects) {
      const detail = new Vue({ ...exports.default, propsData: { projectId: project.id } });
      const rendered = detail._render();
      assert(text(rendered).includes('My contributions'), project.id);
      assert(text(rendered).includes('Back to game projects'), project.id);
      assert(!text(rendered).includes(project.summary), project.id + ' summary untranslated');
    }
  }
  instance.$setLanguage('vi');
  assert.equal(text(instance._render()), original, id + ' round trip');
}
const probe = new Vue();
probe.$setLanguage('en');
assert.equal(storage.get('portfolio-language'), 'en');
vm.runInContext(fs.readFileSync('js/i18n.js', 'utf8'), context);
context.window.installPortfolioLanguage(Vue);
assert.equal(new Vue().$locale.language, 'en');
context.localStorage.getItem = () => { throw Error('blocked'); };
context.localStorage.setItem = () => { throw Error('blocked'); };
vm.runInContext(fs.readFileSync('js/i18n.js', 'utf8'), context);
context.window.installPortfolioLanguage(Vue);
new Vue().$setLanguage('en');
assert.equal(context.document.documentElement.lang, 'en');
console.log('PASS: all four pages, all project details, updated CV content, VI/EN round trips, persistence, and blocked storage.');
