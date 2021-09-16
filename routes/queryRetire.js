const express = require('express');
const router = express.Router();
const xlsx = require('node-xlsx');
const filepath = '/Users/wangtian/Desktop/局系统各二级单位退休人员基本信息表.xls'

/* POST query page. */
router.post('/', function(req, res, next) {
    let q = req.body;
    let n = q['name'];
    let file = xlsx.parse(filepath);

    for (let i = 0; i < 23; i++) {
        let data = file[0].data;
        let j = 0;
        for (; j < data.length; j++) {
            if (n === data[j][1]) {
                res.render('retireDetail', {
                    'name':n,
                    'tender':data[j][2],
                    'dob':data[j][3],
                    'dow':data[j][4],
                    'dop':data[j][5],
                    'edu':data[j][6],
                    'pos':data[j][7],
                    'dor':data[j][8],
                    'aor':data[j][9],
                    'ps':data[j][10]
                });
            }
        }
    }
});
module.exports = router;