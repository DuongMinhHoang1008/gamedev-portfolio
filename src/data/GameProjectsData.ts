export interface GameProject {
  id: string;
  name: string;
  image: string;
  screenshots: { src: string; caption: string }[];
  category: string;
  highlight: string;
  summary: string;
  features: string[];
  platform: string;
  url: string;
  linkLabel: string;
  team?: string;
  // Điền mỗi phần việc của bạn thành một chuỗi trong mảng này.
  contributions: string[];
}

const projects: GameProject[] = [
  {
    id: 'the-forest-doctor',
    name: 'The Forest Doctor',
    image: 'img/projects/forest-doctor-cover.png',
    screenshots: [
      { src: 'img/projects/forest-doctor-ss1.png', caption: 'Xếp nguyên liệu và phối màu để chế thuốc.' },
      { src: 'img/projects/forest-doctor-ss2.png', caption: 'Mua nguyên liệu trong cửa hàng.' },
      { src: 'img/projects/forest-doctor-ss3.png', caption: 'Chọn thuốc từ kho để chữa bệnh.' }
    ],
    category: 'Giải đố · Game Jam',
    highlight: 'Top 4 Pixel Sunflower Game Jam',
    summary: 'Vào vai thầy thuốc chữa bệnh cho các con vật trong rừng. Kết hợp nguyên liệu theo quy luật màu sắc để pha đúng loại thuốc cho từng bệnh nhân.',
    features: [
      'Xếp các mảnh nguyên liệu để tạo thuốc có lượng màu phù hợp với bệnh.',
      'Các màu bổ trợ hoặc triệt tiêu nhau dựa trên vòng tròn màu sắc.',
      'Mua nguyên liệu, bán thuốc và nâng cấp tại cửa hàng.',
      'Kết hợp giải đố với lối chơi endless.'
    ],
    platform: 'Trình duyệt web (HTML5) · Unity',
    url: 'https://dmhoang.itch.io/the-forest-doctor',
    linkLabel: 'Chơi trên itch.io',
    contributions: []
  },
  {
    id: 'cookingdom',
    name: 'Cookingdom',
    image: 'img/projects/cookingdom-cover.png',
    screenshots: [
      { src: 'img/projects/cookingdom-ss1.png', caption: 'Khám phá các món ăn trong bộ sưu tập công thức.' },
      { src: 'img/projects/cookingdom-ss2.png', caption: 'Chuẩn bị nguyên liệu, cuộn và cắt sushi.' },
      { src: 'img/projects/cookingdom-ss3.png', caption: 'Thực hiện từng bước để hoàn thiện món ăn.' }
    ],
    category: 'Nấu ăn · Thư giãn',
    highlight: 'Tham gia phát triển hơn 10 màn chơi',
    summary: 'Game nấu ăn với nhịp độ nhẹ nhàng, đưa người chơi qua từng bước chuẩn bị và hoàn thiện món ăn. Các công thức được chia thành những mini-game tương tác, kết hợp âm thanh ASMR.',
    features: [
      'Thao tác cắt, trộn, nấu và trang trí món ăn qua từng mini-game.',
      'Khám phá nhiều công thức, nguyên liệu và dụng cụ nấu ăn.',
      'Trang trí không gian bếp và tùy chỉnh trang phục đầu bếp.',
      'Trải nghiệm thư giãn với âm thanh ASMR và nhạc nền nhẹ nhàng.'
    ],
    platform: 'Android · Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.abi.cook.chill&hl=vi',
    linkLabel: 'Xem trên Google Play',
    contributions: []
  },
  {
    id: 'shikaku-cats',
    name: 'Shikaku Cats: Number Puzzle',
    image: 'img/projects/shikaku-cats-cover.png',
    screenshots: [
      { src: 'img/projects/shikaku-cats-ss1.png', caption: 'Hoàn thành các vùng trên bảng để hé lộ những chú mèo.' },
      { src: 'img/projects/shikaku-cats-ss2.png', caption: 'Kéo để tạo vùng có số ô khớp với con số.' },
      { src: 'img/projects/shikaku-cats-ss3.png', caption: 'Giải các bảng số lớn hơn với độ khó tăng dần.' }
    ],
    category: 'Giải đố · Logic',
    highlight: 'Gần 3.000 lượt tải',
    summary: 'Game giải đố Shikaku với những chú mèo ẩn trong bảng số. Chia bảng thành các hình chữ nhật hoặc hình vuông có diện tích khớp với con số để hoàn thành màn chơi và khám phá những chú mèo.',
    features: [
      'Kéo để tạo hình chữ nhật hoặc hình vuông trên lưới.',
      'Mỗi vùng chứa đúng một con số và số ô tương ứng.',
      'Hé lộ các chú mèo khi hoàn thành câu đố.',
      'Thử thách tư duy logic và khả năng hình dung không gian với độ khó tăng dần.'
    ],
    platform: 'Android · Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.shikaku.cat.puzzle&hl=en',
    linkLabel: 'Xem trên Google Play',
    contributions: []
  },
  {
    id: 'tohe',
    name: 'Tohe',
    image: '',
    screenshots: [],
    category: 'Endless Runner · Game Contest',
    highlight: 'Giải ba Hackathon MIRO Game Contest',
    team: 'TheDreamer',
    summary: 'Một người đam mê tò he ước mơ đưa nét văn hóa này ra thế giới bằng game. Khi hiện thực không như mong đợi, anh ngủ thiếp đi và mơ thấy những con tò he của mình thật sự bay đến muôn nơi.',
    features: [
      'Điều khiển tò he né chướng ngại vật, thu thập xu và đi xa nhất có thể.',
      'Dùng xu mở khóa tính năng và các tò he mới, mỗi tò he có kỹ năng riêng.',
      'Chướng ngại vật và màu sắc gợi lên những trở ngại, cảm xúc trong hành trình theo đuổi ước mơ.',
      'Các tò he lấy cảm hứng từ Việt Nam, Mỹ, Anh và Úc: rồng, trâu, đại bàng, tượng Nữ thần Tự do, sư tử, Big Ben, kangaroo và koala.'
    ],
    platform: 'Đang cập nhật',
    url: 'https://web.facebook.com/share/v/1M581Q7ZRV/',
    linkLabel: 'Xem video giới thiệu',
    contributions: []
  }
];

export default projects;
