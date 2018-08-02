const express = require('express');
const app     = express();

app.use(express.static('public'));

// 电话号码返回省和市，为了模拟延迟，使用了setTimeout
app.post('/phoneLocation', (req, res) => {
	setTimeout(() => {
		console.log( "phoneLocation 执行" );
		res.json({
			success: true,
			obj: {
				province: '广东',
				city: '深圳'
			}
		})
	}, 1000);
})

// 返回面值列表
app.post('/faceList', (req, res) => {
	setTimeout(() => {
		console.log( "faceList 执行" );
		res.json(
			{
				success: true,
				obj:['20元1', '30元1', '50元1']
			}
		)
	}, 1000);
})

app.listen(3000, () => {
    console.log('server start');
})
