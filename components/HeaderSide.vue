<template>
  <div ref="header" class="header" :class="{ active: showMenu }">
    <div class="main-container">
      <div class="header__nav">
        <div class="header__nav__logo">
          <nuxt-link :to="localePath('/')">
            <svg width="151" height="56" viewBox="0 0 151 56">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.27867 1.41336V2.82688L11.6279 2.79006L21.9772 2.7534L22.0234 1.3767L22.0696 0H11.6741H1.27867V1.41336ZM43.7413 0.104943C43.6826 0.162528 43.6347 6.8887 43.6347 15.052V29.8941H53.7841H63.9336V28.5736C63.9336 27.492 63.8859 27.2349 63.6702 27.1534C63.5252 27.0988 59.8031 27.0576 55.3988 27.0622C50.9944 27.0666 47.2648 27.0685 47.1111 27.0661C46.8468 27.0622 46.8313 26.3112 46.8313 13.531V0H45.3396C44.519 0 43.7998 0.0472 43.7413 0.104943ZM82.6341 1.08846C82.6341 1.68713 82.6778 2.28894 82.7312 2.42583C82.8176 2.64767 83.6071 2.67473 89.9932 2.67473C95.7829 2.67473 97.3793 2.72052 98.3102 2.91326C100.604 3.38826 101.858 4.20846 102.62 5.73149C103.069 6.6302 103.134 6.9178 103.128 7.98298C103.117 10.1089 102.317 11.4822 100.551 12.4087C98.8643 13.2937 98.1476 13.3634 90.3941 13.3955C86.5442 13.4116 83.2231 13.4569 83.0141 13.4962C82.6524 13.5642 82.6341 13.627 82.6341 14.8081V16.0484L90.426 16.0539C98.7166 16.0597 99.6426 16.1253 101.57 16.8428C102.224 17.0865 102.781 17.4517 103.343 18.0051C104.368 19.0141 104.751 20.0323 104.736 21.7126C104.714 24.3061 103.542 25.8365 100.899 26.7233L99.6565 27.1402L91.2705 27.1865C84.9361 27.2214 82.8544 27.2791 82.7617 27.4226C82.6942 27.5273 82.638 28.131 82.6365 28.7644L82.6341 29.9161L91.1453 29.8515C98.5092 29.7954 99.8181 29.7498 100.855 29.5129C104.14 28.7627 106.183 27.4152 107.227 25.3113C108.445 22.8569 108.125 19.3637 106.488 17.2284C105.738 16.2504 104.15 15.1829 102.913 14.8251C102.397 14.6758 101.974 14.5181 101.974 14.4747C101.974 14.4313 102.306 14.2225 102.711 14.0107C105.331 12.6428 106.733 9.72518 106.287 6.56883C105.876 3.65841 103.833 1.59194 100.401 0.616764C98.6415 0.116746 96.5817 0 89.5132 0H82.6341V1.08846ZM128.798 1.411L128.746 2.822L138.93 2.82436C144.531 2.82562 149.224 2.78487 149.359 2.73389C149.553 2.66058 149.605 2.36305 149.605 1.32053V0H139.227H128.849L128.798 1.411ZM1.27867 14.711V16.0484H10.7089H20.1391V14.711V13.3737H10.7089H1.27867V14.711ZM128.798 14.7114L128.746 16.0492L138.216 16.0487L147.687 16.0484V14.711V13.3737H138.268H128.85L128.798 14.7114ZM1.65188 27.1707C1.17302 27.2634 1.08847 27.5817 1.21266 28.8228L1.31991 29.8941H12.0144H22.7089L22.6627 28.5174L22.6165 27.1407L12.3072 27.1223C6.6371 27.1121 1.84225 27.1339 1.65188 27.1707ZM128.826 28.4843V29.8941H139.535H150.244V28.5751C150.244 27.3424 150.221 27.25 149.887 27.1641C149.691 27.1136 144.872 27.0729 139.178 27.0735L128.826 27.0748V28.4843ZM63.0177 41.2309C60.786 41.6645 59.3842 43.0074 59.1871 44.9006C59.069 46.0367 59.3634 46.9506 60.0728 47.6488C60.8691 48.4327 61.6681 48.7758 64.3332 49.4785C67.449 50.3001 68.0893 50.7337 68.0893 52.023C68.0893 52.5065 67.9769 52.8153 67.6705 53.1737C67.0189 53.9362 66.3031 54.1692 64.5729 54.1821C62.8087 54.1955 61.7351 53.9253 60.3987 53.1319L59.5009 52.599L59.1624 53.3877C58.9372 53.9126 58.8756 54.2378 58.9784 54.3597C59.3259 54.7716 60.7762 55.398 62.1127 55.7131C64.897 56.3696 67.6149 55.8784 69.0702 54.4554C69.8788 53.6648 70.1647 52.9511 70.1661 51.7196C70.1674 50.7023 69.8703 50.0772 69.0198 49.3079C68.264 48.6245 67.1167 48.1759 64.427 47.5129C62.1193 46.944 61.2158 46.2857 61.217 45.1739C61.2178 44.3388 61.7371 43.6175 62.6193 43.2259C64.0576 42.5876 67.0762 42.8928 68.5173 43.8224C68.8683 44.0486 68.8926 44.0346 69.1341 43.4662C69.2723 43.1408 69.3996 42.7391 69.4167 42.5737C69.5163 41.6146 65.4427 40.7597 63.0177 41.2309ZM0 48.5386V55.8548H1.03684H2.07353L2.11572 50.6606L2.15776 45.4664L4.79502 49.8012C7.36723 54.029 7.44411 54.1349 7.90986 54.0907C8.35276 54.0487 8.57797 53.7299 11.0266 49.681L13.6658 45.3166L13.7078 50.5857L13.75 55.8548H14.7867H15.8236V48.5386V41.2224H14.8817C14.1586 41.2224 13.9166 41.282 13.8399 41.4788C13.7849 41.6198 12.4328 43.933 10.8353 46.6194C8.75011 50.1258 7.8918 51.4403 7.79254 51.2797C7.71646 51.1567 6.31951 48.8435 4.68809 46.1392L1.72205 41.2224H0.861024H0V48.5386ZM23.0161 48.5386V55.8548H28.4584H33.9008L33.8528 54.9501L33.8049 54.0454L29.5293 54.0035L25.2538 53.9615V51.6041V49.2466H28.9299H32.6061V48.3812V47.5159H28.9299H25.2538V45.3132V43.1104H29.4094H33.5651V42.1664V41.2224H28.2906H23.0161V48.5386ZM40.1183 48.5386V55.8548H41.1552H42.192L42.234 50.4266L42.2761 44.9985L46.6757 50.3873L51.0753 55.7761L51.9901 55.8233L52.905 55.8705V48.5464V41.2224H51.8682H50.8313L50.7893 46.6757L50.7473 52.1288L46.2957 46.6757L41.8444 41.2224H40.9813H40.1183V48.5386ZM74.6424 41.3313C74.6424 41.3991 75.7388 44.6947 77.0786 48.6547L79.5148 55.8548H80.6749C81.313 55.8548 81.835 55.831 81.835 55.8017C81.835 55.6227 85.7108 44.5831 85.8073 44.4874C85.8725 44.4228 86.8212 46.9539 87.9154 50.1123L89.9047 55.8548H91.0257H92.1468L94.583 48.6547C95.9229 44.6947 97.0192 41.3989 97.0192 41.3309C97.0192 41.263 96.5776 41.2285 96.0378 41.2542L95.0564 41.3011L93.0544 47.1672C91.9533 50.3937 91.0032 52.978 90.9431 52.91C90.8829 52.8422 89.9461 50.1846 88.8613 47.0045L86.8889 41.2224H85.9181H84.9473L82.876 47.1136C81.7367 50.3538 80.7794 52.98 80.7486 52.9498C80.7179 52.9195 79.8118 50.2861 78.7352 47.0978L76.7778 41.3011L75.7101 41.2545C75.1229 41.229 74.6424 41.2635 74.6424 41.3313ZM102.773 48.5386V55.8548H108.216H113.658L113.61 54.9501L113.562 54.0454L109.202 54.0035L104.843 53.9617L104.887 51.6435L104.931 49.3253L108.647 49.2831L112.363 49.2408V48.3812V47.5217L108.647 47.4794L104.931 47.4372L104.887 45.2765L104.842 43.1156L109.042 43.0738L113.242 43.0318L113.29 42.1271L113.338 41.2224H108.056H102.773V48.5386ZM120.994 48.3965C119.192 52.337 117.694 55.6272 117.664 55.708C117.635 55.7898 118.095 55.8535 118.703 55.8519L119.796 55.8491L120.581 54.0399L121.366 52.2306L125.354 52.2727L129.342 52.3147L130.143 54.0847L130.944 55.8548H132.034H133.124L132.74 55.0007C132.136 53.6564 126.975 42.4687 126.656 41.8124L126.37 41.2224L125.32 41.2271L124.271 41.232L120.994 48.3965ZM138.097 48.5243V55.8548L139.175 55.8551L140.254 55.8552L140.206 53.6605L140.158 51.4657L142.507 51.4182L144.856 51.3706L146.464 53.6127L148.071 55.8548H149.158C149.755 55.8548 150.244 55.8162 150.244 55.7692C150.244 55.7221 149.489 54.6278 148.566 53.3374C147.643 52.0469 146.887 50.9601 146.887 50.9225C146.887 50.8849 147.054 50.8127 147.259 50.7624C147.936 50.5951 149.045 49.6143 149.528 48.7555C149.967 47.9748 150.004 47.7873 150.004 46.3358C150.004 44.8669 149.971 44.705 149.508 43.8971C148.926 42.8813 148.056 42.1747 146.773 41.6766C145.921 41.3459 145.546 41.313 141.972 41.2559L138.097 41.1937V48.5243ZM140.174 46.3358V49.5613L142.772 49.5597C145.18 49.5583 145.429 49.5306 146.198 49.1783C147.324 48.6622 147.857 47.8608 147.956 46.5372C148.017 45.7196 147.966 45.4274 147.658 44.8424C147.255 44.0751 146.537 43.5189 145.628 43.2703C145.31 43.1833 143.953 43.1118 142.612 43.1114L140.174 43.1104V46.3358ZM125.089 43.9258C124.949 44.2444 124.229 45.8552 123.489 47.5052L122.143 50.5053H125.342C127.839 50.5053 128.522 50.4622 128.457 50.3086C128.37 50.1022 125.733 44.2046 125.485 43.6611C125.356 43.3765 125.318 43.4017 125.089 43.9258Z"
                fill="currentColor"
              />
            </svg>
          </nuxt-link>
        </div>
        <div class="header__nav__links">
          <nuxt-link
            v-for="(link, index) in navLinks"
            :key="index"
            :to="localePath(link.path)"
            @mouseover="activateSubNav(index)"
            @mouseleave="deactivateSubNav"
          >
            {{ link.title }}
          </nuxt-link>
          <div v-if="activeSubNavIndex !== null" class="sub-nav">
            <ul>
              <li><a href="#">Sub Link 1</a></li>
              <li><a href="#">Sub Link 2</a></li>
              <li><a href="#">Sub Link 3</a></li>
            </ul>
          </div>
        </div>
        <!-- <div class="header__nav__bars">
          <div class="header__nav__bars__burger">
            <i @click.prevent="setShowMenu">
              <svg
                class="d-none"
                :class="{'d-block' : !showMenu}"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.49609 12H18.5012"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.49609 16.0017H18.5012"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.49609 7.99838H18.5012"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                class="d-none close"
                :class="{'d-block' : showMenu}"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <path d="M10.1913 0.757377L1.73242 9.24266M10.1913 9.24261L1.73242 0.757324" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </i>
          </div>
        </div> -->
        <div class="header__nav__btn">
          <div v-if="showSearchInput" class="search-container">
            <svg fill="none" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M13.875 13.875L16.5 16.5M15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              ref="searchInput"
              type="text"
              class="search-input"
              placeholder="Search..."
            >
          </div>
          <ul>
            <li>
              <button @click="toggleSearch">
                <svg fill="none" width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M13.875 13.875L16.5 16.5M15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>SEARCH</span>
              </button>
            </li>
            <li>
              <button @click="showBtnModal">
                <svg fill="none" width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M6.05251 16.5H11.9493C13.3303 16.5 14.5329 15.5572 14.8625 14.2161L16.3374 8.21611C16.8021 6.32556 15.3709 4.5 13.4241 4.5H4.57761C2.63077 4.5 1.19961 6.32558 1.66434 8.21613L3.13923 14.2161C3.4689 15.5572 4.67149 16.5 6.05251 16.5Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.25 7.5H15.75"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.75 1.5L4.5 4.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 1.5L13.5 4.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>{{ counts }}</p>
                <span>CART({{ counts }})</span>
              </button>
            </li>
            <li class="account">
              <client-only>
                <b-dropdown v-if="$auth.user" right>
                  <template #button-content>
                    <i>
                      <svg width="12" height="16" viewBox="0 0 12 16">
                        <path
                          d="M8.5 4.25C8.5 5.63071 7.38071 6.75 6 6.75V7.75C7.933 7.75 9.5 6.183 9.5 4.25H8.5ZM6 6.75C4.61929 6.75 3.5 5.63071 3.5 4.25H2.5C2.5 6.183 4.067 7.75 6 7.75V6.75ZM3.5 4.25C3.5 2.86929 4.61929 1.75 6 1.75V0.75C4.067 0.75 2.5 2.317 2.5 4.25H3.5ZM6 1.75C7.38071 1.75 8.5 2.86929 8.5 4.25H9.5C9.5 2.317 7.933 0.75 6 0.75V1.75ZM10.75 12.125C10.75 12.5585 10.3856 13.0855 9.4887 13.5339C8.6217 13.9674 7.38896 14.25 6 14.25V15.25C7.51054 15.25 8.90279 14.9449 9.93592 14.4284C10.9391 13.9268 11.75 13.1413 11.75 12.125H10.75ZM6 14.25C4.61104 14.25 3.3783 13.9674 2.5113 13.5339C1.61439 13.0855 1.25 12.5585 1.25 12.125H0.25C0.25 13.1413 1.06087 13.9268 2.06408 14.4284C3.0972 14.9449 4.48946 15.25 6 15.25V14.25ZM1.25 12.125C1.25 11.6915 1.61439 11.1645 2.5113 10.7161C3.3783 10.2826 4.61104 10 6 10V9C4.48946 9 3.0972 9.30507 2.06408 9.82163C1.06087 10.3232 0.25 11.1087 0.25 12.125H1.25ZM6 10C7.38896 10 8.6217 10.2826 9.4887 10.7161C10.3856 11.1645 10.75 11.6915 10.75 12.125H11.75C11.75 11.1087 10.9391 10.3232 9.93592 9.82163C8.90279 9.30507 7.51054 9 6 9V10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <span class="h-first-name">
                      {{ $auth.user.firstname }}
                    </span>
                    <i>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>
                  </template>
                  <b-dropdown-text>
                    {{ $auth.user.firstname }} {{ $auth.user.lastname }}
                  </b-dropdown-text>
                  <b-dropdown-divider />
                  <b-dropdown-item-button @click="profilePush()">
                    <i>
                      <svg width="24" height="24" viewBox="0 0 12 16">
                        <path
                          d="M8.5 4.25C8.5 5.63071 7.38071 6.75 6 6.75V7.75C7.933 7.75 9.5 6.183 9.5 4.25H8.5ZM6 6.75C4.61929 6.75 3.5 5.63071 3.5 4.25H2.5C2.5 6.183 4.067 7.75 6 7.75V6.75ZM3.5 4.25C3.5 2.86929 4.61929 1.75 6 1.75V0.75C4.067 0.75 2.5 2.317 2.5 4.25H3.5ZM6 1.75C7.38071 1.75 8.5 2.86929 8.5 4.25H9.5C9.5 2.317 7.933 0.75 6 0.75V1.75ZM10.75 12.125C10.75 12.5585 10.3856 13.0855 9.4887 13.5339C8.6217 13.9674 7.38896 14.25 6 14.25V15.25C7.51054 15.25 8.90279 14.9449 9.93592 14.4284C10.9391 13.9268 11.75 13.1413 11.75 12.125H10.75ZM6 14.25C4.61104 14.25 3.3783 13.9674 2.5113 13.5339C1.61439 13.0855 1.25 12.5585 1.25 12.125H0.25C0.25 13.1413 1.06087 13.9268 2.06408 14.4284C3.0972 14.9449 4.48946 15.25 6 15.25V14.25ZM1.25 12.125C1.25 11.6915 1.61439 11.1645 2.5113 10.7161C3.3783 10.2826 4.61104 10 6 10V9C4.48946 9 3.0972 9.30507 2.06408 9.82163C1.06087 10.3232 0.25 11.1087 0.25 12.125H1.25ZM6 10C7.38896 10 8.6217 10.2826 9.4887 10.7161C10.3856 11.1645 10.75 11.6915 10.75 12.125H11.75C11.75 11.1087 10.9391 10.3232 9.93592 9.82163C8.90279 9.30507 7.51054 9 6 9V10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <span> Profile </span>
                  </b-dropdown-item-button>
                  <b-dropdown-item-button @click="logout()">
                    <i>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.308 2C13.754 2 15.744 3.99 15.744 6.436V7.368C15.744 7.782 15.408 8.118 14.994 8.118C14.58 8.118 14.244 7.782 14.244 7.368V6.436C14.244 4.816 12.927 3.5 11.308 3.5H6.433C4.816 3.5 3.5 4.816 3.5 6.436V17.565C3.5 19.184 4.816 20.5 6.433 20.5H11.319C12.931 20.5 14.244 19.188 14.244 17.576V16.633C14.244 16.219 14.58 15.883 14.994 15.883C15.408 15.883 15.744 16.219 15.744 16.633V17.576C15.744 20.016 13.758 22 11.319 22H6.433C3.989 22 2 20.011 2 17.565V6.436C2 3.99 3.989 2 6.433 2H11.308ZM19.3881 8.554L22.3161 11.469C22.3422 11.4949 22.3656 11.5219 22.387 11.5504L22.3161 11.469C22.3515 11.5039 22.383 11.5421 22.4104 11.5828C22.4224 11.6012 22.434 11.6203 22.4448 11.6399C22.4535 11.6552 22.4615 11.6712 22.469 11.6875C22.4753 11.7018 22.4814 11.7162 22.487 11.7308C22.4945 11.7498 22.5011 11.7693 22.5069 11.7891C22.5113 11.8047 22.5153 11.8203 22.5188 11.836C22.5233 11.8551 22.5268 11.8743 22.5295 11.8937C22.5311 11.9063 22.5326 11.9195 22.5338 11.9328C22.5361 11.9556 22.5371 11.9777 22.5371 12L22.532 12.062L22.5299 12.1017C22.5297 12.1034 22.5295 12.1051 22.5292 12.1068L22.5371 12C22.5371 12.0555 22.531 12.1105 22.519 12.1639C22.5153 12.1797 22.5113 12.1953 22.5068 12.2107C22.5011 12.2307 22.4945 12.2502 22.4871 12.2695C22.4814 12.2838 22.4753 12.2982 22.4688 12.3123C22.4615 12.3288 22.4535 12.3448 22.4449 12.3605C22.434 12.3797 22.4224 12.3988 22.41 12.4172C22.403 12.4282 22.3953 12.439 22.3873 12.4497C22.3635 12.481 22.3375 12.5104 22.3095 12.5377L19.3881 15.447C19.2421 15.593 19.0501 15.666 18.8591 15.666C18.6671 15.666 18.4741 15.593 18.3281 15.445C18.0361 15.151 18.0371 14.677 18.3301 14.385L19.97 12.75H9.7458C9.3318 12.75 8.9958 12.414 8.9958 12C8.9958 11.586 9.3318 11.25 9.7458 11.25H19.972L18.3301 9.616C18.0371 9.324 18.0351 8.85 18.3281 8.556C18.6201 8.262 19.0941 8.262 19.3881 8.554Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <span> Exit </span>
                  </b-dropdown-item-button>
                </b-dropdown>
                <nuxt-link v-else to="/auth/login">
                  <svg width="12" height="16" viewBox="0 0 12 16">
                    <path
                      d="M8.5 4.25C8.5 5.63071 7.38071 6.75 6 6.75V7.75C7.933 7.75 9.5 6.183 9.5 4.25H8.5ZM6 6.75C4.61929 6.75 3.5 5.63071 3.5 4.25H2.5C2.5 6.183 4.067 7.75 6 7.75V6.75ZM3.5 4.25C3.5 2.86929 4.61929 1.75 6 1.75V0.75C4.067 0.75 2.5 2.317 2.5 4.25H3.5ZM6 1.75C7.38071 1.75 8.5 2.86929 8.5 4.25H9.5C9.5 2.317 7.933 0.75 6 0.75V1.75ZM10.75 12.125C10.75 12.5585 10.3856 13.0855 9.4887 13.5339C8.6217 13.9674 7.38896 14.25 6 14.25V15.25C7.51054 15.25 8.90279 14.9449 9.93592 14.4284C10.9391 13.9268 11.75 13.1413 11.75 12.125H10.75ZM6 14.25C4.61104 14.25 3.3783 13.9674 2.5113 13.5339C1.61439 13.0855 1.25 12.5585 1.25 12.125H0.25C0.25 13.1413 1.06087 13.9268 2.06408 14.4284C3.0972 14.9449 4.48946 15.25 6 15.25V14.25ZM1.25 12.125C1.25 11.6915 1.61439 11.1645 2.5113 10.7161C3.3783 10.2826 4.61104 10 6 10V9C4.48946 9 3.0972 9.30507 2.06408 9.82163C1.06087 10.3232 0.25 11.1087 0.25 12.125H1.25ZM6 10C7.38896 10 8.6217 10.2826 9.4887 10.7161C10.3856 11.1645 10.75 11.6915 10.75 12.125H11.75C11.75 11.1087 10.9391 10.3232 9.93592 9.82163C8.90279 9.30507 7.51054 9 6 9V10Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>ACCOUNT</span>
                </nuxt-link>
              </client-only>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <client-only>
      <div class="modal-sidebar" :class="{ active: showModal }">
        <div :class="{ blur: showModal }" @click="showBtnModal" />
        <div :class="{ right: showModal }" class="text-content">
          <div class="sidebar-header">
            <h4>{{ counts }} product</h4>
            <p @click="showBtnModal">
              close
            </p>
          </div>
          <div class="sidebar-body">
            <div v-for="(item, index) in carts" :key="item._id" class="item">
              <img :src="item.variant_id?.images[0]?.url" alt="">

              <div class="item__title">
                <p>{{ item.variant_id?.productId?.name }}</p>
                <span>{{
                  item.variant_id?.productId?.price + item.variant_id?.price
                }}</span>
                <button @click="removeCart(item._id)">
                  REMOVE FROM BAG
                </button>
              </div>
              <div class="item__count">
                <button @click="decreaseCount(index)">
                  <svg
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="2" rx="1" fill="#333333" />
                  </svg>
                </button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseCount(index)">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H8V13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13V8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H6V1C6 0.447715 6.44772 0 7 0C7.55228 0 8 0.447715 8 1V6Z"
                      fill="#333333"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="may-necessary">
              <h4>YOU MAY ALSO NEED</h4>
              <div class="may-necessary__images">
                <nuxt-link
                  v-for="item in recomended"
                  :key="item._id"
                  :to="`/product/${item._id}`"
                >
                  <img :src="item?.image?.url" alt="" @click="showModal = false">
                </nuxt-link>
              </div>
            </div>
            <div class="calc-info">
              <p>Taxes and <u>shipping</u> calculated at checkout</p>
              <p>Shipping days: 1–3 business days</p>
              <h4>TOTAL: ${{ allPrice }} USD</h4>
            </div>
            <div class="btn-group">
              <button class="btn btn-payment" @click="nextPayment">
                PAYMENT FOR GOODS
              </button>
            </div>
          </div>
        </div>
      </div>
    </client-only>

    <div class="sidebar" :class="{ active: showMenu }">
      <ul>
        <li v-for="item in categories" :key="item._id" @click="showMenu = !showMenu">
          <nuxt-link :to="`/product?id=${item._id}`">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HeaderSide',
  data () {
    return {
      showSearchInput: false,
      showMenu: false,
      showModal: false,
      allPrice: 0,
      activeSubNavIndex: null,
      navLinks: [
        {
          title: 'catalog',
          path: '/'
        },
        {
          title: 'about us',
          path: '/about'
        },
        {
          title: 'services',
          path: '/services'
        },
        {
          title: 'contact',
          path: '/help?slug=contact-us'
        }
      ]
    }
  },
  async fetch () {
    if (this.$auth.user) {
      await this.$store.dispatch('cart/getCart')
      await this.$store.dispatch('cart/getCartRecomended')
    }
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories,
      counts: state => state.cart.cartCounts,
      carts: state => state.cart.carts,
      recomended: state => state.cart.recomended
    })
  },
  async mounted () {
    // this.initAnimations()
    this.calculateAllPrice()
    await this.$store.dispatch('products/categories')
  },
  methods: {
    toggleSearch () {
      this.showSearchInput = !this.showSearchInput
      if (this.showSearchInput) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus()
        })
      }
    },
    activateSubNav (index) {
      this.activeSubNavIndex = index
    },
    deactivateSubNav () {
      this.activeSubNavIndex = null
    },
    initAnimations () {
      this.$gsap.to(this.$refs.header, { duration: 0 })
      this.$ScrollTrigger.create({
        start: 'top -80',
        end: 'top -300',
        toggleClass: {
          className: 'is-transparent',
          targets: '.header'
        }
      })

      this.$ScrollTrigger.create({
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onEnter: () => {
          this.$gsap.to(this.$refs.header, { duration: 3 })
        },
        onLeaveBack: () => {
          this.$gsap.to(this.$refs.header, { duration: 3 })
        }
      })
    },
    setShowMenu () {
      this.showMenu = !this.showMenu
      this.showMenu
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'initial')
    },
    async logout () {
      await this.$store.dispatch('logout')
    },
    showBtnModal () {
      if (this.$auth.user && this.carts?.length) {
        this.showModal = !this.showModal
        this.showModal
          ? (document.body.style.overflow = 'hidden')
          : (document.body.style.overflow = 'initial')
      }
    },
    ...mapMutations('cart', ['INCREASE_COUNT', 'DECREASE_COUNT']),
    ...mapActions('cart', ['getCart']),
    increaseCount (index) {
      this.INCREASE_COUNT(index)
    },
    decreaseCount (index) {
      this.DECREASE_COUNT(index)
    },
    async removeCart (id) {
      await this.$store.dispatch('cart/removeCart', id)
      await this.$fetch()
      if (!this.carts?.length) {
        this.showModal = !this.showModal
        this.showModal
          ? (document.body.style.overflow = 'hidden')
          : (document.body.style.overflow = 'initial')
      }
    },
    parsePrice (price) {
      const priceStr = typeof price === 'string' ? price : price?.toString()
      return parseFloat(priceStr?.replace(/^\$/, '').replace(/,/g, ''))
    },
    calculateAllPrice () {
      this.allPrice = this.carts?.reduce((total, item) => {
        const variantPrice = this.parsePrice(item.variant_id?.price)
        const productPrice = this.parsePrice(item.variant_id?.productId?.price)
        const quantity = item.quantity
        const itemTotalPrice = (variantPrice + productPrice) * quantity
        return total + itemTotalPrice
      }, 0)
    },
    profilePush () {
      this.$router.push('/profile')
    },
    nextPayment () {
      this.showBtnModal()
      this.$router.push('/payments')
    }
  }
}
</script>
