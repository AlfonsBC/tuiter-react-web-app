import WhoToFollowList from "./WhoToFollowList.js";
function exploreComponent() {
    $('#wd-explore').append(`
${WhoToFollowList()}
    `);
    }

    $(exploreComponent);