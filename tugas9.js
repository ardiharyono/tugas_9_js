function panggilAku() {
  var motor = {
    merk : ["honda","suzuki","yamaha"],
    tahun : [2018,2019,2020],
    harga : [18000000,19000000,20000000],
  }
  for(var x in motor) {
    console.log(motor[x]);
  }
}

panggilAku()
