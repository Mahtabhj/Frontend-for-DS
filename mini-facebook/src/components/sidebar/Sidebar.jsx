import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (



    
    <div className="sidebar">



<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


<div class="container">
    <div class="row">
        <div class="col-lg-12 layout-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4 class="pb-0">Stories</h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div id="content_1" class="tabcontent story-area"> 
                                <div class="story-container-1">
                                    <div class="single-create-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="single-create-story-bg"/>
                                        <div class="create-story-author">
                                            <i class="fa fa-plus-circle fa-2x text-info"></i>
                                            <p>Create a story</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                                            <p>John</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                                            <p>Mike</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png"/>
                                            <p>Lisa</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png"/>
                                            <p>William</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                                            <p>Jonthy</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                            <p>Steve</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar8.png"/>
                                            <p>Jenni</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="single-story-bg"/>
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                                            <p>Sagarika</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {/* <img
          src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> */}
        <p>
         Want to communicate each other and share thoughts
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}