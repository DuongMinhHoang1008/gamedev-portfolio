(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about"],
  {
    "00e0": function (t, n, i) {
      "use strict";
      i("be17");
    },
    "0c45": function (t, n, i) {},
    "1ba2": function (t, n, i) {
      "use strict";
      i.r(n);
      var a = function () {
          var t = this,
            n = t._self._c;
          if (window.__gameDesignerPortfolio) return renderDesignerResume(t, n);
          return t.$static(0);
        },
        renderDesignerResume = function (t, n) {
          return n("div", { staticClass: "resume" }, [
            n("h1", [t.$text("Hồ sơ")]),
            n("div", { staticClass: "intro" }, [
              n("div", { staticClass: "paragraph" }, [
                n("h2", { staticClass: "name" }, [t.$text("Dương Minh Hoàng")]),
                n("p", { staticClass: "role" }, [t.$text("Game Designer Intern · Hà Nội, Việt Nam")]),
                n("p", { staticClass: "contact-details" }, [
                  n("a", { attrs: { href: "mailto:hoangls1008@gmail.com" } }, [t.$text("hoangls1008@gmail.com")]),
                  n("br"),
                  n("a", { attrs: { href: "tel:+84394270156" } }, [t.$text("0394 270 156")]),
                  t.$text(" · Hà Nội "),
                ]),
                n("a", {
                  staticClass: "download-link",
                  attrs: { href: "d/DuongMinhHoang_GameDesignerIntern_CV.pdf", target: "_blank", rel: "noopener noreferrer" },
                }, [
                  n("i", { staticClass: "fa fa-download fa-lg fa-fw", attrs: { "aria-hidden": "true" } }),
                  t.$text(" Tải CV (PDF) "),
                ]),
              ]),
              n("div", { staticClass: "photo" }, [
                n("img", { attrs: { src: "img/resume-photo.jpg", alt: "Dương Minh Hoàng" } }),
              ]),
            ]),
            n("div", { staticClass: "full-content" }, [
              n("p", [t.$text("Tôi có 1,5 năm kinh nghiệm phát triển game mobile bằng Unity, tập trung vào Puzzle, Casual và Action. Tôi trực tiếp thiết kế và cân bằng level, xây dựng Difficulty Curve dựa trên các tiêu chí độ phức tạp Puzzle, kết hợp Internal Playtesting và phân tích dữ liệu người chơi. Tôi có khả năng xây dựng prototype, triển khai và kiểm thử gameplay, level bằng Unity.")]),
              n("section", { attrs: { "aria-labelledby": "designer-experience-heading" } }, [
                n("h2", { attrs: { id: "designer-experience-heading" } }, [t.$text("Kinh nghiệm làm việc")]),
                n("h3", [t.$text("Unity Game Developer "), n("span", { staticClass: "company-name" }, [t.$text("· RiseOn Game Studio")])]),
                n("p", { staticClass: "meta" }, [t.$text("05/2025 - 11/2026 · Trước đây là HB Academy")]),
                n("h3", [t.$text("Cookingdom (ABI Games)")]),
                n("ul", [
                  n("li", [t.$text("Triển khai và cân bằng hơn 10 level trên hệ thống gameplay có sẵn. Phối hợp với Artist và Tester để điều chỉnh độ khó, hoàn thiện tương tác, kiểm thử và sửa lỗi gameplay.")]),
                  n("li", [t.$text("Tái sử dụng logic level, góp phần giảm thời gian phát triển mỗi level từ khoảng 2 tuần xuống 1 tuần.")]),
                ]),
                n("h3", [t.$text("Shikaku Cats: Number Puzzle")]),
                n("ul", [
                  n("li", [t.$text("Triển khai level, xây dựng Difficulty Curve, theo dõi các chỉ số gameplay và điều chỉnh độ khó nhằm cải thiện trải nghiệm người chơi.")]),
                  n("li", [t.$text("Kết hợp hệ thống đánh giá độ khó tự động với phản hồi từ nhóm chơi thử nội bộ để đánh giá và cân bằng level.")]),
                  n("li", [t.$text("Theo dõi Retention, Retry Rate, Drop-off và phản hồi người chơi để đề xuất, triển khai cải tiến gameplay và tính năng.")]),
                  n("li", [t.$text("Mở rộng hệ thống sinh level từ DLL có sẵn, bổ sung cấu hình độ khó để tạo hàng trăm level. Triển khai Daily Reward, Daily Quest và phối hợp đưa game lên Google Play Public Testing với gần 3.000 người chơi.")]),
                ]),
                n("h3", [t.$text("Shuriken Rush")]),
                n("ul", [
                  n("li", [t.$text("Xây dựng prototype trong 3 ngày và hoàn thiện bản Android trong 3 tuần. Triển khai gameplay chiến đấu, hệ thống vũ khí và tiến trình màn chơi.")]),
                  n("li", [t.$text("Xây dựng công cụ tạo level nhanh bằng kéo thả cùng công cụ Cheat và Ingame Debug để hỗ trợ kiểm thử.")]),
                  n("li", [t.$text("Cấu hình AppLovin, IAP, Firebase Remote Config và AppsFlyer. Thực hiện Android build và xử lý lỗi trong quá trình thử nghiệm sản phẩm.")]),
                ]),
              ]),
              n("section", { attrs: { "aria-labelledby": "designer-skills-heading" } }, [
                n("h2", { attrs: { id: "designer-skills-heading" } }, [t.$text("Kỹ năng")]),
                n("div", { staticClass: "skills-grid" }, [
                  n("div", { staticClass: "skill-set" }, [n("h3", [t.$text("Game Design & Level Design")]), n("p", [t.$text("Puzzle/Casual Level Design, Game Balance, Difficulty Curve, Level Progression, Pacing, Gameplay Loop, GDD, Level Sheet")])]),
                  n("div", { staticClass: "skill-set" }, [n("h3", [t.$text("Phân tích & Playtesting")]), n("p", [t.$text("Internal Playtesting, Difficulty Evaluation, Retention, Retry Rate, Drop-off, phân tích phản hồi người chơi")])]),
                  n("div", { staticClass: "skill-set" }, [n("h3", [t.$text("Công cụ triển khai & kiểm thử")]), n("p", [t.$text("Unity Editor, Level Editor, Gameplay Prototyping, C#, Git, Cheat và Debug Tools")])]),
                ]),
              ]),
              n("section", { attrs: { "aria-labelledby": "designer-education-heading" } }, [
                n("h2", { attrs: { id: "designer-education-heading" } }, [t.$text("Học vấn")]),
                n("h3", [t.$text("Đại học Công nghệ - ĐHQGHN")]),
                n("p", { staticClass: "meta" }, [t.$text("2022 - 2026 · Công nghệ thông tin · GPA 3.53/4.00 · Xếp loại Giỏi · IELTS 7.5")]),
                n("p", [t.$text("Giải ba MIRO Game Contest 2023 (GDG Hanoi / Apero) · Top 4 Pixel Sunflower Game Jam 2024")]),
              ]),
            ]),
          ]);
        },
        e = [
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "resume" }, [
              n("h1", [t.$text("Hồ sơ")]),
              n("div", { staticClass: "intro" }, [
                n("div", { staticClass: "paragraph" }, [
                  n("h2", { staticClass: "name" }, [t.$text("Dương Minh Hoàng")]),
                  n("p", { staticClass: "role" }, [
                    t.$text("Lập trình viên game Unity · Hà Nội, Việt Nam"),
                  ]),
                  n("p", { staticClass: "contact-details" }, [
                    n(
                      "a",
                      { attrs: { href: "mailto:hoangls1008@gmail.com" } },
                      [t.$text("hoangls1008@gmail.com")]
                    ),
                    n("br"),
                    n("a", { attrs: { href: "tel:+84394270156" } }, [
                      t.$text("0394 270 156"),
                    ]),
                    t.$text(" · Hà Nội "),
                  ]),
                  n(
                    "a",
                    {
                      staticClass: "download-link",
                      attrs: {
                        href: "d/UNITY%20GAME%20DEVELOPER.pdf?v=20261116",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [
                      n("i", {
                        staticClass: "fa fa-download fa-lg fa-fw",
                        attrs: { "aria-hidden": "true" },
                      }),
                      t.$text(" Tải CV (PDF) "),
                    ]
                  ),
                ]),
                n("div", { staticClass: "photo" }, [
                  n("img", {
                    attrs: {
                      src: "img/resume-photo.jpg",
                      alt: "Dương Minh Hoàng",
                    },
                  }),
                ]),
              ]),
              n("div", { staticClass: "full-content" }, [
                n("p", [t.$text("Tôi là Dương Minh Hoàng, lập trình viên game Unity tại Hà Nội với 1,5 năm kinh nghiệm phát triển game Puzzle, Casual và Action, gồm game 2D, 3D và multiplayer.")]),
                n("p", [t.$text("Tôi xây dựng gameplay, hệ thống game và level, bảo trì mã nguồn, dùng Unity Profiler để phân tích và tối ưu hiệu năng, tích hợp SDK, build và phát hành game Android.")]),
                n(
                  "section",
                  { attrs: { "aria-labelledby": "education-heading" } },
                  [
                    n("h2", { attrs: { id: "education-heading" } }, [
                      t.$text("Học vấn"),
                    ]),
                    n("h3", [t.$text("Đại học Công nghệ - ĐHQGHN")]),
                    n("p", { staticClass: "meta" }, [
                      t.$text("2022 - 2026 · Cử nhân Công nghệ thông tin"),
                    ]),
                    n("p", [
                      t.$text("GPA: "),
                      n("strong", [t.$text("3.53/4.00")]),
                      t.$text(" · Xếp loại: Giỏi"),
                    ]),
                  ]
                ),
                n(
                  "section",
                  { attrs: { "aria-labelledby": "awards-heading" } },
                  [
                    n("h2", { attrs: { id: "awards-heading" } }, [
                      t.$text("Giải thưởng & chứng chỉ"),
                    ]),
                    n("ul", { staticClass: "awards" }, [
                      n("li", [
                        n("strong", [
                          t.$text(
                            "Giải ba - MIRO Game Contest 2023"
                          ),
                        ]),
                        n("br"),
                        t.$text("GDG Hanoi & Apero Technologies Group"),
                      ]),
                      n("li", [
                        n("strong", [t.$text("Top 4 - Pixel Sunflower Game Jam 2024")]),
                        n("br"),
                        t.$text("Eden Eldersong"),
                      ]),
                      n("li", [
                        n("strong", [
                          t.$text("Chứng chỉ Lập trình game nâng cao"),
                        ]),
                        n("br"),
                        t.$text("HB Academy"),
                      ]),
                      n("li", [n("strong", [t.$text("IELTS 7.5")])]),
                    ]),
                  ]
                ),
                n(
                  "section",
                  { attrs: { "aria-labelledby": "experience-heading" } },
                  [
                    n("h2", { attrs: { id: "experience-heading" } }, [
                      t.$text("Kinh nghiệm làm việc"),
                    ]),
                    n("h3", [
                      t.$text("Lập trình viên game Unity "),
                      n("span", { staticClass: "company-name" }, [
                        t.$text("· RiseOn Game Studio"),
                      ]),
                    ]),
                    n("p", { staticClass: "meta" }, [
                      t.$text("05/2025 - 11/2026 · Trước đây là HB Academy"),
                    ]),
                    n("ul", [
                      n("li", [
                        n("strong", [n("a", { attrs: { href: "https://play.google.com/store/apps/details?id=com.shikaku.cat.puzzle", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("Shikaku Cats: Number Puzzle")])]),
                        t.$text(" · "),
                        n("router-link", { attrs: { to: "/game-projects/shikaku-cats" } }, [t.$text("Demo")]),
                        n("ul", [
                          n("li", [t.$text("Tiếp nhận và hoàn thiện gameplay từ bản thử nghiệm. Tái cấu trúc DataManager thành các thành phần quản lý dữ liệu riêng để dễ bảo trì và mở rộng.")]),
                          n("li", [t.$text("Cấu hình SDK và đưa game lên Google Play Public Testing, đạt gần 3.000 người chơi. Triển khai công cụ kiểm thử và mở rộng bộ tạo level để sinh hàng trăm màn với độ khó tùy chỉnh.")]),
                        ]),
                      ]),
                      n("li", [
                        n("strong", [n("a", { attrs: { href: "https://play.google.com/store/apps/details?id=com.abi.cook.chill", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("Cookingdom (ABI Games)")])]),
                        t.$text(" · "),
                        n("router-link", { attrs: { to: "/game-projects/cookingdom" } }, [t.$text("Demo")]),
                        n("ul", [
                          n("li", [t.$text("Tự triển khai hơn 10 level từ gameplay có sẵn, cân bằng độ khó và sửa lỗi. Tái sử dụng logic qua kế thừa, góp phần giảm thời gian triển khai mỗi level từ khoảng 2 tuần xuống 1 tuần.")]),
                        ]),
                      ]),
                      n("li", [
                        n("strong", [n("a", { attrs: { href: "https://play.google.com/store/apps/details?id=com.riseon.superhot", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("Shuriken Rush")])]),
                        t.$text(" · "),
                        n("router-link", { attrs: { to: "/game-projects/shuriken-rush" } }, [t.$text("Demo")]),
                        n("ul", [
                          n("li", [t.$text("Độc lập phát triển game 3D để phát hành trên Android, gồm hệ thống chiến đấu, sinh kẻ địch và hệ thống vũ khí.")]),
                          n("li", [t.$text("Dùng Unity Profiler để phân tích hoạt ảnh và hiển thị. Áp dụng VAT Baking và Indirect Rendering để tăng FPS từ khoảng 20 lên 57 với 1.000 kẻ địch trong Unity Editor.")]),
                        ]),
                      ]),
                      n("li", [t.$text("Tích hợp & phát hành: Cấu hình AppLovin, IAP, Firebase Remote Config và AppsFlyer, build Android và xử lý lỗi trong giai đoạn public testing.")]),
                    ]),
                  ]
                ),
                n("section", { attrs: { "aria-labelledby": "personal-projects-heading" } }, [
                  n("h2", { attrs: { id: "personal-projects-heading" } }, [t.$text("Dự án cá nhân")]),
                  n("h3", [n("a", { attrs: { href: "https://github.com/DuongMinhHoang1008/Improve_DeadReckoning_Unity", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("MissileRally - Khóa luận tốt nghiệp")]), t.$text(" · "), n("router-link", { attrs: { to: "/game-projects/missile-rally" } }, [t.$text("Demo")])]),
                  n("p", [t.$text("Cải tiến Dead Reckoning trong game đua xe dùng Netcode for GameObjects (NGO) bằng timestamp, dự đoán bậc hai và Adaptive Threshold để chuyển động mượt và chính xác hơn. Triển khai Client-side Prediction và Server Reconciliation để giảm sai lệch chuyển động.")]),
                  n("p", [t.$text("Trong thử nghiệm khóa luận, độ chính xác dự đoán trung bình qua bốn mức ping tăng từ 69,8% lên 91,6%. Ở ping 1.000 ms, độ giật giảm từ 431,6 xuống 107,3 đơn vị/s³.")]),
                  n("h3", [n("a", { attrs: { href: "https://dmhoang.itch.io/dog-simulator", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("Dog Simulator")]), t.$text(" · "), n("router-link", { attrs: { to: "/game-projects/dog-simulator" } }, [t.$text("Demo")])]),
                  n("p", [t.$text("Phát triển multiplayer với Photon Fusion 2 Shared Mode, gồm tạo và tham gia phòng riêng bằng mã, đồng bộ nhân vật và xử lý khi người chơi vào hoặc rời phòng.")]),
                ]),
                n(
                  "section",
                  { attrs: { "aria-labelledby": "skills-heading" } },
                  [
                    n("h2", { attrs: { id: "skills-heading" } }, [
                      t.$text("Kỹ năng"),
                    ]),
                    n("div", { staticClass: "skills-grid" }, [
                      n("div", { staticClass: "skill-set" }, [
                        n("h3", [t.$text("Lập trình")]),
                        n("ul", { staticClass: "skills" }, [
                          n("li", [t.$text("C#")]),
                          n("li", [t.$text("Lập trình hướng đối tượng (OOP)")]),
                          n("li", [
                            t.$text("Cấu trúc dữ liệu & giải thuật (DSA)"),
                          ]),
                        ]),
                      ]),
                      n("div", { staticClass: "skill-set" }, [
                        n("h3", [t.$text("Phát triển game")]),
                        n("ul", { staticClass: "skills" }, [
                          n("li", [t.$text("Unity")]),
                          n("li", [t.$text("Lập trình gameplay")]),
                          n("li", [t.$text("Hệ thống game")]),
                          n("li", [t.$text("Triển khai màn chơi")]),
                        ]),
                      ]),
                      n("div", { staticClass: "skill-set" }, [
                        n("h3", [t.$text("Công cụ & tích hợp")]),
                        n("ul", { staticClass: "skills" }, [
                          n("li", [t.$text("Git")]),
                          n("li", [t.$text("Build Android")]),
                          n("li", [t.$text("Firebase Remote Config")]),
                          n("li", [t.$text("AppsFlyer")]),
                          n("li", [t.$text("AppLovin")]),
                          n("li", [t.$text("IAP")]),
                          n("li", [t.$text("Trợ lý AI")]),
                        ]),
                      ]),
                      n("div", { staticClass: "skill-set" }, [
                        n("h3", [t.$text("Kỹ thuật phần mềm")]),
                        n("ul", { staticClass: "skills" }, [
                          n("li", [t.$text("Design Patterns")]),
                          n("li", [t.$text("DOTween")]),
                          n("li", [t.$text("Odin")]),
                          n("li", [t.$text("Unity Profiler")]),
                        ]),
                      ]),
                      n("div", { staticClass: "skill-set" }, [
                        n("h3", [t.$text("Game nhiều người chơi")]),
                        n("ul", { staticClass: "skills" }, [
                          n("li", [t.$text("Netcode for GameObjects (NGO)")]),
                          n("li", [t.$text("Photon Fusion 2")]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]);
          },
        ],
        s = (i("00e0"), i("2877")),
        c = {},
        h = Object(s["a"])(c, a, e, !1, null, "680101a8", null);
      n["default"] = h.exports;
    },
    "4d97": function (t, n, i) {
      "use strict";
      i.r(n);
      var a = function () {
          var t = this,
            n = t._self._c;
          t._self._setupProxy;
          if (t.projectId !== undefined) return renderProjectPage(t, n, t.selectedProject);
          return n("div", { staticClass: "game-projects" }, [
            n("h1", [t.$text(t.gameDesignerMode ? "Games" : "Dự án game")]),
            n("p", { staticClass: "page-intro" }, [
              t.$text(
                t.gameDesignerMode
                  ? "Các dự án tiêu biểu về Level Design, Game Balance, Playtesting, cải tiến gameplay và xây dựng công cụ level trong quá trình phát triển game mobile."
                  : "Những dự án mình đã tham gia phát triển, từ game di động, Game Jam và cuộc thi làm game đến nghiên cứu kỹ thuật trong khóa luận tốt nghiệp."
              ),
            ]),
            n(
              "div",
              { staticClass: "projects-list" },
              t._l(t.projects, function (i) {
                return n(
                  "router-link",
                  {
                    key: i.id,
                    staticClass: "project-item",
                    class: i.id,
                    attrs: {
                      to: "/game-projects/" + i.id,
                    },
                  },
                  [
                    i.image
                      ? n("img", {
                          staticClass: "project-item-image",
                          attrs: { src: i.image, alt: "", loading: "lazy" },
                        })
                      : n(
                          "span",
                          {
                            staticClass: "game-art-placeholder",
                            attrs: { "aria-hidden": "true" },
                          },
                          [
                            n("span", { staticClass: "tohe-wordmark" }, [
                              t.$text(i.coverTitle || "Tò He"),
                            ]),
                            n("span", [t.$text(i.coverSubtitle || "TheDreamer")]),
                          ]
                        ),
                    n("span", { staticClass: "title-bar" }, [
                      t.$text(t._s(i.name)),
                      i.role ? n("span", { staticClass: "card-role" }, [t.$text(i.role)]) : t._e(),
                      n("span", { staticClass: "card-status" }, [t.$text(i.status)]),
                    ]),
                  ]
                );
              }),
              0
            ),
            t.$static(0),
          ]);
        },
        renderTechnicalChallenge = function (t, n, challenges, item, index) {
          return n("article", { key: item.title, staticClass: "technical-challenge" }, [
            n("h3", [
              t.$text(challenges.length > 1 ? (index + 1) + ". " : ""),
              t.$text(item.title),
            ]),
            item.challenge
              ? n("p", [
                  n("strong", [t.$text("Thách thức:")]),
                  t.$text(" " + item.challenge),
                ])
              : t._e(),
            item.solutionHeading ? n("h4", [t.$text(item.solutionHeading)]) : t._e(),
            item.solution
              ? n("p", [
                  item.solutionHeading ? t._e() : n("strong", [t.$text("Giải pháp:")]),
                  t.$text((item.solutionHeading ? "" : " ") + item.solution),
                ])
              : t._e(),
            item.solutionPoints
              ? n(
                  "ul",
                  { staticClass: "design-decisions" },
                  t._l(item.solutionPoints, function (point) {
                    return typeof point === "string"
                      ? n("li", { key: point }, [t.$text(point)])
                      : n("li", { key: point.label }, [
                          n("strong", [t.$text(point.label), t.$text(":")]),
                          t.$text(" " + point.text),
                        ]);
                  }),
                  0
                )
              : t._e(),
            item.outcomeHeading ? n("h4", [t.$text(item.outcomeHeading)]) : t._e(),
            item.outcome ? n("p", [t.$text(item.outcome)]) : t._e(),
            item.description ? n("p", [t.$text(item.description)]) : t._e(),
          ]);
        },
        renderCaseStudy = function (t, n, project) {
          return n("div", { staticClass: "project-detail-content case-study-content" }, [
            n("h2", { staticClass: "case-study-title" }, [t.$text("Case Study")]),
            n(
              "section",
              {
                staticClass: "contributions",
                attrs: { "aria-labelledby": "case-study-contributions-title" },
              },
              [
                n("h2", { attrs: { id: "case-study-contributions-title" } }, [
                  t.$text("Đóng góp của tôi"),
                ]),
                n(
                  "ul",
                  t._l(project.contributions, function (item) {
                    return n("li", { key: item }, [t.$text(item)]);
                  }),
                  0
                ),
              ]
            ),
            project.challenges
              ? n("section", {
                  staticClass: "technical-challenges",
                  attrs: { "aria-labelledby": "case-study-challenges-title" },
                }, [
                  n("h2", { attrs: { id: "case-study-challenges-title" } }, [
                    t.$text("Thách thức kỹ thuật & giải pháp"),
                  ]),
                  t._l(project.challenges, function (item, index) {
                    return renderTechnicalChallenge(t, n, project.challenges, item, index);
                  }),
                ], 2)
              : t._e(),
            project.results
              ? n("section", {
                  staticClass: "research-results",
                  attrs: { "aria-labelledby": "case-study-results-title" },
                }, [
                  n("h2", { attrs: { id: "case-study-results-title" } }, [t.$text("Kết quả")]),
                  project.resultsIntro ? n("p", [t.$text(project.resultsIntro)]) : t._e(),
                  n(
                    "ul",
                    t._l(project.results, function (item) {
                      return n("li", { key: item }, [t.$text(item)]);
                    }),
                    0
                  ),
                  project.resultsNote ? n("p", [t.$text(project.resultsNote)]) : t._e(),
                ])
              : t._e(),
          ]);
        },
        renderProjectPage = function (t, n, project) {
          var defaultMiniGddSections = [
              {
                title: "Tổng quan game",
                description: "Thể loại, nền tảng, người chơi mục tiêu, mục tiêu thiết kế",
              },
              {
                title: "Vòng lặp gameplay cốt lõi",
                description: "Vòng lặp cốt lõi, hành động người chơi, động lực chơi",
              },
              {
                title: "Cơ chế & luật chơi",
                description: "Đầu vào, luật chơi, điều kiện thắng/thua",
              },
              {
                title: "Tiến trình level & độ khó",
                description: "Cấu trúc level, nhịp độ, đường cong độ khó",
              },
              {
                title: "Thiết kế đặc thù",
                description: "Điểm thiết kế riêng của từng game",
              },
              {
                title: "Phản hồi & UX",
                description: "Phản hồi hình ảnh/âm thanh, hướng dẫn, trải nghiệm người chơi",
              },
              {
                title: "Phạm vi thiết kế",
                description: "Thiết kế hiện có, đóng góp cá nhân, các ràng buộc",
              },
            ],
            miniGddSections = project && typeof project.miniGdd === "object"
              ? project.miniGdd.sections
              : defaultMiniGddSections,
            gallerySourceUrl = project && (
              project.gallerySourceUrl === undefined ? project.url : project.gallerySourceUrl
            );
          return n("div", { staticClass: "game-projects" }, [
            n("router-link", { staticClass: "project-back-link", attrs: {
              to: (t.gddOnly || t.caseStudyOnly) && project ? "/game-projects/" + project.id : "/game-projects",
            } }, [
              t.$text((t.gddOnly || t.caseStudyOnly) && project ? "← Về trang game" : "← Về danh sách game"),
            ]),
            project
              ? n("article", { staticClass: "project-detail" }, [
                  n("header", { staticClass: "project-detail-header", class: project.id }, [
                    n("h1", [t.$text(project.name)]),
                  ]),
                  t.gddOnly && project.miniGdd
                    ? n(
                        "section",
                        {
                          staticClass: "mini-gdd",
                          attrs: {
                            "aria-labelledby": "mini-gdd-title-" + project.id,
                          },
                        },
                        [
                          n(
                            "h2",
                            {
                              staticClass: "mini-gdd-title",
                              attrs: { id: "mini-gdd-title-" + project.id },
                            },
                            [t.$text(project.miniGdd.title || "Mini GDD")]
                          ),
                          typeof project.miniGdd === "object" && project.miniGdd.subtitle
                            ? n("p", { staticClass: "mini-gdd-subtitle" }, [
                                t.$text(project.miniGdd.subtitle),
                              ])
                            : t._e(),
                          n(
                            "div",
                            { staticClass: "mini-gdd-grid" },
                            t._l(miniGddSections, function (section, index) {
                              return n(
                                "article",
                                { key: section.title, staticClass: "mini-gdd-item" },
                                [
                                  n("span", { staticClass: "mini-gdd-number" }, [
                                    t.$text((index < 9 ? "0" : "") + (index + 1)),
                                  ]),
                                  n("h3", [t.$text(section.title)]),
                                  section.description
                                    ? n("p", { staticClass: "mini-gdd-description" }, [
                                        t.$text(section.description),
                                      ])
                                    : t._e(),
                                  section.entries
                                    ? n(
                                        "div",
                                        { staticClass: "mini-gdd-entries" },
                                        t._l(section.entries, function (entry) {
                                          if (entry.flow) {
                                            return n(
                                              "section",
                                              { key: entry.label, staticClass: "mini-gdd-flow-block" },
                                              [
                                                n("h4", [t.$text(entry.label)]),
                                                n(
                                                  "div",
                                                  {
                                                    staticClass: "mini-gdd-flow-wrap",
                                                    class: {
                                                      "is-loop": entry.loop,
                                                      "is-grid-2x2": entry.flow.length === 4,
                                                      "has-optional": entry.optional,
                                                    },
                                                  },
                                                  [
                                                    entry.optional
                                                      ? n("div", { staticClass: "mini-gdd-optional" }, [
                                                          n("span", { staticClass: "mini-gdd-optional-node" }, [
                                                            t.$text(entry.optional.label),
                                                          ]),
                                                          n("span", { staticClass: "mini-gdd-optional-note" }, [
                                                            t.$text(entry.optional.note),
                                                          ]),
                                                        ])
                                                      : t._e(),
                                                    n(
                                                      "ol",
                                                      {
                                                        staticClass: "mini-gdd-flow",
                                                        attrs: { "aria-label": t.$translate(entry.label) },
                                                      },
                                                      t._l(entry.flow, function (step) {
                                                        return n("li", { key: step }, [t.$text(step)]);
                                                      }),
                                                      0
                                                    ),
                                                    entry.loop
                                                      ? n("span", {
                                                          staticClass: "mini-gdd-loop-return",
                                                          attrs: { "aria-hidden": "true" },
                                                        })
                                                      : t._e(),
                                                  ]
                                                ),
                                              ]
                                            );
                                          }
                                          return n(
                                            "div",
                                            {
                                              key: entry.label,
                                              staticClass: "mini-gdd-entry",
                                              class: entry.value.length <= 60 ? "is-compact" : "is-long",
                                            },
                                            [
                                              n("p", { staticClass: "mini-gdd-entry-label" }, [t.$text(entry.label)]),
                                              n("p", { staticClass: "mini-gdd-entry-value" }, [t.$text(entry.value)]),
                                            ]
                                          );
                                        }),
                                        0
                                      )
                                    : t._e(),
                                ]
                              );
                            }),
                            0
                          ),
                        ]
                      )
                    : t._e(),
                  t.caseStudyOnly && project.caseStudy
                    ? renderCaseStudy(t, n, project)
                    : t._e(),
                  !t.gddOnly && !t.caseStudyOnly && project.youtubeVideoId
                    ? n("iframe", {
                        key: project.id,
                        staticClass: "project-video",
                        attrs: {
                          src: "https://www.youtube.com/embed/" + encodeURIComponent(project.youtubeVideoId) + "?playsinline=1",
                          title: t.$translate("Video YouTube") + " · " + t.$translate(project.name),
                          referrerpolicy: "strict-origin-when-cross-origin",
                          allow: "encrypted-media; picture-in-picture; fullscreen",
                          allowfullscreen: "",
                        },
                      })
                    : t._e(),
                  t.gddOnly || t.caseStudyOnly ? t._e() : n("div", { staticClass: "project-detail-content" }, [
                    n("p", { staticClass: "category" }, [
                      t.$text(t._s(project.category)),
                    ]),
                    n("p", { staticClass: "highlight" }, [
                      t.$text(t._s(project.highlight)),
                    ]),
                    project.role ? n("p", { staticClass: "project-role" }, [t.$text(project.role)]) : t._e(),
                    t.gameDesignerMode && (project.miniGdd || project.caseStudy || project.levelSheetUrl)
                      ? n("div", { staticClass: "project-subpage-links" }, [
                          project.miniGdd
                            ? n("a", {
                                staticClass: "game-link gdd-link",
                                attrs: {
                                  href: "/gamedev-portfolio/gamedesigner/#/game-projects/" + project.id + "/gdd",
                                },
                              }, [t.$text("Xem GDD")])
                            : t._e(),
                          project.caseStudy
                            ? n("a", {
                                staticClass: "game-link case-study-link",
                                attrs: {
                                  href: "/gamedev-portfolio/gamedesigner/#/game-projects/" + project.id + "/case-study",
                                },
                              }, [t.$text("Xem Case Study")])
                            : t._e(),
                          project.levelSheetUrl
                            ? n("a", {
                                staticClass: "game-link level-sheet-link",
                                attrs: {
                                  href: project.levelSheetUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                              }, [t.$text("Xem Level Sheet")])
                            : t._e(),
                        ])
                      : t._e(),
                    n("h2", [t.$text("Tổng quan")]),
                    n("p", [t.$text(t._s(project.summary))]),
                    project.team
                      ? n("p", [
                          n("strong", [t.$text("Đội phát triển:")]),
                          t.$text(" " + t._s(project.team)),
                        ])
                      : t._e(),
                    n("p", [
                      n("strong", [t.$text("Nền tảng:")]),
                      t.$text(" " + t._s(project.platform)),
                    ]),
                    n("p", [n("strong", [t.$text("Trạng thái:")]), t.$text(" " + project.status)]),
                    project.url
                      ? n(
                          "a",
                          {
                            staticClass: "game-link",
                            attrs: {
                              href: project.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            t.$text(" " + t._s(project.linkLabel) + " "),
                            n("span", { attrs: { "aria-hidden": "true" } }, [
                              t.$text("↗"),
                            ]),
                          ]
                        )
                      : t._e(),
                    project.introductionUrl
                      ? n("p", [
                          n(
                            "a",
                            {
                              staticClass: "game-link",
                              attrs: {
                                href: project.introductionUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                            },
                            [t.$text("Xem bài giới thiệu trên Facebook ↗")]
                          ),
                        ])
                      : t._e(),
                    project.documentUrl
                      ? n("p", [
                          n(
                            "a",
                            {
                              staticClass: "game-link",
                              attrs: {
                                href: project.documentUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                            },
                            [t.$text("Đọc khóa luận (PDF) ↗")]
                          ),
                        ])
                      : t._e(),
                    n("h2", [t.$text("Tính năng nổi bật")]),
                    n(
                      "ul",
                      t._l(project.features, function (i) {
                        return n("li", { key: i }, [t.$text(t._s(i))]);
                      }),
                      0
                    ),
                    !t.gameDesignerMode || !project.caseStudy ? n(
                      "section",
                      {
                        staticClass: "contributions",
                        attrs: { "aria-labelledby": "contributions-title" },
                      },
                      [
                        n("h2", { attrs: { id: "contributions-title" } }, [
                          t.$text("Đóng góp của tôi"),
                        ]),
                        project.contributions.length
                          ? n(
                              "ul",
                              t._l(
                                project.contributions,
                                function (i) {
                                  return n("li", { key: i }, [
                                    t.$text(t._s(i)),
                                  ]);
                                }
                              ),
                              0
                            )
                          : n(
                              "p",
                              { staticClass: "contribution-placeholder" },
                              [t.$text("Nội dung sẽ được bổ sung.")]
                            ),
                      ]
                    ) : t._e(),
                    (!t.gameDesignerMode || !project.caseStudy) && project.challenges
                      ? n("section", { staticClass: "technical-challenges", attrs: { "aria-labelledby": "challenges-title" } }, [
                          n("h2", { attrs: { id: "challenges-title" } }, [t.$text("Thách thức kỹ thuật & giải pháp")]),
                          t._l(project.challenges, function (item, index) {
                            return renderTechnicalChallenge(t, n, project.challenges, item, index);
                          }),
                        ], 2)
                      : t._e(),
                    (!t.gameDesignerMode || !project.caseStudy) && project.results
                      ? n(
                          "section",
                          {
                            staticClass: "research-results",
                            attrs: {
                              "aria-labelledby": "research-results-title",
                            },
                          },
                          [
                            n(
                              "h2",
                              { attrs: { id: "research-results-title" } },
                              [t.$text("Kết quả")]
                            ),
                            project.resultsIntro ? n("p", [t.$text(project.resultsIntro)]) : t._e(),
                            n(
                              "ul",
                              t._l(project.results, function (i) {
                                return n("li", { key: i }, [t.$text(i)]);
                              }),
                              0
                            ),
                            project.resultsNote ? n("p", [t.$text(project.resultsNote)]) : t._e(),
                            project.documentUrl ? n(
                              "a",
                              {
                                staticClass: "game-link",
                                attrs: {
                                  href:
                                    project.documentUrl +
                                    "#page=78",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                              },
                              [
                                t.$text(
                                  "Xem số liệu trong khóa luận (Bảng 4.1-4.8) ↗"
                                ),
                              ]
                            ) : t._e(),
                          ]
                        )
                      : t._e(),
                    project.screenshots.length
                      ? n(
                          "section",
                          {
                            staticClass: "game-gallery",
                            attrs: { "aria-labelledby": "gallery-title" },
                          },
                          [
                            n("h2", { attrs: { id: "gallery-title" } }, [
                              t.$text("Hình ảnh & video"),
                            ]),
                            n("p", { staticClass: "gallery-hint" }, [
                              t.$text("Bấm vào ảnh để xem kích thước lớn."),
                            ]),
                            n(
                              "div",
                              { staticClass: "screenshots-grid" },
                              t._l(
                                project.screenshots,
                                function (i) {
                                  return n("figure", { key: i.src }, [
                                    n(
                                      "a",
                                      {
                                        attrs: {
                                          href: i.src,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          "aria-label":
                                            t.$translate("Xem ảnh lớn: ") +
                                            t.$translate(i.caption) +
                                            t.$translate(" (mở trong tab mới)"),
                                        },
                                      },
                                      [
                                        n("img", {
                                          attrs: {
                                            src: i.src,
                                            alt:
                                              t.$translate(project.name) +
                                              " - " +
                                              t.$translate(i.caption),
                                            loading: "lazy",
                                            decoding: "async",
                                          },
                                        }),
                                      ]
                                    ),
                                    n("figcaption", [
                                      t.$text(t._s(i.caption)),
                                    ]),
                                  ]);
                                }
                              ),
                              0
                            ),
                            gallerySourceUrl
                              ? n("p", { staticClass: "gallery-source" }, [
                                  t.$text("Ảnh từ "),
                                  n(
                                    "a",
                                    {
                                      attrs: {
                                        href: gallerySourceUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                    },
                                    [
                                      t.$text(
                                        project.gallerySourceLabel ||
                                          t.$translate("trang giới thiệu ") +
                                            t.$translate(project.name)
                                      ),
                                    ]
                                  ),
                                  t.$text("."),
                                ])
                              : n("p", { staticClass: "gallery-source" }, [
                                  t.$text("Hình ảnh do tôi cung cấp."),
                                ]),
                          ]
                        )
                      : project.introductionUrl
                        ? n("section", { staticClass: "game-gallery" }, [
                          n("h2", [t.$text("Hình ảnh & video")]),
                          n("a", { staticClass: "game-link", attrs: { href: project.introductionUrl || project.url, target: "_blank", rel: "noopener noreferrer" } }, [t.$text(project.introductionUrl ? "Xem bài giới thiệu trên Facebook ↗" : project.linkLabel)]),
                        ])
                        : t._e(),
                  ]),
                ])
              : n("h1", { staticClass: "project-not-found" }, [t.$text("Không tìm thấy dự án game")]),
          ]);
        },
        e = [
          function () {
            var t = this,
              n = t._self._c;
            t._self._setupProxy;
            return n("p", { staticClass: "more-games" }, [
              t.$text("Các dự án khác trên "),
              n(
                "a",
                {
                  attrs: {
                    href: "https://dmhoang.itch.io",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t.$text("dmhoang.itch.io ↗")]
              ),
            ]);
          },
        ],
        s = i("2b0e"),
        swapProjectPositions = function (projects, firstId, secondId) {
          var ordered = projects.slice(),
            firstIndex = ordered.findIndex(function (project) { return project.id === firstId; }),
            secondIndex = ordered.findIndex(function (project) { return project.id === secondId; });
          if (firstIndex < 0 || secondIndex < 0) return ordered;
          var firstProject = ordered[firstIndex];
          ordered[firstIndex] = ordered[secondIndex];
          ordered[secondIndex] = firstProject;
          return ordered;
        },
        c = swapProjectPositions([
          {
            "id": "shikaku-cats",
            "caseStudy": true,
            "miniGdd": {
              "title": "GDD",
              "sections": [
                {
                  "title": "Tổng quan game",
                  "entries": [
                    { "label": "Thể loại", "value": "Logic Puzzle, Casual." },
                    { "label": "Nền tảng", "value": "Mobile (Android, iOS)." },
                    { "label": "Người chơi mục tiêu", "value": "Người chơi yêu thích giải đố logic, chủ đề mèo dễ thương và trải nghiệm thư giãn có thử thách tư duy." },
                    { "label": "Mục tiêu thiết kế", "value": "Mang đến trải nghiệm giải đố nhẹ nhàng, dễ tiếp cận với độ khó được cân bằng hợp lý, kết hợp chủ đề mèo thân thiện." }
                  ]
                },
                {
                  "title": "Core Gameplay",
                  "entries": [
                    { "label": "Meta Loop", "flow": ["Vào Level", "Giải Puzzle", "Hoàn thành", "Mở khóa Level mới"], "loop": true },
                    { "label": "Interaction Loop", "flow": ["Quan sát", "Suy luận", "Tương tác", "Nhận phản hồi"], "loop": true },
                    { "label": "Hành động người chơi", "value": "Kéo thả để tạo các hình chữ nhật trên bàn lưới." },
                    { "label": "Động lực", "value": "Chinh phục thử thách suy luận, tận hưởng cảm giác giải đố và mở khóa Level mới." }
                  ]
                },
                {
                  "title": "Cơ chế & luật chơi",
                  "entries": [
                    { "label": "Đầu vào", "value": "Drag & Drop." },
                    { "label": "Luật chơi", "value": "Chia bàn lưới thành các hình chữ nhật không chồng lấn. Mỗi hình chứa đúng một ô số và có diện tích bằng giá trị số đó." },
                    { "label": "Điều kiện thắng", "value": "Phủ kín bàn lưới bằng các hình chữ nhật hợp lệ, không chồng lấn hoặc bỏ trống ô." },
                    { "label": "Điều kiện thua", "value": "Không có. Người chơi có thể thử lại và điều chỉnh lời giải." }
                  ]
                },
                {
                  "title": "Tiến trình Level & độ khó",
                  "entries": [
                    { "label": "Cấu trúc Level", "value": "Mỗi Level có một bàn lưới chứa các ô số và một lời giải duy nhất. Độ khó phụ thuộc vào cách bố trí số, số phương án và mức độ phức tạp suy luận." },
                    { "label": "Nhịp độ", "value": "Không giới hạn thời gian. Xen kẽ các Level khó và dễ để cân bằng thử thách với khoảng nghỉ." },
                    { "label": "Difficulty Curve", "value": "Bắt đầu bằng Tutorial và các Level đơn giản, dần mở rộng quy mô và độ phức tạp. Phân bổ độ khó theo chu kỳ Easy → Medium → Hard → Recovery." }
                  ]
                },
                {
                  "title": "Thiết kế đặc thù",
                  "entries": [
                    { "label": "Logic-Based Puzzle Design", "value": "Độ khó không chỉ đến từ kích thước bàn mà còn từ số phương án cần cân nhắc và khả năng loại trừ lựa chọn. Level khó yêu cầu suy luận và quay lui để tìm ra lời giải." }
                  ]
                },
                {
                  "title": "Phản hồi & UX",
                  "entries": [
                    { "label": "Phản hồi hình ảnh/âm thanh", "value": "Kéo thả có Animation và SFX. Hình chữ nhật hợp lệ hiển thị mèo, hoàn thành Level kích hoạt Animation ăn mừng." },
                    { "label": "Hướng dẫn", "value": "Tutorial giới thiệu luật chơi. Hint có thể mở khóa bằng mua hoặc xem quảng cáo để hiển thị một hình chữ nhật đúng." },
                    { "label": "Trải nghiệm người chơi", "value": "Thao tác trực quan, phản hồi tức thời, giải đố logic không áp lực thời gian." }
                  ]
                },
                {
                  "title": "Phạm vi thiết kế & đóng góp",
                  "entries": [
                    { "label": "Thiết kế hiện có", "value": "Core Mechanics dựa trên trò chơi Rectangles thuộc bộ sưu tập puzzle của Simon Tatham." },
                    { "label": "Đóng góp của tôi", "value": "Thiết kế Difficulty Curve. Mở rộng công cụ sinh Level có thể tùy chỉnh độ khó để tạo khoảng 100 Level. Kết hợp đánh giá tự động, Internal Playtesting và chỉnh sửa thủ công để cân bằng Level. Triển khai gameplay, hiệu ứng và tham gia Public Testing với gần 3.000 người chơi." },
                    { "label": "Ràng buộc", "value": "Giữ Core Mechanics cố định, đảm bảo trải nghiệm thư giãn và hạn chế cảm giác lặp lại giữa các Level." }
                  ]
                }
              ]
            },
            "youtubeVideoId": "CZL4IkIqYas",
            "role": "Hoàn thiện gameplay từ bản thử nghiệm và phụ trách hệ thống level, dữ liệu trong đội hai người.",
            "name": "Shikaku Cats: Number Puzzle",
            "image": "img/projects/shikaku-cats-cover.png",
            "screenshots": [
              {
                "src": "img/projects/shikaku-cats-ss1.png",
                "caption": "Hoàn thành các vùng trên bảng để hé lộ những chú mèo."
              },
              {
                "src": "img/projects/shikaku-cats-ss2.png",
                "caption": "Kéo để tạo vùng có số ô khớp với con số."
              },
              {
                "src": "img/projects/shikaku-cats-ss3.png",
                "caption": "Giải các bảng số lớn hơn với độ khó tăng dần."
              }
            ],
            "category": "Giải đố · Logic",
            "highlight": "Gần 3.000 người chơi trong public testing",
            "summary": "Game giải đố Shikaku với những chú mèo ẩn trong bảng số. Chia bảng thành các hình chữ nhật hoặc hình vuông có diện tích khớp với con số để hoàn thành màn chơi và khám phá những chú mèo.",
            "features": [
              "Kéo để tạo hình chữ nhật hoặc hình vuông trên lưới.",
              "Mỗi vùng chứa đúng một con số và số ô tương ứng.",
              "Hé lộ các chú mèo khi hoàn thành câu đố.",
              "Thử thách tư duy logic và khả năng hình dung không gian với độ khó tăng dần."
            ],
            "platform": "Android · Google Play",
            "url": "https://play.google.com/store/apps/details?id=com.shikaku.cat.puzzle",
            "linkLabel": "Xem trên Google Play",
            "contributions": [
              "Tiếp nhận bản thử nghiệm và hoàn thiện gameplay bằng Unity/C#, gồm logic giải đố, tương tác bảng, khởi tạo bảng từ dữ liệu cấu hình và quản lý trạng thái level.",
              "Triển khai công cụ kiểm thử và Daily Reward. Dùng DOTween và Unity Animation cho hiệu ứng hoàn thành block và level, đồng thời phối hợp với thành viên phụ trách UI.",
              "Tích hợp và cấu hình Firebase Remote Config, AppLovin, AppsFlyer và IAP. Triển khai bản Android và sửa lỗi trong giai đoạn public testing với gần 3.000 người chơi."
            ],
            "status": "Public testing · Android qua Google Play Console · gần 3.000 người chơi.",
            "challenges": [
              {
                "title": "Tích hợp và cải tiến pipeline sinh level",
                "challenge": "Thuật toán có sẵn phụ thuộc môi trường Linux/WSL và chưa hỗ trợ kiểm soát độ khó theo yêu cầu.",
                "solution": "Đóng gói thuật toán sinh level có sẵn thành DLL và bổ sung pipeline: cấu hình độ khó → sinh nhiều map → chấm điểm map → chọn map phù hợp."
              },
              {
                "title": "Tái cấu trúc hệ thống dữ liệu",
                "challenge": "DataManager tập trung quá nhiều trách nhiệm, khiến code khó quản lý và mở rộng.",
                "solution": "Tách các chức năng từ DataManager thành các Service. DataManager tập trung load/save và cung cấp hoặc điều phối các Service. Mỗi Service đảm nhận chức năng riêng."
              },
              {
                "title": "Hoàn thiện phản hồi thị giác",
                "challenge": "Bản demo chủ yếu tập trung vào cơ chế kéo thả block, còn thiếu phản hồi hình ảnh khi hoàn thành thao tác.",
                "solution": "Bổ sung hiệu ứng sticker nổi khi hoàn thành block và hiệu ứng sticker nhảy sau khi hoàn thành level bằng DOTween và Animation."
              }
            ],
            "results": [
              "Hỗ trợ tạo hàng trăm level với cấu hình độ khó tùy chỉnh.",
              "Chuyển từ một class lớn hàng trăm dòng sang DataManager chỉ còn vài chục dòng, với các Service nhỏ hơn và dễ bảo trì.",
              "Triển khai bản Android qua Google Play Console để public testing với gần 3.000 người chơi."
            ]
          },
          {
            "id": "cookingdom",
            "caseStudy": true,
            "miniGdd": {
              "title": "GDD",
              "sections": [
                {
                  "title": "Tổng quan game",
                  "entries": [
                    { "label": "Thể loại", "value": "Simulation, Casual Cooking." },
                    { "label": "Nền tảng", "value": "Mobile (Android, iOS)." },
                    { "label": "Người chơi mục tiêu", "value": "Người chơi casual yêu thích chủ đề nấu ăn, nhân vật dễ thương và các tương tác trực quan. Tìm kiếm trải nghiệm thư giãn, dễ tiếp cận, có thử thách nhẹ và cảm giác hoàn thành." },
                    { "label": "Mục tiêu thiết kế", "value": "Mang đến trải nghiệm nấu ăn thư giãn, kết hợp thử thách nhẹ nhàng và những khoảnh khắc cao trào. Nội dung xoay quanh Capybara và các món ăn đa dạng từ nhiều nền ẩm thực." }
                  ]
                },
                {
                  "title": "Core Gameplay",
                  "entries": [
                    { "label": "Meta Loop", "flow": ["Chọn món ăn", "Nấu ăn", "Hoàn thành", "Mở khóa món mới"], "loop": true },
                    { "label": "Interaction Loop", "flow": ["Quan sát", "Suy luận", "Tương tác", "Nhận phản hồi"], "loop": true },
                    { "label": "Hành động người chơi", "value": "Sơ chế, nấu ăn, trang trí thông qua tương tác trực tiếp." },
                    { "label": "Động lực", "value": "Vượt qua thử thách, tận hưởng thành quả và khám phá món ăn mới." }
                  ]
                },
                {
                  "title": "Cơ chế & luật chơi",
                  "entries": [
                    { "label": "Đầu vào", "value": "Tap, Drag & Drop, Hold, Swipe." },
                    { "label": "Luật chơi", "value": "Người chơi tự khám phá thao tác hợp lệ dựa trên bối cảnh, trạng thái và bố cục vật phẩm. Hành động cần logic, dễ suy luận." },
                    { "label": "Điều kiện thắng", "value": "Hoàn thành các Step trong thời gian cho phép." },
                    { "label": "Điều kiện thua", "value": "Hết thời gian khi chưa hoàn thành Level và không tiếp tục bằng cơ chế gia hạn." }
                  ]
                },
                {
                  "title": "Tiến trình level & độ khó",
                  "entries": [
                    { "label": "Cấu trúc level", "flow": ["Preparation", "Cooking", "Presentation"], "optional": { "label": "Minigame (tùy chọn)", "note": "Có thể xen kẽ giữa các Step" } },
                    { "label": "Nhịp độ trong level", "value": "Mở đầu bằng thao tác đơn giản, tăng dần độ phức tạp và nhịp độ ở các Step giữa, kết thúc bằng Step trình bày nhẹ nhàng." },
                    { "label": "Độ khó giữa các level", "value": "Các Level tăng dần số lượng thao tác, độ phức tạp và thử thách Minigame. Xen kẽ Level đơn giản để tạo nhịp nghỉ." },
                    { "label": "Gia hạn thời gian", "value": "Rewarded Ads cho phép người chơi nhận thêm thời gian khi gặp khó khăn." }
                  ]
                },
                {
                  "title": "Thiết kế đặc thù",
                  "entries": [
                    { "label": "Step-Based Interaction Design", "value": "Độ khó được tạo từ số lượng, thứ tự, sự đa dạng thao tác và trạng thái vật phẩm. Các Step cần duy trì tính logic, hạn chế lặp lại và đảm bảo người chơi có thể vận dụng kinh nghiệm từ những tương tác trước." }
                  ]
                },
                {
                  "title": "Phản hồi & UX",
                  "entries": [
                    { "label": "Phản hồi hình ảnh/âm thanh", "value": "Mỗi tương tác cần có phản hồi tức thời thông qua Animation, VFX và Sound Effects." },
                    { "label": "Hướng dẫn", "value": "Ưu tiên hướng dẫn gián tiếp bằng bố cục và trạng thái vật phẩm. Sử dụng chỉ dẫn trực tiếp khi thao tác khó suy luận." },
                    { "label": "Hệ thống gợi ý", "value": "Có thể mở khóa gợi ý trực tiếp thông qua mua hoặc xem quảng cáo." },
                    { "label": "Trải nghiệm người chơi", "value": "Duy trì gameplay mượt mà, trực quan, có thử thách nhưng không gây khó chịu bởi thao tác thiếu logic." }
                  ]
                },
                {
                  "title": "Phạm vi thiết kế & đóng góp",
                  "entries": [
                    { "label": "Thiết kế hiện có", "value": "Gameplay, hệ thống tương tác và bản vẽ các Step kèm hướng dẫn đã được cung cấp." },
                    { "label": "Đóng góp của tôi", "value": "Triển khai hơn 10 Level. Chủ động thêm, bớt và điều chỉnh Step, thao tác để cải thiện tính logic, trải nghiệm và khả năng triển khai. Kiểm thử, sửa lỗi gameplay và tái sử dụng logic Level." },
                    { "label": "Ràng buộc", "value": "Hạn chế sự lặp lại giữa các Step/Level trong phạm vi mechanics có sẵn, đồng thời duy trì chủ đề món ăn và nhịp độ trải nghiệm." }
                  ]
                }
              ]
            },
            "youtubeVideoId": "XiBkFug2SVE",
            "name": "Cookingdom (ABI Games)",
            "image": "img/projects/cookingdom-cover.png",
            "screenshots": [
              {
                "src": "img/projects/cookingdom-ss1.png",
                "caption": "Khám phá các món ăn trong bộ sưu tập công thức."
              },
              {
                "src": "img/projects/cookingdom-ss2.png",
                "caption": "Chuẩn bị nguyên liệu, cuộn và cắt sushi."
              },
              {
                "src": "img/projects/cookingdom-ss3.png",
                "caption": "Thực hiện từng bước để hoàn thiện món ăn."
              }
            ],
            "category": "Nấu ăn · Thư giãn",
            "highlight": "Tự triển khai hơn 10 màn từ gameplay có sẵn",
            "summary": "Game nấu ăn với nhịp độ nhẹ nhàng, đưa người chơi qua từng bước chuẩn bị và hoàn thiện món ăn. Các công thức được chia thành những minigame tương tác, kết hợp âm thanh ASMR.",
            "features": [
              "Thao tác cắt, trộn, nấu và trang trí món ăn qua từng minigame.",
              "Khám phá nhiều công thức, nguyên liệu và dụng cụ nấu ăn.",
              "Trang trí không gian bếp và tùy chỉnh trang phục đầu bếp.",
              "Trải nghiệm thư giãn với âm thanh ASMR và nhạc nền nhẹ nhàng."
            ],
            "platform": "Android · Google Play",
            "url": "https://play.google.com/store/apps/details?id=com.abi.cook.chill",
            "levelSheetUrl": "https://docs.google.com/spreadsheets/d/1DS746XaZU-YuXU9fYOGNVOfr-LyaV7qy-X6INFW0nls/edit?gid=472458446#gid=472458446",
            "linkLabel": "Xem trên Google Play",
            "contributions": [
              "Tự triển khai hơn 10 level bằng Unity/C# từ gameplay có sẵn.",
              "Triển khai logic gameplay, cơ chế tương tác và các chức năng đặc thù theo thiết kế từng level.",
              "Điều chỉnh gameplay, cân bằng độ khó và xử lý lỗi để các level vận hành ổn định trong hệ thống hiện có."
            ],
            "status": "Đã phát hành trên Google Play.",
            "challenges": [
              {
                "title": "Tái sử dụng logic giữa các level",
                "challenge": "Nhiều level sử dụng các bước và cơ chế tương tác lặp lại, khiến việc triển khai ban đầu tốn nhiều thời gian.",
                "solution": "Tái sử dụng logic qua kế thừa, nhóm các class có chức năng tương đồng để giảm code trùng lặp."
              },
              {
                "title": "Cân bằng độ khó level",
                "challenge": "Cân bằng độ khó và tính trực quan của các Level, đảm bảo thao tác dễ hiểu, dễ thực hiện nhưng vẫn bám sát quy trình chế biến món ăn thực tế.",
                "solutionHeading": "Giải pháp",
                "solutionPoints": [
                  "Thêm, bớt hoặc điều chỉnh thao tác nhằm hạn chế tương tác phức tạp, ưu tiên điều khiển bằng một ngón tay.",
                  "Tận dụng những quy luật tương tác quen thuộc trong đời sống để người chơi dễ dàng suy luận thao tác hợp lệ.",
                  "Điều chỉnh trình tự và số lượng thao tác để giảm độ khó không cần thiết mà vẫn giữ tính logic của quy trình nấu ăn."
                ]
              }
            ],
            "results": [
              "Góp phần rút ngắn thời gian triển khai mỗi level từ khoảng 2 tuần xuống 1 tuần.",
              "Hoàn thiện các Level với tương tác đơn giản, dễ suy luận và phù hợp với trải nghiệm Casual Cooking. Độ khó được điều chỉnh theo mục tiêu thiết kế, đồng thời duy trì tính logic của từng công đoạn nấu ăn."
            ]
          },
          {
            "id": "shuriken-rush",
            "caseStudy": true,
            "miniGdd": true,
            "youtubeVideoId": "PDFpkacKMn0",
            "name": "Shuriken Rush",
            "role": "Độc lập phát triển toàn bộ game.",
            "image": "img/projects/superhot-cover.png",
            "screenshots": [
              {
                "src": "img/projects/superhot-ss1.png",
                "caption": "Đối đầu với nhiều kẻ địch trong một màn chơi."
              },
              {
                "src": "img/projects/superhot-ss2.png",
                "caption": "Di chuyển tay trên màn hình để tạo vũ khí bay vào tiêu diệt kẻ địch."
              },
              {
                "src": "img/projects/superhot-ss3.png",
                "caption": "Chọn các loại vũ khí đã mở khóa."
              }
            ],
            "category": "Hành động · 3D",
            "highlight": "Khoảng 20 → 57 FPS với 1.000 kẻ địch (Unity Editor)",
            "summary": "Game hành động 3D lấy cảm hứng từ Slow Mo Strike: Knives in Time. Người chơi di chuyển tay trên màn hình để tạo vũ khí bay vào kẻ địch. Tiêu diệt hết địch để qua màn và mở khóa vũ khí mới. Trò chơi tập trung vào nhịp hành động liên tục, số lượng kẻ địch đông và cảm giác kết liễu thỏa mãn.",
            "features": [
              "Di chuyển tay trên màn hình để spawn vũ khí bay về phía kẻ địch.",
              "Tiêu diệt toàn bộ kẻ địch để hoàn thành màn và tiếp tục qua các màn mới.",
              "Mở khóa và lựa chọn nhiều loại vũ khí khác nhau.",
              "Thanh Combo đầy sẽ kích hoạt Frenzy: nhịp game nhanh hơn và người chơi ném ra nhiều vũ khí hơn."
            ],
            "platform": "Android · Google Play",
            "url": "https://play.google.com/store/apps/details?id=com.riseon.superhot",
            "linkLabel": "Xem trên Google Play",
            "contributions": [
              "Phát triển hệ thống combat, sinh các đợt kẻ địch, điều khiển vũ khí bằng thao tác cảm ứng và xử lý điều kiện qua màn.",
              "Xây dựng tiến trình mở khóa vũ khí và thanh Combo. Khi kích hoạt Frenzy, tăng nhịp độ game và số lượng vũ khí được ném ra.",
              "Tập trung thiết kế cảm giác hành động liên tục và kết liễu, với lượng kẻ địch dày đặc hơn và ít phụ thuộc vào bẫy môi trường.",
              "Hoàn thiện sản phẩm, build Android và xử lý lỗi trong giai đoạn public testing."
            ],
            "challenges": [
              {
                "title": "Duy trì hiệu năng khi có nhiều model 3D hoạt động",
                "challenge": "Mật độ kẻ địch cao làm tăng khối lượng animation và rendering cần xử lý.",
                "solution": "Dùng Unity Profiler để xác định điểm nghẽn trong animation và rendering, sau đó áp dụng VAT Baking và Indirect Rendering để giảm tải khi có nhiều kẻ địch."
              }
            ],
            "results": [
              "Với 1.000 kẻ địch trong Unity Editor, tốc độ khung hình tăng từ khoảng 20 lên 57 FPS sau khi áp dụng VAT Baking và Indirect Rendering.",
              "Combo và Frenzy tạo nhịp combat dồn dập hơn bằng cách tăng tốc độ game và số vũ khí được ném ra.",
              "Tiến trình qua màn và mở khóa vũ khí duy trì mục tiêu chơi tiếp sau mỗi đợt kẻ địch."
            ],
            "status": "Đã phát hành trên Google Play."
          },
          {
            "id": "missile-rally",
            "youtubeVideoId": "OIgTe-txDig",
            "name": "MissileRally - Khóa luận",
            "image": "img/projects/missile-rally-gameplay.png",
            "coverTitle": "MissileRally",
            "coverSubtitle": "Dead Reckoning · Unity",
            "screenshots": [
              {
                "src": "img/projects/missile-rally-menu.png",
                "caption": "Menu Host/Join và thiết lập Ping, Jitter - Hình 4.1."
              },
              {
                "src": "img/projects/missile-rally-lobby.png",
                "caption": "Phòng chờ, chọn màu xe và xác nhận Ready - Hình 4.2."
              },
              {
                "src": "img/projects/missile-rally-gameplay.png",
                "caption": "Gameplay và giao diện bật/tắt kỹ thuật đồng bộ, theo dõi chỉ số - Hình 4.3."
              }
            ],
            "category": "Đua xe nhiều người chơi · Khóa luận tốt nghiệp",
            "highlight": "Nghiên cứu cải tiến Dead Reckoning",
            "summary": "Khóa luận tốt nghiệp ngành Công nghệ thông tin tại Đại học Công nghệ - ĐHQGHN (2026): “Phương pháp nội suy hỗ trợ giảm độ trễ trong game trực tuyến”. Phát triển hệ thống thực nghiệm trên nền game đua xe RocketRally (bản demo MissileRally), nghiên cứu dự đoán và nội suy để giảm ảnh hưởng của độ trễ mạng đến chuyển động và tương tác giữa người chơi.",
            "features": [
              "Đua xe nhiều người chơi qua Host/Join, phòng chờ, chọn màu xe, Ready, bắn làm choáng đối thủ và Respawn.",
              "Cải tiến Dead Reckoning bằng dự đoán bậc hai, Time Stamping, Adaptive Threshold và SmoothDamp.",
              "Quản lý tick với NetworkTimer và lưu input, trạng thái trong CircularBuffer.",
              "Tích hợp Client-side Prediction và Server Reconciliation cho xe người chơi. Lag Compensation để kiểm tra tương tác trong quá khứ.",
              "Giao diện chuyển đổi thuật toán, tùy chỉnh Ping/Jitter và tham số. Theo dõi Accuracy, Jerk và số lần bắn trúng."
            ],
            "platform": "PC (Windows)",
            "url": "https://github.com/DuongMinhHoang1008/Improve_DeadReckoning_Unity",
            "linkLabel": "Xem mã nguồn & hướng dẫn chạy",
            "contributions": [
              "Mở rộng game đua xe multiplayer có sẵn bằng Unity/Netcode for GameObjects thành môi trường thực nghiệm. Cải tiến Dead Reckoning bằng dự đoán bậc hai, Time Stamping, SmoothDamp và Adaptive Threshold.",
              "Xây dựng bot chạy theo waypoint, tự điều chỉnh tốc độ khi vào cua và tự động bắn laser để duy trì tính nhất quán của các kịch bản thử nghiệm.",
              "Thiết kế thực nghiệm với nhiều mức ping/jitter. Đo độ chính xác dự đoán, độ giật chuyển động và chi phí CPU/RAM.",
              "Phân tích sự đánh đổi giữa độ chính xác, độ mượt và tài nguyên để đề xuất cấu hình phù hợp theo từng trường hợp sử dụng."
            ],
            "documentUrl": "d/22021218_Duong_Minh_Hoang.pdf",
            "gallerySourceUrl": "d/22021218_Duong_Minh_Hoang.pdf#page=69",
            "gallerySourceLabel": "khóa luận, Chương 4 (trang 56-58)",
            "resultsIntro": "Trong các kịch bản thử nghiệm của khóa luận:",
            "results": [
              "Độ chính xác dự đoán trung bình qua bốn mức ping tăng từ 69,8% lên 91,6%.",
              "Tại ping 1.000 ms, độ chính xác dự đoán tăng từ 57,8% lên 81,7% và độ giật giảm từ 431,6 xuống 107,3 đơn vị/s³.",
              "Lag Compensation nâng Hit Accuracy từ 0% lên 100% tại ping 500 ms và 1.000 ms trong thử nghiệm."
            ],
            "resultsNote": "Demo nghiên cứu giảm tác động của độ trễ lên cảm nhận gameplay, không làm giảm độ trễ mạng thực tế. Cần cân bằng độ mượt, độ chính xác và chi phí tài nguyên.",
            "status": "Bản demo phục vụ thực nghiệm khóa luận tốt nghiệp (2026).",
            "challenges": [
              {
                "title": "Cải thiện độ chính xác dự đoán",
                "challenge": "Dead Reckoning sử dụng mô hình dự đoán bậc một có thể kém chính xác khi xe tăng tốc, giảm tốc hoặc đổi hướng. Sai lệch thời gian cũng ảnh hưởng đến dự đoán.",
                "solution": "Bổ sung thành phần gia tốc trong mô hình dự đoán bậc hai và sử dụng Time Stamping để tính khoảng thời gian dự đoán chính xác hơn."
              },
              {
                "title": "Giảm độ giật chuyển động",
                "challenge": "Hiệu chỉnh trạng thái trực tiếp có thể gây chuyển động giật, đặc biệt khi độ trễ mạng cao.",
                "solution": "Kết hợp SmoothDamp với Adaptive Threshold để làm mượt chuyển động và điều chỉnh thời điểm hiệu chỉnh theo mức sai lệch."
              },
              {
                "title": "Kiểm chứng các cơ chế hỗ trợ",
                "description": "Sử dụng Client-side Prediction và Server Reconciliation cho đối tượng người chơi. Thử nghiệm Lag Compensation cho các tương tác phụ thuộc thời điểm như bắn laser."
              }
            ]
          },
          {
            "id": "dog-simulator",
            "youtubeVideoId": "_LI_h0PVXKc",
            "name": "Dog Simulator",
            "image": "img/projects/dog-simulator-promo.png",
            "screenshots": [
              {
                "src": "img/projects/dog-simulator-custom-face.png",
                "caption": "Tùy chỉnh khuôn mặt bằng ảnh cá nhân."
              },
              {
                "src": "img/projects/dog-simulator-gameplay.png",
                "caption": "Khám phá đường phố trong vai một chú chó."
              },
              {
                "src": "img/projects/dog-simulator-main-menu.png",
                "caption": "Menu chính với chế độ chơi đơn và nhiều người chơi."
              }
            ],
            "gallerySourceUrl": null,
            "category": "Sandbox nhiều người chơi",
            "highlight": "Photon Fusion 2 Shared Mode",
            "summary": "Game sandbox làm bằng Unity, nơi bạn và bạn bè hóa thân thành những chú chó, tự do khám phá, nghịch đồ đạc và chọc phá NPC.",
            "features": [
              "Tạo phòng riêng và mời người chơi khác tham gia bằng mã phòng.",
              "Tùy chỉnh ngoại hình và chọn khuôn mặt cho chú chó của bạn.",
              "Chạy, nhảy, sủa, cắn, ngậm và ném đồ vật.",
              "Lái ô tô hoặc trèo lên lưng bạn bè để xếp chồng cả đàn."
            ],
            "platform": "Demo trên trình duyệt (HTML5) · Bản đầy đủ trên Windows",
            "url": "https://dmhoang.itch.io/dog-simulator",
            "linkLabel": "Chơi demo hoặc tải bản Windows trên itch.io",
            "contributions": [
              "Phát triển multiplayer với Photon Fusion 2 Shared Mode, gồm tạo và tham gia phòng riêng bằng mã, đồng bộ nhân vật và xử lý khi người chơi vào hoặc rời phòng."
            ],
            "status": "Đã phát hành trên itch.io."
          },
          {
            "id": "the-forest-doctor",
            "name": "The Forest Doctor",
            "image": "img/projects/forest-doctor-cover.png",
            "screenshots": [
              {
                "src": "img/projects/forest-doctor-ss1.png",
                "caption": "Xếp nguyên liệu và phối màu để chế thuốc."
              },
              {
                "src": "img/projects/forest-doctor-ss2.png",
                "caption": "Mua nguyên liệu trong cửa hàng."
              },
              {
                "src": "img/projects/forest-doctor-ss3.png",
                "caption": "Chọn thuốc từ kho để chữa bệnh."
              }
            ],
            "category": "Giải đố · Game Jam",
            "highlight": "Top 4 Pixel Sunflower Game Jam",
            "summary": "Vào vai thầy thuốc chữa bệnh cho các con vật trong rừng. Kết hợp nguyên liệu theo quy luật màu sắc để pha đúng loại thuốc cho từng bệnh nhân.",
            "features": [
              "Xếp các mảnh nguyên liệu để tạo thuốc có lượng màu phù hợp với bệnh.",
              "Các màu bổ trợ hoặc triệt tiêu nhau dựa trên vòng tròn màu sắc.",
              "Mua nguyên liệu, bán thuốc và nâng cấp tại cửa hàng.",
              "Kết hợp giải đố với lối chơi endless."
            ],
            "platform": "Trình duyệt web (HTML5) · Unity",
            "url": "https://dmhoang.itch.io/the-forest-doctor",
            "linkLabel": "Chơi trên itch.io",
            "contributions": [
              "Trực tiếp đảm nhiệm toàn bộ phần lập trình game bằng Unity/C#.",
              "Xây dựng và triển khai logic gameplay, các hệ thống chức năng và cơ chế tương tác trong game.",
              "Tích hợp các thành phần gameplay để hoàn thiện trải nghiệm chơi."
            ],
            "status": "Bản game Game Jam có thể chơi trên itch.io."
          },
          {
            "id": "tohe",
            "name": "Tohe",
            "image": "img/projects/tohe.jpg",
            "screenshots": [],
            "category": "Endless Runner · Game Contest",
            "highlight": "Giải ba Hackathon MIRO Game Contest",
            "team": "TheDreamer",
            "summary": "Một người đam mê tò he ước mơ đưa nét văn hóa này ra thế giới bằng game. Khi hiện thực không như mong đợi, anh ngủ thiếp đi và mơ thấy những con tò he của mình thật sự bay đến muôn nơi.",
            "features": [
              "Điều khiển tò he né chướng ngại vật, thu thập xu và đi xa nhất có thể.",
              "Dùng xu mở khóa tính năng và các tò he mới, mỗi tò he có kỹ năng riêng.",
              "Chướng ngại vật và màu sắc gợi lên những trở ngại, cảm xúc trong hành trình theo đuổi ước mơ.",
              "Các tò he lấy cảm hứng từ Việt Nam, Mỹ, Anh và Úc: rồng, trâu, đại bàng, tượng Nữ thần Tự do, sư tử, Big Ben, kangaroo và koala."
            ],
            "platform": "Android",
            "url": "https://drive.google.com/file/d/1IDB5urWXncc20g0mhZFFY0uKO9mh0Imw/view?usp=drive_link",
            "linkLabel": "Xem trên Google Drive",
            "introductionUrl": "https://www.facebook.com/share/v/14ysxWn6E5S/",
            "contributions": [
              "Trực tiếp đảm nhiệm toàn bộ phần lập trình game bằng Godot.",
              "Xây dựng logic gameplay, các hệ thống chức năng và cơ chế tương tác cốt lõi.",
              "Tích hợp và hoàn thiện các tính năng để đảm bảo trải nghiệm chơi nhất quán."
            ],
            "status": "Bản game tham gia Hackathon MIRO Game Contest."
          }
        ], "shikaku-cats", "cookingdom"),
        o = s["a"].extend({
          name: "GameProjects",
          props: {
            projectId: String,
            gameDesignerMode: Boolean,
            gddOnly: Boolean,
            caseStudyOnly: Boolean,
          },
          data: function () {
            return { projects: c };
          },
          computed: {
            selectedProject: function () {
              return this.projects.find(project => project.id === this.projectId);
            },
          },
        }),
        r = o,
        l = (i("5b8f"), i("2877")),
        g = Object(l["a"])(r, a, e, !1, null, "3ea5dd0f", null);
      n["default"] = g.exports;
    },
    "5b8f": function (t, n, i) {
      "use strict";
      i("bc3b");
    },
    6137: function (t, n, i) {
      "use strict";
      i("6632");
    },
    6632: function (t, n, i) {},
    "8cdb": function (t, n, i) {
      "use strict";
      i.r(n);
      var a = function () {
          var t = this,
            n = t._self._c;
          return n("div", { staticClass: "http-404" }, [t.$text("404 🙈")]);
        },
        e = [],
        s = (i("6137"), i("2877")),
        c = {},
        h = Object(s["a"])(c, a, e, !1, null, "18e57ce2", null);
      n["default"] = h.exports;
    },
    b8fa: function (t, n, i) {
      "use strict";
      i.r(n);
      var a = function () {
          var t = this,
            n = t._self._c;
          if (window.__gameDesignerPortfolio) return renderDesignerContact(t, n);
          return t.$static(0);
        },
        renderDesignerContact = function (t, n) {
          return n("div", [
            n("h1", [t.$text("Liên hệ")]),
            n("div", { staticStyle: { "margin-bottom": "40px" } }, [
              t.$text("Bạn có thể liên hệ với tôi để trao đổi về cơ hội Game Designer Intern, Level Design, hợp tác phát triển game hoặc playtesting."),
            ]),
            n("ul", [
              n("li", [n("i", { staticClass: "fa fa-phone fa-lg fa-fw" }), n("a", { attrs: { href: "tel:+84394270156" } }, [t.$text("0394 270 156")])]),
              n("li", [n("i", { staticClass: "fa fa-envelope-o fa-lg fa-fw" }), n("a", { attrs: { href: "mailto:hoangls1008@gmail.com" } }, [t.$text("hoangls1008@gmail.com")])]),
              n("li", [n("i", { staticClass: "fa fa-github fa-lg fa-fw" }), n("a", { attrs: { href: "https://github.com/DuongMinhHoang1008", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("github.com/DuongMinhHoang1008")])]),
              n("li", [n("i", { staticClass: "fa fa-gamepad fa-lg fa-fw" }), n("a", { attrs: { href: "https://dmhoang.itch.io", target: "_blank", rel: "noopener noreferrer" } }, [t.$text("dmhoang.itch.io")])]),
              n("li", [n("i", { staticClass: "fa fa-map-marker fa-lg fa-fw" }), t.$text("Hà Nội")]),
            ]),
          ]);
        },
        e = [
          function () {
            var t = this,
              n = t._self._c;
            return n("div", [
              n("h1", [t.$text("Liên hệ")]),
              n("div", { staticStyle: { "margin-bottom": "40px" } }, [
                t.$text(
                  "Bạn có thể liên hệ với tôi để trao đổi về cơ hội công việc, hợp tác phát triển game hoặc chia sẻ về Unity và lập trình gameplay."
                ),
              ]),
              n("ul", [
                n("li", [
                  n("i", { staticClass: "fa fa-phone fa-lg fa-fw" }),
                  n("a", { attrs: { href: "tel:+84394270156" } }, [
                    t.$text("0394 270 156"),
                  ]),
                ]),
                n("li", [
                  n("i", { staticClass: "fa fa-envelope-o fa-lg fa-fw" }),
                  n("a", { attrs: { href: "mailto:hoangls1008@gmail.com" } }, [
                    t.$text("hoangls1008@gmail.com"),
                  ]),
                ]),
                n("li", [
                  n("i", { staticClass: "fa fa-github fa-lg fa-fw" }),
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/DuongMinhHoang1008",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t.$text("github.com/DuongMinhHoang1008")]
                  ),
                ]),
                n("li", [
                  n("i", { staticClass: "fa fa-gamepad fa-lg fa-fw" }),
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://dmhoang.itch.io",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t.$text("dmhoang.itch.io")]
                  ),
                ]),
                n("li", [
                  n("i", { staticClass: "fa fa-map-marker fa-lg fa-fw" }),
                  t.$text("Hai Bà Trưng, Hà Nội"),
                ]),
              ]),
            ]);
          },
        ],
        s = (i("e14b"), i("2877")),
        c = {},
        h = Object(s["a"])(c, a, e, !1, null, "3753dbaf", null);
      n["default"] = h.exports;
    },
    bc05: function (t, n, i) {
      "use strict";
      i("0c45");
    },
    bc3b: function (t, n, i) {},
    be17: function (t, n, i) {},
    cbea: function (t, n, i) {},
    e14b: function (t, n, i) {
      "use strict";
      i("cbea");
    },
    f820: function (t, n, i) {
      "use strict";
      i.r(n);
      var a = function () {
          var t = this,
            n = t._self._c;
          if (window.__gameDesignerPortfolio) return renderDesignerAbout(t, n);
          return t.$static(0);
        },
        renderDesignerAbout = function (t, n) {
          return n("div", { staticClass: "about" }, [
            n("div", { staticClass: "intro" }, [
              n("div", { staticClass: "paragraph" }, [
                n("p", [t.$text("Tôi là Dương Minh Hoàng, Game Designer Intern tại Hà Nội với 1,5 năm kinh nghiệm phát triển game mobile bằng Unity, tập trung vào Puzzle, Casual và Action.")]),
                n("p", [t.$text("Tôi trực tiếp thiết kế và cân bằng level, xây dựng Difficulty Curve dựa trên độ phức tạp của puzzle, kết hợp Internal Playtesting với phân tích Retention, Retry Rate, Drop-off và phản hồi người chơi.")]),
                n("p", [t.$text("Tại RiseOn Game Studio, tôi đã triển khai hơn 10 level Cookingdom, thiết kế và cân bằng level cho Shikaku Cats, đồng thời xây dựng prototype, gameplay và công cụ tạo level cho Shuriken Rush.")]),
                n("p", [t.$text("Tôi có thể xây dựng prototype, triển khai và kiểm thử gameplay, level bằng Unity. Đồng thời phối hợp với Artist và Tester để đưa level đến trạng thái hoàn thiện.")]),
              ]),
              n("div", { staticClass: "photo" }, [
                n("img", { attrs: { src: "img/hurray.gif", alt: "Dương Minh Hoàng", width: 224, height: 224 } }),
              ]),
            ]),
          ]);
        },
        e = [
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "about" }, [
              n("div", { staticClass: "intro" }, [
                n("div", { staticClass: "paragraph" }, [
                  n("p", [t.$text("Tôi là Dương Minh Hoàng, lập trình viên game Unity tại Hà Nội với 1,5 năm kinh nghiệm phát triển game Puzzle, Casual và Action, gồm game 2D, 3D và multiplayer.")]),
                  n("p", [t.$text("Tôi xây dựng gameplay, hệ thống game và level, bảo trì mã nguồn, dùng Unity Profiler để phân tích và tối ưu hiệu năng, tích hợp SDK, build và phát hành game Android.")]),
                  n("p", [t.$text("Tại RiseOn Game Studio (05/2025 - 11/2026), tôi hoàn thiện gameplay Shikaku Cats từ bản thử nghiệm, tự triển khai hơn 10 level Cookingdom và độc lập phát triển Shuriken Rush. Với Shuriken Rush, tôi dùng Unity Profiler để phân tích hoạt ảnh và hiển thị, rồi áp dụng VAT Baking và Indirect Rendering để tăng FPS từ khoảng 20 lên 57 với 1.000 kẻ địch trong Unity Editor.")]),
                  n("p", [t.$text("Trong các dự án cá nhân, tôi phát triển multiplayer cho Dog Simulator bằng Photon Fusion 2 và nghiên cứu cải tiến Dead Reckoning cho game đua xe trong khóa luận MissileRally.")]),
                ]),
                n("div", { staticClass: "photo" }, [
                  n("img", {
                    attrs: {
                      src: "img/hurray.gif",
                      alt: "Dương Minh Hoàng",
                      width: 224,
                      height: 224,
                    },
                  }),
                ]),
              ]),
            ]);
          },
        ],
        s = (i("bc05"), i("2877")),
        c = {},
        h = Object(s["a"])(c, a, e, !1, null, "506a654a", null);
      n["default"] = h.exports;
    },
  },
]);
//# sourceMappingURL=about.d5804f2d.js.map
