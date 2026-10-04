<template>
  <div class="about">
    <h1>Xin chào!</h1>
    <div class="intro">
      <div class="paragraph">
        <p>Mình là <strong>Dương Minh Hoàng</strong>, một <strong>lập trình viên game Unity</strong> tại Hà Nội. Mình phát triển gameplay cho game di động bằng Unity và C#, từ xây dựng bản mẫu, triển khai tính năng đến cải tiến và thử nghiệm với người chơi.</p>
        <p>Tại <strong>RiseOn Game Studio</strong> (trước đây là HB Academy), mình đã phát triển và hoàn thiện <strong>hơn 10 màn chơi cho Cookingdom</strong>, bao gồm triển khai gameplay, cân bằng độ khó và tối ưu vòng lặp gameplay của từng màn. Mình cũng trực tiếp phát triển các tính năng gameplay cho <strong>Shikaku Cat: Number Puzzle</strong> và tham gia triển khai đợt chơi thử công khai với <strong>hơn 3.000 người chơi</strong>.</p>
        <p>Công việc của mình bao gồm xây dựng hệ thống gameplay, triển khai màn chơi, sửa lỗi và tối ưu hiệu năng khi game chạy. Mình cũng có kinh nghiệm với quy trình build Android, SDK quảng cáo và tích hợp plugin bên thứ ba.</p>
        <p>Mình theo học ngành Công nghệ thông tin tại <strong>Đại học Công nghệ – ĐHQGHN</strong> (2022–2026), với GPA <strong>3.53/4.00</strong>, xếp loại Giỏi. Một số thành tích của mình gồm giải ba cuộc thi Hackathon MIRO Game Contest, top 4 Pixel Sunflower Game Jam với <strong>Eden Eldersong</strong> và <strong>IELTS 7.5</strong>.</p>
        <p>Mình mong muốn nâng cao chuyên môn Unity/C# và lập trình gameplay thông qua các dự án game quy mô lớn, có quy trình phát triển chuyên nghiệp. Trong vòng ba năm, mình đặt mục tiêu trở thành Lead Game Developer, có thể dẫn dắt đội ngũ gameplay và định hướng kỹ thuật.</p>
        <p>Bạn có thể xem <router-link to="/resume">hồ sơ của mình</router-link> để tìm hiểu thêm về kinh nghiệm, kỹ năng và học vấn, hoặc liên hệ qua email <a href="mailto:hoangls1008@gmail.com">hoangls1008@gmail.com</a>.</p>
      </div>
      <div class="photo">
        <img src="img/avatar.png" alt="Dương Minh Hoàng">
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
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

.paragraph p:first-child {
  margin-top: 0;
}

.paragraph p {
  margin-bottom: 20px;
}

.paragraph a {
  overflow-wrap: anywhere;
}

.photo img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
