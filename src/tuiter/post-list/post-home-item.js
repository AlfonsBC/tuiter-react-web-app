import React from "react";

const PostListItem = (
    {
        post =     {
            "id":"123",
            "avatarIcon": "../explore/imgs/sause.png",
            "userName": "Vsauce Science",
            "handle": "sauce_science",
            "time": "23h",
            "tweet": "Just picked up a copy of @drbecky_'s A Brief History Of Black Holes.About to fall in ... 🕳",
            "image": "../explore/imgs/sause_twt.jpeg",
            "title": "A brief History of Black Holes",
            "content": "In A Brief History of Black Holes University of Oxford astrophysicist Dr. Becky Smethurst charts the scientific breakthroughs that have uncovered the weird and wonderful...",
            "ncomments": "4.2K",
            "nretuits":  "3.5K",
            "nlikes":    "37.5K",
            "link":      "amazon.com"
        }
    }
) => {
    let cardBody = null;
    if (post.title && post.content) {
        cardBody = (
            <div className="card-body">
                <div className="card-title">{post.title}</div>
                <div className="card-text">
                    <div className="text-secondary">{post.content}</div>
                </div>
            </div>
        );
    };

    return (
        <li className="list-group-item bg-transparent">
        <div className="row">
            <div className="col-1 g-0">
                <img className="img-fluid rounded-circle" src={`/images/${post.avatarIcon}`} alt=""/>
            </div>
            <div className="col-11">
                <span>
                    <span className="fw-bold">{post.userName} </span>
                    <i className="bi bi-patch-check-fill text-primary"></i>
                    <span className="text-secondary"> @{post.handle}  </span>
                    <span className="text-secondary">
                        <i className="bi bi-dot"></i>{post.time}
                    </span>
                    <i className="bi bi-three-dots float-end"></i>
                </span>
                <div>{post.tweet}</div>
                <div className="card border-1 bg-transparent mt-2">
                    <img src={`/images/${post.image}`}
                         className="card-img-top" alt="..."/>
                        {cardBody}
                </div>

                <ul className="nav mt-2 nav-fill text-secondary">
                    <li className="nav-item">
                        <i className="bi bi-chat fa-sm me-2"></i>{post.ncomments}
                    </li>
                    <li className="nav-item">
                        <i className="bi bi-repeat fa-sm me-2"></i>{post.nretuits}
                    </li>
                    <li className="nav-item">
                        <i className="bi bi-heart fa-sm me-2"></i>{post.nlikes}
                    </li>
                    <li className="nav-item">
                        <i className="bi bi-upload fa-sm me-2"></i>
                    </li>
                </ul>
            </div>
        </div>
    </li>
);
};

export default PostListItem;