app.service("UserService", ["$rootScope", "$http", "toArrayFilter", "$timeout", function ($rootScope, $http, toArrayFilter, $timeout) {

    var serv = this;

    // Moch data
    var users = [
        {
            "id": "4d4a9c51-7b43-4fed-b9e4-57ce1b259687",
            "name": "Daimler AG",
            "country": "DE",
            "ociCustomerNumber": "12345678",
            "username": "daimler@oci-conrad.de",
            "password": "test123",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Wilfried",
                    "lastName": "Müller",
                    "function": "Strategischer Einkäufer",
                    "telefon": "+497543304253",
                    "email": "wilfried.mueller@bmw.de"
                },
                "sales": {
                    "responsibleInternal": "Andrea Wagner",
                    "responsibleExternal": "Holm Lehmann",
                    "keycode": "daimler",
                    "serviceProvider": "Onventis",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "Generell ist Herr Müller ein freundlicher und angenehmer Ansprechpartner.",
                    "files": {
                        "0": ""
                    }
                }
            }
        },
        {
            "id": "747d4e79-1839-43e6-814e-eb4de24ba2e6",
            "name": "Edgeclub",
            "country": "CN",
            "ociCustomerNumber": 38862590,
            "username": "pkitt0@networkadvertising.org",
            "password": "aDEHki9CHhge",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Yè",
                    "lastName": "Kitt",
                    "function": "Product Management",
                    "telefon": "+7161971291",
                    "email": "pkitt0@hp.com"
                },
                "sales": {
                    "responsibleInternal": "Juliana Kitt",
                    "responsibleExternal": "Perry Kitt",
                    "keycode": "edgeclub",
                    "serviceProvider": "photospace",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "aenean lectus. pellentesque eget nunc. donec quis orci eget orci vehicula condimentum.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/240x139.bmp/cc0000/ffffff"
        }, {
            "id": "51454186-91d4-4079-96d0-867dc11e2520",
            "name": "Flipstorm",
            "country": "RU",
            "ociCustomerNumber": 33891616,
            "username": "lforce1@home.pl",
            "password": "SIVjdUW2",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Pål",
                    "lastName": "Force",
                    "function": "Product Management",
                    "telefon": "+0694189126",
                    "email": "lforce1@sogou.com"
                },
                "sales": {
                    "responsibleInternal": "Aretha Force",
                    "responsibleExternal": "Lowe Force",
                    "keycode": "flipstorm",
                    "serviceProvider": "lazz",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; mauris viverra diam vitae quam. suspendisse potenti.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/146x243.bmp/cc0000/ffffff"
        }, {
            "id": "d9fcce82-395e-4d32-b5b6-94d3cd939f13",
            "name": "Eimbee",
            "country": "JP",
            "ociCustomerNumber": 12933210,
            "username": "shabard2@github.com",
            "password": "Tgzutu9d5R",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Åsa",
                    "lastName": "Habard",
                    "function": "Accounting",
                    "telefon": "+9441121313",
                    "email": "shabard2@hc360.com"
                },
                "sales": {
                    "responsibleInternal": "Elnore Habard",
                    "responsibleExternal": "Salomon Habard",
                    "keycode": "eimbee",
                    "serviceProvider": "centimia",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "pellentesque at nulla. suspendisse potenti. cras in purus eu magna vulputate luctus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/184x184.bmp/5fa2dd/ffffff"
        }, {
            "id": "e1701347-9046-4533-ae03-c6f5f9ec53b7",
            "name": "Gabtype",
            "country": "ZA",
            "ociCustomerNumber": 72689057,
            "username": "pmagee3@dailymail.co.uk",
            "password": "S5KAm9ixF",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Anaé",
                    "lastName": "Magee",
                    "function": "Engineering",
                    "telefon": "+7500516158",
                    "email": "pmagee3@wikipedia.org"
                },
                "sales": {
                    "responsibleInternal": "Susy Magee",
                    "responsibleExternal": "Peyter Magee",
                    "keycode": "gabtype",
                    "serviceProvider": "vinte",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "curabitur in libero ut massa volutpat convallis. morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. maecenas pulvinar lobortis est.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/125x217.jpg/dddddd/000000"
        }, {
            "id": "4078780e-0568-4b05-83a0-6f6243806484",
            "name": "Mybuzz",
            "country": "CN",
            "ociCustomerNumber": 39448849,
            "username": "ckemetz4@multiply.com",
            "password": "LVHCmwnx",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Anaé",
                    "lastName": "Kemetz",
                    "function": "Services",
                    "telefon": "+6645794746",
                    "email": "ckemetz4@home.pl"
                },
                "sales": {
                    "responsibleInternal": "Vanya Kemetz",
                    "responsibleExternal": "Clemence Kemetz",
                    "keycode": "mybuzz",
                    "serviceProvider": "voolith",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed ante. vivamus tortor. duis mattis egestas metus.\n\naenean fermentum. donec ut mauris eget massa tempor convallis. nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/201x106.png/ff4444/ffffff"
        }, {
            "id": "6e109055-1a38-42e6-b5b8-74ca4fed24f1",
            "name": "Jabberstorm",
            "country": "CN",
            "ociCustomerNumber": 49299316,
            "username": "bpatters5@bandcamp.com",
            "password": "xIPwEXbk9",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Liè",
                    "lastName": "Patters",
                    "function": "Accounting",
                    "telefon": "+2804324139",
                    "email": "bpatters5@economist.com"
                },
                "sales": {
                    "responsibleInternal": "Martha Patters",
                    "responsibleExternal": "Babb Patters",
                    "keycode": "jabberstorm",
                    "serviceProvider": "meembee",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "praesent blandit. nam nulla. integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/166x116.bmp/5fa2dd/ffffff"
        }, {
            "id": "828de5b6-1b3d-4819-a6c2-3801df35272f",
            "name": "Photobug",
            "country": "ID",
            "ociCustomerNumber": 30839280,
            "username": "fsimmank6@alibaba.com",
            "password": "FpF8D8i",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Amélie",
                    "lastName": "Simmank",
                    "function": "Legal",
                    "telefon": "+3824048554",
                    "email": "fsimmank6@hao123.com"
                },
                "sales": {
                    "responsibleInternal": "Eugenie Simmank",
                    "responsibleExternal": "Federica Simmank",
                    "keycode": "photobug",
                    "serviceProvider": "oyondu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "etiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/207x176.jpg/ff4444/ffffff"
        }, {
            "id": "4f46b7ea-3e03-4f1b-8b69-8672fdf1133b",
            "name": "Wikivu",
            "country": "TH",
            "ociCustomerNumber": 69361995,
            "username": "aforri7@baidu.com",
            "password": "3YXFggRYcN",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Aimée",
                    "lastName": "Forri",
                    "function": "Services",
                    "telefon": "+1139349320",
                    "email": "aforri7@alibaba.com"
                },
                "sales": {
                    "responsibleInternal": "Laurie Forri",
                    "responsibleExternal": "Arri Forri",
                    "keycode": "wikivu",
                    "serviceProvider": "kazio",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "proin eu mi. nulla ac enim. in tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nduis aliquam convallis nunc. proin at turpis a pede posuere nonummy. integer non velit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/164x101.jpg/ff4444/ffffff"
        }, {
            "id": "93ab71de-2c45-4276-9fb4-0e41b8c2b280",
            "name": "Kwilith",
            "country": "CN",
            "ociCustomerNumber": 83216550,
            "username": "tsonghurst8@storify.com",
            "password": "EAmwteTrGk5d",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Adélie",
                    "lastName": "Songhurst",
                    "function": "Support",
                    "telefon": "+0334854807",
                    "email": "tsonghurst8@nydailynews.com"
                },
                "sales": {
                    "responsibleInternal": "Anderson Songhurst",
                    "responsibleExternal": "Tobiah Songhurst",
                    "keycode": "kwilith",
                    "serviceProvider": "oyonder",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "praesent blandit. nam nulla. integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nmorbi porttitor lorem id ligula. suspendisse ornare consequat lectus. in est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nfusce consequat. nulla nisl. nunc nisl.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/166x122.jpg/cc0000/ffffff"
        }, {
            "id": "e8387ec2-45dc-4ce6-bbd7-be5676d8c4b7",
            "name": "Trunyx",
            "country": "PH",
            "ociCustomerNumber": 72609330,
            "username": "mtwopenny9@ca.gov",
            "password": "bXdgdybcC3FG",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Almérinda",
                    "lastName": "Twopenny",
                    "function": "Human Resources",
                    "telefon": "+2498639614",
                    "email": "mtwopenny9@washingtonpost.com"
                },
                "sales": {
                    "responsibleInternal": "Gav Twopenny",
                    "responsibleExternal": "Melodee Twopenny",
                    "keycode": "trunyx",
                    "serviceProvider": "linkbridge",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis bibendum. morbi non quam nec dui luctus rutrum. nulla tellus.\n\nin sagittis dui vel nisl. duis ac nibh. fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nsuspendisse potenti. in eleifend quam a odio. in hac habitasse platea dictumst.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/225x214.png/ff4444/ffffff"
        }, {
            "id": "20a049a6-64d4-4eb0-97e4-fea031171252",
            "name": "Eidel",
            "country": "CN",
            "ociCustomerNumber": 62550856,
            "username": "cmacbeya@nhs.uk",
            "password": "4tDUjf",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Bécassine",
                    "lastName": "MacBey",
                    "function": "Product Management",
                    "telefon": "+8845693517",
                    "email": "cmacbeya@google.nl"
                },
                "sales": {
                    "responsibleInternal": "Dolorita MacBey",
                    "responsibleExternal": "Corrina MacBey",
                    "keycode": "eidel",
                    "serviceProvider": "yabox",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "praesent blandit. nam nulla. integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nmorbi porttitor lorem id ligula. suspendisse ornare consequat lectus. in est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nfusce consequat. nulla nisl. nunc nisl.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/157x127.jpg/dddddd/000000"
        }, {
            "id": "b177fd08-b160-4db3-9834-8d6988563f5a",
            "name": "Jaloo",
            "country": "ID",
            "ociCustomerNumber": 83252866,
            "username": "walvesb@nyu.edu",
            "password": "mxOu9AHZ",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Pélagie",
                    "lastName": "Alves",
                    "function": "Accounting",
                    "telefon": "+1397502196",
                    "email": "walvesb@google.com"
                },
                "sales": {
                    "responsibleInternal": "Loraine Alves",
                    "responsibleExternal": "Weston Alves",
                    "keycode": "jaloo",
                    "serviceProvider": "jaxworks",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "etiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/120x105.jpg/cc0000/ffffff"
        }, {
            "id": "6e41dcae-b216-4f39-9d67-72376a82bd28",
            "name": "Photobug",
            "country": "MX",
            "ociCustomerNumber": 71619730,
            "username": "clovedayc@latimes.com",
            "password": "JRsqBveUb6",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Angèle",
                    "lastName": "Loveday",
                    "function": "Business Development",
                    "telefon": "+4270388524",
                    "email": "clovedayc@scribd.com"
                },
                "sales": {
                    "responsibleInternal": "Riley Loveday",
                    "responsibleExternal": "Cristy Loveday",
                    "keycode": "photobug",
                    "serviceProvider": "rhynyx",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "phasellus in felis. donec semper sapien a libero. nam dui.\n\nproin leo odio, porttitor id, consequat in, consequat ut, nulla. sed accumsan felis. ut at dolor quis odio consequat varius.\n\ninteger ac leo. pellentesque ultrices mattis odio. donec vitae nisi.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/202x195.png/ff4444/ffffff"
        }, {
            "id": "370b9341-b165-448f-a530-9549557cf8e5",
            "name": "Buzzbean",
            "country": "MM",
            "ociCustomerNumber": 48305377,
            "username": "cpawlynd@123-reg.co.uk",
            "password": "BQ8coQC",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Dorothée",
                    "lastName": "Pawlyn",
                    "function": "Marketing",
                    "telefon": "+5965045823",
                    "email": "cpawlynd@mtv.com"
                },
                "sales": {
                    "responsibleInternal": "Dalia Pawlyn",
                    "responsibleExternal": "Catherin Pawlyn",
                    "keycode": "buzzbean",
                    "serviceProvider": "photolist",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "phasellus in felis. donec semper sapien a libero. nam dui.\n\nproin leo odio, porttitor id, consequat in, consequat ut, nulla. sed accumsan felis. ut at dolor quis odio consequat varius.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/195x153.png/dddddd/000000"
        }, {
            "id": "8cce545b-5dcc-4534-9e40-046105f64d22",
            "name": "Zava",
            "country": "SE",
            "ociCustomerNumber": 73447271,
            "username": "cbridgestocke@bravesites.com",
            "password": "Ksv9BaI",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Almérinda",
                    "lastName": "Bridgestock",
                    "function": "Sales",
                    "telefon": "+3066219726",
                    "email": "cbridgestocke@geocities.com"
                },
                "sales": {
                    "responsibleInternal": "Arline Bridgestock",
                    "responsibleExternal": "Celene Bridgestock",
                    "keycode": "zava",
                    "serviceProvider": "linkbridge",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "pellentesque at nulla. suspendisse potenti. cras in purus eu magna vulputate luctus.\n\ncum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. vivamus vestibulum sagittis sapien. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/156x131.png/ff4444/ffffff"
        }, {
            "id": "15275c4f-be17-4500-aee1-18c41fc61416",
            "name": "Gabvine",
            "country": "PT",
            "ociCustomerNumber": 99824890,
            "username": "gskatesf@spotify.com",
            "password": "DQzWt3b0E",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Aimée",
                    "lastName": "Skates",
                    "function": "Product Management",
                    "telefon": "+9591952218",
                    "email": "gskatesf@webnode.com"
                },
                "sales": {
                    "responsibleInternal": "Lulita Skates",
                    "responsibleExternal": "Gladi Skates",
                    "keycode": "gabvine",
                    "serviceProvider": "eamia",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cras non velit nec nisi vulputate nonummy. maecenas tincidunt lacus at velit. vivamus vel nulla eget eros elementum pellentesque.\n\nquisque porta volutpat erat. quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. nunc purus.\n\nphasellus in felis. donec semper sapien a libero. nam dui.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/119x247.png/5fa2dd/ffffff"
        }, {
            "id": "ff70907f-fc95-4143-bc27-0ce73525cd49",
            "name": "Trudoo",
            "country": "BR",
            "ociCustomerNumber": 58495818,
            "username": "sdeg@1und1.de",
            "password": "53yYjX1",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "André",
                    "lastName": "De Freyne",
                    "function": "Research and Development",
                    "telefon": "+6698315375",
                    "email": "sdeg@360.cn"
                },
                "sales": {
                    "responsibleInternal": "Josias De Freyne",
                    "responsibleExternal": "Shawn De Freyne",
                    "keycode": "trudoo",
                    "serviceProvider": "jayo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis bibendum. morbi non quam nec dui luctus rutrum. nulla tellus.\n\nin sagittis dui vel nisl. duis ac nibh. fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nsuspendisse potenti. in eleifend quam a odio. in hac habitasse platea dictumst.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/140x112.bmp/5fa2dd/ffffff"
        }, {
            "id": "76e08acc-c719-4ea9-9666-3cbe58dec831",
            "name": "Realmix",
            "country": "MA",
            "ociCustomerNumber": 30195483,
            "username": "kwrankmoreh@census.gov",
            "password": "P85tW3",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mégane",
                    "lastName": "Wrankmore",
                    "function": "Sales",
                    "telefon": "+6094364752",
                    "email": "kwrankmoreh@networksolutions.com"
                },
                "sales": {
                    "responsibleInternal": "Rochette Wrankmore",
                    "responsibleExternal": "Kelvin Wrankmore",
                    "keycode": "realmix",
                    "serviceProvider": "realfire",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. pellentesque viverra pede ac diam. cras pellentesque volutpat dui.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/213x239.png/ff4444/ffffff"
        }, {
            "id": "f3b451b4-b55f-41f4-9e53-665e5ebe9650",
            "name": "Skiba",
            "country": "JP",
            "ociCustomerNumber": 77991671,
            "username": "papfeli@sakura.ne.jp",
            "password": "apF1rXtj5Uq",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Magdalène",
                    "lastName": "Apfel",
                    "function": "Business Development",
                    "telefon": "+5209535592",
                    "email": "papfeli@pinterest.com"
                },
                "sales": {
                    "responsibleInternal": "Tamar Apfel",
                    "responsibleExternal": "Peterus Apfel",
                    "keycode": "skiba",
                    "serviceProvider": "topicstorm",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "curabitur gravida nisi at nibh. in hac habitasse platea dictumst. aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\ninteger tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/188x164.jpg/dddddd/000000"
        }, {
            "id": "35822401-928d-4e4f-897f-2f8ed93af58f",
            "name": "Zooveo",
            "country": "BR",
            "ociCustomerNumber": 17921047,
            "username": "rbrunsdonj@mozilla.com",
            "password": "ibxwC9Iw",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Dorothée",
                    "lastName": "Brunsdon",
                    "function": "Services",
                    "telefon": "+7317230186",
                    "email": "rbrunsdonj@dailymail.co.uk"
                },
                "sales": {
                    "responsibleInternal": "Gery Brunsdon",
                    "responsibleExternal": "Roslyn Brunsdon",
                    "keycode": "zooveo",
                    "serviceProvider": "eadel",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "quisque porta volutpat erat. quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. nunc purus.\n\nphasellus in felis. donec semper sapien a libero. nam dui.\n\nproin leo odio, porttitor id, consequat in, consequat ut, nulla. sed accumsan felis. ut at dolor quis odio consequat varius.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/222x146.jpg/cc0000/ffffff"
        }, {
            "id": "728f1934-6449-4beb-af1b-13b98a4d6dd3",
            "name": "Photojam",
            "country": "BR",
            "ociCustomerNumber": 38736490,
            "username": "rspybyk@edublogs.org",
            "password": "cR2JnOwG",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Pål",
                    "lastName": "Spyby",
                    "function": "Human Resources",
                    "telefon": "+0651214647",
                    "email": "rspybyk@techcrunch.com"
                },
                "sales": {
                    "responsibleInternal": "Mohandas Spyby",
                    "responsibleExternal": "Rennie Spyby",
                    "keycode": "photojam",
                    "serviceProvider": "camimbo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nullam porttitor lacus at turpis. donec posuere metus vitae ipsum. aliquam non mauris.\n\nmorbi non lectus. aliquam sit amet diam in magna bibendum imperdiet. nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nfusce posuere felis sed lacus. morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. nunc rhoncus dui vel sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/143x189.png/cc0000/ffffff"
        }, {
            "id": "4b722747-64f1-482a-a56b-4ce667f4998a",
            "name": "Aivee",
            "country": "VG",
            "ociCustomerNumber": 95162922,
            "username": "castberyl@360.cn",
            "password": "Bm1MoWcI",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Simplifiés",
                    "lastName": "Astbery",
                    "function": "Legal",
                    "telefon": "+9111967193",
                    "email": "castberyl@skype.com"
                },
                "sales": {
                    "responsibleInternal": "Gabriella Astbery",
                    "responsibleExternal": "Clare Astbery",
                    "keycode": "aivee",
                    "serviceProvider": "rhyloo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. integer ac neque.\n\nduis bibendum. morbi non quam nec dui luctus rutrum. nulla tellus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/135x237.png/5fa2dd/ffffff"
        }, {
            "id": "fc02814c-f738-40c1-ab45-3fd0764b951c",
            "name": "Npath",
            "country": "ID",
            "ociCustomerNumber": 48991384,
            "username": "bstonehewerm@miitbeian.gov.cn",
            "password": "jTwmRczS",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Annotés",
                    "lastName": "Stonehewer",
                    "function": "Services",
                    "telefon": "+1202182482",
                    "email": "bstonehewerm@samsung.com"
                },
                "sales": {
                    "responsibleInternal": "Jillie Stonehewer",
                    "responsibleExternal": "Bartram Stonehewer",
                    "keycode": "npath",
                    "serviceProvider": "flashspan",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed sagittis. nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. nullam molestie nibh in lectus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/108x150.bmp/ff4444/ffffff"
        }, {
            "id": "6ae7627e-343f-4dce-8cc3-24b17e43974c",
            "name": "Shuffledrive",
            "country": "MW",
            "ociCustomerNumber": 38280196,
            "username": "cdowningn@hhs.gov",
            "password": "ZkWxt3s1CJT",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Cléopatre",
                    "lastName": "Downing",
                    "function": "Support",
                    "telefon": "+2756378047",
                    "email": "cdowningn@ibm.com"
                },
                "sales": {
                    "responsibleInternal": "Dewey Downing",
                    "responsibleExternal": "Caspar Downing",
                    "keycode": "shuffledrive",
                    "serviceProvider": "livefish",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; mauris viverra diam vitae quam. suspendisse potenti.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/169x142.bmp/dddddd/000000"
        }, {
            "id": "c738aa39-ac60-456d-9712-322cb22cd403",
            "name": "Flashpoint",
            "country": "CN",
            "ociCustomerNumber": 55233803,
            "username": "sbunnero@businesswire.com",
            "password": "n2WXLOjXU",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mélinda",
                    "lastName": "Bunner",
                    "function": "Legal",
                    "telefon": "+9333180953",
                    "email": "sbunnero@ucoz.ru"
                },
                "sales": {
                    "responsibleInternal": "Alwin Bunner",
                    "responsibleExternal": "Sandy Bunner",
                    "keycode": "flashpoint",
                    "serviceProvider": "bluejam",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "morbi porttitor lorem id ligula. suspendisse ornare consequat lectus. in est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nfusce consequat. nulla nisl. nunc nisl.\n\nduis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. donec dapibus. duis at velit eu est congue elementum.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/127x102.png/5fa2dd/ffffff"
        }, {
            "id": "c1f28a77-0459-4fb6-bc6b-9f305b3e0d19",
            "name": "Mita",
            "country": "ID",
            "ociCustomerNumber": 93789302,
            "username": "alarvinp@bloomberg.com",
            "password": "35NZqPxrh",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Géraldine",
                    "lastName": "Larvin",
                    "function": "Product Management",
                    "telefon": "+9191662572",
                    "email": "alarvinp@netvibes.com"
                },
                "sales": {
                    "responsibleInternal": "Ulrich Larvin",
                    "responsibleExternal": "Anica Larvin",
                    "keycode": "mita",
                    "serviceProvider": "skibox",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "vestibulum quam sapien, varius ut, blandit non, interdum in, ante. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; duis faucibus accumsan odio. curabitur convallis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/137x143.bmp/cc0000/ffffff"
        }, {
            "id": "567341ad-0264-42df-9c7b-4c6a53d57077",
            "name": "Oyondu",
            "country": "ID",
            "ociCustomerNumber": 59767793,
            "username": "wverbrugghenq@yolasite.com",
            "password": "VyytLUcaEOLH",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Léane",
                    "lastName": "Verbrugghen",
                    "function": "Legal",
                    "telefon": "+7814013893",
                    "email": "wverbrugghenq@marriott.com"
                },
                "sales": {
                    "responsibleInternal": "Bryan Verbrugghen",
                    "responsibleExternal": "Wilfred Verbrugghen",
                    "keycode": "oyondu",
                    "serviceProvider": "innoz",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis consequat dui nec nisi volutpat eleifend. donec ut dolor. morbi vel lectus in quam fringilla rhoncus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/240x125.bmp/ff4444/ffffff"
        }, {
            "id": "06d2b158-cf28-48f8-bd37-1f1f5ad75581",
            "name": "Skynoodle",
            "country": "CN",
            "ociCustomerNumber": 69315955,
            "username": "cgunterr@xinhuanet.com",
            "password": "shedd2kqOL",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Kallisté",
                    "lastName": "Gunter",
                    "function": "Product Management",
                    "telefon": "+1367407062",
                    "email": "cgunterr@nbcnews.com"
                },
                "sales": {
                    "responsibleInternal": "Eleonora Gunter",
                    "responsibleExternal": "Chere Gunter",
                    "keycode": "skynoodle",
                    "serviceProvider": "blogpad",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "aenean lectus. pellentesque eget nunc. donec quis orci eget orci vehicula condimentum.\n\ncurabitur in libero ut massa volutpat convallis. morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. maecenas pulvinar lobortis est.\n\nphasellus sit amet erat. nulla tempus. vivamus in felis eu sapien cursus vestibulum.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/110x143.png/ff4444/ffffff"
        }, {
            "id": "7d02fcfb-cf82-4460-8c53-522346b8f1ea",
            "name": "Thoughtblab",
            "country": "ID",
            "ociCustomerNumber": 53278236,
            "username": "smacs@harvard.edu",
            "password": "dlZqMOIuIMVp",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Pò",
                    "lastName": "Mac Giany",
                    "function": "Human Resources",
                    "telefon": "+9890322572",
                    "email": "smacs@edublogs.org"
                },
                "sales": {
                    "responsibleInternal": "Randie Mac Giany",
                    "responsibleExternal": "Starla Mac Giany",
                    "keycode": "thoughtblab",
                    "serviceProvider": "janyx",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; mauris viverra diam vitae quam. suspendisse potenti.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/241x137.bmp/ff4444/ffffff"
        }, {
            "id": "76d16d03-9649-4dc8-8d72-b976315a770f",
            "name": "Trupe",
            "country": "RU",
            "ociCustomerNumber": 31472388,
            "username": "frimbaultt@newsvine.com",
            "password": "rysH3fae",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Camélia",
                    "lastName": "Rimbault",
                    "function": "Engineering",
                    "telefon": "+5195790595",
                    "email": "frimbaultt@4shared.com"
                },
                "sales": {
                    "responsibleInternal": "Bonni Rimbault",
                    "responsibleExternal": "Flossie Rimbault",
                    "keycode": "trupe",
                    "serviceProvider": "buzzshare",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in congue. etiam justo. etiam pretium iaculis justo.\n\nin hac habitasse platea dictumst. etiam faucibus cursus urna. ut tellus.\n\nnulla ut erat id mauris vulputate elementum. nullam varius. nulla facilisi.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/248x154.png/dddddd/000000"
        }, {
            "id": "a9282f53-7f2e-4600-b6a3-defc3240cb41",
            "name": "Rhynyx",
            "country": "SL",
            "ociCustomerNumber": 21818042,
            "username": "asirettu@51.la",
            "password": "BCDoHtdlYPBk",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Adèle",
                    "lastName": "Sirett",
                    "function": "Services",
                    "telefon": "+6510505651",
                    "email": "asirettu@utexas.edu"
                },
                "sales": {
                    "responsibleInternal": "Eldredge Sirett",
                    "responsibleExternal": "Ailis Sirett",
                    "keycode": "rhynyx",
                    "serviceProvider": "oyoyo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in hac habitasse platea dictumst. morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. nulla justo.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/220x146.bmp/cc0000/ffffff"
        }, {
            "id": "90bc3367-fefb-4651-9df4-760a91237eca",
            "name": "Babbleopia",
            "country": "PH",
            "ociCustomerNumber": 21891859,
            "username": "bhadlingtonv@bravesites.com",
            "password": "29uwHMWK",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Yè",
                    "lastName": "Hadlington",
                    "function": "Accounting",
                    "telefon": "+9421105871",
                    "email": "bhadlingtonv@noaa.gov"
                },
                "sales": {
                    "responsibleInternal": "Christalle Hadlington",
                    "responsibleExternal": "Brandy Hadlington",
                    "keycode": "babbleopia",
                    "serviceProvider": "flipopia",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed ante. vivamus tortor. duis mattis egestas metus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/200x128.png/ff4444/ffffff"
        }, {
            "id": "86d83570-db6c-40d0-b099-84b62929299f",
            "name": "Trilith",
            "country": "PS",
            "ociCustomerNumber": 52780438,
            "username": "imcgraghw@i2i.jp",
            "password": "AcJ69YaLBR",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Vénus",
                    "lastName": "McGragh",
                    "function": "Marketing",
                    "telefon": "+9565981288",
                    "email": "imcgraghw@narod.ru"
                },
                "sales": {
                    "responsibleInternal": "Isidoro McGragh",
                    "responsibleExternal": "Ilyssa McGragh",
                    "keycode": "trilith",
                    "serviceProvider": "wikido",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "curabitur in libero ut massa volutpat convallis. morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. maecenas pulvinar lobortis est.\n\nphasellus sit amet erat. nulla tempus. vivamus in felis eu sapien cursus vestibulum.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/196x172.png/5fa2dd/ffffff"
        }, {
            "id": "051fc161-a03c-467e-bf04-3f2d58bc7934",
            "name": "Trilia",
            "country": "KP",
            "ociCustomerNumber": 53861747,
            "username": "lguynemerx@wired.com",
            "password": "yFSBve",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Alizée",
                    "lastName": "Guynemer",
                    "function": "Legal",
                    "telefon": "+4940111054",
                    "email": "lguynemerx@wikia.com"
                },
                "sales": {
                    "responsibleInternal": "Carlynn Guynemer",
                    "responsibleExternal": "Lothario Guynemer",
                    "keycode": "trilia",
                    "serviceProvider": "dablist",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "curabitur gravida nisi at nibh. in hac habitasse platea dictumst. aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\ninteger tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/239x189.png/cc0000/ffffff"
        }, {
            "id": "ea062ed0-43e4-48fc-aeec-fc41b9badc77",
            "name": "Snaptags",
            "country": "PE",
            "ociCustomerNumber": 34652482,
            "username": "ajaggersy@hostgator.com",
            "password": "bxtYZcx",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Médiamass",
                    "lastName": "Jaggers",
                    "function": "Marketing",
                    "telefon": "+8485652079",
                    "email": "ajaggersy@shutterfly.com"
                },
                "sales": {
                    "responsibleInternal": "Hertha Jaggers",
                    "responsibleExternal": "Aurilia Jaggers",
                    "keycode": "snaptags",
                    "serviceProvider": "blognation",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "proin interdum mauris non ligula pellentesque ultrices. phasellus id sapien in sapien iaculis congue. vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/119x208.png/5fa2dd/ffffff"
        }, {
            "id": "7a3d5f4a-4988-47eb-96e2-dcef674424a8",
            "name": "Photospace",
            "country": "RU",
            "ociCustomerNumber": 25864287,
            "username": "mgreimz@google.co.jp",
            "password": "hkrFxgr3C1",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Méline",
                    "lastName": "Greim",
                    "function": "Marketing",
                    "telefon": "+2677794866",
                    "email": "mgreimz@europa.eu"
                },
                "sales": {
                    "responsibleInternal": "Tomaso Greim",
                    "responsibleExternal": "Murdock Greim",
                    "keycode": "photospace",
                    "serviceProvider": "blognation",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis bibendum. morbi non quam nec dui luctus rutrum. nulla tellus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/159x232.jpg/cc0000/ffffff"
        }, {
            "id": "cbc1f760-c9e1-4902-8f38-7e2dd5bfa919",
            "name": "Blogpad",
            "country": "JP",
            "ociCustomerNumber": 83775827,
            "username": "sveal10@whitehouse.gov",
            "password": "3mA7e8AU5",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Adélaïde",
                    "lastName": "Veal",
                    "function": "Research and Development",
                    "telefon": "+4071769106",
                    "email": "sveal10@wikipedia.org"
                },
                "sales": {
                    "responsibleInternal": "Kent Veal",
                    "responsibleExternal": "Stace Veal",
                    "keycode": "blogpad",
                    "serviceProvider": "meevee",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in congue. etiam justo. etiam pretium iaculis justo.\n\nin hac habitasse platea dictumst. etiam faucibus cursus urna. ut tellus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/221x137.png/cc0000/ffffff"
        }, {
            "id": "6a388dc7-c324-4ff2-a4e5-4f879b8d411b",
            "name": "Livepath",
            "country": "CN",
            "ociCustomerNumber": 81919152,
            "username": "dphilpot11@shutterfly.com",
            "password": "3Z3wcwU",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mélia",
                    "lastName": "Philpot",
                    "function": "Support",
                    "telefon": "+6296895488",
                    "email": "dphilpot11@cbslocal.com"
                },
                "sales": {
                    "responsibleInternal": "Kory Philpot",
                    "responsibleExternal": "Dona Philpot",
                    "keycode": "livepath",
                    "serviceProvider": "skajo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cras non velit nec nisi vulputate nonummy. maecenas tincidunt lacus at velit. vivamus vel nulla eget eros elementum pellentesque.\n\nquisque porta volutpat erat. quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. nunc purus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/190x196.jpg/ff4444/ffffff"
        }, {
            "id": "c4ca8d50-06cf-459c-a8f5-d8c9be4c1af3",
            "name": "Dazzlesphere",
            "country": "MR",
            "ociCustomerNumber": 56065126,
            "username": "ifoort12@mayoclinic.com",
            "password": "oD7AuU2",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Ophélie",
                    "lastName": "Foort",
                    "function": "Marketing",
                    "telefon": "+2910148692",
                    "email": "ifoort12@dedecms.com"
                },
                "sales": {
                    "responsibleInternal": "Minna Foort",
                    "responsibleExternal": "Isador Foort",
                    "keycode": "dazzlesphere",
                    "serviceProvider": "eayo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "phasellus in felis. donec semper sapien a libero. nam dui.\n\nproin leo odio, porttitor id, consequat in, consequat ut, nulla. sed accumsan felis. ut at dolor quis odio consequat varius.\n\ninteger ac leo. pellentesque ultrices mattis odio. donec vitae nisi.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/159x156.jpg/cc0000/ffffff"
        }, {
            "id": "2b02477c-9a29-48d8-a7c1-0146630bc0e8",
            "name": "Feednation",
            "country": "MX",
            "ociCustomerNumber": 29370331,
            "username": "amcmonies13@prnewswire.com",
            "password": "dgl7dQE6XPv",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Maïly",
                    "lastName": "McMonies",
                    "function": "Accounting",
                    "telefon": "+0131343642",
                    "email": "amcmonies13@e-recht24.de"
                },
                "sales": {
                    "responsibleInternal": "Ignatius McMonies",
                    "responsibleExternal": "Ange McMonies",
                    "keycode": "feednation",
                    "serviceProvider": "jatri",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis aliquam convallis nunc. proin at turpis a pede posuere nonummy. integer non velit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/102x211.png/5fa2dd/ffffff"
        }, {
            "id": "e47bdd47-4529-4195-84a4-049c4537f102",
            "name": "Voonder",
            "country": "PY",
            "ociCustomerNumber": 99160398,
            "username": "rmcgillreich14@shop-pro.jp",
            "password": "a2ivU47cq08",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mélanie",
                    "lastName": "McGillreich",
                    "function": "Research and Development",
                    "telefon": "+6233922929",
                    "email": "rmcgillreich14@cdc.gov"
                },
                "sales": {
                    "responsibleInternal": "Vonni McGillreich",
                    "responsibleExternal": "Roderick McGillreich",
                    "keycode": "voonder",
                    "serviceProvider": "livetube",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas ut massa quis augue luctus tincidunt. nulla mollis molestie lorem. quisque ut erat.\n\ncurabitur gravida nisi at nibh. in hac habitasse platea dictumst. aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\ninteger tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/203x165.png/5fa2dd/ffffff"
        }, {
            "id": "0e97984a-32c8-403d-a90c-88194606c822",
            "name": "Ooba",
            "country": "BF",
            "ociCustomerNumber": 64175559,
            "username": "mloxston15@baidu.com",
            "password": "A3NK13fD",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Léonore",
                    "lastName": "Loxston",
                    "function": "Accounting",
                    "telefon": "+8104943401",
                    "email": "mloxston15@pinterest.com"
                },
                "sales": {
                    "responsibleInternal": "Kelvin Loxston",
                    "responsibleExternal": "Mickey Loxston",
                    "keycode": "ooba",
                    "serviceProvider": "quatz",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "curabitur in libero ut massa volutpat convallis. morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. maecenas pulvinar lobortis est.\n\nphasellus sit amet erat. nulla tempus. vivamus in felis eu sapien cursus vestibulum.\n\nproin eu mi. nulla ac enim. in tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/136x210.bmp/ff4444/ffffff"
        }, {
            "id": "0158534c-210e-4be3-9959-5019cf51b0df",
            "name": "Shufflebeat",
            "country": "CN",
            "ociCustomerNumber": 27867055,
            "username": "kdevonport16@symantec.com",
            "password": "OvMUwJAEoc",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Tú",
                    "lastName": "Devonport",
                    "function": "Sales",
                    "telefon": "+4825506967",
                    "email": "kdevonport16@thetimes.co.uk"
                },
                "sales": {
                    "responsibleInternal": "Chlo Devonport",
                    "responsibleExternal": "Koral Devonport",
                    "keycode": "shufflebeat",
                    "serviceProvider": "brainsphere",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. sed vel enim sit amet nunc viverra dapibus. nulla suscipit ligula in lacus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/186x141.jpg/5fa2dd/ffffff"
        }, {
            "id": "91a75a35-a6cb-4804-bfbd-69e4f5d26872",
            "name": "Flashdog",
            "country": "CN",
            "ociCustomerNumber": 41335046,
            "username": "sspritt17@psu.edu",
            "password": "XtgNUy54tIr",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Aimée",
                    "lastName": "Spritt",
                    "function": "Services",
                    "telefon": "+8052040973",
                    "email": "sspritt17@ucla.edu"
                },
                "sales": {
                    "responsibleInternal": "Bianka Spritt",
                    "responsibleExternal": "Sam Spritt",
                    "keycode": "flashdog",
                    "serviceProvider": "photobug",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "integer tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.\n\npraesent blandit. nam nulla. integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nmorbi porttitor lorem id ligula. suspendisse ornare consequat lectus. in est risus, auctor sed, tristique in, tempus sit amet, sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/129x148.png/cc0000/ffffff"
        }, {
            "id": "35d3ebc5-70e3-4aad-a607-8845ed8beab7",
            "name": "Kwinu",
            "country": "BR",
            "ociCustomerNumber": 14501031,
            "username": "crichie18@uol.com.br",
            "password": "Z9dBxE9Jv",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Stéphanie",
                    "lastName": "Richie",
                    "function": "Marketing",
                    "telefon": "+0057635865",
                    "email": "crichie18@soundcloud.com"
                },
                "sales": {
                    "responsibleInternal": "Kiley Richie",
                    "responsibleExternal": "Cally Richie",
                    "keycode": "kwinu",
                    "serviceProvider": "fanoodle",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nulla ut erat id mauris vulputate elementum. nullam varius. nulla facilisi.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/167x204.png/ff4444/ffffff"
        }, {
            "id": "204715f2-4a51-4ece-8bdb-b982459faffc",
            "name": "Ozu",
            "country": "SE",
            "ociCustomerNumber": 59852488,
            "username": "bprydie19@latimes.com",
            "password": "zwEw0ab8KL5",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Inès",
                    "lastName": "Prydie",
                    "function": "Accounting",
                    "telefon": "+7645697994",
                    "email": "bprydie19@smugmug.com"
                },
                "sales": {
                    "responsibleInternal": "Daron Prydie",
                    "responsibleExternal": "Bernhard Prydie",
                    "keycode": "ozu",
                    "serviceProvider": "edgeclub",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. vivamus vestibulum sagittis sapien. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\netiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.\n\npraesent id massa id nisl venenatis lacinia. aenean sit amet justo. morbi ut odio.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/103x108.png/dddddd/000000"
        }, {
            "id": "c5f9370a-b583-4613-b30b-c755edefd7cc",
            "name": "Photojam",
            "country": "UG",
            "ociCustomerNumber": 96953039,
            "username": "visenor1a@histats.com",
            "password": "C1H1QCNIIs",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Kuí",
                    "lastName": "Isenor",
                    "function": "Engineering",
                    "telefon": "+9290245985",
                    "email": "visenor1a@reverbnation.com"
                },
                "sales": {
                    "responsibleInternal": "Rafa Isenor",
                    "responsibleExternal": "Vi Isenor",
                    "keycode": "photojam",
                    "serviceProvider": "mydo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "fusce consequat. nulla nisl. nunc nisl.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/201x124.bmp/cc0000/ffffff"
        }, {
            "id": "0606223a-6427-4a85-8eef-2fb37aea26b8",
            "name": "Quimm",
            "country": "PL",
            "ociCustomerNumber": 16488143,
            "username": "svase1b@multiply.com",
            "password": "ZHYRevfVsC",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mélissandre",
                    "lastName": "Vase",
                    "function": "Product Management",
                    "telefon": "+4627560115",
                    "email": "svase1b@smh.com.au"
                },
                "sales": {
                    "responsibleInternal": "Rip Vase",
                    "responsibleExternal": "Sidney Vase",
                    "keycode": "quimm",
                    "serviceProvider": "eamia",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas ut massa quis augue luctus tincidunt. nulla mollis molestie lorem. quisque ut erat.\n\ncurabitur gravida nisi at nibh. in hac habitasse platea dictumst. aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\ninteger tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/177x176.jpg/ff4444/ffffff"
        }, {
            "id": "17e0bf5c-148b-4c80-bc43-da433ae0838a",
            "name": "Yodo",
            "country": "BG",
            "ociCustomerNumber": 79192577,
            "username": "ncassam1c@archive.org",
            "password": "xEJzdh",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Cléa",
                    "lastName": "Cassam",
                    "function": "Accounting",
                    "telefon": "+2543246558",
                    "email": "ncassam1c@macromedia.com"
                },
                "sales": {
                    "responsibleInternal": "Obediah Cassam",
                    "responsibleExternal": "Nathanael Cassam",
                    "keycode": "yodo",
                    "serviceProvider": "quinu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. in blandit ultrices enim. lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nproin interdum mauris non ligula pellentesque ultrices. phasellus id sapien in sapien iaculis congue. vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\naenean lectus. pellentesque eget nunc. donec quis orci eget orci vehicula condimentum.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/189x162.jpg/ff4444/ffffff"
        }, {
            "id": "6465043b-417b-4025-9262-9812e95fce4a",
            "name": "Dynabox",
            "country": "ID",
            "ociCustomerNumber": 70775606,
            "username": "nmatoshin1d@i2i.jp",
            "password": "1PNyZmLW6eHI",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Maïlis",
                    "lastName": "Matoshin",
                    "function": "Business Development",
                    "telefon": "+9112441767",
                    "email": "nmatoshin1d@technorati.com"
                },
                "sales": {
                    "responsibleInternal": "Mel Matoshin",
                    "responsibleExternal": "Nikki Matoshin",
                    "keycode": "dynabox",
                    "serviceProvider": "voonyx",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "pellentesque at nulla. suspendisse potenti. cras in purus eu magna vulputate luctus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/247x107.bmp/5fa2dd/ffffff"
        }, {
            "id": "16063fcd-033e-42cf-9887-a0b48ad4d119",
            "name": "Zoomdog",
            "country": "US",
            "ociCustomerNumber": 28733031,
            "username": "swilsher1e@blogtalkradio.com",
            "password": "IXocwT4jICn",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mélys",
                    "lastName": "Wilsher",
                    "function": "Engineering",
                    "telefon": "+7278074775",
                    "email": "swilsher1e@dyndns.org"
                },
                "sales": {
                    "responsibleInternal": "Barbabra Wilsher",
                    "responsibleExternal": "Simon Wilsher",
                    "keycode": "zoomdog",
                    "serviceProvider": "bubbletube",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cras non velit nec nisi vulputate nonummy. maecenas tincidunt lacus at velit. vivamus vel nulla eget eros elementum pellentesque.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/239x183.bmp/ff4444/ffffff"
        }, {
            "id": "0a71901c-f014-43fb-b67c-dd251502e453",
            "name": "Realbridge",
            "country": "ID",
            "ociCustomerNumber": 46205049,
            "username": "lrosier1f@eepurl.com",
            "password": "M8sG7UlH5",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Lén",
                    "lastName": "Rosier",
                    "function": "Sales",
                    "telefon": "+4723181703",
                    "email": "lrosier1f@phpbb.com"
                },
                "sales": {
                    "responsibleInternal": "Winna Rosier",
                    "responsibleExternal": "Leesa Rosier",
                    "keycode": "realbridge",
                    "serviceProvider": "oyoloo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed sagittis. nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. nullam molestie nibh in lectus.\n\npellentesque at nulla. suspendisse potenti. cras in purus eu magna vulputate luctus.\n\ncum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. vivamus vestibulum sagittis sapien. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/222x158.jpg/5fa2dd/ffffff"
        }, {
            "id": "036a4e11-50fc-4e42-a479-577cee21a975",
            "name": "Zoozzy",
            "country": "CZ",
            "ociCustomerNumber": 45002253,
            "username": "mbarrat1g@xrea.com",
            "password": "4IOOLN9",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mélanie",
                    "lastName": "Barrat",
                    "function": "Legal",
                    "telefon": "+0244430750",
                    "email": "mbarrat1g@virginia.edu"
                },
                "sales": {
                    "responsibleInternal": "Lothaire Barrat",
                    "responsibleExternal": "Margarette Barrat",
                    "keycode": "zoozzy",
                    "serviceProvider": "demimbu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "aliquam quis turpis eget elit sodales scelerisque. mauris sit amet eros. suspendisse accumsan tortor quis turpis.\n\nsed ante. vivamus tortor. duis mattis egestas metus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/189x221.bmp/5fa2dd/ffffff"
        }, {
            "id": "c6c03f4e-18b7-4789-af1a-0719670da6b2",
            "name": "Eayo",
            "country": "MY",
            "ociCustomerNumber": 54706281,
            "username": "gwhordley1h@wufoo.com",
            "password": "5KW3ZasGR",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Cécilia",
                    "lastName": "Whordley",
                    "function": "Marketing",
                    "telefon": "+6794481544",
                    "email": "gwhordley1h@mit.edu"
                },
                "sales": {
                    "responsibleInternal": "Tobias Whordley",
                    "responsibleExternal": "Garvy Whordley",
                    "keycode": "eayo",
                    "serviceProvider": "minyx",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. integer ac neque.\n\nduis bibendum. morbi non quam nec dui luctus rutrum. nulla tellus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/190x168.bmp/5fa2dd/ffffff"
        }, {
            "id": "ce43f65c-b125-400f-b0e5-e342d83bae44",
            "name": "Jaloo",
            "country": "GR",
            "ociCustomerNumber": 86606924,
            "username": "lrippon1i@hatena.ne.jp",
            "password": "uVKTAwRu",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Crééz",
                    "lastName": "Rippon",
                    "function": "Product Management",
                    "telefon": "+0788326316",
                    "email": "lrippon1i@yelp.com"
                },
                "sales": {
                    "responsibleInternal": "Peggi Rippon",
                    "responsibleExternal": "Lilly Rippon",
                    "keycode": "jaloo",
                    "serviceProvider": "shufflester",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed ante. vivamus tortor. duis mattis egestas metus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/169x120.jpg/dddddd/000000"
        }, {
            "id": "92df5038-c6b6-41d9-82cc-7439c56968a0",
            "name": "Linklinks",
            "country": "CN",
            "ociCustomerNumber": 35399258,
            "username": "kgwillim1j@quantcast.com",
            "password": "6WAsUFlnKYsy",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Maëlla",
                    "lastName": "Gwillim",
                    "function": "Research and Development",
                    "telefon": "+7190152111",
                    "email": "kgwillim1j@auda.org.au"
                },
                "sales": {
                    "responsibleInternal": "Janna Gwillim",
                    "responsibleExternal": "Kylila Gwillim",
                    "keycode": "linklinks",
                    "serviceProvider": "gabtype",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis aliquam convallis nunc. proin at turpis a pede posuere nonummy. integer non velit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/188x195.jpg/5fa2dd/ffffff"
        }, {
            "id": "3530a0b5-af42-451a-a562-a3719d72a19a",
            "name": "Jabberbean",
            "country": "JP",
            "ociCustomerNumber": 71355815,
            "username": "cjoannet1k@miibeian.gov.cn",
            "password": "eGV2ikDwP5s7",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Maëlyss",
                    "lastName": "Joannet",
                    "function": "Engineering",
                    "telefon": "+9409190673",
                    "email": "cjoannet1k@comcast.net"
                },
                "sales": {
                    "responsibleInternal": "Harli Joannet",
                    "responsibleExternal": "Con Joannet",
                    "keycode": "jabberbean",
                    "serviceProvider": "cogilith",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "quisque porta volutpat erat. quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. nunc purus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/214x207.png/ff4444/ffffff"
        }, {
            "id": "0d7b2f72-93f3-4991-adc3-40a33e1c6508",
            "name": "Trilia",
            "country": "CN",
            "ociCustomerNumber": 73834348,
            "username": "tmetheringham1l@fotki.com",
            "password": "TLN5DpPjIkQ",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Méng",
                    "lastName": "Metheringham",
                    "function": "Legal",
                    "telefon": "+2261383672",
                    "email": "tmetheringham1l@zdnet.com"
                },
                "sales": {
                    "responsibleInternal": "Ardra Metheringham",
                    "responsibleExternal": "Tyson Metheringham",
                    "keycode": "trilia",
                    "serviceProvider": "edgepulse",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. mauris lacinia sapien quis libero.\n\nnullam sit amet turpis elementum ligula vehicula consequat. morbi a ipsum. integer a nibh.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/213x179.png/cc0000/ffffff"
        }, {
            "id": "6d1a641a-7e0d-4f75-9ce3-96fbf6e9ad5c",
            "name": "Gigazoom",
            "country": "BR",
            "ociCustomerNumber": 58853673,
            "username": "jmcquillan1m@woothemes.com",
            "password": "jUZKFgtompA",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Adélie",
                    "lastName": "McQuillan",
                    "function": "Support",
                    "telefon": "+2699040427",
                    "email": "jmcquillan1m@webnode.com"
                },
                "sales": {
                    "responsibleInternal": "Gabriela McQuillan",
                    "responsibleExternal": "Jenilee McQuillan",
                    "keycode": "gigazoom",
                    "serviceProvider": "centidel",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. sed vel enim sit amet nunc viverra dapibus. nulla suscipit ligula in lacus.\n\ncurabitur at ipsum ac tellus semper interdum. mauris ullamcorper purus sit amet nulla. quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/155x154.png/cc0000/ffffff"
        }, {
            "id": "53266237-7cd1-4ec1-8ed5-5c12a835982a",
            "name": "Twitterbeat",
            "country": "PS",
            "ociCustomerNumber": 60377942,
            "username": "askoughman1n@tuttocitta.it",
            "password": "N2W1fo",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Laurène",
                    "lastName": "Skoughman",
                    "function": "Sales",
                    "telefon": "+7999569811",
                    "email": "askoughman1n@sfgate.com"
                },
                "sales": {
                    "responsibleInternal": "Skip Skoughman",
                    "responsibleExternal": "Ashley Skoughman",
                    "keycode": "twitterbeat",
                    "serviceProvider": "photolist",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "etiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.\n\npraesent id massa id nisl venenatis lacinia. aenean sit amet justo. morbi ut odio.\n\ncras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. in blandit ultrices enim. lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/213x116.png/dddddd/000000"
        }, {
            "id": "97102892-043f-4055-9826-d6bf9b4e42d0",
            "name": "Rhynoodle",
            "country": "MX",
            "ociCustomerNumber": 90985712,
            "username": "dfelmingham1o@godaddy.com",
            "password": "d8tGp5oc",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Torbjörn",
                    "lastName": "Felmingham",
                    "function": "Services",
                    "telefon": "+0757424628",
                    "email": "dfelmingham1o@merriam-webster.com"
                },
                "sales": {
                    "responsibleInternal": "Paolo Felmingham",
                    "responsibleExternal": "Dana Felmingham",
                    "keycode": "rhynoodle",
                    "serviceProvider": "kazu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "fusce consequat. nulla nisl. nunc nisl.\n\nduis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. donec dapibus. duis at velit eu est congue elementum.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/128x216.png/dddddd/000000"
        }, {
            "id": "aa4f9f9f-71b1-4494-a81e-347a0eec1d42",
            "name": "Twitterworks",
            "country": "BD",
            "ociCustomerNumber": 31901646,
            "username": "gmuckle1p@reverbnation.com",
            "password": "IruzHpxQB",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Garçon",
                    "lastName": "Muckle",
                    "function": "Support",
                    "telefon": "+9646588100",
                    "email": "gmuckle1p@imgur.com"
                },
                "sales": {
                    "responsibleInternal": "Tynan Muckle",
                    "responsibleExternal": "Gui Muckle",
                    "keycode": "twitterworks",
                    "serviceProvider": "yambee",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nullam porttitor lacus at turpis. donec posuere metus vitae ipsum. aliquam non mauris.\n\nmorbi non lectus. aliquam sit amet diam in magna bibendum imperdiet. nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nfusce posuere felis sed lacus. morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. nunc rhoncus dui vel sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/152x122.jpg/5fa2dd/ffffff"
        }, {
            "id": "ff0a3cc5-2ce5-4b32-8d57-158c42df7482",
            "name": "Zoomdog",
            "country": "PT",
            "ociCustomerNumber": 45971804,
            "username": "plejeune1q@arizona.edu",
            "password": "LiYXEBPw",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Sélène",
                    "lastName": "Lejeune",
                    "function": "Accounting",
                    "telefon": "+4757938660",
                    "email": "plejeune1q@google.cn"
                },
                "sales": {
                    "responsibleInternal": "Pauline Lejeune",
                    "responsibleExternal": "Pam Lejeune",
                    "keycode": "zoomdog",
                    "serviceProvider": "quinu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; mauris viverra diam vitae quam. suspendisse potenti.\n\nnullam porttitor lacus at turpis. donec posuere metus vitae ipsum. aliquam non mauris.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/150x133.bmp/5fa2dd/ffffff"
        }, {
            "id": "7eea4d27-9c5a-4641-b0e5-8ec6891f2e0c",
            "name": "Quinu",
            "country": "GR",
            "ociCustomerNumber": 96323281,
            "username": "cmcelory1r@tinypic.com",
            "password": "lhlIqGQc",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mylène",
                    "lastName": "McElory",
                    "function": "Sales",
                    "telefon": "+3946716934",
                    "email": "cmcelory1r@macromedia.com"
                },
                "sales": {
                    "responsibleInternal": "Sashenka McElory",
                    "responsibleExternal": "Coleman McElory",
                    "keycode": "quinu",
                    "serviceProvider": "nlounge",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in sagittis dui vel nisl. duis ac nibh. fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/113x120.bmp/dddddd/000000"
        }, {
            "id": "0ae044b7-64f2-4c5b-b4ff-51f629002c89",
            "name": "Divanoodle",
            "country": "ID",
            "ociCustomerNumber": 55734782,
            "username": "kbaraja1s@columbia.edu",
            "password": "Lc2WrWzcQf",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Desirée",
                    "lastName": "Baraja",
                    "function": "Sales",
                    "telefon": "+4675277670",
                    "email": "kbaraja1s@skyrock.com"
                },
                "sales": {
                    "responsibleInternal": "Bennie Baraja",
                    "responsibleExternal": "Kirbee Baraja",
                    "keycode": "divanoodle",
                    "serviceProvider": "innojam",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in hac habitasse platea dictumst. morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. nulla justo.\n\naliquam quis turpis eget elit sodales scelerisque. mauris sit amet eros. suspendisse accumsan tortor quis turpis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/143x207.bmp/dddddd/000000"
        }, {
            "id": "93249d49-828e-4e0b-90fe-1de39eebf11c",
            "name": "Skimia",
            "country": "ID",
            "ociCustomerNumber": 88230912,
            "username": "sbatchley1t@usatoday.com",
            "password": "pHXmFEpBD3",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Personnalisée",
                    "lastName": "Batchley",
                    "function": "Accounting",
                    "telefon": "+5768422908",
                    "email": "sbatchley1t@mit.edu"
                },
                "sales": {
                    "responsibleInternal": "Ruthann Batchley",
                    "responsibleExternal": "Shellie Batchley",
                    "keycode": "skimia",
                    "serviceProvider": "avamm",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; mauris viverra diam vitae quam. suspendisse potenti.\n\nnullam porttitor lacus at turpis. donec posuere metus vitae ipsum. aliquam non mauris.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/156x220.bmp/cc0000/ffffff"
        }, {
            "id": "c8c0e24a-386c-439a-952b-af8fe40d5842",
            "name": "Dynabox",
            "country": "CN",
            "ociCustomerNumber": 37019098,
            "username": "jgodmer1u@ftc.gov",
            "password": "eWEyeRtP",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Aloïs",
                    "lastName": "Godmer",
                    "function": "Support",
                    "telefon": "+1545005274",
                    "email": "jgodmer1u@wordpress.com"
                },
                "sales": {
                    "responsibleInternal": "Bili Godmer",
                    "responsibleExternal": "Jacklyn Godmer",
                    "keycode": "dynabox",
                    "serviceProvider": "twitterbridge",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "fusce posuere felis sed lacus. morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. nunc rhoncus dui vel sem.\n\nsed sagittis. nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. nullam molestie nibh in lectus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/222x175.bmp/5fa2dd/ffffff"
        }, {
            "id": "038d34e4-8a45-4286-a0d8-0ee64751bad2",
            "name": "Bubblebox",
            "country": "FI",
            "ociCustomerNumber": 43279454,
            "username": "wsloam1v@themeforest.net",
            "password": "IBI9Bkb0ER",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Camélia",
                    "lastName": "Sloam",
                    "function": "Legal",
                    "telefon": "+8177579454",
                    "email": "wsloam1v@craigslist.org"
                },
                "sales": {
                    "responsibleInternal": "Alyssa Sloam",
                    "responsibleExternal": "Wiatt Sloam",
                    "keycode": "bubblebox",
                    "serviceProvider": "roombo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "maecenas ut massa quis augue luctus tincidunt. nulla mollis molestie lorem. quisque ut erat.\n\ncurabitur gravida nisi at nibh. in hac habitasse platea dictumst. aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\ninteger tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/120x175.jpg/cc0000/ffffff"
        }, {
            "id": "2e8d25df-097b-4003-8a96-d16199eb2766",
            "name": "Skilith",
            "country": "NL",
            "ociCustomerNumber": 43218186,
            "username": "bmacscherie1w@moonfruit.com",
            "password": "6s23W8",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Vérane",
                    "lastName": "MacScherie",
                    "function": "Legal",
                    "telefon": "+4352806240",
                    "email": "bmacscherie1w@tiny.cc"
                },
                "sales": {
                    "responsibleInternal": "Genvieve MacScherie",
                    "responsibleExternal": "Blair MacScherie",
                    "keycode": "skilith",
                    "serviceProvider": "skyndu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "curabitur gravida nisi at nibh. in hac habitasse platea dictumst. aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\ninteger tincidunt ante vel ipsum. praesent blandit lacinia erat. vestibulum sed magna at nunc commodo placerat.\n\npraesent blandit. nam nulla. integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/162x245.jpg/dddddd/000000"
        }, {
            "id": "ea40f9e0-6d33-4d82-ab0c-1330defeff8c",
            "name": "Topiczoom",
            "country": "SD",
            "ociCustomerNumber": 18388282,
            "username": "estaniford1x@ycombinator.com",
            "password": "gAqiGm2SNv",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Ruò",
                    "lastName": "Staniford",
                    "function": "Business Development",
                    "telefon": "+1206871217",
                    "email": "estaniford1x@unicef.org"
                },
                "sales": {
                    "responsibleInternal": "Stanislaw Staniford",
                    "responsibleExternal": "Eustacia Staniford",
                    "keycode": "topiczoom",
                    "serviceProvider": "tambee",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "fusce consequat. nulla nisl. nunc nisl.\n\nduis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. donec dapibus. duis at velit eu est congue elementum.\n\nin hac habitasse platea dictumst. morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. nulla justo.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/226x218.jpg/cc0000/ffffff"
        }, {
            "id": "7bedeb58-f2a5-43c5-b105-80f8d5d45869",
            "name": "Gabspot",
            "country": "PH",
            "ociCustomerNumber": 69596567,
            "username": "mtomasello1y@yandex.ru",
            "password": "7mXh9Q",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Anaël",
                    "lastName": "Tomasello",
                    "function": "Training",
                    "telefon": "+1393807565",
                    "email": "mtomasello1y@behance.net"
                },
                "sales": {
                    "responsibleInternal": "Karlotta Tomasello",
                    "responsibleExternal": "Marlowe Tomasello",
                    "keycode": "gabspot",
                    "serviceProvider": "riffwire",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis aliquam convallis nunc. proin at turpis a pede posuere nonummy. integer non velit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/206x101.jpg/ff4444/ffffff"
        }, {
            "id": "f6817b59-9020-48b2-bc09-211221e0be82",
            "name": "DabZ",
            "country": "MY",
            "ociCustomerNumber": 60089071,
            "username": "gskains1z@reference.com",
            "password": "wTSVwlPw",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Tán",
                    "lastName": "Skains",
                    "function": "Business Development",
                    "telefon": "+1976068346",
                    "email": "gskains1z@scientificamerican.com"
                },
                "sales": {
                    "responsibleInternal": "Adams Skains",
                    "responsibleExternal": "Gwenni Skains",
                    "keycode": "dabz",
                    "serviceProvider": "skilith",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in hac habitasse platea dictumst. etiam faucibus cursus urna. ut tellus.\n\nnulla ut erat id mauris vulputate elementum. nullam varius. nulla facilisi.\n\ncras non velit nec nisi vulputate nonummy. maecenas tincidunt lacus at velit. vivamus vel nulla eget eros elementum pellentesque.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/233x121.bmp/cc0000/ffffff"
        }, {
            "id": "f1502f59-09a5-4859-b9ee-1f0ff36f8536",
            "name": "Fanoodle",
            "country": "AR",
            "ociCustomerNumber": 96130351,
            "username": "mhellen20@guardian.co.uk",
            "password": "X2iaXz",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Cléopatre",
                    "lastName": "Hellen",
                    "function": "Legal",
                    "telefon": "+0853018474",
                    "email": "mhellen20@deliciousdays.com"
                },
                "sales": {
                    "responsibleInternal": "Elissa Hellen",
                    "responsibleExternal": "Marysa Hellen",
                    "keycode": "fanoodle",
                    "serviceProvider": "thoughtbeat",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in quis justo. maecenas rhoncus aliquam lacus. morbi quis tortor id nulla ultrices aliquet.\n\nmaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. pellentesque viverra pede ac diam. cras pellentesque volutpat dui.\n\nmaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; mauris viverra diam vitae quam. suspendisse potenti.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/195x180.bmp/ff4444/ffffff"
        }, {
            "id": "2d1aa540-08ad-43d5-a82e-a67c52375f7e",
            "name": "Reallinks",
            "country": "RU",
            "ociCustomerNumber": 25889029,
            "username": "shulcoop21@wikispaces.com",
            "password": "wYeTPTDM2so3",
            "discount": "12%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Yóu",
                    "lastName": "Hulcoop",
                    "function": "Support",
                    "telefon": "+1969396588",
                    "email": "shulcoop21@hao123.com"
                },
                "sales": {
                    "responsibleInternal": "Averill Hulcoop",
                    "responsibleExternal": "Saidee Hulcoop",
                    "keycode": "reallinks",
                    "serviceProvider": "quinu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. donec dapibus. duis at velit eu est congue elementum.\n\nin hac habitasse platea dictumst. morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. nulla justo.\n\naliquam quis turpis eget elit sodales scelerisque. mauris sit amet eros. suspendisse accumsan tortor quis turpis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/157x132.png/ff4444/ffffff"
        }, {
            "id": "6331d450-7e3e-485c-8bf1-6c1f48d68228",
            "name": "BlogXS",
            "country": "JP",
            "ociCustomerNumber": 27738182,
            "username": "dfidelli22@biblegateway.com",
            "password": "JAhmKlko",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Méghane",
                    "lastName": "Fidelli",
                    "function": "Business Development",
                    "telefon": "+9880031097",
                    "email": "dfidelli22@sun.com"
                },
                "sales": {
                    "responsibleInternal": "Rica Fidelli",
                    "responsibleExternal": "Deanna Fidelli",
                    "keycode": "blogxs",
                    "serviceProvider": "mydo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in sagittis dui vel nisl. duis ac nibh. fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nsuspendisse potenti. in eleifend quam a odio. in hac habitasse platea dictumst.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/228x250.bmp/ff4444/ffffff"
        }, {
            "id": "8a234fe4-2810-41a6-8895-c9077c32f934",
            "name": "Aimbu",
            "country": "FI",
            "ociCustomerNumber": 26875928,
            "username": "fhamson23@unblog.fr",
            "password": "hld7a3j",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Salomé",
                    "lastName": "Hamson",
                    "function": "Engineering",
                    "telefon": "+9212561589",
                    "email": "fhamson23@blogspot.com"
                },
                "sales": {
                    "responsibleInternal": "Hatti Hamson",
                    "responsibleExternal": "Fionna Hamson",
                    "keycode": "aimbu",
                    "serviceProvider": "dabshots",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "etiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.\n\npraesent id massa id nisl venenatis lacinia. aenean sit amet justo. morbi ut odio.\n\ncras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. in blandit ultrices enim. lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/153x107.jpg/cc0000/ffffff"
        }, {
            "id": "7a558997-a233-4630-b50a-3c04be5b1d6d",
            "name": "Yozio",
            "country": "CN",
            "ociCustomerNumber": 57368314,
            "username": "srickardes24@imageshack.us",
            "password": "jxukClks",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Märta",
                    "lastName": "Rickardes",
                    "function": "Accounting",
                    "telefon": "+8130783393",
                    "email": "srickardes24@spiegel.de"
                },
                "sales": {
                    "responsibleInternal": "Elsi Rickardes",
                    "responsibleExternal": "Shandie Rickardes",
                    "keycode": "yozio",
                    "serviceProvider": "quinu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed sagittis. nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. nullam molestie nibh in lectus.\n\npellentesque at nulla. suspendisse potenti. cras in purus eu magna vulputate luctus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/247x232.jpg/5fa2dd/ffffff"
        }, {
            "id": "24e55eb1-b422-4d66-99ac-7ee8ed1f3c41",
            "name": "Divanoodle",
            "country": "DO",
            "ociCustomerNumber": 51084371,
            "username": "rpenton25@nytimes.com",
            "password": "Qe4BHc1uIvA",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Annotés",
                    "lastName": "Penton",
                    "function": "Legal",
                    "telefon": "+1171236988",
                    "email": "rpenton25@nsw.gov.au"
                },
                "sales": {
                    "responsibleInternal": "Cullie Penton",
                    "responsibleExternal": "Robena Penton",
                    "keycode": "divanoodle",
                    "serviceProvider": "brainsphere",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in quis justo. maecenas rhoncus aliquam lacus. morbi quis tortor id nulla ultrices aliquet.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/191x123.bmp/5fa2dd/ffffff"
        }, {
            "id": "749d5479-5914-4d48-8b06-8db9efff8dfc",
            "name": "Voomm",
            "country": "CZ",
            "ociCustomerNumber": 44087112,
            "username": "fasman26@diigo.com",
            "password": "xiz8MJXwn8Z",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Faîtes",
                    "lastName": "Asman",
                    "function": "Sales",
                    "telefon": "+7061367242",
                    "email": "fasman26@mapy.cz"
                },
                "sales": {
                    "responsibleInternal": "Michale Asman",
                    "responsibleExternal": "Fransisco Asman",
                    "keycode": "voomm",
                    "serviceProvider": "dabvine",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed sagittis. nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. nullam molestie nibh in lectus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/134x230.jpg/cc0000/ffffff"
        }, {
            "id": "36c4fd65-19c2-4059-8878-f0d9424c6539",
            "name": "Zoombox",
            "country": "PT",
            "ociCustomerNumber": 88637148,
            "username": "kmerdew27@naver.com",
            "password": "ID6zB9Dc2",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Gaëlle",
                    "lastName": "Merdew",
                    "function": "Services",
                    "telefon": "+2266386985",
                    "email": "kmerdew27@eepurl.com"
                },
                "sales": {
                    "responsibleInternal": "Thatch Merdew",
                    "responsibleExternal": "Kippie Merdew",
                    "keycode": "zoombox",
                    "serviceProvider": "meembee",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "phasellus sit amet erat. nulla tempus. vivamus in felis eu sapien cursus vestibulum.\n\nproin eu mi. nulla ac enim. in tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/162x206.jpg/ff4444/ffffff"
        }, {
            "id": "c24af0d9-f28b-4da9-8acd-52d64a2797fe",
            "name": "Fivespan",
            "country": "CN",
            "ociCustomerNumber": 48198363,
            "username": "tdikes28@wiley.com",
            "password": "qQUxKdDAzKl7",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Hélène",
                    "lastName": "Dikes",
                    "function": "Research and Development",
                    "telefon": "+5048078891",
                    "email": "tdikes28@domainmarket.com"
                },
                "sales": {
                    "responsibleInternal": "Tait Dikes",
                    "responsibleExternal": "Teriann Dikes",
                    "keycode": "fivespan",
                    "serviceProvider": "tanoodle",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "aliquam quis turpis eget elit sodales scelerisque. mauris sit amet eros. suspendisse accumsan tortor quis turpis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/135x107.png/ff4444/ffffff"
        }, {
            "id": "997ee177-6e71-4177-b582-d6bd9f99839c",
            "name": "Skivee",
            "country": "CN",
            "ociCustomerNumber": 54204264,
            "username": "dbirkin29@reverbnation.com",
            "password": "oxa90W0pN",
            "discount": "15%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Lèi",
                    "lastName": "Birkin",
                    "function": "Product Management",
                    "telefon": "+4027904491",
                    "email": "dbirkin29@chronoengine.com"
                },
                "sales": {
                    "responsibleInternal": "Margery Birkin",
                    "responsibleExternal": "Doloritas Birkin",
                    "keycode": "skivee",
                    "serviceProvider": "oyondu",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nullam sit amet turpis elementum ligula vehicula consequat. morbi a ipsum. integer a nibh.\n\nin quis justo. maecenas rhoncus aliquam lacus. morbi quis tortor id nulla ultrices aliquet.\n\nmaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. pellentesque viverra pede ac diam. cras pellentesque volutpat dui.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/102x155.png/dddddd/000000"
        }, {
            "id": "bf2a17d2-59ef-48c2-951d-93e9a4cb3c34",
            "name": "Lazz",
            "country": "CZ",
            "ociCustomerNumber": 75826930,
            "username": "upettyfer2a@rakuten.co.jp",
            "password": "xS7gDvLq",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Yáo",
                    "lastName": "Pettyfer",
                    "function": "Business Development",
                    "telefon": "+9442315133",
                    "email": "upettyfer2a@hp.com"
                },
                "sales": {
                    "responsibleInternal": "Frederigo Pettyfer",
                    "responsibleExternal": "Ulrike Pettyfer",
                    "keycode": "lazz",
                    "serviceProvider": "edgeify",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. vivamus vestibulum sagittis sapien. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\netiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.\n\npraesent id massa id nisl venenatis lacinia. aenean sit amet justo. morbi ut odio.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/162x182.bmp/5fa2dd/ffffff"
        }, {
            "id": "fb5fc12a-7dd7-4135-a12e-8a468f2b7d06",
            "name": "Demizz",
            "country": "BR",
            "ociCustomerNumber": 16911543,
            "username": "atolworthie2b@jiathis.com",
            "password": "QCJ8QS27",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Géraldine",
                    "lastName": "Tolworthie",
                    "function": "Marketing",
                    "telefon": "+7502310668",
                    "email": "atolworthie2b@discovery.com"
                },
                "sales": {
                    "responsibleInternal": "Karon Tolworthie",
                    "responsibleExternal": "Aguste Tolworthie",
                    "keycode": "demizz",
                    "serviceProvider": "meezzy",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "aliquam quis turpis eget elit sodales scelerisque. mauris sit amet eros. suspendisse accumsan tortor quis turpis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/102x178.png/dddddd/000000"
        }, {
            "id": "0fc8fd5c-e769-4189-abea-e3e75248572d",
            "name": "Browsebug",
            "country": "PE",
            "ociCustomerNumber": 29903393,
            "username": "rvalero2c@barnesandnoble.com",
            "password": "5hdq2Asoz4",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Andréanne",
                    "lastName": "Valero",
                    "function": "Product Management",
                    "telefon": "+4704994321",
                    "email": "rvalero2c@miibeian.gov.cn"
                },
                "sales": {
                    "responsibleInternal": "Dulcie Valero",
                    "responsibleExternal": "Ruben Valero",
                    "keycode": "browsebug",
                    "serviceProvider": "jatri",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. mauris lacinia sapien quis libero.\n\nnullam sit amet turpis elementum ligula vehicula consequat. morbi a ipsum. integer a nibh.\n\nin quis justo. maecenas rhoncus aliquam lacus. morbi quis tortor id nulla ultrices aliquet.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/185x196.jpg/cc0000/ffffff"
        }, {
            "id": "3cedea45-ef0f-44ae-ad17-60735c29b97c",
            "name": "Skaboo",
            "country": "MY",
            "ociCustomerNumber": 53764552,
            "username": "nbantham2d@nba.com",
            "password": "6GHPvtVF",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Gaëlle",
                    "lastName": "Bantham",
                    "function": "Support",
                    "telefon": "+4778584410",
                    "email": "nbantham2d@discuz.net"
                },
                "sales": {
                    "responsibleInternal": "Darla Bantham",
                    "responsibleExternal": "Nanny Bantham",
                    "keycode": "skaboo",
                    "serviceProvider": "topiclounge",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "integer ac leo. pellentesque ultrices mattis odio. donec vitae nisi.\n\nnam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. sed vel enim sit amet nunc viverra dapibus. nulla suscipit ligula in lacus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/190x174.png/cc0000/ffffff"
        }, {
            "id": "444106d5-f629-4d7f-9d4a-e5169d4f348f",
            "name": "Twitterbridge",
            "country": "PT",
            "ociCustomerNumber": 45945892,
            "username": "dslides2e@ameblo.jp",
            "password": "Y2wghGOnzYV",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Andrée",
                    "lastName": "Slides",
                    "function": "Human Resources",
                    "telefon": "+5840801150",
                    "email": "dslides2e@diigo.com"
                },
                "sales": {
                    "responsibleInternal": "Davie Slides",
                    "responsibleExternal": "Doroteya Slides",
                    "keycode": "twitterbridge",
                    "serviceProvider": "livepath",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "lorem ipsum dolor sit amet, consectetuer adipiscing elit. proin risus. praesent lectus.\n\nvestibulum quam sapien, varius ut, blandit non, interdum in, ante. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; duis faucibus accumsan odio. curabitur convallis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/245x220.bmp/dddddd/000000"
        }, {
            "id": "beb72929-cf9c-41f6-bfb3-d9274b9ac50c",
            "name": "Plajo",
            "country": "JP",
            "ociCustomerNumber": 28491738,
            "username": "bfedorski2f@pinterest.com",
            "password": "YKlcFuERhO",
            "discount": "5%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mårten",
                    "lastName": "Fedorski",
                    "function": "Sales",
                    "telefon": "+1015787281",
                    "email": "bfedorski2f@unblog.fr"
                },
                "sales": {
                    "responsibleInternal": "Roanne Fedorski",
                    "responsibleExternal": "Branden Fedorski",
                    "keycode": "plajo",
                    "serviceProvider": "bluejam",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. vivamus vestibulum sagittis sapien. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\netiam vel augue. vestibulum rutrum rutrum neque. aenean auctor gravida sem.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/156x223.jpg/cc0000/ffffff"
        }, {
            "id": "11d0a0d9-3429-4590-99c5-7b27bcdb52cd",
            "name": "Thoughtblab",
            "country": "RU",
            "ociCustomerNumber": 59017701,
            "username": "jvlies2g@oracle.com",
            "password": "SIail16kvM",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Eléonore",
                    "lastName": "Vlies",
                    "function": "Engineering",
                    "telefon": "+6786118632",
                    "email": "jvlies2g@irs.gov"
                },
                "sales": {
                    "responsibleInternal": "Melissa Vlies",
                    "responsibleExternal": "Jandy Vlies",
                    "keycode": "thoughtblab",
                    "serviceProvider": "mynte",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "proin eu mi. nulla ac enim. in tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nduis aliquam convallis nunc. proin at turpis a pede posuere nonummy. integer non velit.\n\ndonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. integer ac neque.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/199x134.jpg/cc0000/ffffff"
        }, {
            "id": "f1e0e6c3-c12c-4829-8bf6-f17f4fd8daef",
            "name": "Pixoboo",
            "country": "MX",
            "ociCustomerNumber": 94649439,
            "username": "gbolden2h@sbwire.com",
            "password": "mRTWC5",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Bérangère",
                    "lastName": "Bolden",
                    "function": "Business Development",
                    "telefon": "+8136297891",
                    "email": "gbolden2h@bbb.org"
                },
                "sales": {
                    "responsibleInternal": "Morlee Bolden",
                    "responsibleExternal": "Gilda Bolden",
                    "keycode": "pixoboo",
                    "serviceProvider": "trupe",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "praesent id massa id nisl venenatis lacinia. aenean sit amet justo. morbi ut odio.\n\ncras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. in blandit ultrices enim. lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/117x121.jpg/ff4444/ffffff"
        }, {
            "id": "2d92331a-8fb3-410c-9c30-1e883add20c9",
            "name": "Lazz",
            "country": "PE",
            "ociCustomerNumber": 90426931,
            "username": "dolifaunt2i@psu.edu",
            "password": "h1rDN5sNG",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Annotés",
                    "lastName": "Olifaunt",
                    "function": "Human Resources",
                    "telefon": "+4400664905",
                    "email": "dolifaunt2i@51.la"
                },
                "sales": {
                    "responsibleInternal": "Devin Olifaunt",
                    "responsibleExternal": "Doe Olifaunt",
                    "keycode": "lazz",
                    "serviceProvider": "jayo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "suspendisse potenti. in eleifend quam a odio. in hac habitasse platea dictumst.\n\nmaecenas ut massa quis augue luctus tincidunt. nulla mollis molestie lorem. quisque ut erat.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/154x192.png/cc0000/ffffff"
        }, {
            "id": "d80a9d34-4871-4731-8ea6-c341f8afa921",
            "name": "Fanoodle",
            "country": "RU",
            "ociCustomerNumber": 89894920,
            "username": "fjohantges2j@slideshare.net",
            "password": "ztDVAIOQ",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Björn",
                    "lastName": "Johantges",
                    "function": "Sales",
                    "telefon": "+6387144783",
                    "email": "fjohantges2j@barnesandnoble.com"
                },
                "sales": {
                    "responsibleInternal": "Edgar Johantges",
                    "responsibleExternal": "Farly Johantges",
                    "keycode": "fanoodle",
                    "serviceProvider": "yodoo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "quisque porta volutpat erat. quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. nunc purus.\n\nphasellus in felis. donec semper sapien a libero. nam dui.\n\nproin leo odio, porttitor id, consequat in, consequat ut, nulla. sed accumsan felis. ut at dolor quis odio consequat varius.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/103x104.bmp/cc0000/ffffff"
        }, {
            "id": "fbcd10e3-f14b-4996-8c19-cd4ca2346569",
            "name": "Einti",
            "country": "SE",
            "ociCustomerNumber": 35807698,
            "username": "lsaice2k@newyorker.com",
            "password": "rqPmZCwTy",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Clémence",
                    "lastName": "Saice",
                    "function": "Engineering",
                    "telefon": "+1291144477",
                    "email": "lsaice2k@dailymail.co.uk"
                },
                "sales": {
                    "responsibleInternal": "Sheppard Saice",
                    "responsibleExternal": "Livvyy Saice",
                    "keycode": "einti",
                    "serviceProvider": "eayo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "in congue. etiam justo. etiam pretium iaculis justo.\n\nin hac habitasse platea dictumst. etiam faucibus cursus urna. ut tellus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/102x101.bmp/dddddd/000000"
        }, {
            "id": "d16ff518-fb2f-45ea-89e6-29758da1db03",
            "name": "Wordtune",
            "country": "MK",
            "ociCustomerNumber": 66367852,
            "username": "acolclough2l@weather.com",
            "password": "lM7vsYKa5iKh",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Anaëlle",
                    "lastName": "Colclough",
                    "function": "Sales",
                    "telefon": "+3041379289",
                    "email": "acolclough2l@cornell.edu"
                },
                "sales": {
                    "responsibleInternal": "Hillary Colclough",
                    "responsibleExternal": "Aloysius Colclough",
                    "keycode": "wordtune",
                    "serviceProvider": "viva",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "pellentesque at nulla. suspendisse potenti. cras in purus eu magna vulputate luctus.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/125x181.png/dddddd/000000"
        }, {
            "id": "199d98c1-7055-435d-9613-061cb6fbd0dc",
            "name": "Yakitri",
            "country": "NG",
            "ociCustomerNumber": 43793483,
            "username": "jzoren2m@over-blog.com",
            "password": "FjrIX3m8Ln",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Mà",
                    "lastName": "Zoren",
                    "function": "Research and Development",
                    "telefon": "+0713940081",
                    "email": "jzoren2m@joomla.org"
                },
                "sales": {
                    "responsibleInternal": "Ruggiero Zoren",
                    "responsibleExternal": "Jeth Zoren",
                    "keycode": "yakitri",
                    "serviceProvider": "yakidoo",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "sed ante. vivamus tortor. duis mattis egestas metus.\n\naenean fermentum. donec ut mauris eget massa tempor convallis. nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nquisque id justo sit amet sapien dignissim vestibulum. vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; nulla dapibus dolor vel est. donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/175x207.jpg/dddddd/000000"
        }, {
            "id": "c6eba645-78af-4ad9-9577-45225981381c",
            "name": "Wordify",
            "country": "ID",
            "ociCustomerNumber": 41182654,
            "username": "smogford2n@china.com.cn",
            "password": "OBWrTuKF1",
            "discount": "5%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Aí",
                    "lastName": "Mogford",
                    "function": "Legal",
                    "telefon": "+5957508222",
                    "email": "smogford2n@google.de"
                },
                "sales": {
                    "responsibleInternal": "Llywellyn Mogford",
                    "responsibleExternal": "Serene Mogford",
                    "keycode": "wordify",
                    "serviceProvider": "photobean",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "cras non velit nec nisi vulputate nonummy. maecenas tincidunt lacus at velit. vivamus vel nulla eget eros elementum pellentesque.\n\nquisque porta volutpat erat. quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. nunc purus.\n\nphasellus in felis. donec semper sapien a libero. nam dui.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/193x241.bmp/dddddd/000000"
        }, {
            "id": "fe4b8cd9-cd14-4bc3-af9f-7efa978d0824",
            "name": "Babbleopia",
            "country": "AR",
            "ociCustomerNumber": 79468385,
            "username": "igracewood2o@wsj.com",
            "password": "oaaU7XwPe",
            "discount": "10%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Alizée",
                    "lastName": "Gracewood",
                    "function": "Product Management",
                    "telefon": "+1843456094",
                    "email": "igracewood2o@usda.gov"
                },
                "sales": {
                    "responsibleInternal": "Timmi Gracewood",
                    "responsibleExternal": "Ingrid Gracewood",
                    "keycode": "babbleopia",
                    "serviceProvider": "twinte",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "nullam porttitor lacus at turpis. donec posuere metus vitae ipsum. aliquam non mauris.\n\nmorbi non lectus. aliquam sit amet diam in magna bibendum imperdiet. nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/122x212.bmp/5fa2dd/ffffff"
        }, {
            "id": "edf989b5-d758-4075-ae21-9c8be7ca0f92",
            "name": "Edgeify",
            "country": "FI",
            "ociCustomerNumber": 91404080,
            "username": "treeks2p@quantcast.com",
            "password": "sb46jIM",
            "discount": "12%",
            "fixedPricelist": "yes",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Anaël",
                    "lastName": "Reeks",
                    "function": "Sales",
                    "telefon": "+2878818208",
                    "email": "treeks2p@gmpg.org"
                },
                "sales": {
                    "responsibleInternal": "Taddeusz Reeks",
                    "responsibleExternal": "Todd Reeks",
                    "keycode": "edgeify",
                    "serviceProvider": "skiptube",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "fusce consequat. nulla nisl. nunc nisl.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/186x182.bmp/cc0000/ffffff"
        }, {
            "id": "57d97a32-49fd-47cb-ae46-16e92915d4c6",
            "name": "Avamba",
            "country": "MS",
            "ociCustomerNumber": 79190317,
            "username": "emeaden2q@technorati.com",
            "password": "BRuPCaseyK",
            "discount": "15%",
            "fixedPricelist": "no",
            "marginCheck": "yes",
            "exclusions": "no",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Personnalisée",
                    "lastName": "Meaden",
                    "function": "Product Management",
                    "telefon": "+5205282705",
                    "email": "emeaden2q@spotify.com"
                },
                "sales": {
                    "responsibleInternal": "Torr Meaden",
                    "responsibleExternal": "Essie Meaden",
                    "keycode": "avamba",
                    "serviceProvider": "lazzy",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "aliquam quis turpis eget elit sodales scelerisque. mauris sit amet eros. suspendisse accumsan tortor quis turpis.\n\nsed ante. vivamus tortor. duis mattis egestas metus.\n\naenean fermentum. donec ut mauris eget massa tempor convallis. nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/203x245.png/5fa2dd/ffffff"
        }, {
            "id": "8c4d19d0-9373-4299-b4b8-8bf71d990d70",
            "name": "Centidel",
            "country": "MX",
            "ociCustomerNumber": 33231283,
            "username": "lisherwood2r@homestead.com",
            "password": "ifLV1Nmuo",
            "discount": "10%",
            "fixedPricelist": "no",
            "marginCheck": "no",
            "exclusions": "yes",
            "shopLink": "https://oci.conrad.biz/ce/de/OciLogin.html",
            "details": {
                "contactPerson": {
                    "firstName": "Lauréna",
                    "lastName": "Isherwood",
                    "function": "Training",
                    "telefon": "+4090561102",
                    "email": "lisherwood2r@jimdo.com"
                },
                "sales": {
                    "responsibleInternal": "Tully Isherwood",
                    "responsibleExternal": "Leoine Isherwood",
                    "keycode": "centidel",
                    "serviceProvider": "shufflebeat",
                    "cspCustomerNumber": "",
                    "cspPassword": ""
                },
                "notes": {
                    "text": "phasellus in felis. donec semper sapien a libero. nam dui.\n\nproin leo odio, porttitor id, consequat in, consequat ut, nulla. sed accumsan felis. ut at dolor quis odio consequat varius.",
                    "files": {
                        "0": ""
                    }
                }
            },
            "image": "http://dummyimage.com/244x161.bmp/dddddd/000000"
        }
    ];

    var data = {
        searchText: "",
        searchResults: [],
        selectedUser: null
    };

    serv.searchUsers = function (searchText) {

        data.searchText = searchText;

        return new Promise(function (resolve, reject) {

            // Simulationg a rest request
            $rootScope.safeApply(function () {
                $timeout(function () {
                    data.searchResults = toArrayFilter(users).filter(createUserFilter(searchText));
                    resolve(toArrayFilter(users).filter(createUserFilter(searchText)));
                }, getRandom(200, 1000));
            });
        });

    };

    serv.getSearchText = function () {
        return data.searchText;
    };

    serv.getSearchResults = function () {
        return data.searchResults;
    };

    serv.getSelectedUser = function () {
        return data.selectedUser;
    };

    serv.setSelectedUser = function (user) {
        serv.searchUsers("");
        data.selectedUser = user;
    };

    function getRandom(lowerBound, upperBound) {
        return (Math.random() * (upperBound - lowerBound)) + lowerBound;
    }

    function createUserFilter(searchText) {

        searchText = searchText.toLowerCase();

        return function (user) {
            var properties = ["name", "username", "ociCustomerNumber"];

            var property;
            for (var i = 0; i < properties.length; i++) {

                property = properties[i];
                if (user[property].toString().toLowerCase().indexOf(searchText) !== -1) {
                    return true;
                }
            }
        }
    }

    function init() {
        serv.searchUsers("");
    }

    init();
}]);