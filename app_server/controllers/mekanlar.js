var express = require('express');
var router = express.Router();



const anaSayfa = function(req, res, next) {
    res.render('anasayfa', {
        "baslik": "Ana Sayfa",
        "sayfaBaslik": {
            "siteAd": "MekanBul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar": [
            {
                "ad": "Starbucks",
                "adres": "Centrum Garden AVM",
                "puan": "4",
                "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
                "mesafe": "10km"
            }
            ,
            {
                "ad": "Gloria Jeans",
                "adres": "SDU Doğu Kampüsü",
                "puan": "3",
                "imkanlar": ["Kahve", "Çay", "Pasta"],
                "mesafe": "5km"
            }
        ]
    }
    );
}


const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi', {
        "baslik": 'Mekan Bilgisi',
        "mekanBaslik": "Starbucks",
        "mekanDetay": {
            "ad": "Starbucks",
            "adres": "Centrum Garden AVM",
            "puan": "4",
            "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
            "koordinatlar": {
                "enlem": "37.7",
                "boylam": "30.5"
            },
            "saatler": [
                {
                    "gunler": "Pazartesi-Cuma",
                    "acilis": "9:00-23:00",
                    "kapali": "false"
                },
                {
                    "gunler": "Cumartesi-Pazar",
                    "acilis": "10:00-22:00",
                    "kapali": "false"
                }
            ],
            "yorumlar": [
                {
                    "yorumYapan": "Ziya İPEK",
                    "puan": "4",
                    "tarih": "20 Ekim 2022",
                    "yorumMetni": "Kahveler iyi."
                }
            ]
        }
    }
    );
}

const yorumEkle = function (req, res, next){
    res.render('yorumekle', {title:'Yorum Ekle'});
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}