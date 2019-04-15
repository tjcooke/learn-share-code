const Method_edits = require('../models/method_edits')
const Videos = require('../models/videos')

const Articles = require('../models/articles')

async function dashboardPage(req,res){
    let methodEdits = await Method_edits.getAll()
    let videoEdits = await Videos.getDisplayFalse()
    let articleEdits = await Articles.getDisplayFalse()
    res.render('dashboard',{
        locals:{
            methodsEdits:methodEdits,
            videos:videoEdits,
            articles:articleEdits
        }
    })
}

async function dashboardMethod(req,res){
    let method = await Method_edits.getById(req.params.id)
    console.log(method)
    let videos = await Videos.getByMethodName(method.method)
    console.log(videos)
    videos = videos.filter((eaVideo)=>{
        return eaVideo.display === 'False'
    })
    res.render('dashboard-method',{
        locals:{
            method:method,
            videos:videos

        }
    })

}




function dashboardPost (req,res){
    console.log(req.body)
}

module.exports =  {dashboardPage, dashboardPost, dashboardMethod} ;