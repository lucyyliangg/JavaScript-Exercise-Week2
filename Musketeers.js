const musketeers = ["Athos", "Pathos", "Aramis"];

for(let x= 0; x < musketeers.length; x++){
  console.log(musketeers[x]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(musketeer => {
  console.log(musketeer);
});

musketeers.splice(2,1);

for (const musketeer of musketeers) {
  console.log(musketeer);
}
