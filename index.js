var submit = document.getElementById("sub");
var cons = document.getElementById("cons");
var bytt = document.getElementById("bytt");
var del = document.getElementById("del");
var img = document.getElementById("img");
var img2 = document.getElementById("img2");
var lier = document.getElementById("lier");
var jobb = document.getElementById("jobb");
var center = document.getElementById("center");
var ansatt = [
  {
    ansatt_id: 1,

    forNavn: "Jorunn",

    etterNavn: "Johnsen",

    alder: 38,

    adress: "100 Internet Dr",

    postNummer: 1383,

    postSted: "Asker",

    jobbNavn: "Manager",

    lønn: 60000,

    state: true,

    phoneNumbers: [{ Mobile: "111-111-1111" }, { Home: "222-222-2222" }],

    epost: "jorunn@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },

  {
    ansatt_id: 2,

    forNavn: "Rasmuss",

    etterNavn: "Rasmussen",

    alder: 28,

    adress: "101 Internet Dr",

    postNummer: 1385,

    postSted: "Asker",

    jobbNavn: "Analyst",

    lønn: 50000,

    state: true,

    phoneNumbers: [{ Mobile: "333-111-1111" }, { Home: "333-222-2222" }],

    epost: "rasmuss@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    ansatt_id: 3,

    forNavn: "Andrea",

    etterNavn: "Onstad",

    alder: 30,

    adress: "102 Internet Dr",

    postNummer: 3400,

    postSted: "Lier",

    jobbNavn: "Analyst",

    lønn: 50000,

    state: true,

    phoneNumbers: [{ Mobile: "444-111-1111" }, { Home: "444-222-2222" }],

    epost: "andrea@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    ansatt_id: 4,

    forNavn: "Marius",

    etterNavn: "Helseth",

    alder: 25,

    adress: "102 Internet Dr",

    postNummer: 3427,

    postSted: "Gullaug",

    jobbNavn: "kontorist",

    lønn: 40000,

    state: true,

    phoneNumbers: [{ Mobile: "555-111-1111" }, { Home: "555-222-2222" }],

    epost: "marius@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },

  {
    ansatt_id: 5,

    forNavn: "Tom",

    etterNavn: "Rin Tin Tin",

    alder: 25,

    adress: "104 Internet Dr",

    postNummer: 3427,

    postSted: "Gullaug",

    jobbNavn: "kontorist",

    lønn: 40000,

    state: true,

    phoneNumbers: [{ Mobile: "666-111-1111" }, { Home: "666-222-2222" }],

    epost: "joris@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    ansatt_id: 6,

    forNavn: "Jostein",

    etterNavn: "Winsnes",

    alder: 45,

    adress: "105 Internet Dr",

    postNummer: 3400,

    postSted: "Lier",

    jobbNavn: "Manager",

    lønn: 60000,

    state: true,

    phoneNumbers: [{ Mobile: "777-111-1111" }, { Home: "777-222-2222" }],

    epost: "jostein@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    ansatt_id: 7,

    forNavn: "Markus",

    etterNavn: "Snare",

    alder: 41,

    adress: "106 Internet Dr",

    postNummer: 3400,

    postSted: "Lier",

    jobbNavn: "portier",

    lønn: 35000,

    state: true,

    phoneNumbers: [{ Mobile: "888-111-1111" }, { Home: "888-222-2222" }],

    epost: "markus@gmail.com",

    navn: function () {
      return this.forNavn + " " + this.etterNavn;
    },

    bildet:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
console.log(ansatt);
//Vis navn
submit.onclick = function myfunc() {
  for (let i = 0; i < ansatt.length; i++) {
    console.log(ansatt[i].forNavn + " " + ansatt[i].etterNavn);
  }
};
//Bytt alder
bytt.onclick = function myfunc() {
  ansatt[1].alder = 29;
  console.log(ansatt);
};
//Legg til telefon
cons.onclick = function myfunc() {
  ansatt[6].phoneNumbers.bedriftstelefon = 333;
  console.log(ansatt);
};
//Fjern epost
del.onclick = function myfunc() {
  delete ansatt[3].epost;
  console.log(ansatt);
};
//Vis bilder
img.onclick = function myfunc() {
  for (let i = 0; i < ansatt.length; i++) {
    document.write("<img src=" + ansatt[i].bildet + " alt= / height=600px>");
  }
};

//Vis bildet til id 4
img2.onclick = function myfunc() {
  document.write("<img src=" + ansatt[3].bildet + " alt= / height=600px>");
};
//Vis bildet til alle i lier
lier.onclick = function myfunc() {
  for (let i = 0; i < ansatt.length; i++) {
    if (ansatt[i].postSted == "Lier") {
      document.write("<img src=" + ansatt[i].bildet + " alt= / height=600px>");
    }
  }
};
//Vis bildet til alle som er managar
jobb.onclick = function myfunc() {
  center.setAttribute("class", "hide");
  var body = document.getElementById("body");
  var cont = document.createElement("div");
  body.appendChild(cont);
  cont.setAttribute("class", "cont");

  for (let i = 0; i < ansatt.length; i++) {
    if (ansatt[i].jobbNavn == "Manager") {
      var write = "<img src=" + ansatt[i].bildet + " alt= / height=600px>";
      cont.insertAdjacentHTML("afterbegin", write);
    }
  }
};
