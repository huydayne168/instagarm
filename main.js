// khai báo :

const body = document.querySelector("body");

const leftSideBar = body.querySelector(".left-side-bar");
const searchBtn = body.querySelector(".nav-list__item.search");
const notificationBtn = body.querySelector(".nav-list__item.notification");
const searchBar = body.querySelector(".container-search-bar");
const notificationBar = body.querySelector(".container-notification-bar");

const postList = body.querySelector(".middle .post-list");
const storyList = body.querySelector(".middle .story-list");

// ==========Left Side Bar==========
let navFunction = {
    searching: function () {
        searchBtn.addEventListener("click", (event) => {
            leftSideBar.classList.toggle("in-search");
            leftSideBar.classList.remove("in-notification");
            event.stopPropagation();
        });

        body.addEventListener("click", function () {
            if (leftSideBar.classList.contains("in-search")) {
                leftSideBar.classList.remove("in-search");
            }
        });

        searchBar.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    },

    notification: function () {
        notificationBtn.addEventListener("click", (event) => {
            leftSideBar.classList.toggle("in-notification");
            leftSideBar.classList.remove("in-search");
            event.stopPropagation();
        });

        body.addEventListener("click", function () {
            if (leftSideBar.classList.contains("in-notification")) {
                leftSideBar.classList.remove("in-notification");
            }
        });

        notificationBar.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    },

    start: function () {
        this.searching();
        this.notification();
    },
};

navFunction.start();

// ==========Middle Content==========
// middleStory
let middleStory = {
    storyCollection: [
        {
            storyAvatar:
                "https://i.pinimg.com/236x/ea/77/1a/ea771a1d4d83b0f61660194fa579619a.jpg",
            ownerName: "pdqn_n",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/0f/dc/69/0fdc69a47e9d082652ff46d6e33f1f86.jpg",
            ownerName: "nthasim",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/ca/fb/b6/cafbb62a06614acccf5e95965f0aff82.jpg",
            ownerName: "RPTmck",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/30/8e/e3/308ee3de8a31472e5831280c1ddcde69.jpg",
            ownerName: "melody",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/3b/91/24/3b912453bb9716f0db2c793b1d53f628.jpg",
            ownerName: "showMe",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/8c/82/82/8c8282c1fa8c92fde30f66be7f48c7df.jpg",
            ownerName: "huyviet_1608",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/f4/24/14/f42414eaa5d220d5c9f4b636a59a3168.jpg",
            ownerName: "cristiano",
        },
        {
            storyAvatar:
                "https://i.pinimg.com/236x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg",
            ownerName: "dumpdumphieu",
        },
    ],

    renderStory: function () {
        let storyCollectionlength = this.storyCollection.length;
        for (let i = 0; i < storyCollectionlength; i++) {
            storyList.innerHTML += `<div class="story-list__item">
            <div class="story-avatar">
                <img
                    src= ${this.storyCollection[i].storyAvatar}
                    alt="avatar"
                />
            </div>
            <div class="story-name">${this.storyCollection[i].ownerName}</div>
        </div>`;
        }
    },

    start: function () {
        this.renderStory();
    },
};

middleStory.start();

// middlePost
let middlePost = {
    postCollection: [
        {
            pictureContent: "./asset/image/post-1picture.jpg",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng đầu tiên",
        },
        {
            pictureContent: "./asset/image/quynhxinh.png",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng thứ 2",
        },
        {
            pictureContent: "./asset/image/post-2picture.jpg",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng thứ 3",
        },
        {
            pictureContent: "./asset/image/post-1picture.jpg",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng thứ 4",
        },
        {
            pictureContent: "./asset/image/post-1picture.jpg",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng thứ 5",
        },
        {
            pictureContent: "./asset/image/post-2picture.jpg",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng thứ 6",
        },
        {
            pictureContent: "./asset/image/quynhxinh.png",
            ownerName: "huyviet_1608",
            postStatus: "Đây là bài đăng thứ 7",
        },
    ],

    renderPost: function () {
        let postCollectionLength = this.postCollection.length;
        for (let i = 0; i < postCollectionLength; i++) {
            postList.innerHTML += `<div class="post-list__item">
            <div class="header">
                <div class="avatar">
                    <img
                        src="./asset/image/avatar.jpg"
                        alt="avatar"
                    />
                </div>
                <div class="post-header__name">
                    ${this.postCollection[i].ownerName}
                </div>
                <div class="date">1d</div>
                <div class="post-more-icon btn">
                    <svg
                        aria-label="More options"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="1.5"
                        ></circle>
                        <circle
                            cx="6"
                            cy="12"
                            r="1.5"
                        ></circle>
                        <circle
                            cx="18"
                            cy="12"
                            r="1.5"
                        ></circle>
                    </svg>
                </div>
            </div>
            <div class="body">
                <div class="post-content">
                    <div class="pictures">
                        <img
                            src= ${this.postCollection[i].pictureContent}
                            alt="pic 1"
                        />
                    </div>
                    <!-- <video src=""></video> -->
                </div>

                <div class="post-desc">
                    <div class="post-interact">
                        <div class="like btn">
                            <svg
                                aria-label="Like"
                                class="_ab6-"
                                color="rgb(245, 245, 245)"
                                fill="rgb(245, 245, 245)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
                                ></path>
                            </svg>
                        </div>
                        <div class="comment btn">
                            <svg
                                aria-label="Comment"
                                class="_ab6-"
                                color="rgb(245, 245, 245)"
                                fill="rgb(245, 245, 245)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                        </div>
                        <div class="send btn">
                            <svg
                                aria-label="Share Post"
                                class="_ab6-"
                                color="rgb(245, 245, 245)"
                                fill="rgb(245, 245, 245)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="22"
                                    x2="9.218"
                                    y1="3"
                                    y2="10.083"
                                ></line>
                                <polygon
                                    fill="none"
                                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></polygon>
                            </svg>
                        </div>
                        <div class="save btn">
                            <svg
                                aria-label="Save"
                                class="_ab6-"
                                color="rgb(245, 245, 245)"
                                fill="rgb(245, 245, 245)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <polygon
                                    fill="none"
                                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></polygon>
                            </svg>
                        </div>
                    </div>

                    <div class="post-like-count">
                        <div>999 likes</div>
                    </div>

                    <div class="post-status">
                        <div class="post-status__name">
                        ${this.postCollection[i].ownerName}
                        </div>
                        <div class="post-status__text">
                            <p>${this.postCollection[i].postStatus}</p>
                        </div>
                    </div>

                    <div class="view-comment">
                        Xem tất cả bình luận
                    </div>
                    <div class="post-comment">
                        <form action="">
                            <input
                                type="text"
                                name="comment"
                                id="comment"
                                placeholder="Thêm bình luận..."
                            />
                        </form>
                        <svg
                            aria-label="Emoji"
                            class="_ab6-"
                            color="rgb(142, 142, 142)"
                            fill="rgb(142, 142, 142)"
                            height="13"
                            role="img"
                            viewBox="0 0 24 24"
                            width="13"
                        >
                            <path
                                d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`;
        }
    },

    start: function () {
        this.renderPost();
    },
};

middlePost.start();
