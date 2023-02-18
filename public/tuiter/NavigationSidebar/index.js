import NavigationSidebarItems from "./NavigationSidebarItems.js";

const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
    ${
        NavigationSidebarItems.map(param =>{
            if (param.title.toLowerCase() === active){
                return(`
                <a class="list-group-item active" href=${param.link}>
                <div class="row">
                    <div class="col-2">
                        <i class=${param.icon} ></i>
                    </div>
                    <div class="col-10">
                        ${param.title}
                    </div>
                </div>
            </a>
                `)
            }
            return(`
            <a class="list-group-item" href=${param.link}>
            <div class="row">
                <div class="col-1"><i class="${param.icon}"></i></div>
                <div class="col d-none d-lg-block">${param.title}</div>
            </div>
        </a>
            `)

        }).join('')
    }
    </div>
    <div class="d-grid mt-2">
<a href="../tuit.html"
class="btn btn-primary btn-block rounded-pill">
Tweet</a>
</div>
    
    `);
}
export default NavigationSidebar;


/*
const NavigationSidebar = () => {
    return(`
    <div class="list-group">
    <a class="list-group-item" href="/">
    <i class="fab fa-twitter"></i></a>
    <li class="list-group-item wd-search-items">
                <div class="row">
                    <div class="col-2">
                    <i class="fa fa-home fa-x"></i>
                    </div>
                    <div class="col-10">
                        Home
                    </div>
                </div>
            </li>

            <li class="list-group-item wd-search-items wd-active">
                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-hashtag fa-x"></i>
                    </div>
                    <div class="col-10">
                        Explore
                    </div>
                </div>
            </li>
            <li class="list-group-item wd-search-items">
                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-bell fa-x"></i>
                    </div>
                    <div class="col-10">
                        Notifications
                    </div>
                </div>

            </li>
            <li class="list-group-item wd-search-items">
                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-envelope fa-x"></i>
                    </div>
                    <div class="col-10">
                        Messages
                    </div>
                </div>

            </li>
            <li class="list-group-item wd-search-items">
                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-bookmark fa-x"></i>
                    </div>
                    <div class="col-10">
                        Bookmarks
                    </div>
                </div>

            </li>
            <li class="list-group-item wd-search-items">

                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-list fa-x"></i>
                    </div>
                    <div class="col-10">
                        Lists
                    </div>
                </div>
            </li>
            <li class="list-group-item wd-search-items">

                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-user fa-x"></i>
                    </div>
                    <div class="col-10">
                        Profile
                    </div>
                </div>
            </li>
            <li class="list-group-item wd-search-items">
                <div class="row">
                    <div class="col-2">
                        <i class="fa fa-chevron-circle-right  fa-x"></i>
                    </div>
                    <div class="col-10">
                        More
                    </div>
                </div>

            </li>
        </ul>

    </div>
    <div class="d-grid mt-2">
<a href="../tuit.html"
class="btn btn-primary btn-block rounded-pill">
Tweet</a>
</div>
    `);
}
export default NavigationSidebar;
*/