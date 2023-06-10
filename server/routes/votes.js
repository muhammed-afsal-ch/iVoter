var express = require("express");
var router = express.Router();
const mysqldb = require("../database/connectionToMysql.js");

router.post("/getAllPresidential", (req, res) => {
  try {
    console.log(req.body);

    const position = req.body.position;
    const getAllPresidentialsql = "SELECT * FROM `candidates` WHERE position=?";
    mysqldb.query(getAllPresidentialsql, [position], (err, data) => {
      if (!err) {
        console.log(data);
        res.json({ PresidentialCandidates: data });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/getAllSecretarial", (req, res) => {
  try {
    console.log(req.body);

    const position = req.body.position;
    const getAllSecretarialsql = "SELECT * FROM `candidates` WHERE position=?";
    mysqldb.query(getAllSecretarialsql, [position], (err, data) => {
      if (!err) {
        console.log(data);
        res.json({ SecretarialCandidates: data });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/getAllVicePresidential", (req, res) => {
  try {
    console.log(req.body);

    const position = req.body.position;
    const getAllVicePresidentialsql =
      "SELECT * FROM `candidates` WHERE position=?";
    mysqldb.query(getAllVicePresidentialsql, [position], (err, data) => {
      if (!err) {
        console.log(data);
        res.json({ VicePresidentialCandidates: data });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/getAllTreasurer", (req, res) => {
  try {
    console.log(req.body);

    const position = req.body.position;
    const getAllTreasurersql = "SELECT * FROM `candidates` WHERE position=?";
    mysqldb.query(getAllTreasurersql, [position], (err, data) => {
      if (!err) {
        console.log(data);
        res.json({ TreasurerCandidates: data });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/addpresidential", (req, res) => {
  console.log(req.body);

  const { voter_id, votefor } = req.body;
  const addpresidentialvotesql =
    "UPDATE `votes` SET `presidential`=? WHERE voter_id=?";

  mysqldb.query(
    addpresidentialvotesql,
    [votefor, voter_id],
    (err, response) => {
      if (!err) {
        console.log(response);
        res.json({ ADD_PRESIDENTIAL_STATUS: "ADDED" });
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/addsecretarial", (req, res) => {
  console.log(req.body);

  const { voter_id, votefor } = req.body;
  const addsecretarialvotesql =
    "UPDATE `votes` SET `Secretarial`=? WHERE voter_id=?";

  mysqldb.query(addsecretarialvotesql, [votefor, voter_id], (err, response) => {
    if (!err) {
      console.log(response);
      res.json({ ADD_SECRETARIAL_STATUS: "ADDED" });
    } else {
      console.log(err);
    }
  });
});

router.post("/addVicePresidential", (req, res) => {
  console.log(req.body);

  const { voter_id, votefor } = req.body;
  const addVicePresidentialvotesql =
    "UPDATE `votes` SET `vice_presidential`=? WHERE voter_id=?";

  mysqldb.query(
    addVicePresidentialvotesql,
    [votefor, voter_id],
    (err, response) => {
      if (!err) {
        console.log(response);
        res.json({ ADD_VicePresidential_STATUS: "ADDED" });
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/addTreasurer", (req, res) => {
  console.log(req.body);

  const { voter_id, votefor } = req.body;
  const addTreasurervotesql =
    "UPDATE `votes` SET `treasurer`=? WHERE voter_id=?";

  mysqldb.query(addTreasurervotesql, [votefor, voter_id], (err, response) => {
    if (!err) {
      console.log(response);
      res.json({ ADD_Treasurer_STATUS: "ADDED" });
    } else {
      console.log(err);
    }
  });
});

router.get("/getallvoters", (req, res) => {
  console.log(req.body);

  mysqldb.query("SELECT * FROM `voters`", (err, data) => {
    if (!err) {
      console.log(data);
      res.json({ allVoters: data });
    } else {
      console.log(err);
    }
  });
});

router.get("/getAllCandidates", (req, res) => {
  console.log(req.body);

  mysqldb.query("SELECT * FROM `candidates`", (err, data) => {
    if (!err) {
      console.log(data);
      res.json({ allCandidates: data });
    } else {
      console.log(err);
    }
  });
});



module.exports = router;
