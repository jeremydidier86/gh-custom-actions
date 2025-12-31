const core = require('@actions/core');
//const github = require('@actions/github');
const exec = require('@actions/exec');
function run() {
    const bucketName = core.getInput('bucket-name',{required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    const s3Uri = `s3://${bucketName}`
    exec.exec(`awx s3 sync ${distFolder} ${s3Uri} --region${bucketName}`);
    core.notice('Hello from my custom java Action!');
}

run();