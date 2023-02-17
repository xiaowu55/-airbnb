const cracoLess = require('craco-less')
const path = require('path')

const  resolve = pathname => path.resolve(__dirname,pathname)

module.exports={
    plugins:[{
        plugin:cracoLess

    }
        
    ]
    ,
    webpack:{
        alias:{
            '@':resolve('src'),
            'components':resolve('src/components'),
            'utils':resolve('src/utils')
        }
    }
}