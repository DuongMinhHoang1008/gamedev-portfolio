import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("cover", "Cover", "img/projects/cover-icon.png", `
    <div class="paragraph">
                <strong>Cover</strong> is the best app to read and manage your comic books on Windows.<br/>
                More than <strong>1.8 million downloads</strong> since its release in 2014, Cover has been featured several times by Microsoft in the US, France, CA, etc...
                More information on <a target="_blank" href="http://www.frenchfrysoftware.com/cover/" target="_blank">French Fry</a>.<br/>
                I designed and developed the whole app, with UI/UX made by <a href="https://dribbble.com/alexisbarlat" target="blank">Alexis</a>.
            </div>
            <div class="paragraph center">
              <a href="https://www.microsoft.com/en-us/p/cover-comic-reader/9wzdncrfj9w7" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>
          </div>

            <div class="paragraph">
                Main features :
                <ul>
                  <li>All of your file formats are supported: CBZ/ZIP, CBR/RAR, 7Z/CB7, CBT, PDF, EPUB (images only)</li>
                  <li>Crystal-clear library management: Shelves, read/unread status, page count, current page,...</li>
                  <li>Store your comic books wherever you want: Local folder, network, OneDrive, Google Drive, Dropbox.</li>
                  <li>Customize your reading experience: single/dual page, fit width/height/page, background color, cropping, night mode,...</li>
                  <li>Developed in C#/XAML for WinRT then UWP</li>
                </ul>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/cover-ss1.jpg" alt="Cover Screenshot" />
                <img class="pc-screenshot" src="img/projects/cover-ss2.jpg" alt="Cover Screenshot" />
                <img class="pc-screenshot" src="img/projects/cover-ss3.jpg" alt="Cover Screenshot" />
            </div>
    `, "#c10606", false, true),
    new ProjectData("steed", "Steed", "img/projects/steed-icon.png", `
    <div class="paragraph">
                <strong>Steed</strong> is a Windows app that let's you connect and transfer files and folders to and from Azure, FTP, SFTP and S3, all in one tidy and easy to use interface.
            </div>

            <div class="paragraph">
                Main features :
                <ul>
                  <li>Azure, FTP, SFTP, Amazon S3, all in one. No wasting your time configuring numerous clients.</li>
                  <li>The navigation and user interface are designed to remind you of your usual Windows habits.</li>
                  <li>Jumplist, Tabbed thumbnails, Taskbar progress, Notifications, Steed uses them all. It runs on Windows 7 through Windows 10.</li>
                  <li>Your bookmarks are synchronized automatically via your Dropbox or OneDrive account</li>
                  <li>Developed in C#/WPF</li>
                </ul>
            </div>

            <div class="paragraph">
              <div class="notice yellow">
                The app is not available to download or purchase anymore.
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/steed-ss1.png" alt="Steed Screenshot" />
                <img class="pc-screenshot" src="img/projects/steed-ss2.png" alt="Steed Screenshot" />
                <img class="pc-screenshot" src="img/projects/steed-ss3.png" alt="Steed Screenshot" />
            </div>`, "#1ca1e2"),
    new ProjectData("portfolio", "Gamedev Portfolio", "img/projects/portfolio-icon.png", `
    <div class="paragraph">
                <strong>This portfolio</strong> you're currently browsing, is available for anyone to duplicate and customize.
                <br/>It's been designed as a fast, static, responsive web page. Putting your own content inside the pages is straightforward.
            </div>

            <div class="paragraph">
                Main features :
                <ul>
                  <li>Lightweight, responsive, static HTML single-page application</li>
                  <li>Easy to customize with your own descriptions and projects</li>
                  <li>Easy to adapt to your own color tastes</li>
                  <li>Developed in VueJS, TypeScript and LESS</li>
                </ul>
            </div>

            <div class="paragraph">
              <div class="notice">
              Source code available on <a href="https://github.com/schouffy/gamedev-portfolio" target="_blank">GitHub</a>.
              </div>
            </div>`, "#538b1f"),
    new ProjectData("motivationquotes", "Motivation Quotes", "img/projects/motivationquotes-icon.png", `
    <div class="paragraph">
                <strong>Motivation Quotes</strong> is a small Android app that you can start to see some inspirational quotes on peaceful backgrounds. That's it, no ads, no cluttered interface.<br/>
                The objective for this app was to learn React Native, as I never wanted to learn a mobile platform-specific technology.
            </div>

            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=com.schouffy.motivationquotes" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
          </div>

            <div class="paragraph">
                Main features :
                <ul>
                  <li>Public domain quotes from various sources</li>
                  <li>Public domain images from various sources</li>
                  <li>Clean, peaceful, non-distracting user interface</li>
                  <li>Developed in React Native using Expo</li>
                </ul>
            </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/schouffy/feel-good-quotes" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="img/projects/motivationquotes-ss1.png" alt="Motivation Quotes Screenshot" />
                <img class="phone-screenshot" src="img/projects/motivationquotes-ss2.png" alt="Motivation Quotes Screenshot" />
            </div>`),
    new ProjectData("drysafe", "DrySafe", "img/projects/drysafe-icon.jpg", `
    <div class="paragraph">
                <strong>DrySafe</strong> is a tiny tool (Azure function) that can be used by people (techies, because they need to host the Azure function on their account and probably tweak it a bit) that commute to work on their bike like me.<br/>
                Around the time they usually leave, the function will check whether rain is planned within the hour and if yes, will send a notification with when you should leave to remain dry.<br/>
                It's simple but really useful (and most of the time silent), I've been using it for years.
            </div>

            <div class="paragraph">
                Main features :
                <ul>
                  <li>Queries weather rain forecast API</li>
                  <li>Sends a notification (mail as backup) to the phone using PushBullet</li>
                  <li>Developed as a Azure Function with C# and .Net Core</li>
                </ul>
            </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/schouffy/drysafe" target="_blank">GitHub</a>.
              </div>
            </div>`),
];
