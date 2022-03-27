/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.afffa558.chunk.js.LICENSE.txt */
(this.webpackJsonpdashboard = this.webpackJsonpdashboard || []).push([
    [0], {
        361: function (e, t) {},
        363: function (e, t) {},
        367: function (e, t) {},
        368: function (e, t) {},
        392: function (e, t) {},
        394: function (e, t) {},
        404: function (e, t) {},
        406: function (e, t) {},
        416: function (e, t) {},
        418: function (e, t) {},
        434: function (e, t) {},
        465: function (e, t) {},
        466: function (e, t) {},
        47: function (e, t) {
            let n = {
                    maintainAspectRatio: !1,
                    legend: {
                        display: !1
                    },
                    tooltips: {
                        backgroundColor: "#f5f5f5",
                        titleFontColor: "#333",
                        bodyFontColor: "#666",
                        bodySpacing: 4,
                        xPadding: 12,
                        mode: "nearest",
                        intersect: 0,
                        position: "nearest"
                    },
                    responsive: !0,
                    scales: {
                        yAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: !1,
                                color: "rgba(29,140,248,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                suggestedMin: 60,
                                suggestedMax: 125,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }],
                        xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: !1,
                                color: "rgba(29,140,248,0.1)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }]
                    }
                },
                a = {
                    data1: e => {
                        let t = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
                        return t.addColorStop(1, "rgba(29,140,248,0.2)"), t.addColorStop(.4, "rgba(29,140,248,0.0)"), t.addColorStop(0, "rgba(29,140,248,0)"), {
                            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                            datasets: [{
                                label: "My First dataset",
                                fill: !0,
                                backgroundColor: t,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0,
                                pointBackgroundColor: "#1f8ef1",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#1f8ef1",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
                            }]
                        }
                    },
                    data2: e => {
                        let t = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
                        return t.addColorStop(1, "rgba(29,140,248,0.2)"), t.addColorStop(.4, "rgba(29,140,248,0.0)"), t.addColorStop(0, "rgba(29,140,248,0)"), {
                            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                            datasets: [{
                                label: "My First dataset",
                                fill: !0,
                                backgroundColor: t,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0,
                                pointBackgroundColor: "#1f8ef1",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#1f8ef1",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120]
                            }]
                        }
                    },
                    data3: e => {
                        let t = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
                        return t.addColorStop(1, "rgba(29,140,248,0.2)"), t.addColorStop(.4, "rgba(29,140,248,0.0)"), t.addColorStop(0, "rgba(29,140,248,0)"), {
                            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                            datasets: [{
                                label: "My First dataset",
                                fill: !0,
                                backgroundColor: t,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0,
                                pointBackgroundColor: "#1f8ef1",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#1f8ef1",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
                            }]
                        }
                    },
                    options: n
                },
                r = {
                    data: e => {
                        let t = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
                        return t.addColorStop(1, "rgba(29,140,248,0.2)"), t.addColorStop(.4, "rgba(29,140,248,0.0)"), t.addColorStop(0, "rgba(29,140,248,0)"), {
                            labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                            datasets: [{
                                label: "Data",
                                fill: !0,
                                backgroundColor: t,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0,
                                pointBackgroundColor: "#1f8ef1",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#1f8ef1",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [80, 100, 70, 80, 120, 80]
                            }]
                        }
                    },
                    options: n
                };
            e.exports = {
                chartExample1: a,
                chartExample2: r,
                chartExample3: {
                    data: e => {
                        let t = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
                        return t.addColorStop(1, "rgba(72,72,176,0.1)"), t.addColorStop(.4, "rgba(72,72,176,0.0)"), t.addColorStop(0, "rgba(119,52,169,0)"), {
                            labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
                            datasets: [{
                                label: "Countries",
                                fill: !0,
                                backgroundColor: t,
                                hoverBackgroundColor: t,
                                borderColor: "#d048b6",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0,
                                data: [53, 20, 10, 80, 100, 45]
                            }]
                        }
                    },
                    options: {
                        maintainAspectRatio: !1,
                        legend: {
                            display: !1
                        },
                        tooltips: {
                            backgroundColor: "#f5f5f5",
                            titleFontColor: "#333",
                            bodyFontColor: "#666",
                            bodySpacing: 4,
                            xPadding: 12,
                            mode: "nearest",
                            intersect: 0,
                            position: "nearest"
                        },
                        responsive: !0,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    drawBorder: !1,
                                    color: "rgba(225,78,202,0.1)",
                                    zeroLineColor: "transparent"
                                },
                                ticks: {
                                    suggestedMin: 60,
                                    suggestedMax: 120,
                                    padding: 20,
                                    fontColor: "#9e9e9e"
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    drawBorder: !1,
                                    color: "rgba(225,78,202,0.1)",
                                    zeroLineColor: "transparent"
                                },
                                ticks: {
                                    padding: 20,
                                    fontColor: "#9e9e9e"
                                }
                            }]
                        }
                    }
                },
                chartExample4: {
                    data: e => {
                        let t = e.getContext("2d").createLinearGradient(0, 230, 0, 50);
                        return t.addColorStop(1, "rgba(66,134,121,0.15)"), t.addColorStop(.4, "rgba(66,134,121,0.0)"), t.addColorStop(0, "rgba(66,134,121,0)"), {
                            labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
                            datasets: [{
                                label: "My First dataset",
                                fill: !0,
                                backgroundColor: t,
                                borderColor: "#00d6b4",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0,
                                pointBackgroundColor: "#00d6b4",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#00d6b4",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: [90, 27, 60, 12, 80]
                            }]
                        }
                    },
                    options: {
                        maintainAspectRatio: !1,
                        legend: {
                            display: !1
                        },
                        tooltips: {
                            backgroundColor: "#f5f5f5",
                            titleFontColor: "#333",
                            bodyFontColor: "#666",
                            bodySpacing: 4,
                            xPadding: 12,
                            mode: "nearest",
                            intersect: 0,
                            position: "nearest"
                        },
                        responsive: !0,
                        scales: {
                            yAxes: [{
                                barPercentage: 1.6,
                                gridLines: {
                                    drawBorder: !1,
                                    color: "rgba(29,140,248,0.0)",
                                    zeroLineColor: "transparent"
                                },
                                ticks: {
                                    suggestedMin: 50,
                                    suggestedMax: 125,
                                    padding: 20,
                                    fontColor: "#9e9e9e"
                                }
                            }],
                            xAxes: [{
                                barPercentage: 1.6,
                                gridLines: {
                                    drawBorder: !1,
                                    color: "rgba(0,242,195,0.1)",
                                    zeroLineColor: "transparent"
                                },
                                ticks: {
                                    padding: 20,
                                    fontColor: "#9e9e9e"
                                }
                            }]
                        }
                    }
                }
            }
        },
        531: function (e, t) {},
        533: function (e, t) {},
        538: function (e, t) {},
        540: function (e, t) {},
        547: function (e, t) {},
        559: function (e, t) {},
        562: function (e, t) {},
        567: function (e, t) {},
        743: function (e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "static/media/emilyz.105ff23d.jpg"
        },
        744: function (e, t, n) {},
        745: function (e, t, n) {},
        746: function (e, t, n) {},
        748: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(2),
                r = n.n(a),
                i = n(50),
                o = n.n(i),
                s = n(58),
                d = n(22),
                l = n(76),
                c = (n(5), n(1));
            var p = function (e) {
                const [t, n] = r.a.useState(!1), [a, i] = r.a.useState(!1), [o, s] = r.a.useState("navbar-transparent");
                r.a.useEffect((() => (window.addEventListener("resize", d), function () {
                    window.removeEventListener("resize", d)
                })));
                const d = () => {
                    window.innerWidth < 993 && t ? s("bg-white") : s("navbar-transparent")
                };
                return Object(c.jsx)(c.Fragment, {})
            };
            var u = n(168);
            const m = "blue",
                y = Object(a.createContext)({
                    color: m,
                    changeColor: e => {}
                });
            var b;

            function h(e) {
                const t = Object(d.g)(),
                    n = r.a.useRef(null);
                r.a.useEffect((() => (navigator.platform.indexOf("Win") > -1 && (b = new l.a(n.current, {
                    suppressScrollX: !0,
                    suppressScrollY: !1
                })), function () {
                    navigator.platform.indexOf("Win") > -1 && b.destroy()
                })));
                const {
                    routes: a,
                    rtlActive: i,
                    logo: o
                } = e;
                let p = null,
                    m = null;
                return void 0 !== o && (void 0 !== o.outterLink ? (p = Object(c.jsx)("a", {
                    href: o.outterLink,
                    className: "simple-text logo-mini",
                    target: "_blank",
                    onClick: e.toggleSidebar,
                    children: Object(c.jsx)("div", {
                        className: "logo-img",
                        children: Object(c.jsx)("img", {
                            src: o.imgSrc,
                            alt: "react-logo"
                        })
                    })
                }), m = Object(c.jsx)("a", {
                    href: o.outterLink,
                    className: "simple-text logo-normal",
                    target: "_blank",
                    onClick: e.toggleSidebar,
                    children: "DashBoard"
                })) : (p = Object(c.jsx)(s.b, {
                    to: o.innerLink,
                    className: "simple-text logo-mini",
                    onClick: e.toggleSidebar,
                    children: Object(c.jsx)("div", {
                        className: "logo-img",
                        children: Object(c.jsx)("img", {
                            src: o.imgSrc,
                            alt: "react-logo"
                        })
                    })
                }), m = Object(c.jsx)(s.b, {
                    to: o.innerLink,
                    className: "simple-text logo-normal",
                    onClick: e.toggleSidebar,
                    children: "DashBoard"
                }))), Object(c.jsx)(y.Consumer, {
                    children: r => {
                        let {
                            color: o
                        } = r;
                        return Object(c.jsx)("div", {
                            className: "sidebar",
                            data: o,
                            children: Object(c.jsxs)("div", {
                                className: "sidebar-wrapper",
                                ref: n,
                                children: [null !== p || null !== m ? Object(c.jsx)("div", {
                                    className: "logo",
                                    children: m
                                }) : null, Object(c.jsx)(u.a, {
                                    children: a.map(((n, a) => {
                                        return n.redirect ? null : Object(c.jsx)("li", {
                                            className: (r = n.path, (t.pathname === r ? "active" : "") + (n.pro ? " active-pro" : "")),
                                            children: Object(c.jsxs)(s.c, {
                                                to: n.layout + n.path,
                                                className: "nav-link",
                                                activeClassName: "active",
                                                onClick: e.toggleSidebar,
                                                children: [Object(c.jsx)("i", {
                                                    className: n.icon
                                                }), Object(c.jsx)("p", {
                                                    children: i ? n.rtlName : n.name
                                                })]
                                            })
                                        }, a);
                                        var r
                                    }))
                                })]
                            })
                        })
                    }
                })
            }
            h.defaultProps = {
                rtlActive: !1,
                routes: [{}]
            };
            var f = h;
            const g = "",
                j = "white-content",
                v = Object(a.createContext)({
                    theme: g,
                    changeTheme: () => {}
                });
            var x, w = function (e) {
                    const [t, n] = r.a.useState(!1);
                    return Object(c.jsx)("div", {
                        className: "fixed-plugin"
                    })
                },
                O = n(73),
                A = n(169),
                T = n(170),
                C = n(187),
                k = n(190),
                S = n(188),
                E = n(197),
                B = n(196),
                I = n(72),
                M = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdAAAA3QBAitBRQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVcSURBVHic7ZtbbBRVAIb/Mzuzu+3sFui2Zdvu0hbaBIxXWuLdFoVuVeqDplzi5aEvvChaIyHhweqLxtAENTHBF2NIDCYEXzQEm0g08dIbFCgY1EILFli2ib3uTvc2x4ftqe22e5ndzhyk+73N7Nkz///tzM7OZoZQShGP57X9shgK7QEldaCoBaH3AbAsGnhnEwQlAyA4A0L7Imbzse+PHvLHDyLxApr3tDWoqvoFgCqjkhrEkCAIrd8eO/zj/JXC/IUdu/Z1qKp6GndfeQCoUlX19I5d+zrmr5zbA57f+earIDjKJZrBUEJfOfn1p18BswKad75drpLoRQCrOWczin+iEeHeUycO3xIAQBWiH2LllAeAQpNEPwDYdwBFPdc4PKC0HgDIsy1vFBNCfLzz8CBKTQ6BgNTyDsILkUQ2C0RYUcf+QggpElKPurvJCeAdgDc5AbwD8EY0cmP2vBnUrB2Fwz6Nq74iXBt1IKLy/QwMEWAWI2ht+A07Nl8Ambd+zJ+PT049jd4rFUbEWBLd9YumKDpe/gbNceUBYI0cwHsvfYfmzQN6x0iI7gJ2P9qHDWtHk45pbfgFbseY3lGWRFcBBMALtRdSjjOLUTz34EU9oyREVwGla8YhW0Jpja1x8rke01WAzZpeeQCQNYxdTnQVMDzqQDTN09wVb7GeURKiq4BQxIT+YXdaY7sGKzXPP5Mv4szWMoQsJs3vZeh+Fvissx5KSEo65tc/1+PnP6o1zTsji+hqcuP2Ohu6Pa6MJeguwDdpx7vHm3FzbNWSr/9wcSMOn3xG05wzsogujxsBe0zs1BoLehozk2DIL8Hfb5Ti9S93o37jX6h2+lBk9+Oqz4H+YTcujZRpmkuRRXQ3uRGwLdyrJgtjEh7uHIEUjKY9n2HXAsGwiM6BTegc2JTxHIpNQrfHtag8Y7LQgm6NErI+BBTZGIeKTUJXkvKMyUILera7EDandzhkJcBbYcdPL1ZhpLogm2lSwsorKcozJhwW9DSWI2xOXS9jAd4KO/rrnVAFgoHHnLixQR8JWsszJhxW9DS6UkrISAArT0ns+o4S4MLjTtxcv7wSAjYJXU1uzeUZEw4rera7EEkiQbOA+PIMSoDzTzhxs8quPekSBOwSupvcWX/HTBQll6BJQKLyDEqA80+W4lZldhICdgldnuzLM8aZBGlx3bQFpCrPoAQ491TmEgL22G4/s8xnl0QS0hKQbnlGTIIT3gqbppBz5fP1ObWOF1vRGychpQCt5RmUEPTXl8K7Lj0JepdnjBVb0butfE5CUgGZlmcwCbfdySX4C8yGlGeMleShd1s5FFm0JhSQbXkGFQjONiSW4C8wo9vjMqw8Y6wkD4P3Fz20pIDlKs+gAkF/Qyl8LnnB+tgnb3z5/4JRskjAcpdnqALB2a1lGJ2V4F8VKx/M41R+lgVb16s8QxUIzjSUYVPvKAYfKOReHoTQuQR6l2eoJoJLj5Touo20YYeAUeXvRMSr96yuuVxbvCLLA4DgL7AUr9TyQO7+gJyAnADeAXiTE8A7AG9yAngH4E1OgBClI7xD8EKI0hFBVOgJ3kF4ISr0BKGUIu/4x+EZWeJ8cW4sVn84orS8Fftr1DYRGuacx3BY55gAn9IihdTFz9DepUghldp8SgswK2DoYPs55/WpI3xjGYfz+tSRoYPt54C4Z4edn3/Ue9ttq+OWzADW/j3d5917YAtbXvA7wLv3wJbKy+NtVn84Ynw0fbH6w5HKy+Nt88sDSzw9DgDVHe+XhCzSoaBFqlNsYoXfLsmq6f/1r5EQpZCnwv686cg1SzDcZw6G9w++077oftx/AXNJ3YC5w5NUAAAAAElFTkSuQmCC",
                N = n(92),
                L = n(116),
                D = n.n(L),
                F = n(74),
                U = n.n(F),
                R = n(59),
                z = n.n(R),
                P = [{
                    inputs: [{
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "name",
                        type: "string"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "approved",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "ApprovalForAll",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "hostaddress",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    }],
                    name: "MadeContact",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokenid",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    }, {
                        indexed: !1,
                        internalType: "string",
                        name: "id",
                        type: "string"
                    }],
                    name: "mintnft",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "eventdata",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getApproved",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }],
                    name: "isApprovedForAll",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "id",
                        type: "string"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "own",
                    outputs: [{
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "ownerOf",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4"
                    }],
                    name: "supportsInterface",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "tokenURI",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }];
            async function J(e) {
                let t = await fetch("https://api.nft.storage/upload", {
                    method: "POST",
                    body: e,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFBNTUyNWQyOTFkNDVkZjNiQzJlMjQwNjRlNzUxMjZCYWEyRDUwOWYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyODcxNjI0MDEwOCwibmFtZSI6ImprayJ9.Sc8PYlrc8__0wGh7944hC6VajCciibmzo853jMYSTPk"
                    }
                });
                return "200" == t.status && t.text()
            }
            const Q = Object(N.css)(x || (x = Object(O.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  height: 64px;\n  width:64px;\n"])));
            var W, _ = function (e) {
                    const [t, n] = Object(a.useState)({}), [i, o] = Object(a.useState)(!1), [s, d] = Object(a.useState)(""), [l, p] = Object(a.useState)("#ffffff"), [u, m] = Object(a.useState)(""), [y, b] = Object(a.useState)(""), [h, f] = Object(a.useState)(0), [g, j] = Object(a.useReducer)((e => e + 1), 0), v = r.a.useRef(null), x = e => {
                        var t;
                        switch (Math.floor(5 * Math.random() + 1)) {
                            case 1:
                                t = "primary";
                                break;
                            case 2:
                                t = "success";
                                break;
                            case 3:
                                t = "danger";
                                break;
                            case 4:
                                t = "warning";
                                break;
                            case 5:
                                t = "info"
                        }
                        var n;
                        n = {
                            place: "tr",
                            message: Object(c.jsx)("div", {
                                children: Object(c.jsx)("div", {
                                    children: e
                                })
                            }),
                            type: t,
                            icon: "tim-icons icon-bell-55",
                            autoDismiss: 7
                        }, v.current.notificationAlert(n)
                    };
                    return Object(c.jsx)(c.Fragment, {
                        children: Object(c.jsxs)("div", {
                            className: "content",
                            children: [Object(c.jsx)("div", {
                                className: "react-notification-alert-container",
                                children: Object(c.jsx)(U.a, {
                                    ref: v
                                })
                            }), Object(c.jsx)(A.a, {
                                children: Object(c.jsx)(T.a, {
                                    md: "12",
                                    children: Object(c.jsxs)(C.a, {
                                        children: [Object(c.jsx)(k.a, {
                                            children: Object(c.jsx)("h5", {
                                                className: "title",
                                                children: "Host Your Game Event / Host Your Daily Stream"
                                            })
                                        }), Object(c.jsxs)(S.a, {
                                            children: [Object(c.jsx)(E.a, {
                                                for: "event_name",
                                                children: "Event Name"
                                            }), Object(c.jsx)(B.a, {
                                                name: "event_name",
                                                id: "event_name",
                                                placeholder: "Enter Event Name",
                                                style: {
                                                    width: "30%"
                                                },
                                                onChange: e => {
                                                    m(e.target.value)
                                                }
                                            }), Object(c.jsx)(E.a, {
                                                for: "event_stream_key",
                                                children: "Livepeer Playback Url (Center Display)"
                                            }), Object(c.jsx)(B.a, {
                                                name: "event_stream_key",
                                                id: "event_stream_key",
                                                placeholder: "Enter Livepeer Playback Url",
                                                style: {
                                                    width: "30%"
                                                },
                                                onChange: e => {
                                                    b(e.target.value)
                                                }
                                            }), Object(c.jsx)(E.a, {
                                                for: "team_numbers",
                                                children: "Number Of Teams"
                                            }), Object(c.jsx)(B.a, {
                                                type: "number",
                                                name: "team_numbers",
                                                id: "team_numbers",
                                                placeholder: "Enter Number Of Teams",
                                                style: {
                                                    width: "30%"
                                                },
                                                onChange: e => {
                                                    f(Number(e.target.value))
                                                }
                                            }), Array.from(Array(h), ((e, a) => {
                                                let r = t;
                                                return r.hasOwnProperty(a) || (r[a] = {
                                                    team_name: "",
                                                    p1: {},
                                                    p2: {},
                                                    p3: {},
                                                    p4: {}
                                                }, n(r)), Object(c.jsxs)("div", {
                                                    style: {
                                                        marginTop: "20px"
                                                    },
                                                    children: [Object(c.jsx)("hr", {
                                                        style: {
                                                            color: "#1d8cf8",
                                                            backgroundColor: "#1d8cf8",
                                                            height: 1
                                                        }
                                                    }), Object(c.jsx)(E.a, {
                                                        for: "team_name",
                                                        children: "Team Name"
                                                    }), Object(c.jsx)(B.a, {
                                                        name: "team_name",
                                                        id: "team_name",
                                                        placeholder: "Enter Team Name",
                                                        style: {
                                                            width: "30%"
                                                        },
                                                        onChange: e => {
                                                            let r = t;
                                                            r[a].team_name = e.target.value, n(r)
                                                        }
                                                    }), Object(c.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            width: "100%",
                                                            marginTop: "10px"
                                                        },
                                                        children: [Object(c.jsxs)("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [Object(c.jsx)("div", {
                                                                children: Object(c.jsx)(E.a, {
                                                                    children: "Player 1"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                onClick: () => {
                                                                    let e = document.createElement("input");
                                                                    e.type = "file", e.onchange = n => {
                                                                        let i = Array.from(e.files);
                                                                        if (i && i[0]) {
                                                                            r[a].p1.imgx = i[0];
                                                                            var o = new FileReader;
                                                                            o.addEventListener("load", (function (e) {
                                                                                t[a].p1.img = e.target.result, j()
                                                                            })), o.readAsDataURL(i[0])
                                                                        }
                                                                    }, e.click()
                                                                },
                                                                children: Object(c.jsx)("img", {
                                                                    height: 64,
                                                                    width: 64,
                                                                    src: t[a].p1.hasOwnProperty("img") ? t[a].p1.img : M
                                                                })
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_name",
                                                                children: "Name"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_name",
                                                                id: "player_name",
                                                                placeholder: "Enter Name",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p1.name = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "stream_key",
                                                                children: "Player's Livepeer Playback URL"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "stream_key",
                                                                id: "stream_key",
                                                                placeholder: "Enter Player's Livepeer Playback URL",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p1.key = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_poly_address",
                                                                children: "Player's Polygon Address"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_poly_address",
                                                                id: "player_poly_address",
                                                                placeholder: "Enter Player's Polygon Address",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p1.wallet_address = e.target.value, n(r)
                                                                }
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [Object(c.jsx)("div", {
                                                                children: Object(c.jsx)(E.a, {
                                                                    children: "Player 2"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                onClick: () => {
                                                                    let e = document.createElement("input");
                                                                    e.type = "file", e.onchange = n => {
                                                                        let i = Array.from(e.files);
                                                                        if (i && i[0]) {
                                                                            r[a].p2.imgx = i[0];
                                                                            var o = new FileReader;
                                                                            o.addEventListener("load", (function (e) {
                                                                                t[a].p2.img = e.target.result, j()
                                                                            })), o.readAsDataURL(i[0])
                                                                        }
                                                                    }, e.click()
                                                                },
                                                                children: Object(c.jsx)("img", {
                                                                    height: 64,
                                                                    width: 64,
                                                                    src: t[a].p2.hasOwnProperty("img") ? t[a].p2.img : M
                                                                })
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_name",
                                                                children: "Name"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_name",
                                                                id: "player_name",
                                                                placeholder: "Enter Name",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p2.name = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "stream_key",
                                                                children: "Player's Livepeer Playback URL"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "stream_key",
                                                                id: "stream_key",
                                                                placeholder: "Enter Player's Livepeer Playback URL",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p2.key = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_poly_address",
                                                                children: "Player's Polygon Address"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_poly_address",
                                                                id: "player_poly_address",
                                                                placeholder: "Enter Player's Polygon Address",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p2.wallet_address = e.target.value, n(r)
                                                                }
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [Object(c.jsx)("div", {
                                                                children: Object(c.jsx)(E.a, {
                                                                    children: "Player 3"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                onClick: () => {
                                                                    let e = document.createElement("input");
                                                                    e.type = "file", e.onchange = n => {
                                                                        let i = Array.from(e.files);
                                                                        if (i && i[0]) {
                                                                            r[a].p3.imgx = i[0];
                                                                            var o = new FileReader;
                                                                            o.addEventListener("load", (function (e) {
                                                                                t[a].p3.img = e.target.result, j()
                                                                            })), o.readAsDataURL(i[0])
                                                                        }
                                                                    }, e.click()
                                                                },
                                                                children: Object(c.jsx)("img", {
                                                                    height: 64,
                                                                    width: 64,
                                                                    src: t[a].p3.hasOwnProperty("img") ? t[a].p3.img : M
                                                                })
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_name",
                                                                children: "Name"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_name",
                                                                id: "player_name",
                                                                placeholder: "Enter Name",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p3.name = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "stream_key",
                                                                children: "Player's Livepeer Playback URL"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "stream_key",
                                                                id: "stream_key",
                                                                placeholder: "Enter Player's Livepeer Playback URL",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p3.key = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_poly_address",
                                                                children: "Player's Polygon Address"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_poly_address",
                                                                id: "player_poly_address",
                                                                placeholder: "Enter Player's Polygon Address",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p3.wallet_address = e.target.value, n(r)
                                                                }
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [Object(c.jsx)("div", {
                                                                children: Object(c.jsx)(E.a, {
                                                                    children: "Player 4"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                onClick: () => {
                                                                    let e = document.createElement("input");
                                                                    e.type = "file", e.onchange = n => {
                                                                        let i = Array.from(e.files);
                                                                        if (i && i[0]) {
                                                                            r[a].p4.imgx = i[0];
                                                                            var o = new FileReader;
                                                                            o.addEventListener("load", (function (e) {
                                                                                t[a].p4.img = e.target.result, j()
                                                                            })), o.readAsDataURL(i[0])
                                                                        }
                                                                    }, e.click()
                                                                },
                                                                children: Object(c.jsx)("img", {
                                                                    height: 64,
                                                                    width: 64,
                                                                    src: t[a].p4.hasOwnProperty("img") ? t[a].p4.img : M
                                                                })
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_name",
                                                                children: "Name"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_name",
                                                                id: "player_name",
                                                                placeholder: "Enter Name",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p4.name = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "stream_key",
                                                                children: "Player's Livepeer Playback URL"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "stream_key",
                                                                id: "stream_key",
                                                                placeholder: "Enter Player's Livepeer Playback URL",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p4.key = e.target.value, n(r)
                                                                }
                                                            }), Object(c.jsx)(E.a, {
                                                                for: "player_poly_address",
                                                                children: "Player's Polygon Address"
                                                            }), Object(c.jsx)(B.a, {
                                                                name: "player_poly_address",
                                                                id: "player_poly_address",
                                                                placeholder: "Enter Player's Polygon Address",
                                                                style: {
                                                                    width: "90%"
                                                                },
                                                                onChange: e => {
                                                                    let r = t;
                                                                    r[a].p4.wallet_address = e.target.value, n(r)
                                                                }
                                                            })]
                                                        })]
                                                    })]
                                                }, a)
                                            })), !i && Object(c.jsx)(I.a, {
                                                color: "primary",
                                                style: {
                                                    marginTop: "20px"
                                                },
                                                onClick: async () => {
                                                    o(!0);
                                                    let e = function (e) {
                                                            for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = n.length, r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * a));
                                                            return t
                                                        }(8),
                                                        n = t;
                                                    for (let t in n)
                                                        for (let e = 1; e <= 4; e++)
                                                            if (n[t]["p".concat(e)].hasOwnProperty("img") && n[t]["p".concat(e)].img) {
                                                                let a = await J(n[t]["p".concat(e)].imgx);
                                                                n[t]["p".concat(e)].img = a ? "https://" + JSON.parse(a).value.cid + ".ipfs.infura-ipfs.io/" : "/player.png", delete n[t]["p".concat(e)].imgx
                                                            } console.log(n);
                                                    let a = "https://metastadium.b-cdn.net/?meeting_id=".concat(e, "_0&t=").concat(btoa(u));
                                                    n.event_url = a, n.key = y;
                                                    let r = JSON.parse(await async function (e) {
                                                        let t = await fetch("https://api.web3.storage/upload", {
                                                            method: "POST",
                                                            body: JSON.stringify(e),
                                                            headers: {
                                                                "Content-Type": "application/json",
                                                                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM4MmM1N2I1M0VEOGY2MEMxMmQxOTE3MzZjMUQ5NWY1MUViZWZiMDMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mzc2MTY5MzMxNDIsIm5hbWUiOiJUaGV0YSJ9.8DpgeRXRcTyDAn-5IQYS6A0jA5oNQ--pC2ns0eDT7z8"
                                                            }
                                                        });
                                                        return "200" == t.status && t.text()
                                                    }(n));
                                                    if (console.log("https://" + r.cid + ".ipfs.infura-ipfs.io/"), !await async function () {
                                                            try {
                                                                return !!window.ethereum && (await window.ethereum.request({
                                                                    method: "eth_requestAccounts"
                                                                }), window.web3 = await new z.a(window.ethereum), !0)
                                                            } catch (e) {
                                                                throw console.log(e), ""
                                                            }
                                                        }()) return x("Please install metamask!"), void o(!1);
                                                    if (80001 != await window.web3.eth.net.getId()) return x("Please Switch To polygon tesnet!"), void o(!1);
                                                    const i = (await window.web3.eth.getAccounts())[0],
                                                        s = new window.web3.eth.Contract(P, "0x72E3b2364500b0e92d55A68a6cC22824D6FA5eDb");
                                                    await s.methods.mint(r.cid, e).send({
                                                        from: i
                                                    }), o(!1), d(a)
                                                },
                                                children: "Host"
                                            }), Object(c.jsx)(D.a, {
                                                color: l,
                                                loading: i,
                                                css: Q,
                                                size: 150
                                            }), Object(c.jsx)("div", {
                                                children: "" != s && Object(c.jsx)("a", {
                                                    href: s,
                                                    children: s
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                G = n(166);
            var H, Y = function () {
                    const [e, t] = Object(a.useState)([]), n = r.a.useRef(null), i = e => {
                        var t;
                        switch (Math.floor(5 * Math.random() + 1)) {
                            case 1:
                                t = "primary";
                                break;
                            case 2:
                                t = "success";
                                break;
                            case 3:
                                t = "danger";
                                break;
                            case 4:
                                t = "warning";
                                break;
                            case 5:
                                t = "info"
                        }
                        var a;
                        a = {
                            place: "tr",
                            message: Object(c.jsx)("div", {
                                children: Object(c.jsx)("div", {
                                    children: e
                                })
                            }),
                            type: t,
                            icon: "tim-icons icon-bell-55",
                            autoDismiss: 7
                        }, n.current.notificationAlert(a)
                    };
                    return (async () => {
                        try {
                            let e = [];
                            if (!await async function () {
                                    try {
                                        return !!window.ethereum && (await window.ethereum.request({
                                            method: "eth_requestAccounts"
                                        }), window.web3 = await new z.a(window.ethereum), !0)
                                    } catch (e) {
                                        throw console.log(e), ""
                                    }
                                }()) return void i("Please install metamask!");
                            if (80001 != await window.web3.eth.net.getId()) return void i("Please Switch To polygon tesnet!");
                            const n = (await window.web3.eth.getAccounts())[0],
                                a = Object(G.gql)(W || (W = Object(O.a)(["{\n        events(where: { owner: ", " }){\n        id\n          url\n         idString\n      \n        }\n      }\n    "])), JSON.stringify(n.toLowerCase()));
                            let r = await Object(G.request)("https://api.thegraph.com/subgraphs/name/harshu4/livepoly", a);
                            for (let t of r.events) {
                                let n = "https://" + t.url + ".ipfs.infura-ipfs.io/",
                                    a = await fetch(n);
                                a = await a.json(), n = a.event_url, e.push(n)
                            }
                            t(e)
                        } catch (e) {}
                    })(), Object(c.jsx)(c.Fragment, {
                        children: Object(c.jsx)("div", {
                            className: "content",
                            children: Object(c.jsx)(A.a, {
                                children: Object(c.jsx)(T.a, {
                                    md: "12",
                                    children: Object(c.jsxs)(C.a, {
                                        children: [Object(c.jsx)(k.a, {
                                            children: Object(c.jsx)("h5", {
                                                className: "title",
                                                children: "Your Events"
                                            })
                                        }), Object(c.jsx)(S.a, {
                                            children: e.map((function (e, t) {
                                                return Object(c.jsxs)("div", {
                                                    style: {
                                                        marginTop: "15px"
                                                    },
                                                    children: [Object(c.jsx)("a", {
                                                        href: e,
                                                        children: e
                                                    }), " "]
                                                }, t)
                                            }))
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                q = [{
                    inputs: [{
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "name",
                        type: "string"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "approved",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "ApprovalForAll",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "hostaddress",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    }],
                    name: "MadeContact",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokenid",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "buyer",
                        type: "address"
                    }],
                    name: "buynft",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokenid",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "nftevent",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "pricenft",
                        type: "uint256"
                    }],
                    name: "mintnft",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokenid",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "setprice",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "buy",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "eventdata",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getApproved",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }],
                    name: "isApprovedForAll",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "string",
                        name: "uri",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "eventnft",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "nftevent",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "onsell",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "own",
                    outputs: [{
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "ownerOf",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "pricenft",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "setPrice",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4"
                    }],
                    name: "supportsInterface",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "tokenURI",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }];
            const K = Object(N.css)(H || (H = Object(O.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  height: 64px;\n  width:64px;\n"])));
            var V = function () {
                const [e, t] = Object(a.useState)("0"), [n, i] = Object(a.useState)(""), [o, s] = Object(a.useState)(""), [d, l] = Object(a.useState)(null), [p, u] = Object(a.useState)(0), [m, y] = Object(a.useReducer)((e => e + 1), 0), [b, h] = Object(a.useState)(!1), [f, g] = Object(a.useState)(""), [j, v] = Object(a.useState)("#ffffff"), x = r.a.useRef(null), w = e => {
                    var t;
                    switch (Math.floor(5 * Math.random() + 1)) {
                        case 1:
                            t = "primary";
                            break;
                        case 2:
                            t = "success";
                            break;
                        case 3:
                            t = "danger";
                            break;
                        case 4:
                            t = "warning";
                            break;
                        case 5:
                            t = "info"
                    }
                    var n;
                    n = {
                        place: "tr",
                        message: Object(c.jsx)("div", {
                            children: Object(c.jsx)("div", {
                                children: e
                            })
                        }),
                        type: t,
                        icon: "tim-icons icon-bell-55",
                        autoDismiss: 7
                    }, x.current.notificationAlert(n)
                };
                return Object(c.jsx)(c.Fragment, {
                    children: Object(c.jsxs)("div", {
                        className: "content",
                        children: [Object(c.jsx)("div", {
                            className: "react-notification-alert-container",
                            children: Object(c.jsx)(U.a, {
                                ref: x
                            })
                        }), Object(c.jsx)(A.a, {
                            children: Object(c.jsx)(T.a, {
                                md: "12",
                                children: Object(c.jsxs)(C.a, {
                                    children: [Object(c.jsx)(k.a, {
                                        children: Object(c.jsx)("h5", {
                                            className: "title",
                                            children: "Mint Video Nft"
                                        })
                                    }), Object(c.jsxs)(S.a, {
                                        children: [Object(c.jsxs)("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [Object(c.jsxs)("div", {
                                                style: {
                                                    display: "flex"
                                                },
                                                onClick: () => {
                                                    let e = document.createElement("input");
                                                    e.type = "file", e.setAttribute("accept", "video/mp4,video/x-m4v,video/*"), e.onchange = t => {
                                                        let n = Array.from(e.files);
                                                        if (n && n[0]) {
                                                            var a = new FileReader;
                                                            a.addEventListener("load", (function (e) {
                                                                s(n[0].name), l(n[0]), y()
                                                            })), a.readAsDataURL(n[0])
                                                        }
                                                    }, e.click()
                                                },
                                                children: [Object(c.jsx)("img", {
                                                    height: 64,
                                                    width: 64,
                                                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKySURBVHic7Zs9aFNRGIbfc3tNmiYGTFGSmkEFddEudRBsaUbbVVCH4mIQxEGCOhQcUiqIDkZUcBAnqQVBcBFBEDtUJ8XFwbQUC4H0Vq3F/LT5ae5xuvEGUttAcr5Dz3m2Q7/k/fKcnybkBNBolIbFTicPUDaQL+SjlPkmDHynbKC4nqeMh0GaLgHKCzDdg2CwB8ePHWxa+OnzHMrlKgDA692FEwNH2lbHmIG+vr1N67LZn+DcbqnOYAYim9RZ1i/UarX6uEFAJBJC/OJI0wd+S2fqDQcCvrbWmWYXbk3Em9ZdunwX1ardtrqriQfI5f+dO8pvAeUFsNhokjsDijPAWs6SngENAiiwlrOU8XoLKC/AhI36ph8PzZzs9yxNi2xgYbUgMg6L/sjDVGn4hTNm7j/yeDQG2O9FNvTnq9gzwNPrT/S8Lt53xspvAS2AugFqtABRQaXRa9g4OiQqbtsIE8BDURSvTGP9/B3w7oCo2C0RuwUYQ+XUGArj76RZDSRngO2shrO3wffso2ihDt0hyBgqQxeQezqPjTMJsjbI/wvYrAv5sUmsPf4C3hsWnk8uwKEcPozck7Tw1SCNAIBmNUglwEHkapBSACBuNUgrwKHTq0F6AZ3G3LqEFq81D9/NEbAVqyPPL60Ag9fgn0rCfJnqaI6UAjo9626kEiBq1t1II0DkrLshF0Ax627oBHAOz+wzBFM3wFZ/kLVBIsD4nYHv+XWY6VlUCF88IFoA5/B8nEL3q0mwkthvhDZDmABjJQP/o3Mw5z6IitwWwgR439wTFdUSyn8W0AKoG6BGeQGm+7L027WZcL9nSWgDC2y/0LzFcuTQwODwoDPWl6RI0yVAeQE78rL0/+r0ZWl9WboR5QXsyMvSrZwB+n0AaboEKC+g4bI0BX7fbtIfTmo0ivMXhCuLgBuxMvIAAAAASUVORK5CYII="
                                                }), Object(c.jsx)("span", {
                                                    style: {
                                                        marginLeft: "10px",
                                                        alignSelf: "center"
                                                    },
                                                    children: o
                                                })]
                                            }), Object(c.jsx)(E.a, {
                                                for: "mint_price",
                                                children: "Mint Price (Polygon)"
                                            }), Object(c.jsx)(B.a, {
                                                name: "mint_price",
                                                id: "mint_price",
                                                placeholder: "Enter Mint Price",
                                                style: {
                                                    width: "90%"
                                                },
                                                onChange: e => {
                                                    t(e.target.value)
                                                }
                                            })]
                                        }), !b && Object(c.jsx)(I.a, {
                                            color: "primary",
                                            style: {
                                                marginTop: "20px"
                                            },
                                            onClick: async () => {
                                                h(!0);
                                                const options = {
                                                    method: 'PUT',
                                                    headers: {'Content-Type': 'application/octet-stream', 'AccessKey': 'ccd1a8ff-d7c4-4345-ae8690043e80-1f7d-4f5c'},
                                                    body: d
                                                  };
                                                  const random_fn = (length = 8) => {
                                                    return Math.random().toString(16).substr(2, length);
                                                };
                                                  let random_name = random_fn(8).concat(".mp4");
                                                  await fetch('https://storage.bunnycdn.com/livepeervideos/'.concat(random_name), options);

                                                  let ee = await fetch("https://stormy-lake-68954.herokuapp.com/", {
                                                        method: "post",
                                                        headers: {
                                                            "Content-Type": "application/json",
                                                        },
                                                        body: JSON.stringify({url:"https://livepeervideos.b-cdn.net/".concat(random_name)})
                                                    });
                                                    let xdf = await ee.json();                                                     
                                                    if (g("Minting on polygon network..."), !await async function () {
                                                            try {
                                                                return !!window.ethereum && (await window.ethereum.request({
                                                                    method: "eth_requestAccounts"
                                                                }), window.web3 = await new z.a(window.ethereum), !0)
                                                            } catch (e) {
                                                                throw console.log(e), ""
                                                            }
                                                        }()) return w("Please install metamask!"), void h(!1);
                                                    if (80001 != await window.web3.eth.net.getId()) return w("Please Switch To polygon tesnet!"), void h(!1);
                                                    const n = (await window.web3.eth.getAccounts())[0],
                                                        a = new window.web3.eth.Contract(q, "0xa456ADdC6FfAD8Bf347B3Fb15877583D40A968A4");
                                                        await a.methods.mint("https://cdn.livepeer.com/asset/".concat(xdf.asset.playbackId.concat("/video")), p, z.a.utils.toWei(e, "ether")).send({
                                                        from: n
                                                    }), g(" "), i("https://cdn.livepeer.com/asset/".concat(xdf.asset.playbackId.concat("/video"))), h(!1)
                                                        
                                                    
                                            },
                                            children: "Mint"
                                        }), Object(c.jsx)(D.a, {
                                            color: j,
                                            loading: b,
                                            css: K,
                                            size: 150
                                        }), Object(c.jsx)("div", {
                                            style: {
                                                width: "100%"
                                            },
                                            children: "" != f && Object(c.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    width: "100%"
                                                },
                                                children: [Object(c.jsx)("span", {
                                                    style: {
                                                        alignSelf: "center"
                                                    },
                                                    children: f
                                                }), Object(c.jsx)("a", {
                                                    href: n,
                                                    children: n
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                })
            };
            n(192), n(115), n(198);
            n(94), n(171), n(199), n(310), n(173), n(172), n(193), n(195), n(200), n(47);
            n(194), n(189), n(191);
            var X, Z = [{
                    path: "/GameEvent",
                    name: "Host Game Event",
                    rtlName: "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
                    icon: "tim-icons icon-atom",
                    component: _,
                    layout: ""
                }, {
                    path: "/mint",
                    name: "Mint Nft",
                    rtlName: "\u062e\u0631\u0627\u0626\u0637",
                    icon: "tim-icons icon-atom",
                    component: V,
                    layout: ""
                }, {
                    path: "/events",
                    name: "My Events",
                    rtlName: "\u062e\u0631\u0627\u0626\u0637",
                    icon: "tim-icons icon-atom",
                    component: Y,
                    layout: ""
                }],
                $ = n.p + "static/media/react-logo.561f1671.png";
            var ee = function (e) {
                const t = Object(d.g)(),
                    n = r.a.useRef(null),
                    [a, i] = r.a.useState(-1 !== document.documentElement.className.indexOf("nav-open"));
                r.a.useEffect((() => {
                    if (navigator.platform.indexOf("Win") > -1) {
                        document.documentElement.className += " perfect-scrollbar-on", document.documentElement.classList.remove("perfect-scrollbar-off"), X = new l.a(n.current, {
                            suppressScrollX: !0
                        });
                        let e = document.querySelectorAll(".table-responsive");
                        for (let t = 0; t < e.length; t++) X = new l.a(e[t])
                    }
                    return function () {
                        navigator.platform.indexOf("Win") > -1 && (X.destroy(), document.documentElement.classList.add("perfect-scrollbar-off"), document.documentElement.classList.remove("perfect-scrollbar-on"))
                    }
                })), r.a.useEffect((() => {
                    if (navigator.platform.indexOf("Win") > -1) {
                        let e = document.querySelectorAll(".table-responsive");
                        for (let t = 0; t < e.length; t++) X = new l.a(e[t])
                    }
                    document.documentElement.scrollTop = 0, document.scrollingElement.scrollTop = 0, n.current && (n.current.scrollTop = 0)
                }), [t]);
                const o = () => {
                        document.documentElement.classList.toggle("nav-open"), i(!a)
                    },
                    s = e => {
                        for (let n = 0; n < Z.length; n++)
                            if (-1 !== t.pathname.indexOf(Z[n].layout + Z[n].path)) return Z[n].name;
                        return "Brand"
                    };
                return Object(c.jsx)(y.Consumer, {
                    children: e => {
                        let {
                            color: i,
                            changeColor: l
                        } = e;
                        return Object(c.jsxs)(r.a.Fragment, {
                            children: [Object(c.jsxs)("div", {
                                className: "wrapper",
                                children: [Object(c.jsx)(f, {
                                    routes: Z,
                                    logo: {
                                        outterLink: "https://www.creative-tim.com/",
                                        text: "Creative Tim",
                                        imgSrc: $
                                    },
                                    toggleSidebar: o
                                }), Object(c.jsxs)("div", {
                                    className: "main-panel",
                                    ref: n,
                                    data: i,
                                    children: [Object(c.jsx)(p, {
                                        brandText: s(t.pathname),
                                        toggleSidebar: o,
                                        sidebarOpened: a
                                    }), Object(c.jsxs)(d.d, {
                                        children: [(u = Z, u.map(((e, t) => Object(c.jsx)(d.b, {
                                            path: e.path,
                                            component: e.component
                                        }, t)))), Object(c.jsx)(d.a, {
                                            from: "*",
                                            to: "/GameEvent"
                                        })]
                                    })]
                                })]
                            }), Object(c.jsx)(w, {
                                bgColor: i,
                                handleBgClick: l
                            })]
                        });
                        var u
                    }
                })
            };
            n(744), n(745), n(746), n(747);

            function te(e) {
                const [t, n] = Object(a.useState)(g);
                return Object(a.useEffect)((() => {
                    if (t === j) document.body.classList.add("white-content");
                    else document.body.classList.remove("white-content")
                }), [t]), Object(c.jsx)(v.Provider, {
                    value: {
                        theme: t,
                        changeTheme: function (e) {
                            n(e)
                        }
                    },
                    children: e.children
                })
            }

            function ne(e) {
                const [t, n] = Object(a.useState)(m);
                return Object(c.jsx)(y.Provider, {
                    value: {
                        color: t,
                        changeColor: function (e) {
                            n(e)
                        }
                    },
                    children: e.children
                })
            }
            o.a.render(Object(c.jsx)(te, {
                children: Object(c.jsx)(ne, {
                    children: Object(c.jsx)(s.a, {
                        basename: "dashboard",
                        children: Object(c.jsxs)(d.d, {
                            children: [Object(c.jsx)(d.b, {
                                path: "/",
                                render: e => Object(c.jsx)(ee, {
                                    ...e
                                })
                            }), Object(c.jsx)(d.a, {
                                from: "/",
                                to: "/GameEvent"
                            })]
                        })
                    })
                })
            }), document.getElementById("root"))
        }
    },
    [
        [748, 1, 2]
    ]
]);
//# sourceMappingURL=main.afffa558.chunk.js.map