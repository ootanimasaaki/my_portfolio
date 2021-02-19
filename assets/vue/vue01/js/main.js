//GoogleChartsと連動させる例

var orgdata = [
  ['種類','個数'],
  ['幕ノ内',3],
  ['カルビ弁当',4],
  ['オムライス',5],
  ['冷やし中華',1],
  ['ビビンバ',3],
  ];

  google.charts.load('current',{packages: ['corechart']});
  google.charts.setOnLoadCallback(drawBasic);

  //グラフを表示する関数
  function drawBasic() {
    var data = google.visualization.arrayToDataTable(orgdata);
    var options = {
      title: '好きなランチ',
      // titlePosition: 'none',
      width: 1000,
      height: 500,
      // legend: {
      //   position: "none"
      // },
      // backgroundColor: '#f8f8f8',
      slices: [1, {offset: 0.2}],
      is3D:true
    };
    var chart = new google.visualization.PieChart(
      document.getElementById('chart_div'));
      chart.draw(data,options);
  }

  new Vue({
    el: '#app',
    data: {
      dataArray:orgdata
    },
    methods: {
      addOne: function(val) {
        var obj = this.dataArray[val];
        obj[1]++;
        this.dataArray.splice(val, 1, obj);
        drawBasic();
      },
      deleteOne: function(val) {
        var obj = this.dataArray[val];
        if(obj[1] > 0){
          obj[1]--;
        }else {
          return;
        }
        this.dataArray.splice(val, 1, obj);
        drawBasic();
      },
    }
  });
