"use strict";

console.log("App.js is running");

var parkingSpaceArray = [{ id: "A1", reg: "free", colour: "red" }, { id: "A2", reg: "free", colour: "red" }, { id: "A3", reg: "free", colour: "red" }, { id: "A4", reg: "free", colour: "red" }, { id: "A5", reg: "free", colour: "red" }, { id: "A6", reg: "free", colour: "red" }, { id: "A7", reg: "free", colour: "red" }, { id: "A8", reg: "free", colour: "red" }, { id: "A9", reg: "free", colour: "red" }, { id: "A10", reg: "free", colour: "red" }, { id: "B1", reg: "free", colour: "red" }, { id: "B2", reg: "free", colour: "red" }, { id: "B3", reg: "free", colour: "red" }, { id: "B4", reg: "free", colour: "red" }, { id: "B5", reg: "free", colour: "red" }, { id: "B6", reg: "free", colour: "red" }, { id: "B7", reg: "free", colour: "red" }, { id: "B8", reg: "free", colour: "red" }, { id: "B9", reg: "free", colour: "red" }, { id: "B10", reg: "free", colour: "red" }, { id: "C1", reg: "free", colour: "red" }, { id: "C2", reg: "free", colour: "red" }, { id: "C3", reg: "free", colour: "red" }, { id: "C4", reg: "free", colour: "red" }, { id: "C5", reg: "free", colour: "red" }, { id: "C6", reg: "free", colour: "red" }, { id: "C7", reg: "free", colour: "red" }, { id: "C8", reg: "free", colour: "red" }, { id: "C9", reg: "free", colour: "red" }, { id: "C10", reg: "free", colour: "red" }, { id: "D1", reg: "free", colour: "red" }, { id: "D2", reg: "free", colour: "red" }, { id: "D3", reg: "free", colour: "red" }, { id: "D4", reg: "free", colour: "red" }, { id: "D5", reg: "free", colour: "red" }, { id: "D6", reg: "free", colour: "red" }, { id: "D7", reg: "free", colour: "red" }, { id: "D8", reg: "free", colour: "red" }, { id: "D9", reg: "free", colour: "red" }, { id: "D10", reg: "free", colour: "red" }];

var reg = '';

var apiData = '';

var getApiData = function getApiData(e) {

    fetch('https://nfs9bwjpoc.execute-api.eu-west-2.amazonaws.com/prod/ReservationManager?date=2020-10-11').then(function (res) {
        return res.json();
    }).then(function (data) {
        // this.setState({ contacts: data })
        console.log(JSON.stringify(data));
        apiData = JSON.stringify(data);
        render();
    }).catch(console.log);
};

var dataClick = function dataClick(e) {
    if (reg) {

        console.log(e.currentTarget);

        var parkingSpace = parkingSpaceArray.find(function (space) {
            return space.id === e.currentTarget.children[2].id;
        });

        if (parkingSpace.colour === 'blue') {

            alert("Space " + parkingSpace.id + " has already been reserved");
            return;
        }

        var mySpace = parkingSpaceArray.find(function (space) {
            return space.reg.toLowerCase() === reg.toLowerCase();
        });

        if (mySpace) {
            alert("Space " + mySpace.id + "  has already been reserved for registration " + mySpace.reg);
            return;
        }

        parkingSpace.reg = reg;
        parkingSpace.colour = 'blue';

        render();
    }
};

var regChanged = function regChanged(e) {

    reg = e.target.value;
    console.log(reg);
};

var appRoot = document.getElementById('app');

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Parking App"
        ),
        React.createElement(
            "button",
            { onClick: getApiData },
            "Get API Data"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
            "label",
            null,
            apiData
        ),
        React.createElement(
            "h3",
            null,
            "Enter your car registration in the box and click on a parking space to reserve it"
        ),
        React.createElement(
            "label",
            null,
            "Car Reg:"
        ),
        " ",
        React.createElement("input", { type: "text", onChange: regChanged, style: { width: '100px' }, name: "reserveSpace" }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
            "table",
            { style: { width: '800px' } },
            React.createElement(
                "tbody",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A1"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A1", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A1";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A1";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A2"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A2", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A2";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A2";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A3"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A3", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A3";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A3";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A4"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A4", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A4";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A4";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A5"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A5", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A5";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A5";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A6"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A6", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A6";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A6";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A7"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A7", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A7";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A7";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A8"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A8", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A8";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A8";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A9"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A9", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A9";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A9";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "A10"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "A10", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "A10";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "A10";
                            }).reg,
                            " "
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B1"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B1", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B1";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B1";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B2"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B2", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B2";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B2";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B3"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B3", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B3";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B3";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B4"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B4", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B4";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B4";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B5"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B5", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B5";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B5";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B6"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B6", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B6";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B6";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B7"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B7", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B7";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B7";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B8"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B8", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B8";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B8";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B9"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B9", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B9";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B9";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "B10"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "B10", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "B10";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "B10";
                            }).reg,
                            " "
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C1"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C1", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C1";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C1";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C2"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C2", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C2";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C2";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C3"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C3", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C3";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C3";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C4"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C4", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C4";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C4";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C5"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C5", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C5";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C5";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C6"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C6", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C6";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C6";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C7"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C7", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C7";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C7";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C8"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C8", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C8";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C8";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C9"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C9", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C9";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C9";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "C10"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "C10", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "C10";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "C10";
                            }).reg,
                            " "
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D1"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D1", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D1";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D1";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D2"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D2", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D2";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D2";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D3"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D3", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D3";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D3";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D4"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D4", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D4";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D4";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D5"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D5", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D5";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D5";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D6"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D6", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D6";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D6";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D7"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D7", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D7";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D7";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D8"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D8", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D8";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D8";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D9"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D9", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D9";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D9";
                            }).reg,
                            " "
                        )
                    ),
                    React.createElement(
                        "td",
                        { onClick: dataClick },
                        React.createElement(
                            "label",
                            null,
                            "D10"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            { id: "D10", style: { color: parkingSpaceArray.find(function (x) {
                                        return x.id === "D10";
                                    }).colour } },
                            parkingSpaceArray.find(function (x) {
                                return x.id === "D10";
                            }).reg,
                            " "
                        )
                    )
                )
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
