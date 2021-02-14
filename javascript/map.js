var map = {
    cols: 26,
    rows: 16,
    tsize: 32,
    tiles: [[
        {x:1,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:5,y:2}, {x:2,y:2}, {x:2,y:2}, {x:5,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:2,y:2}, {x:4,y:2}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, 
        {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:2,y:3}, {x:3,y:3}, {x:5,y:3}, {x:3,y:3}, {x:2,y:3}, {x:5,y:3}, {x:2,y:3}, {x:3,y:3}, {x:2,y:3}, {x:3,y:3}, {x:2,y:3}, {x:3,y:3}, {x:2,y:3}, {x:3,y:3}, {x:2,y:3}, {x:3,y:3}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:5,y:4}, {x:3,y:4}, {x:3,y:4}, {x:5,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:3,y:4}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:3}, {x:2,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:3,y:5}, {x:4,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:1,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:2,y:6}, {x:4,y:6}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}
    ], [
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:3,y:41}, {x:4,y:41}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:5,y:19}, {x:6,y:19}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:3,y:42}, {x:4,y:42}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:5,y:20}, {x:6,y:20}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {}, {x:6,y:41}, {x:7,y:41}, {x:7,y:41}, {x:7,y:41}, {x:7,y:41}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:5,y:21}, {x:6,y:21}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {}, {}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:4,y:9}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {}, {}, {}, {}, {x:0,y:0}, {x:4,y:6}, {x:2,y:9}, {x:4,y:10}, {x:2,y:9}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:7,y:42}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}
    ],  [
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:9,y:1}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:5,y:2}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:5,y:2}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:6,y:8}, {x:6,y:8}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:6,y:8}, {x:0,y:0}, {x:6,y:8}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}
    ]
],
    getTile: function (col, row, layer) {
        return this.tiles[layer][row * map.cols + col];
    },

    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // loop through all layers and return TRUE if any tile is solid
        return this.tiles.slice(0).reduce(function (res, layer, index) {
            let tile = this.getTile(col, row, index);
            if (index === 0){
                var isSolid = (tile["x"] === 1 && tile["y"] === 3) || (tile["x"] === 2 && tile["y"] === 2) || (tile["x"] === 2 && tile["y"] === 3) || 
                (tile["x"] === 5 && tile["y"] === 4) || (tile["x"] === 3 && tile["y"] === 3) || (tile["x"] === 5 && tile["y"] === 3)|| (tile["x"] === 5 && tile["y"] === 2) ||
                (tile["x"] === 4 && tile["y"] === 3) || (tile["x"] === 4 && tile["y"] === 6) || (tile["x"] === 4 && tile["y"] === 2)
            }
            else{
                var isSolid = !!tile["x"];
            }
            return res || isSolid;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }
};