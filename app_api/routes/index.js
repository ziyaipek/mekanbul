var express = require("express");
var router = express.Router();
var ctrlMekanlar = require("../controllers/mekanlar");
var crtlYorumlar = require("../controllers/yorumlar");

router
.route("/mekanlar/:mekanid")
.get(ctrlMekanlar.mekanGetir)
.put(ctrlMekanlar.mekanGuncelle)
.delete(ctrlMekanlar.mekanSil);

router
.route("/mekanlar")
.get(ctrlMekanlar.mekanlariListele)
.post(ctrlMekanlar.mekanEkle);

router
.route("/mekanlar/:mekanid/yorumlar")
.post(crtlYorumlar.yorumEkle);

router
.route("/mekanlar/:mekanid/yorumlar/:yorumid")
.get(crtlYorumlar.yorumGetir)
.put(crtlYorumlar.yorumGuncelle)
.delete(crtlYorumlar.yorumSil);

module.exports = router;