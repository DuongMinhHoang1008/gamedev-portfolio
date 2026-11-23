# MINI GDD — PORTFOLIO TEMPLATE

> Nhân bản file này cho từng game và thay toàn bộ nội dung trong `[ngoặc vuông]`. Chỉ **Phần A** là Mini GDD. **Phần B** là case study để chứng minh năng lực trong portfolio. **Phần C** chỉ dẫn sang các đặc tả chi tiết, không đưa toàn bộ thông số vào Mini GDD.

## Phân loại nội dung

| Nhóm | Trả lời câu hỏi | Có nằm trong Mini GDD? |
| --- | --- | --- |
| **GDD** | Game là gì, người chơi làm gì, luật nào tạo ra trải nghiệm mong muốn? | **Có — Phần A** |
| **Portfolio case study** | Tôi phụ trách gì, đã giải quyết vấn đề nào và kết quả ra sao? | Không — trình bày cạnh GDD ở Phần B |
| **Detailed design** | Công thức, board, wave, chỉ số và cân bằng cụ thể hoạt động thế nào? | Không — liên kết ở Phần C |
| **Technical design** | Code, data schema, scene flow, SDK và performance triển khai thế nào? | Không — liên kết ở Phần C |
| **Production/QA** | Ai làm, khi nào xong, checklist phát hành và test case nào? | Không — tài liệu quản lý riêng |

---

# PHẦN A — MINI GDD

> **Đây là phần GDD để đưa lên portfolio.** Khi điền xong nên gói gọn trong 1–2 trang và đọc được trong khoảng 60–90 giây.

## A1. Game overview `[GDD]`

| Thuộc tính | Nội dung |
| --- | --- |
| **Tên game / phiên bản** | `[Tên game] — [Prototype / MVP / Release]` |
| **Genre** | `[Puzzle / Casual Cooking / 3D Action...]` |
| **Platform / input** | `[Android] · [Portrait/Landscape] · [Tap/Drag/Swipe...]` |
| **Target audience** | `[Nhóm người chơi, sở thích và thời lượng session mong muốn]` |
| **High concept** | `[Người chơi] + [hành động chính] + [mục tiêu] + [điểm khác biệt/ràng buộc].` |

**Player fantasy:** `[Người chơi được cảm thấy mình đang làm hoặc trở thành ai?]`

**Design pillars:**

1. `[Trụ cột trải nghiệm 1]`
2. `[Trụ cột trải nghiệm 2]`
3. `[Trụ cột trải nghiệm 3]`

**Game này không hướng tới:** `[1–3 trải nghiệm bị loại trừ để giữ đúng định hướng]`

## A2. Core gameplay `[GDD]`

**Core loop:** `[Quan sát] → [Thao tác] → [Nhận phản hồi] → [Tiến bộ/nhận thưởng] → [Lặp lại]`

| Nội dung | Thiết kế |
| --- | --- |
| **Mục tiêu tức thời** | `[Điều người chơi cố hoàn thành trong vài giây/phút]` |
| **Điều kiện hoàn thành** | `[Win / level complete]` |
| **Điều kiện thất bại/thử lại** | `[Lose / retry / không có fail state]` |
| **Meta loop** | `[Mở khóa, bộ sưu tập, độ khó mới hoặc mastery]` |
| **Lý do chơi tiếp** | `[Tension, curiosity, progression, self-expression...]` |

## A3. Mechanics, controls và rules `[GDD]`

| Input | Hành động trong game | Phản hồi cho người chơi |
| --- | --- | --- |
| `[Tap / Drag / Swipe / Hold]` | `[Core action]` | `[Animation / VFX / SFX / Haptic / UI]` |
| `[Input]` | `[Action]` | `[Feedback]` |
| `[Input]` | `[Action]` | `[Feedback]` |

**Core rules:**

- `[Luật xác định thao tác hợp lệ hoặc không hợp lệ]`
- `[Luật thay đổi trạng thái game]`
- `[Luật quyết định tiến trình, điểm, combo hoặc phần thưởng]`

**Quan hệ giữa mechanic:** `[Mechanic A tạo cơ hội/rủi ro cho mechanic B như thế nào?]`

> Chỉ mô tả luật mà người chơi cần hiểu. Thuật toán, class, data schema và toàn bộ edge case thuộc Phần C.

## A4. Level flow, progression và difficulty `[GDD]`

**Một level/session:** `[Onboarding] → [Thử thách chính] → [Cao trào] → [Kết quả/phần thưởng]`

**Difficulty curve:** `[Dạy mechanic] → [Luyện tập] → [Kết hợp] → [Twist] → [Mastery]`

**Các biến thiết kế tạo độ khó:**

- `[Biến số 1: board size / số bước / tốc độ / mật độ địch...]`
- `[Biến số 2]`
- `[Biến số 3]`

**Content scope của phiên bản:** `[Số level/recipe/board/wave, mechanic và theme chính]`

## A5. Module thiết kế đặc thù `[GDD — chỉ giữ một module]`

### Cookingdom — recipe/minigame flow

`[Chọn món → giới thiệu bước → người chơi thao tác → xác nhận đúng/sai → phản hồi → chuyển bước → hoàn thiện món.]`

Nêu rõ: `[nhịp độ]`, `[tolerance của input]`, `[cách tái sử dụng mechanic mà level vẫn khác nhau]`.

### Shikaku — puzzle/board rules

`[Đọc clue → kéo vùng → kiểm tra luật → sửa hoặc xác nhận → hoàn thành toàn board → hé lộ phần thưởng.]`

Nêu rõ: `[luật vùng hợp lệ]`, `[cách đánh giá độ khó]`, `[cách giới thiệu board/biến thể mới]`.

### Shuriken Rush — combat flow

`[Ngắm/di chuyển tay → tạo và phóng vũ khí → hạ địch → tăng combo → kích hoạt frenzy → qua wave/mở khóa.]`

Nêu rõ: `[targeting]`, `[enemy pressure]`, `[pacing]`, `[risk/reward của combo và frenzy]`.

## A6. Player feedback và audiovisual direction `[GDD]`

| Mức phản hồi | Trường hợp | Hình ảnh / âm thanh / rung |
| --- | --- | --- |
| **Moment-to-moment** | `[Tap, drag, hit, đặt vùng...]` | `[Feedback]` |
| **Progress** | `[Hoàn thành bước, vùng, combo...]` | `[Feedback]` |
| **Climax** | `[Hoàn thành món/board/wave, frenzy, unlock...]` | `[Feedback]` |

**Visual direction:** `[Phong cách, palette, shape language, camera và yêu cầu readability]`

**Audio direction:** `[Nhạc, ambience/ASMR, nhóm SFX và mục tiêu cảm xúc]`

## A7. Scope boundary `[GDD]`

| Ưu tiên | Nội dung |
| --- | --- |
| **Must have** | `[Thiếu là core loop không hoạt động]` |
| **Should have** | `[Quan trọng nhưng game vẫn chơi được nếu thiếu]` |
| **Could have** | `[Polish hoặc mở rộng nếu còn thời gian]` |
| **Won't have this version** | `[Chủ động loại khỏi phiên bản để chống scope creep]` |

---

# PHẦN B — PORTFOLIO CASE STUDY

> **Không phải GDD.** Phần này đặt ngay sau Mini GDD để chứng minh đóng góp cá nhân và tác động thực tế.

## B1. Vai trò và phạm vi cá nhân `[PORTFOLIO]`

- **Vai trò:** `[Game Designer / Unity Developer / Level Designer...]`
- **Team / thời gian:** `[Quy mô team] · [Thời gian tham gia]`
- **Tôi trực tiếp phụ trách:** `[Các quyết định, hệ thống hoặc level do bản thân thực hiện]`
- **Không thuộc phạm vi của tôi:** `[UI/art/backend hoặc phần do thành viên khác phụ trách nếu cần làm rõ]`

## B2. Design challenge `[PORTFOLIO]`

**Vấn đề:** `[Một vấn đề cụ thể ảnh hưởng tới trải nghiệm người chơi hoặc quy trình làm content]`

**Dữ liệu/quan sát:** `[Playtest, analytics, profiling hoặc phản hồi đã cho thấy điều gì?]`

**Các phương án đã cân nhắc:** `[A / B / C và trade-off ngắn gọn]`

**Quyết định:** `[Giải pháp đã chọn và lý do nó phục vụ design pillar/core loop]`

**Kết quả:** `[Số liệu trước/sau, phản hồi playtest, sản lượng level hoặc kết quả phát hành]`

**Bài học / bước tiếp theo:** `[Điều sẽ giữ, đổi hoặc kiểm chứng tiếp]`

## B3. Bằng chứng trực quan `[PORTFOLIO]`

Chèn 2–4 hình có chú thích, ưu tiên:

1. `[Core interaction trước/sau hoặc từng bước]`
2. `[Level/board/wave minh họa difficulty progression]`
3. `[Feedback quan trọng: complete, combo, frenzy, reveal...]`
4. `[Sơ đồ core loop hoặc biểu đồ kết quả nếu thật sự hữu ích]`

Mỗi hình cần trả lời: **“Hình này chứng minh quyết định thiết kế nào?”**

---

# PHẦN C — TÀI LIỆU CHI TIẾT

> **Không phải Mini GDD.** Chỉ tạo và liên kết tài liệu thực sự cần; không để phần này làm loãng trang portfolio chính.

| Tài liệu | Nội dung phù hợp | Ví dụ theo game |
| --- | --- | --- |
| **Level/Content Specification** | Toàn bộ bước, board, wave, prefab và tiêu chí nghiệm thu từng level | Cookingdom recipe steps; Shikaku board list; Shuriken Rush wave table |
| **Balance Sheet** | Giá trị số, curve, reward, combo, enemy stats, tolerance | Difficulty score; frenzy threshold; timing/input tolerance |
| **System Design Specification** | State machine, edge cases và quan hệ chi tiết giữa các hệ thống | Validation flow; target selection; recipe step transitions |
| **Technical Design Document** | Kiến trúc code, data schema, save, SDK, scene flow | ScriptableObject/JSON; services; pooling; VAT/indirect rendering |
| **Performance Budget** | Thiết bị chuẩn, FPS/frame time, memory và object limits | Enemy/projectile budget của Shuriken Rush |
| **Analytics Plan** | Event name, parameters, funnel và giả thuyết cần kiểm chứng | Start/retry/complete; drop-off theo step/board/wave |
| **Production Plan** | Owner, milestone, deadline, dependency và rủi ro | Prototype → vertical slice → content complete → release |
| **QA Checklist/Test Cases** | Edge case, compatibility, regression và release criteria | Pause/resume, mất focus, retry, soft-lock, save/load |

## Ranh giới cần nhớ

- **GDD mô tả trải nghiệm và luật thiết kế**, không mô tả class hoặc cách code triển khai.
- **Game description chỉ nói game có gì**; GDD phải giải thích các phần kết nối thế nào để tạo ra trải nghiệm mục tiêu.
- **Case study chứng minh năng lực cá nhân**, không thay thế GDD và không nhận công việc của cả team làm đóng góp riêng.
- **Thông số chi tiết có thể thay đổi thường xuyên** nên đặt trong spec/balance sheet thay vì làm Mini GDD khó đọc.

---

**Nguồn khung:** Unity, [Start simple: A one-page design document for your first game](https://unity.com/blog/one-page-game-design-document). Phần A giữ các thành phần cốt lõi của one-page GDD: concept, core loop, goal/win/lose, controls, scope, look & sound, audience và ranh giới phiên bản; Phần B–C được tách riêng để không nhầm portfolio case study hoặc đặc tả triển khai với GDD.
