import React from "react";

type Props = {};

export default function PostSidebar({}: Props) {
  return (
    <aside
      className="crayons-layout__sidebar-left"
      aria-label="Article actions"
    >
      <div className="crayons-article-actions print-hidden">
        <div className="crayons-article-actions__inner">
          <div className="reaction-drawer__outer hoverdown" style="">
            <button
              id="reaction-drawer-trigger"
              aria-label="reaction-drawer-trigger"
              aria-pressed="false"
              className="hoverdown-trigger crayons-reaction pseudo-reaction crayons-tooltip__activator relative"
            >
              <span
                className="crayons-reaction__icon crayons-reaction__icon--borderless crayons-reaction--like crayons-reaction__icon--inactive"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  className="crayons-icon"
                >
                  <g clip-path="url(#clip0_988_3276)">
                    <path
                      d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z"
                      fill="#525252"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_988_3276">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span
                className="crayons-reaction__icon crayons-reaction__icon--borderless crayons-reaction__icon--active"
                style={{ width: "40px", height: "40px" }}
              >
                <img
                  aria_hidden="true"
                  height="24"
                  width="24"
                  src="https://dev.to/assets/heart-plus-active-9ea3b22f2bc311281db911d416166c5f430636e76b15cd5df6b3b841d830eefa.svg"
                />
              </span>
              <span
                className="crayons-reaction__count"
                id="reaction_total_count"
              >
                109
              </span>
              <span className="crayons-tooltip__content">Add reaction</span>
            </button>

            <div className="reaction-drawer" aria-expanded="false">
              <div className="reaction-drawer__container">
                <button
                  id="reaction-butt-like"
                  name="Like"
                  aria-label="Like"
                  aria-pressed="false"
                  className="crayons-reaction crayons-tooltip__activator relative pt-2 pr-2 pb-1 pl-2 activated"
                  data-category="like"
                >
                  <span className="crayons-reaction__icon crayons-reaction__icon--inactive p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                    />
                  </span>
                  <span className="crayons-reaction__icon crayons-reaction__icon--active p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                    />
                  </span>
                  <span
                    className="crayons-reaction__count"
                    id="reaction-number-like"
                  >
                    86
                  </span>

                  <span
                    data-testid="tooltip"
                    className="crayons-tooltip__content"
                  >
                    Like
                  </span>
                </button>

                <button
                  id="reaction-butt-unicorn"
                  name="Unicorn"
                  aria-label="Unicorn"
                  aria-pressed="false"
                  className="crayons-reaction crayons-tooltip__activator relative pt-2 pr-2 pb-1 pl-2 activated"
                  data-category="unicorn"
                >
                  <span className="crayons-reaction__icon crayons-reaction__icon--inactive p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                    />
                  </span>
                  <span className="crayons-reaction__icon crayons-reaction__icon--active p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                    />
                  </span>
                  <span
                    className="crayons-reaction__count"
                    id="reaction-number-unicorn"
                  >
                    8
                  </span>

                  <span
                    data-testid="tooltip"
                    className="crayons-tooltip__content"
                  >
                    Unicorn
                  </span>
                </button>

                <button
                  id="reaction-butt-exploding_head"
                  name="Exploding Head"
                  aria-label="Exploding Head"
                  aria-pressed="false"
                  className="crayons-reaction crayons-tooltip__activator relative pt-2 pr-2 pb-1 pl-2 activated"
                  data-category="exploding_head"
                >
                  <span className="crayons-reaction__icon crayons-reaction__icon--inactive p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                    />
                  </span>
                  <span className="crayons-reaction__icon crayons-reaction__icon--active p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                    />
                  </span>
                  <span
                    className="crayons-reaction__count"
                    id="reaction-number-exploding_head"
                  >
                    6
                  </span>

                  <span
                    data-testid="tooltip"
                    className="crayons-tooltip__content"
                  >
                    Exploding Head
                  </span>
                </button>

                <button
                  id="reaction-butt-raised_hands"
                  name="Raised Hands"
                  aria-label="Raised Hands"
                  aria-pressed="false"
                  className="crayons-reaction crayons-tooltip__activator relative pt-2 pr-2 pb-1 pl-2 activated"
                  data-category="raised_hands"
                >
                  <span className="crayons-reaction__icon crayons-reaction__icon--inactive p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                    />
                  </span>
                  <span className="crayons-reaction__icon crayons-reaction__icon--active p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                    />
                  </span>
                  <span
                    className="crayons-reaction__count"
                    id="reaction-number-raised_hands"
                  >
                    3
                  </span>

                  <span
                    data-testid="tooltip"
                    className="crayons-tooltip__content"
                  >
                    Raised Hands
                  </span>
                </button>

                <button
                  id="reaction-butt-fire"
                  name="Fire"
                  aria-label="Fire"
                  aria-pressed="false"
                  className="crayons-reaction crayons-tooltip__activator relative pt-2 pr-2 pb-1 pl-2 activated"
                  data-category="fire"
                >
                  <span className="crayons-reaction__icon crayons-reaction__icon--inactive p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                    />
                  </span>
                  <span className="crayons-reaction__icon crayons-reaction__icon--active p-0">
                    <img
                      aria_hidden="true"
                      height="32"
                      width="32"
                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                    />
                  </span>
                  <span
                    className="crayons-reaction__count"
                    id="reaction-number-fire"
                  >
                    6
                  </span>

                  <span
                    data-testid="tooltip"
                    className="crayons-tooltip__content"
                  >
                    Fire
                  </span>
                </button>
              </div>
            </div>
          </div>

          <button
            id="reaction-butt-comment"
            aria-label="Jump to Comments"
            aria-pressed="false"
            className="crayons-reaction crayons-reaction--comment crayons-tooltip__activator relative"
            data-category="comment"
          >
            <span className="crayons-reaction__icon crayons-reaction__icon--borderless crayons-reaction__icon--inactive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                className="crayons-icon"
              >
                <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
              </svg>
            </span>
            <span
              className="crayons-reaction__count"
              id="reaction-number-comment"
              data-count="18"
            >
              18
            </span>

            <span data-testid="tooltip" className="crayons-tooltip__content">
              Jump to Comments
            </span>
          </button>

          <button
            id="reaction-butt-readinglist"
            aria-label="Add to reading list"
            aria-pressed="false"
            className="crayons-reaction crayons-reaction--readinglist crayons-tooltip__activator relative activated"
            data-category="readinglist"
          >
            <span className="crayons-reaction__icon crayons-reaction__icon--borderless crayons-reaction__icon--inactive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                className="crayons-icon"
              >
                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
              </svg>
            </span>
            <span className="crayons-reaction__icon crayons-reaction__icon--borderless crayons-reaction__icon--active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                className="crayons-icon"
              >
                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"></path>
              </svg>
            </span>
            <span
              className="crayons-reaction__count"
              id="reaction-number-readinglist"
            >
              128
            </span>

            <span data-testid="tooltip" className="crayons-tooltip__content">
              Save
            </span>
          </button>

          <div
            id="mod-actions-menu-btn-area"
            className="print-hidden trusted-visible-block align-center"
          >
            <button className="crayons-btn crayons-btn--ghost crayons-btn--icon-rounded mod-actions-menu-btn">
              <svg
                width="24"
                height="24"
                className="crayons-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="d6cd43ffbad3fe639e2e95c901ee88c8"
              >
                <title id="d6cd43ffbad3fe639e2e95c901ee88c8">Moderation</title>
                <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976zM5 4.604v9.185a4 4 0 001.781 3.328L12 20.597l5.219-3.48A4 4 0 0019 13.79V4.604L12 3.05 5 4.604zM13 10h3l-5 7v-5H8l5-7v5z"></path>
              </svg>
            </button>
          </div>
          <div className="align-center m:relative">
            <button
              id="article-show-more-button"
              aria-controls="article-show-more-dropdown"
              aria-expanded="false"
              aria-haspopup="true"
              className="dropbtn crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon-rounded"
              aria-label="Share post options"
              data-initialized="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                role="img"
                aria-labelledby="agnsvhgtzleoequtw6sqmux7qfzgj992"
                aria-hidden="true"
                className="crayons-icon dropdown-icon"
              >
                <title id="agnsvhgtzleoequtw6sqmux7qfzgj992">More...</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
            </button>

            <div
              id="article-show-more-dropdown"
              className="crayons-dropdown side-bar left-2 right-2 m:right-auto m:left-100 s:left-auto mb-1 m:mb-0 top-unset bottom-100 m:top-0 m:bottom-unset"
              style={{}}
            >
              <div>
                <button
                  id="copy-post-url-button"
                  className="flex justify-between crayons-link crayons-link--block w-100 bg-transparent border-0"
                  data-posturl="https://dev.to/ratiu5/implementing-signals-from-scratch-3e4c"
                >
                  <span className="fw-bold">Copy link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="article-copy-icon"
                    role="img"
                    aria-labelledby="asilunqrlhisjkjd1sh982r9hondb9nt"
                    aria-hidden="true"
                    className="crayons-icon mx-2 shrink-0"
                  >
                    <title id="asilunqrlhisjkjd1sh982r9hondb9nt">
                      Copy link
                    </title>
                    <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                  </svg>
                </button>
                <div
                  id="article-copy-link-announcer"
                  aria-live="polite"
                  className="crayons-notice crayons-notice--success my-2 p-1"
                  hidden
                >
                  Copied to Clipboard
                </div>
              </div>

              <div className="Desktop-only">
                <a
                  target="_blank"
                  className="crayons-link crayons-link--block"
                  rel="noopener"
                  href="https://twitter.com/intent/tweet?text=%22Implementing%20Signals%20from%20Scratch%22%20by%20RATIU5%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fratiu5%2Fimplementing-signals-from-scratch-3e4c"
                >
                  Share to Twitter
                </a>
                <a
                  target="_blank"
                  className="crayons-link crayons-link--block"
                  rel="noopener"
                  href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fdev.to%2Fratiu5%2Fimplementing-signals-from-scratch-3e4c&amp;title=Implementing%20Signals%20from%20Scratch&amp;summary=What%20Are%20Signals%3F%20%20%20Recently%2C%20the%20JavaScript%20community%20has%20been%20buzzing%20about%20signals.%20Their...&amp;source=DEV%20Community"
                >
                  Share to LinkedIn
                </a>
                <a
                  target="_blank"
                  className="crayons-link crayons-link--block"
                  rel="noopener"
                  href="https://www.reddit.com/submit?url=https%3A%2F%2Fdev.to%2Fratiu5%2Fimplementing-signals-from-scratch-3e4c&amp;title=Implementing%20Signals%20from%20Scratch"
                >
                  Share to Reddit
                </a>
                <a
                  target="_blank"
                  className="crayons-link crayons-link--block"
                  rel="noopener"
                  href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fdev.to%2Fratiu5%2Fimplementing-signals-from-scratch-3e4c&amp;t=Implementing%20Signals%20from%20Scratch"
                >
                  Share to Hacker News
                </a>
                <a
                  target="_blank"
                  className="crayons-link crayons-link--block"
                  rel="noopener"
                  href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fratiu5%2Fimplementing-signals-from-scratch-3e4c"
                >
                  Share to Facebook
                </a>
                <a
                  target="_blank"
                  className="crayons-link crayons-link--block"
                  rel="noopener"
                  href="https://toot.kytta.dev/?text=https%3A%2F%2Fdev.to%2Fratiu5%2Fimplementing-signals-from-scratch-3e4c"
                >
                  Share to Mastodon
                </a>
              </div>

              <web-share-wrapper
                shareurl="https://dev.to/ratiu5/implementing-signals-from-scratch-3e4c"
                sharetitle="Implementing Signals from Scratch"
                sharetext="What Are Signals?   Recently, the JavaScript community has been buzzing about signals. Their..."
                template="web-share-button"
              >
                <a
                  href="#"
                  className="dropdown-link-row crayons-link crayons-link--block"
                >
                  Share Post via...
                </a>
              </web-share-wrapper>
              <template id="web-share-button">
                <a
                  href="#"
                  className="dropdown-link-row crayons-link crayons-link--block"
                >
                  Share Post via...
                </a>
              </template>

              <a
                href="/report-abuse"
                className="crayons-link crayons-link--block"
              >
                Report Abuse
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
