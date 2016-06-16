#!/usr/bin/env node

var fs = require('fs')
var filePath = __dirname

/**
 * Module dependencies.
 */

var exec = require('child_process').exec

exec('which npm', function (error, stdout, stderr) {
  if (error !== null) {
    console.log('exec error: ' + error)
  }

  var path = stdout.replace('npm', '')
  path = path.replace('\n', '')

  if (/\.nvm/.test(path)) {
    console.log(filePath + '/a.sh')
    console.log(path + 'clone')
    fs.createReadStream(filePath + '/a.sh').pipe(fs.createWriteStream(path + 'clone'))
    
    exec('chmod 755 ' + path + 'clone', function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      
      return console.log('copy complete!')
    })
  } else {
    exec('sudo cp ' + filePath + '/a.sh ' + path + 'clone', function (error, stdout, stderr) {
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
    })
  }
})
