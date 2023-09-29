import  db from "../db.js";
import jwt from "jsonwebtoken";


export const getlets = (req, res) => {
  const grade = req.query.grade;
  const q = "SELECT * FROM let WHERE grade = ? "
   
  db.query(q, grade, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getlet = (req, res) => {
  const q = "SELECT * FROM let WHERE id = ? AND grade = ?"
  db.query(q, [req.params.id,req.params.grade], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addlet = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO let(`title`, `desc`, `imgurl`, `videourl`, `pdfurl`,`quiz`,`grade`) VALUES (?)";

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
      return res.json("lessons has been created.");
    });
  // });
};

export const deletelet = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    //const postId = req.params.id;
    const q = "DELETE FROM let WHERE id = ? ";

    db.query(q, req.params.id, (err, data) => {
      if (err) return res.status(403).json("post not deleted!");

      return res.json("lesson has been deleted!");
    });
  // });
};

export const updatelet = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE let SET (`title`, `desc`, `imgurl`, `videourl`, `pdfurl`,`quiz`,`grade`) VALUES (?) WHERE `id` = ?";

      const values = [
        req.body.title,
        req.body.desc,
        req.body.imgurl,
        req.body.videourl,
        req.body.pdfurl,
        req.body.quiz,
        req.body.grade
      ];
  
    db.query(q, [...values, postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("lesson has been updated.");
    });
  // });
};