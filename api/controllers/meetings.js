import  db from "../db.js";
import jwt from "jsonwebtoken";


export const getmeetings = (req, res) => {
  const grade = req.query.grade;
  const q = "SELECT * FROM meetings WHERE grade = ? "
   
  db.query(q, grade, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getmeeting = (req, res) => {
  const q = "SELECT * FROM meetings WHERE id = ? AND grade = ?"
  db.query(q, [req.params.id,req.params.grade], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addmeeting = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO meetings(`title`, `url`, `date`,`grade`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.url,
      req.body.date,
      req.body.grade
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("meetings has been created.");
    });
  // });
};

export const deletemeeting = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    //const postId = req.params.id;
    const q = "DELETE FROM meetings WHERE id = ? ";

    db.query(q, req.params.id, (err, data) => {
      if (err) return res.status(403).json("post not deleted!");

      return res.json("meetings has been deleted!");
    });
  // });
};

export const updatemeeting = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    
    const q =
      "UPDATE meetings SET `title`=?, `url`=?, `date`=?,`grade`=?  WHERE `id` = ?";

      const values = [
        req.body.title,
        req.body.url,
        req.body.date,
        req.body.grade
      ];
  
    db.query(q, [...values, req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("meetings has been updated.");
    });
  // });
};