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
          var t = this;
          t._self._c;
          return t.$static(0);
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
            n("h1", [t.$text("Dự án game")]),
            n("p", { staticClass: "page-intro" }, [
              t.$text(
                "Những dự án mình đã tham gia phát triển, từ game di động, Game Jam và cuộc thi làm game đến nghiên cứu kỹ thuật trong khóa luận tốt nghiệp."
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
        renderProjectPage = function (t, n, project) {
          var gallerySourceUrl = project && (
            project.gallerySourceUrl === undefined ? project.url : project.gallerySourceUrl
          );
          return n("div", { staticClass: "game-projects" }, [
            n("router-link", { staticClass: "project-back-link", attrs: { to: "/game-projects" } }, [
              t.$text("← Về danh sách game"),
            ]),
            project
              ? n("article", { staticClass: "project-detail" }, [
                  n("header", { staticClass: "project-detail-header", class: project.id }, [
                    n("h1", [t.$text(project.name)]),
                  ]),
                  project.youtubeVideoId
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
                  n("div", { staticClass: "project-detail-content" }, [
                    n("p", { staticClass: "category" }, [
                      t.$text(t._s(project.category)),
                    ]),
                    n("p", { staticClass: "highlight" }, [
                      t.$text(t._s(project.highlight)),
                    ]),
                    project.role ? n("p", { staticClass: "project-role" }, [t.$text(project.role)]) : t._e(),
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
                    n(
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
                    ),
                    project.challenges
                      ? n("section", { staticClass: "technical-challenges", attrs: { "aria-labelledby": "challenges-title" } }, [
                          n("h2", { attrs: { id: "challenges-title" } }, [t.$text("Thách thức kỹ thuật & giải pháp")]),
                          t._l(project.challenges, function (item, index) {
                            return n("article", { key: item.title, staticClass: "technical-challenge" }, [
                              n("h3", [t.$text(project.challenges.length > 1 ? (index + 1) + ". " : ""), t.$text(item.title)]),
                              item.challenge ? n("p", [n("strong", [t.$text("Thách thức:")]), t.$text(" " + item.challenge)]) : t._e(),
                              item.solution ? n("p", [n("strong", [t.$text("Giải pháp:")]), t.$text(" " + item.solution)]) : t._e(),
                              item.description ? n("p", [t.$text(item.description)]) : t._e(),
                            ]);
                          }),
                        ], 2)
                      : t._e(),
                    project.results
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
        c = [
          {
            "id": "shikaku-cats",
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
              "Tích hợp và cấu hình Firebase Remote Config, AppLovin, AppsFlyer và IAP; triển khai bản Android và sửa lỗi trong giai đoạn public testing với gần 3.000 người chơi."
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
                "solution": "Tách các chức năng từ DataManager thành các Service. DataManager tập trung load/save và cung cấp hoặc điều phối các Service; mỗi Service đảm nhận chức năng riêng."
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
              }
            ],
            "results": [
              "Góp phần rút ngắn thời gian triển khai mỗi level từ khoảng 2 tuần xuống 1 tuần."
            ]
          },
          {
            "id": "shuriken-rush",
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
            "summary": "Game hành động 3D lấy cảm hứng từ Slow Mo Strike: Knives in Time. Người chơi di chuyển tay trên màn hình để tạo vũ khí bay vào kẻ địch; tiêu diệt hết địch để qua màn và mở khóa vũ khí mới. Trò chơi tập trung vào nhịp hành động liên tục, số lượng kẻ địch đông và cảm giác kết liễu thỏa mãn.",
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
              "Xây dựng tiến trình mở khóa vũ khí và thanh Combo; khi kích hoạt Frenzy, tăng nhịp độ game và số lượng vũ khí được ném ra.",
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
              "Tích hợp Client-side Prediction và Server Reconciliation cho xe người chơi; Lag Compensation để kiểm tra tương tác trong quá khứ.",
              "Giao diện chuyển đổi thuật toán, tùy chỉnh Ping/Jitter và tham số; theo dõi Accuracy, Jerk và số lần bắn trúng."
            ],
            "platform": "PC (Windows)",
            "url": "https://github.com/DuongMinhHoang1008/Improve_DeadReckoning_Unity",
            "linkLabel": "Xem mã nguồn & hướng dẫn chạy",
            "contributions": [
              "Mở rộng game đua xe multiplayer có sẵn bằng Unity/Netcode for GameObjects thành môi trường thực nghiệm; cải tiến Dead Reckoning bằng dự đoán bậc hai, Time Stamping, SmoothDamp và Adaptive Threshold.",
              "Xây dựng bot chạy theo waypoint, tự điều chỉnh tốc độ khi vào cua và tự động bắn laser để duy trì tính nhất quán của các kịch bản thử nghiệm.",
              "Thiết kế thực nghiệm với nhiều mức ping/jitter; đo độ chính xác dự đoán, độ giật chuyển động và chi phí CPU/RAM.",
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
                "challenge": "Dead Reckoning sử dụng mô hình dự đoán bậc một có thể kém chính xác khi xe tăng tốc, giảm tốc hoặc đổi hướng; sai lệch thời gian cũng ảnh hưởng đến dự đoán.",
                "solution": "Bổ sung thành phần gia tốc trong mô hình dự đoán bậc hai và sử dụng Time Stamping để tính khoảng thời gian dự đoán chính xác hơn."
              },
              {
                "title": "Giảm độ giật chuyển động",
                "challenge": "Hiệu chỉnh trạng thái trực tiếp có thể gây chuyển động giật, đặc biệt khi độ trễ mạng cao.",
                "solution": "Kết hợp SmoothDamp với Adaptive Threshold để làm mượt chuyển động và điều chỉnh thời điểm hiệu chỉnh theo mức sai lệch."
              },
              {
                "title": "Kiểm chứng các cơ chế hỗ trợ",
                "description": "Sử dụng Client-side Prediction và Server Reconciliation cho đối tượng người chơi; thử nghiệm Lag Compensation cho các tương tác phụ thuộc thời điểm như bắn laser."
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
        ],
        o = s["a"].extend({
          name: "GameProjects",
          props: { projectId: String },
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
          var t = this;
          t._self._c;
          return t.$static(0);
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
          var t = this;
          return t.$static(0);
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
