import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./booksection.css";
import Card from "../card/card";
import book1 from "../../book1.png";
import book2 from "../../book2.png";
import book3 from "../../book3.png";
function booksection() {
  var list = [book1, book2, book3];
  var desc = [
    "Central Excise Manual (Vol2) (Set Of 3 Books)",
    "Income Tax Rules With Master Guide To Income Tax Rules",
    "Central Excise Manual (Vol2) (Set Of 3 Books)",
  ];
  var writer = [
    "By S.N. Bidani, P.K. Mitra",
    "Aditya Gadge, Biharilal Deora",
    "Amitabh Mukherjee",
  ];
  var cost = [1799, 345, 1799];
  var row = [];
  for (var i = 1; i < 30; i++) {
    var index = Math.floor(Math.random() * list.length);
    var n = list[index];
    var d = desc[index];
    var w = writer[index];
    var c = cost[index];
    row.push(<Card name={n} desc={d} writer={w} cost={c} />);
  }
  return (
    <div class="mt-4">
      <div class="d-flex justify-content-between">
        <span class="h3">Recommended For You<i class="fa fa-angle-down orange pl-3"></i></span>
        <span class="orange">View All</span>
      </div>
      <div class="row ">{row.map((card) => card)}</div>
    </div>
  );
}

export default booksection;
