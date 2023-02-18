const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item wd-list-items pb-0 ">
    <div class="row wd-align-follow">
        <div class="col-2">
            <img src= ${who.avatarIcon} class="wd-rounded-corners-all-around" width="35px" height="35px">
        </div>
        <div class="col-6">
            <p class="wd-follow">
            ${who.userName} <img src="imgs/verified.png" width="14px" height="14px"> <br><span class="wd-badge">@${who.handle}</span></p>
        </div>
        <div class="col-4 wd-align">
            <button class="btn btn-primary btn-sm wd-sm-btn-follow">
                Follow
            </button>

        </div>
    </div>
</li>`
);
}
export default WhoToFollowListItem;