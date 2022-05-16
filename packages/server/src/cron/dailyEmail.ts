import { EMailService } from "../utils/EMailService";
import cron from "node-cron";
import { User, UserI } from "../model/user.model";

export default class DailyEmail {
  constructor() {
    cron.schedule("8 * * * 1-5", async () => {
      const users = await User.getAll();
      const emails = this.getAllEmails(users);

      emails.map((email: string) => {
        this.sendEmail(email);
      });
    });
  }

  private sendEmail(email: string) {
    const gmailService = new EMailService();

    gmailService
      .sendMail({
        to: [email],
        subject: "ZZ Dashboard",
        text: `Bitte deine Zeiten eintragen!`,
      })
      .then((msg: any) => {
        console.log(`sendMail result :(${msg})`);
      })
      .catch((error: any) => {
        console.log(`sendMail error :(${error})`);
      });
  }

  private getAllEmails(users: UserI[]) {
    const emails = new Array<string>();
    users.map((user) => {
      emails.push(user.email);
    });

    return emails;
  }
}
