import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "http://localhost:5000/api/hostels/";
  return (
    <div className="post">
    {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
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
             
         
              <img className="topImg" src={PF+post.profilePic} alt="" /> <b> {post.username}</b>
            </Link>
           
          </span>
          
        </div>
      <Link to={`/post/${post._id}`} className="link">
        <span className="postDesc">{post.title}</span>
      </Link>
      <hr />
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
    {/* <p className="postDesc">{post.desc}</p> */}
  </div>
);
}
