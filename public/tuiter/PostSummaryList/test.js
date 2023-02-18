import PostSummaryList from "./PostSummaryList.js";
function exploreComponent() {
    $('#wd-explore').append(`
${PostSummaryList()}
    `);
    }

    $(exploreComponent);