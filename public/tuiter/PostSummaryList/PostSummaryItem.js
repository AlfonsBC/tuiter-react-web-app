const PostSummaryItem = (post) => {
    return(`
    <div class="wd-flex-container">
            <div class="wd-grid-col-eighty-page wd-flex-top wd-color-gray">
                <div class="wd-fl-box-trending">
                    ${post.topic}<br>
                    <span class="wd-color-white">${post.userName} </span> &nbsp;&nbsp;<i class="fa fa-circle" aria-hidden="true"></i> ${post.time} <br>
                    <span class="wd-color-white-title">${post.title}</span>
                </div>
            </div>
            <div class="wd-grid-col-twenty-page wd-flex-box me-5">
                <img src=${post.image}  alt="Fed chair" class="wd-rounded-corners-all-around" width="100px" height="100px">
            </div>
        </div>
    `);
}
export default PostSummaryItem;