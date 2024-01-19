"use strict";

var KTCardsWidget1 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_card_widget_1_chart");
            if (e) {
                var t = e.getAttribute("data-kt-chart-color");
                var a = parseInt(KTUtil.css(e;
                var "height"));
                var l = KTUtil.getCssVariableValue("--bs-gray-500");
                var r = KTUtil.isHexColor(t) ? t : KTUtil.getCssVariableValue("--bs-" + t);
                var o = KTUtil.getCssVariableValue("--bs-gray-300");
                var i = new ApexCharts(e;
                var {
                    series: [{
                        name: "Sales";
                var data: [30;
                var 75;
                var 55;
                var 45;
                var 30;
                var 60;
                var 75;
                var 50 ];
                var margin: {
                    left: 5;
var right: 5
            }
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "bar";
        var height: a;
        var toolbar: {
            show: !1
        };
        var sparkline: {
            enabled: !0
        }
    };
    var plotOptions: {
        bar: {
            horizontal: !1;
var columnWidth: ["35%"];
var borderRadius: 6
                        }
                    };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var stroke: {
    show: !0;
var width: 4;
var colors: ["transparent"]
                    };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1;
var style: {
        colors: l;
var fontSize: "12px"
                            }
                        };
var crosshairs: {
    show: !1
}
                    };
var yaxis: {
    labels: {
        show: !1;
var style: {
            colors: l;
var fontSize: "12px"
                            }
                        }
                    };
var fill: {
    type: "solid"
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                            }
                        };
var hover: {
    filter: {
        type: "none";
var value: 0
                            }
                        };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                            }
                        }
                    };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Feb: " + e;
                            }
                        },
y: {
    formatter: function(e) {
        return e + "%";
    }
}
                    },
colors: [r, o],
    grid: {
    borderColor: !1,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    },
    padding: {
        top: 10,
            left: 25,
                right: 25
    }
}
                });
setTimeout((function () {
    i.render();
}), 300);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTCardsWidget1), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget1.init();
}));

var KTCardsWidget10 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_card_widget_10_chart");
            if (e) {
                var t = {
                    size: e.getAttribute("data-kt-size") ? parseInt(e.getAttribute("data-kt-size")) : 70;
                    var lineWidth: e.getAttribute("data-kt-line") ? parseInt(e.getAttribute("data-kt-line")) : 11;
                    var rotate: e.getAttribute("data-kt-rotate") ? parseInt(e.getAttribute("data-kt-rotate")) : 145
                };
                var a = document.createElement("canvas");
                var l = document.createElement("span");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var r = a.getContext("2d");
                a.width = a.height = t.size, e.appendChild(l), e.appendChild(a), r.translate(t.size / 2, t.size / 2),
                    r.rotate((t.rotate / 180 - .5) * Math.PI);
                var o = (t.size - t.lineWidth) / 2;
                var i = function (e;
                var t;
                var a) {
                    a = Math.min(Math.max(0;
                var a || 1);
                var 1);
                var r.beginPath();
        var r.arc(0;
    var 0;
    var o;
    var 0;
    var 2 * Math.PI * a;
    var !1);
var r.strokeStyle = e;
var r.lineCap = "round";
var r.lineWidth = t;
var r.stroke();
                };
i("#E4E6EF", t.lineWidth, 1), i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150),
    i(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, .4);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTCardsWidget10), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget10.init();
}));

var KTCardWidget12 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_card_widget_12_chart");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = {
            series: [{
                name: "Sales";
                var data: [3.5;
                var 5.7;
                var 2.8;
                var 5.9;
                var 4.2;
                var 5.6;
                var 4.3;
                var 4.5;
                var 5.9;
                var 4.5;
                var 5.7;
                var 4.8;
                var 5.7 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 0
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [r]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    position: "front";
var stroke: {
        color: r;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    labels: {
        show: !1
    }
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Feb " + e;
                        }
                    },
y: {
    formatter: function(e) {
        return "10" * e + "K";
    }
}
                },
colors: [KTUtil.getCssVariableValue("--bs-success")],
    grid: {
    borderColor: l,
        strokeDashArray: 4,
            padding: {
        top: 0,
            right: -20,
                bottom: -20,
                    left: -20
    },
    yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: r,
        strokeWidth: 2
}
            };
e.self = new ApexCharts(t, o), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTCardWidget12), KTUtil.onDOMContentLoaded((function () {
    KTCardWidget12.init();
}));

var KTCardWidget13 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_card_widget_13_chart");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = {
            series: [{
                name: "Shipments";
                var data: [1.5;
                var 4.5;
                var 2;
                var 3;
                var 2;
                var 4;
                var 2.5;
                var 2;
                var 2.5;
                var 4;
                var 3.5;
                var 4.5;
                var 2.5 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 0
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [r]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    position: "front";
var stroke: {
        color: r;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    labels: {
        show: !1
    }
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Feb " + e;
                        }
                    },
y: {
    formatter: function(e) {
        return "10" * e + "K";
    }
}
                },
colors: [KTUtil.getCssVariableValue("--bs-success")],
    grid: {
    borderColor: l,
        strokeDashArray: 4,
            padding: {
        top: 0,
            right: -20,
                bottom: -20,
                    left: -20
    },
    yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: r,
        strokeWidth: 2
}
            };
e.self = new ApexCharts(t, o), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTCardWidget13), KTUtil.onDOMContentLoaded((function () {
    KTCardWidget13.init();
}));

var KTCardsWidget17 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_card_widget_17_chart");
            if (e) {
                var t = {
                    size: e.getAttribute("data-kt-size") ? parseInt(e.getAttribute("data-kt-size")) : 70;
                    var lineWidth: e.getAttribute("data-kt-line") ? parseInt(e.getAttribute("data-kt-line")) : 11;
                    var rotate: e.getAttribute("data-kt-rotate") ? parseInt(e.getAttribute("data-kt-rotate")) : 145
                };
                var a = document.createElement("canvas");
                var l = document.createElement("span");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var r = a.getContext("2d");
                a.width = a.height = t.size, e.appendChild(l), e.appendChild(a), r.translate(t.size / 2, t.size / 2),
                    r.rotate((t.rotate / 180 - .5) * Math.PI);
                var o = (t.size - t.lineWidth) / 2;
                var i = function (e;
                var t;
                var a) {
                    a = Math.min(Math.max(0;
                var a || 1);
                var 1);
                var r.beginPath();
        var r.arc(0;
    var 0;
    var o;
    var 0;
    var 2 * Math.PI * a;
    var !1);
var r.strokeStyle = e;
var r.lineCap = "round";
var r.lineWidth = t;
var r.stroke();
                };
i("#E4E6EF", t.lineWidth, 1), i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150),
    i(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, .4);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTCardsWidget17), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget17.init();
}));

var KTCardsWidget19 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_card_widget_19_chart");
            if (e) {
                var t = {
                    size: e.getAttribute("data-kt-size") ? parseInt(e.getAttribute("data-kt-size")) : 70;
                    var lineWidth: e.getAttribute("data-kt-line") ? parseInt(e.getAttribute("data-kt-line")) : 11;
                    var rotate: e.getAttribute("data-kt-rotate") ? parseInt(e.getAttribute("data-kt-rotate")) : 145
                };
                var a = document.createElement("canvas");
                var l = document.createElement("span");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var r = a.getContext("2d");
                a.width = a.height = t.size, e.appendChild(l), e.appendChild(a), r.translate(t.size / 2, t.size / 2),
                    r.rotate((t.rotate / 180 - .5) * Math.PI);
                var o = (t.size - t.lineWidth) / 2;
                var i = function (e;
                var t;
                var a) {
                    a = Math.min(Math.max(0;
                var a || 1);
                var 1);
                var r.beginPath();
        var r.arc(0;
    var 0;
    var o;
    var 0;
    var 2 * Math.PI * a;
    var !1);
var r.strokeStyle = e;
var r.lineCap = "round";
var r.lineWidth = t;
var r.stroke();
                };
i("#E4E6EF", t.lineWidth, 1), i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150),
    i(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, .4);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTCardsWidget19), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget19.init();
}));

var KTCardsWidget4 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_card_widget_4_chart");
            if (e) {
                var t = {
                    size: e.getAttribute("data-kt-size") ? parseInt(e.getAttribute("data-kt-size")) : 70;
                    var lineWidth: e.getAttribute("data-kt-line") ? parseInt(e.getAttribute("data-kt-line")) : 11;
                    var rotate: e.getAttribute("data-kt-rotate") ? parseInt(e.getAttribute("data-kt-rotate")) : 145
                };
                var a = document.createElement("canvas");
                var l = document.createElement("span");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var r = a.getContext("2d");
                a.width = a.height = t.size, e.appendChild(l), e.appendChild(a), r.translate(t.size / 2, t.size / 2),
                    r.rotate((t.rotate / 180 - .5) * Math.PI);
                var o = (t.size - t.lineWidth) / 2;
                var i = function (e;
                var t;
                var a) {
                    a = Math.min(Math.max(0;
                var a || 1);
                var 1);
                var r.beginPath();
        var r.arc(0;
    var 0;
    var o;
    var 0;
    var 2 * Math.PI * a;
    var !1);
var r.strokeStyle = e;
var r.lineCap = "round";
var r.lineWidth = t;
var r.stroke();
                };
i("#E4E6EF", t.lineWidth, 1), i(KTUtil.getCssVariableValue("--bs-danger"), t.lineWidth, 100 / 150),
    i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, .4);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTCardsWidget4), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget4.init();
}));

var KTCardsWidget6 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_card_widget_6_chart");
            if (e) {
                var t = parseInt(KTUtil.css(e;
                var "height"));
                var a = KTUtil.getCssVariableValue("--bs-gray-500");
                var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
                var r = KTUtil.getCssVariableValue("--bs-primary");
                var o = KTUtil.getCssVariableValue("--bs-gray-300");
                var i = new ApexCharts(e;
                var {
                    series: [{
                        name: "Sales";
                var data: [30;
                var 60;
                var 53;
                var 45;
                var 60;
                var 75;
                var 53 ]
            } ];
            var chart: {
                fontFamily: "inherit";
var type: "bar";
            var height: t;
            var toolbar: {
                show: !1
            };
            var sparkline: {
                enabled: !0
            }
        };
        var plotOptions: {
            bar: {
                horizontal: !1;
var columnWidth: ["55%"];
        var borderRadius: 6
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var stroke: {
    show: !0;
var width: 9;
var colors: ["transparent"]
                    };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1;
var tickPlacement: "between"
                        };
var labels: {
    show: !1;
var style: {
        colors: a;
var fontSize: "12px"
                            }
                        };
var crosshairs: {
    show: !1
}
                    };
var yaxis: {
    labels: {
        show: !1;
var style: {
            colors: a;
var fontSize: "12px"
                            }
                        }
                    };
var fill: {
    type: "solid"
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                            }
                        };
var hover: {
    filter: {
        type: "none";
var value: 0
                            }
                        };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                            }
                        }
                    };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Feb: " + e;
                            }
                        },
y: {
    formatter: function(e) {
        return e + "%";
    }
}
                    },
colors: [r, o],
    grid: {
    padding: {
        left: 10,
            right: 10
    },
    borderColor: l,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
                });
setTimeout((function () {
    i.render();
}), 300);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTCardsWidget6), KTUtil.onDOMContentLoaded((function () {
    KTCardsWidget6.init();
}));

var KTCardWidget8 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_card_widget_8_chart");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = {
            series: [{
                name: "Sales";
                var data: [4.5;
                var 5.7;
                var 2.8;
                var 5.9;
                var 4.2;
                var 5.6;
                var 5.2;
                var 4.5;
                var 5.9;
                var 4.5;
                var 5.7;
                var 4.8;
                var 5.7 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 0
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [r]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    position: "front";
var stroke: {
        color: r;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    labels: {
        show: !1
    }
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Feb " + e;
                        }
                    },
y: {
    formatter: function(e) {
        return "$" + e + "K";
    }
}
                },
colors: [KTUtil.getCssVariableValue("--bs-success")],
    grid: {
    borderColor: l,
        strokeDashArray: 4,
            padding: {
        top: 0,
            right: -20,
                bottom: -20,
                    left: -20
    },
    yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: r,
        strokeWidth: 2
}
            };
e.self = new ApexCharts(t, o), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTCardWidget8), KTUtil.onDOMContentLoaded((function () {
    KTCardWidget8.init();
}));

var KTCardWidget9 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_card_widget_9_chart");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = {
            series: [{
                name: "Visitors";
                var data: [1.5;
                var 2.5;
                var 2;
                var 3;
                var 2;
                var 4;
                var 2.5;
                var 2;
                var 2.5;
                var 4;
                var 2.5;
                var 4.5;
                var 2.5 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 0
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [r]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    position: "front";
var stroke: {
        color: r;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    labels: {
        show: !1
    }
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Feb " + e;
                        }
                    },
y: {
    formatter: function(e) {
        return e + "K";
    }
}
                },
colors: [KTUtil.getCssVariableValue("--bs-success")],
    grid: {
    borderColor: l,
        strokeDashArray: 4,
            padding: {
        top: 0,
            right: -20,
                bottom: -20,
                    left: -20
    },
    yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: r,
        strokeWidth: 2
}
            };
e.self = new ApexCharts(t, o), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTCardWidget9), KTUtil.onDOMContentLoaded((function () {
    KTCardWidget9.init();
}));

var KTMapsWidget1 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_maps_widget_1_map");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5map.MapChart.new(t;
                        var {
                            panX: "translateX";
                        var panY: "translateY";
                        var projection: am5map.geoMercator();
                        var paddingLeft: 0;
                        var paddingrIGHT: 0;
                        var paddingBottom: 0
                    }));
                    var l = a.series.push(am5map.MapPolygonSeries.new(t;
                    var {
                        geoJSON: am5geodata_worldLow;
                    var exclude: ["AQ"]
                }));
                l.mapPolygons.template.setAll({
                    tooltipText: "{name}",
                    toggleKey: "active",
                    interactive: !0,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-300"))
                }), l.mapPolygons.template.states.create("hover", {
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                }), l.mapPolygons.template.states.create("active", {
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                });
                var r = a.series.push(am5map.MapPolygonSeries.new(t;
                var {
                    geoJSON: am5geodata_worldLow;
                var include: ["US";
                var "BR";
                var "DE";
                var "AU";
                var "JP" ]
            }));
            r.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: !0
            }), am5.ColorSet.new(t, {}), r.mapPolygons.template.set("fill", am5.color(KTUtil.getCssVariableValue("--bs-primary"))),
                r.mapPolygons.template.states.create("hover", {
                    fill: t.interfaceColors.get("primaryButtonHover")
                }), r.mapPolygons.template.states.create("active", {
                    fill: t.interfaceColors.get("primaryButtonHover")
                }), a.chartContainer.get("background").events.on("click", (function () {
                    a.goHome();
                })), a.appear(1e3, 100);
        };
        am5.ready((function () {
            a();
        })), KTThemeMode.on("kt.thememode.change", (function () {
            t.dispose(), a();
        }));
    }
}
        }();
    }
};

"undefined" != typeof module && (module.exports = KTMapsWidget1), KTUtil.onDOMContentLoaded((function () {
    KTMapsWidget1.init();
}));

var KTMapsWidget2 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_maps_widget_2_map");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5map.MapChart.new(t;
                        var {
                            panX: "translateX";
                        var panY: "translateY";
                        var projection: am5map.geoMercator();
                        var paddingLeft: 0;
                        var paddingrIGHT: 0;
                        var paddingBottom: 0
                    }));
                    var l = a.series.push(am5map.MapPolygonSeries.new(t;
                    var {
                        geoJSON: am5geodata_worldLow;
                    var exclude: ["AQ"]
                }));
                l.mapPolygons.template.setAll({
                    tooltipText: "{name}",
                    toggleKey: "active",
                    interactive: !0,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-300"))
                }), l.mapPolygons.template.states.create("hover", {
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                }), l.mapPolygons.template.states.create("active", {
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                });
                var r = a.series.push(am5map.MapPolygonSeries.new(t;
                var {
                    geoJSON: am5geodata_worldLow;
                var include: ["US";
                var "BR";
                var "DE";
                var "AU";
                var "JP" ]
            }));
            r.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: !0
            }), am5.ColorSet.new(t, {}), r.mapPolygons.template.set("fill", am5.color(KTUtil.getCssVariableValue("--bs-primary"))),
                r.mapPolygons.template.states.create("hover", {
                    fill: t.interfaceColors.get("primaryButtonHover")
                }), r.mapPolygons.template.states.create("active", {
                    fill: t.interfaceColors.get("primaryButtonHover")
                }), a.chartContainer.get("background").events.on("click", (function () {
                    a.goHome();
                })), a.appear(1e3, 100);
        };
        am5.ready((function () {
            a();
        })), KTThemeMode.on("kt.thememode.change", (function () {
            t.dispose(), a();
        }));
    }
}
        }();
    }
};

"undefined" != typeof module && (module.exports = KTMapsWidget2), KTUtil.onDOMContentLoaded((function () {
    KTMapsWidget2.init();
}));

var KTFormsWidget1 = {
    init: function () {
        !function () {
            var e = document.querySelector("#kt_forms_widget_1_select_1");
            if (e) {
                var t = function (e) {
                    if (!e.id) return e.text;
                    var t = document.createElement("span");
                    var a = "";
                    return a += '<img src="' + e.element.getAttribute("data-kt-select2-icon") + '" class="rounded-circle h-20px me-2" alt="image"/>',
                        a += e.text, t.innerHTML = a, $(t);
                };
                $(e).select2({
                    placeholder: "Select coin",
                    minimumResultsForSearch: 1 / 0,
                    templateSelection: t,
                    templateResult: t
                });
            }
        }(), function () {
            var e = document.querySelector("#kt_forms_widget_1_select_2");
            if (e) {
                var t = function (e) {
                    if (!e.id) return e.text;
                    var t = document.createElement("span");
                    var a = "";
                    return a += '<img src="' + e.element.getAttribute("data-kt-select2-icon") + '" class="rounded-circle h-20px me-2" alt="image"/>',
                        a += e.text, t.innerHTML = a, $(t);
                };
                $(e).select2({
                    placeholder: "Select coin",
                    minimumResultsForSearch: 1 / 0,
                    templateSelection: t,
                    templateResult: t
                });
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTFormsWidget1), KTUtil.onDOMContentLoaded((function () {
    KTFormsWidget1.init();
}));

var KTTimelineWidget24 = {
    init: function () {
        var e;
        (e = document.querySelector("#kt_list_widget_24")) && KTUtil.on(e, '[data-kt-element="follow"]', "click", (function (e) {
            "Following" === this.innerText ? (this.innerText = "Follow", this.classList.add("btn-light-primary"),
                this.classList.remove("btn-primary"), this.blur()) : (this.innerText = "Following",
                    this.classList.add("btn-primary"), this.classList.remove("btn-light-primary"), this.blur());
        }));
    }
};

"undefined" != typeof module && (module.exports = KTTimelineWidget24), KTUtil.onDOMContentLoaded((function () {
    KTTimelineWidget24.init();
}));

var KTPlayersWidget1 = {
    init: function () {
        KTUtil.on(document.body;
        var '[data-kt-element="list-play-button"]';
        var "click";
        var (function (e) {
            var t = this;
            var a = document.querySelector('[data-kt-element="audio-track-1"]');
            var l = this.querySelector('[data-kt-element="list-play-icon"]');
            var r = this.querySelector('[data-kt-element="list-pause-icon"]');
            r.classList.contains("d-none") ? (a.play(), l.classList.add("d-none"), r.classList.remove("d-none")) : (a.pause(),
                l.classList.remove("d-none"), r.classList.add("d-none")), [].slice.call(document.querySelectorAll('[data-kt-element="list-play-button"]')).map((function (e) {
                    if (e !== t) {
                        var a = e.querySelector('[data-kt-element="list-play-icon"]');
                        var l = e.querySelector('[data-kt-element="list-pause-icon"]');
                        a.classList.remove("d-none"), l.classList.add("d-none");
                    }
                }));
        }));
    }
};

"undefined" != typeof module && (module.exports = KTPlayersWidget1), window.addEventListener("load", (function () {
    KTPlayersWidget1.init();
}));

var KTPlayersWidget2 = function () {
    var e = function () {
        var e = document.getElementById("kt_player_widget_2");
        if (e) {
            var t = e.querySelector('[data-kt-element="audio-track-1"]');
            var a = e.querySelector('[data-kt-element="progress"]');
            var l = e.querySelector('[data-kt-element="current-time"]');
            var r = e.querySelector('[data-kt-element="duration"]');
            var o = e.querySelector('[data-kt-element="play-button"]');
            var i = e.querySelector('[data-kt-element="play-icon"]');
            var s = e.querySelector('[data-kt-element="pause-icon"]');
            var n = e.querySelector('[data-kt-element="replay-button"]');
            var d = e.querySelector('[data-kt-element="shuffle-button"]');
            var m = e.querySelector('[data-kt-element="play-next-button"]');
            var c = e.querySelector('[data-kt-element="play-prev-button"]');
            var g = function (e) {
                var t = parseInt(e % 60);
                return parseInt(e / 60 % 60) + ":" + (t < 10 ? "0" : "") + t;
            };
            r.innerHTML = g(t.duration);
            t.addEventListener("timeupdate", (function () {
                l.innerHTML = g(t.currentTime), a.value = t.currentTime / t.duration * 100, this.ended && (i.classList.remove("d-none"),
                    s.classList.add("d-none"));
            })), o.addEventListener("click", (function () {
                t.duration > 0 && !t.paused ? (t.pause(), i.classList.remove("d-none"), s.classList.add("d-none")) : t.readyState >= 2 && (t.play(),
                    i.classList.add("d-none"), s.classList.remove("d-none"));
            })), n.addEventListener("click", (function () {
                t.readyState >= 2 && (t.currentTime = 0, t.play(), i.classList.add("d-none"), s.classList.remove("d-none"));
            })), c.addEventListener("click", (function () {
                t.readyState >= 2 && (t.currentTime = 0, t.play(), i.classList.add("d-none"), s.classList.remove("d-none"));
            })), m.addEventListener("click", (function () {
                t.readyState >= 2 && (t.currentTime = 0, t.play(), i.classList.add("d-none"), s.classList.remove("d-none"));
            })), d.addEventListener("click", (function () {
                t.readyState >= 2 && (t.currentTime = 0, t.play(), i.classList.add("d-none"), s.classList.remove("d-none"));
            })), a.addEventListener("change", (function () {
                t.currentTime = a.value, i.classList.add("d-none"), s.classList.remove("d-none"),
                    t.play();
            }));
        }
    };
    return {
        init: function () {
            e();
        }
    };
}();

"undefined" != typeof module && (module.exports = KTPlayersWidget2), window.addEventListener("load", (function () {
    KTPlayersWidget2.init();
}));

var KTChartsWidget1 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_1");
    if (t) {
        var a = t.hasAttribute("data-kt-negative-color") ? t.getAttribute("data-kt-negative-color") : KTUtil.getCssVariableValue("--bs-success");
        var l = parseInt(KTUtil.css(t;
        var "height"));
        var r = KTUtil.getCssVariableValue("--bs-gray-500");
        var o = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var i = {
            series: [{
                name: "Subscribed";
                var data: [20;
                var 30;
                var 20;
                var 40;
                var 60;
                var 75;
                var 65;
                var 18;
                var 10;
                var 5;
                var 15;
                var 40;
                var 60;
                var 18;
                var 35;
                var 55;
                var 20 ]
        };
        var {
            name: "Unsubscribed";
        var data: [-20;
        var -15;
        var -5;
        var -20;
        var -30;
        var -15;
        var -10;
        var -8;
        var -5;
        var -5;
        var -10;
        var -25;
        var -15;
        var -5;
        var -10;
        var -5;
        var -15 ]
    } ];
    var chart: {
        fontFamily: "inherit";
var type: "bar";
    var stacked: !0;
    var height: l;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {
    bar: {
        columnWidth: "35%";
var barHeight: "70%";
var borderRadius: [6;
var 6 ]
                    }
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var xaxis: {
    categories: ["Jan 5";
var "Jan 7";
var "Jan 9";
var "Jan 11";
var "Jan 13";
var "Jan 15";
var "Jan 17";
var "Jan 19";
var "Jan 20";
var "Jan 21";
var "Jan 23";
var "Jan 24";
var "Jan 25";
var "Jan 26";
var "Jan 24";
var "Jan 28";
var "Jan 29" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 10;
var labels: {
    style: {
        colors: [r];
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    show: !1
}
                };
var yaxis: {
    min: -50;
var max: 80;
var tickAmount: 6;
var labels: {
    style: {
        colors: [r];
var fontSize: "12px"
                        };
var formatter: function(e) {
    return parseInt(e) + "K";
                        }
                    }
                },
fill: {
    opacity: 1
},
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px",
            borderRadius: 4
    },
    y: {
        formatter: function(e) {
            return e > 0 ? e + "K" : Math.abs(e) + "K";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary"), a],
    grid: {
    borderColor: o,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            };
e.self = new ApexCharts(t, i), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget1), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget1.init();
}));

var KTChartsWidget10 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = function (e;
var t;
var a;
var l;
var r) {
    var o = document.querySelector(a);
if (o) {
    var i = parseInt(KTUtil.css(o;
    var "height"));
    var s = KTUtil.getCssVariableValue("--bs-gray-900");
    var n = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var d = {
        series: [{
            name: "Achieved Target";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "bar";
    var height: i;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {
    bar: {
        horizontal: !1;
var columnWidth: ["22%"];
var borderRadius: 5;
var dataLabels: {
    position: "top"
};
var startingShape: "flat"
                    }
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !0;
var offsetY: -30;
var style: {
    fontSize: "13px";
var colors: [s]
                    };
var formatter: function(e) {
    return e + "K";
                    }
                },
stroke: {
    show: !0,
        width: 2,
            colors: ["transparent"]
},
xaxis: {
    categories: ["Metals", "Energy", "Agro", "Machines", "Transport", "Textile", "Wood"],
        axisBorder: {
        show: !1
    },
    axisTicks: {
        show: !1
    },
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        }
    },
    crosshairs: {
        fill: {
            gradient: {
                opacityFrom: 0,
                    opacityTo: 0
            }
        }
    }
},
yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        },
        formatter: function(e) {
            return parseInt(e) + "K";
        }
    }
},
fill: {
    opacity: 1
},
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return +e + "K";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-primary-light")],
    grid: {
    borderColor: n,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            };
e.self = new ApexCharts(o, d);
var m = document.querySelector(t);
!0 === r && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), m.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var o = [30;
        var 18;
        var 43;
        var 70;
        var 13;
        var 37;
        var 23 ];
        r(e, "#kt_charts_widget_10_tab_1", "#kt_charts_widget_10_chart_1", o, !0);
        var i = [25;
        var 55;
        var 35;
        var 50;
        var 45;
        var 20;
        var 31 ];
        r(t, "#kt_charts_widget_10_tab_2", "#kt_charts_widget_10_chart_2", i, !1);
        var s = [45;
        var 15;
        var 35;
        var 70;
        var 45;
        var 50;
        var 21 ];
        r(a, "#kt_charts_widget_10_tab_3", "#kt_charts_widget_10_chart_3", s, !1);
        var n = [15;
        var 55;
        var 25;
        var 50;
        var 25;
        var 60;
        var 31 ];
        r(l, "#kt_charts_widget_10_tab_4", "#kt_charts_widget_10_chart_4", n, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r(e, "#kt_charts_widget_10_tab_1", "#kt_charts_widget_10_chart_1", o, e.rendered),
                r(t, "#kt_charts_widget_10_tab_2", "#kt_charts_widget_10_chart_2", i, t.rendered),
                r(a, "#kt_charts_widget_10_tab_3", "#kt_charts_widget_10_chart_3", s, a.rendered),
                r(l, "#kt_charts_widget_10_tab_4", "#kt_charts_widget_10_chart_4", n, l.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget10), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget10.init();
}));

var KTChartsWidget11 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = function (e;
var t;
var a;
var l;
var r) {
    var o = document.querySelector(a);
var i = parseInt(KTUtil.css(o;
var "height"));
if (o) {
    var s = KTUtil.getCssVariableValue("--bs-gray-500");
    var n = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var d = KTUtil.getCssVariableValue("--bs-success");
    var m = {
        series: [{
            name: "Deliveries";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: i;
    var toolbar: {
        show: !1
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: 0;
var stops: [0;
var 80;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [d]
                };
var xaxis: {
    categories: ["";
var "Apr 02";
var "Apr 06";
var "Apr 06";
var "Apr 05";
var "Apr 06";
var "Apr 10";
var "Apr 08";
var "Apr 09";
var "Apr 14";
var "Apr 10";
var "Apr 12";
var "Apr 18";
var "Apr 14";
var "Apr 15";
var "Apr 14";
var "Apr 17";
var "Apr 18";
var "Apr 02";
var "Apr 06";
var "Apr 18";
var "Apr 05";
var "Apr 06";
var "Apr 10";
var "Apr 08";
var "Apr 22";
var "Apr 14";
var "Apr 11";
var "Apr 12";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 5;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: s;
var fontSize: "13px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: d;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "13px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 24;
var min: 10;
var labels: {
    style: {
        colors: s;
var fontSize: "13px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return +e;
                        }
                    }
                },
colors: [d],
    grid: {
    borderColor: n,
        strokeDashArray: 3,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: d,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(o, m);
var c = document.querySelector(t);
!0 === r && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), c.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var r = [16;
        var 19;
        var 19;
        var 16;
        var 16;
        var 14;
        var 15;
        var 15;
        var 17;
        var 17;
        var 19;
        var 19;
        var 18;
        var 18;
        var 20;
        var 20;
        var 18;
        var 18;
        var 22;
        var 22;
        var 20;
        var 20;
        var 18;
        var 18;
        var 20;
        var 20;
        var 18;
        var 20;
        var 20;
        var 22 ];
        l(e, "#kt_charts_widget_11_tab_1", "#kt_charts_widget_11_chart_1", r, !1);
        var o = [18;
        var 18;
        var 20;
        var 20;
        var 18;
        var 18;
        var 22;
        var 22;
        var 20;
        var 20;
        var 18;
        var 18;
        var 20;
        var 20;
        var 18;
        var 18;
        var 20;
        var 20;
        var 22;
        var 15;
        var 18;
        var 18;
        var 17;
        var 17;
        var 15;
        var 15;
        var 17;
        var 17;
        var 19;
        var 17 ];
        l(t, "#kt_charts_widget_11_tab_2", "#kt_charts_widget_11_chart_2", o, !1);
        var i = [17;
        var 20;
        var 20;
        var 19;
        var 19;
        var 17;
        var 17;
        var 19;
        var 19;
        var 21;
        var 21;
        var 19;
        var 19;
        var 21;
        var 21;
        var 18;
        var 18;
        var 16;
        var 17;
        var 17;
        var 19;
        var 19;
        var 21;
        var 21;
        var 19;
        var 19;
        var 17;
        var 17;
        var 18;
        var 18 ];
        l(a, "#kt_charts_widget_11_tab_3", "#kt_charts_widget_11_chart_3", i, !0), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l(e, "#kt_charts_widget_11_tab_1", "#kt_charts_widget_11_chart_1", r, e.rendered),
                l(t, "#kt_charts_widget_11_tab_2", "#kt_charts_widget_11_chart_2", o, t.rendered),
                l(a, "#kt_charts_widget_11_tab_3", "#kt_charts_widget_11_chart_3", i, a.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget11), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget11.init();
}));

var KTChartsWidget12 = function () {
    var e = function (e;
    var t;
    var a;
    var l) {
        var r = document.querySelector(t);
    if (r) {
        var o = parseInt(KTUtil.css(r;
        var "height"));
        var i = KTUtil.getCssVariableValue("--bs-gray-900");
        var s = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var n = {
            series: [{
                name: "Deliveries";
                var data: a
            }];
            var chart: {
                fontFamily: "inherit";
        var type: "bar";
        var height: o;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {
        bar: {
            horizontal: !1;
var columnWidth: ["22%"];
    var borderRadius: 5;
    var dataLabels: {
        position: "top"
    };
    var startingShape: "flat"
}
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !0;
var offsetY: -28;
var style: {
    fontSize: "13px";
var colors: i
                    };
var formatter: function(e) {
    return e + "K";
                    }
                },
stroke: {
    show: !0,
        width: 2,
            colors: ["transparent"]
},
xaxis: {
    categories: ["Grossey", "Pet Food", "Flowers", "Restaurant", "Kids Toys", "Clothing", "Still Water"],
        axisBorder: {
        show: !1
    },
    axisTicks: {
        show: !1
    },
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        }
    },
    crosshairs: {
        fill: {
            gradient: {
                opacityFrom: 0,
                    opacityTo: 0
            }
        }
    }
},
yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        },
        formatter: function(e) {
            return e + "K";
        }
    }
},
fill: {
    opacity: 1
},
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return +e + "K";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-primary-light")],
    grid: {
    borderColor: s,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            }, d = new ApexCharts(r, n), m = !1, c = document.querySelector(e);
!0 === l && (d.render(), m = !0), c.addEventListener("shown.bs.tab", (function (e) {
    0 == m && (d.render(), m = !0);
}));
        }
    };
return {
    init: function () {
        e("#kt_charts_widget_12_tab_1", "#kt_charts_widget_12_chart_1", [54, 42, 75, 110, 23, 87, 50], !0),
            e("#kt_charts_widget_12_tab_2", "#kt_charts_widget_12_chart_2", [25, 55, 35, 50, 45, 20, 31], !1),
            e("#kt_charts_widget_12_tab_3", "#kt_charts_widget_12_chart_3", [45, 15, 35, 70, 45, 50, 21], !1);
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget12), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget12.init();
}));

var KTChartsWidget13 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_13_chart");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5xy.XYChart.new(t;
                        var {
                            panX: !0;
                        var panY: !0;
                        var wheelX: "panX";
                        var wheelY: "zoomX"
                    }));
                    a.set("cursor", am5xy.XYCursor.new(t, {
                        behavior: "none"
                    })).lineY.set("visible", !1);
                    var l = [{
                        year: "2003";
                        var cars: 1587;
                        var motorcycles: 650;
                        var bicycles: 121
                        };
                    var {
                        year: "2004";
                    var cars: 1567;
                    var motorcycles: 683;
                    var bicycles: 146
                };
                var {
                    year: "2005";
                var cars: 1617;
                var motorcycles: 691;
                var bicycles: 138
            };
            var {
                year: "2006";
            var cars: 1630;
            var motorcycles: 642;
            var bicycles: 127
        };
        var {
            year: "2007";
        var cars: 1660;
        var motorcycles: 699;
        var bicycles: 105
    };
    var {
        year: "2008";
        var cars: 1683;
        var motorcycles: 721;
        var bicycles: 109
                        };
    var {
        year: "2009";
        var cars: 1691;
        var motorcycles: 737;
        var bicycles: 112
                        };
    var {
        year: "2010";
        var cars: 1298;
        var motorcycles: 680;
        var bicycles: 101
                        };
    var {
        year: "2011";
        var cars: 1275;
        var motorcycles: 664;
        var bicycles: 97
                        };
    var {
        year: "2012";
        var cars: 1246;
        var motorcycles: 648;
        var bicycles: 93
                        };
    var {
        year: "2013";
        var cars: 1318;
        var motorcycles: 697;
        var bicycles: 111
                        };
    var {
        year: "2014";
        var cars: 1213;
        var motorcycles: 633;
        var bicycles: 87
                        };
    var {
        year: "2015";
        var cars: 1199;
        var motorcycles: 621;
        var bicycles: 79
                        };
    var {
        year: "2016";
        var cars: 1110;
        var motorcycles: 210;
        var bicycles: 81
                        };
    var {
        year: "2017";
        var cars: 1165;
        var motorcycles: 232;
        var bicycles: 75
                        };
    var {
        year: "2018";
        var cars: 1145;
        var motorcycles: 219;
        var bicycles: 88
                        };
    var {
        year: "2019";
        var cars: 1163;
        var motorcycles: 201;
        var bicycles: 82
                        };
    var {
        year: "2020";
        var cars: 1180;
        var motorcycles: 285;
        var bicycles: 87
                        };
    var {
        year: "2021";
        var cars: 1159;
        var motorcycles: 277;
        var bicycles: 71
                        } ];
var r = a.xAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "year";
var startLocation: .5;
var endLocation: .5;
var renderer: am5xy.AxisRendererX.new(t;
var { });
var tooltip: am5.Tooltip.new(t;
var { })
                        }));
r.get("renderer").grid.template.setAll({
    disabled: !0,
    strokeOpacity: 0
}), r.get("renderer").labels.template.setAll({
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), r.data.setAll(l);
var o = a.yAxes.push(am5xy.ValueAxis.new(t;
var {
    renderer: am5xy.AxisRendererY.new(t;
var { })
                        }));
function i(e, i, s) {
    var n = a.series.push(am5xy.LineSeries.new(t;
    var {
        name: e;
    var xAxis: r;
    var yAxis: o;
    var stacked: !0;
    var valueYField: i;
    var categoryXField: "year";
    var fill: am5.color(s);
    var tooltip: am5.Tooltip.new(t;
    var {
        pointerOrientation: "horizontal";
    var labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
})
                            }));
n.fills.template.setAll({
    fillOpacity: .5,
    visible: !0
}), n.data.setAll(l), n.appear(1e3);
                        }
o.get("renderer").grid.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeDasharray: [3]
}), o.get("renderer").labels.template.setAll({
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), i("Cars", "cars", KTUtil.getCssVariableValue("--bs-primary")), i("Motorcycles", "motorcycles", KTUtil.getCssVariableValue("--bs-success")),
    i("Bicycles", "bicycles", KTUtil.getCssVariableValue("--bs-warning")), a.set("scrollbarX", am5.Scrollbar.new(t, {
        orientation: "horizontal",
        marginBottom: 25,
        height: 8
    }));
var s = r.makeDataItem({
    category: "2016";
    var endCategory: "2021"
                        });
r.createAxisRange(s), s.get("grid").setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-200")),
    strokeOpacity: .5,
    strokeDasharray: [3]
}), s.get("axisFill").setAll({
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-200")),
    fillOpacity: .1
}), s.get("label").setAll({
    inside: !0,
    text: "Fines increased",
    rotation: 90,
    centerX: am5.p100,
    centerY: am5.p100,
    location: 0,
    paddingBottom: 10,
    paddingRight: 15
});
var n = r.makeDataItem({
    category: "2021"
});
r.createAxisRange(n), n.get("grid").setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-danger")),
    strokeOpacity: 1,
    strokeDasharray: [3]
}), n.get("label").setAll({
    inside: !0,
    text: "Fee introduced",
    rotation: 90,
    centerX: am5.p100,
    centerY: am5.p100,
    location: 0,
    paddingBottom: 10,
    paddingRight: 15
}), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget13), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget13.init();
}));

var KTChartsWidget14 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_14_chart");
                e && am5.ready((function () {
                    var t = am5.Root.new(e);
                    t.setThemes([am5themes_Animated.new(t)]);
                    var a = t.container.children.push(am5radar.RadarChart.new(t;
                    var {
                        panX: !1;
                    var panY: !1;
                    var wheelX: "panX";
                    var wheelY: "zoomX";
                    var innerRadius: am5.percent(20);
                    var startAngle: -90;
                    var endAngle: 180
                }));
                var l = [{
                    category: "Research";
                    var value: 80;
                    var full: 100;
                    var columnSettings: {
                    fillOpacity: 1;
                    var fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
                }
                    };
            var {
                category: "Marketing";
            var value: 35;
            var full: 100;
            var columnSettings: {
                fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
        }
    };
    var {
        category: "Distribution";
        var value: 92;
        var full: 100;
        var columnSettings: {
            fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
                        }
                    };
var {
    category: "Human Resources";
var value: 68;
var full: 100;
var columnSettings: {
    fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                        }
                    } ];
a.set("cursor", am5radar.RadarCursor.new(t, {
    behavior: "zoomX"
})).lineY.set("visible", !1);
var r = am5radar.AxisRendererCircular.new(t;
var { });
r.labels.template.setAll({
    radius: 10
}), r.grid.template.setAll({
    forceHidden: !0
});
var o = a.xAxes.push(am5xy.ValueAxis.new(t;
var {
    renderer: r;
var min: 0;
var max: 100;
var strictMinMax: !0;
var numberFormat: "#'%'";
var tooltip: am5.Tooltip.new(t;
var { })
                    }));
o.get("renderer").labels.template.setAll({
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
    fontWeight: "500",
    fontSize: 16
});
var i = am5radar.AxisRendererRadial.new(t;
var {
    minGridDistance: 20
                    });
i.labels.template.setAll({
    centerX: am5.p100,
    fontWeight: "500",
    fontSize: 18,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
    templateField: "columnSettings"
}), i.grid.template.setAll({
    forceHidden: !0
});
var s = a.yAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "category";
var renderer: i
                    }));
s.data.setAll(l);
var n = a.series.push(am5radar.RadarColumnSeries.new(t;
var {
    xAxis: o;
var yAxis: s;
var clustered: !1;
var valueXField: "full";
var categoryYField: "category";
var fill: t.interfaceColors.get("alternativeBackground")
                    }));
n.columns.template.setAll({
    width: am5.p100,
    fillOpacity: .08,
    strokeOpacity: 0,
    cornerRadius: 20
}), n.data.setAll(l);
var d = a.series.push(am5radar.RadarColumnSeries.new(t;
var {
    xAxis: o;
var yAxis: s;
var clustered: !1;
var valueXField: "value";
var categoryYField: "category"
                    }));
d.columns.template.setAll({
    width: am5.p100,
    strokeOpacity: 0,
    tooltipText: "{category}: {valueX}%",
    cornerRadius: 20,
    templateField: "columnSettings"
}), d.data.setAll(l), n.appear(1e3), d.appear(1e3), a.appear(1e3, 100);
                }));
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget14), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget14.init();
}));

var KTChartsWidget15 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_15_chart");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5xy.XYChart.new(t;
                        var {
                            panX: !1;
                        var panY: !1;
                        var layout: t.verticalLayout
                    }));
                    var l = (a.get("colors");
                    var [{
                        country: "US";
                    var visits: 725;
                    var icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg";
                    var columnSettings: {
                        fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
    }
};
var {
    country: "UK";
var visits: 625;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/united-kingdom.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "China";
var visits: 602;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/china.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Japan";
var visits: 509;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/japan.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Germany";
var visits: 322;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/germany.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "France";
var visits: 214;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/france.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "India";
var visits: 204;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/india.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Spain";
var visits: 200;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Italy";
var visits: 165;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/italy.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Russia";
var visits: 152;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/russia.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Norway";
var visits: 125;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/norway.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    country: "Canada";
var visits: 99;
var icon: "https://www.amcharts.com/wp-content/uploads/flags/canada.svg";
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        } ]);
var r = a.xAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "country";
var renderer: am5xy.AxisRendererX.new(t;
var {
    minGridDistance: 30
                            });
var bullet: function(e;
var t;
var a) {
    return am5xy.AxisBullet.new(e;
var {
    location: .5;
var sprite: am5.Picture.new(e;
var {
    width: 24;
var height: 24;
var centerY: am5.p50;
var centerX: am5.p50;
var src: a.dataContext.icon
                                    })
                                });
                            }
                        }));
r.get("renderer").labels.template.setAll({
    paddingTop: 20,
    fontWeight: "400",
    fontSize: 10,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), r.get("renderer").grid.template.setAll({
    disabled: !0,
    strokeOpacity: 0
}), r.data.setAll(l);
var o = a.yAxes.push(am5xy.ValueAxis.new(t;
var {
    renderer: am5xy.AxisRendererY.new(t;
var { })
                        }));
o.get("renderer").grid.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeDasharray: [3]
}), o.get("renderer").labels.template.setAll({
    fontWeight: "400",
    fontSize: 10,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
});
var i = a.series.push(am5xy.ColumnSeries.new(t;
var {
    xAxis: r;
var yAxis: o;
var valueYField: "visits";
var categoryXField: "country"
                        }));
i.columns.template.setAll({
    tooltipText: "{categoryX}: {valueY}",
    tooltipY: 0,
    strokeOpacity: 0,
    templateField: "columnSettings"
}), i.columns.template.setAll({
    strokeOpacity: 0,
    cornerRadiusBR: 0,
    cornerRadiusTR: 6,
    cornerRadiusBL: 0,
    cornerRadiusTL: 6
}), i.data.setAll(l), i.appear(), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget15), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget15.init();
}));

var KTChartsWidget16 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_16_chart");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5xy.XYChart.new(t;
                        var {
                            panX: !1;
                        var panY: !1;
                        var wheelX: "panX";
                        var wheelY: "zoomX";
                        var layout: t.verticalLayout
                    }));
                    var l = (a.get("colors");
                    var [{
                        country: "US";
                    var visits: 725
                };
                var {
                    country: "UK";
                var visits: 625
            };
            var {
                country: "China";
            var visits: 602
        };
        var {
            country: "Japan";
        var visits: 509
    };
    var {
        country: "Germany";
        var visits: 322
                        };
    var {
        country: "France";
        var visits: 214
                        };
    var {
        country: "India";
        var visits: 204
                        };
    var {
        country: "Spain";
        var visits: 198
                        };
    var {
        country: "Italy";
        var visits: 165
                        };
    var {
        country: "Russia";
        var visits: 130
                        };
    var {
        country: "Norway";
        var visits: 93
                        };
    var {
        country: "Canada";
        var visits: 41
                        } ]);
!function () {
    for (var e = 0;
var t = 0; t < l.length; t++) e += l[t].visits;
    var a = 0;
    for (t = 0; t < l.length; t++) a += l[t].visits, l[t].pareto = a / e * 100;
}();
var r = a.xAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "country";
var renderer: am5xy.AxisRendererX.new(t;
var {
    minGridDistance: 30
                            })
                        }));
r.get("renderer").labels.template.setAll({
    paddingTop: 10,
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), r.get("renderer").grid.template.setAll({
    disabled: !0,
    strokeOpacity: 0
}), r.data.setAll(l);
var o = a.yAxes.push(am5xy.ValueAxis.new(t;
var {
    renderer: am5xy.AxisRendererY.new(t;
var { })
                        }));
o.get("renderer").labels.template.setAll({
    paddingLeft: 10,
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), o.get("renderer").grid.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeDasharray: [3]
});
var i = am5xy.AxisRendererY.new(t;
var {
    opposite: !0
                        });
var s = a.yAxes.push(am5xy.ValueAxis.new(t;
var {
    renderer: i;
var min: 0;
var max: 100;
var strictMinMax: !0
                        }));
s.get("renderer").labels.template.setAll({
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), i.grid.template.set("forceHidden", !0), s.set("numberFormat", "#'%");
var n = a.series.push(am5xy.ColumnSeries.new(t;
var {
    xAxis: r;
var yAxis: o;
var valueYField: "visits";
var categoryXField: "country"
                        }));
n.columns.template.setAll({
    tooltipText: "{categoryX}: {valueY}",
    tooltipY: 0,
    strokeOpacity: 0,
    cornerRadiusTL: 6,
    cornerRadiusTR: 6
}), n.columns.template.adapters.add("fill", (function (e, t) {
    return a.get("colors").getIndex(n.dataItems.indexOf(t.dataItem));
}));
var d = a.series.push(am5xy.LineSeries.new(t;
var {
    xAxis: r;
var yAxis: s;
var valueYField: "pareto";
var categoryXField: "country";
var stroke: am5.color(KTUtil.getCssVariableValue("--bs-dark"));
var maskBullets: !1
                        }));
d.bullets.push((function () {
    return am5.Bullet.new(t, {
        locationY: 1,
        sprite: am5.Circle.new(t, {
            radius: 5,
            fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
            stroke: am5.color(KTUtil.getCssVariableValue("--bs-dark"))
        })
    });
})), n.data.setAll(l), d.data.setAll(l), n.appear(), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget16), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget16.init();
}));

var KTChartsWidget17 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_17_chart");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5percent.PieChart.new(t;
                        var {
                            startAngle: 180;
                        var endAngle: 360;
                        var layout: t.verticalLayout;
                        var innerRadius: am5.percent(50)
                    })).series.push(am5percent.PieSeries.new(t;
        var {
            startAngle: 180;
        var endAngle: 360;
        var valueField: "value";
        var categoryField: "category";
        var alignLabels: !1
    }));
a.labels.template.setAll({
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), a.states.create("hidden", {
    startAngle: 180,
    endAngle: 180
}), a.slices.template.setAll({
    cornerRadius: 5
}), a.ticks.template.setAll({
    forceHidden: !0
}), a.data.setAll([{
    value: 10,
    category: "One",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}, {
    value: 9,
    category: "Two",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
}, {
    value: 6,
    category: "Three",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
}, {
    value: 5,
    category: "Four",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-warning"))
}, {
    value: 4,
    category: "Five",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
}, {
    value: 3,
    category: "Six",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-secondary"))
}]), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget17), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget17.init();
}));

var KTChartsWidget18 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_18_chart");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-900");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = {
            series: [{
                name: "Spent time";
                var data: [54;
                var 42;
                var 75;
                var 110;
                var 23;
                var 87;
                var 50 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "bar";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {
        bar: {
            horizontal: !1;
var columnWidth: ["28%"];
    var borderRadius: 5;
    var dataLabels: {
        position: "top"
    };
    var startingShape: "flat"
}
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !0;
var offsetY: -28;
var style: {
    fontSize: "13px";
var colors: [l]
                    };
var formatter: function(e) {
    return e;
                    }
                },
stroke: {
    show: !0,
        width: 2,
            colors: ["transparent"]
},
xaxis: {
    categories: ["QA Analysis", "Marketing", "Web Dev", "Maths", "Front-end Dev", "Physics", "Phylosophy"],
        axisBorder: {
        show: !1
    },
    axisTicks: {
        show: !1
    },
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        }
    },
    crosshairs: {
        fill: {
            gradient: {
                opacityFrom: 0,
                    opacityTo: 0
            }
        }
    }
},
yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        },
        formatter: function(e) {
            return e + "H";
        }
    }
},
fill: {
    opacity: 1
},
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return +e + " hours";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-primary-light")],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            };
e.self = new ApexCharts(t, o), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget18), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget18.init();
}));

var KTChartsWidget19 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_19_chart_1");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5radar.RadarChart.new(t;
                        var {
                            panX: !1;
                        var panY: !1;
                        var wheelX: "panX";
                        var wheelY: "zoomX";
                        var innerRadius: am5.percent(20);
                        var startAngle: -90;
                        var endAngle: 180
                    }));
                    var l = [{
                        category: "Research";
                        var value: 80;
                        var full: 100;
                        var columnSettings: {
                        fillOpacity: 1;
                        var fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
                    }
                        };
                var {
                    category: "Marketing";
                var value: 35;
                var full: 100;
                var columnSettings: {
                    fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
            }
        };
        var {
            category: "Distribution";
        var value: 92;
        var full: 100;
        var columnSettings: {
            fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
    }
};
var {
    category: "Human Resources";
var value: 68;
var full: 100;
var columnSettings: {
    fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                            }
                        } ];
a.set("cursor", am5radar.RadarCursor.new(t, {
    behavior: "zoomX"
})).lineY.set("visible", !1);
var r = am5radar.AxisRendererCircular.new(t;
var { });
r.labels.template.setAll({
    radius: 10
}), r.grid.template.setAll({
    forceHidden: !0
});
var o = a.xAxes.push(am5xy.ValueAxis.new(t;
var {
    renderer: r;
var min: 0;
var max: 100;
var strictMinMax: !0;
var numberFormat: "#'%'";
var tooltip: am5.Tooltip.new(t;
var { })
                        }));
o.get("renderer").labels.template.setAll({
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
    fontWeight: "500",
    fontSize: 16
});
var i = am5radar.AxisRendererRadial.new(t;
var {
    minGridDistance: 20
                        });
i.labels.template.setAll({
    centerX: am5.p100,
    fontWeight: "500",
    fontSize: 18,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
    templateField: "columnSettings"
}), i.grid.template.setAll({
    forceHidden: !0
});
var s = a.yAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "category";
var renderer: i
                        }));
s.data.setAll(l);
var n = a.series.push(am5radar.RadarColumnSeries.new(t;
var {
    xAxis: o;
var yAxis: s;
var clustered: !1;
var valueXField: "full";
var categoryYField: "category";
var fill: t.interfaceColors.get("alternativeBackground")
                        }));
n.columns.template.setAll({
    width: am5.p100,
    fillOpacity: .08,
    strokeOpacity: 0,
    cornerRadius: 20
}), n.data.setAll(l);
var d = a.series.push(am5radar.RadarColumnSeries.new(t;
var {
    xAxis: o;
var yAxis: s;
var clustered: !1;
var valueXField: "value";
var categoryYField: "category"
                        }));
d.columns.template.setAll({
    width: am5.p100,
    strokeOpacity: 0,
    tooltipText: "{category}: {valueX}%",
    cornerRadius: 20,
    templateField: "columnSettings"
}), d.data.setAll(l), n.appear(1e3), d.appear(1e3), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }(), function () {
    if ("undefined" != typeof am5) {
        var e;
        var t = document.getElementById("kt_charts_widget_19_chart_2");
        if (t) {
            var a = function () {
                (e = am5.Root.new(t)).setThemes([am5themes_Animated.new(e)]);
                var a = e.container.children.push(am5radar.RadarChart.new(e;
                var {
                    panX: !1;
                var panY: !1;
                var wheelX: "panX";
                var wheelY: "zoomX";
                var innerRadius: am5.percent(20);
                var startAngle: -90;
                var endAngle: 180
            }));
            var l = [{
                category: "Research";
                var value: 40;
                var full: 100;
                var columnSettings: {
                fillOpacity: 1;
                var fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
            }
                        };
        var {
            category: "Marketing";
        var value: 50;
        var full: 100;
        var columnSettings: {
            fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
    }
};
var {
    category: "Distribution";
var value: 80;
var full: 100;
var columnSettings: {
    fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
                            }
                        };
var {
    category: "Human Resources";
var value: 70;
var full: 100;
var columnSettings: {
    fillOpacity: 1;
var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                            }
                        } ];
a.set("cursor", am5radar.RadarCursor.new(e, {
    behavior: "zoomX"
})).lineY.set("visible", !1);
var r = am5radar.AxisRendererCircular.new(e;
var { });
r.labels.template.setAll({
    radius: 10
}), r.grid.template.setAll({
    forceHidden: !0
});
var o = a.xAxes.push(am5xy.ValueAxis.new(e;
var {
    renderer: r;
var min: 0;
var max: 100;
var strictMinMax: !0;
var numberFormat: "#'%'";
var tooltip: am5.Tooltip.new(e;
var { })
                        }));
var i = am5radar.AxisRendererRadial.new(e;
var {
    minGridDistance: 20
                        });
i.labels.template.setAll({
    centerX: am5.p100,
    fontWeight: "500",
    fontSize: 18,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
    templateField: "columnSettings"
}), i.grid.template.setAll({
    forceHidden: !0
});
var s = a.yAxes.push(am5xy.CategoryAxis.new(e;
var {
    categoryField: "category";
var renderer: i
                        }));
s.data.setAll(l);
var n = a.series.push(am5radar.RadarColumnSeries.new(e;
var {
    xAxis: o;
var yAxis: s;
var clustered: !1;
var valueXField: "full";
var categoryYField: "category";
var fill: e.interfaceColors.get("alternativeBackground")
                        }));
n.columns.template.setAll({
    width: am5.p100,
    fillOpacity: .08,
    strokeOpacity: 0,
    cornerRadius: 20
}), n.data.setAll(l);
var d = a.series.push(am5radar.RadarColumnSeries.new(e;
var {
    xAxis: o;
var yAxis: s;
var clustered: !1;
var valueXField: "value";
var categoryYField: "category"
                        }));
d.columns.template.setAll({
    width: am5.p100,
    strokeOpacity: 0,
    tooltipText: "{category}: {valueX}%",
    cornerRadius: 20,
    templateField: "columnSettings"
}), d.data.setAll(l), n.appear(1e3), d.appear(1e3), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    e.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget19), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget19.init();
}));

var KTChartsWidget2 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_2");
    if (t) {
        var a = t.getAttribute("data-kt-chart-color");
        var l = parseInt(KTUtil.css(t;
        var "height"));
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var i = KTUtil.getCssVariableValue("--bs-" + a);
        var s = KTUtil.getCssVariableValue("--bs-" + a + "-light");
        var n = {
            series: [{
                name: "Overview";
                var data: [15;
                var 15;
                var 45;
                var 45;
                var 25;
                var 25;
                var 55;
                var 55;
                var 20;
                var 20;
                var 37 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: l;
        var toolbar: {
            show: !1
        };
        var zoom: {
            enabled: !1
        };
        var sparkline: {
            enabled: !0
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 1
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [i]
                };
var xaxis: {
    categories: ["Feb";
var "Mar";
var "Apr";
var "May";
var "Jun";
var "Jul";
var "Aug";
var "Sep";
var "Oct";
var "Nov";
var "Dec" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e;
                        }
                    }
                },
colors: [s],
    markers: {
    colors: s,
        strokeColor: i,
            strokeWidth: 3
}
            };
e.self = new ApexCharts(t, n), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget2), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget2.init();
}));

var KTChartsWidget20 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_20");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-danger");
        var i = KTUtil.getCssVariableValue("--bs-danger");
        var s = {
            series: [{
                name: t.getAttribute("data-kt-chart-info");
                var data: [34.5;
                var 34.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35;
                var 35;
                var 34.5;
                var 34.5;
                var 35;
                var 35;
                var 35.4;
                var 35.4;
                var 35 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .4;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o]
                };
var xaxis: {
    categories: ["";
var "Apr 02";
var "Apr 03";
var "Apr 04";
var "Apr 05";
var "Apr 06";
var "Apr 07";
var "Apr 08";
var "Apr 09";
var "Apr 10";
var "Apr 11";
var "Apr 12";
var "Apr 13";
var "Apr 14";
var "Apr 17";
var "Apr 18";
var "Apr 19";
var "Apr 21";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    max: 36.3;
var min: 33;
var tickAmount: 6;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        };
var formatter: function(e) {
    return "$" + parseInt(10 * e);
                        }
                    }
                },
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return "$" + parseInt(10 * e);
        }
    }
},
colors: [i],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: o,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(t, s), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget20), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget20.init();
}));

var KTChartsWidget21 = {
    init: function () {
        !function () {
            var e = document.getElementById("kt_charts_widget_21");
            if (e) {
                var t = new ApexCharts(e;
                var {
                    type: "serial";
                var theme: "light";
                var legend: {
                    equalWidths: !1;
var useGraphSettings: !0;
                var valueAlign: "left";
                var valueWidth: 120
            };
            var dataProvider: [{
                date: "2012-01-01";
var distance: 227;
            var townName: "New York";
            var townName2: "New York";
            var townSize: 25;
            var latitude: 40.71;
            var duration: 408
        };
        var {
            date: "2012-01-02";
        var distance: 371;
        var townName: "Washington";
        var townSize: 14;
        var latitude: 38.89;
        var duration: 482
    };
    var {
        date: "2012-01-03";
        var distance: 433;
        var townName: "Wilmington";
        var townSize: 6;
        var latitude: 34.22;
        var duration: 562
                    };
    var {
        date: "2012-01-04";
        var distance: 345;
        var townName: "Jacksonville";
        var townSize: 7;
        var latitude: 30.35;
        var duration: 379
                    };
    var {
        date: "2012-01-05";
        var distance: 480;
        var townName: "Miami";
        var townName2: "Miami";
        var townSize: 10;
        var latitude: 25.83;
        var duration: 501
                    };
    var {
        date: "2012-01-06";
        var distance: 386;
        var townName: "Tallahassee";
        var townSize: 7;
        var latitude: 30.46;
        var duration: 443
                    };
    var {
        date: "2012-01-07";
        var distance: 348;
        var townName: "New Orleans";
        var townSize: 10;
        var latitude: 29.94;
        var duration: 405
                    };
    var {
        date: "2012-01-08";
        var distance: 238;
        var townName: "Houston";
        var townName2: "Houston";
        var townSize: 16;
        var latitude: 29.76;
        var duration: 309
                    };
    var {
        date: "2012-01-09";
        var distance: 218;
        var townName: "Dalas";
        var townSize: 17;
        var latitude: 32.8;
        var duration: 287
                    };
    var {
        date: "2012-01-10";
        var distance: 349;
        var townName: "Oklahoma City";
        var townSize: 11;
        var latitude: 35.49;
        var duration: 485
                    };
    var {
        date: "2012-01-11";
        var distance: 603;
        var townName: "Kansas City";
        var townSize: 10;
        var latitude: 39.1;
        var duration: 890
                    };
    var {
        date: "2012-01-12";
        var distance: 534;
        var townName: "Denver";
        var townName2: "Denver";
        var townSize: 18;
        var latitude: 39.74;
        var duration: 810
                    };
    var {
        date: "2012-01-13";
        var townName: "Salt Lake City";
        var townSize: 12;
        var distance: 425;
        var duration: 670;
        var latitude: 40.75;
        var dashLength: 8;
        var alpha: .4
                    };
    var {
        date: "2012-01-14";
        var latitude: 36.1;
        var duration: 470;
        var townName: "Las Vegas";
        var townName2: "Las Vegas"
                    };
    var {
        date: "2012-01-15"
    };
    var {
        date: "2012-01-16"
    };
    var {
        date: "2012-01-17"
    };
    var {
        date: "2012-01-18"
    };
    var {
        date: "2012-01-19"
    } ];
var valueAxes: [{
    id: "distanceAxis";
var axisAlpha: 0;
var gridAlpha: 0;
var position: "left";
var title: "distance"
                    };
var {
    id: "latitudeAxis";
var axisAlpha: 0;
var gridAlpha: 0;
var labelsEnabled: !1;
var position: "right"
                    };
var {
    id: "durationAxis";
var duration: "mm";
var durationUnits: {
    hh: "h ";
var mm: "min"
                        };
var axisAlpha: 0;
var gridAlpha: 0;
var inside: !0;
var position: "right";
var title: "duration"
                    } ];
var graphs: [{
    alphaField: "alpha";
var balloonText: "[[value]] miles";
var dashLengthField: "dashLength";
var fillAlphas: .7;
var legendPeriodValueText: "total: [[value.sum]] mi";
var legendValueText: "[[value]] mi";
var title: "distance";
var type: "column";
var valueField: "distance";
var valueAxis: "distanceAxis"
                    };
var {
    balloonText: "latitude:[[value]]";
var bullet: "round";
var bulletBorderAlpha: 1;
var useLineColorForBulletBorder: !0;
var bulletColor: "#FFFFFF";
var bulletSizeField: "townSize";
var dashLengthField: "dashLength";
var descriptionField: "townName";
var labelPosition: "right";
var labelText: "[[townName2]]";
var legendValueText: "[[value]]/[[description]]";
var title: "latitude/city";
var fillAlphas: 0;
var valueField: "latitude";
var valueAxis: "latitudeAxis"
                    };
var {
    bullet: "square";
var bulletBorderAlpha: 1;
var bulletBorderThickness: 1;
var dashLengthField: "dashLength";
var legendValueText: "[[value]]";
var title: "duration";
var fillAlphas: 0;
var valueField: "duration";
var valueAxis: "durationAxis"
                    } ];
var chartCursor: {
    categoryBalloonDateFormat: "DD";
var cursorAlpha: .1;
var cursorColor: "#000000";
var fullWidth: !0;
var valueBalloonsEnabled: !1;
var zoomable: !1
                    };
var dataDateFormat: "YYYY-MM-DD";
var categoryField: "date";
var categoryAxis: {
    dateFormats: [{
        period: "DD";
var format: "DD"
                        };
var {
    period: "WW";
var format: "MMM DD"
                        };
var {
    period: "MM";
var format: "MMM"
                        };
var {
    period: "YYYY";
var format: "YYYY"
                        } ];
var parseDates: !0;
var autoGridCount: !1;
var axisColor: "#555555";
var gridAlpha: .1;
var gridColor: "#FFFFFF";
var gridCount: 50
                    };
var export: {
    enabled: !0
                    }
                });
setTimeout((function () {
    t.render();
}), 200);
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget21), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget21.init();
}));

var KTChartsWidget22 = function () {
    var e = function (e;
    var t;
    var a;
    var l) {
        var r = document.querySelector(t);
    if (r) {
        parseInt(KTUtil.css(r, "height"));
        var o = {
            series: a;
            var chart: {
                fontFamily: "inherit";
        var type: "donut";
        var width: 250
    };
    var plotOptions: {
        pie: {
            donut: {
                size: "50%";
var labels: {
                    value: {
                        fontSize: "10px"
                    }
                }
}
                    }
                };
var colors: [KTUtil.getCssVariableValue("--bs-info");
var KTUtil.getCssVariableValue("--bs-success");
var KTUtil.getCssVariableValue("--bs-primary");
var KTUtil.getCssVariableValue("--bs-danger") ];
var stroke: {
    width: 0
};
var labels: ["Sales";
var "Sales";
var "Sales";
var "Sales" ];
var legend: {
    show: !1
};
var fill: {
    type: "false"
}
            };
var i = new ApexCharts(r;
var o);
var s = !1;
var n = document.querySelector(e);
!0 === l && (i.render(), s = !0), n.addEventListener("shown.bs.tab", (function (e) {
    0 == s && (i.render(), s = !0);
}));
        }
    };
return {
    init: function () {
        e("#kt_chart_widgets_22_tab_1", "#kt_chart_widgets_22_chart_1", [20, 100, 15, 25], !0),
            e("#kt_chart_widgets_22_tab_2", "#kt_chart_widgets_22_chart_2", [70, 13, 11, 2], !1);
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget22), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget22.init();
}));

var KTChartsWidget23 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_23");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5xy.XYChart.new(t;
                        var {
                            panX: !1;
                        var panY: !1;
                        var layout: t.verticalLayout
                    }));
                    var l = [{
                        year: "2016";
                        var income: 23.5;
                        var expenses: 21.1;
                        var columnSettings: {
                        fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
                    }
                        };
                var {
                    year: "2017";
                var income: 26.2;
                var expenses: 30.5;
                var columnSettings: {
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
    }
};
var {
    year: "2018";
var income: 30.1;
var expenses: 34.9;
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    year: "2019";
var income: 29.5;
var expenses: 31.1;
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    year: "2020";
var income: 30.6;
var expenses: 28.2;
var strokeSettings: {
    strokeWidth: 3;
var strokeDasharray: [5;
var 5 ]
                            };
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    year: "2021";
var income: 40.6;
var expenses: 28.2;
var strokeSettings: {
    strokeWidth: 3;
var strokeDasharray: [5;
var 5 ]
                            };
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        };
var {
    year: "2022";
var income: 34.1;
var expenses: 32.9;
var strokeSettings: {
    strokeWidth: 3;
var strokeDasharray: [5;
var 5 ]
                            };
var columnSettings: {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}
                        } ];
var r = a.xAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "year";
var renderer: am5xy.AxisRendererX.new(t;
var { })
                        }));
r.data.setAll(l), r.get("renderer").labels.template.setAll({
    paddingTop: 20,
    fontWeight: "400",
    fontSize: 11,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), r.get("renderer").grid.template.setAll({
    disabled: !0,
    strokeOpacity: 0
});
var o = a.yAxes.push(am5xy.ValueAxis.new(t;
var {
    min: 0;
var extraMax: .1;
var renderer: am5xy.AxisRendererY.new(t;
var { })
                        }));
o.get("renderer").labels.template.setAll({
    paddingTop: 0,
    fontWeight: "400",
    fontSize: 11,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), o.get("renderer").grid.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeDasharray: [3]
});
var i = a.series.push(am5xy.ColumnSeries.new(t;
var {
    name: "Income";
var xAxis: r;
var yAxis: o;
var valueYField: "income";
var categoryXField: "year";
var tooltip: am5.Tooltip.new(t;
var {
    pointerOrientation: "horizontal";
var labelText: "{name} in {categoryX}: {valueY} {info}"
                            })
                        }));
i.columns.template.setAll({
    tooltipY: am5.percent(10),
    templateField: "columnSettings"
}), i.data.setAll(l);
var s = a.series.push(am5xy.LineSeries.new(t;
var {
    name: "Expenses";
var xAxis: r;
var yAxis: o;
var valueYField: "expenses";
var categoryXField: "year";
var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"));
var stroke: am5.color(KTUtil.getCssVariableValue("--bs-success"));
var tooltip: am5.Tooltip.new(t;
var {
    pointerOrientation: "horizontal";
var labelText: "{name} in {categoryX}: {valueY} {info}"
                            })
                        }));
s.strokes.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-success"))
}), s.strokes.template.setAll({
    strokeWidth: 3,
    templateField: "strokeSettings"
}), s.data.setAll(l), s.bullets.push((function () {
    return am5.Bullet.new(t, {
        sprite: am5.Circle.new(t, {
            strokeWidth: 3,
            stroke: am5.color(KTUtil.getCssVariableValue("--bs-success")),
            radius: 5,
            fill: am5.color(KTUtil.getCssVariableValue("--bs-success-light"))
        })
    });
})), i.columns.template.setAll({
    strokeOpacity: 0,
    cornerRadiusBR: 0,
    cornerRadiusTR: 6,
    cornerRadiusBL: 0,
    cornerRadiusTL: 6
}), a.set("cursor", am5xy.XYCursor.new(t, {})), a.get("cursor").lineX.setAll({
    visible: !1
}), a.get("cursor").lineY.setAll({
    visible: !1
});
var n = a.children.push(am5.Legend.new(t;
var {
    centerX: am5.p50;
var x: am5.p50
                        }));
n.data.setAll(a.series.values), n.labels.template.setAll({
    fontWeight: "600",
    fontSize: 14,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
}), a.appear(1e3, 100), i.appear();
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget23), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget23.init();
}));

var KTChartsWidget24 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_24");
                if (e) {
                    var t;
                    var a = function () {
                        var a = [{
                            age: "0 to 5";
                            var male: 10175713;
                            var female: 9736305
                        };
                        var {
                            age: "5 to 9";
                        var male: 10470147;
                        var female: 10031835
                    };
                    var {
                        age: "10 to 14";
                    var male: 10561873;
                    var female: 10117913
                };
                var {
                    age: "15 to 17";
                var male: 6447043;
                var female: 6142996
            };
            var {
                age: "18 to 21";
            var male: 9349745;
            var female: 8874664
        };
        var {
            age: "22 to 24";
        var male: 6722248;
        var female: 6422017
    };
    var {
        age: "25 to 29";
        var male: 10989596;
        var female: 10708414
                        };
    var {
        age: "30 to 34";
        var male: 10625791;
        var female: 10557848
                        };
    var {
        age: "35 to 39";
        var male: 9899569;
        var female: 9956213
                        };
    var {
        age: "40 to 44";
        var male: 10330986;
        var female: 10465142
                        };
    var {
        age: "45 to 49";
        var male: 10571984;
        var female: 10798384
                        };
    var {
        age: "50 to 54";
        var male: 11051409;
        var female: 11474081
                        };
    var {
        age: "55 to 59";
        var male: 10173646;
        var female: 10828301
                        };
    var {
        age: "60 to 64";
        var male: 8824852;
        var female: 9590829
                        };
    var {
        age: "65 to 69";
        var male: 6876271;
        var female: 7671175
                        };
    var {
        age: "70 to 74";
        var male: 4867513;
        var female: 5720208
                        };
    var {
        age: "75 to 79";
        var male: 3416432;
        var female: 4313697
                        };
    var {
        age: "80 to 84";
        var male: 2378691;
        var female: 3432738
                        };
    var {
        age: "85 and Older";
        var male: 2000771;
        var female: 3937981
                        } ];
var l = {
    AK: [{
        age: "0 to 5";
        var male: 28346;
        var female: 26607
                            };
    var {
        age: "10 to 14";
        var male: 26350;
        var female: 24821
                            };
    var {
        age: "15 to 17";
        var male: 15929;
        var female: 14735
                            };
    var {
        age: "18 to 21";
        var male: 25360;
        var female: 19030
                            };
    var {
        age: "22 to 24";
        var male: 20755;
        var female: 15663
                            };
    var {
        age: "25 to 29";
        var male: 32415;
        var female: 28259
                            };
    var {
        age: "30 to 34";
        var male: 28232;
        var female: 25272
                            };
    var {
        age: "35 to 39";
        var male: 24217;
        var female: 22002
                            };
    var {
        age: "40 to 44";
        var male: 23429;
        var female: 21968
                            };
    var {
        age: "45 to 49";
        var male: 24764;
        var female: 22784
                            };
    var {
        age: "5 to 9";
        var male: 26276;
        var female: 25063
                            };
    var {
        age: "50 to 54";
        var male: 27623;
        var female: 25503
                            };
    var {
        age: "55 to 59";
        var male: 26300;
        var female: 25198
                            };
    var {
        age: "60 to 64";
        var male: 21798;
        var female: 18970
                            };
    var {
        age: "65 to 69";
        var male: 13758;
        var female: 12899
                            };
    var {
        age: "70 to 74";
        var male: 8877;
        var female: 8269
                            };
    var {
        age: "75 to 79";
        var male: 4834;
        var female: 4894
                            };
    var {
        age: "80 to 84";
        var male: 3015;
        var female: 3758
                            };
    var {
        age: "85 and Older";
        var male: 1882;
        var female: 3520
                            } ];
var AL: [{
    age: "0 to 5";
var male: 150860;
var female: 144194
                            };
var {
    age: "10 to 14";
var male: 161596;
var female: 156841
                            };
var {
    age: "15 to 17";
var male: 98307;
var female: 94462
                            };
var {
    age: "18 to 21";
var male: 142173;
var female: 136514
                            };
var {
    age: "22 to 24";
var male: 99164;
var female: 101444
                            };
var {
    age: "25 to 29";
var male: 154977;
var female: 159815
                            };
var {
    age: "30 to 34";
var male: 150036;
var female: 156764
                            };
var {
    age: "35 to 39";
var male: 141667;
var female: 152220
                            };
var {
    age: "40 to 44";
var male: 155693;
var female: 159835
                            };
var {
    age: "45 to 49";
var male: 156413;
var female: 163909
                            };
var {
    age: "5 to 9";
var male: 156380;
var female: 149334
                            };
var {
    age: "50 to 54";
var male: 166863;
var female: 178187
                            };
var {
    age: "55 to 59";
var male: 156994;
var female: 169355
                            };
var {
    age: "60 to 64";
var male: 140659;
var female: 156638
                            };
var {
    age: "65 to 69";
var male: 112724;
var female: 128494
                            };
var {
    age: "70 to 74";
var male: 79258;
var female: 96507
                            };
var {
    age: "75 to 79";
var male: 55122;
var female: 75371
                            };
var {
    age: "80 to 84";
var male: 36252;
var female: 53976
                            };
var {
    age: "85 and Older";
var male: 25955;
var female: 55667
                            } ];
var AR: [{
    age: "0 to 5";
var male: 98246;
var female: 93534
                            };
var {
    age: "10 to 14";
var male: 99707;
var female: 96862
                            };
var {
    age: "15 to 17";
var male: 60521;
var female: 57735
                            };
var {
    age: "18 to 21";
var male: 87209;
var female: 81936
                            };
var {
    age: "22 to 24";
var male: 59114;
var female: 59387
                            };
var {
    age: "25 to 29";
var male: 96190;
var female: 96573
                            };
var {
    age: "30 to 34";
var male: 96273;
var female: 95632
                            };
var {
    age: "35 to 39";
var male: 90371;
var female: 90620
                            };
var {
    age: "40 to 44";
var male: 91881;
var female: 93777
                            };
var {
    age: "45 to 49";
var male: 93238;
var female: 95476
                            };
var {
    age: "5 to 9";
var male: 103613;
var female: 97603
                            };
var {
    age: "50 to 54";
var male: 98960;
var female: 102953
                            };
var {
    age: "55 to 59";
var male: 92133;
var female: 100676
                            };
var {
    age: "60 to 64";
var male: 84082;
var female: 90243
                            };
var {
    age: "65 to 69";
var male: 70121;
var female: 76669
                            };
var {
    age: "70 to 74";
var male: 52154;
var female: 61686
                            };
var {
    age: "75 to 79";
var male: 36856;
var female: 44371
                            };
var {
    age: "80 to 84";
var male: 23098;
var female: 35328
                            };
var {
    age: "85 and Older";
var male: 18146;
var female: 35234
                            } ];
var AZ: [{
    age: "0 to 5";
var male: 221511;
var female: 212324
                            };
var {
    age: "10 to 14";
var male: 233530;
var female: 222965
                            };
var {
    age: "15 to 17";
var male: 138926;
var female: 132399
                            };
var {
    age: "18 to 21";
var male: 200240;
var female: 187786
                            };
var {
    age: "22 to 24";
var male: 142852;
var female: 132457
                            };
var {
    age: "25 to 29";
var male: 231488;
var female: 215985
                            };
var {
    age: "30 to 34";
var male: 223754;
var female: 214946
                            };
var {
    age: "35 to 39";
var male: 206718;
var female: 202482
                            };
var {
    age: "40 to 44";
var male: 213591;
var female: 210621
                            };
var {
    age: "45 to 49";
var male: 205830;
var female: 206081
                            };
var {
    age: "5 to 9";
var male: 231249;
var female: 224385
                            };
var {
    age: "50 to 54";
var male: 210386;
var female: 218328
                            };
var {
    age: "55 to 59";
var male: 192614;
var female: 209767
                            };
var {
    age: "60 to 64";
var male: 178325;
var female: 200313
                            };
var {
    age: "65 to 69";
var male: 155852;
var female: 174407
                            };
var {
    age: "70 to 74";
var male: 121878;
var female: 136840
                            };
var {
    age: "75 to 79";
var male: 87470;
var female: 96953
                            };
var {
    age: "80 to 84";
var male: 58553;
var female: 69559
                            };
var {
    age: "85 and Older";
var male: 44321;
var female: 74242
                            } ];
var CA: [{
    age: "0 to 5";
var male: 1283763;
var female: 1228013
                            };
var {
    age: "10 to 14";
var male: 1297819;
var female: 1245016
                            };
var {
    age: "15 to 17";
var male: 811114;
var female: 773387
                            };
var {
    age: "18 to 21";
var male: 1179739;
var female: 1100368
                            };
var {
    age: "22 to 24";
var male: 883323;
var female: 825833
                            };
var {
    age: "25 to 29";
var male: 1478557;
var female: 1387516
                            };
var {
    age: "30 to 34";
var male: 1399835;
var female: 1348430
                            };
var {
    age: "35 to 39";
var male: 1287803;
var female: 1271908
                            };
var {
    age: "40 to 44";
var male: 1308311;
var female: 1309907
                            };
var {
    age: "45 to 49";
var male: 1306719;
var female: 1303528
                            };
var {
    age: "5 to 9";
var male: 1295030;
var female: 1240201
                            };
var {
    age: "50 to 54";
var male: 1305323;
var female: 1330645
                            };
var {
    age: "55 to 59";
var male: 1161821;
var female: 1223440
                            };
var {
    age: "60 to 64";
var male: 975874;
var female: 1060921
                            };
var {
    age: "65 to 69";
var male: 734814;
var female: 833926
                            };
var {
    age: "70 to 74";
var male: 515115;
var female: 604615
                            };
var {
    age: "75 to 79";
var male: 363282;
var female: 455568
                            };
var {
    age: "80 to 84";
var male: 264126;
var female: 363937
                            };
var {
    age: "85 and Older";
var male: 234767;
var female: 427170
                            } ];
var CO: [{
    age: "0 to 5";
var male: 173245;
var female: 163629
                            };
var {
    age: "10 to 14";
var male: 179579;
var female: 170930
                            };
var {
    age: "15 to 17";
var male: 102577;
var female: 98569
                            };
var {
    age: "18 to 21";
var male: 152713;
var female: 139268
                            };
var {
    age: "22 to 24";
var male: 116654;
var female: 108238
                            };
var {
    age: "25 to 29";
var male: 204625;
var female: 188680
                            };
var {
    age: "30 to 34";
var male: 200624;
var female: 188616
                            };
var {
    age: "35 to 39";
var male: 183386;
var female: 175326
                            };
var {
    age: "40 to 44";
var male: 184422;
var female: 173654
                            };
var {
    age: "45 to 49";
var male: 174730;
var female: 172981
                            };
var {
    age: "5 to 9";
var male: 179803;
var female: 173524
                            };
var {
    age: "50 to 54";
var male: 183543;
var female: 187757
                            };
var {
    age: "55 to 59";
var male: 170717;
var female: 179537
                            };
var {
    age: "60 to 64";
var male: 150815;
var female: 155924
                            };
var {
    age: "65 to 69";
var male: 111094;
var female: 119530
                            };
var {
    age: "70 to 74";
var male: 72252;
var female: 80168
                            };
var {
    age: "75 to 79";
var male: 49142;
var female: 59393
                            };
var {
    age: "80 to 84";
var male: 31894;
var female: 43881
                            };
var {
    age: "85 and Older";
var male: 26852;
var female: 50634
                            } ];
var CT: [{
    age: "0 to 5";
var male: 97647;
var female: 93798
                            };
var {
    age: "10 to 14";
var male: 118032;
var female: 113043
                            };
var {
    age: "15 to 17";
var male: 75546;
var female: 71687
                            };
var {
    age: "18 to 21";
var male: 106966;
var female: 102763
                            };
var {
    age: "22 to 24";
var male: 71125;
var female: 64777
                            };
var {
    age: "25 to 29";
var male: 112189;
var female: 108170
                            };
var {
    age: "30 to 34";
var male: 107223;
var female: 109096
                            };
var {
    age: "35 to 39";
var male: 102424;
var female: 106008
                            };
var {
    age: "40 to 44";
var male: 116664;
var female: 123744
                            };
var {
    age: "45 to 49";
var male: 131872;
var female: 139406
                            };
var {
    age: "5 to 9";
var male: 110043;
var female: 104940
                            };
var {
    age: "50 to 54";
var male: 138644;
var female: 146532
                            };
var {
    age: "55 to 59";
var male: 126670;
var female: 132895
                            };
var {
    age: "60 to 64";
var male: 104701;
var female: 114339
                            };
var {
    age: "65 to 69";
var male: 80178;
var female: 91052
                            };
var {
    age: "70 to 74";
var male: 55237;
var female: 65488
                            };
var {
    age: "75 to 79";
var male: 38844;
var female: 51544
                            };
var {
    age: "80 to 84";
var male: 28908;
var female: 43036
                            };
var {
    age: "85 and Older";
var male: 28694;
var female: 59297
                            } ];
var DC: [{
    age: "0 to 5";
var male: 20585;
var female: 19848
                            };
var {
    age: "10 to 14";
var male: 12723;
var female: 11991
                            };
var {
    age: "15 to 17";
var male: 7740;
var female: 7901
                            };
var {
    age: "18 to 21";
var male: 22350;
var female: 25467
                            };
var {
    age: "22 to 24";
var male: 15325;
var female: 19085
                            };
var {
    age: "25 to 29";
var male: 35295;
var female: 41913
                            };
var {
    age: "30 to 34";
var male: 32716;
var female: 35553
                            };
var {
    age: "35 to 39";
var male: 23748;
var female: 24922
                            };
var {
    age: "40 to 44";
var male: 21158;
var female: 20113
                            };
var {
    age: "45 to 49";
var male: 19279;
var female: 18956
                            };
var {
    age: "5 to 9";
var male: 14999;
var female: 15518
                            };
var {
    age: "50 to 54";
var male: 19249;
var female: 19279
                            };
var {
    age: "55 to 59";
var male: 17592;
var female: 18716
                            };
var {
    age: "60 to 64";
var male: 14272;
var female: 17892
                            };
var {
    age: "65 to 69";
var male: 9740;
var female: 13375
                            };
var {
    age: "70 to 74";
var male: 8221;
var female: 9761
                            };
var {
    age: "75 to 79";
var male: 5071;
var female: 7601
                            };
var {
    age: "80 to 84";
var male: 3399;
var female: 5619
                            };
var {
    age: "85 and Older";
var male: 3212;
var female: 7300
                            } ];
var DE: [{
    age: "0 to 5";
var male: 28382;
var female: 27430
                            };
var {
    age: "10 to 14";
var male: 29482;
var female: 27484
                            };
var {
    age: "15 to 17";
var male: 17589;
var female: 16828
                            };
var {
    age: "18 to 21";
var male: 26852;
var female: 26911
                            };
var {
    age: "22 to 24";
var male: 19006;
var female: 18413
                            };
var {
    age: "25 to 29";
var male: 30933;
var female: 31146
                            };
var {
    age: "30 to 34";
var male: 28602;
var female: 29431
                            };
var {
    age: "35 to 39";
var male: 26498;
var female: 28738
                            };
var {
    age: "40 to 44";
var male: 27674;
var female: 28519
                            };
var {
    age: "45 to 49";
var male: 30582;
var female: 32924
                            };
var {
    age: "5 to 9";
var male: 28224;
var female: 28735
                            };
var {
    age: "50 to 54";
var male: 32444;
var female: 35052
                            };
var {
    age: "55 to 59";
var male: 29048;
var female: 34377
                            };
var {
    age: "60 to 64";
var male: 27925;
var female: 30017
                            };
var {
    age: "65 to 69";
var male: 22767;
var female: 26707
                            };
var {
    age: "70 to 74";
var male: 17121;
var female: 19327
                            };
var {
    age: "75 to 79";
var male: 11479;
var female: 14264
                            };
var {
    age: "80 to 84";
var male: 7473;
var female: 10353
                            };
var {
    age: "85 and Older";
var male: 6332;
var female: 11385
                            } ];
var FL: [{
    age: "0 to 5";
var male: 552054;
var female: 529003
                            };
var {
    age: "10 to 14";
var male: 582351;
var female: 558377
                            };
var {
    age: "15 to 17";
var male: 363538;
var female: 345048
                            };
var {
    age: "18 to 21";
var male: 528013;
var female: 498162
                            };
var {
    age: "22 to 24";
var male: 385515;
var female: 368754
                            };
var {
    age: "25 to 29";
var male: 641710;
var female: 622134
                            };
var {
    age: "30 to 34";
var male: 602467;
var female: 602634
                            };
var {
    age: "35 to 39";
var male: 579722;
var female: 585089
                            };
var {
    age: "40 to 44";
var male: 623074;
var female: 639410
                            };
var {
    age: "45 to 49";
var male: 659376;
var female: 677305
                            };
var {
    age: "5 to 9";
var male: 567479;
var female: 543273
                            };
var {
    age: "50 to 54";
var male: 687625;
var female: 723103
                            };
var {
    age: "55 to 59";
var male: 626363;
var female: 685728
                            };
var {
    age: "60 to 64";
var male: 566282;
var female: 651192
                            };
var {
    age: "65 to 69";
var male: 517513;
var female: 589377
                            };
var {
    age: "70 to 74";
var male: 407275;
var female: 470688
                            };
var {
    age: "75 to 79";
var male: 305530;
var female: 361107
                            };
var {
    age: "80 to 84";
var male: 219362;
var female: 281016
                            };
var {
    age: "85 and Older";
var male: 184760;
var female: 314363
                            } ];
var GA: [{
    age: "0 to 5";
var male: 338979;
var female: 326326
                            };
var {
    age: "10 to 14";
var male: 356404;
var female: 351833
                            };
var {
    age: "15 to 17";
var male: 211908;
var female: 203412
                            };
var {
    age: "18 to 21";
var male: 305617;
var female: 289233
                            };
var {
    age: "22 to 24";
var male: 214032;
var female: 206526
                            };
var {
    age: "25 to 29";
var male: 342885;
var female: 343115
                            };
var {
    age: "30 to 34";
var male: 333159;
var female: 348125
                            };
var {
    age: "35 to 39";
var male: 325121;
var female: 345251
                            };
var {
    age: "40 to 44";
var male: 348120;
var female: 363703
                            };
var {
    age: "45 to 49";
var male: 343559;
var female: 358754
                            };
var {
    age: "5 to 9";
var male: 362147;
var female: 340071
                            };
var {
    age: "50 to 54";
var male: 338424;
var female: 359362
                            };
var {
    age: "55 to 59";
var male: 294734;
var female: 325653
                            };
var {
    age: "60 to 64";
var male: 254497;
var female: 285276
                            };
var {
    age: "65 to 69";
var male: 198714;
var female: 226714
                            };
var {
    age: "70 to 74";
var male: 135107;
var female: 164091
                            };
var {
    age: "75 to 79";
var male: 88135;
var female: 115830
                            };
var {
    age: "80 to 84";
var male: 53792;
var female: 84961
                            };
var {
    age: "85 and Older";
var male: 37997;
var female: 85126
                            } ];
var HI: [{
    age: "0 to 5";
var male: 46668;
var female: 44389
                            };
var {
    age: "10 to 14";
var male: 42590;
var female: 41289
                            };
var {
    age: "15 to 17";
var male: 24759;
var female: 23961
                            };
var {
    age: "18 to 21";
var male: 39937;
var female: 32348
                            };
var {
    age: "22 to 24";
var male: 35270;
var female: 28495
                            };
var {
    age: "25 to 29";
var male: 58033;
var female: 48700
                            };
var {
    age: "30 to 34";
var male: 51544;
var female: 47286
                            };
var {
    age: "35 to 39";
var male: 44144;
var female: 42208
                            };
var {
    age: "40 to 44";
var male: 45731;
var female: 43404
                            };
var {
    age: "45 to 49";
var male: 44336;
var female: 44134
                            };
var {
    age: "5 to 9";
var male: 44115;
var female: 40426
                            };
var {
    age: "50 to 54";
var male: 46481;
var female: 46908
                            };
var {
    age: "55 to 59";
var male: 45959;
var female: 47379
                            };
var {
    age: "60 to 64";
var male: 42420;
var female: 43735
                            };
var {
    age: "65 to 69";
var male: 34846;
var female: 36670
                            };
var {
    age: "70 to 74";
var male: 22981;
var female: 25496
                            };
var {
    age: "75 to 79";
var male: 15219;
var female: 18755
                            };
var {
    age: "80 to 84";
var male: 11142;
var female: 17952
                            };
var {
    age: "85 and Older";
var male: 13696;
var female: 22893
                            } ];
var IA: [{
    age: "0 to 5";
var male: 100400;
var female: 96170
                            };
var {
    age: "10 to 14";
var male: 104674;
var female: 98485
                            };
var {
    age: "15 to 17";
var male: 62452;
var female: 59605
                            };
var {
    age: "18 to 21";
var male: 96966;
var female: 91782
                            };
var {
    age: "22 to 24";
var male: 66307;
var female: 62504
                            };
var {
    age: "25 to 29";
var male: 98079;
var female: 93653
                            };
var {
    age: "30 to 34";
var male: 100924;
var female: 97248
                            };
var {
    age: "35 to 39";
var male: 90980;
var female: 89632
                            };
var {
    age: "40 to 44";
var male: 92961;
var female: 90218
                            };
var {
    age: "45 to 49";
var male: 98877;
var female: 96654
                            };
var {
    age: "5 to 9";
var male: 104279;
var female: 100558
                            };
var {
    age: "50 to 54";
var male: 109267;
var female: 110142
                            };
var {
    age: "55 to 59";
var male: 104021;
var female: 106042
                            };
var {
    age: "60 to 64";
var male: 95379;
var female: 95499
                            };
var {
    age: "65 to 69";
var male: 68276;
var female: 73624
                            };
var {
    age: "70 to 74";
var male: 50414;
var female: 56973
                            };
var {
    age: "75 to 79";
var male: 37867;
var female: 48121
                            };
var {
    age: "80 to 84";
var male: 27523;
var female: 39851
                            };
var {
    age: "85 and Older";
var male: 24949;
var female: 52170
                            } ];
var ID: [{
    age: "0 to 5";
var male: 58355;
var female: 56478
                            };
var {
    age: "10 to 14";
var male: 62528;
var female: 59881
                            };
var {
    age: "15 to 17";
var male: 36373;
var female: 33687
                            };
var {
    age: "18 to 21";
var male: 45752;
var female: 45590
                            };
var {
    age: "22 to 24";
var male: 34595;
var female: 30216
                            };
var {
    age: "25 to 29";
var male: 53998;
var female: 52077
                            };
var {
    age: "30 to 34";
var male: 54217;
var female: 52091
                            };
var {
    age: "35 to 39";
var male: 51247;
var female: 47801
                            };
var {
    age: "40 to 44";
var male: 49113;
var female: 49853
                            };
var {
    age: "45 to 49";
var male: 48392;
var female: 48288
                            };
var {
    age: "5 to 9";
var male: 63107;
var female: 59237
                            };
var {
    age: "50 to 54";
var male: 51805;
var female: 52984
                            };
var {
    age: "55 to 59";
var male: 49226;
var female: 51868
                            };
var {
    age: "60 to 64";
var male: 47343;
var female: 47631
                            };
var {
    age: "65 to 69";
var male: 38436;
var female: 38133
                            };
var {
    age: "70 to 74";
var male: 26243;
var female: 28577
                            };
var {
    age: "75 to 79";
var male: 18404;
var female: 20325
                            };
var {
    age: "80 to 84";
var male: 11653;
var female: 15313
                            };
var {
    age: "85 and Older";
var male: 9677;
var female: 16053
                            } ];
var IL: [{
    age: "0 to 5";
var male: 408295;
var female: 392900
                            };
var {
    age: "10 to 14";
var male: 437688;
var female: 419077
                            };
var {
    age: "15 to 17";
var male: 269202;
var female: 257213
                            };
var {
    age: "18 to 21";
var male: 369219;
var female: 353570
                            };
var {
    age: "22 to 24";
var male: 268501;
var female: 258559
                            };
var {
    age: "25 to 29";
var male: 448001;
var female: 442418
                            };
var {
    age: "30 to 34";
var male: 445416;
var female: 445729
                            };
var {
    age: "35 to 39";
var male: 416265;
var female: 418999
                            };
var {
    age: "40 to 44";
var male: 425825;
var female: 427573
                            };
var {
    age: "45 to 49";
var male: 433177;
var female: 441116
                            };
var {
    age: "5 to 9";
var male: 427121;
var female: 412238
                            };
var {
    age: "50 to 54";
var male: 454039;
var female: 470982
                            };
var {
    age: "55 to 59";
var male: 414948;
var female: 442280
                            };
var {
    age: "60 to 64";
var male: 354782;
var female: 380640
                            };
var {
    age: "65 to 69";
var male: 259363;
var female: 292899
                            };
var {
    age: "70 to 74";
var male: 184622;
var female: 223905
                            };
var {
    age: "75 to 79";
var male: 129016;
var female: 171743
                            };
var {
    age: "80 to 84";
var male: 91973;
var female: 139204
                            };
var {
    age: "85 and Older";
var male: 79446;
var female: 165817
                            } ];
var IN: [{
    age: "0 to 5";
var male: 215697;
var female: 205242
                            };
var {
    age: "10 to 14";
var male: 229911;
var female: 221563
                            };
var {
    age: "15 to 17";
var male: 139494;
var female: 132879
                            };
var {
    age: "18 to 21";
var male: 198763;
var female: 194206
                            };
var {
    age: "22 to 24";
var male: 140805;
var female: 131947
                            };
var {
    age: "25 to 29";
var male: 210315;
var female: 208593
                            };
var {
    age: "30 to 34";
var male: 211656;
var female: 210103
                            };
var {
    age: "35 to 39";
var male: 201979;
var female: 200693
                            };
var {
    age: "40 to 44";
var male: 212114;
var female: 212653
                            };
var {
    age: "45 to 49";
var male: 216446;
var female: 219033
                            };
var {
    age: "5 to 9";
var male: 226901;
var female: 214964
                            };
var {
    age: "50 to 54";
var male: 232241;
var female: 237844
                            };
var {
    age: "55 to 59";
var male: 217033;
var female: 228674
                            };
var {
    age: "60 to 64";
var male: 186412;
var female: 197353
                            };
var {
    age: "65 to 69";
var male: 140336;
var female: 156256
                            };
var {
    age: "70 to 74";
var male: 99402;
var female: 116834
                            };
var {
    age: "75 to 79";
var male: 68758;
var female: 88794
                            };
var {
    age: "80 to 84";
var male: 47628;
var female: 72061
                            };
var {
    age: "85 and Older";
var male: 39372;
var female: 83690
                            } ];
var KS: [{
    age: "0 to 5";
var male: 102716;
var female: 98004
                            };
var {
    age: "10 to 14";
var male: 102335;
var female: 99132
                            };
var {
    age: "15 to 17";
var male: 60870;
var female: 57957
                            };
var {
    age: "18 to 21";
var male: 90593;
var female: 83299
                            };
var {
    age: "22 to 24";
var male: 66512;
var female: 59368
                            };
var {
    age: "25 to 29";
var male: 99384;
var female: 93840
                            };
var {
    age: "30 to 34";
var male: 98020;
var female: 94075
                            };
var {
    age: "35 to 39";
var male: 87763;
var female: 85422
                            };
var {
    age: "40 to 44";
var male: 87647;
var female: 84970
                            };
var {
    age: "45 to 49";
var male: 89233;
var female: 88877
                            };
var {
    age: "5 to 9";
var male: 103861;
var female: 98642
                            };
var {
    age: "50 to 54";
var male: 98398;
var female: 101197
                            };
var {
    age: "55 to 59";
var male: 95861;
var female: 96152
                            };
var {
    age: "60 to 64";
var male: 79440;
var female: 85124
                            };
var {
    age: "65 to 69";
var male: 60035;
var female: 64369
                            };
var {
    age: "70 to 74";
var male: 42434;
var female: 49221
                            };
var {
    age: "75 to 79";
var male: 30967;
var female: 39425
                            };
var {
    age: "80 to 84";
var male: 23026;
var female: 33863
                            };
var {
    age: "85 and Older";
var male: 20767;
var female: 40188
                            } ];
var KY: [{
    age: "0 to 5";
var male: 142062;
var female: 134389
                            };
var {
    age: "10 to 14";
var male: 147586;
var female: 138629
                            };
var {
    age: "15 to 17";
var male: 87696;
var female: 83139
                            };
var {
    age: "18 to 21";
var male: 128249;
var female: 121099
                            };
var {
    age: "22 to 24";
var male: 90794;
var female: 85930
                            };
var {
    age: "25 to 29";
var male: 140811;
var female: 139855
                            };
var {
    age: "30 to 34";
var male: 142732;
var female: 142551
                            };
var {
    age: "35 to 39";
var male: 137211;
var female: 136524
                            };
var {
    age: "40 to 44";
var male: 145358;
var female: 145251
                            };
var {
    age: "45 to 49";
var male: 148883;
var female: 150922
                            };
var {
    age: "5 to 9";
var male: 143532;
var female: 139032
                            };
var {
    age: "50 to 54";
var male: 156890;
var female: 163054
                            };
var {
    age: "55 to 59";
var male: 147006;
var female: 156302
                            };
var {
    age: "60 to 64";
var male: 129457;
var female: 139434
                            };
var {
    age: "65 to 69";
var male: 100883;
var female: 112696
                            };
var {
    age: "70 to 74";
var male: 71867;
var female: 83665
                            };
var {
    age: "75 to 79";
var male: 47828;
var female: 62775
                            };
var {
    age: "80 to 84";
var male: 31477;
var female: 46386
                            };
var {
    age: "85 and Older";
var male: 23886;
var female: 51512
                            } ];
var LA: [{
    age: "0 to 5";
var male: 157642;
var female: 152324
                            };
var {
    age: "10 to 14";
var male: 157781;
var female: 149752
                            };
var {
    age: "15 to 17";
var male: 93357;
var female: 90227
                            };
var {
    age: "18 to 21";
var male: 136496;
var female: 131202
                            };
var {
    age: "22 to 24";
var male: 101438;
var female: 101480
                            };
var {
    age: "25 to 29";
var male: 167414;
var female: 168886
                            };
var {
    age: "30 to 34";
var male: 160094;
var female: 161424
                            };
var {
    age: "35 to 39";
var male: 142182;
var female: 141813
                            };
var {
    age: "40 to 44";
var male: 138717;
var female: 144789
                            };
var {
    age: "45 to 49";
var male: 145906;
var female: 152340
                            };
var {
    age: "5 to 9";
var male: 159193;
var female: 154320
                            };
var {
    age: "50 to 54";
var male: 157743;
var female: 167125
                            };
var {
    age: "55 to 59";
var male: 149001;
var female: 161295
                            };
var {
    age: "60 to 64";
var male: 129265;
var female: 139378
                            };
var {
    age: "65 to 69";
var male: 98404;
var female: 106844
                            };
var {
    age: "70 to 74";
var male: 65845;
var female: 83779
                            };
var {
    age: "75 to 79";
var male: 47365;
var female: 60745
                            };
var {
    age: "80 to 84";
var male: 29452;
var female: 48839
                            };
var {
    age: "85 and Older";
var male: 23861;
var female: 47535
                            } ];
var MA: [{
    age: "0 to 5";
var male: 187066;
var female: 178775
                            };
var {
    age: "10 to 14";
var male: 205530;
var female: 195312
                            };
var {
    age: "15 to 17";
var male: 129433;
var female: 123212
                            };
var {
    age: "18 to 21";
var male: 207432;
var female: 213820
                            };
var {
    age: "22 to 24";
var male: 140356;
var female: 135839
                            };
var {
    age: "25 to 29";
var male: 235172;
var female: 237653
                            };
var {
    age: "30 to 34";
var male: 216220;
var female: 221692
                            };
var {
    age: "35 to 39";
var male: 196293;
var female: 202730
                            };
var {
    age: "40 to 44";
var male: 218111;
var female: 231277
                            };
var {
    age: "45 to 49";
var male: 237629;
var female: 249926
                            };
var {
    age: "5 to 9";
var male: 191958;
var female: 186343
                            };
var {
    age: "50 to 54";
var male: 247973;
var female: 260886
                            };
var {
    age: "55 to 59";
var male: 227238;
var female: 241029
                            };
var {
    age: "60 to 64";
var male: 189981;
var female: 211282
                            };
var {
    age: "65 to 69";
var male: 146129;
var female: 164268
                            };
var {
    age: "70 to 74";
var male: 100745;
var female: 123577
                            };
var {
    age: "75 to 79";
var male: 70828;
var female: 92141
                            };
var {
    age: "80 to 84";
var male: 52074;
var female: 81603
                            };
var {
    age: "85 and Older";
var male: 49482;
var female: 104571
                            } ];
var MD: [{
    age: "0 to 5";
var male: 187617;
var female: 180105
                            };
var {
    age: "10 to 14";
var male: 191787;
var female: 185380
                            };
var {
    age: "15 to 17";
var male: 118027;
var female: 113549
                            };
var {
    age: "18 to 21";
var male: 166991;
var female: 159589
                            };
var {
    age: "22 to 24";
var male: 120617;
var female: 116602
                            };
var {
    age: "25 to 29";
var male: 205555;
var female: 206944
                            };
var {
    age: "30 to 34";
var male: 196824;
var female: 203989
                            };
var {
    age: "35 to 39";
var male: 179340;
var female: 193957
                            };
var {
    age: "40 to 44";
var male: 195388;
var female: 205570
                            };
var {
    age: "45 to 49";
var male: 208382;
var female: 225458
                            };
var {
    age: "5 to 9";
var male: 189781;
var female: 182034
                            };
var {
    age: "50 to 54";
var male: 217574;
var female: 235604
                            };
var {
    age: "55 to 59";
var male: 193789;
var female: 210582
                            };
var {
    age: "60 to 64";
var male: 161828;
var female: 186524
                            };
var {
    age: "65 to 69";
var male: 123204;
var female: 144193
                            };
var {
    age: "70 to 74";
var male: 84114;
var female: 101563
                            };
var {
    age: "75 to 79";
var male: 56755;
var female: 75715
                            };
var {
    age: "80 to 84";
var male: 39615;
var female: 59728
                            };
var {
    age: "85 and Older";
var male: 35455;
var female: 70809
                            } ];
var ME: [{
    age: "0 to 5";
var male: 33298;
var female: 32108
                            };
var {
    age: "10 to 14";
var male: 38254;
var female: 36846
                            };
var {
    age: "15 to 17";
var male: 24842;
var female: 23688
                            };
var {
    age: "18 to 21";
var male: 35315;
var female: 33777
                            };
var {
    age: "22 to 24";
var male: 23007;
var female: 21971
                            };
var {
    age: "25 to 29";
var male: 37685;
var female: 38353
                            };
var {
    age: "30 to 34";
var male: 36838;
var female: 37697
                            };
var {
    age: "35 to 39";
var male: 35988;
var female: 37686
                            };
var {
    age: "40 to 44";
var male: 42092;
var female: 42912
                            };
var {
    age: "45 to 49";
var male: 47141;
var female: 49161
                            };
var {
    age: "5 to 9";
var male: 38066;
var female: 35151
                            };
var {
    age: "50 to 54";
var male: 53458;
var female: 55451
                            };
var {
    age: "55 to 59";
var male: 51789;
var female: 55407
                            };
var {
    age: "60 to 64";
var male: 47171;
var female: 49840
                            };
var {
    age: "65 to 69";
var male: 37495;
var female: 39678
                            };
var {
    age: "70 to 74";
var male: 26300;
var female: 28932
                            };
var {
    age: "75 to 79";
var male: 18197;
var female: 22047
                            };
var {
    age: "80 to 84";
var male: 12824;
var female: 18302
                            };
var {
    age: "85 and Older";
var male: 10321;
var female: 20012
                            } ];
var MI: [{
    age: "0 to 5";
var male: 295157;
var female: 280629
                            };
var {
    age: "10 to 14";
var male: 329983;
var female: 319870
                            };
var {
    age: "15 to 17";
var male: 210017;
var female: 199977
                            };
var {
    age: "18 to 21";
var male: 299937;
var female: 287188
                            };
var {
    age: "22 to 24";
var male: 208270;
var female: 202858
                            };
var {
    age: "25 to 29";
var male: 303606;
var female: 298013
                            };
var {
    age: "30 to 34";
var male: 292780;
var female: 296303
                            };
var {
    age: "35 to 39";
var male: 283925;
var female: 288526
                            };
var {
    age: "40 to 44";
var male: 314544;
var female: 319923
                            };
var {
    age: "45 to 49";
var male: 337524;
var female: 344097
                            };
var {
    age: "5 to 9";
var male: 316345;
var female: 297675
                            };
var {
    age: "50 to 54";
var male: 366054;
var female: 378332
                            };
var {
    age: "55 to 59";
var male: 349590;
var female: 369347
                            };
var {
    age: "60 to 64";
var male: 303421;
var female: 323815
                            };
var {
    age: "65 to 69";
var male: 230810;
var female: 252455
                            };
var {
    age: "70 to 74";
var male: 161676;
var female: 186453
                            };
var {
    age: "75 to 79";
var male: 112555;
var female: 141554
                            };
var {
    age: "80 to 84";
var male: 78669;
var female: 116914
                            };
var {
    age: "85 and Older";
var male: 67110;
var female: 134669
                            } ];
var MN: [{
    age: "0 to 5";
var male: 178616;
var female: 170645
                            };
var {
    age: "10 to 14";
var male: 180951;
var female: 174374
                            };
var {
    age: "15 to 17";
var male: 110001;
var female: 104197
                            };
var {
    age: "18 to 21";
var male: 148247;
var female: 144611
                            };
var {
    age: "22 to 24";
var male: 108864;
var female: 103755
                            };
var {
    age: "25 to 29";
var male: 185766;
var female: 180698
                            };
var {
    age: "30 to 34";
var male: 189374;
var female: 184845
                            };
var {
    age: "35 to 39";
var male: 166613;
var female: 160534
                            };
var {
    age: "40 to 44";
var male: 172583;
var female: 171011
                            };
var {
    age: "45 to 49";
var male: 184130;
var female: 182785
                            };
var {
    age: "5 to 9";
var male: 185244;
var female: 176674
                            };
var {
    age: "50 to 54";
var male: 202427;
var female: 203327
                            };
var {
    age: "55 to 59";
var male: 187216;
var female: 189980
                            };
var {
    age: "60 to 64";
var male: 157586;
var female: 160588
                            };
var {
    age: "65 to 69";
var male: 114903;
var female: 121985
                            };
var {
    age: "70 to 74";
var male: 81660;
var female: 92401
                            };
var {
    age: "75 to 79";
var male: 57855;
var female: 72839
                            };
var {
    age: "80 to 84";
var male: 42192;
var female: 58545
                            };
var {
    age: "85 and Older";
var male: 37938;
var female: 73211
                            } ];
var MO: [{
    age: "0 to 5";
var male: 192851;
var female: 183921
                            };
var {
    age: "10 to 14";
var male: 201273;
var female: 190020
                            };
var {
    age: "15 to 17";
var male: 122944;
var female: 116383
                            };
var {
    age: "18 to 21";
var male: 175782;
var female: 169076
                            };
var {
    age: "22 to 24";
var male: 124584;
var female: 123027
                            };
var {
    age: "25 to 29";
var male: 200511;
var female: 200134
                            };
var {
    age: "30 to 34";
var male: 197781;
var female: 198735
                            };
var {
    age: "35 to 39";
var male: 181485;
var female: 180002
                            };
var {
    age: "40 to 44";
var male: 183318;
var female: 188038
                            };
var {
    age: "45 to 49";
var male: 194538;
var female: 199735
                            };
var {
    age: "5 to 9";
var male: 200091;
var female: 193196
                            };
var {
    age: "50 to 54";
var male: 218663;
var female: 225083
                            };
var {
    age: "55 to 59";
var male: 199513;
var female: 216459
                            };
var {
    age: "60 to 64";
var male: 176036;
var female: 187668
                            };
var {
    age: "65 to 69";
var male: 135605;
var female: 150815
                            };
var {
    age: "70 to 74";
var male: 99845;
var female: 117802
                            };
var {
    age: "75 to 79";
var male: 70734;
var female: 88769
                            };
var {
    age: "80 to 84";
var male: 48118;
var female: 72085
                            };
var {
    age: "85 and Older";
var male: 40331;
var female: 80497
                            } ];
var MS: [{
    age: "0 to 5";
var male: 100654;
var female: 97079
                            };
var {
    age: "10 to 14";
var male: 107363;
var female: 101958
                            };
var {
    age: "15 to 17";
var male: 62923;
var female: 60591
                            };
var {
    age: "18 to 21";
var male: 94460;
var female: 94304
                            };
var {
    age: "22 to 24";
var male: 63870;
var female: 58909
                            };
var {
    age: "25 to 29";
var male: 96027;
var female: 98023
                            };
var {
    age: "30 to 34";
var male: 95533;
var female: 98837
                            };
var {
    age: "35 to 39";
var male: 88278;
var female: 92876
                            };
var {
    age: "40 to 44";
var male: 93579;
var female: 97851
                            };
var {
    age: "45 to 49";
var male: 92103;
var female: 98871
                            };
var {
    age: "5 to 9";
var male: 104911;
var female: 100694
                            };
var {
    age: "50 to 54";
var male: 98578;
var female: 106516
                            };
var {
    age: "55 to 59";
var male: 94835;
var female: 101616
                            };
var {
    age: "60 to 64";
var male: 80677;
var female: 91332
                            };
var {
    age: "65 to 69";
var male: 64386;
var female: 72940
                            };
var {
    age: "70 to 74";
var male: 46712;
var female: 56013
                            };
var {
    age: "75 to 79";
var male: 32079;
var female: 42598
                            };
var {
    age: "80 to 84";
var male: 19966;
var female: 32724
                            };
var {
    age: "85 and Older";
var male: 14789;
var female: 32626
                            } ];
var MT: [{
    age: "0 to 5";
var male: 31021;
var female: 29676
                            };
var {
    age: "10 to 14";
var male: 30960;
var female: 29710
                            };
var {
    age: "15 to 17";
var male: 19558;
var female: 18061
                            };
var {
    age: "18 to 21";
var male: 30975;
var female: 27314
                            };
var {
    age: "22 to 24";
var male: 21419;
var female: 20153
                            };
var {
    age: "25 to 29";
var male: 32300;
var female: 30805
                            };
var {
    age: "30 to 34";
var male: 33167;
var female: 30964
                            };
var {
    age: "35 to 39";
var male: 29772;
var female: 28999
                            };
var {
    age: "40 to 44";
var male: 28538;
var female: 27311
                            };
var {
    age: "45 to 49";
var male: 30820;
var female: 30608
                            };
var {
    age: "5 to 9";
var male: 33641;
var female: 31763
                            };
var {
    age: "50 to 54";
var male: 36761;
var female: 37476
                            };
var {
    age: "55 to 59";
var male: 38291;
var female: 40028
                            };
var {
    age: "60 to 64";
var male: 35306;
var female: 35021
                            };
var {
    age: "65 to 69";
var male: 27786;
var female: 27047
                            };
var {
    age: "70 to 74";
var male: 19708;
var female: 19938
                            };
var {
    age: "75 to 79";
var male: 13344;
var female: 14751
                            };
var {
    age: "80 to 84";
var male: 9435;
var female: 11392
                            };
var {
    age: "85 and Older";
var male: 7361;
var female: 13519
                            } ];
var NC: [{
    age: "0 to 5";
var male: 311288;
var female: 299882
                            };
var {
    age: "10 to 14";
var male: 333622;
var female: 316123
                            };
var {
    age: "15 to 17";
var male: 194507;
var female: 185872
                            };
var {
    age: "18 to 21";
var male: 299506;
var female: 275504
                            };
var {
    age: "22 to 24";
var male: 207910;
var female: 196277
                            };
var {
    age: "25 to 29";
var male: 317709;
var female: 324593
                            };
var {
    age: "30 to 34";
var male: 311582;
var female: 323483
                            };
var {
    age: "35 to 39";
var male: 308195;
var female: 319405
                            };
var {
    age: "40 to 44";
var male: 334818;
var female: 349484
                            };
var {
    age: "45 to 49";
var male: 331086;
var female: 345940
                            };
var {
    age: "5 to 9";
var male: 325977;
var female: 316564
                            };
var {
    age: "50 to 54";
var male: 334674;
var female: 355791
                            };
var {
    age: "55 to 59";
var male: 308840;
var female: 341170
                            };
var {
    age: "60 to 64";
var male: 270508;
var female: 303831
                            };
var {
    age: "65 to 69";
var male: 225997;
var female: 254521
                            };
var {
    age: "70 to 74";
var male: 154010;
var female: 186677
                            };
var {
    age: "75 to 79";
var male: 106165;
var female: 139937
                            };
var {
    age: "80 to 84";
var male: 68871;
var female: 104839
                            };
var {
    age: "85 and Older";
var male: 50143;
var female: 110032
                            } ];
var ND: [{
    age: "0 to 5";
var male: 24524;
var female: 24340
                            };
var {
    age: "10 to 14";
var male: 20939;
var female: 20728
                            };
var {
    age: "15 to 17";
var male: 13197;
var female: 12227
                            };
var {
    age: "18 to 21";
var male: 27439;
var female: 22447
                            };
var {
    age: "22 to 24";
var male: 21413;
var female: 19299
                            };
var {
    age: "25 to 29";
var male: 29543;
var female: 24602
                            };
var {
    age: "30 to 34";
var male: 26425;
var female: 22798
                            };
var {
    age: "35 to 39";
var male: 21846;
var female: 19046
                            };
var {
    age: "40 to 44";
var male: 20123;
var female: 19010
                            };
var {
    age: "45 to 49";
var male: 21386;
var female: 20572
                            };
var {
    age: "5 to 9";
var male: 24336;
var female: 22721
                            };
var {
    age: "50 to 54";
var male: 25126;
var female: 24631
                            };
var {
    age: "55 to 59";
var male: 24412;
var female: 24022
                            };
var {
    age: "60 to 64";
var male: 21598;
var female: 20250
                            };
var {
    age: "65 to 69";
var male: 14868;
var female: 14633
                            };
var {
    age: "70 to 74";
var male: 10729;
var female: 11878
                            };
var {
    age: "75 to 79";
var male: 8086;
var female: 9626
                            };
var {
    age: "80 to 84";
var male: 6222;
var female: 9241
                            };
var {
    age: "85 and Older";
var male: 5751;
var female: 11606
                            } ];
var NE: [{
    age: "0 to 5";
var male: 67062;
var female: 62974
                            };
var {
    age: "10 to 14";
var male: 64843;
var female: 62695
                            };
var {
    age: "15 to 17";
var male: 38679;
var female: 36116
                            };
var {
    age: "18 to 21";
var male: 56143;
var female: 54195
                            };
var {
    age: "22 to 24";
var male: 40531;
var female: 38139
                            };
var {
    age: "25 to 29";
var male: 64277;
var female: 61028
                            };
var {
    age: "30 to 34";
var male: 64230;
var female: 62423
                            };
var {
    age: "35 to 39";
var male: 57741;
var female: 55950
                            };
var {
    age: "40 to 44";
var male: 56139;
var female: 54518
                            };
var {
    age: "45 to 49";
var male: 57526;
var female: 57077
                            };
var {
    age: "5 to 9";
var male: 68079;
var female: 64509
                            };
var {
    age: "50 to 54";
var male: 64444;
var female: 65106
                            };
var {
    age: "55 to 59";
var male: 61285;
var female: 62057
                            };
var {
    age: "60 to 64";
var male: 52560;
var female: 54977
                            };
var {
    age: "65 to 69";
var male: 39372;
var female: 41007
                            };
var {
    age: "70 to 74";
var male: 27091;
var female: 31903
                            };
var {
    age: "75 to 79";
var male: 20472;
var female: 26808
                            };
var {
    age: "80 to 84";
var male: 15625;
var female: 21401
                            };
var {
    age: "85 and Older";
var male: 13507;
var female: 26876
                            } ];
var NH: [{
    age: "0 to 5";
var male: 33531;
var female: 32061
                            };
var {
    age: "10 to 14";
var male: 40472;
var female: 39574
                            };
var {
    age: "15 to 17";
var male: 26632;
var female: 25155
                            };
var {
    age: "18 to 21";
var male: 39600;
var female: 39270
                            };
var {
    age: "22 to 24";
var male: 25067;
var female: 23439
                            };
var {
    age: "25 to 29";
var male: 39514;
var female: 37529
                            };
var {
    age: "30 to 34";
var male: 37282;
var female: 37104
                            };
var {
    age: "35 to 39";
var male: 37177;
var female: 38432
                            };
var {
    age: "40 to 44";
var male: 43571;
var female: 43894
                            };
var {
    age: "45 to 49";
var male: 50559;
var female: 51423
                            };
var {
    age: "5 to 9";
var male: 37873;
var female: 36382
                            };
var {
    age: "50 to 54";
var male: 55573;
var female: 57097
                            };
var {
    age: "55 to 59";
var male: 50802;
var female: 52906
                            };
var {
    age: "60 to 64";
var male: 44934;
var female: 45384
                            };
var {
    age: "65 to 69";
var male: 33322;
var female: 34773
                            };
var {
    age: "70 to 74";
var male: 22786;
var female: 25421
                            };
var {
    age: "75 to 79";
var male: 14988;
var female: 18865
                            };
var {
    age: "80 to 84";
var male: 10661;
var female: 14921
                            };
var {
    age: "85 and Older";
var male: 9140;
var female: 17087
                            } ];
var NJ: [{
    age: "0 to 5";
var male: 272239;
var female: 261405
                            };
var {
    age: "10 to 14";
var male: 296798;
var female: 281395
                            };
var {
    age: "15 to 17";
var male: 183608;
var female: 174902
                            };
var {
    age: "18 to 21";
var male: 236406;
var female: 219234
                            };
var {
    age: "22 to 24";
var male: 171414;
var female: 162551
                            };
var {
    age: "25 to 29";
var male: 288078;
var female: 278395
                            };
var {
    age: "30 to 34";
var male: 286242;
var female: 288661
                            };
var {
    age: "35 to 39";
var male: 278323;
var female: 286407
                            };
var {
    age: "40 to 44";
var male: 306371;
var female: 315976
                            };
var {
    age: "45 to 49";
var male: 324604;
var female: 340805
                            };
var {
    age: "5 to 9";
var male: 280348;
var female: 272618
                            };
var {
    age: "50 to 54";
var male: 335379;
var female: 351753
                            };
var {
    age: "55 to 59";
var male: 297889;
var female: 316509
                            };
var {
    age: "60 to 64";
var male: 243909;
var female: 272971
                            };
var {
    age: "65 to 69";
var male: 187928;
var female: 216233
                            };
var {
    age: "70 to 74";
var male: 130458;
var female: 162862
                            };
var {
    age: "75 to 79";
var male: 92629;
var female: 121544
                            };
var {
    age: "80 to 84";
var male: 68009;
var female: 107002
                            };
var {
    age: "85 and Older";
var male: 62395;
var female: 130163
                            } ];
var NM: [{
    age: "0 to 5";
var male: 70556;
var female: 67433
                            };
var {
    age: "10 to 14";
var male: 72070;
var female: 69774
                            };
var {
    age: "15 to 17";
var male: 42831;
var female: 41474
                            };
var {
    age: "18 to 21";
var male: 61671;
var female: 59289
                            };
var {
    age: "22 to 24";
var male: 47139;
var female: 41506
                            };
var {
    age: "25 to 29";
var male: 73009;
var female: 67866
                            };
var {
    age: "30 to 34";
var male: 69394;
var female: 66383
                            };
var {
    age: "35 to 39";
var male: 62108;
var female: 60810
                            };
var {
    age: "40 to 44";
var male: 61075;
var female: 61508
                            };
var {
    age: "45 to 49";
var male: 62327;
var female: 64988
                            };
var {
    age: "5 to 9";
var male: 72877;
var female: 69675
                            };
var {
    age: "50 to 54";
var male: 69856;
var female: 73683
                            };
var {
    age: "55 to 59";
var male: 66381;
var female: 73952
                            };
var {
    age: "60 to 64";
var male: 61719;
var female: 66285
                            };
var {
    age: "65 to 69";
var male: 48657;
var female: 54175
                            };
var {
    age: "70 to 74";
var male: 35942;
var female: 39668
                            };
var {
    age: "75 to 79";
var male: 24922;
var female: 29968
                            };
var {
    age: "80 to 84";
var male: 16894;
var female: 21049
                            };
var {
    age: "85 and Older";
var male: 12986;
var female: 22217
                            } ];
var NV: [{
    age: "0 to 5";
var male: 91556;
var female: 87252
                            };
var {
    age: "10 to 14";
var male: 92376;
var female: 90127
                            };
var {
    age: "15 to 17";
var male: 56635;
var female: 53976
                            };
var {
    age: "18 to 21";
var male: 72185;
var female: 68570
                            };
var {
    age: "22 to 24";
var male: 57429;
var female: 54635
                            };
var {
    age: "25 to 29";
var male: 103079;
var female: 98260
                            };
var {
    age: "30 to 34";
var male: 101626;
var female: 97574
                            };
var {
    age: "35 to 39";
var male: 95952;
var female: 91752
                            };
var {
    age: "40 to 44";
var male: 98405;
var female: 96018
                            };
var {
    age: "45 to 49";
var male: 98297;
var female: 92880
                            };
var {
    age: "5 to 9";
var male: 97639;
var female: 92019
                            };
var {
    age: "50 to 54";
var male: 96647;
var female: 93838
                            };
var {
    age: "55 to 59";
var male: 86430;
var female: 90916
                            };
var {
    age: "60 to 64";
var male: 79651;
var female: 82206
                            };
var {
    age: "65 to 69";
var male: 65973;
var female: 70582
                            };
var {
    age: "70 to 74";
var male: 48879;
var female: 50485
                            };
var {
    age: "75 to 79";
var male: 31798;
var female: 33652
                            };
var {
    age: "80 to 84";
var male: 19722;
var female: 23399
                            };
var {
    age: "85 and Older";
var male: 13456;
var female: 22760
                            } ];
var NY: [{
    age: "0 to 5";
var male: 601900;
var female: 574532
                            };
var {
    age: "10 to 14";
var male: 602877;
var female: 576846
                            };
var {
    age: "15 to 17";
var male: 381224;
var female: 364149
                            };
var {
    age: "18 to 21";
var male: 579276;
var female: 563517
                            };
var {
    age: "22 to 24";
var male: 423461;
var female: 419351
                            };
var {
    age: "25 to 29";
var male: 722290;
var female: 728064
                            };
var {
    age: "30 to 34";
var male: 668918;
var female: 684340
                            };
var {
    age: "35 to 39";
var male: 607495;
var female: 628810
                            };
var {
    age: "40 to 44";
var male: 632186;
var female: 660306
                            };
var {
    age: "45 to 49";
var male: 674516;
var female: 708960
                            };
var {
    age: "5 to 9";
var male: 588624;
var female: 561622
                            };
var {
    age: "50 to 54";
var male: 695357;
var female: 740342
                            };
var {
    age: "55 to 59";
var male: 633602;
var female: 685163
                            };
var {
    age: "60 to 64";
var male: 540901;
var female: 604110
                            };
var {
    age: "65 to 69";
var male: 409399;
var female: 483158
                            };
var {
    age: "70 to 74";
var male: 287440;
var female: 357971
                            };
var {
    age: "75 to 79";
var male: 207495;
var female: 274626
                            };
var {
    age: "80 to 84";
var male: 150642;
var female: 231063
                            };
var {
    age: "85 and Older";
var male: 134198;
var female: 284443
                            } ];
var OH: [{
    age: "0 to 5";
var male: 356598;
var female: 339398
                            };
var {
    age: "10 to 14";
var male: 385542;
var female: 371142
                            };
var {
    age: "15 to 17";
var male: 239825;
var female: 228296
                            };
var {
    age: "18 to 21";
var male: 331115;
var female: 318019
                            };
var {
    age: "22 to 24";
var male: 227916;
var female: 225400
                            };
var {
    age: "25 to 29";
var male: 369646;
var female: 367475
                            };
var {
    age: "30 to 34";
var male: 356757;
var female: 359375
                            };
var {
    age: "35 to 39";
var male: 338273;
var female: 340410
                            };
var {
    age: "40 to 44";
var male: 368578;
var female: 375476
                            };
var {
    age: "45 to 49";
var male: 385388;
var female: 394341
                            };
var {
    age: "5 to 9";
var male: 376976;
var female: 358242
                            };
var {
    age: "50 to 54";
var male: 420561;
var female: 438290
                            };
var {
    age: "55 to 59";
var male: 403067;
var female: 427137
                            };
var {
    age: "60 to 64";
var male: 350563;
var female: 374890
                            };
var {
    age: "65 to 69";
var male: 262844;
var female: 292745
                            };
var {
    age: "70 to 74";
var male: 183419;
var female: 222552
                            };
var {
    age: "75 to 79";
var male: 131940;
var female: 173303
                            };
var {
    age: "80 to 84";
var male: 93267;
var female: 140079
                            };
var {
    age: "85 and Older";
var male: 80618;
var female: 166514
                            } ];
var OK: [{
    age: "0 to 5";
var male: 135423;
var female: 130297
                            };
var {
    age: "10 to 14";
var male: 133539;
var female: 128110
                            };
var {
    age: "15 to 17";
var male: 79207;
var female: 74080
                            };
var {
    age: "18 to 21";
var male: 115423;
var female: 107651
                            };
var {
    age: "22 to 24";
var male: 85610;
var female: 80749
                            };
var {
    age: "25 to 29";
var male: 135217;
var female: 130966
                            };
var {
    age: "30 to 34";
var male: 132683;
var female: 128496
                            };
var {
    age: "35 to 39";
var male: 118240;
var female: 116104
                            };
var {
    age: "40 to 44";
var male: 118534;
var female: 117501
                            };
var {
    age: "45 to 49";
var male: 117065;
var female: 118300
                            };
var {
    age: "5 to 9";
var male: 137212;
var female: 130040
                            };
var {
    age: "50 to 54";
var male: 129964;
var female: 132941
                            };
var {
    age: "55 to 59";
var male: 121988;
var female: 129033
                            };
var {
    age: "60 to 64";
var male: 105018;
var female: 113144
                            };
var {
    age: "65 to 69";
var male: 82818;
var female: 93914
                            };
var {
    age: "70 to 74";
var male: 62979;
var female: 71856
                            };
var {
    age: "75 to 79";
var male: 43899;
var female: 54848
                            };
var {
    age: "80 to 84";
var male: 29237;
var female: 42044
                            };
var {
    age: "85 and Older";
var male: 22888;
var female: 42715
                            } ];
var OR: [{
    age: "0 to 5";
var male: 118561;
var female: 112841
                            };
var {
    age: "10 to 14";
var male: 123223;
var female: 116373
                            };
var {
    age: "15 to 17";
var male: 75620;
var female: 71764
                            };
var {
    age: "18 to 21";
var male: 106121;
var female: 103044
                            };
var {
    age: "22 to 24";
var male: 79106;
var female: 75639
                            };
var {
    age: "25 to 29";
var male: 134241;
var female: 131539
                            };
var {
    age: "30 to 34";
var male: 137090;
var female: 135734
                            };
var {
    age: "35 to 39";
var male: 128812;
var female: 126071
                            };
var {
    age: "40 to 44";
var male: 131405;
var female: 126875
                            };
var {
    age: "45 to 49";
var male: 125373;
var female: 125074
                            };
var {
    age: "5 to 9";
var male: 122920;
var female: 119049
                            };
var {
    age: "50 to 54";
var male: 131932;
var female: 137021
                            };
var {
    age: "55 to 59";
var male: 130434;
var female: 141380
                            };
var {
    age: "60 to 64";
var male: 129063;
var female: 136051
                            };
var {
    age: "65 to 69";
var male: 99577;
var female: 106208
                            };
var {
    age: "70 to 74";
var male: 69028;
var female: 77428
                            };
var {
    age: "75 to 79";
var male: 46055;
var female: 53682
                            };
var {
    age: "80 to 84";
var male: 30900;
var female: 41853
                            };
var {
    age: "85 and Older";
var male: 28992;
var female: 53154
                            } ];
var PA: [{
    age: "0 to 5";
var male: 367290;
var female: 350371
                            };
var {
    age: "10 to 14";
var male: 393719;
var female: 374666
                            };
var {
    age: "15 to 17";
var male: 250754;
var female: 236670
                            };
var {
    age: "18 to 21";
var male: 378940;
var female: 369819
                            };
var {
    age: "22 to 24";
var male: 251063;
var female: 243391
                            };
var {
    age: "25 to 29";
var male: 420247;
var female: 410193
                            };
var {
    age: "30 to 34";
var male: 391190;
var female: 387225
                            };
var {
    age: "35 to 39";
var male: 365742;
var female: 365646
                            };
var {
    age: "40 to 44";
var male: 399152;
var female: 405848
                            };
var {
    age: "45 to 49";
var male: 435250;
var female: 446328
                            };
var {
    age: "5 to 9";
var male: 381910;
var female: 366854
                            };
var {
    age: "50 to 54";
var male: 472070;
var female: 489057
                            };
var {
    age: "55 to 59";
var male: 456215;
var female: 475044
                            };
var {
    age: "60 to 64";
var male: 390595;
var female: 419924
                            };
var {
    age: "65 to 69";
var male: 301610;
var female: 335127
                            };
var {
    age: "70 to 74";
var male: 212200;
var female: 256188
                            };
var {
    age: "75 to 79";
var male: 156335;
var female: 205974
                            };
var {
    age: "80 to 84";
var male: 117050;
var female: 178358
                            };
var {
    age: "85 and Older";
var male: 104012;
var female: 217532
                            } ];
var RI: [{
    age: "0 to 5";
var male: 28289;
var female: 26941
                            };
var {
    age: "10 to 14";
var male: 31383;
var female: 30724
                            };
var {
    age: "15 to 17";
var male: 20093;
var female: 19249
                            };
var {
    age: "18 to 21";
var male: 35376;
var female: 37870
                            };
var {
    age: "22 to 24";
var male: 23397;
var female: 21358
                            };
var {
    age: "25 to 29";
var male: 35958;
var female: 34710
                            };
var {
    age: "30 to 34";
var male: 32410;
var female: 32567
                            };
var {
    age: "35 to 39";
var male: 30325;
var female: 31145
                            };
var {
    age: "40 to 44";
var male: 32542;
var female: 34087
                            };
var {
    age: "45 to 49";
var male: 36151;
var female: 38462
                            };
var {
    age: "5 to 9";
var male: 30462;
var female: 27878
                            };
var {
    age: "50 to 54";
var male: 38419;
var female: 41642
                            };
var {
    age: "55 to 59";
var male: 36706;
var female: 39127
                            };
var {
    age: "60 to 64";
var male: 30349;
var female: 33752
                            };
var {
    age: "65 to 69";
var male: 23462;
var female: 26311
                            };
var {
    age: "70 to 74";
var male: 16385;
var female: 19335
                            };
var {
    age: "75 to 79";
var male: 10978;
var female: 14833
                            };
var {
    age: "80 to 84";
var male: 9224;
var female: 13439
                            };
var {
    age: "85 and Older";
var male: 8479;
var female: 19843
                            } ];
var SC: [{
    age: "0 to 5";
var male: 148363;
var female: 144218
                            };
var {
    age: "10 to 14";
var male: 153051;
var female: 148064
                            };
var {
    age: "15 to 17";
var male: 92781;
var female: 88090
                            };
var {
    age: "18 to 21";
var male: 150464;
var female: 136857
                            };
var {
    age: "22 to 24";
var male: 99237;
var female: 99178
                            };
var {
    age: "25 to 29";
var male: 156273;
var female: 156982
                            };
var {
    age: "30 to 34";
var male: 148237;
var female: 153197
                            };
var {
    age: "35 to 39";
var male: 139949;
var female: 146281
                            };
var {
    age: "40 to 44";
var male: 151524;
var female: 157192
                            };
var {
    age: "45 to 49";
var male: 153110;
var female: 163562
                            };
var {
    age: "5 to 9";
var male: 156323;
var female: 150943
                            };
var {
    age: "50 to 54";
var male: 161003;
var female: 173752
                            };
var {
    age: "55 to 59";
var male: 150770;
var female: 169238
                            };
var {
    age: "60 to 64";
var male: 141268;
var female: 160890
                            };
var {
    age: "65 to 69";
var male: 120618;
var female: 137154
                            };
var {
    age: "70 to 74";
var male: 85197;
var female: 97581
                            };
var {
    age: "75 to 79";
var male: 55278;
var female: 69067
                            };
var {
    age: "80 to 84";
var male: 33979;
var female: 50585
                            };
var {
    age: "85 and Older";
var male: 24984;
var female: 52336
                            } ];
var SD: [{
    age: "0 to 5";
var male: 30615;
var female: 29377
                            };
var {
    age: "10 to 14";
var male: 28360;
var female: 26492
                            };
var {
    age: "15 to 17";
var male: 17193;
var female: 16250
                            };
var {
    age: "18 to 21";
var male: 25514;
var female: 24234
                            };
var {
    age: "22 to 24";
var male: 18413;
var female: 16324
                            };
var {
    age: "25 to 29";
var male: 29131;
var female: 26757
                            };
var {
    age: "30 to 34";
var male: 28133;
var female: 26710
                            };
var {
    age: "35 to 39";
var male: 24971;
var female: 23347
                            };
var {
    age: "40 to 44";
var male: 24234;
var female: 23231
                            };
var {
    age: "45 to 49";
var male: 25555;
var female: 24867
                            };
var {
    age: "5 to 9";
var male: 30399;
var female: 28980
                            };
var {
    age: "50 to 54";
var male: 29754;
var female: 29530
                            };
var {
    age: "55 to 59";
var male: 29075;
var female: 28968
                            };
var {
    age: "60 to 64";
var male: 25633;
var female: 25530
                            };
var {
    age: "65 to 69";
var male: 19320;
var female: 18489
                            };
var {
    age: "70 to 74";
var male: 12964;
var female: 14702
                            };
var {
    age: "75 to 79";
var male: 9646;
var female: 12077
                            };
var {
    age: "80 to 84";
var male: 7669;
var female: 10566
                            };
var {
    age: "85 and Older";
var male: 6898;
var female: 13282
                            } ];
var TN: [{
    age: "0 to 5";
var male: 204457;
var female: 196347
                            };
var {
    age: "10 to 14";
var male: 217061;
var female: 206350
                            };
var {
    age: "15 to 17";
var male: 129690;
var female: 124122
                            };
var {
    age: "18 to 21";
var male: 183910;
var female: 175377
                            };
var {
    age: "22 to 24";
var male: 132501;
var female: 134905
                            };
var {
    age: "25 to 29";
var male: 210618;
var female: 214944
                            };
var {
    age: "30 to 34";
var male: 209305;
var female: 214151
                            };
var {
    age: "35 to 39";
var male: 200270;
var female: 207520
                            };
var {
    age: "40 to 44";
var male: 216542;
var female: 219178
                            };
var {
    age: "45 to 49";
var male: 217059;
var female: 224473
                            };
var {
    age: "5 to 9";
var male: 210365;
var female: 204494
                            };
var {
    age: "50 to 54";
var male: 223663;
var female: 238025
                            };
var {
    age: "55 to 59";
var male: 210228;
var female: 229974
                            };
var {
    age: "60 to 64";
var male: 186739;
var female: 207022
                            };
var {
    age: "65 to 69";
var male: 153737;
var female: 171357
                            };
var {
    age: "70 to 74";
var male: 108743;
var female: 125362
                            };
var {
    age: "75 to 79";
var male: 72813;
var female: 94077
                            };
var {
    age: "80 to 84";
var male: 46556;
var female: 71212
                            };
var {
    age: "85 and Older";
var male: 33499;
var female: 72969
                            } ];
var TX: [{
    age: "0 to 5";
var male: 996070;
var female: 955235
                            };
var {
    age: "10 to 14";
var male: 998209;
var female: 959762
                            };
var {
    age: "15 to 17";
var male: 587712;
var female: 561008
                            };
var {
    age: "18 to 21";
var male: 818590;
var female: 756451
                            };
var {
    age: "22 to 24";
var male: 582570;
var female: 556850
                            };
var {
    age: "25 to 29";
var male: 982673;
var female: 948564
                            };
var {
    age: "30 to 34";
var male: 961403;
var female: 947710
                            };
var {
    age: "35 to 39";
var male: 897542;
var female: 898907
                            };
var {
    age: "40 to 44";
var male: 897922;
var female: 908091
                            };
var {
    age: "45 to 49";
var male: 857621;
var female: 865642
                            };
var {
    age: "5 to 9";
var male: 1021123;
var female: 979891
                            };
var {
    age: "50 to 54";
var male: 861849;
var female: 880746
                            };
var {
    age: "55 to 59";
var male: 761410;
var female: 799294
                            };
var {
    age: "60 to 64";
var male: 635465;
var female: 692072
                            };
var {
    age: "65 to 69";
var male: 483436;
var female: 533368
                            };
var {
    age: "70 to 74";
var male: 330457;
var female: 389996
                            };
var {
    age: "75 to 79";
var male: 228243;
var female: 289446
                            };
var {
    age: "80 to 84";
var male: 153391;
var female: 219572
                            };
var {
    age: "85 and Older";
var male: 115630;
var female: 224693
                            } ];
var UT: [{
    age: "0 to 5";
var male: 130873;
var female: 124371
                            };
var {
    age: "10 to 14";
var male: 128076;
var female: 120364
                            };
var {
    age: "15 to 17";
var male: 70832;
var female: 66798
                            };
var {
    age: "18 to 21";
var male: 87877;
var female: 92950
                            };
var {
    age: "22 to 24";
var male: 79431;
var female: 71405
                            };
var {
    age: "25 to 29";
var male: 109125;
var female: 106576
                            };
var {
    age: "30 to 34";
var male: 115198;
var female: 110546
                            };
var {
    age: "35 to 39";
var male: 102771;
var female: 99664
                            };
var {
    age: "40 to 44";
var male: 88181;
var female: 83229
                            };
var {
    age: "45 to 49";
var male: 76552;
var female: 74993
                            };
var {
    age: "5 to 9";
var male: 131094;
var female: 125110
                            };
var {
    age: "50 to 54";
var male: 76913;
var female: 78113
                            };
var {
    age: "55 to 59";
var male: 71490;
var female: 73221
                            };
var {
    age: "60 to 64";
var male: 60996;
var female: 63835
                            };
var {
    age: "65 to 69";
var male: 45491;
var female: 49273
                            };
var {
    age: "70 to 74";
var male: 32191;
var female: 35931
                            };
var {
    age: "75 to 79";
var male: 23112;
var female: 27761
                            };
var {
    age: "80 to 84";
var male: 15827;
var female: 20155
                            };
var {
    age: "85 and Older";
var male: 13199;
var female: 19855
                            } ];
var VA: [{
    age: "0 to 5";
var male: 262278;
var female: 25e4
                            };
var {
    age: "10 to 14";
var male: 266247;
var female: 251516
                            };
var {
    age: "15 to 17";
var male: 160174;
var female: 153149
                            };
var {
    age: "18 to 21";
var male: 248284;
var female: 233796
                            };
var {
    age: "22 to 24";
var male: 175833;
var female: 167676
                            };
var {
    age: "25 to 29";
var male: 296682;
var female: 287052
                            };
var {
    age: "30 to 34";
var male: 286536;
var female: 283804
                            };
var {
    age: "35 to 39";
var male: 264490;
var female: 265951
                            };
var {
    age: "40 to 44";
var male: 278474;
var female: 286095
                            };
var {
    age: "45 to 49";
var male: 286793;
var female: 297558
                            };
var {
    age: "5 to 9";
var male: 264413;
var female: 256891
                            };
var {
    age: "50 to 54";
var male: 296096;
var female: 309898
                            };
var {
    age: "55 to 59";
var male: 262954;
var female: 283219
                            };
var {
    age: "60 to 64";
var male: 228721;
var female: 250389
                            };
var {
    age: "65 to 69";
var male: 178498;
var female: 197033
                            };
var {
    age: "70 to 74";
var male: 123597;
var female: 146376
                            };
var {
    age: "75 to 79";
var male: 82281;
var female: 103044
                            };
var {
    age: "80 to 84";
var male: 55037;
var female: 80081
                            };
var {
    age: "85 and Older";
var male: 43560;
var female: 92154
                            } ];
var VT: [{
    age: "0 to 5";
var male: 15766;
var female: 14629
                            };
var {
    age: "10 to 14";
var male: 18674;
var female: 17317
                            };
var {
    age: "15 to 17";
var male: 11909;
var female: 11565
                            };
var {
    age: "18 to 21";
var male: 21686;
var female: 20502
                            };
var {
    age: "22 to 24";
var male: 12648;
var female: 11840
                            };
var {
    age: "25 to 29";
var male: 18005;
var female: 17548
                            };
var {
    age: "30 to 34";
var male: 17565;
var female: 18161
                            };
var {
    age: "35 to 39";
var male: 16856;
var female: 17454
                            };
var {
    age: "40 to 44";
var male: 19431;
var female: 19600
                            };
var {
    age: "45 to 49";
var male: 21315;
var female: 22377
                            };
var {
    age: "5 to 9";
var male: 17073;
var female: 16338
                            };
var {
    age: "50 to 54";
var male: 24629;
var female: 26080
                            };
var {
    age: "55 to 59";
var male: 24925;
var female: 25588
                            };
var {
    age: "60 to 64";
var male: 21769;
var female: 23081
                            };
var {
    age: "65 to 69";
var male: 16842;
var female: 17925
                            };
var {
    age: "70 to 74";
var male: 11855;
var female: 12331
                            };
var {
    age: "75 to 79";
var male: 7639;
var female: 9192
                            };
var {
    age: "80 to 84";
var male: 5291;
var female: 8001
                            };
var {
    age: "85 and Older";
var male: 4695;
var female: 8502
                            } ];
var WA: [{
    age: "0 to 5";
var male: 228403;
var female: 217400
                            };
var {
    age: "10 to 14";
var male: 224142;
var female: 217269
                            };
var {
    age: "15 to 17";
var male: 136967;
var female: 130193
                            };
var {
    age: "18 to 21";
var male: 195001;
var female: 179996
                            };
var {
    age: "22 to 24";
var male: 151577;
var female: 140876
                            };
var {
    age: "25 to 29";
var male: 260873;
var female: 244497
                            };
var {
    age: "30 to 34";
var male: 252612;
var female: 243147
                            };
var {
    age: "35 to 39";
var male: 230325;
var female: 223596
                            };
var {
    age: "40 to 44";
var male: 234066;
var female: 228073
                            };
var {
    age: "45 to 49";
var male: 233107;
var female: 230232
                            };
var {
    age: "5 to 9";
var male: 227824;
var female: 214378
                            };
var {
    age: "50 to 54";
var male: 245685;
var female: 247691
                            };
var {
    age: "55 to 59";
var male: 231612;
var female: 241813
                            };
var {
    age: "60 to 64";
var male: 206233;
var female: 219560
                            };
var {
    age: "65 to 69";
var male: 158697;
var female: 170678
                            };
var {
    age: "70 to 74";
var male: 107931;
var female: 118093
                            };
var {
    age: "75 to 79";
var male: 70497;
var female: 83476
                            };
var {
    age: "80 to 84";
var male: 48802;
var female: 66167
                            };
var {
    age: "85 and Older";
var male: 43371;
var female: 80604
                            } ];
var WI: [{
    age: "0 to 5";
var male: 176217;
var female: 168178
                            };
var {
    age: "10 to 14";
var male: 191911;
var female: 180587
                            };
var {
    age: "15 to 17";
var male: 115730;
var female: 110660
                            };
var {
    age: "18 to 21";
var male: 167063;
var female: 161358
                            };
var {
    age: "22 to 24";
var male: 117861;
var female: 113393
                            };
var {
    age: "25 to 29";
var male: 183464;
var female: 176718
                            };
var {
    age: "30 to 34";
var male: 187494;
var female: 181605
                            };
var {
    age: "35 to 39";
var male: 172689;
var female: 168116
                            };
var {
    age: "40 to 44";
var male: 179862;
var female: 176322
                            };
var {
    age: "45 to 49";
var male: 198114;
var female: 197462
                            };
var {
    age: "5 to 9";
var male: 186006;
var female: 180034
                            };
var {
    age: "50 to 54";
var male: 217886;
var female: 219813
                            };
var {
    age: "55 to 59";
var male: 204370;
var female: 206108
                            };
var {
    age: "60 to 64";
var male: 176161;
var female: 178738
                            };
var {
    age: "65 to 69";
var male: 130349;
var female: 136552
                            };
var {
    age: "70 to 74";
var male: 90955;
var female: 103217
                            };
var {
    age: "75 to 79";
var male: 65738;
var female: 81341
                            };
var {
    age: "80 to 84";
var male: 48337;
var female: 67614
                            };
var {
    age: "85 and Older";
var male: 41178;
var female: 82916
                            } ];
var WV: [{
    age: "0 to 5";
var male: 52472;
var female: 50287
                            };
var {
    age: "10 to 14";
var male: 55269;
var female: 52689
                            };
var {
    age: "15 to 17";
var male: 34100;
var female: 32359
                            };
var {
    age: "18 to 21";
var male: 51801;
var female: 48967
                            };
var {
    age: "22 to 24";
var male: 35920;
var female: 34241
                            };
var {
    age: "25 to 29";
var male: 54564;
var female: 52255
                            };
var {
    age: "30 to 34";
var male: 56430;
var female: 55121
                            };
var {
    age: "35 to 39";
var male: 55764;
var female: 55399
                            };
var {
    age: "40 to 44";
var male: 60662;
var female: 59373
                            };
var {
    age: "45 to 49";
var male: 61771;
var female: 61257
                            };
var {
    age: "5 to 9";
var male: 53707;
var female: 51490
                            };
var {
    age: "50 to 54";
var male: 66156;
var female: 68671
                            };
var {
    age: "55 to 59";
var male: 66936;
var female: 71680
                            };
var {
    age: "60 to 64";
var male: 65717;
var female: 67056
                            };
var {
    age: "65 to 69";
var male: 51285;
var female: 54807
                            };
var {
    age: "70 to 74";
var male: 36504;
var female: 39946
                            };
var {
    age: "75 to 79";
var male: 25738;
var female: 31619
                            };
var {
    age: "80 to 84";
var male: 16397;
var female: 24351
                            };
var {
    age: "85 and Older";
var male: 12438;
var female: 26221
                            } ];
var WY: [{
    age: "0 to 5";
var male: 19649;
var female: 18996
                            };
var {
    age: "10 to 14";
var male: 20703;
var female: 17785
                            };
var {
    age: "15 to 17";
var male: 11500;
var female: 10383
                            };
var {
    age: "18 to 21";
var male: 18008;
var female: 15534
                            };
var {
    age: "22 to 24";
var male: 12727;
var female: 11405
                            };
var {
    age: "25 to 29";
var male: 21459;
var female: 19350
                            };
var {
    age: "30 to 34";
var male: 21008;
var female: 19465
                            };
var {
    age: "35 to 39";
var male: 18573;
var female: 17022
                            };
var {
    age: "40 to 44";
var male: 17553;
var female: 16402
                            };
var {
    age: "45 to 49";
var male: 17580;
var female: 16702
                            };
var {
    age: "5 to 9";
var male: 19198;
var female: 19519
                            };
var {
    age: "50 to 54";
var male: 20337;
var female: 20958
                            };
var {
    age: "55 to 59";
var male: 21523;
var female: 21e3
                            };
var {
    age: "60 to 64";
var male: 19048;
var female: 18292
                            };
var {
    age: "65 to 69";
var male: 13999;
var female: 13130
                            };
var {
    age: "70 to 74";
var male: 8710;
var female: 9880
                            };
var {
    age: "75 to 79";
var male: 6149;
var female: 6938
                            };
var {
    age: "80 to 84";
var male: 4442;
var female: 5560
                            };
var {
    age: "85 and Older";
var male: 3395;
var female: 5797
                            } ]
                        };
function r(e) {
    for (var t = 0;
var a = 0;
    var l = 0; l < e.length; l++) t += (r = e[l]).male, a += r.female;
    for (l = 0; l < e.length; l++) {
        var r;
        (r = e[l]).malePercent = -1 * Math.round(r.male / t * 1e4) / 100, r.femalePercent = Math.round(r.female / a * 1e4) / 100;
    }
    return e;
}
a = r(a), (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
var o = t.container.children.push(am5.Container.new(t;
var {
    layout: t.horizontalLayout;
var width: am5.p100;
var height: am5.p100
                        }));
t.numberFormatter.setAll({
    numberFormat: "#.##as"
});
var i = o.children.push(am5xy.XYChart.new(t;
var {
    panX: !1;
var panY: !1;
var wheelX: "none";
var wheelY: "none";
var layout: t.verticalLayout;
var width: am5.percent(60)
                        }));
var s = i.yAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "age";
var renderer: am5xy.AxisRendererY.new(t;
var { })
                        }));
s.get("renderer").labels.template.setAll({
    paddingTop: 0,
    fontWeight: "400",
    fontSize: 11,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), s.get("renderer").grid.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeDasharray: [3]
}), s.data.setAll(a);
var n = i.yAxes.push(am5xy.CategoryAxis.new(t;
var {
    categoryField: "age";
var renderer: am5xy.AxisRendererY.new(t;
var {
    opposite: !0
                            })
                        }));
n.get("renderer").grid.template.setAll({
    stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeDasharray: [3]
}), n.get("renderer").labels.template.setAll({
    paddingTop: 0,
    fontWeight: "400",
    fontSize: 11,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), n.data.setAll(a);
var d = i.xAxes.push(am5xy.ValueAxis.new(t;
var {
    min: -10;
var max: 10;
var numberFormat: "#.s'%'";
var renderer: am5xy.AxisRendererX.new(t;
var {
    minGridDistance: 40
                            })
                        }));
d.get("renderer").labels.template.setAll({
    paddingTop: 20,
    fontWeight: "400",
    fontSize: 11,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), d.get("renderer").grid.template.setAll({
    disabled: !0,
    strokeOpacity: 0
});
var m = i.series.push(am5xy.ColumnSeries.new(t;
var {
    name: "Males";
var xAxis: d;
var yAxis: s;
var valueXField: "malePercent";
var categoryYField: "age";
var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"));
var clustered: !1
                        }));
m.columns.template.setAll({
    tooltipText: "Males, age {categoryY}: {male} ({malePercent.formatNumber('#.0s')}%)",
    tooltipX: am5.p100,
    cornerRadiusBR: 4,
    cornerRadiusTR: 4,
    cornerRadiusBL: 0,
    cornerRadiusTL: 0
}), m.data.setAll(a);
var c = i.series.push(am5xy.ColumnSeries.new(t;
var {
    name: "Males";
var xAxis: d;
var yAxis: s;
var valueXField: "femalePercent";
var categoryYField: "age";
var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"));
var clustered: !1
                        }));
c.columns.template.setAll({
    tooltipText: "Males, age {categoryY}: {female} ({femalePercent.formatNumber('#.0s')}%)",
    tooltipX: am5.p100,
    cornerRadiusBR: 4,
    cornerRadiusTR: 4,
    cornerRadiusBL: 0,
    cornerRadiusTL: 0
}), c.data.setAll(a), i.plotContainer.children.push(am5.Label.new(t, {
    text: "Males",
    fontSize: 13,
    fontWeight: "500",
    y: 5,
    x: 5,
    fill: m.get("fill")
})), i.plotContainer.children.push(am5.Label.new(t, {
    text: "Females",
    fontSize: 13,
    fontWeight: "500",
    y: 5,
    x: am5.p100,
    centerX: am5.p100,
    dx: -5,
    fill: c.get("fill")
}));
var g = o.children.push(am5map.MapChart.new(t;
var {
    panX: "none";
var panY: "none";
var wheelY: "none";
var projection: am5map.geoAlbersUsa();
var width: am5.percent(40)
                        }));
i.getTooltip().set("autoTextColor", !1);
var f;
var u = g.children.push(am5.Label.new(t;
var {
    text: "United States";
var fontSize: 14;
var fontWeight: "500";
var fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800"));
var y: 20;
var x: am5.p50;
var centerX: am5.p50
                        }));
var h = g.series.push(am5map.MapPolygonSeries.new(t;
var {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-300"));
var geoJSON: am5geodata_usaLow
                        }));
h.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: !0
}), h.mapPolygons.template.states.create("hover", {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
}), h.mapPolygons.template.states.create("active", {
    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
}), h.mapPolygons.template.events.on("click", (function (e) {
    f && f.set("active", !1), (f = e.target).set("active", !0);
    for (var t = e.target.dataItem.dataContext.id.split("-").pop();
var a = r(l[t]);
    var o = 0; o < a.length; o++) m.data.setIndex(o, a[o]),
    c.data.setIndex(o, a[o]);
u.set("text", e.target.dataItem.dataContext.name);
                        }));
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget24), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget24.init();
}));

var KTChartsWidget25 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_25_chart_1");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5radar.RadarChart.new(t;
                        var {
                            panX: !1;
                        var panY: !1;
                        var wheelX: "panX";
                        var wheelY: "zoomX";
                        var innerRadius: am5.percent(40);
                        var radius: am5.percent(70);
                        var arrangeTooltips: !1
                    }));
                    a.set("cursor", am5radar.RadarCursor.new(t, {
                        behavior: "zoomX"
                    })).lineY.set("visible", !1);
                    var l = am5radar.AxisRendererCircular.new(t;
                    var {
                        minGridDistance: 30
                        });
                    l.labels.template.setAll({
                        textType: "radial",
                        radius: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        centerY: am5.p50,
                        fontWeight: "400",
                        fontSize: 11,
                        fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
                    }), l.grid.template.setAll({
                        location: .5,
                        strokeDasharray: [2, 2],
                        stroke: KTUtil.getCssVariableValue("--bs-gray-400")
                    });
                    var r = a.xAxes.push(am5xy.CategoryAxis.new(t;
                    var {
                        maxDeviation: 0;
                    var categoryField: "name";
                    var renderer: l
                }));
                var o = am5radar.AxisRendererRadial.new(t;
                var {
                    minGridDistance: 30
                        });
                o.labels.template.setAll({
                    fontWeight: "500",
                    fontSize: 12,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
                });
                var i = a.yAxes.push(am5xy.ValueAxis.new(t;
                var {
                    renderer: o
                }));
                o.grid.template.setAll({
                    strokeDasharray: [2, 2],
                    stroke: KTUtil.getCssVariableValue("--bs-gray-400")
                });
                var s = a.series.push(am5radar.RadarLineSeries.new(t;
                var {
                    name: "Revenue";
                var xAxis: r;
                var yAxis: i;
                var valueYField: "value1";
                var categoryXField: "name";
                var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
            }));
            s.strokes.template.setAll({
                strokeOpacity: 0
            }), s.fills.template.setAll({
                visible: !0,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                fillOpacity: .5
            });
            var n = a.series.push(am5radar.RadarLineSeries.new(t;
            var {
                name: "Expense";
            var xAxis: r;
            var yAxis: i;
            var valueYField: "value2";
            var categoryXField: "name";
            var stacked: !0;
            var tooltip: am5.Tooltip.new(t;
            var {
                labelText: "Revenue: {value1}\nExpense:{value2}"
                            });
            var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
        }));
        n.strokes.template.setAll({
            strokeOpacity: 0
        }), n.fills.template.setAll({
            visible: !0,
            fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
            fillOpacity: .5
        });
        var d = a.radarContainer.children.push(am5.Legend.new(t;
        var {
            width: 150;
        var centerX: am5.p50;
        var centerY: am5.p50
    }));
d.data.setAll([s, n]), d.labels.template.setAll({
    fontWeight: "600",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
});
var m = [{
    name: "Openlane";
    var value1: 160.2;
    var value2: 26.9
                        };
var {
    name: "Yearin";
var value1: 120.1;
var value2: 50.5
                        };
var {
    name: "Goodsilron";
var value1: 150.7;
var value2: 12.3
                        };
var {
    name: "Condax";
var value1: 69.4;
var value2: 74.5
                        };
var {
    name: "Opentech";
var value1: 78.5;
var value2: 29.7
                        };
var {
    name: "Golddex";
var value1: 77.6;
var value2: 102.2
                        };
var {
    name: "Isdom";
var value1: 69.8;
var value2: 22.6
                        };
var {
    name: "Plusstrip";
var value1: 63.6;
var value2: 45.3
                        };
var {
    name: "Kinnamplus";
var value1: 59.7;
var value2: 12.8
                        };
var {
    name: "Zumgoity";
var value1: 64.3;
var value2: 19.6
                        };
var {
    name: "Stanredtax";
var value1: 52.9;
var value2: 96.3
                        };
var {
    name: "Conecom";
var value1: 42.9;
var value2: 11.9
                        };
var {
    name: "Zencorporation";
var value1: 40.9;
var value2: 16.8
                        };
var {
    name: "Iselectrics";
var value1: 39.2;
var value2: 9.9
                        };
var {
    name: "Treequote";
var value1: 76.6;
var value2: 36.9
                        };
var {
    name: "Sumace";
var value1: 34.8;
var value2: 14.6
                        };
var {
    name: "Lexiqvolax";
var value1: 32.1;
var value2: 35.6
                        };
var {
    name: "Sunnamplex";
var value1: 31.8;
var value2: 5.9
                        };
var {
    name: "Faxquote";
var value1: 29.3;
var value2: 14.7
                        };
var {
    name: "Donware";
var value1: 23;
var value2: 2.8
                        };
var {
    name: "Warephase";
var value1: 21.5;
var value2: 12.1
                        };
var {
    name: "Donquadtech";
var value1: 19.7;
var value2: 10.8
                        };
var {
    name: "Nam-zim";
var value1: 15.5;
var value2: 4.1
                        };
var {
    name: "Y-corporation";
var value1: 14.2;
var value2: 11.3
                        } ];
s.data.setAll(m), n.data.setAll(m), r.data.setAll(m), s.appear(1e3), n.appear(1e3),
    a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }(), function () {
    if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_25_chart_2");
        if (e) {
            var t;
            var a = function () {
                (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                var a = t.container.children.push(am5radar.RadarChart.new(t;
                var {
                    panX: !1;
                var panY: !1;
                var wheelX: "panX";
                var wheelY: "zoomX";
                var innerRadius: am5.percent(40);
                var radius: am5.percent(70);
                var arrangeTooltips: !1
            }));
            a.set("cursor", am5radar.RadarCursor.new(t, {
                behavior: "zoomX"
            })).lineY.set("visible", !1);
            var l = am5radar.AxisRendererCircular.new(t;
            var {
                minGridDistance: 30
                        });
            l.labels.template.setAll({
                textType: "radial",
                radius: 10,
                paddingTop: 0,
                paddingBottom: 0,
                centerY: am5.p50,
                fontWeight: "400",
                fontSize: 11,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
            }), l.grid.template.setAll({
                location: .5,
                strokeDasharray: [2, 2],
                stroke: KTUtil.getCssVariableValue("--bs-gray-400")
            });
            var r = a.xAxes.push(am5xy.CategoryAxis.new(t;
            var {
                maxDeviation: 0;
            var categoryField: "name";
            var renderer: l
        }));
        var o = am5radar.AxisRendererRadial.new(t;
        var {
            minGridDistance: 30
                        });
        var i = a.yAxes.push(am5xy.ValueAxis.new(t;
        var {
            renderer: o
        }));
        o.grid.template.setAll({
            strokeDasharray: [2, 2],
            stroke: KTUtil.getCssVariableValue("--bs-gray-400")
        }), o.labels.template.setAll({
            fontWeight: "500",
            fontSize: 12,
            fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
        });
        var s = a.series.push(am5radar.RadarLineSeries.new(t;
        var {
            name: "Revenue";
        var xAxis: r;
        var yAxis: i;
        var valueYField: "value1";
        var categoryXField: "name";
        var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
    }));
    s.strokes.template.setAll({
        strokeOpacity: 0
    }), s.fills.template.setAll({
        visible: !0,
        fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
        fillOpacity: .5
    });
    var n = a.series.push(am5radar.RadarLineSeries.new(t;
    var {
        name: "Expense";
    var xAxis: r;
    var yAxis: i;
    var valueYField: "value2";
    var categoryXField: "name";
    var stacked: !0;
    var tooltip: am5.Tooltip.new(t;
    var {
        labelText: "Revenue: {value1}\nExpense:{value2}"
                            });
    var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
}));
n.strokes.template.setAll({
    strokeOpacity: 0
}), n.fills.template.setAll({
    visible: !0,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
    fillOpacity: .5
});
var d = a.radarContainer.children.push(am5.Legend.new(t;
var {
    width: 150;
var centerX: am5.p50;
var centerY: am5.p50
                        }));
d.data.setAll([s, n]), d.labels.template.setAll({
    fontWeight: "600",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
});
var m = [{
    name: "Openlane";
    var value1: 160.2;
    var value2: 66.9
                        };
var {
    name: "Yearin";
var value1: 150.1;
var value2: 50.5
                        };
var {
    name: "Goodsilron";
var value1: 120.7;
var value2: 32.3
                        };
var {
    name: "Condax";
var value1: 89.4;
var value2: 74.5
                        };
var {
    name: "Opentech";
var value1: 78.5;
var value2: 29.7
                        };
var {
    name: "Golddex";
var value1: 77.6;
var value2: 102.2
                        };
var {
    name: "Isdom";
var value1: 69.8;
var value2: 22.6
                        };
var {
    name: "Plusstrip";
var value1: 63.6;
var value2: 45.3
                        };
var {
    name: "Kinnamplus";
var value1: 59.7;
var value2: 12.8
                        };
var {
    name: "Zumgoity";
var value1: 54.3;
var value2: 19.6
                        };
var {
    name: "Stanredtax";
var value1: 52.9;
var value2: 96.3
                        };
var {
    name: "Conecom";
var value1: 42.9;
var value2: 11.9
                        };
var {
    name: "Zencorporation";
var value1: 40.9;
var value2: 16.8
                        };
var {
    name: "Iselectrics";
var value1: 39.2;
var value2: 9.9
                        };
var {
    name: "Treequote";
var value1: 36.6;
var value2: 36.9
                        };
var {
    name: "Sumace";
var value1: 34.8;
var value2: 14.6
                        };
var {
    name: "Lexiqvolax";
var value1: 32.1;
var value2: 35.6
                        };
var {
    name: "Sunnamplex";
var value1: 31.8;
var value2: 5.9
                        };
var {
    name: "Faxquote";
var value1: 29.3;
var value2: 14.7
                        };
var {
    name: "Donware";
var value1: 23;
var value2: 2.8
                        };
var {
    name: "Warephase";
var value1: 21.5;
var value2: 12.1
                        };
var {
    name: "Donquadtech";
var value1: 19.7;
var value2: 10.8
                        };
var {
    name: "Nam-zim";
var value1: 15.5;
var value2: 4.1
                        };
var {
    name: "Y-corporation";
var value1: 14.2;
var value2: 11.3
                        } ];
s.data.setAll(m), n.data.setAll(m), r.data.setAll(m), s.appear(1e3), n.appear(1e3),
    a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget25), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget25.init();
}));

var KTChartsWidget26 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_26");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-primary");
        var i = KTUtil.getCssVariableValue("--bs-primary");
        var s = {
            series: [{
                name: t.getAttribute("data-kt-chart-info");
                var data: [34.5;
                var 34.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35;
                var 35;
                var 34.5;
                var 34.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .4;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o]
                };
var xaxis: {
    categories: ["";
var "Apr 02";
var "Apr 03";
var "Apr 04";
var "Apr 05";
var "Apr 06";
var "Apr 07";
var "Apr 08";
var "Apr 09";
var "Apr 10";
var "Apr 11";
var "Apr 12";
var "Apr 13";
var "Apr 14";
var "Apr 17";
var "Apr 18";
var "Apr 19";
var "Apr 21";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    max: 36.3;
var min: 33;
var tickAmount: 6;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        };
var formatter: function(e) {
    return "$" + parseInt(10 * e);
                        }
                    }
                },
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return "$" + parseInt(10 * e);
        }
    }
},
colors: [i],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: o,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(t, s), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget26), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget26.init();
}));

var KTChartsWidget27 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_27");
    if (t) {
        var a = KTUtil.getCssVariableValue("--bs-gray-800");
        var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var r = {
            series: [{
                name: "Sessions";
                var data: [12.478;
                var 7.546;
                var 6.083;
                var 5.041;
                var 4.42 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "bar";
        var height: 350;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {
        bar: {
            borderRadius: 8;
var horizontal: !0;
    var distributed: !0;
    var barHeight: 50;
    var dataLabels: {
        position: "bottom"
    }
}
                };
var dataLabels: {
    enabled: !0;
var textAnchor: "start";
var offsetX: 0;
var formatter: function(e;
var t) {
    e *= 1e3;
return wNumb({
    thousand: ","
}).to(e);
                    },
style: {
    fontSize: "14px",
        fontWeight: "600",
            align: "left"
}
                },
legend: {
    show: !1
},
colors: ["#3E97FF", "#F1416C", "#50CD89", "#FFC700", "#7239EA"],
    xaxis: {
    categories: ["USA", "India", "Canada", "Brasil", "France"],
        labels: {
        formatter: function(e) {
            return e + "K";
        },
        style: {
            colors: a,
                fontSize: "14px",
                    fontWeight: "600",
                        align: "left"
        }
    },
    axisBorder: {
        show: !1
    }
},
yaxis: {
    labels: {
        formatter: function(e, t) {
            return Number.isInteger(e) ? e + " - " + parseInt(100 * e / 18).toString() + "%" : e;
        },
        style: {
            colors: a,
                fontSize: "14px",
                    fontWeight: "600"
        },
        offsetY: 2,
            align: "left"
    }
},
grid: {
    borderColor: l,
        xaxis: {
        lines: {
            show: !0
        }
    },
    yaxis: {
        lines: {
            show: !1
        }
    },
    strokeDashArray: 4
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return e;
        }
    }
}
            };
e.self = new ApexCharts(t, r), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget27), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget27.init();
}));

var KTChartsWidget28 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_28");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-info");
        var i = {
            series: [{
                name: "Links";
                var data: [190;
                var 230;
                var 230;
                var 200;
                var 200;
                var 190;
                var 190;
                var 200;
                var 200;
                var 220;
                var 220;
                var 200;
                var 200;
                var 210;
                var 210 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .4;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o]
                };
var xaxis: {
    categories: ["May 04";
var "May 05";
var "May 06";
var "May 09";
var "May 10";
var "May 12";
var "May 14";
var "May 17";
var "May 18";
var "May 20";
var "May 22";
var "May 24";
var "May 26";
var "May 28";
var "May 30" ];
var axisBorder: {
    show: !1
};
var offsetX: 20;
var axisTicks: {
    show: !1
};
var tickAmount: 3;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 250;
var min: 100;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        };
var formatter: function(e) {
    return e;
                        }
                    }
                },
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return e;
        }
    }
},
colors: [o],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: o,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(t, i), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget28), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget28.init();
}));

var KTChartsWidget29 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_29");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-warning");
        var i = {
            series: [{
                name: "Position";
                var data: [4;
                var 7.5;
                var 7.5;
                var 6;
                var 6;
                var 4;
                var 4;
                var 6;
                var 6;
                var 8;
                var 8;
                var 6;
                var 6;
                var 7;
                var 7 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .4;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o]
                };
var xaxis: {
    categories: ["Apr 02";
var "Apr 03";
var "Apr 04";
var "Apr 05";
var "Apr 06";
var "Apr 09";
var "Apr 10";
var "Apr 12";
var "Apr 14";
var "Apr 17";
var "Apr 18";
var "Apr 18";
var "Apr 20";
var "Apr 22";
var "Apr 24" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var offsetX: 20;
var tickAmount: 4;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 10;
var min: 1;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        };
var formatter: function(e) {
    return e;
                        }
                    }
                },
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return e;
        }
    }
},
colors: [o],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: o,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(t, i), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget29), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget29.init();
}));

var KTChartsWidget3 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_3");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-success");
        var i = {
            series: [{
                name: "Sales";
                var data: [18;
                var 18;
                var 20;
                var 20;
                var 18;
                var 18;
                var 22;
                var 22;
                var 20;
                var 20;
                var 18;
                var 18;
                var 20;
                var 20;
                var 18;
                var 18;
                var 20;
                var 20;
                var 22 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .4;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o]
                };
var xaxis: {
    categories: ["";
var "Apr 02";
var "Apr 03";
var "Apr 04";
var "Apr 05";
var "Apr 06";
var "Apr 07";
var "Apr 08";
var "Apr 09";
var "Apr 10";
var "Apr 11";
var "Apr 12";
var "Apr 13";
var "Apr 14";
var "Apr 15";
var "Apr 16";
var "Apr 17";
var "Apr 18";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 24;
var min: 10;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        };
var formatter: function(e) {
    return "$" + e + "K";
                        }
                    }
                },
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return "$" + e + "K";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-success")],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: o,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(t, i), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget3), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget3.init();
}));

var KTChartsWidget30 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_30_chart");
                if (e) {
                    var t;
                    var a = function () {
                        (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                        var a = t.container.children.push(am5percent.PieChart.new(t;
                        var {
                            startAngle: 180;
                        var endAngle: 360;
                        var layout: t.verticalLayout;
                        var innerRadius: am5.percent(50)
                    })).series.push(am5percent.PieSeries.new(t;
        var {
            startAngle: 180;
        var endAngle: 360;
        var valueField: "value";
        var categoryField: "category";
        var alignLabels: !1
    }));
a.labels.template.setAll({
    fontWeight: "400",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
}), a.states.create("hidden", {
    startAngle: 180,
    endAngle: 180
}), a.slices.template.setAll({
    cornerRadius: 5
}), a.ticks.template.setAll({
    forceHidden: !0
}), a.data.setAll([{
    value: 10,
    category: "One",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
}, {
    value: 9,
    category: "Two",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
}, {
    value: 6,
    category: "Three",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
}, {
    value: 5,
    category: "Four",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-warning"))
}, {
    value: 4,
    category: "Five",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
}, {
    value: 3,
    category: "Six",
    fill: am5.color(KTUtil.getCssVariableValue("--bs-secondary"))
}]), a.appear(1e3, 100);
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget30), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget30.init();
}));

var KTChartsWidget31 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.getElementById("kt_charts_widget_31_chart");
                if (e) {
                    var t;
                    var a;
                    var l = function () {
                        (a = am5.Root.new(e)).setThemes([am5themes_Animated.new(a)]);
                        var (t = a.container.children.push(am5radar.RadarChart.new(a;
                        var {
                            panX: !1;
                        var panY: !1;
                        var wheelX: "panX";
                        var wheelY: "zoomX";
                        var innerRadius: am5.percent(40);
                        var radius: am5.percent(70);
                        var arrangeTooltips: !1
                    }))).set("cursor";
        var am5radar.RadarCursor.new(a;
    var {
        behavior: "zoomX"
    })).lineY.set("visible";
    var !1);
var l = am5radar.AxisRendererCircular.new(a;
var {
    minGridDistance: 30
                        });
l.labels.template.setAll({
    textType: "radial",
    radius: 10,
    paddingTop: 0,
    paddingBottom: 0,
    centerY: am5.p50,
    fontWeight: "400",
    fontSize: 11,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800"))
}), l.grid.template.setAll({
    location: .5,
    strokeDasharray: [2, 2],
    stroke: KTUtil.getCssVariableValue("--bs-gray-400")
});
var r = t.xAxes.push(am5xy.CategoryAxis.new(a;
var {
    maxDeviation: 0;
var categoryField: "name";
var renderer: l
                        }));
var o = am5radar.AxisRendererRadial.new(a;
var {
    minGridDistance: 30
                        });
o.labels.template.setAll({
    fontWeight: "500",
    fontSize: 12,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
});
var i = t.yAxes.push(am5xy.ValueAxis.new(a;
var {
    renderer: o
}));
o.grid.template.setAll({
    strokeDasharray: [2, 2],
    stroke: KTUtil.getCssVariableValue("--bs-gray-400")
});
var s = t.series.push(am5radar.RadarLineSeries.new(a;
var {
    name: "Revenue";
var xAxis: r;
var yAxis: i;
var valueYField: "value1";
var categoryXField: "name";
var fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
                        }));
s.strokes.template.setAll({
    strokeOpacity: 0
}), s.fills.template.setAll({
    visible: !0,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
    fillOpacity: .5
});
var n = t.series.push(am5radar.RadarLineSeries.new(a;
var {
    name: "Expense";
var xAxis: r;
var yAxis: i;
var valueYField: "value2";
var categoryXField: "name";
var stacked: !0;
var tooltip: am5.Tooltip.new(a;
var {
    labelText: "Revenue: {value1}\nExpense:{value2}"
                            });
var fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
                        }));
n.strokes.template.setAll({
    strokeOpacity: 0
}), n.fills.template.setAll({
    visible: !0,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
    fillOpacity: .5
});
var d = t.radarContainer.children.push(am5.Legend.new(a;
var {
    width: 150;
var centerX: am5.p50;
var centerY: am5.p50
                        }));
d.data.setAll([s, n]), d.labels.template.setAll({
    fontWeight: "600",
    fontSize: 13,
    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
});
var m = [{
    name: "Openlane";
    var value1: 160.2;
    var value2: 26.9
                        };
var {
    name: "Yearin";
var value1: 120.1;
var value2: 50.5
                        };
var {
    name: "Goodsilron";
var value1: 150.7;
var value2: 12.3
                        };
var {
    name: "Condax";
var value1: 69.4;
var value2: 74.5
                        };
var {
    name: "Opentech";
var value1: 78.5;
var value2: 29.7
                        };
var {
    name: "Golddex";
var value1: 77.6;
var value2: 102.2
                        };
var {
    name: "Isdom";
var value1: 69.8;
var value2: 22.6
                        };
var {
    name: "Plusstrip";
var value1: 63.6;
var value2: 45.3
                        };
var {
    name: "Kinnamplus";
var value1: 59.7;
var value2: 12.8
                        };
var {
    name: "Zumgoity";
var value1: 64.3;
var value2: 19.6
                        };
var {
    name: "Stanredtax";
var value1: 52.9;
var value2: 96.3
                        };
var {
    name: "Conecom";
var value1: 42.9;
var value2: 11.9
                        };
var {
    name: "Zencorporation";
var value1: 40.9;
var value2: 16.8
                        };
var {
    name: "Iselectrics";
var value1: 39.2;
var value2: 9.9
                        };
var {
    name: "Treequote";
var value1: 76.6;
var value2: 36.9
                        };
var {
    name: "Sumace";
var value1: 34.8;
var value2: 14.6
                        };
var {
    name: "Lexiqvolax";
var value1: 32.1;
var value2: 35.6
                        };
var {
    name: "Sunnamplex";
var value1: 31.8;
var value2: 5.9
                        };
var {
    name: "Faxquote";
var value1: 29.3;
var value2: 14.7
                        };
var {
    name: "Donware";
var value1: 23;
var value2: 2.8
                        };
var {
    name: "Warephase";
var value1: 21.5;
var value2: 12.1
                        };
var {
    name: "Donquadtech";
var value1: 19.7;
var value2: 10.8
                        };
var {
    name: "Nam-zim";
var value1: 15.5;
var value2: 4.1
                        };
var {
    name: "Y-corporation";
var value1: 14.2;
var value2: 11.3
                        } ];
s.data.setAll(m), n.data.setAll(m), r.data.setAll(m), s.appear(1e3), n.appear(1e3),
    t.appear(1e3, 100);
                    };
am5.ready((function () {
    l();
})), KTThemeMode.on("kt.thememode.change", (function () {
    a.dispose(), l();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget31), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget31.init();
}));

var KTChartsWidget32 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = function (e;
var t;
var a;
var l;
var r) {
    var o = document.querySelector(a);
if (o) {
    var i = parseInt(KTUtil.css(o;
    var "height"));
    var s = KTUtil.getCssVariableValue("--bs-gray-900");
    var n = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var d = {
        series: [{
            name: "Deliveries";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "bar";
    var height: i;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {
    bar: {
        horizontal: !1;
var columnWidth: ["22%"];
var borderRadius: 5;
var dataLabels: {
    position: "top"
};
var startingShape: "flat"
                    }
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !0;
var offsetY: -28;
var style: {
    fontSize: "13px";
var colors: [s]
                    }
                };
var stroke: {
    show: !0;
var width: 2;
var colors: ["transparent"]
                };
var xaxis: {
    categories: ["Grossey";
var "Pet Food";
var "Flowers";
var "Restaurant";
var "Kids Toys";
var "Clothing";
var "Still Water" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    style: {
        colors: KTUtil.getCssVariableValue("--bs-gray-500");
var fontSize: "13px"
                        }
                    };
var crosshairs: {
    fill: {
        gradient: {
            opacityFrom: 0;
var opacityTo: 0
                            }
                        }
                    }
                };
var yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500");
var fontSize: "13px"
                        }
                    }
                };
var fill: {
    opacity: 1
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    }
};
var colors: [KTUtil.getCssVariableValue("--bs-primary");
var KTUtil.getCssVariableValue("--bs-primary-light") ];
var grid: {
    borderColor: n;
var strokeDashArray: 4;
var yaxis: {
    lines: {
        show: !0
    }
}
                }
            };
e.self = new ApexCharts(o, d);
var m = document.querySelector(t);
!0 === r && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), m.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var r = [54;
        var 42;
        var 75;
        var 110;
        var 23;
        var 87;
        var 50 ];
        l(e, "#kt_charts_widget_32_tab_1", "#kt_charts_widget_32_chart_1", r, !0);
        var o = [25;
        var 55;
        var 35;
        var 50;
        var 45;
        var 20;
        var 31 ];
        l(t, "#kt_charts_widget_32_tab_2", "#kt_charts_widget_32_chart_2", o, !1);
        var i = [45;
        var 15;
        var 35;
        var 70;
        var 45;
        var 50;
        var 21 ];
        l(a, "#kt_charts_widget_32_tab_3", "#kt_charts_widget_32_chart_3", i, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l(e, "#kt_charts_widget_32_tab_1", "#kt_charts_widget_32_chart_1", r, e.rendered),
                l(t, "#kt_charts_widget_32_tab_2", "#kt_charts_widget_32_chart_2", o, t.rendered),
                l(a, "#kt_charts_widget_32_tab_3", "#kt_charts_widget_32_chart_3", i, a.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget32), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget32.init();
}));

var KTChartsWidget33 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = function (e;
var t;
var a;
var l;
var r;
var o) {
    var i = document.querySelector(a);
if (i) {
    var s = i.getAttribute("data-kt-chart-color");
    var n = parseInt(KTUtil.css(i;
    var "height"));
    var d = KTUtil.getCssVariableValue("--bs-gray-500");
    var m = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var c = KTUtil.getCssVariableValue("--bs-" + s);
    var g = {
        series: [{
            name: "Etherium ";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: n;
    var toolbar: {
        show: !1
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: .2;
var stops: [15;
var 120;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [c]
                };
var xaxis: {
    categories: r;
var axisBorder: {
        show: !1
    };
var axisTicks: {
    show: !1
};
var offsetX: 20;
var tickAmount: 4;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var show: !1;
var style: {
    colors: d;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: c;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 4e3;
var min: 1e3;
var labels: {
    show: !1
}
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e + "$";
                        }
                    }
                },
colors: [c],
    grid: {
    borderColor: m,
        strokeDashArray: 3,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: c,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(i, g);
var f = document.querySelector(t);
!0 === o && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), f.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var i = [2100;
        var 3200;
        var 3200;
        var 2400;
        var 2400;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 3e3;
        var 3e3;
        var 3250;
        var 3250 ];
        var s = ["10AM";
        var "10.30AM";
        var "11AM";
        var "11.15AM";
        var "11.30AM";
        var "12PM";
        var "1PM";
        var "2PM";
        var "3PM";
        var "4PM";
        var "5PM";
        var "6PM";
        var "7PM";
        var "8PM";
        var "9PM" ];
        o(e, "#kt_charts_widget_33_tab_1", "#kt_charts_widget_33_chart_1", i, s, !0);
        var n = [2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3200;
        var 2800;
        var 2400;
        var 2400;
        var 3100;
        var 2900;
        var 3100;
        var 3100;
        var 2600;
        var 2600;
        var 3200 ];
        var d = ["Apr 01";
        var "Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 07";
        var "Apr 08";
        var "Apr 09";
        var "Apr 10";
        var "Apr 11";
        var "Apr 12";
        var "Apr 13";
        var "Apr 14";
        var "Apr 15" ];
        o(t, "#kt_charts_widget_33_tab_2", "#kt_charts_widget_33_chart_2", n, d, !1);
        var m = [2600;
        var 3200;
        var 2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3100;
        var 2900;
        var 3200;
        var 3200;
        var 2600;
        var 3100;
        var 2800;
        var 2400;
        var 2400 ];
        var c = ["Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 09";
        var "Apr 10";
        var "Apr 12";
        var "Apr 14";
        var "Apr 17";
        var "Apr 18";
        var "Apr 18";
        var "Apr 20";
        var "Apr 22";
        var "Apr 24" ];
        o(a, "#kt_charts_widget_33_tab_3", "#kt_charts_widget_33_chart_3", m, c, !1);
        var g = [1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 3e3;
        var 2100;
        var 3200;
        var 3300;
        var 2400;
        var 2400;
        var 3e3;
        var 3200;
        var 3100 ];
        var f = ["Jun 2021";
        var "Jul 2021";
        var "Aug 2021";
        var "Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022" ];
        o(l, "#kt_charts_widget_33_tab_4", "#kt_charts_widget_33_chart_4", g, f, !1);
        var u = [3e3;
        var 2100;
        var 3300;
        var 3100;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3100;
        var 3100;
        var 2400;
        var 2400;
        var 3e3;
        var 2400;
        var 2800 ];
        var h = ["Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022";
        var "Sep 2022";
        var "Oct 2022";
        var "Nov 2022" ];
        o(r, "#kt_charts_widget_33_tab_5", "#kt_charts_widget_33_chart_5", u, h, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o(e, "#kt_charts_widget_33_tab_1", "#kt_charts_widget_33_chart_1", i, s, e.rendered),
                o(t, "#kt_charts_widget_33_tab_2", "#kt_charts_widget_33_chart_2", n, d, t.rendered),
                o(a, "#kt_charts_widget_33_tab_3", "#kt_charts_widget_33_chart_3", m, c, a.rendered),
                o(l, "#kt_charts_widget_33_tab_4", "#kt_charts_widget_33_chart_4", g, f, l.rendered),
                o(r, "#kt_charts_widget_33_tab_5", "#kt_charts_widget_33_chart_5", u, h, r.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget33), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget33.init();
}));

var KTChartsWidget34 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = function (e;
var t;
var a;
var l;
var r;
var o) {
    var i = document.querySelector(a);
if (i) {
    var s = parseInt(KTUtil.css(i;
    var "height"));
    var n = i.getAttribute("data-kt-chart-color");
    var d = KTUtil.getCssVariableValue("--bs-gray-500");
    var m = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var c = KTUtil.getCssVariableValue("--bs-" + n);
    var g = {
        series: [{
            name: "Earnings";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: s;
    var toolbar: {
        show: !1
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: .2;
var stops: [15;
var 120;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [c]
                };
var xaxis: {
    categories: r;
var axisBorder: {
        show: !1
    };
var axisTicks: {
    show: !1
};
var offsetX: 20;
var tickAmount: 4;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var show: !1;
var style: {
    colors: d;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: c;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 4e3;
var min: 1e3;
var labels: {
    show: !1
}
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e + "$";
                        }
                    }
                },
colors: [c],
    grid: {
    borderColor: m,
        strokeDashArray: 3,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: c,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(i, g);
var f = document.querySelector(t);
!0 === o && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), f.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var i = [2100;
        var 2800;
        var 2800;
        var 2400;
        var 2400;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 2800;
        var 2800;
        var 3250;
        var 3250 ];
        var s = ["10AM";
        var "10.30AM";
        var "11AM";
        var "11.15AM";
        var "11.30AM";
        var "12PM";
        var "1PM";
        var "2PM";
        var "3PM";
        var "4PM";
        var "5PM";
        var "6PM";
        var "7PM";
        var "8PM";
        var "9PM" ];
        o(e, "#kt_charts_widget_34_tab_1", "#kt_charts_widget_34_chart_1", i, s, !0);
        var n = [2300;
        var 2300;
        var 2e3;
        var 3100;
        var 3100;
        var 2800;
        var 2400;
        var 2400;
        var 3100;
        var 2900;
        var 3200;
        var 3200;
        var 2600;
        var 2600;
        var 3200 ];
        var d = ["Apr 01";
        var "Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 07";
        var "Apr 08";
        var "Apr 09";
        var "Apr 10";
        var "Apr 11";
        var "Apr 12";
        var "Apr 13";
        var "Apr 14";
        var "Apr 15" ];
        o(t, "#kt_charts_widget_34_tab_2", "#kt_charts_widget_34_chart_2", n, d, !1);
        var m = [2600;
        var 3400;
        var 2300;
        var 2300;
        var 2e3;
        var 3100;
        var 3100;
        var 2900;
        var 3200;
        var 3200;
        var 2600;
        var 3100;
        var 2800;
        var 2400;
        var 2400 ];
        var c = ["Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 09";
        var "Apr 10";
        var "Apr 12";
        var "Apr 14";
        var "Apr 17";
        var "Apr 18";
        var "Apr 18";
        var "Apr 20";
        var "Apr 22";
        var "Apr 24" ];
        o(a, "#kt_charts_widget_34_tab_3", "#kt_charts_widget_34_chart_3", m, c, !1);
        var g = [1800;
        var 1800;
        var 2400;
        var 2400;
        var 3100;
        var 3100;
        var 3e3;
        var 2100;
        var 3200;
        var 3200;
        var 2400;
        var 2400;
        var 3e3;
        var 3200;
        var 3100 ];
        var f = ["Jun 2021";
        var "Jul 2021";
        var "Aug 2021";
        var "Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022" ];
        o(l, "#kt_charts_widget_34_tab_4", "#kt_charts_widget_34_chart_4", g, f, !1);
        var u = [3e3;
        var 2100;
        var 3200;
        var 3200;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3100;
        var 3100;
        var 2400;
        var 2400;
        var 3e3;
        var 2400;
        var 2800 ];
        var h = ["Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022";
        var "Sep 2022";
        var "Oct 2022";
        var "Nov 2022" ];
        o(r, "#kt_charts_widget_34_tab_5", "#kt_charts_widget_34_chart_5", u, h, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o(e, "#kt_charts_widget_34_tab_1", "#kt_charts_widget_34_chart_1", i, s, e.rendered),
                o(t, "#kt_charts_widget_34_tab_2", "#kt_charts_widget_34_chart_2", n, d, t.rendered),
                o(a, "#kt_charts_widget_34_tab_3", "#kt_charts_widget_34_chart_3", m, c, a.rendered),
                o(l, "#kt_charts_widget_34_tab_4", "#kt_charts_widget_34_chart_4", g, f, l.rendered),
                o(r, "#kt_charts_widget_34_tab_5", "#kt_charts_widget_34_chart_5", u, h, r.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget34), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget34.init();
}));

var KTChartsWidget35 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = function (e;
var t;
var a;
var l;
var r;
var o) {
    var i = document.querySelector(a);
if (i) {
    var s = parseInt(KTUtil.css(i;
    var "height"));
    var n = i.getAttribute("data-kt-chart-color");
    var d = KTUtil.getCssVariableValue("--bs-gray-500");
    var m = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var c = KTUtil.getCssVariableValue("--bs-" + n);
    var g = {
        series: [{
            name: "Earnings";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: s;
    var toolbar: {
        show: !1
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: .2;
var stops: [15;
var 120;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [c]
                };
var xaxis: {
    categories: r;
var axisBorder: {
        show: !1
    };
var axisTicks: {
    show: !1
};
var offsetX: 20;
var tickAmount: 4;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var show: !1;
var style: {
    colors: d;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: c;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 4e3;
var min: 1e3;
var labels: {
    show: !1
}
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e + "$";
                        }
                    }
                },
colors: [c],
    grid: {
    borderColor: m,
        strokeDashArray: 3,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: c,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(i, g);
var f = document.querySelector(t);
!0 === o && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), f.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var i = [2100;
        var 3100;
        var 3100;
        var 2400;
        var 2400;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 2800;
        var 2800;
        var 3250;
        var 3250 ];
        var s = ["10AM";
        var "10.30AM";
        var "11AM";
        var "11.15AM";
        var "11.30AM";
        var "12PM";
        var "1PM";
        var "2PM";
        var "3PM";
        var "4PM";
        var "5PM";
        var "6PM";
        var "7PM";
        var "8PM";
        var "9PM" ];
        o(e, "#kt_charts_widget_35_tab_1", "#kt_charts_widget_35_chart_1", i, s, !0);
        var n = [2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3200;
        var 2800;
        var 2400;
        var 2400;
        var 3100;
        var 2900;
        var 3200;
        var 3200;
        var 2600;
        var 2600;
        var 3200 ];
        var d = ["Apr 01";
        var "Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 07";
        var "Apr 08";
        var "Apr 09";
        var "Apr 10";
        var "Apr 11";
        var "Apr 12";
        var "Apr 13";
        var "Apr 14";
        var "Apr 15" ];
        o(t, "#kt_charts_widget_35_tab_2", "#kt_charts_widget_35_chart_2", n, d, !1);
        var m = [2600;
        var 3200;
        var 2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3100;
        var 2900;
        var 3400;
        var 3400;
        var 2600;
        var 3200;
        var 2800;
        var 2400;
        var 2400 ];
        var c = ["Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 09";
        var "Apr 10";
        var "Apr 12";
        var "Apr 14";
        var "Apr 17";
        var "Apr 18";
        var "Apr 18";
        var "Apr 20";
        var "Apr 22";
        var "Apr 24" ];
        o(a, "#kt_charts_widget_35_tab_3", "#kt_charts_widget_35_chart_3", m, c, !1);
        var g = [1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 3e3;
        var 2100;
        var 3200;
        var 3200;
        var 2400;
        var 2400;
        var 3e3;
        var 3200;
        var 3100 ];
        var f = ["Jun 2021";
        var "Jul 2021";
        var "Aug 2021";
        var "Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022" ];
        o(l, "#kt_charts_widget_35_tab_4", "#kt_charts_widget_35_chart_4", g, f, !1);
        var u = [3200;
        var 2100;
        var 3200;
        var 3200;
        var 3200;
        var 3500;
        var 3e3;
        var 2400;
        var 3250;
        var 2400;
        var 2400;
        var 3250;
        var 3e3;
        var 2400;
        var 2800 ];
        var h = ["Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022";
        var "Sep 2022";
        var "Oct 2022";
        var "Nov 2022" ];
        o(r, "#kt_charts_widget_35_tab_5", "#kt_charts_widget_35_chart_5", u, h, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o(e, "#kt_charts_widget_35_tab_1", "#kt_charts_widget_35_chart_1", i, s, e.rendered),
                o(t, "#kt_charts_widget_35_tab_2", "#kt_charts_widget_35_chart_2", n, d, t.rendered),
                o(a, "#kt_charts_widget_35_tab_3", "#kt_charts_widget_35_chart_3", m, c, a.rendered),
                o(l, "#kt_charts_widget_35_tab_4", "#kt_charts_widget_35_chart_4", g, f, l.rendered),
                o(r, "#kt_charts_widget_35_tab_5", "#kt_charts_widget_35_chart_5", u, h, r.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget35), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget35.init();
}));

var KTChartsWidget36 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_36");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-primary");
        var i = KTUtil.getCssVariableValue("--bs-primary");
        var s = KTUtil.getCssVariableValue("--bs-success");
        var n = {
            series: [{
                name: "Inbound Calls";
                var data: [65;
                var 80;
                var 80;
                var 60;
                var 60;
                var 45;
                var 45;
                var 80;
                var 80;
                var 70;
                var 70;
                var 90;
                var 90;
                var 80;
                var 80;
                var 80;
                var 60;
                var 60;
                var 50 ]
        };
        var {
            name: "Outbound Calls";
        var data: [90;
        var 110;
        var 110;
        var 95;
        var 95;
        var 85;
        var 85;
        var 95;
        var 95;
        var 115;
        var 115;
        var 100;
        var 100;
        var 115;
        var 115;
        var 95;
        var 95;
        var 85;
        var 85 ]
    } ];
    var chart: {
        fontFamily: "inherit";
var type: "area";
    var height: a;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: .2;
var stops: [15;
var 120;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o;
var s ]
                };
var xaxis: {
    categories: ["";
var "8 AM";
var "81 AM";
var "9 AM";
var "10 AM";
var "11 AM";
var "12 PM";
var "13 PM";
var "14 PM";
var "15 PM";
var "16 PM";
var "17 PM";
var "18 PM";
var "18:20 PM";
var "18:20 PM";
var "19 PM";
var "20 PM";
var "21 PM";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: [o;
var s ];
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    max: 120;
var min: 30;
var tickAmount: 6;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    }
};
var colors: [i;
var KTUtil.getCssVariableValue("--bs-success") ];
var grid: {
    borderColor: r;
var strokeDashArray: 4;
var yaxis: {
    lines: {
        show: !0
    }
}
                };
var markers: {
    strokeColor: [o;
var s ];
var strokeWidth: 3
                }
            };
e.self = new ApexCharts(t, n), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget36), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget36.init();
}));

var KTChartsWidget37 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = function (e;
var t;
var a;
var l;
var r;
var o) {
    var i = document.querySelector(a);
if (i) {
    var s = parseInt(KTUtil.css(i;
    var "height"));
    var n = i.getAttribute("data-kt-chart-color");
    var d = KTUtil.getCssVariableValue("--bs-gray-500");
    var m = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var c = KTUtil.getCssVariableValue("--bs-" + n);
    var g = {
        series: [{
            name: "Earnings";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: s;
    var toolbar: {
        show: !1
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: .2;
var stops: [15;
var 120;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [c]
                };
var xaxis: {
    categories: r;
var axisBorder: {
        show: !1
    };
var axisTicks: {
    show: !1
};
var offsetX: 20;
var tickAmount: 4;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var show: !1;
var style: {
    colors: d;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: c;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 4e3;
var min: 1e3;
var labels: {
    show: !1
}
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e + "$";
                        }
                    }
                },
colors: [c],
    grid: {
    borderColor: m,
        strokeDashArray: 3,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: c,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(i, g);
var f = document.querySelector(t);
!0 === o && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), f.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var o = [2100;
        var 3200;
        var 3200;
        var 2400;
        var 2400;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 3e3;
        var 3e3;
        var 3250;
        var 3250 ];
        var i = ["10AM";
        var "10.30AM";
        var "11AM";
        var "11.15AM";
        var "11.30AM";
        var "12PM";
        var "1PM";
        var "2PM";
        var "3PM";
        var "4PM";
        var "5PM";
        var "6PM";
        var "7PM";
        var "8PM";
        var "9PM" ];
        r(e, "#kt_charts_widget_37_tab_1", "#kt_charts_widget_37_chart_1", o, i, !0);
        var s = [2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3200;
        var 2800;
        var 2400;
        var 2400;
        var 3100;
        var 2900;
        var 3100;
        var 3100;
        var 2600;
        var 2600;
        var 3200 ];
        var n = ["Apr 01";
        var "Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 07";
        var "Apr 08";
        var "Apr 09";
        var "Apr 10";
        var "Apr 11";
        var "Apr 12";
        var "Apr 13";
        var "Apr 14";
        var "Apr 15" ];
        r(t, "#kt_charts_widget_37_tab_2", "#kt_charts_widget_37_chart_2", s, n, !1);
        var d = [2600;
        var 3200;
        var 2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3100;
        var 2900;
        var 3200;
        var 3200;
        var 2600;
        var 3100;
        var 2800;
        var 2400;
        var 2400 ];
        var m = ["Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 09";
        var "Apr 10";
        var "Apr 12";
        var "Apr 14";
        var "Apr 17";
        var "Apr 18";
        var "Apr 18";
        var "Apr 20";
        var "Apr 22";
        var "Apr 24" ];
        r(a, "#kt_charts_widget_37_tab_3", "#kt_charts_widget_37_chart_3", d, m, !1);
        var c = [1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 3e3;
        var 2100;
        var 3200;
        var 3300;
        var 2400;
        var 2400;
        var 3e3;
        var 3200;
        var 3100 ];
        var g = ["Jun 2021";
        var "Jul 2021";
        var "Aug 2021";
        var "Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022" ];
        r(l, "#kt_charts_widget_37_tab_4", "#kt_charts_widget_37_chart_4", c, g, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r(e, "#kt_charts_widget_37_tab_1", "#kt_charts_widget_37_chart_1", o, i, e.rendered),
                r(t, "#kt_charts_widget_37_tab_2", "#kt_charts_widget_37_chart_2", s, n, t.rendered),
                r(a, "#kt_charts_widget_37_tab_3", "#kt_charts_widget_37_chart_3", d, m, a.rendered),
                r(l, "#kt_charts_widget_37_tab_4", "#kt_charts_widget_37_chart_4", c, g, l.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget37), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget37.init();
}));

var KTChartsWidget38 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_38_chart");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-900");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = {
            series: [{
                name: "LOI Issued";
                var data: [54;
                var 42;
                var 75;
                var 110;
                var 23;
                var 87;
                var 50 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "bar";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {
        bar: {
            horizontal: !1;
var columnWidth: ["28%"];
    var borderRadius: 5;
    var dataLabels: {
        position: "top"
    };
    var startingShape: "flat"
}
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !0;
var offsetY: -28;
var style: {
    fontSize: "13px";
var colors: [l]
                    };
var formatter: function(e) {
    return e;
                    }
                },
stroke: {
    show: !0,
        width: 2,
            colors: ["transparent"]
},
xaxis: {
    categories: ["E2E", "IMC", "SSMC", "SSBD", "ICCD", "PAN", "SBN"],
        axisBorder: {
        show: !1
    },
    axisTicks: {
        show: !1
    },
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        }
    },
    crosshairs: {
        fill: {
            gradient: {
                opacityFrom: 0,
                    opacityTo: 0
            }
        }
    }
},
yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px"
        },
        formatter: function(e) {
            return e + "M";
        }
    }
},
fill: {
    opacity: 1
},
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return +e + "M";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-primary-light")],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            };
e.self = new ApexCharts(t, o), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget38), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget38.init();
}));

var KTChartsWidget39 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.querySelector("#kt_charts_widget_39_chart");
                if (e) {
                    var t;
                    var a = function () {
                        if (t = am5.Root.new(e)) {
                            t.setThemes([am5themes_Animated.new(t)]);
                            var a = t.container.children.push(am5radar.RadarChart.new(t;
                            var {
                                panX: !1;
                            var panY: !1;
                            var wheelX: "panX";
                            var wheelY: "zoomX"
                        }));
                        var l = am5radar.AxisRendererCircular.new(t;
                        var { });
                        l.labels.template.setAll({
                            radius: 10
                        }), l.grid.template.setAll({
                            stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
                        });
                        var r = am5radar.AxisRendererRadial.new(t;
                        var {
                            minGridDistance: 20
                            });
                        r.grid.template.setAll({
                            stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
                        });
                        var o = a.xAxes.push(am5xy.CategoryAxis.new(t;
                        var {
                            maxDeviation: 0;
                        var categoryField: "category";
                        var renderer: l;
                        var tooltip: am5.Tooltip.new(t;
                        var { })
                    }));
                    var i = a.yAxes.push(am5xy.ValueAxis.new(t;
                    var {
                        min: 0;
                    var max: 10;
                    var renderer: r
                }));
                l.labels.template.setAll({
                    fontSize: 11,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800"))
                }), r.labels.template.setAll({
                    fontSize: 11,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800"))
                });
                var s = a.series.push(am5radar.RadarColumnSeries.new(t;
                var {
                    xAxis: o;
                var yAxis: i;
                var valueYField: "value";
                var categoryXField: "category"
            }));
            s.columns.template.setAll({
                tooltipText: "{categoryX}: {valueY}",
                templateField: "columnSettings",
                strokeOpacity: 0,
                width: am5.p100
            });
            var n = [{
                category: "Spain";
                var value: 5;
                var columnSettings: {
                fill: a.get("colors").next()
            }
                            };
        var {
            category: "Spain";
        var value: 4;
        var columnSettings: {
            fill: a.get("colors").next()
}
                            };
var {
    category: "United States";
var value: 9;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Italy";
var value: 7;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "France";
var value: 8;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Norway";
var value: 4;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Brasil";
var value: 7;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Canada";
var value: 5;
var columnSettings: {
    fill: a.get("colors").next()
}
                            } ];
s.data.setAll(n), o.data.setAll(n), s.appear(1e3), a.appear(1e3, 100);
                        }
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget39), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget39.init();
}));

var KTChartsWidget4 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_4");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-primary");
        var i = {
            series: [{
                name: "Sales";
                var data: [34.5;
                var 34.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35;
                var 35;
                var 34.5;
                var 34.5;
                var 35;
                var 35;
                var 35.5;
                var 35.5;
                var 35 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .4;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [o]
                };
var xaxis: {
    categories: ["";
var "Apr 02";
var "Apr 03";
var "Apr 04";
var "Apr 05";
var "Apr 06";
var "Apr 07";
var "Apr 08";
var "Apr 09";
var "Apr 10";
var "Apr 11";
var "Apr 12";
var "Apr 13";
var "Apr 14";
var "Apr 17";
var "Apr 18";
var "Apr 19";
var "Apr 21";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    max: 36.3;
var min: 33;
var tickAmount: 6;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        };
var formatter: function(e) {
    return "$" + parseInt(10 * e);
                        }
                    }
                },
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return "$" + parseInt(10 * e);
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary")],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: o,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(t, i), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget4), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget4.init();
}));

var KTChartsWidget40 = {
    init: function () {
        !function () {
            if ("undefined" != typeof am5) {
                var e = document.querySelector("#kt_charts_widget_40_chart");
                if (e) {
                    var t;
                    var a = function () {
                        if (t = am5.Root.new(e)) {
                            t.setThemes([am5themes_Animated.new(t)]);
                            var a = t.container.children.push(am5radar.RadarChart.new(t;
                            var {
                                panX: !1;
                            var panY: !1;
                            var wheelX: "panX";
                            var wheelY: "zoomX"
                        }));
                        var l = am5radar.AxisRendererCircular.new(t;
                        var { });
                        l.labels.template.setAll({
                            radius: 10
                        }), l.grid.template.setAll({
                            stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
                        });
                        var r = am5radar.AxisRendererRadial.new(t;
                        var {
                            minGridDistance: 20
                            });
                        r.grid.template.setAll({
                            stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-700"))
                        });
                        var o = a.xAxes.push(am5xy.CategoryAxis.new(t;
                        var {
                            maxDeviation: 0;
                        var categoryField: "category";
                        var renderer: l;
                        var tooltip: am5.Tooltip.new(t;
                        var { })
                    }));
                    var i = a.yAxes.push(am5xy.ValueAxis.new(t;
                    var {
                        min: 0;
                    var max: 10;
                    var renderer: r
                }));
                l.labels.template.setAll({
                    fontSize: 11,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800"))
                }), r.labels.template.setAll({
                    fontSize: 11,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800"))
                });
                var s = a.series.push(am5radar.RadarColumnSeries.new(t;
                var {
                    xAxis: o;
                var yAxis: i;
                var valueYField: "value";
                var categoryXField: "category"
            }));
            s.columns.template.setAll({
                tooltipText: "{categoryX}: {valueY}",
                templateField: "columnSettings",
                strokeOpacity: 0,
                width: am5.p100
            });
            var n = [{
                category: "Spain";
                var value: 5;
                var columnSettings: {
                fill: a.get("colors").next()
            }
                            };
        var {
            category: "Spain";
        var value: 4;
        var columnSettings: {
            fill: a.get("colors").next()
}
                            };
var {
    category: "United States";
var value: 9;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Italy";
var value: 7;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "France";
var value: 8;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Norway";
var value: 4;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Brasil";
var value: 7;
var columnSettings: {
    fill: a.get("colors").next()
}
                            };
var {
    category: "Canada";
var value: 5;
var columnSettings: {
    fill: a.get("colors").next()
}
                            } ];
s.data.setAll(n), o.data.setAll(n), s.appear(1e3), a.appear(1e3, 100);
                        }
                    };
am5.ready((function () {
    a();
})), KTThemeMode.on("kt.thememode.change", (function () {
    t.dispose(), a();
}));
                }
            }
        }();
    }
};

"undefined" != typeof module && (module.exports = KTChartsWidget40), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget40.init();
}));

var KTChartsWidget41 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = function (e;
var t;
var a;
var l;
var r;
var o) {
    var i = document.querySelector(a);
if (i) {
    var s = parseInt(KTUtil.css(i;
    var "height"));
    var n = i.getAttribute("data-kt-chart-color");
    var d = KTUtil.getCssVariableValue("--bs-gray-500");
    var m = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var c = KTUtil.getCssVariableValue("--bs-" + n);
    var g = {
        series: [{
            name: "Earnings";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: s;
    var toolbar: {
        show: !1
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: .2;
var stops: [15;
var 120;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [c]
                };
var xaxis: {
    categories: r;
var axisBorder: {
        show: !1
    };
var axisTicks: {
    show: !1
};
var offsetX: 20;
var tickAmount: 4;
var labels: {
    rotate: 0;
var rotateAlways: !1;
var show: !1;
var style: {
    colors: d;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: c;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 4e3;
var min: 1e3;
var labels: {
    show: !1
}
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e + "$";
                        }
                    }
                },
colors: [c],
    grid: {
    borderColor: m,
        strokeDashArray: 3,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    strokeColor: c,
        strokeWidth: 3
}
            };
e.self = new ApexCharts(i, g);
var f = document.querySelector(t);
!0 === o && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), f.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var i = [2100;
        var 3100;
        var 3100;
        var 2400;
        var 2400;
        var 1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 2800;
        var 2800;
        var 3250;
        var 3250 ];
        var s = ["10AM";
        var "10.30AM";
        var "11AM";
        var "11.15AM";
        var "11.30AM";
        var "12PM";
        var "1PM";
        var "2PM";
        var "3PM";
        var "4PM";
        var "5PM";
        var "6PM";
        var "7PM";
        var "8PM";
        var "9PM" ];
        o(e, "#kt_charts_widget_41_tab_1", "#kt_charts_widget_41_chart_1", i, s, !0);
        var n = [2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3200;
        var 2800;
        var 2400;
        var 2400;
        var 3100;
        var 2900;
        var 3200;
        var 3200;
        var 2600;
        var 2600;
        var 3200 ];
        var d = ["Apr 01";
        var "Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 07";
        var "Apr 08";
        var "Apr 09";
        var "Apr 10";
        var "Apr 11";
        var "Apr 12";
        var "Apr 13";
        var "Apr 14";
        var "Apr 15" ];
        o(t, "#kt_charts_widget_41_tab_2", "#kt_charts_widget_41_chart_2", n, d, !1);
        var m = [2600;
        var 3200;
        var 2300;
        var 2300;
        var 2e3;
        var 3200;
        var 3100;
        var 2900;
        var 3400;
        var 3400;
        var 2600;
        var 3200;
        var 2800;
        var 2400;
        var 2400 ];
        var c = ["Apr 02";
        var "Apr 03";
        var "Apr 04";
        var "Apr 05";
        var "Apr 06";
        var "Apr 09";
        var "Apr 10";
        var "Apr 12";
        var "Apr 14";
        var "Apr 17";
        var "Apr 18";
        var "Apr 18";
        var "Apr 20";
        var "Apr 22";
        var "Apr 24" ];
        o(a, "#kt_charts_widget_41_tab_3", "#kt_charts_widget_41_chart_3", m, c, !1);
        var g = [1800;
        var 1800;
        var 2400;
        var 2400;
        var 3200;
        var 3200;
        var 3e3;
        var 2100;
        var 3200;
        var 3200;
        var 2400;
        var 2400;
        var 3e3;
        var 3200;
        var 3100 ];
        var f = ["Jun 2021";
        var "Jul 2021";
        var "Aug 2021";
        var "Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022" ];
        o(l, "#kt_charts_widget_41_tab_4", "#kt_charts_widget_41_chart_4", g, f, !1);
        var u = [3200;
        var 2100;
        var 3200;
        var 3200;
        var 3200;
        var 3500;
        var 3e3;
        var 2400;
        var 3250;
        var 2400;
        var 2400;
        var 3250;
        var 3e3;
        var 2400;
        var 2800 ];
        var h = ["Sep 2021";
        var "Oct 2021";
        var "Nov 2021";
        var "Dec 2021";
        var "Jan 2022";
        var "Feb 2022";
        var "Mar 2022";
        var "Apr 2022";
        var "May 2022";
        var "Jun 2022";
        var "Jul 2022";
        var "Aug 2022";
        var "Sep 2022";
        var "Oct 2022";
        var "Nov 2022" ];
        o(r, "#kt_charts_widget_41_tab_5", "#kt_charts_widget_41_chart_5", u, h, !1), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o(e, "#kt_charts_widget_41_tab_1", "#kt_charts_widget_41_chart_1", i, s, e.rendered),
                o(t, "#kt_charts_widget_41_tab_2", "#kt_charts_widget_41_chart_2", n, d, t.rendered),
                o(a, "#kt_charts_widget_41_tab_3", "#kt_charts_widget_41_chart_3", m, c, a.rendered),
                o(l, "#kt_charts_widget_41_tab_4", "#kt_charts_widget_41_chart_4", g, f, l.rendered),
                o(r, "#kt_charts_widget_41_tab_5", "#kt_charts_widget_41_chart_5", u, h, r.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget41), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget41.init();
}));

var KTChartsWidget42 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_42");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-500");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-primary");
        var i = KTUtil.getCssVariableValue("--bs-success");
        var s = {
            series: [{
                name: "Inbound Calls";
                var data: [45;
                var 80;
                var 53;
                var 80;
                var 75;
                var 100;
                var 76;
                var 117;
                var 76;
                var 110;
                var 70;
                var 112 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var stroke: {
        curve: "smooth";
var show: !0;
    var width: 3;
    var colors: [o;
    var i ]
};
var xaxis: {
    categories: ["";
var "29 Sep";
var "1 Aug";
var "2 Aug";
var "3 Aug";
var "4 Aug";
var "5 Aug";
var "6 Aug";
var "7 Aug";
var "8 Aug";
var "9 Aug";
var "10 Aug";
var "11 Aug";
var "12 Aug";
var "13 Aug";
var "14 Aug";
var "15 Aug";
var "16 Aug";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: [o;
var i ];
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    max: 120;
var min: 30;
var tickAmount: 6;
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    }
};
var colors: [o;
var i ];
var grid: {
    borderColor: r;
var strokeDashArray: 4;
var yaxis: {
    lines: {
        show: !0
    }
}
                };
var markers: {
    strokeColor: [o;
var i ];
var strokeWidth: 3
                }
            };
e.self = new ApexCharts(t, s), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget42), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget42.init();
}));

var KTChartsWidget43 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_43");
    if (t) {
        var a = t.getAttribute("data-kt-chart-color");
        var l = parseInt(KTUtil.css(t;
        var "height"));
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var i = KTUtil.getCssVariableValue("--bs-" + a);
        var s = KTUtil.getCssVariableValue("--bs-" + a + "-light");
        var n = {
            series: [{
                name: "Overview";
                var data: [30;
                var 30;
                var 45;
                var 45;
                var 35;
                var 35;
                var 25;
                var 25;
                var 50;
                var 50 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: l;
        var toolbar: {
            show: !1
        };
        var zoom: {
            enabled: !1
        };
        var sparkline: {
            enabled: !0
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 1
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [i]
                };
var xaxis: {
    categories: ["Feb";
var "Mar";
var "Apr";
var "May";
var "Jun";
var "Jul";
var "Aug";
var "Sep";
var "Oct";
var "Nov";
var "Dec" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e;
                        }
                    }
                },
colors: [s],
    markers: {
    colors: s,
        strokeColor: i,
            strokeWidth: 3
}
            };
e.self = new ApexCharts(t, n), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget43), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget43.init();
}));

var KTChartsWidget44 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_44");
    if (t) {
        var a = t.getAttribute("data-kt-chart-color");
        var l = parseInt(KTUtil.css(t;
        var "height"));
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var i = KTUtil.getCssVariableValue("--bs-" + a);
        var s = KTUtil.getCssVariableValue("--bs-" + a + "-light");
        var n = {
            series: [{
                name: "Overview";
                var data: [20;
                var 37;
                var 22;
                var 45;
                var 20;
                var 50;
                var 25;
                var 57;
                var 40 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: l;
        var toolbar: {
            show: !1
        };
        var zoom: {
            enabled: !1
        };
        var sparkline: {
            enabled: !0
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "solid";
var opacity: 1
};
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [i]
                };
var xaxis: {
    categories: ["Apr";
var "May";
var "Jun";
var "Jul";
var "Aug";
var "Sep";
var "Oct";
var "Nov";
var "Dec" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e;
                        }
                    }
                },
colors: [s],
    markers: {
    colors: s,
        strokeColor: i,
            strokeWidth: 3
}
            };
e.self = new ApexCharts(t, n), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget44), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget44.init();
}));

var KTChartsWidget45 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_45");
    if (t) {
        var a = t.getAttribute("data-kt-chart-color");
        var l = parseInt(KTUtil.css(t;
        var "height"));
        var r = KTUtil.getCssVariableValue("--bs-gray-800");
        var o = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var i = KTUtil.getCssVariableValue("--bs-" + a);
        var s = KTUtil.getCssVariableValue("--bs-" + a);
        var n = {
            series: [{
                name: "Overview";
                var data: [15;
                var 15;
                var 42;
                var 42;
                var 13;
                var 13;
                var 35 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: l;
        var toolbar: {
            show: !1
        };
        var zoom: {
            enabled: !1
        };
        var sparkline: {
            enabled: !0
        }
    };
    var plotOptions: {};
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .3;
    var opacityTo: .2;
    var stops: [15;
    var 120;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [i]
                };
var xaxis: {
    categories: ["Feb";
var "Mar";
var "Apr";
var "May";
var "Jun";
var "Jul";
var "Aug" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: o;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1;
var style: {
        colors: r;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return e;
                        }
                    }
                },
colors: [s],
    markers: {
    colors: s,
        strokeColor: i,
            strokeWidth: 3
}
            };
e.self = new ApexCharts(t, n), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget45), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget45.init();
}));

var KTChartsWidget46 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_46");
    if (t) {
        var a = t.hasAttribute("data-kt-negative-color") ? t.getAttribute("data-kt-negative-color") : KTUtil.getCssVariableValue("--bs-gary-500");
        var l = parseInt(KTUtil.css(t;
        var "height"));
        var r = KTUtil.getCssVariableValue("--bs-gray-500");
        var o = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var i = {
            series: [{
                name: "Subscribed";
                var data: [20;
                var 30;
                var 20;
                var 40;
                var 60;
                var 75;
                var 65;
                var 18;
                var 10;
                var 5;
                var 15;
                var 40;
                var 60;
                var 18;
                var 35;
                var 55;
                var 20 ]
        };
        var {
            name: "Unsubscribed";
        var data: [-20;
        var -15;
        var -5;
        var -20;
        var -30;
        var -15;
        var -10;
        var -8;
        var -5;
        var -5;
        var -10;
        var -25;
        var -15;
        var -5;
        var -10;
        var -5;
        var -15 ]
    } ];
    var chart: {
        fontFamily: "inherit";
var type: "bar";
    var stacked: !0;
    var height: l;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {
    bar: {
        columnWidth: "35%";
var barHeight: "70%";
var borderRadius: [4;
var 4 ]
                    }
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var xaxis: {
    categories: ["Jan 5";
var "Jan 7";
var "Jan 9";
var "Jan 11";
var "Jan 13";
var "Jan 15";
var "Jan 17";
var "Jan 19";
var "Jan 20";
var "Jan 21";
var "Jan 23";
var "Jan 24";
var "Jan 25";
var "Jan 26";
var "Jan 24";
var "Jan 28";
var "Jan 29" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 10;
var labels: {
    style: {
        colors: [r];
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    show: !1
}
                };
var yaxis: {
    min: -100;
var max: 150;
var tickAmount: 5;
var labels: {
    style: {
        colors: [r];
var fontSize: "12px"
                        };
var formatter: function(e) {
    return parseInt(e);
                        }
                    }
                },
fill: {
    opacity: 1
},
states: {
    normal: {
        filter: {
            type: "none",
                value: 0
        }
    },
    hover: {
        filter: {
            type: "none",
                value: 0
        }
    },
    active: {
        allowMultipleDataPointsSelection: !1,
            filter: {
            type: "none",
                value: 0
        }
    }
},
tooltip: {
    style: {
        fontSize: "12px",
            borderRadius: 4
    },
    y: {
        formatter: function(e) {
            return e > 0 ? e + "K" : Math.abs(e) + "K";
        }
    }
},
colors: [KTUtil.getCssVariableValue("--bs-gray-800"), a],
    grid: {
    borderColor: o,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            };
e.self = new ApexCharts(t, i), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget46), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget46.init();
}));

var KTChartsWidget47 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_47");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-white");
        var r = {
            series: [{
                name: "Sales";
                var data: [5;
                var 5;
                var 15;
                var 15;
                var 19;
                var 16;
                var 27;
                var 24;
                var 34;
                var 25;
                var 40;
                var 30;
                var 19;
                var 17;
                var 22;
                var 10;
                var 14;
                var 14 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .5;
    var opacityTo: 0;
    var stops: [0;
    var 80;
    var 100 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [l]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    position: "front";
var stroke: {
        color: l;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !1
}
                };
var yaxis: {
    labels: {
        show: !1
    }
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    enabled: !1
};
var colors: [KTUtil.getCssVariableValue("--bs-white")];
var grid: {
    yaxis: {
        lines: {
            show: !1
        }
    }
};
var markers: {
    strokeColor: l;
var strokeWidth: 2
                }
            };
e.self = new ApexCharts(t, r), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget47), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget47.init();
}));

var KTChartsWidget48 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_48");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-danger");
        var r = {
            series: [{
                name: "Sales";
                var data: [5;
                var 5;
                var 15;
                var 15;
                var 19;
                var 16;
                var 27;
                var 24;
                var 34;
                var 25;
                var 40;
                var 30;
                var 19;
                var 17;
                var 22;
                var 10;
                var 14;
                var 14 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "area";
        var height: a;
        var toolbar: {
            show: !1
        }
    };
    var legend: {
        show: !1
    };
    var dataLabels: {
        enabled: !1
    };
    var fill: {
        type: "gradient";
var gradient: {
            shadeIntensity: 1;
var opacityFrom: .5;
    var opacityTo: 0;
    var stops: [0;
    var 120;
    var 50 ]
}
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [l]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    position: "front";
var stroke: {
        color: l;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !1
}
                };
var yaxis: {
    labels: {
        show: !1
    }
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    enabled: !1
};
var colors: [KTUtil.getCssVariableValue("--bs-danger")];
var grid: {
    yaxis: {
        lines: {
            show: !1
        }
    }
};
var markers: {
    strokeColor: l;
var strokeWidth: 2
                }
            };
e.self = new ApexCharts(t, r), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget48), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget48.init();
}));

var KTChartsWidget5 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_5");
    if (t) {
        var a = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var l = {
            series: [{
                data: [15;
                var 12;
                var 10;
                var 8;
                var 7;
                var 4;
                var 3 ];
            var show: !1
    } ];
    var chart: {
        type: "bar";
var height: 350;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {
    bar: {
        borderRadius: 4;
var horizontal: !0;
var distributed: !0;
var barHeight: 23
                    }
                };
var dataLabels: {
    enabled: !1
};
var legend: {
    show: !1
};
var colors: ["#3E97FF";
var "#F1416C";
var "#50CD89";
var "#FFC700";
var "#7239EA";
var "#50CDCD";
var "#3F4254" ];
var xaxis: {
    categories: ["Phones";
var "Laptops";
var "Headsets";
var "Games";
var "Keyboardsy";
var "Monitors";
var "Speakers" ];
var labels: {
    formatter: function(e) {
        return e + "K";
                        },
style: {
    colors: KTUtil.getCssVariableValue("--bs-gray-400"),
        fontSize: "14px",
            fontWeight: "600",
                align: "left"
}
                    },
axisBorder: {
    show: !1
}
                },
yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-800"),
                fontSize: "14px",
                    fontWeight: "600"
        },
        offsetY: 2,
            align: "left"
    }
},
grid: {
    borderColor: a,
        xaxis: {
        lines: {
            show: !0
        }
    },
    yaxis: {
        lines: {
            show: !1
        }
    },
    strokeDashArray: 4
}
            };
e.self = new ApexCharts(t, l), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget5), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget5.init();
}));

var KTChartsWidget6 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function (e) {
    var t = document.getElementById("kt_charts_widget_6");
    if (t) {
        var a = KTUtil.getCssVariableValue("--bs-gray-800");
        var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var r = {
            series: [{
                name: "Sales";
                var data: [15;
                var 12;
                var 10;
                var 8;
                var 7 ]
        } ];
        var chart: {
            fontFamily: "inherit";
var type: "bar";
        var height: 350;
        var toolbar: {
            show: !1
        }
    };
    var plotOptions: {
        bar: {
            borderRadius: 8;
var horizontal: !0;
    var distributed: !0;
    var barHeight: 50;
    var dataLabels: {
        position: "bottom"
    }
}
                };
var dataLabels: {
    enabled: !0;
var textAnchor: "start";
var offsetX: 0;
var formatter: function(e;
var t) {
    e *= 1e3;
return wNumb({
    thousand: ","
}).to(e);
                    },
style: {
    fontSize: "14px",
        fontWeight: "600",
            align: "left"
}
                },
legend: {
    show: !1
},
colors: ["#3E97FF", "#F1416C", "#50CD89", "#FFC700", "#7239EA"],
    xaxis: {
    categories: ["ECR - 90%", "FGI - 82%", "EOQ - 75%", "FMG - 60%", "PLG - 50%"],
        labels: {
        formatter: function(e) {
            return e + "K";
        },
        style: {
            colors: [a],
                fontSize: "14px",
                    fontWeight: "600",
                        align: "left"
        }
    },
    axisBorder: {
        show: !1
    }
},
yaxis: {
    labels: {
        formatter: function(e, t) {
            return Number.isInteger(e) ? e + " - " + parseInt(100 * e / 18).toString() + "%" : e;
        },
        style: {
            colors: a,
                fontSize: "14px",
                    fontWeight: "600"
        },
        offsetY: 2,
            align: "left"
    }
},
grid: {
    borderColor: l,
        xaxis: {
        lines: {
            show: !0
        }
    },
    yaxis: {
        lines: {
            show: !1
        }
    },
    strokeDashArray: 4
},
tooltip: {
    style: {
        fontSize: "12px"
    },
    y: {
        formatter: function(e) {
            return e + "K";
        }
    }
}
            };
e.self = new ApexCharts(t, r), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(e), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t(e);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget6), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget6.init();
}));

var KTChartsWidget7 = function () {
    var e = function (e) {
        var t = document.querySelector(e);
        if (t) {
            var a = parseInt(KTUtil.css(t;
            var "height"));
            var l = KTUtil.getCssVariableValue("--bs-border-dashed-color");
            var r = {
                series: [{
                    name: "Net Profit";
                    var data: data1
                };
                var {
                    name: "Revenue";
                    var data: data2
                } ];
            var chart: {
                fontFamily: "inherit";
var type: "bar";
            var height: a;
            var toolbar: {
                show: !1
            }
        };
        var plotOptions: {
            bar: {
                horizontal: !1;
var columnWidth: ["40%"];
        var borderRadius: [6]
    }
};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var stroke: {
    show: !0;
var width: 2;
var colors: ["transparent"]
                };
var xaxis: {
    categories: ["Feb";
var "Mar";
var "Apr";
var "May";
var "Jun";
var "Jul" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    style: {
        colors: KTUtil.getCssVariableValue("--bs-gray-700");
var fontSize: "12px"
                        }
                    }
                };
var yaxis: {
    labels: {
        style: {
            colors: KTUtil.getCssVariableValue("--bs-gray-700");
var fontSize: "12px"
                        }
                    }
                };
var fill: {
    opacity: 1
};
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return "$" + e + " thousands";
                        }
                    }
                },
colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-primary-light")],
    grid: {
    borderColor: l,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
}
            }, o = new ApexCharts(t, r), i = !1, s = document.querySelector(tabSelector);
!0 === initByDefault && (o.render(), i = !0), s.addEventListener("shown.bs.tab", (function (e) {
    0 == i && (o.render(), i = !0);
})), (o = new ApexCharts(t, r)).render();
        }
    };
return {
    init: function () {
        e("#kt_chart_widget_7_tab_1"), e("#kt_chart_widget_7_tab_2"), e("#kt_chart_widget_7_tab_3"),
            e("#kt_chart_widget_7_tab_4");
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget7), KTUtil.onDOMContentLoaded((function () { }));

var KTChartsWidget8 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = function (e;
var t;
var a;
var l;
var r) {
    var o = document.querySelector(a);
if (o) {
    var i = parseInt(KTUtil.css(o;
    var "height"));
    var s = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var n = {
        series: [{
            name: "Social Campaigns";
            var data: l[0]
                };
        var {
            name: "Email Newsletter";
            var data: l[1]
                };
        var {
            name: "TV Campaign";
            var data: l[2]
                };
        var {
            name: "Google Ads";
            var data: l[3]
                };
        var {
            name: "Courses";
            var data: l[4]
                };
        var {
            name: "Radio";
            var data: l[5]
                } ];
    var chart: {
        fontFamily: "inherit";
var type: "bubble";
    var height: i;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {
    bubble: {}
};
var stroke: {
    show: !1;
var width: 0
                };
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var xaxis: {
    type: "numeric";
var tickAmount: 7;
var min: 0;
var max: 700;
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !0;
var height: 0
                    };
var labels: {
    show: !0;
var trim: !0;
var style: {
    colors: KTUtil.getCssVariableValue("--bs-gray-500");
var fontSize: "13px"
                        }
                    }
                };
var yaxis: {
    tickAmount: 7;
var min: 0;
var max: 700;
var labels: {
    style: {
        colors: KTUtil.getCssVariableValue("--bs-gray-500");
var fontSize: "13px"
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var x: {
        formatter: function(e) {
            return "Clicks: " + e;
                        }
                    },
y: {
    formatter: function(e) {
        return "$" + e + "K";
    }
},
z: {
    title: "Impression: "
}
                },
crosshairs: {
    show: !0,
        position: "front",
            stroke: {
        color: KTUtil.getCssVariableValue("--bs-border-dashed-color"),
            width: 1,
                dashArray: 0
    }
},
colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-success"), KTUtil.getCssVariableValue("--bs-warning"), KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-info"), "#43CED7"],
    fill: {
    opacity: 1
},
markers: {
    strokeWidth: 0
},
grid: {
    borderColor: s,
        strokeDashArray: 4,
            padding: {
        right: 20
    },
    yaxis: {
        lines: {
            show: !0
        }
    }
}
            };
e.self = new ApexCharts(o, n);
var d = document.querySelector(t);
!0 === r && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), d.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var l = [[[100;
        var 250;
        var 30 ] ];
        var [[ 225;
        var 300;
        var 35 ] ];
        var [[ 300;
        var 350;
        var 25 ] ];
        var [[ 350;
        var 350;
        var 20 ] ];
        var [[ 450;
        var 400;
        var 25 ] ];
        var [[ 550;
        var 350;
        var 35 ] ] ];
        var r = [[[125;
        var 300;
        var 40 ] ];
        var [[ 250;
        var 350;
        var 35 ] ];
        var [[ 350;
        var 450;
        var 30 ] ];
        var [[ 450;
        var 250;
        var 25 ] ];
        var [[ 500;
        var 500;
        var 30 ] ];
        var [[ 600;
        var 250;
        var 28 ] ] ];
        a(e, "#kt_chart_widget_8_week_toggle", "#kt_chart_widget_8_week_chart", l, !1),
            a(t, "#kt_chart_widget_8_month_toggle", "#kt_chart_widget_8_month_chart", r, !0);
        KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a(e, "#kt_chart_widget_8_week_toggle", "#kt_chart_widget_8_week_chart", l, e.rendered),
                a(t, "#kt_chart_widget_8_month_toggle", "#kt_chart_widget_8_month_chart", r, t.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget8), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget8.init();
}));

var KTChartsWidget9 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = function () {
    var t = document.getElementById("kt_charts_widget_9");
    if (t) {
        var a = parseInt(KTUtil.css(t;
        var "height"));
        var l = KTUtil.getCssVariableValue("--bs-gray-400");
        var r = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        var o = KTUtil.getCssVariableValue("--bs-gray-200");
        var i = KTUtil.getCssVariableValue("--bs-primary");
        var s = {
            series: [{
                name: "Order";
                var data: [21;
                var 21;
                var 26;
                var 26;
                var 31;
                var 31;
                var 27 ]
        };
        var {
            name: "Revenue";
        var data: [12;
        var 16;
        var 16;
        var 21;
        var 21;
        var 18;
        var 18 ]
    } ];
    var chart: {
        fontFamily: "inherit";
var type: "area";
    var height: a;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "solid";
var opacity: 1
                };
var stroke: {
    curve: "smooth";
var colors: [o]
                };
var xaxis: {
    categories: ["";
var "06 Sep";
var "13 Sep";
var "20 Sep";
var "27 Sep";
var "30 Sep";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var labels: {
    style: {
        colors: l;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: l;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    labels: {
        style: {
            colors: l;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    };
var y: {
        formatter: function(e) {
            return "$" + e + " thousands";
                        }
                    }
                },
crosshairs: {
    show: !0,
        position: "front",
            stroke: {
        color: KTUtil.getCssVariableValue("--bs-border-dashed-color"),
            width: 1,
                dashArray: 0
    }
},
colors: [o, i],
    grid: {
    borderColor: r,
        strokeDashArray: 4,
            yaxis: {
        lines: {
            show: !0
        }
    }
},
markers: {
    colors: [o, i],
        strokeColor: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300")],
            strokeWidth: 3
}
            };
e.self = new ApexCharts(t, s), setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        t(), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t();
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTChartsWidget9), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget9.init();
}));

var KTSlidersWidget1 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = function (e;
var t;
var a) {
    var l = document.querySelector(t);
if (l && (!0 !== e.rendered || !l.classList.contains("initialized"))) {
    var r = parseInt(KTUtil.css(l;
    var "height"));
    var o = KTUtil.getCssVariableValue("--bs-primary");
    var i = {
        series: [a];
        var chart: {
            fontFamily: "inherit";
    var height: r;
    var type: "radialBar";
    var sparkline: {
        enabled: !0
    }
};
var plotOptions: {
    radialBar: {
        hollow: {
            margin: 0;
var size: "45%"
                        };
var dataLabels: {
    showOn: "always";
var name: {
        show: !1
    };
var value: {
    show: !1
}
                        };
var track: {
    background: KTUtil.getCssVariableValue("--bs-primary-light");
var strokeWidth: "100%"
                        }
                    }
                };
var colors: [o];
var stroke: {
    lineCap: "round"
};
var labels: ["Progress"]
            };
e.self = new ApexCharts(l, i), e.self.render(), e.rendered = !0, l.classList.add("initialized");
        }
    };
return {
    init: function () {
        l(e, "#kt_slider_widget_1_chart_1", 76);
        var r = document.querySelector("#kt_sliders_widget_1_slider");
        r && (r.addEventListener("slid.bs.carousel", (function (e) {
            1 === e.to && l(t, "#kt_slider_widget_1_chart_2", 55), 2 === e.to && l(a, "#kt_slider_widget_1_chart_3", 25);
        })), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && (e.self.destroy(), e.rendered = !1), t.rendered && (t.self.destroy(),
                t.rendered = !1), a.rendered && (a.self.destroy(), a.rendered = !1), l(e, "#kt_slider_widget_1_chart_1", 76),
                l(t, "#kt_slider_widget_1_chart_2", 55), l(a, "#kt_slider_widget_1_chart_3", 25);
        })));
    }
};
}();

"undefined" != typeof module && (module.exports = KTSlidersWidget1), KTUtil.onDOMContentLoaded((function () {
    KTSlidersWidget1.init();
}));

var KTSlidersWidget3 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = function (e;
var t;
var a;
var l) {
    var r = document.querySelector(t);
if (r && (!0 !== e.rendered || !r.classList.contains("initialized"))) {
    var o = parseInt(KTUtil.css(r;
    var "height"));
    var i = KTUtil.getCssVariableValue("--bs-gray-500");
    var s = KTUtil.getCssVariableValue("--bs-border-dashed-color");
    var n = KTUtil.getCssVariableValue("--bs-" + a);
    var d = {
        series: [{
            name: "Lessons";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: o;
    var toolbar: {
        show: !1
    }
};
var plotOptions: {};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "gradient";
var gradient: {
        shadeIntensity: 1;
var opacityFrom: .4;
var opacityTo: 0;
var stops: [0;
var 80;
var 100 ]
                    }
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 3;
var colors: [n]
                };
var xaxis: {
    categories: ["";
var "Apr 05";
var "Apr 06";
var "Apr 07";
var "Apr 08";
var "Apr 09";
var "Apr 11";
var "Apr 12";
var "Apr 14";
var "Apr 15";
var "Apr 16";
var "Apr 17";
var "Apr 18";
var "" ];
var axisBorder: {
    show: !1
};
var axisTicks: {
    show: !1
};
var tickAmount: 6;
var labels: {
    rotate: 0;
var rotateAlways: !0;
var style: {
    colors: i;
var fontSize: "12px"
                        }
                    };
var crosshairs: {
    position: "front";
var stroke: {
        color: n;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !0;
var formatter: void 0;
var offsetY: 0;
var style: {
    fontSize: "12px"
}
                    }
                };
var yaxis: {
    tickAmount: 4;
var max: 24;
var min: 10;
var labels: {
    style: {
        colors: i;
var fontSize: "12px"
                        }
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    style: {
        fontSize: "12px"
    }
};
var colors: [n];
var grid: {
    borderColor: s;
var strokeDashArray: 4;
var yaxis: {
    lines: {
        show: !0
    }
}
                };
var markers: {
    strokeColor: n;
var strokeWidth: 3
                }
            };
e.self = new ApexCharts(r, d), e.self.render(), e.rendered = !0, r.classList.add("initialized");
        }
    };
return {
    init: function () {
        var l = [19;
        var 21;
        var 21;
        var 20;
        var 20;
        var 18;
        var 18;
        var 20;
        var 20;
        var 22;
        var 22;
        var 21;
        var 21;
        var 22 ];
        var r = [18;
        var 22;
        var 22;
        var 20;
        var 20;
        var 18;
        var 18;
        var 20;
        var 20;
        var 18;
        var 18;
        var 20;
        var 20;
        var 22 ];
        a(e, "#kt_sliders_widget_3_chart_1", "danger", l);
        var o = document.querySelector("#kt_sliders_widget_3_slider");
        o && (o.addEventListener("slid.bs.carousel", (function (e) {
            1 === e.to && a(t, "#kt_sliders_widget_3_chart_2", "primary", r);
        })), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && (e.self.destroy(), e.rendered = !1), t.rendered && (t.self.destroy(),
                t.rendered = !1), a(e, "#kt_sliders_widget_3_chart_1", "danger", l), a(t, "#kt_sliders_widget_3_chart_2", "primary", r);
        })));
    }
};
}();

"undefined" != typeof module && (module.exports = KTSlidersWidget3), KTUtil.onDOMContentLoaded((function () {
    KTSlidersWidget3.init();
}));

var KTSlidersWidget7 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = function (e;
var t;
var a) {
    var l = document.querySelector(t);
if (l && (!0 !== e.rendered || !l.classList.contains("initialized"))) {
    var r = parseInt(KTUtil.css(l;
    var "height"));
    var o = KTUtil.getCssVariableValue("--bs-danger");
    var i = {
        series: [a];
        var chart: {
            fontFamily: "inherit";
    var height: r;
    var type: "radialBar";
    var sparkline: {
        enabled: !0
    }
};
var plotOptions: {
    radialBar: {
        hollow: {
            margin: 0;
var size: "45%"
                        };
var dataLabels: {
    showOn: "always";
var name: {
        show: !1
    };
var value: {
    show: !1
}
                        };
var track: {
    background: KTUtil.getCssVariableValue("--bs-white");
var strokeWidth: "100%"
                        }
                    }
                };
var colors: [o];
var stroke: {
    lineCap: "round"
};
var labels: ["Progress"]
            };
e.self = new ApexCharts(l, i), e.self.render(), e.rendered = !0, l.classList.add("initialized");
        }
    };
return {
    init: function () {
        l(e, "#kt_slider_widget_7_chart_1", 76);
        var r = document.querySelector("#kt_sliders_widget_7_slider");
        r && (r.addEventListener("slid.bs.carousel", (function (e) {
            1 === e.to && l(t, "#kt_slider_widget_7_chart_2", 55), 2 === e.to && l(a, "#kt_slider_widget_7_chart_3", 25);
        })), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && (e.self.destroy(), e.rendered = !1), t.rendered && (t.self.destroy(),
                t.rendered = !1), a.rendered && (a.self.destroy(), a.rendered = !1), l(e, "#kt_slider_widget_7_chart_1", 76),
                l(t, "#kt_slider_widget_7_chart_2", 55), l(a, "#kt_slider_widget_7_chart_3", 25);
        })));
    }
};
}();

"undefined" != typeof module && (module.exports = KTSlidersWidget7), KTUtil.onDOMContentLoaded((function () {
    KTSlidersWidget7.init();
}));

var KTTablesWidget14 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = function (e;
var t;
var a;
var l) {
    var r = document.querySelector(t);
if (r) {
    var o = parseInt(KTUtil.css(r;
    var "height"));
    var i = r.getAttribute("data-kt-chart-color");
    var s = KTUtil.getCssVariableValue("--bs-gray-300");
    var n = KTUtil.getCssVariableValue("--bs-" + i);
    var d = KTUtil.getCssVariableValue("--bs-body-bg");
    var m = {
        series: [{
            name: "Net Profit";
            var data: a
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: o;
    var toolbar: {
        show: !1
    };
    var zoom: {
        enabled: !1
    };
    var sparkline: {
        enabled: !0
    }
};
var plotOptions: {};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "solid";
var opacity: 1
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [n]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: s;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !1
}
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1
}
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    enabled: !1
};
var colors: [d];
var markers: {
    colors: [d];
var strokeColor: [n];
var strokeWidth: 3
                }
            };
e.self = new ApexCharts(r, m), !0 === l && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        var i = [7;
        var 10;
        var 5;
        var 21;
        var 6;
        var 11;
        var 5;
        var 23;
        var 5;
        var 11;
        var 18;
        var 7;
        var 21;
        var 13 ];
        o(e, "#kt_table_widget_14_chart_1", i, !0);
        var s = [17;
        var 5;
        var 23;
        var 2;
        var 21;
        var 9;
        var 17;
        var 23;
        var 4;
        var 24;
        var 9;
        var 17;
        var 21;
        var 7 ];
        o(t, "#kt_table_widget_14_chart_2", s, !0);
        var n = [2;
        var 24;
        var 5;
        var 17;
        var 7;
        var 2;
        var 12;
        var 24;
        var 5;
        var 24;
        var 2;
        var 8;
        var 12;
        var 7 ];
        o(a, "#kt_table_widget_14_chart_3", n, !0);
        var d = [24;
        var 3;
        var 5;
        var 19;
        var 3;
        var 7;
        var 25;
        var 14;
        var 5;
        var 14;
        var 2;
        var 8;
        var 5;
        var 17 ];
        o(l, "#kt_table_widget_14_chart_4", d, !0);
        var m = [3;
        var 23;
        var 1;
        var 19;
        var 3;
        var 17;
        var 3;
        var 9;
        var 25;
        var 4;
        var 2;
        var 18;
        var 25;
        var 3 ];
        o(r, "#kt_table_widget_14_chart_5", m, !0), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o(e, "#kt_table_widget_14_chart_1", i, e.rendered),
                o(t, "#kt_table_widget_14_chart_2", s, t.rendered), o(a, "#kt_table_widget_14_chart_3", n, a.rendered),
                o(l, "#kt_table_widget_14_chart_4", d, l.rendered), o(r, "#kt_table_widget_14_chart_5", m, r.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTTablesWidget14), KTUtil.onDOMContentLoaded((function () {
    KTTablesWidget14.init();
}));

var KTTablesWidget15 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = function (e;
var t;
var a;
var l) {
    var r = document.querySelector(t);
if (r) {
    var o = parseInt(KTUtil.css(r;
    var "height"));
    var i = r.getAttribute("data-kt-chart-color");
    var s = KTUtil.getCssVariableValue("--bs-gray-300");
    var n = KTUtil.getCssVariableValue("--bs-" + i);
    var d = KTUtil.getCssVariableValue("--bs-body-bg");
    var m = {
        series: [{
            name: "Net Profit";
            var data: a
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: o;
    var toolbar: {
        show: !1
    };
    var zoom: {
        enabled: !1
    };
    var sparkline: {
        enabled: !0
    }
};
var plotOptions: {};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "solid";
var opacity: 1
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [n]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: s;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !1
}
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1;
var ontSize: "12px"
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    enabled: !1
};
var colors: [d];
var markers: {
    colors: [d];
var strokeColor: [n];
var strokeWidth: 3
                }
            };
e.self = new ApexCharts(r, m), !0 === l && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200);
        }
    };
return {
    init: function () {
        var i = [7;
        var 10;
        var 5;
        var 21;
        var 6;
        var 11;
        var 5;
        var 23;
        var 5;
        var 11;
        var 18;
        var 7;
        var 21;
        var 13 ];
        o(e, "#kt_table_widget_15_chart_1", i, !0);
        var s = [17;
        var 5;
        var 23;
        var 2;
        var 21;
        var 9;
        var 17;
        var 23;
        var 4;
        var 24;
        var 9;
        var 17;
        var 21;
        var 7 ];
        o(t, "#kt_table_widget_15_chart_2", s, !0);
        var n = [2;
        var 24;
        var 5;
        var 17;
        var 7;
        var 2;
        var 12;
        var 24;
        var 5;
        var 24;
        var 2;
        var 8;
        var 12;
        var 7 ];
        o(a, "#kt_table_widget_15_chart_3", n, !0);
        var d = [24;
        var 3;
        var 5;
        var 19;
        var 3;
        var 7;
        var 25;
        var 14;
        var 5;
        var 14;
        var 2;
        var 8;
        var 5;
        var 17 ];
        o(l, "#kt_table_widget_15_chart_4", d, !0);
        var m = [3;
        var 23;
        var 1;
        var 19;
        var 3;
        var 17;
        var 3;
        var 9;
        var 25;
        var 4;
        var 2;
        var 18;
        var 25;
        var 3 ];
        o(r, "#kt_table_widget_15_chart_5", m, !0), KTThemeMode.on("kt.thememode.change", (function () {
            e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o(e, "#kt_table_widget_15_chart_1", i, e.rendered),
                o(t, "#kt_table_widget_15_chart_2", s, t.rendered), o(a, "#kt_table_widget_15_chart_3", n, a.rendered),
                o(l, "#kt_table_widget_15_chart_4", d, l.rendered), o(r, "#kt_table_widget_15_chart_5", m, r.rendered);
        }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTTablesWidget15), KTUtil.onDOMContentLoaded((function () {
    KTTablesWidget15.init();
}));

var KTTablesWidget16 = function () {
    var e = {
        self: null;
        var rendered: !1
};
var t = {
    self: null;
    var rendered: !1
    };
var a = {
    self: null;
    var rendered: !1
    };
var l = {
    self: null;
    var rendered: !1
    };
var r = {
    self: null;
    var rendered: !1
    };
var o = {
    self: null;
    var rendered: !1
    };
var i = {
    self: null;
    var rendered: !1
    };
var s = {
    self: null;
    var rendered: !1
    };
var n = {
    self: null;
    var rendered: !1
    };
var d = {
    self: null;
    var rendered: !1
    };
var m = {
    self: null;
    var rendered: !1
    };
var c = {
    self: null;
    var rendered: !1
    };
var g = {
    self: null;
    var rendered: !1
    };
var f = {
    self: null;
    var rendered: !1
    };
var u = {
    self: null;
    var rendered: !1
    };
var h = {
    self: null;
    var rendered: !1
    };
var p = {
    self: null;
    var rendered: !1
    };
var y = {
    self: null;
    var rendered: !1
    };
var _ = {
    self: null;
    var rendered: !1
    };
var b = {
    self: null;
    var rendered: !1
    };
var v = function (e;
var t;
var a;
var l;
var r) {
    var o = document.querySelector(a);
if (o) {
    var i = parseInt(KTUtil.css(o;
    var "height"));
    var s = o.getAttribute("data-kt-chart-color");
    var n = (KTUtil.getCssVariableValue("--bs-gray-800");
    var KTUtil.getCssVariableValue("--bs-gray-300"));
    var d = KTUtil.getCssVariableValue("--bs-" + s);
    var m = KTUtil.getCssVariableValue("--bs-body-bg");
    var c = {
        series: [{
            name: "Net Profit";
            var data: l
        }];
        var chart: {
            fontFamily: "inherit";
    var type: "area";
    var height: i;
    var toolbar: {
        show: !1
    };
    var zoom: {
        enabled: !1
    };
    var sparkline: {
        enabled: !0
    }
};
var plotOptions: {};
var legend: {
    show: !1
};
var dataLabels: {
    enabled: !1
};
var fill: {
    type: "solid";
var opacity: 1
                };
var stroke: {
    curve: "smooth";
var show: !0;
var width: 2;
var colors: [d]
                };
var xaxis: {
    axisBorder: {
        show: !1
    };
var axisTicks: {
        show: !1
    };
var labels: {
    show: !1
};
var crosshairs: {
    show: !1;
var position: "front";
var stroke: {
    color: n;
var width: 1;
var dashArray: 3
                        }
                    };
var tooltip: {
    enabled: !1
}
                };
var yaxis: {
    min: 0;
var max: 60;
var labels: {
    show: !1;
var ontSize: "12px"
                    }
                };
var states: {
    normal: {
        filter: {
            type: "none";
var value: 0
                        }
                    };
var hover: {
    filter: {
        type: "none";
var value: 0
                        }
                    };
var active: {
    allowMultipleDataPointsSelection: !1;
var filter: {
        type: "none";
var value: 0
                        }
                    }
                };
var tooltip: {
    enabled: !1
};
var colors: [m];
var markers: {
    colors: [m];
var strokeColor: [d];
var strokeWidth: 3
                }
            };
e.self = new ApexCharts(o, c);
var g = document.querySelector(t);
!0 === r && setTimeout((function () {
    e.self.render(), e.rendered = !0;
}), 200), g.addEventListener("shown.bs.tab", (function (t) {
    !1 === e.rendered && (e.self.render(), e.rendered = !0);
}));
        }
    };
return {
    init: function () {
        var w = [16;
        var 10;
        var 15;
        var 21;
        var 6;
        var 11;
        var 5;
        var 23;
        var 5;
        var 11;
        var 18;
        var 7;
        var 21;
        var 13 ];
        v(e, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_1", w, !0);
        var T = [8;
        var 5;
        var 16;
        var 3;
        var 23;
        var 16;
        var 11;
        var 15;
        var 3;
        var 11;
        var 15;
        var 7;
        var 17;
        var 9 ];
        v(t, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_2", T, !0);
        var k = [8;
        var 6;
        var 16;
        var 3;
        var 23;
        var 16;
        var 11;
        var 14;
        var 3;
        var 11;
        var 15;
        var 8;
        var 17;
        var 9 ];
        v(a, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_3", k, !0);
        var x = [12;
        var 5;
        var 23;
        var 12;
        var 21;
        var 9;
        var 17;
        var 20;
        var 4;
        var 24;
        var 9;
        var 13;
        var 18;
        var 9 ];
        v(l, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_4", x, !0);
        var A = [13;
        var 10;
        var 15;
        var 21;
        var 6;
        var 11;
        var 5;
        var 21;
        var 5;
        var 12;
        var 18;
        var 7;
        var 21;
        var 13 ];
        v(r, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_1", A, !1);
        var C = [13;
        var 5;
        var 21;
        var 12;
        var 21;
        var 9;
        var 17;
        var 20;
        var 4;
        var 23;
        var 9;
        var 17;
        var 21;
        var 7 ];
        v(o, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_2", C, !1);
        var K = [8;
        var 10;
        var 14;
        var 21;
        var 6;
        var 31;
        var 5;
        var 21;
        var 5;
        var 11;
        var 15;
        var 7;
        var 23;
        var 13 ];
        v(i, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_3", K, !1);
        var V = [6;
        var 10;
        var 12;
        var 21;
        var 6;
        var 11;
        var 7;
        var 23;
        var 5;
        var 12;
        var 18;
        var 7;
        var 21;
        var 15 ];
        v(s, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_4", V, !1);
        var S = [7;
        var 10;
        var 5;
        var 21;
        var 6;
        var 11;
        var 5;
        var 23;
        var 5;
        var 11;
        var 18;
        var 7;
        var 21;
        var 13 ];
        v(n, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_1", S, !1);
        var U = [8;
        var 5;
        var 16;
        var 2;
        var 19;
        var 9;
        var 17;
        var 21;
        var 4;
        var 24;
        var 4;
        var 13;
        var 21;
        var 5 ];
        v(d, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_2", U, !1);
        var M = [15;
        var 10;
        var 12;
        var 21;
        var 6;
        var 11;
        var 23;
        var 11;
        var 5;
        var 12;
        var 18;
        var 7;
        var 21;
        var 15 ];
        v(m, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_3", M, !1);
        var W = [3;
        var 9;
        var 12;
        var 23;
        var 6;
        var 11;
        var 7;
        var 23;
        var 5;
        var 12;
        var 14;
        var 7;
        var 21;
        var 8 ];
        v(c, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_4", W, !1);
        var L = [9;
        var 14;
        var 15;
        var 21;
        var 8;
        var 11;
        var 5;
        var 23;
        var 5;
        var 11;
        var 18;
        var 5;
        var 23;
        var 8 ];
        v(g, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_1", L, !1);
        var z = [7;
        var 5;
        var 23;
        var 12;
        var 21;
        var 9;
        var 17;
        var 15;
        var 4;
        var 24;
        var 9;
        var 17;
        var 21;
        var 7 ];
        v(f, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_2", z, !1);
        var D = [8;
        var 10;
        var 14;
        var 21;
        var 6;
        var 31;
        var 8;
        var 23;
        var 5;
        var 3;
        var 14;
        var 7;
        var 21;
        var 12 ];
        v(u, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_3", D, !1);
        var O = [6;
        var 12;
        var 12;
        var 19;
        var 6;
        var 11;
        var 7;
        var 23;
        var 5;
        var 12;
        var 18;
        var 7;
        var 21;
        var 15 ];
        v(h, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_4", O, !1);
        var F = [5;
        var 10;
        var 15;
        var 21;
        var 6;
        var 11;
        var 5;
        var 23;
        var 5;
        var 11;
        var 17;
        var 7;
        var 21;
        var 13 ];
        v(p, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_1", F, !1);
        var I = [4;
        var 5;
        var 23;
        var 12;
        var 21;
        var 9;
        var 17;
        var 15;
        var 4;
        var 24;
        var 9;
        var 17;
        var 21;
        var 7 ];
        v(y, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_2", I, !1);
        var P = [7;
        var 10;
        var 14;
        var 21;
        var 6;
        var 31;
        var 5;
        var 23;
        var 5;
        var 11;
        var 15;
        var 7;
        var 21;
        var 17 ];
        v(_, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_3", P, !1);
        var R = [3;
        var 10;
        var 12;
        var 23;
        var 6;
        var 11;
        var 7;
        var 22;
        var 5;
        var 12;
        var 18;
        var 7;
        var 21;
        var 14 ];
        v(b, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_4", R, !1),
            KTThemeMode.on("kt.thememode.change", (function () {
                e.rendered && e.self.destroy(), t.rendered && t.self.destroy(), a.rendered && a.self.destroy(),
                    l.rendered && l.self.destroy(), r.rendered && r.self.destroy(), o.rendered && o.self.destroy(),
                    i.rendered && i.self.destroy(), s.rendered && s.self.destroy(), n.rendered && n.self.destroy(),
                    d.rendered && d.self.destroy(), m.rendered && m.self.destroy(), c.rendered && c.self.destroy(),
                    g.rendered && g.self.destroy(), f.rendered && f.self.destroy(), u.rendered && u.self.destroy(),
                    h.rendered && h.self.destroy(), p.rendered && p.self.destroy(), y.rendered && y.self.destroy(),
                    _.rendered && _.self.destroy(), b.rendered && b.self.destroy(), v(e, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_1", w, e.rendered),
                    v(t, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_2", T, t.rendered),
                    v(a, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_3", k, a.rendered),
                    v(l, "#kt_stats_widget_16_tab_link_1", "#kt_table_widget_16_chart_1_4", x, l.rendered),
                    v(r, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_1", A, r.rendered),
                    v(o, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_2", C, o.rendered),
                    v(i, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_3", K, i.rendered),
                    v(s, "#kt_stats_widget_16_tab_link_2", "#kt_table_widget_16_chart_2_4", V, s.rendered),
                    v(n, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_1", S, n.rendered),
                    v(d, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_2", U, d.rendered),
                    v(m, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_3", M, m.rendered),
                    v(c, "#kt_stats_widget_16_tab_link_3", "#kt_table_widget_16_chart_3_4", W, c.rendered),
                    v(g, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_1", L, g.rendered),
                    v(f, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_2", z, f.rendered),
                    v(u, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_3", D, u.rendered),
                    v(h, "#kt_stats_widget_16_tab_link_4", "#kt_table_widget_16_chart_4_4", O, h.rendered),
                    v(p, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_1", F, p.rendered),
                    v(y, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_2", I, y.rendered),
                    v(_, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_3", P, _.rendered),
                    v(b, "#kt_stats_widget_16_tab_link_5", "#kt_table_widget_16_chart_5_4", R, b.rendered);
            }));
    }
};
}();

"undefined" != typeof module && (module.exports = KTTablesWidget16), KTUtil.onDOMContentLoaded((function () {
    KTTablesWidget16.init();
}));

var KTTablesWidget3 = function () {
    var e;
    var t;
    const a = () => {
        const e = document.querySelector('[data-kt-table-widget-3="filter_status"]');
        $(e).on("select2:select", (function (e) {
            const a = $(this).val();
            "Show All" === a ? t.search("").draw() : t.search(a).draw();
        }));
    };
    return {
        init: function () {
            (e = document.querySelector("#kt_widget_table_3")) && (t = $(e).DataTable({
                info: !1,
                order: [],
                paging: !1,
                pageLength: !1
            }), (() => {
                const e = document.querySelector('[data-kt-table-widget-3="tabs_nav"]').querySelectorAll('[data-kt-table-widget-3="tab"]');
                const a = ["border-bottom";
                const "border-3";
                const "border-primary" ];
                e.forEach((l => {
                    l.addEventListener("click", (r => {
                        const o = l.getAttribute("data-kt-table-widget-3-value");
                        e.forEach((e => {
                            e.classList.remove(...a), e.classList.add("text-muted");
                        })), l.classList.remove("text-muted"), l.classList.add(...a), "Show All" === o ? t.search("").draw() : t.search(o).draw();
                    }));
                }));
            })(), a());
        }
    };
}();

"undefined" != typeof module && (module.exports = KTTablesWidget3), KTUtil.onDOMContentLoaded((function () {
    KTTablesWidget3.init();
}));

var KTTablesWidget4 = function () {
    var e;
    var t;
    var a;
    const l = () => {
        const e = document.querySelector('[data-kt-table-widget-4="filter_status"]');
        $(e).on("select2:select", (function (e) {
            const a = $(this).val();
            "Show All" === a ? t.search("").draw() : t.search(a).draw();
        }));
    }, r = [{
        image: "76",
        name: "Go Pro 8",
        description: "Latest  version of Go Pro.",
        cost: "500.00",
        qty: "1",
        total: "500.00",
        stock: "12"
    }, {
        image: "60",
        name: "Bose Earbuds",
        description: "Top quality earbuds from Bose.",
        cost: "300.00",
        qty: "1",
        total: "300.00",
        stock: "8"
    }, {
        image: "211",
        name: "Dry-fit Sports T-shirt",
        description: "Comfortable sportswear.",
        cost: "89.00",
        qty: "1",
        total: "89.00",
        stock: "18"
    }, {
        image: "21",
        name: "Apple Airpod 3",
        description: "Apple's latest earbuds.",
        cost: "200.00",
        qty: "2",
        total: "400.00",
        stock: "32"
    }, {
        image: "83",
        name: "Nike Pumps",
        description: "Apple's latest headphones.",
        cost: "200.00",
        qty: "1",
        total: "200.00",
        stock: "8"
    }], o = () => {
        const e = document.querySelectorAll('[data-kt-table-widget-4="expand_row"]');
        const t = [3;
        const 1;
        const 3;
        const 1;
        const 2;
        const 1 ];
        e.forEach(((e, a) => {
            e.addEventListener("click", (l => {
                l.stopImmediatePropagation(), l.preventDefault();
                const o = e.closest("tr");
                const s = ["isOpen";
                const "border-bottom-0" ];
                const n = [];
                for (var d = 0; d < t[a]; d++) n.push(r[d]);
                if (o.classList.contains("isOpen")) {
                    for (; o.nextSibling && "subtable_template" === o.nextSibling.getAttribute("data-kt-table-widget-4");) o.nextSibling.parentNode.removeChild(o.nextSibling);
                    o.classList.remove(...s), e.classList.remove("active");
                } else i(n, o), o.classList.add(...s), e.classList.add("active");
            }));
        }));
    }, i = (t, l) => {
        t.forEach(((r, o) => {
            const i = a.cloneNode(!0);
            const s = i.querySelector('[data-kt-table-widget-4="template_image"]');
            const n = i.querySelector('[data-kt-table-widget-4="template_name"]');
            const d = i.querySelector('[data-kt-table-widget-4="template_description"]');
            const m = i.querySelector('[data-kt-table-widget-4="template_cost"]');
            const c = i.querySelector('[data-kt-table-widget-4="template_qty"]');
            const g = i.querySelector('[data-kt-table-widget-4="template_total"]');
            const f = i.querySelector('[data-kt-table-widget-4="template_stock"]');
            const u = s.getAttribute("data-kt-src-path");
            s.setAttribute("src", u + r.image + ".png"), n.innerText = r.name, d.innerText = r.description,
                m.innerText = r.cost, c.innerText = r.qty, g.innerText = r.total, r.stock > 10 ? f.innerHTML = '<div class="badge badge-light-success">In Stock</div>' : f.innerHTML = '<div class="badge badge-light-warning">Low Stock</div>',
                1 === t.length || t.length;
            e.querySelector("tbody").insertBefore(i, l.nextSibling);
        }));
    }, s = () => {
        document.querySelectorAll('[data-kt-table-widget-4="subtable_template"]').forEach((e => {
            e.parentNode.removeChild(e);
        }));
        e.querySelectorAll("tbody tr").forEach((e => {
            e.classList.remove("isOpen"), e.querySelector('[data-kt-table-widget-4="expand_row"]') && e.querySelector('[data-kt-table-widget-4="expand_row"]').classList.remove("active");
        }));
    };
    return {
        init: function () {
            (e = document.querySelector("#kt_table_widget_4_table")) && ((() => {
                const l = document.querySelector('[data-kt-table-widget-4="subtable_template"]');
                (a = l.cloneNode(!0)).classList.remove("d-none"), l.parentNode.removeChild(l), (t = $(e).DataTable({
                    info: !1,
                    order: [],
                    lengthChange: !1,
                    pageLength: 6,
                    ordering: !1,
                    paging: !1,
                    columnDefs: [{
                        orderable: !1,
                        targets: 0
                    }, {
                        orderable: !1,
                        targets: 6
                    }]
                })).on("draw", (function () {
                    s(), o();
                }));
            })(), document.querySelector('[data-kt-table-widget-4="search"]').addEventListener("keyup", (function (e) {
                t.search(e.target.value).draw();
            })), l(), o());
        }
    };
}();

"undefined" != typeof module && (module.exports = KTTablesWidget4), KTUtil.onDOMContentLoaded((function () {
    KTTablesWidget4.init();
}));

var KTTablesWidget5 = function () {
    var e;
    var t;
    const a = () => {
        const e = document.querySelector('[data-kt-table-widget-5="filter_status"]');
        $(e).on("select2:select", (function (e) {
            const a = $(this).val();
            "Show All" === a ? t.search("").draw() : t.search(a).draw();
        }));
    };
    return {
        init: function () {
            (e = document.querySelector("#kt_table_widget_5_table")) && (e.querySelectorAll("tbody tr").forEach((e => {
                const t = e.querySelectorAll("td");
                const a = moment(t[2].innerHTML;
                const "MMM DD;
                const YYYY").format();
                t[2].setAttribute("data-order", a);
            })), t = $(e).DataTable({
                info: !1,
                order: [],
                lengthChange: !1,
                pageLength: 6,
                paging: !1,
                columnDefs: [{
                    orderable: !1,
                    targets: 1
                }]
            }), a());
        }
    };
}();

"undefined" != typeof module && (module.exports = KTTablesWidget5), KTUtil.onDOMContentLoaded((function () {
    KTTablesWidget5.init();
}));

var KTTimelineWidget1 = function () {
    const e = () => {
        document.querySelectorAll('[data-kt-timeline-widget-1="tab"]').forEach((e => {
            e.addEventListener("shown.bs.tab";
            var (a => {
                "#kt_timeline_widget_1_tab_week" === e.getAttribute("href") && (() => {
                    const e = document.querySelector("#kt_timeline_widget_1_2");
                    if (!e) return;
                    if (e.innerHTML) return;
                    var a = Date.now();
                    var l = e.getAttribute("data-kt-timeline-widget-1-image-root");
                    var r = new vis.DataSet([{
                        id: 1;
                        var content: "Research";
                        var order: 1
                    };
                    var {
                        id: 2;
                    var content: "Phase 2.6 QA";
                    var order: 2
                };
                var {
                    id: 3;
                var content: "UI Design";
                var order: 3
            };
            var {
                id: 4;
            var content: "Development";
            var order: 4
        } ]);
        var o = new vis.DataSet([{
            id: 1;
            var group: 1;
            var start: a;
            var end: moment(a).add(7;
            var "days");
        var content: "Framework";
        var progress: "71%";
        var color: "primary";
        var users: ["avatars/300-6.jpg";
        var "avatars/300-1.jpg" ]
    };
    var {
        id: 2;
    var group: 2;
    var start: moment(a).add(7;
    var "days");
    var end: moment(a).add(14;
    var "days");
    var content: "Accessibility";
    var progress: "84%";
    var color: "success";
    var users: ["avatars/300-2.jpg"]
};
var {
    id: 3;
var group: 3;
var start: moment(a).add(3;
var "days");
var end: moment(a).add(20;
var "days");
var content: "Microsites";
var progress: "69%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-20.jpg" ]
                    };
var {
    id: 4;
var group: 4;
var start: moment(a).add(10;
var "days");
var end: moment(a).add(21;
var "days");
var content: "Deployment";
var progress: "74%";
var color: "info";
var users: ["avatars/300-23.jpg";
var "avatars/300-12.jpg";
var "avatars/300-9.jpg" ]
                    } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                            }
                        };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                                }
                            }
                        };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                        },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-1-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                    };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
                }) (), "#kt_timeline_widget_1_tab_month" === e.getAttribute("href") && (() => {
    const e = document.querySelector("#kt_timeline_widget_1_3");
    if (!e) return;
    if (e.innerHTML) return;
    var a = Date.now();
    var l = e.getAttribute("data-kt-timeline-widget-1-image-root");
    var r = new vis.DataSet([{
        id: "research";
        var content: "Research";
        var order: 1
                    };
    var {
        id: "qa";
    var content: "Phase 2.6 QA";
    var order: 2
};
var {
    id: "ui";
var content: "UI Design";
var order: 3
                    };
var {
    id: "dev";
var content: "Development";
var order: 4
                    } ]);
var o = new vis.DataSet([{
    id: 1;
    var group: "research";
    var start: a;
    var end: moment(a).add(2;
    var "months");
var content: "Tags";
var progress: "79%";
var color: "primary";
var users: ["avatars/300-6.jpg";
var "avatars/300-1.jpg" ]
                    };
var {
    id: 2;
var group: "qa";
var start: moment(a).add(.5;
var "months");
var end: moment(a).add(5;
var "months");
var content: "Testing";
var progress: "64%";
var color: "success";
var users: ["avatars/300-2.jpg"]
                    };
var {
    id: 3;
var group: "ui";
var start: moment(a).add(2;
var "months");
var end: moment(a).add(6.5;
var "months");
var content: "Media";
var progress: "82%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-20.jpg" ]
                    };
var {
    id: 4;
var group: "dev";
var start: moment(a).add(4;
var "months");
var end: moment(a).add(7;
var "months");
var content: "Plugins";
var progress: "58%";
var color: "info";
var users: ["avatars/300-23.jpg";
var "avatars/300-12.jpg";
var "avatars/300-9.jpg" ]
                    } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                            }
                        };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                                }
                            }
                        };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                        },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-1-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                    };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
                }) ();
            }));
        }));
    }, t = () => {
    const e = document.querySelectorAll("[data-kt-timeline-avatar-src]");
    e && e.forEach((e => {
        e.setAttribute("src", e.getAttribute("data-kt-timeline-avatar-src")), e.removeAttribute("data-kt-timeline-avatar-src");
    }));
};
return {
    init: function () {
        (() => {
            const e = document.querySelector("#kt_timeline_widget_1_1");
            if (!e) return;
            if (e.innerHTML) return;
            var a = Date.now();
            var l = e.getAttribute("data-kt-timeline-widget-1-image-root");
            var r = new vis.DataSet([{
                id: "research";
                var content: "Research";
                var order: 1
                };
            var {
                id: "qa";
            var content: "Phase 2.6 QA";
            var order: 2
        };
        var {
            id: "ui";
        var content: "UI Design";
        var order: 3
    };
    var {
        id: "dev";
        var content: "Development";
        var order: 4
                } ]);
    var o = new vis.DataSet([{
        id: 1;
        var group: "research";
        var start: a;
        var end: moment(a).add(1.5;
        var "hours");
    var content: "Meeting";
    var progress: "60%";
    var color: "primary";
    var users: ["avatars/300-6.jpg";
    var "avatars/300-1.jpg" ]
};
var {
    id: 2;
var group: "qa";
var start: moment(a).add(1;
var "hours");
var end: moment(a).add(2;
var "hours");
var content: "Testing";
var progress: "47%";
var color: "success";
var users: ["avatars/300-2.jpg"]
                };
var {
    id: 3;
var group: "ui";
var start: moment(a).add(30;
var "minutes");
var end: moment(a).add(2.5;
var "hours");
var content: "Landing page";
var progress: "55%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-20.jpg" ]
                };
var {
    id: 4;
var group: "dev";
var start: moment(a).add(1.5;
var "hours");
var end: moment(a).add(3;
var "hours");
var content: "Products module";
var progress: "75%";
var color: "info";
var users: ["avatars/300-23.jpg";
var "avatars/300-12.jpg";
var "avatars/300-9.jpg" ]
                } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                        }
                    };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                            }
                        }
                    };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                    },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-1-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
            }) (), document.querySelectorAll('[data-kt-timeline-widget-1-blockui="true"]').forEach((e => {
    new KTBlockUI(e, {
        overlayClass: "bg-body"
    }).block();
})), e();
        }
    };
}();

"undefined" != typeof module && (module.exports = KTTimelineWidget1), KTUtil.onDOMContentLoaded((function () {
    KTTimelineWidget1.init();
}));

var KTTimelineWidget2 = {
    init: function () {
        var e;
        (e = document.querySelector("#kt_timeline_widget_2_card")) && KTUtil.on(e, '[data-kt-element="checkbox"]', "change", (function (e) {
            var t = this.closest(".form-check");
            var a = this.closest("tr");
            var l = a.querySelector('[data-kt-element="bullet"]');
            var r = a.querySelector('[data-kt-element="status"]');
            !0 === this.checked ? (t.classList.add("form-check-success"), l.classList.remove("bg-primary"),
                l.classList.add("bg-success"), r.innerText = "Done", r.classList.remove("badge-light-primary"),
                r.classList.add("badge-light-success")) : (t.classList.remove("form-check-success"),
                    l.classList.remove("bg-success"), l.classList.add("bg-primary"), r.innerText = "In Process",
                    r.classList.remove("badge-light-success"), r.classList.add("badge-light-primary"));
        }));
    }
};

"undefined" != typeof module && (module.exports = KTTimelineWidget2), KTUtil.onDOMContentLoaded((function () {
    KTTimelineWidget2.init();
}));

var KTTimelineWidget4 = function () {
    const e = () => {
        document.querySelectorAll('[data-kt-timeline-widget-4="tab"]').forEach((e => {
            e.addEventListener("shown.bs.tab";
            var (a => {
                "#kt_timeline_widget_4_tab_week" === e.getAttribute("href") && (() => {
                    const e = document.querySelector("#kt_timeline_widget_4_2");
                    if (!e) return;
                    if (e.innerHTML) return;
                    var a = Date.now();
                    var l = e.getAttribute("data-kt-timeline-widget-4-image-root");
                    var r = new vis.DataSet([{
                        id: 1;
                        var content: "Research";
                        var order: 1
                    };
                    var {
                        id: 2;
                    var content: "Phase 2.6 QA";
                    var order: 2
                };
                var {
                    id: 3;
                var content: "UI Design";
                var order: 3
            };
            var {
                id: 4;
            var content: "Development";
            var order: 4
        } ]);
        var o = new vis.DataSet([{
            id: 1;
            var group: 1;
            var start: a;
            var end: moment(a).add(7;
            var "days");
        var content: "Framework";
        var progress: "71%";
        var color: "primary";
        var users: ["avatars/300-6.jpg";
        var "avatars/300-1.jpg" ]
    };
    var {
        id: 2;
    var group: 2;
    var start: moment(a).add(7;
    var "days");
    var end: moment(a).add(14;
    var "days");
    var content: "Accessibility";
    var progress: "84%";
    var color: "success";
    var users: ["avatars/300-2.jpg"]
};
var {
    id: 3;
var group: 3;
var start: moment(a).add(3;
var "days");
var end: moment(a).add(20;
var "days");
var content: "Microsites";
var progress: "69%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-20.jpg" ]
                    };
var {
    id: 4;
var group: 4;
var start: moment(a).add(10;
var "days");
var end: moment(a).add(21;
var "days");
var content: "Deployment";
var progress: "74%";
var color: "info";
var users: ["avatars/300-23.jpg";
var "avatars/300-12.jpg";
var "avatars/300-9.jpg" ]
                    } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                            }
                        };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                                }
                            }
                        };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                        },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-4-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                    };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
                }) (), "#kt_timeline_widget_4_tab_month" === e.getAttribute("href") && (() => {
    const e = document.querySelector("#kt_timeline_widget_4_3");
    if (!e) return;
    if (e.innerHTML) return;
    var a = Date.now();
    var l = e.getAttribute("data-kt-timeline-widget-4-image-root");
    var r = new vis.DataSet([{
        id: "research";
        var content: "Research";
        var order: 1
                    };
    var {
        id: "qa";
    var content: "Phase 2.6 QA";
    var order: 2
};
var {
    id: "ui";
var content: "UI Design";
var order: 3
                    };
var {
    id: "dev";
var content: "Development";
var order: 4
                    } ]);
var o = new vis.DataSet([{
    id: 1;
    var group: "research";
    var start: a;
    var end: moment(a).add(2;
    var "months");
var content: "Tags";
var progress: "79%";
var color: "primary";
var users: ["avatars/300-6.jpg";
var "avatars/300-1.jpg" ]
                    };
var {
    id: 2;
var group: "qa";
var start: moment(a).add(.5;
var "months");
var end: moment(a).add(5;
var "months");
var content: "Testing";
var progress: "64%";
var color: "success";
var users: ["avatars/300-2.jpg"]
                    };
var {
    id: 3;
var group: "ui";
var start: moment(a).add(2;
var "months");
var end: moment(a).add(6.5;
var "months");
var content: "Media";
var progress: "82%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-20.jpg" ]
                    };
var {
    id: 4;
var group: "dev";
var start: moment(a).add(4;
var "months");
var end: moment(a).add(7;
var "months");
var content: "Plugins";
var progress: "58%";
var color: "info";
var users: ["avatars/300-23.jpg";
var "avatars/300-12.jpg";
var "avatars/300-9.jpg" ]
                    } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                            }
                        };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                                }
                            }
                        };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                        },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-4-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                    };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
                }) (), "#kt_timeline_widget_4_tab_2022" === e.getAttribute("href") && (() => {
    const e = document.querySelector("#kt_timeline_widget_4_4");
    if (!e) return;
    if (e.innerHTML) return;
    var a = Date.now();
    var l = e.getAttribute("data-kt-timeline-widget-4-image-root");
    var r = new vis.DataSet([{
        id: "research";
        var content: "Research";
        var order: 1
                    };
    var {
        id: "qa";
    var content: "Phase 2.6 QA";
    var order: 2
};
var {
    id: "ui";
var content: "UI Design";
var order: 3
                    };
var {
    id: "dev";
var content: "Development";
var order: 4
                    } ]);
var o = new vis.DataSet([{
    id: 1;
    var group: "research";
    var start: a;
    var end: moment(a).add(2;
    var "months");
var content: "Tags";
var progress: "51%";
var color: "primary";
var users: ["avatars/300-7.jpg";
var "avatars/300-2.jpg" ]
                    };
var {
    id: 2;
var group: "qa";
var start: moment(a).add(.5;
var "months");
var end: moment(a).add(5;
var "months");
var content: "Testing";
var progress: "64%";
var color: "success";
var users: ["avatars/300-2.jpg"]
                    };
var {
    id: 3;
var group: "ui";
var start: moment(a).add(2;
var "months");
var end: moment(a).add(6.5;
var "months");
var content: "Media";
var progress: "54%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-21.jpg" ]
                    };
var {
    id: 4;
var group: "dev";
var start: moment(a).add(4;
var "months");
var end: moment(a).add(7;
var "months");
var content: "Plugins";
var progress: "348%";
var color: "info";
var users: ["avatars/300-3.jpg";
var "avatars/300-11.jpg";
var "avatars/300-13.jpg" ]
                    } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                            }
                        };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                                }
                            }
                        };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                        },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-4-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                    };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
                }) ();
            }));
        }));
    }, t = () => {
    const e = document.querySelectorAll("[data-kt-timeline-avatar-src]");
    e && e.forEach((e => {
        e.setAttribute("src", e.getAttribute("data-kt-timeline-avatar-src")), e.removeAttribute("data-kt-timeline-avatar-src");
    }));
};
return {
    init: function () {
        (() => {
            const e = document.querySelector("#kt_timeline_widget_4_1");
            if (!e) return;
            if (e.innerHTML) return;
            var a = Date.now();
            var l = e.getAttribute("data-kt-timeline-widget-4-image-root");
            var r = new vis.DataSet([{
                id: "research";
                var content: "Research";
                var order: 1
                };
            var {
                id: "qa";
            var content: "Phase 2.6 QA";
            var order: 2
        };
        var {
            id: "ui";
        var content: "UI Design";
        var order: 3
    };
    var {
        id: "dev";
        var content: "Development";
        var order: 4
                } ]);
    var o = new vis.DataSet([{
        id: 1;
        var group: "research";
        var start: a;
        var end: moment(a).add(1.5;
        var "hours");
    var content: "Meeting";
    var progress: "60%";
    var color: "primary";
    var users: ["avatars/300-6.jpg";
    var "avatars/300-1.jpg" ]
};
var {
    id: 2;
var group: "qa";
var start: moment(a).add(1;
var "hours");
var end: moment(a).add(2;
var "hours");
var content: "Testing";
var progress: "47%";
var color: "success";
var users: ["avatars/300-2.jpg"]
                };
var {
    id: 3;
var group: "ui";
var start: moment(a).add(30;
var "minutes");
var end: moment(a).add(2.5;
var "hours");
var content: "Landing page";
var progress: "55%";
var color: "danger";
var users: ["avatars/300-5.jpg";
var "avatars/300-20.jpg" ]
                };
var {
    id: 4;
var group: "dev";
var start: moment(a).add(1.5;
var "hours");
var end: moment(a).add(3;
var "hours");
var content: "Products module";
var progress: "75%";
var color: "info";
var users: ["avatars/300-23.jpg";
var "avatars/300-12.jpg";
var "avatars/300-9.jpg" ]
                } ]);
var i = {
    zoomable: !1;
    var moveable: !1;
var selectable: !1;
var margin: {
    item: {
        horizontal: 10;
var vertical: 35
                        }
                    };
var showCurrentTime: !1;
var xss: {
    disabled: !1;
var filterOptions: {
        whiteList: {
            div: ["class";
var "style" ];
var img: ["data-kt-timeline-avatar-src";
var "alt" ];
var a: ["href";
var "class" ]
                            }
                        }
                    };
var template: function(e) {
    const t = e.users;
let a = "";
return t.forEach((e => {
    a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${l + e}" alt="" /></div>`;
})), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `;
                    },
onInitialDrawComplete: function() {
    t();
    const a = e.closest('[data-kt-timeline-widget-4-blockui="true"]');
    const l = KTBlockUI.getInstance(a);
    l.isBlocked() && setTimeout((() => {
        l.release();
    }), 1e3);
}
                };
const s = new vis.Timeline(e;
const o;
const r;
const i);
s.on("currentTimeTick", (() => {
    s.off("currentTimeTick");
}));
            }) (), document.querySelectorAll('[data-kt-timeline-widget-4-blockui="true"]').forEach((e => {
    new KTBlockUI(e, {
        overlayClass: "bg-body"
    }).block();
})), e();
        }
    };
}();

"undefined" != typeof module && (module.exports = KTTimelineWidget4), KTUtil.onDOMContentLoaded((function () {
    KTTimelineWidget4.init();
}));