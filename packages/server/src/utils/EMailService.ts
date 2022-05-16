import * as nodemailer from "nodemailer";

require("dotenv").config();

export class EMailService {
  private _transporter: nodemailer.Transporter;

  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.EM_HOST,
      auth: {
        user: process.env.EM_USER,
        pass: process.env.EM_PASS,
      },
    });
  }

  sendMail(props: any): Promise<void> {
    let options = {
      from: "no-reply@sud-mark.com",
      to: props.to,
      subject: props.subject,
      text: props.text,
      html: props.html,
      attachments: props.attachments,
    };

    return new Promise<void>(
      (resolve: (msg: any) => void, reject: (err: Error) => void) => {
        this._transporter.sendMail(options, (error, info) => {
          if (error) {
            console.log(`error: ${error}`);
            reject(error);
          } else {
            console.log(`Message Sent 
                      ${info.response}`);
            resolve(`Message Sent  
                      ${info.response}`);
          }
        });
      }
    );
  }
}
