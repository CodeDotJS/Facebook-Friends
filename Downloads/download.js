var fs = require('fs');
var request = require('request');

// the below url is extracted via another script which I am not putting here for some reasons!

var urlList = [
"https://graph.facebook.com/100011710319548/picture?width=100",
"https://graph.facebook.com/100008123852509/picture?width=100",
"https://graph.facebook.com/100002432079505/picture?width=100",
"https://graph.facebook.com/100008039208459/picture?width=100",
"https://graph.facebook.com/100002703336511/picture?width=100",
"https://graph.facebook.com/100002423550309/picture?width=100",
"https://graph.facebook.com/100004571671607/picture?width=100",
"https://graph.facebook.com/1190760290/picture?width=100",
"https://graph.facebook.com/100004136820556/picture?width=100",
"https://graph.facebook.com/100002298965240/picture?width=100",
"https://graph.facebook.com/100002609735360/picture?width=100",
"https://graph.facebook.com/100005632770309/picture?width=100",
"https://graph.facebook.com/100003175935615/picture?width=100",
"https://graph.facebook.com/100003285033514/picture?width=100",
"https://graph.facebook.com/100008085465134/picture?width=100",
"https://graph.facebook.com/1827799574/picture?width=100",
"https://graph.facebook.com/100002421445460/picture?width=100",
"https://graph.facebook.com/100001571177993/picture?width=100",
"https://graph.facebook.com/100000760293525/picture?width=100",
"https://graph.facebook.com/100002173062736/picture?width=100",
"https://graph.facebook.com/100012252557011/picture?width=100",
"https://graph.facebook.com/100011338625381/picture?width=100",
"https://graph.facebook.com/100010093122517/picture?width=100",
"https://graph.facebook.com/100000411236778/picture?width=100",
"https://graph.facebook.com/1767058290/picture?width=100",
"https://graph.facebook.com/100003778178701/picture?width=100",
"https://graph.facebook.com/100008207042056/picture?width=100",
"https://graph.facebook.com/100008174343870/picture?width=100",
"https://graph.facebook.com/100002904920434/picture?width=100",
"https://graph.facebook.com/100012338641349/picture?width=100",
"https://graph.facebook.com/100004584309974/picture?width=100",
"https://graph.facebook.com/100007941663466/picture?width=100",
"https://graph.facebook.com/100002440798167/picture?width=100",
"https://graph.facebook.com/100001634903898/picture?width=100",
"https://graph.facebook.com/100003916038510/picture?width=100",
"https://graph.facebook.com/100002741330756/picture?width=100",
"https://graph.facebook.com/100002431891915/picture?width=100",
"https://graph.facebook.com/100002971185433/picture?width=100",
"https://graph.facebook.com/100000234476003/picture?width=100",
"https://graph.facebook.com/100005398903319/picture?width=100",
"https://graph.facebook.com/100001324667332/picture?width=100",
"https://graph.facebook.com/551203752/picture?width=100",
"https://graph.facebook.com/100006628630549/picture?width=100",
"https://graph.facebook.com/100002676676790/picture?width=100",
"https://graph.facebook.com/100003064262860/picture?width=100",
"https://graph.facebook.com/562361028/picture?width=100",
"https://graph.facebook.com/100012929202281/picture?width=100",
"https://graph.facebook.com/100007243682818/picture?width=100",
"https://graph.facebook.com/100003075638742/picture?width=100",
"https://graph.facebook.com/100002810391252/picture?width=100",
"https://graph.facebook.com/100001317756588/picture?width=100",
"https://graph.facebook.com/100002724194258/picture?width=100",
"https://graph.facebook.com/100006113586617/picture?width=100",
"https://graph.facebook.com/100007166711264/picture?width=100",
"https://graph.facebook.com/100002328285489/picture?width=100",
"https://graph.facebook.com/100001370895491/picture?width=100",
"https://graph.facebook.com/100002921425945/picture?width=100",
"https://graph.facebook.com/100004975026236/picture?width=100",
"https://graph.facebook.com/100004552954515/picture?width=100",
"https://graph.facebook.com/541665380/picture?width=100",
"https://graph.facebook.com/100001267121187/picture?width=100",
"https://graph.facebook.com/100004172803886/picture?width=100",
"https://graph.facebook.com/100003445746061/picture?width=100",
"https://graph.facebook.com/554501226/picture?width=100",
"https://graph.facebook.com/100013014401105/picture?width=100",
"https://graph.facebook.com/100011702409668/picture?width=100",
"https://graph.facebook.com/100004055495224/picture?width=100",
"https://graph.facebook.com/100008204462828/picture?width=100",
"https://graph.facebook.com/100006363725721/picture?width=100",
"https://graph.facebook.com/100004495442294/picture?width=100",
"https://graph.facebook.com/529005719/picture?width=100",
"https://graph.facebook.com/100002689512706/picture?width=100",
"https://graph.facebook.com/100001795381031/picture?width=100",
"https://graph.facebook.com/100003830612427/picture?width=100",
"https://graph.facebook.com/100001974870653/picture?width=100",
"https://graph.facebook.com/100012069434114/picture?width=100",
"https://graph.facebook.com/1267819934/picture?width=100",
"https://graph.facebook.com/100011396059899/picture?width=100",
"https://graph.facebook.com/100001505139343/picture?width=100",
"https://graph.facebook.com/100010454676161/picture?width=100",
"https://graph.facebook.com/100000451356981/picture?width=100",
"https://graph.facebook.com/100004724805977/picture?width=100",
"https://graph.facebook.com/100000080231608/picture?width=100",
"https://graph.facebook.com/100002255057456/picture?width=100",
"https://graph.facebook.com/100004223222198/picture?width=100",
"https://graph.facebook.com/100000461452472/picture?width=100",
"https://graph.facebook.com/100007033114468/picture?width=100",
"https://graph.facebook.com/1685359212/picture?width=100",
"https://graph.facebook.com/100003119771583/picture?width=100",
"https://graph.facebook.com/100002955909110/picture?width=100",
"https://graph.facebook.com/100003827212352/picture?width=100",
"https://graph.facebook.com/100012142577998/picture?width=100",
"https://graph.facebook.com/100001373747032/picture?width=100",
"https://graph.facebook.com/100005485058624/picture?width=100",
"https://graph.facebook.com/100007383794380/picture?width=100",
"https://graph.facebook.com/100007701130182/picture?width=100",
"https://graph.facebook.com/1737295533/picture?width=100",
"https://graph.facebook.com/100004522980955/picture?width=100",
"https://graph.facebook.com/100012403711935/picture?width=100",
"https://graph.facebook.com/100000764558495/picture?width=100",
"https://graph.facebook.com/100002664131107/picture?width=100",
"https://graph.facebook.com/100001989153909/picture?width=100",
"https://graph.facebook.com/100001185661694/picture?width=100",
"https://graph.facebook.com/100002265015016/picture?width=100",
"https://graph.facebook.com/100004655654023/picture?width=100",
"https://graph.facebook.com/100001400055463/picture?width=100",
"https://graph.facebook.com/100000910458213/picture?width=100",
"https://graph.facebook.com/100000939134767/picture?width=100",
"https://graph.facebook.com/100013702244265/picture?width=100",
"https://graph.facebook.com/100001940496405/picture?width=100",
"https://graph.facebook.com/751250626/picture?width=100",
"https://graph.facebook.com/100011713900659/picture?width=100",
"https://graph.facebook.com/100002956913046/picture?width=100",
"https://graph.facebook.com/100002677126733/picture?width=100",
"https://graph.facebook.com/100003058048486/picture?width=100",
"https://graph.facebook.com/100001211705035/picture?width=100",
"https://graph.facebook.com/100008390702029/picture?width=100",
"https://graph.facebook.com/100003673786961/picture?width=100",
"https://graph.facebook.com/100009146937183/picture?width=100",
"https://graph.facebook.com/100004258778789/picture?width=100",
"https://graph.facebook.com/100002793606881/picture?width=100",
"https://graph.facebook.com/100002244392699/picture?width=100",
"https://graph.facebook.com/100009449176400/picture?width=100",
"https://graph.facebook.com/100005652168714/picture?width=100",
"https://graph.facebook.com/100003802228623/picture?width=100",
"https://graph.facebook.com/100003002344307/picture?width=100",
"https://graph.facebook.com/100011136549047/picture?width=100",
"https://graph.facebook.com/100001957702877/picture?width=100",
"https://graph.facebook.com/100004621894984/picture?width=100",
"https://graph.facebook.com/100003381438319/picture?width=100"]

var download = function(url, dest, callback){
    request.get(url)
    .on('error', function(err) {console.log(err)} )
    .pipe(fs.createWriteStream(dest))
    .on('close', callback);

};

urlList.forEach( function(str) {
  var filename =  Math.random().toString(15).substr(5,6) + '.jpg';
  console.log('Downloading ' + filename);
  download(str, filename, function(){console.log('Finished Downloading' + filename)});
});
