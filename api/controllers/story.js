import  db from "../db.js";
import jwt from "jsonwebtoken";


export const getstories = (req, res) => {
  const grade = req.query.grade;
  const q = "SELECT * FROM story WHERE grade = ? "
   
  db.query(q, grade, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getstory = (req, res) => {
  const q = "SELECT * FROM story WHERE id = ? AND grade = ?"
  db.query(q, [req.params.id,req.params.grade], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addstory = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO story(`title`, `desc`, `imgurl`, `videourl`, `pdfurl`,`quiz`,`grade`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.imgurl,
      req.body.videourl,
      req.body.pdfurl,
      req.body.quiz,
      req.body.grade
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("story has been created.");
    });
  // });
};

export const deletestory = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    //const postId = req.params.id;
    const q = "DELETE FROM story WHERE id = ? ";

    db.query(q, req.params.id, (err, data) => {
      if (err) return res.status(403).json("post not deleted!");

      return res.json("story has been deleted!");
    });
  // });
};

export const updatestory = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

  const q =
  "UPDATE story SET `title`=?, `desc`=?, `imgurl`=?, `videourl`=?, `pdfurl`=?,`quiz`=?,`grade`=? WHERE `id` = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.imgurl,
    req.body.videourl,
    req.body.pdfurl,
    req.body.quiz,
    req.body.grade
  ];

db.query(q, [...values,req.params.id], (err, data) => {
  if (err) return res.status(500).json(err);
  return res.json("lesson has been updated.");
});
  // });
};