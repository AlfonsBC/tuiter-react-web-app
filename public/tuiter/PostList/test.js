import PostList from "./PostList.js";
function exploreComponent() {
    $('#wd-explore').append(`
${PostList()}
    `);
    }

    $(exploreComponent);