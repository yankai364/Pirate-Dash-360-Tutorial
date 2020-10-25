module.exports = [
    {
        no_of_tiles: 9,
        start_tile: {
            name: "tileStart",
            direction: "right",
            units : 1,
            position: [2,8]
        },
        end_tile:{
            name: "tileEnd",
            position: [6,6]
        },
        tile_patterns: [
            {
                name: "tile1",
                direction: "right",
                units: 1
            },
            {
                name: "tile2",
                direction: "right",
                units: 1
            },
            {
                name: "tile3",
                direction: "up",
                units: 1
            },
            {
                name: "tile4",
                direction: "up",
                units: 1
            },
            {
                name: "tile5",
                direction: "left",
                units: 1
            },
            {
                name: "tile6",
                direction: "left",
                units: 1
            },
            {
                name: "tile7",
                direction: "right",
                units: 1
            },
            {
                name: "tile8",
                direction: "right",
                units: 1
            },
            {
                name: "tile9",
                direction: "right",
                units: 1
            },
        ],
        tile_positions_to_randomize: [
            [3,8], [4,8], [5,8], [3,7], [4,7], [5,7], [3,6], [4,6], [5,6]
        ]
    },
]