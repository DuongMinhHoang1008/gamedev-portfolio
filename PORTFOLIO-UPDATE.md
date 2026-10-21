# Cập nhật theo CV mới — 21/10/2026

- Nguồn: file người dùng cung cấp tại `D:/Downloads/UNITY GAME DEVELOPER (10).pdf`, 1 trang. Đã trích xuất văn bản và render PNG để đọc/đối chiếu.
- Thay `d/UNITY GAME DEVELOPER.pdf` bằng đúng file mới; giữ URL tải hiện có. SHA-256: `1581284D92D1E3D3E22B8F212C86D8C13DDA545937D973F8C3C08DAB9620C7A0`.
- Đồng bộ trang giới thiệu, hồ sơ, kinh nghiệm, dự án cá nhân, kỹ năng, trang liên hệ và bản dịch tiếng Anh. Địa chỉ mới: Hai Bà Trưng, Hà Nội. Mục tiêu ngắn hạn nhấn mạnh gameplay mượt mà, tối ưu hiệu năng và tiến độ dự án.
- Shikaku: logic giải đố, board, Daily Reward/Cheat, DLL mở rộng thuật toán có sẵn, hàng trăm level với độ khó tùy chỉnh, DataManager/Service và public testing gần 3.000 người chơi.
- Cookingdom: hơn 10 level, logic gameplay, cân bằng độ khó, sửa lỗi và tái sử dụng qua kế thừa; giữ diễn đạt “góp phần” giảm thời gian khoảng 2 tuần xuống 1 tuần.
- SuperHot - 3D Mobile Action: bổ sung Unity Profiler xác định bottleneck animation/rendering, VAT Baking và Indirect Rendering. Theo chỉnh sửa cuối: nền tảng Android, bỏ các câu ghi nhận Codex, bỏ thách thức Frenzy và hoán đổi chú thích ảnh 1–2; không thêm benchmark FPS.
- MissileRally: bổ sung Netcode for GameObjects và kết quả Lag Compensation tăng Hit Accuracy 0% → 100% tại các mức ping 500 ms và 1.000 ms. Giữ accuracy 69,8% → 91,6% và jerk 431,6 → 107,3 đơn vị/s³ tại ping 1.000 ms. Các số liệu là kết quả thực nghiệm, không phải cam kết cho mọi điều kiện mạng.
- Cấu hình SDK diễn đạt theo CV mới là cấu hình các SDK có sẵn. Cập nhật metadata mô tả website/Open Graph.
- Giữ các thông tin cũ còn phù hợp: vai trò phối hợp UI, DOTween/Unity Animation và chi tiết kỹ thuật dự án. Học vấn, GPA, giải thưởng và chứng chỉ khớp CV mới.
- Rút gọn trang giới thiệu thành 6 đoạn. Trong Hồ sơ, bỏ phần giới thiệu dài, đưa học vấn và giải thưởng lên trước kinh nghiệm; kinh nghiệm theo 4 mục trong CV mới.
- Shikaku: bỏ câu giải thích quyền tác giả thuật toán theo yêu cầu, giữ mô tả thuật toán có sẵn; sửa giải pháp DataManager thành tách các chức năng ra Service.
- Thay favicon bằng ảnh mèo pixel người dùng cung cấp, giữ PNG gốc và bổ sung ICO tương ứng.
- Giữ các chỉnh sửa SuperHot và ảnh dự án đã tồn tại trước phiên làm việc. Người dùng đã duyệt và yêu cầu triển khai toàn bộ bản cập nhật lên GitHub Pages từ nhánh `gh-pages`.

Kiểm tra: `node build.cjs`, `node tests/project-popups.cjs`, `node tests/language.cjs`, `node tests/site-assets.cjs`. Kiểm tra 4 trang, 6 popup, chuyển VI/EN, nội dung CV mới và 37 tài nguyên HTTP khớp bản đóng gói. File CV nguồn, file phục vụ và bản dist khớp byte.

Đã kiểm tra trực tiếp trang hồ sơ VI/EN và bố cục desktop bằng trình duyệt. Các liên kết ngoài chưa được kiểm tra lại trong lần cập nhật này. Repository vẫn là website Vue đã biên dịch sẵn; build đóng gói website tĩnh vào `dist/`.

Phần dưới là lịch sử ngày 14/10/2026, mô tả phiên bản CV cũ; các lưu ý thiếu thông tin Unity Profiler và nội dung địa chỉ/file CV tại đó đã được thay thế bởi cập nhật bên trên.

---

﻿# Báo cáo cập nhật portfolio — 14/10/2026

## 1. Thay đổi đã thực hiện

- Đối chiếu PDF `d/UNITY GAME DEVELOPER.pdf` (1 trang) với yêu cầu và JD Sonat được cung cấp trong cuộc trò chuyện. Giữ nguyên file PDF người dùng đã cập nhật trước phiên làm việc; không thay đổi thông tin cá nhân, giải thưởng, GPA hoặc URL.
- Giữ Shikaku Cat ở vị trí đầu. Hiện vai trò gameplay/level/dữ liệu và trạng thái public testing trên card và popup. Phân biệt công việc cá nhân với phần UI do thành viên khác phụ trách.
- Làm rõ Daily Reward, Cheat, DOTween/Unity Animation, thuật toán sinh level có sẵn được đóng gói DLL, và pipeline cấu hình độ khó → sinh nhiều map → chấm điểm → chọn map. Không nhận quyền tác giả thuật toán gốc.
- Bổ sung giải thích kiến trúc trước/sau bằng văn bản: DataManager nhiều trách nhiệm → DataManager load/save và cung cấp/điều phối → Service đảm nhận chức năng riêng. Không thêm tên Service giả định.
- Đồng bộ giới thiệu, hồ sơ, kinh nghiệm theo thứ tự vai trò → Shikaku → Cookingdom → SDK/build Android/debugging. Giữ nội dung Việt/Anh tương ứng.
- Cookingdom: hơn 10 level, logic/tương tác theo thiết kế, interface/inheritance và diễn đạt cải thiện quy trình “góp phần giảm” từ khoảng 2 tuần xuống 1 tuần.
- MissileRally: giữ nguyên accuracy 69,8% → 91,6% trong các kịch bản ping 0–1000 ms; jerk 431,6 → 107,3 đơn vị/s³ tại ping 1000 ms. Thêm giải thích giảm tác động đến cảm nhận gameplay, không giảm độ trễ mạng thực tế; không thêm benchmark.
- Thêm Unity Animation và DOTween vào kỹ năng theo CV và hiệu ứng Shikaku. Giữ Runtime Performance Profiling đã có trong CV; không suy diễn thành kinh nghiệm Unity Profiler.
- Xóa 2 CV mẫu của Jérôme Scheefer và file PDF rỗng sau khi đọc/kiểm tra và xác nhận không có tham chiếu trong website. Giữ CV cá nhân, khóa luận và toàn bộ hình ảnh.
- Repository không có source `.vue`, package manifest hay quy trình build gốc. Vì vậy sửa các bundle Vue đang được phục vụ cùng bản dịch; bổ sung `node build.cjs` để kiểm tra cú pháp và đóng gói website tĩnh vào `dist/`. Đây không phải biên dịch lại source Vue gốc.
- Cho preview nhận biến `PORT` để kiểm thử dùng cổng tự chọn, tránh xung đột với máy chủ hiện có trên cổng 8080. Cổng mặc định vẫn là 8080.

Danh sách file thay đổi trong repository:

| File | Thao tác |
| --- | --- |
| `js/about.d5804f2d.js` | Sửa nội dung trang, dữ liệu và render card/popup |
| `js/translations.en.js` | Đồng bộ bản dịch |
| `css/about.2a3162f3.css` | Bố trí thông tin dưới ảnh card, hiển thị vai trò |
| `preview.cjs` | Cho phép chọn cổng qua PORT |
| `tests/project-popups.cjs` | Bổ sung kiểm tra thứ tự, vai trò và trạng thái card/popup |
| `tests/language.cjs` | Thêm kiểm tra đa ngôn ngữ có sẵn trong cache vào bộ test được quản lý |
| `tests/site-assets.cjs` | Thêm kiểm tra HTTP, ảnh, PDF và nội dung đóng gói |
| `build.cjs` | Thêm quy trình đóng gói tĩnh |
| `README.md` | Thêm hướng dẫn cấu trúc, đóng gói, preview và test |
| `PORTFOLIO-UPDATE.md` | Báo cáo này |
| `d/cv-scheefer-fr.pdf` | Xóa CV mẫu không dùng |
| `d/resume-scheefer-en.pdf` | Xóa CV mẫu không dùng |
| `d/some-file.pdf` | Xóa file rỗng không dùng |

`d/UNITY GAME DEVELOPER.pdf` đã có thay đổi của người dùng trước phiên; tôi không chỉnh sửa file này. `dist/` là đầu ra đóng gói bị Git ignore, đã được cập nhật. Các script tạm trong `.cache/` không thuộc đầu ra triển khai.

## 2. Kiểm thử đã chạy thành công

- `node build.cjs`: kiểm tra cú pháp JavaScript và đóng gói tĩnh thành công.
- `node tests/project-popups.cjs`: 5 popup render VNode hợp lệ ở VI/EN; các technical challenge có bản dịch; Shikaku đứng đầu; trạng thái và vai trò có trên card/popup.
- `node tests/language.cjs`: 4 trang, 5 popup, chuyển VI → EN → VI, nhãn trợ năng, lưu ngôn ngữ và trường hợp localStorage bị chặn.
- `node .cache/check-cv.cjs`: kiểm tra nội dung hồ sơ, mục tiêu, kỹ năng, liên kết CV, ảnh và số liệu popup hiện có.
- `node tests/site-assets.cjs`: 32 tài nguyên được tham chiếu trong HTML/JS trả HTTP 200; dữ liệu HTTP khớp file gốc và `dist`; PDF đúng MIME và chữ ký; các ảnh có kích thước hợp lệ. Máy chủ riêng của test được dừng sau khi kiểm tra.
- Đọc được nội dung CV mới bằng pypdf. CV tải qua HTTP và bản đóng gói khớp byte với file người dùng cung cấp; SHA-256: `1C101273C40121593C5F45E6098C448649712219B2D40CAFB5C30E9D5C1C2998`.
- `git diff --check`: không có lỗi whitespace.
- Truy cập được các trang [Cookingdom trên Google Play](https://play.google.com/store/apps/details?id=com.abi.cook.chill&hl=vi), [repository MissileRally](https://github.com/DuongMinhHoang1008/Improve_DeadReckoning_Unity) và [The Forest Doctor](https://dmhoang.itch.io/the-forest-doctor) bằng công cụ web. Đây là kiểm tra trang liên kết, không phải cài/chạy game.

## 3. Kiểm thử chưa thực hiện được

- Không có công cụ trình duyệt khả dụng để xác nhận giao diện responsive, console trong trình duyệt, mở/đóng dialog bằng chuột/bàn phím, tải file bằng thao tác click hoặc hiển thị PDF trong trình đọc. Kiểm thử Vue ở trên là render trong Node, không phải browser E2E.
- Công cụ web chưa truy cập được URL Shikaku, Google Drive của Tohe và video Facebook. Không kết luận các liên kết đã hỏng; giữ nguyên URL để người dùng xác minh quyền truy cập/khu vực/tài khoản.
- Không thể chạy build Vue gốc vì thiếu source và cấu hình gốc; chỉ xác nhận quy trình đóng gói tĩnh vừa bổ sung.
- CV được kiểm tra là đúng file đính kèm tại workspace; chưa thể xác nhận có bản mới hơn nằm ngoài workspace.

## 4. Thông tin cần người dùng xác nhận theo JD Sonat

- Vai trò main developer của toàn bộ một sản phẩm trên store: chưa có bằng chứng. Shikaku được mô tả đúng là phụ trách chính gameplay/level/dữ liệu, public testing; Cookingdom là đóng góp hơn 10 level. Không tự nâng thành main dev toàn sản phẩm hoặc phát hành chính thức.
- Design patterns: cần ví dụ pattern cụ thể đã áp dụng và phạm vi cá nhân. Việc chia DataManager/Service hoặc dùng interface/inheritance chưa đủ để tự khẳng định các pattern phổ biến.
- Unity 3D, particles và physics: cần ví dụ công việc cá nhân hoặc source chứng minh; chưa thêm vào kỹ năng chỉ dựa trên hình ảnh game.
- Unity Profiler và tối ưu hiệu năng: CV có Runtime Performance Profiling, nhưng cần công cụ, tình huống tối ưu và kết quả thực tế trước khi thêm khẳng định cụ thể hoặc số liệu.
- Điểm các môn lập trình, CTDL và giải thuật: GPA chung 3.53/4.00 không thay cho điểm từng môn theo JD. Cần bảng điểm nếu muốn bổ sung.
- Xác nhận khả năng truy cập link Shikaku đối với nhà tuyển dụng và các link Tohe; gửi source Vue gốc nếu muốn khôi phục build framework đầy đủ.
