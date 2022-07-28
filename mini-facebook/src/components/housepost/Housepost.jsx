import { Link } from "react-router-dom";
import "./housepost.css";

export default function Housepost({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <Link to={`/house/${post._id}`} className="link">
        <span className="postTitle">{post.photo && <img className="postImg" src={PF + post.photo} alt="" />}</span>
      </Link>
    
    <br></br>
    <div className="postInfo">
      {/* <div className="postCats">
        {post.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div> */}
      <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
              <br></br>
              <img className="topImg" src={PF+post.profilePic} alt="" />
            </Link>
          </span>
          
        </div>
      
      <hr />
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
    
  </div>
);
}