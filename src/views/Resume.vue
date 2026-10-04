<template>
  <div class="resume">
    <h1>Hồ sơ</h1>
    <div class="intro">
      <div class="paragraph">
        <h2 class="name">Dương Minh Hoàng</h2>
        <p class="role">Lập trình viên game Unity · Hà Nội, Việt Nam</p>
        <p>Mình phát triển gameplay cho game di động bằng Unity và C#, từ xây dựng bản mẫu, triển khai đến cải tiến và thử nghiệm với người chơi. Kinh nghiệm của mình bao gồm phát triển màn chơi, xây dựng hệ thống gameplay, sửa lỗi và tối ưu hiệu năng khi game chạy.</p>
        <p>Mình mong muốn nâng cao chuyên môn Unity/C# và lập trình gameplay thông qua các dự án game quy mô lớn, có quy trình phát triển chuyên nghiệp. Trong vòng ba năm, mình phấn đấu trở thành Lead Game Developer, có năng lực dẫn dắt đội ngũ phát triển gameplay, định hướng kỹ thuật và xây dựng các hệ thống game chất lượng cao.</p>
        <p class="contact-details">
          <a href="mailto:hoangls1008@gmail.com">hoangls1008@gmail.com</a><br>
          <a href="tel:+84394270156">0394 270 156</a> · Vĩnh Tuy, Hà Nội
        </p>
        <a href="d/UNITY%20GAME%20DEVELOPER.pdf" target="_blank" rel="noopener noreferrer" class="download-link">
          <i class="fa fa-download fa-lg fa-fw" aria-hidden="true"></i> Tải CV (PDF)
        </a>
      </div>
      <div class="photo">
        <img src="img/resume-photo.png" alt="Dương Minh Hoàng">
      </div>
    </div>

    <div class="full-content">
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Kinh nghiệm làm việc</h2>
        <h3>Lập trình viên game Unity <span class="company-name">· RiseOn Game Studio</span></h3>
        <p class="meta">2025–2026 · Trước đây là HB Academy</p>
        <ul>
          <li>Phát triển gameplay bằng Unity/C#, tham gia quá trình phát triển game di động từ xây dựng bản mẫu, triển khai đến cải tiến và thử nghiệm công khai.</li>
          <li>Phát triển và hoàn thiện hơn 10 màn chơi cho <strong>Cookingdom</strong>, bao gồm triển khai gameplay, cân bằng độ khó và tối ưu vòng lặp gameplay của từng màn.</li>
          <li>Trực tiếp phát triển các tính năng gameplay cho <strong>Shikaku Cat: Number Puzzle</strong> và triển khai đợt chơi thử công khai với hơn 3.000 người chơi.</li>
          <li>Sửa lỗi và tối ưu các hệ thống gameplay trong Unity, xử lý lỗi, dữ liệu màn chơi và các vấn đề về hiệu năng trong quá trình chạy game.</li>
          <li>Làm việc với quy trình build Android, SDK quảng cáo và plugin bên thứ ba; phối hợp với đội ngũ để triển khai và điều chỉnh gameplay theo yêu cầu sản phẩm.</li>
        </ul>
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading">Kỹ năng</h2>
        <div class="skills-grid">
          <div class="skill-set">
            <h3>Lập trình</h3>
            <ul class="skills">
              <li>C#</li><li>Lập trình hướng đối tượng (OOP)</li><li>Cấu trúc dữ liệu &amp; giải thuật (DSA)</li>
            </ul>
          </div>
          <div class="skill-set">
            <h3>Phát triển game</h3>
            <ul class="skills">
              <li>Unity</li><li>Lập trình gameplay</li><li>Hệ thống game</li><li>Triển khai màn chơi</li>
            </ul>
          </div>
          <div class="skill-set">
            <h3>Công cụ &amp; công nghệ</h3>
            <ul class="skills">
              <li>Git</li><li>Build Android</li><li>SDK quảng cáo</li><li>Tích hợp plugin bên thứ ba</li>
            </ul>
          </div>
          <div class="skill-set">
            <h3>Tối ưu</h3>
            <ul class="skills">
              <li>Gỡ lỗi</li><li>Tối ưu hiệu năng khi game chạy</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="education-heading">
        <h2 id="education-heading">Học vấn</h2>
        <h3>Đại học Công nghệ – ĐHQGHN</h3>
        <p class="meta">2022–2026 · Cử nhân Công nghệ thông tin</p>
        <p>GPA: <strong>3.53/4.00</strong> · Xếp loại: Giỏi</p>
      </section>

      <section aria-labelledby="awards-heading">
        <h2 id="awards-heading">Giải thưởng &amp; chứng chỉ</h2>
        <ul class="awards">
          <li><strong>Giải ba — Cuộc thi Hackathon MIRO Game Contest</strong><br>GDG Hanoi &amp; Apero Technologies Group</li>
          <li><strong>Top 4 — Pixel Sunflower Game Jam</strong><br>Eden Eldersong</li>
          <li><strong>Chứng chỉ Lập trình game nâng cao</strong><br>HB Academy</li>
          <li><strong>IELTS 7.5</strong></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.resume {
  margin-bottom: 80px;
  text-align: left;
}

.intro {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 40px;
}

.paragraph {
  flex: 1 1 400px;
  max-width: 700px;
  min-width: 0;
}

h2 {
  font-weight: 100;
  font-size: 2em;
  line-height: 1.3;
  margin: 0;
  padding-top: 50px;
}

h2.name {
  padding-top: 0;
}

h3 {
  font-weight: 100;
  font-size: 1.6em;
  line-height: 1.4;
  margin: 0;
  padding-top: 25px;
}

.role {
  font-size: 1.2em;
}

.company-name,
.meta {
  opacity: 0.7;
}

.contact-details a {
  overflow-wrap: anywhere;
}

.download-link {
  display: inline-block;
  margin-top: 10px;
}

.photo img {
  display: block;
  width: 300px;
  max-width: 100%;
  height: auto;
}

.full-content {
  max-width: 900px;
}

ul {
  padding-left: 22px;
}

li {
  margin-bottom: 10px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0 30px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.skills li {
  border: 1px solid rgba(220, 220, 220, 0.44);
  padding: 2px 10px;
  margin: 0;
}

.awards {
  margin-top: 25px;
}
</style>
