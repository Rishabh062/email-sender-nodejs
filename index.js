const nodemailer = require('nodemailer');

const sender = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'ENTER YOUR GMAIL ACCOUNT ID (EG: xyad@gmail.com)',
        pass: 'ENTER YOUR GMAIL ACCOUNT PASSWORD'
    }
});

const mail = {
    from: 'ENTER YOUR GMAIL ACCOUNT ID (EG: xyad@gmail.com)',
    to: 'YOU CAN ALSO ADD MULTIPLE RECIPIENTS (EG:ffjnf@gmail.com, bbu@gmail.com)',
    subject: 'Sending Email using Node.js',
    html: '<h2>This is an automated email send with the help of Nodejs. HEHEHE do not worry, your mail is safe.</h2>',
    attachments:[
        {
            filename: 'rishabh.jpg',
            path: 'rishabh.jpg',
            cid: 'rishabh'
        }
    ]
}

sender.sendMail(mail,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Email send successfully"+data.response);
    }
})