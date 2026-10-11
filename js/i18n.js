/* Localization for the shipped Vue application. Vietnamese is the source language. */
(function () {
  "use strict";
  var storageKey = "portfolio-language";
  var initialLanguage = "vi";
  try {
    var saved = localStorage.getItem(storageKey);
    if (saved === "en" || saved === "vi") initialLanguage = saved;
  } catch (_) { /* Language switching also works when storage is unavailable. */ }

  window.installPortfolioLanguage = function (Vue) {
    var state = Vue.observable({ language: initialLanguage });
    var messages = window.portfolioEnglish;
    function translate(value) {
      if (typeof value !== "string" || state.language === "vi") return value;
      var key = value.trim();
      return Object.prototype.hasOwnProperty.call(messages, key)
        ? value.replace(key, function () { return messages[key]; })
        : value;
    }
    function updateDocument() {
      document.documentElement.lang = state.language;
    }
    Vue.prototype.$locale = state;
    Vue.prototype.$translate = translate;
    Vue.prototype.$text = function (value) { return this._v(translate(value)); };
    // These precompiled static trees contain translated text and must render reactively.
    Vue.prototype.$static = function (index) {
      return this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
    };
    Vue.prototype.$setLanguage = function (language) {
      if (language !== "vi" && language !== "en") return;
      state.language = language;
      updateDocument();
      try { localStorage.setItem(storageKey, language); } catch (_) {}
    };
    updateDocument();
  };
})();
