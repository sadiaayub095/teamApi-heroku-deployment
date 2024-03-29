const express = require('express');
const app = express();
app.use(express.json());

const teamdata = [
        {
            "id": "5dc272ccfb94232420f757d7",
            "name": "Dolores Meyer",
            "company": "VORATAK",
            "email": "doloresmeyer@voratak.com",
            "phone": "+1 (806) 473-2826",
            "address": "676 Kermit Place, Orick, Missouri, 1025"
        },
        {
            "id": "5dc272ccce6b5f3bc0735908",
            "name": "Curry Weber",
            "company": "COMVENE",
            "email": "curryweber@comvene.com",
            "phone": "+1 (861) 449-2336",
            "address": "736 Bragg Street, Greenfields, Michigan, 8726"
        },
        {
            "id": "5dc272cced403bf68acdd9f0",
            "name": "Marla Chaney",
            "company": "ORBOID",
            "email": "marlachaney@orboid.com",
            "phone": "+1 (957) 478-2173",
            "address": "544 Boulevard Court, Trexlertown, Louisiana, 7949"
        },
        {
            "id": "5dc272cce13f68fa60adcca0",
            "name": "Bernadette Chandler",
            "company": "DADABASE",
            "email": "bernadettechandler@dadabase.com",
            "phone": "+1 (821) 490-2129",
            "address": "630 Irvington Place, Gerber, American Samoa, 1782"
        },
        {
            "id": "5dc272ccdda21a6a41a52819",
            "name": "Jennings Herrera",
            "company": "QUONATA",
            "email": "jenningsherrera@quonata.com",
            "phone": "+1 (966) 479-2268",
            "address": "185 Bristol Street, Townsend, Guam, 7028"
        },
        {
            "id": "5dc272cc05239c986b882b58",
            "name": "Wall Juarez",
            "company": "KROG",
            "email": "walljuarez@krog.com",
            "phone": "+1 (872) 525-2645",
            "address": "834 Chapel Street, Blairstown, Texas, 6221"
        },
        {
            "id": "5dc272cc2c55ec6058371d8a",
            "name": "Tami Hernandez",
            "company": "ISOLOGICA",
            "email": "tamihernandez@isologica.com",
            "phone": "+1 (969) 557-3191",
            "address": "680 Bergen Street, Glenshaw, New Jersey, 659"
        },
        {
            "id": "5dc272ccec180f2ad2f0841c",
            "name": "Ola Dotson",
            "company": "HELIXO",
            "email": "oladotson@helixo.com",
            "phone": "+1 (867) 403-3633",
            "address": "831 Rockwell Place, Rodanthe, Palau, 5267"
        },
        {
            "id": "5dc272ccf89325fb71a7e84f",
            "name": "Riley Santos",
            "company": "AUSTECH",
            "email": "rileysantos@austech.com",
            "phone": "+1 (936) 556-2123",
            "address": "352 Preston Court, Bannock, Georgia, 9781"
        },
        {
            "id": "5dc272cc59651d3c1d6c735b",
            "name": "Raymond Velazquez",
            "company": "PLEXIA",
            "email": "raymondvelazquez@plexia.com",
            "phone": "+1 (815) 447-3166",
            "address": "216 Troy Avenue, Hollymead, Pennsylvania, 3161"
        },
        {
            "id": "5dc272cc3f8affa746c0b397",
            "name": "Ursula Foley",
            "company": "OATFARM",
            "email": "ursulafoley@oatfarm.com",
            "phone": "+1 (811) 576-2796",
            "address": "191 Broadway , Grazierville, Ohio, 8309"
        },
        {
            "id": "5dc272ccc2b16a0d077c50b7",
            "name": "Rachel Whitaker",
            "company": "SENTIA",
            "email": "rachelwhitaker@sentia.com",
            "phone": "+1 (991) 455-3665",
            "address": "660 Veronica Place, Frizzleburg, Federated States Of Micronesia, 4824"
        },
        {
            "id": "5dc272ccd8e368899acde10c",
            "name": "Alford Mann",
            "company": "SUREPLEX",
            "email": "alfordmann@sureplex.com",
            "phone": "+1 (953) 466-2957",
            "address": "543 Ashland Place, Jardine, North Carolina, 8805"
        },
        {
            "id": "5dc272cc72ef28eadc14b94f",
            "name": "Chelsea Gamble",
            "company": "YURTURE",
            "email": "chelseagamble@yurture.com",
            "phone": "+1 (806) 426-2794",
            "address": "721 Pulaski Street, Stewartville, Iowa, 9808"
        },
        {
            "id": "5dc272cca71608bf52584ff1",
            "name": "Perry Lambert",
            "company": "FISHLAND",
            "email": "perrylambert@fishland.com",
            "phone": "+1 (825) 420-2154",
            "address": "527 Kent Avenue, Sims, Montana, 1449"
        },
        {
            "id": "5dc272cc1da110849abb1cf7",
            "name": "Franklin French",
            "company": "MENBRAIN",
            "email": "franklinfrench@menbrain.com",
            "phone": "+1 (973) 494-2140",
            "address": "551 Juliana Place, Kilbourne, District Of Columbia, 9940"
        },
        {
            "id": "5dc272ccd36f9ca7731645a1",
            "name": "Carmen Parsons",
            "company": "AVENETRO",
            "email": "carmenparsons@avenetro.com",
            "phone": "+1 (822) 532-3419",
            "address": "687 Kenilworth Place, Dola, Washington, 3274"
        },
        {
            "id": "5dc272cc0b8ef2854b843f24",
            "name": "Madge Shannon",
            "company": "JASPER",
            "email": "madgeshannon@jasper.com",
            "phone": "+1 (911) 421-2115",
            "address": "355 Navy Walk, Blandburg, West Virginia, 7724"
        },
        {
            "id": "5dc272cca83a1908c070625c",
            "name": "Welch Pitts",
            "company": "UTARIAN",
            "email": "welchpitts@utarian.com",
            "phone": "+1 (962) 447-3218",
            "address": "989 Claver Place, Topaz, Illinois, 3117"
        },
        {
            "id": "5dc272ccf3fe87cac9388666",
            "name": "Hall Booth",
            "company": "ARTWORLDS",
            "email": "hallbooth@artworlds.com",
            "phone": "+1 (914) 541-2593",
            "address": "763 Fair Street, Gardners, Oregon, 3497"
        },
        {
            "id": "5dc272ccbe124d2d2b51ba19",
            "name": "Trudy Ball",
            "company": "ETERNIS",
            "email": "trudyball@eternis.com",
            "phone": "+1 (952) 529-3521",
            "address": "579 Euclid Avenue, Ryderwood, Indiana, 7399"
        },
        {
            "id": "5dc272ccdfa7a0448c48a254",
            "name": "Rhodes Wright",
            "company": "XPLOR",
            "email": "rhodeswright@xplor.com",
            "phone": "+1 (836) 523-3762",
            "address": "352 Charles Place, Garnet, Marshall Islands, 5482"
        },
        {
            "id": "5dc272cc867f25444a1f9752",
            "name": "Dianna Cox",
            "company": "GEOFARM",
            "email": "diannacox@geofarm.com",
            "phone": "+1 (968) 595-2870",
            "address": "602 Kiely Place, Verdi, South Carolina, 7223"
        },
        {
            "id": "5dc272ccf2089c99d555d2d5",
            "name": "Lowery Wiggins",
            "company": "ANDERSHUN",
            "email": "lowerywiggins@andershun.com",
            "phone": "+1 (819) 471-2451",
            "address": "662 Central Avenue, Fairmount, Tennessee, 7389"
        },
        {
            "id": "5dc272cc127bf7cbee4bc592",
            "name": "Glenna Stevens",
            "company": "ZOINAGE",
            "email": "glennastevens@zoinage.com",
            "phone": "+1 (830) 503-2519",
            "address": "167 Bayview Avenue, Cumberland, Arizona, 4801"
        },
        {
            "id": "5dc272cc204303a012272782",
            "name": "Edith Hayden",
            "company": "SURELOGIC",
            "email": "edithhayden@surelogic.com",
            "phone": "+1 (870) 472-3376",
            "address": "650 Jewel Street, Adamstown, Northern Mariana Islands, 6627"
        },
        {
            "id": "5dc272cc0536f69f6b5fcb07",
            "name": "Kristine Lang",
            "company": "EXOPLODE",
            "email": "kristinelang@exoplode.com",
            "phone": "+1 (930) 505-2083",
            "address": "310 Sumpter Street, Courtland, New Mexico, 9093"
        },
        {
            "id": "5dc272cc180eb206c8c84bc8",
            "name": "Lynn Franco",
            "company": "ACRUEX",
            "email": "lynnfranco@acruex.com",
            "phone": "+1 (879) 563-2027",
            "address": "789 Fountain Avenue, Brecon, Mississippi, 4782"
        },
        {
            "id": "5dc272cc92dcb2668227e191",
            "name": "Laverne Holman",
            "company": "ZYTRAX",
            "email": "laverneholman@zytrax.com",
            "phone": "+1 (928) 495-2682",
            "address": "391 Veranda Place, Naomi, Maryland, 7848"
        },
        {
            "id": "5dc272cc8801eb7ea9d3488f",
            "name": "Francisca Flowers",
            "company": "ZOID",
            "email": "franciscaflowers@zoid.com",
            "phone": "+1 (828) 444-3558",
            "address": "984 Friel Place, Sussex, Kansas, 7715"
        },
        {
            "id": "5dc272cc565f98c19a49233b",
            "name": "Lynn Duffy",
            "company": "PAWNAGRA",
            "email": "lynnduffy@pawnagra.com",
            "phone": "+1 (878) 402-3900",
            "address": "760 Visitation Place, Canoochee, Florida, 8056"
        },
        {
            "id": "5dc272cc4fe4d2ff7ce1e616",
            "name": "Callahan Crosby",
            "company": "VIXO",
            "email": "callahancrosby@vixo.com",
            "phone": "+1 (951) 452-3761",
            "address": "319 Rochester Avenue, Tilleda, Vermont, 7708"
        },
        {
            "id": "5dc272cce7148081d82c8cdd",
            "name": "Atkinson Solomon",
            "company": "OPPORTECH",
            "email": "atkinsonsolomon@opportech.com",
            "phone": "+1 (919) 511-2241",
            "address": "542 Evans Street, Maplewood, Puerto Rico, 7509"
        },
        {
            "id": "5dc272cc70d74dbc190fe8be",
            "name": "Vaughn Pearson",
            "company": "NORSUL",
            "email": "vaughnpearson@norsul.com",
            "phone": "+1 (907) 570-3782",
            "address": "745 Noble Street, Campo, Nebraska, 3376"
        },
        {
            "id": "5dc272cc35df750ee6992b24",
            "name": "Brittany Palmer",
            "company": "RONELON",
            "email": "brittanypalmer@ronelon.com",
            "phone": "+1 (803) 427-2862",
            "address": "722 Ralph Avenue, Lowgap, New Hampshire, 9587"
        },
        {
            "id": "5dc272cc602c477342bb5112",
            "name": "Wyatt Haley",
            "company": "EXOBLUE",
            "email": "wyatthaley@exoblue.com",
            "phone": "+1 (897) 533-2454",
            "address": "699 Townsend Street, Manila, Virgin Islands, 9429"
        },
        {
            "id": "5dc272cc87cb5f1299b87160",
            "name": "Cote Mcguire",
            "company": "HYDROCOM",
            "email": "cotemcguire@hydrocom.com",
            "phone": "+1 (924) 514-3573",
            "address": "895 Kensington Street, Enetai, Idaho, 3939"
        },
        {
            "id": "5dc272cceffc739771eb0cdb",
            "name": "Hazel Dalton",
            "company": "SUPPORTAL",
            "email": "hazeldalton@supportal.com",
            "phone": "+1 (928) 404-2164",
            "address": "693 Forrest Street, Konterra, Delaware, 9407"
        },
        {
            "id": "5dc272cc6c86bb0ae048b244",
            "name": "Allie Shepherd",
            "company": "SARASONIC",
            "email": "allieshepherd@sarasonic.com",
            "phone": "+1 (958) 543-2295",
            "address": "737 Lynch Street, Crawfordsville, New York, 8349"
        },
        {
            "id": "5dc272ccc7b47e5b26bf452a",
            "name": "Gomez Cortez",
            "company": "VALPREAL",
            "email": "gomezcortez@valpreal.com",
            "phone": "+1 (919) 539-3941",
            "address": "709 Irving Street, Fowlerville, Arkansas, 9629"
        },
        {
            "id": "5dc272ccb2a384e0e0556abc",
            "name": "Holt Benson",
            "company": "PHEAST",
            "email": "holtbenson@pheast.com",
            "phone": "+1 (848) 587-2230",
            "address": "890 Irving Place, Bynum, South Dakota, 2018"
        },
        {
            "id": "5dc272cc29e117e6965d7af2",
            "name": "Conner Collins",
            "company": "ANIMALIA",
            "email": "connercollins@animalia.com",
            "phone": "+1 (824) 423-3482",
            "address": "841 Clove Road, Eastmont, Utah, 7527"
        },
        {
            "id": "5dc272ccfa741e507d43c7cb",
            "name": "Daniels Garrison",
            "company": "QUINEX",
            "email": "danielsgarrison@quinex.com",
            "phone": "+1 (964) 462-3286",
            "address": "612 Strickland Avenue, Longbranch, Maine, 4542"
        },
        {
            "id": "5dc272cc26644300f392b780",
            "name": "Marjorie Glover",
            "company": "KINETICA",
            "email": "marjorieglover@kinetica.com",
            "phone": "+1 (926) 434-2278",
            "address": "242 Canda Avenue, Kimmell, Alaska, 8210"
        },
        {
            "id": "5dc272cc0eae8bd4b499ec1e",
            "name": "Joanna Delacruz",
            "company": "ZENSOR",
            "email": "joannadelacruz@zensor.com",
            "phone": "+1 (981) 549-2815",
            "address": "498 Harkness Avenue, Century, North Dakota, 823"
        },
        {
            "id": "5dc272cc443668313de89a7c",
            "name": "Buchanan William",
            "company": "ENTOGROK",
            "email": "buchananwilliam@entogrok.com",
            "phone": "+1 (924) 453-2528",
            "address": "440 Chestnut Street, Sharon, Alabama, 555"
        },
        {
            "id": "5dc272cc2f8956e177e72983",
            "name": "Good Bird",
            "company": "OBONES",
            "email": "goodbird@obones.com",
            "phone": "+1 (881) 416-3447",
            "address": "914 Goodwin Place, Needmore, Nevada, 1643"
        },
        {
            "id": "5dc272cc8d39277be6b909a8",
            "name": "Vance Wade",
            "company": "GEEKULAR",
            "email": "vancewade@geekular.com",
            "phone": "+1 (845) 417-2201",
            "address": "259 Bay Street, Duryea, Rhode Island, 224"
        },
        {
            "id": "5dc272cc09daea43e7f0bf22",
            "name": "Brandy Bass",
            "company": "BOILCAT",
            "email": "brandybass@boilcat.com",
            "phone": "+1 (952) 546-2645",
            "address": "111 Loring Avenue, Emison, Colorado, 2947"
        },
        {
            "id": "5dc272ccb6aa6c8dab46ad6a",
            "name": "Barrera Fischer",
            "company": "XUMONK",
            "email": "barrerafischer@xumonk.com",
            "phone": "+1 (970) 558-3546",
            "address": "303 Ferris Street, Loomis, Massachusetts, 5722"
        },
        {
            "id": "5dc272ccbda7ca09caa57483",
            "name": "Tracey Figueroa",
            "company": "PLASMOX",
            "email": "traceyfigueroa@plasmox.com",
            "phone": "+1 (811) 414-3400",
            "address": "690 Batchelder Street, Klondike, Wyoming, 3995"
        },
        {
            "id": "5dc272cc6fa98052f0bb1529",
            "name": "Stafford Mcleod",
            "company": "COMSTRUCT",
            "email": "staffordmcleod@comstruct.com",
            "phone": "+1 (825) 525-3555",
            "address": "237 Crooke Avenue, Sutton, Kentucky, 230"
        },
        {
            "id": "5dc272cc030df99cdef51ef8",
            "name": "Cooke Wolfe",
            "company": "GRONK",
            "email": "cookewolfe@gronk.com",
            "phone": "+1 (908) 588-2298",
            "address": "877 Hanover Place, Fannett, Connecticut, 9126"
        },
        {
            "id": "5dc272cc770fc65cdad7581c",
            "name": "Janis Pena",
            "company": "BIOHAB",
            "email": "janispena@biohab.com",
            "phone": "+1 (801) 424-2729",
            "address": "279 Tiffany Place, Fostoria, California, 3610"
        },
        {
            "id": "5dc272cca5ee69f190e3750c",
            "name": "Jannie Wise",
            "company": "ZOLARITY",
            "email": "janniewise@zolarity.com",
            "phone": "+1 (961) 485-3617",
            "address": "327 Diamond Street, Waterview, Hawaii, 3794"
        },
        {
            "id": "5dc272cc4f77a6c146502fdf",
            "name": "Summer Jenkins",
            "company": "UPLINX",
            "email": "summerjenkins@uplinx.com",
            "phone": "+1 (933) 481-3044",
            "address": "818 Elliott Walk, Fingerville, Minnesota, 4647"
        },
        {
            "id": "5dc272cc8817c8ff5980797c",
            "name": "Elise Williams",
            "company": "DUFLEX",
            "email": "elisewilliams@duflex.com",
            "phone": "+1 (978) 516-3928",
            "address": "853 Applegate Court, Martinez, Virginia, 9149"
        },
        {
            "id": "5dc272cc0ad0a912c2e998e4",
            "name": "Williamson Meadows",
            "company": "OMNIGOG",
            "email": "williamsonmeadows@omnigog.com",
            "phone": "+1 (909) 405-2523",
            "address": "317 Baycliff Terrace, Emory, Wisconsin, 199"
        },
        {
            "id": "5dc272cc40080f3cc4cc69c4",
            "name": "Sadie Mckee",
            "company": "ZAYA",
            "email": "sadiemckee@zaya.com",
            "phone": "+1 (977) 464-2659",
            "address": "801 Lombardy Street, Bodega, Missouri, 8265"
        }
    ]

const Controllerteam = {
    get:(req,res)=>{
        res.send( teamdata);
    }

};

module.exports = Controllerteam;



