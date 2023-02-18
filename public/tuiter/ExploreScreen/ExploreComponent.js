import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
    <div class="row">
        <div class="col-10">
    <div class="card override_bar">
    <div class="card-body p-2">
        <div class="input-group input-group-lg">
            <span class="input-group-text border-0 wd-transparent pb-5" >
                <i class="fas fa-search fa-sm wd-text-gray"></i></span>
            <input type="text" class="form-control wd-text-gray form-control-lg rounde bg-transparent wd-text-gray pb-4"
                   placeholder="Search Twitter" />
        </div>
</div>
</div>
</div>
        <div class="col-2 ps-5 mt-2">
            <i class="fas fa-cog fa-lg wd-text-gray"></i>
        </div>
</div>
    <div class="wd-flex-container wd-without-topborder wd-fl-between">
        <div class="wd-fl-box wd-color-blue wd-bottom-blue">For you</div>
        <div class="wd-fl-box wd-color-gray">Trending</div>
        <div class="wd-fl-box wd-color-gray">News</div>
        <div class="wd-fl-box wd-color-gray">Sports</div>
        <div class="wd-fl-box wd-color-gray">Entertainment</div>
    </div>
    <div class="wd-img-container">
    <img src="imgs/boston_fall.jpeg" width="97%">
        <div class="wd-bottom-left-small">
           <span class="wd-color-white-small">Nature - LIVE</span>
        </div>
        <div class="wd-bottom-left-title">
            <span class="wd-color-white-title-tweet wd-fl-box">Boston Public Garden</span>
        </div>
    </div>

    ${PostSummaryList()}
    `);
}
export default ExploreComponent;