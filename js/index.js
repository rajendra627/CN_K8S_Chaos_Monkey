var chart = AmCharts.makeChart("chartdiv", {
  "type": "pie",
  "colors": ["#f37a4e", "#ea1162", "#19B278", "#3CBEC5","#F6A85A","#F1768B"],
  "startDuration": 1,
   "theme": "light",
  "addClassNames": true,
 "legend":{
    "position":"right",
    "marginRight":200,
    "autoMargins":false
  },
  "innerRadius": "60%",
  "defs": {
    "filter": [{
      "id": "shadow",
      "width": "500%",
      "height": "300%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": 0,
        "dy": 0
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": 5
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }]
  },
  "dataProvider": [{
    "task": "Pod Kill - Random", "count": 10
  }, {
    "task": "Docker Container Kill - Random", "count": 6
  }, {
    "task": "Drain Node - Evit Pods - Random", "count": 5
  }, {
    "task": "Etcd Node Delete - Random", "count": 5
  }, {
    "task": "DockerD Restart - Random", "count": 5
  }, {
    "task": "Worker Node Delete - Random", "count": 5
  }, {
    "task": "Etcd Node Add - New", "count": 5
  }, {
    "task": "Kubelet Restart - K8S Node - Random", "count": 5
  }, {
    "task": "Worker Node Add - New", "count": 5
  }, {
    "task": "Istio Rules Applied - HTTP Errors", "count": 10
  }, {
    "task": "Istio Rules Applied - Timeouts", "count": 20
  }, {
    "task": "Istio Rules Applied - Retries", "count": 30
  }, {
    "task": "Leaf and Spines - Port Shut & No Shut", "count": 20
  }, {
    "task": "Leaf and Spines - BGP/BFD Down", "count": 10
  }, {
    "task": "Leaf and Spines - Clear BGP Peers", "count": 16
  }, {
    "task": "Leaf and Spines - Clear BGP Routes", "count": 19
  }, {
    "task": "Leaf and Spines - Switch Reloads", "count": 10
  }, {
    "task": "K8S Node - Clean Reboot - Random", "count": 10
  }, {
    "task": "K8S Node - Emergency Reboot - Random", "count": 10
  }],
  "valueField": "count",
  "titleField": "task",
  "export": {
    "enabled": true
  }
});

chart.addListener("init", handleInit);

chart.addListener("rollOverSlice", function(e) {
  handleRollOver(e);
});

function handleInit(){
  chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e){
  var wedge = e.dataItem.wedge.node;
  wedge.parentNode.appendChild(wedge);
}
