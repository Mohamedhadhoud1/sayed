import  db from "../db.js";
import jwt from "jsonwebtoken";


export const getStudents = (req, res) => {
  
  const q = "SELECT * FROM students"
   
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};
export const getFakeStudents = (req, res) => {
  
  const q = "SELECT * FROM fakeStudents"
   
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getStudent = (req, res) => {
  const q = "SELECT * FROM students WHERE id = ?"
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
export const getFakeStudent = (req, res) => {
  const q = "SELECT * FROM fakeStudents WHERE id = ?"
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

// export const addPost = (req, res) => {
//   const token = req.cookies.access_token;
//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q =
//       "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

//     const values = [
//       req.body.title,
//       req.body.desc,
//       req.body.img,
//       req.body.cat,
//       req.body.date,
//       userInfo.id,
//     ];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.json("Post has been created.");
//     });
//   });
// };

export const deleteStudent = (req, res) => {
//   const token = req.cookies.access_token;
//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

    
    const q = "DELETE FROM students WHERE `id` = ?"

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(403).json("Student Not Deleted!");

      return res.json("Student has been deleted!");
    });
  
};

export const deleteFakeStudent = (req, res) => {
  //   const token = req.cookies.access_token;
  //   if (!token) return res.status(401).json("Not authenticated!");
  
  //   jwt.verify(token, "jwtkey", (err, userInfo) => {
  //     if (err) return res.status(403).json("Token is not valid!");
  
      
      const q = "DELETE FROM fakeStudents WHERE `id` = ?"
  
      db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(403).json("Student Not Deleted!");
  
        return res.json("Student has been deleted!");
      });
    
  };

// export const updateStudent = (req, res) => {
// //   const token = req.cookies.access_token;
// //   if (!token) return res.status(401).json("Not authenticated!");

// //   jwt.verify(token, "jwtkey", (err, userInfo) => {
// //     if (err) return res.status(403).json("Token is not valid!");

// //     const postId = req.params.id;
//     const q =
//       "UPDATE students SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? ";

//     const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

//     db.query(q, [...values,req.params.id], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.json("Post has been updated.");
//     });
  
// };