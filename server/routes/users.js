var express = require("express");
var router = express.Router();
const mysqldb = require("../database/connectionToMysql.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  console.log(req.body);
  try {
    const selectsql = "SELECT * FROM `voters`;";
    mysqldb.query(selectsql, (err, response) => {
      if (!err) {
        // console.log(response);
        const voter_id = req.body.voter_id;
        const checkersql = "SELECT * FROM `voters` WHERE voter_id = ?";

        mysqldb.query(checkersql, [voter_id], (err, data) => {
          if (!err) {
            // console.log(data);
            if (!data.length) {
              res.json({ LoginStatus: "USER_NOT_FOUND" });
            } else {
              const password = req.body.password;
              const passwordcheckersql = "SELECT * FROM `voters` WHERE voter_id = ?  AND password = ?;";
              mysqldb.query(passwordcheckersql,[voter_id, password],(err, result) => {
                  if (result) {
                    // console.log(result);
                    if (!result.length) {
                      console.log("password Tetti");
                      res.json({ LoginStatus: "PASSWORD_WRONG" });
                    } else {
                      console.log("Logined");

                      const voter_id = req.body.voter_id;
                      const ifvotedcheckslq = "SELECT * FROM `votes` WHERE voter_id=?";
                      mysqldb.query(ifvotedcheckslq,[voter_id],(err,data)=>{
                        if (!err) {
                          console.log(data)
                          res.json({ LoginStatus: "LOGIN_SUCCESS", user: result, votestatus:data });
                        } else {
                          console.log(err)
                        }
                      })

                    }
                  } else {
                    console.log(err);
                  }
                }
              );
            }
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/getVotesStates', (req, res) => {
  console.log(req.body,"data from front")
  const voter_id = req.body.voter_id;
  const ifvotedcheckslq = "SELECT * FROM `votes` WHERE voter_id=?";
  mysqldb.query(ifvotedcheckslq,[voter_id],(err,data)=>{
    if (!err) {
      console.log(data)
      res.json({ votestatus:data });
    } else {
      console.log(err)
    }
  })
});

module.exports = router;
