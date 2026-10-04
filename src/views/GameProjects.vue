<template>
  <div class="game-projects">
    <h1>Dự án game</h1>
    <p class="page-intro">Những dự án mình đã tham gia phát triển, từ game di động đến các sản phẩm tại Game Jam và cuộc thi làm game.</p>

    <div class="projects-list">
      <button
        v-for="project in projects"
        :key="project.id"
        type="button"
        class="project-item"
        :class="project.id"
        :aria-label="'Xem chi tiết ' + project.name"
        aria-haspopup="dialog"
        @click="showDetails(project)"
      >
        <img v-if="project.image" class="project-item-image" :src="project.image" alt="" loading="lazy">
        <span v-else class="game-art-placeholder" aria-hidden="true">
          <span class="tohe-wordmark">Tò He</span>
          <span>TheDreamer</span>
        </span>
        <span class="title-bar">{{ project.name }}</span>
      </button>
    </div>

    <dialog ref="projectDialog" class="project-dialog" aria-labelledby="project-dialog-title" @click.self="closeDetails" @close="onDialogClose">
      <div v-if="selectedProject">
        <header class="dialog-header" :class="selectedProject.id">
          <h2 id="project-dialog-title">{{ selectedProject.name }}</h2>
          <button type="button" class="dialog-close" aria-label="Đóng chi tiết dự án" autofocus @click="closeDetails">×</button>
        </header>
        <div class="project-dialog-content">
          <p class="category">{{ selectedProject.category }}</p>
          <p class="highlight">{{ selectedProject.highlight }}</p>
          <h3>Tóm tắt</h3>
          <p>{{ selectedProject.summary }}</p>
          <p v-if="selectedProject.team"><strong>Đội phát triển:</strong> {{ selectedProject.team }}</p>
          <p><strong>Nền tảng:</strong> {{ selectedProject.platform }}</p>
          <a class="game-link" :href="selectedProject.url" target="_blank" rel="noopener noreferrer">
            {{ selectedProject.linkLabel }} <span aria-hidden="true">↗</span>
          </a>
          <h3>Tính năng nổi bật</h3>
          <ul>
            <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
          </ul>
          <section v-if="selectedProject.screenshots.length" class="game-gallery" aria-labelledby="gallery-title">
            <h3 id="gallery-title">Hình ảnh trong game</h3>
            <p class="gallery-hint">Bấm vào ảnh để xem kích thước lớn.</p>
            <div class="screenshots-grid">
              <figure v-for="screenshot in selectedProject.screenshots" :key="screenshot.src">
                <a :href="screenshot.src" target="_blank" rel="noopener noreferrer" :aria-label="'Xem ảnh lớn: ' + screenshot.caption + ' (mở trong tab mới)'">
                  <img :src="screenshot.src" :alt="selectedProject.name + ' — ' + screenshot.caption" loading="lazy" decoding="async">
                </a>
                <figcaption>{{ screenshot.caption }}</figcaption>
              </figure>
            </div>
            <p class="gallery-source">Ảnh từ <a :href="selectedProject.url" target="_blank" rel="noopener noreferrer">trang giới thiệu {{ selectedProject.name }}</a>.</p>
          </section>
          <section class="contributions" aria-labelledby="contributions-title">
            <h3 id="contributions-title">Đóng góp của tôi</h3>
            <ul v-if="selectedProject.contributions.length">
              <li v-for="contribution in selectedProject.contributions" :key="contribution">{{ contribution }}</li>
            </ul>
            <p v-else class="contribution-placeholder">Nội dung sẽ được bổ sung.</p>
          </section>
          <div class="dialog-bottom">
            <button type="button" class="close-button" @click="closeDetails">Đóng</button>
          </div>
        </div>
      </div>
    </dialog>

    <p class="more-games">Các dự án khác trên <a href="https://dmhoang.itch.io" target="_blank" rel="noopener noreferrer">dmhoang.itch.io ↗</a></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gameProjectsData, { GameProject } from '@/data/GameProjectsData';

export default Vue.extend({
  name: 'GameProjects',
  data() {
    return {
      projects: gameProjectsData,
      selectedProject: null as GameProject | null,
      previousBodyOverflow: ''
    };
  },
  beforeDestroy() {
    if (this.selectedProject) {
      document.body.style.overflow = this.previousBodyOverflow;
    }
  },
  methods: {
    showDetails(project: GameProject) {
      this.selectedProject = project;
      this.previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      this.$nextTick(() => {
        const dialog = this.$refs.projectDialog as HTMLDialogElement;
        dialog.showModal();
        dialog.scrollTop = 0;
      });
    },
    closeDetails() {
      (this.$refs.projectDialog as HTMLDialogElement).close();
    },
    onDialogClose() {
      document.body.style.overflow = this.previousBodyOverflow;
      this.selectedProject = null;
    }
  }
});
</script>

<style scoped>
.game-projects {
  max-width: 900px;
  text-align: left;
}
.page-intro {
  max-width: 760px;
  margin-bottom: 30px;
}
.projects-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.project-item {
  position: relative;
  height: 280px;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  font: inherit;
  text-align: left;
  background: #263e37;
}
.project-item-image {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}
.project-item:hover .project-item-image {
  transform: scale(1.08);
}
.title-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 14px;
  background: rgba(25, 32, 30, 0.88);
  line-height: 1.5;
}
.cookingdom { background: #715139; }
.shikaku-cats { background: #345a4b; }
.tohe { background: #493044; }
.game-art-placeholder {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding-bottom: 40px;
  box-sizing: border-box;
  color: #ffe2a9;
}
.tohe-wordmark {
  font-size: 3em;
  line-height: 1.2;
  font-weight: bold;
}
.project-dialog {
  width: calc(100% - 40px);
  max-width: 1000px;
  max-height: calc(100vh - 40px);
  max-height: calc(100dvh - 40px);
  margin: auto;
  padding: 0;
  border: 0;
  border-radius: 12px;
  background: #fcfcfc;
  color: #555;
  font: inherit;
  text-align: left;
  overscroll-behavior: contain;
}
.project-dialog::backdrop { background: rgba(0, 0, 0, 0.65); }
.dialog-header {
  position: relative;
  padding: 22px 60px;
  background-color: #263e37;
  color: white;
}
.dialog-header.cookingdom { background-color: #715139; }
.dialog-header.shikaku-cats { background-color: #345a4b; }
.dialog-header.tohe { background-color: #493044; }
.dialog-header h2 {
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.4;
}
.dialog-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  color: white;
  font: inherit;
  font-size: 2em;
  cursor: pointer;
}
.project-dialog-content { padding: 32px 40px; }
.category { margin-top: 0; }
h3 { margin: 28px 0 10px; font-size: 1.1em; }
.highlight {
  display: inline-block;
  margin: 0;
  padding: 5px 12px;
  border-radius: 6px;
  background: #e3eee8;
  color: #285341;
}
.game-link {
  display: inline-block;
  margin-top: 8px;
  color: #285341;
  text-decoration: underline;
  opacity: 1;
}
button:focus-visible, a:focus-visible {
  outline: 3px solid #79b6dd;
  outline-offset: 3px;
}
ul { padding-left: 22px; }
li { margin-bottom: 10px; }
.gallery-hint, .gallery-source {
  font-size: 0.85em;
  line-height: 1.6;
}
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
}
.screenshots-grid figure { margin: 0; min-width: 0; }
.screenshots-grid a {
  display: block;
  opacity: 1;
  border-radius: 8px;
  cursor: zoom-in;
}
.screenshots-grid img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.screenshots-grid figcaption {
  margin-top: 10px;
  font-size: 0.85em;
  line-height: 1.6;
}
.gallery-source a { color: #285341; opacity: 1; text-decoration: underline; }
.contributions {
  border: 1px dashed #8c9393;
  border-radius: 8px;
  padding: 20px;
  margin-top: 28px;
}
.contributions h3 { margin-top: 0; }
.contribution-placeholder { margin-bottom: 0; }
.dialog-bottom { margin-top: 30px; text-align: center; }
.close-button {
  padding: 8px 24px;
  border: 1px solid #777;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.more-games { margin-top: 24px; }
.more-games a { opacity: 1; text-decoration: underline; }
@media (max-width: 900px) {
  .projects-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 619px) {
  .projects-list { grid-template-columns: minmax(0, 1fr); }
  .project-item { height: 300px; }
  .project-dialog-content { padding: 20px; }
  .dialog-header { padding-left: 20px; }
  .dialog-header h2 { font-size: 1.2em; text-align: left; }
  .screenshots-grid { grid-template-columns: minmax(0, 1fr); gap: 24px; }
  .screenshots-grid figure { width: 100%; max-width: 360px; margin: 0 auto; }
}
@media (prefers-reduced-motion: reduce) {
  .project-item-image { transition: none; }
}
</style>
