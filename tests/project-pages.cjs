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
const miniGddProjectIds = new Set(['shikaku-cats', 'cookingdom', 'shuriken-rush']);
const caseStudyProjectIds = new Set(['shikaku-cats', 'cookingdom', 'shuriken-rush']);
const miniGddSectionTitles = [
  'Tổng quan game',
  'Vòng lặp gameplay cốt lõi',
  'Cơ chế & luật chơi',
  'Tiến trình level & độ khó',
  'Thiết kế đặc thù',
  'Phản hồi & UX',
  'Phạm vi thiết kế',
];
function flatten(node) {
  assert(!Array.isArray(node), 'Render output must contain VNodes, not nested arrays');
  return [node, ...(node.children || []).flatMap(flatten)];
}
function nodeText(node) {
  return (node.text || '') + (node.children || []).map(nodeText).join('');
}
function nestedStrings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(nestedStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(nestedStrings);
  return [];
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
    const designerDetail = new Vue({
      ...exportsObject.default,
      propsData: { projectId: project.id, gameDesignerMode: true },
    });
    const designerNodes = flatten(designerDetail._render());
    assert.equal(nodeText(nodes.find(node => node.tag === 'h1')), translate(project.name) || project.name);
    assert(nodes.some(node => node.tag === 'router-link' && node.data.attrs.to === '/game-projects'));
    if (project.role) assert(rendered.includes(language === 'vi' ? project.role : context.window.portfolioEnglish[project.role]));
    assert(!rendered.includes('undefined'), project.id + ': undefined text');
    const miniGddSections = nodes.filter(node => node.data?.staticClass === 'mini-gdd');
    assert.equal(miniGddSections.length, 0, project.id + ': Mini GDD must not render inline');
    assert(!nodes.some(node => node.data?.staticClass?.includes('gdd-link')), project.id + ': main page must not link GDD');
    if (miniGddProjectIds.has(project.id)) {
      assert(designerNodes.some(node =>
        node.tag === 'a' &&
        node.data?.attrs?.href === '/gamedev-portfolio/gamedesigner/#/game-projects/' + project.id + '/gdd' &&
        nodeText(node).includes(language === 'vi' ? 'Xem GDD' : 'View GDD')
      ), project.id + ': GDD subpage link');
      const gddDetail = new Vue({
        ...exportsObject.default,
        propsData: { projectId: project.id, gameDesignerMode: true, gddOnly: true },
      });
      const gddTree = gddDetail._render();
      const gddNodes = flatten(gddTree);
      const miniGddSections = gddNodes.filter(node => node.data?.staticClass === 'mini-gdd');
      assert.equal(miniGddSections.length, 1, project.id + ': GDD subpage visibility');
      const miniGdd = miniGddSections[0];
      const miniGddNodes = flatten(miniGdd);
      const customMiniGdd = typeof project.miniGdd === 'object' ? project.miniGdd : null;
      const sectionTitles = customMiniGdd ? customMiniGdd.sections.map(section => section.title) : miniGddSectionTitles;
      const entryCount = customMiniGdd
        ? customMiniGdd.sections.reduce((total, section) => total + (section.entries || []).filter(entry => !entry.flow).length, 0)
        : 0;
      const flowEntries = customMiniGdd
        ? customMiniGdd.sections.flatMap(section => (section.entries || []).filter(entry => entry.flow))
        : [];
      const loopEntries = flowEntries.filter(entry => entry.loop);
      const optionalEntries = flowEntries.filter(entry => entry.optional);
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-item').length, sectionTitles.length, project.id + ': Mini GDD sections');
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-number').length, sectionTitles.length, project.id + ': Mini GDD numbering');
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-description').length, customMiniGdd ? 0 : 7, project.id + ': Mini GDD descriptions');
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-entry').length, entryCount, project.id + ': Mini GDD entries');
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-flow').length, flowEntries.length, project.id + ': Mini GDD flow diagrams');
      assert.equal(miniGddNodes.filter(node => node.tag === 'li').length, flowEntries.reduce((total, entry) => total + entry.flow.length, 0), project.id + ': Mini GDD flow nodes');
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-loop-return').length, loopEntries.length, project.id + ': Mini GDD loop returns');
      assert.equal(miniGddNodes.filter(node => node.data?.staticClass === 'mini-gdd-optional').length, optionalEntries.length, project.id + ': Mini GDD optional stages');
      for (const title of sectionTitles) {
        assert(nodeText(miniGdd).includes(translate(title)), project.id + ': translated Mini GDD section ' + title);
      }
      if (customMiniGdd) {
        const translatedValues = [customMiniGdd.title];
        if (customMiniGdd.subtitle) translatedValues.push(customMiniGdd.subtitle);
        for (const section of customMiniGdd.sections) {
          for (const entry of section.entries || []) {
            translatedValues.push(entry.label);
            if (entry.flow) translatedValues.push(...entry.flow);
            else translatedValues.push(entry.value);
            if (entry.optional) translatedValues.push(entry.optional.label, entry.optional.note);
          }
        }
        for (const value of translatedValues) {
          assert(context.window.portfolioEnglish[value], project.id + ': missing Mini GDD translation for ' + value);
          assert(nodeText(miniGdd).includes(translate(value)), project.id + ': missing translated Mini GDD value ' + value);
        }
      }
      const detailChildren = gddTree.children.find(node => node.data?.staticClass === 'project-detail').children;
      assert.equal(detailChildren[1].data.staticClass, 'mini-gdd', project.id + ': Mini GDD must be first after the title');
      assert(gddNodes.some(node =>
        node.tag === 'router-link' &&
        node.data?.attrs?.to === '/game-projects/' + project.id &&
        nodeText(node).includes(language === 'vi' ? '← Về trang game' : '← Back to game page')
      ), project.id + ': back link from GDD subpage');
      assert(!gddNodes.some(node => node.data?.staticClass === 'project-detail-content'), project.id + ': GDD subpage must not duplicate case study');
    } else {
      assert(!designerNodes.some(node => node.data?.staticClass?.includes('gdd-link')), project.id + ': unexpected GDD link');
    }
    if (caseStudyProjectIds.has(project.id)) {
      assert.equal(project.caseStudy, true, project.id + ': case study data flag');
      assert(!nodes.some(node => node.data?.staticClass?.includes('case-study-link')), project.id + ': main page must not link Case Study');
      assert(designerNodes.some(node =>
        node.tag === 'a' &&
        node.data?.attrs?.href === '/gamedev-portfolio/gamedesigner/#/game-projects/' + project.id + '/case-study' &&
        nodeText(node).includes(language === 'vi' ? 'Xem Case Study' : 'View Case Study')
      ), project.id + ': Case Study subpage link');
      if (project.id === 'cookingdom') {
        assert(designerNodes.some(node =>
          node.tag === 'a' &&
          node.data?.staticClass?.includes('level-sheet-link') &&
          node.data?.attrs?.href === project.levelSheetUrl &&
          node.data?.attrs?.target === '_blank' &&
          node.data?.attrs?.rel === 'noopener noreferrer' &&
          nodeText(node).includes(language === 'vi' ? 'Xem Level Sheet' : 'View Level Sheet')
        ), 'cookingdom: Level Sheet link');
      }
      assert.equal(nodes.filter(node => node.data?.staticClass === 'contributions').length, 1, project.id + ': main page inline contributions');
      assert.equal(nodes.filter(node => node.data?.staticClass === 'technical-challenge').length, project.challenges.length, project.id + ': main page inline challenges');
      assert.equal(nodes.filter(node => node.data?.staticClass === 'research-results').length, 1, project.id + ': main page inline results');
      assert.equal(designerNodes.filter(node => node.data?.staticClass === 'contributions').length, 0, project.id + ': designer contributions must not render inline');
      assert.equal(designerNodes.filter(node => node.data?.staticClass === 'technical-challenge').length, 0, project.id + ': designer challenges must not render inline');
      assert.equal(designerNodes.filter(node => node.data?.staticClass === 'research-results').length, 0, project.id + ': designer results must not render inline');

      const caseStudyDetail = new Vue({
        ...exportsObject.default,
        propsData: { projectId: project.id, gameDesignerMode: true, caseStudyOnly: true },
      });
      const caseStudyTree = caseStudyDetail._render();
      const caseStudyNodes = flatten(caseStudyTree);
      assert(caseStudyNodes.some(node => node.data?.staticClass?.includes('case-study-content')), project.id + ': Case Study content');
      assert.equal(nodeText(caseStudyNodes.find(node => node.data?.staticClass === 'case-study-title')), 'Case Study');
      assert.equal(caseStudyNodes.filter(node => node.data?.staticClass === 'contributions').length, 1, project.id + ': Case Study contributions');
      assert.equal(caseStudyNodes.filter(node => node.data?.staticClass === 'technical-challenge').length, project.challenges.length, project.id + ': Case Study challenges');
      assert.equal(caseStudyNodes.filter(node => node.data?.staticClass === 'research-results').length, 1, project.id + ': Case Study results');
      assert(!caseStudyNodes.some(node => node.data?.staticClass === 'mini-gdd'), project.id + ': Case Study must not duplicate GDD');
      assert(!caseStudyNodes.some(node => node.data?.staticClass === 'project-video'), project.id + ': Case Study must not duplicate video');
      assert(caseStudyNodes.some(node =>
        node.tag === 'router-link' &&
        node.data?.attrs?.to === '/game-projects/' + project.id &&
        nodeText(node).includes(language === 'vi' ? '← Về trang game' : '← Back to game page')
      ), project.id + ': back link from Case Study subpage');
      for (const value of [...project.contributions, ...project.results]) {
        const expected = language === 'vi' ? value : context.window.portfolioEnglish[value];
        assert(expected, 'Missing translation: ' + value);
        assert(nodeText(caseStudyTree).includes(expected), project.id + ': missing Case Study value ' + expected);
      }
      if (project.id === 'cookingdom') {
        const cookingdomChallenges = caseStudyNodes.filter(node => node.data?.staticClass === 'technical-challenge');
        assert(nodeText(cookingdomChallenges[1]).includes('2. ' + translate(project.challenges[1].title)), 'cookingdom: numbered second challenge');
        assert(nodeText(cookingdomChallenges[1]).includes(translate(project.challenges[1].solutionHeading)), 'cookingdom: solution heading');
        assert(!nodeText(cookingdomChallenges[1]).includes('Interaction Simplification'), 'cookingdom: no design-decision labels');
        assert(nodeText(caseStudyNodes.find(node => node.data?.staticClass === 'research-results')).includes(translate(project.results[1])), 'cookingdom: outcome moved to results');
      }
    } else {
      assert(!designerNodes.some(node => node.data?.staticClass?.includes('case-study-link')), project.id + ': unexpected Case Study link');
      assert.equal(nodes.filter(node => node.data?.staticClass === 'contributions').length, 1, project.id + ': inline contributions');
    }
    const articles = nodes.filter(node => node.data?.staticClass === 'technical-challenge');
    assert.equal(articles.length, (project.challenges || []).length, project.id);
    for (const [index, challenge] of (project.challenges || []).entries()) {
      for (const value of nestedStrings(challenge)) {
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
