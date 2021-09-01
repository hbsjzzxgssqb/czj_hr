const express = require('express');
const router = express.Router();
const xlsx = require('node-xlsx');
const filepath = '/Users/wangtian/Desktop/人员详情表.xlsx'

/* POST query page. */
router.post('/', function(req, res, next) {
    let q = req.body;
    let n = q['name'];
    let file = xlsx.parse(filepath)
    let data = file[0].data
    let i=0;
    for(;i<data.length;i++){
        if(n===data[i][0]){
            break;
        }
    }
    res.render('detail',
        { 'name': n,
                'gender':data[i][1],
                'dob':data[i][2],
                'nation':data[i][3],
                'np':data[i][4],
                'pob':data[i][5],
                'dop':data[i][6],
                'dow':data[i][7],
                'health':data[i][8],
                'ptp':data[i][9],
                'fte':data[i][10],
                'fts':data[i][11],
                'ce':data[i][12],
                'cs':data[i][13],
                'position':data[i][14],
                'cv':data[i][15],
                'rap':data[i][16],
                'assessment':data[i][17],
                'relationship':data[i][18]});
});

module.exports = router;