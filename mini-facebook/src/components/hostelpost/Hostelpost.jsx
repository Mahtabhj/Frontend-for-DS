import { Link } from "react-router-dom";
import "./hostelpost.css";

export default function Hostelpost({post}) {
  const PF = "http://localhost:5000/images/";
  const imglink = "http://localhost:5000/api/getstory/";
  return (
    <div className="post">
      
      <Link to={`/hostel/${post._id}`} className="link">
        <span className="postTitle">{post.photo && <img className="postImg" src={imglink + post.photo} alt="" />}</span>
      </Link>
    <br></br>
    <div className="postInfo">
      <div className="postCats">
        {post.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div>
      <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
              <br></br>
              <img className="topImg" src={imglink + post.profilePic} alt="" />
            </Link>
          </span>
          
        </div>
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
 
  </div>
);
}