import { transporter, TO_EMAIL, FROM_EMAIL } from "../../server/mailer";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export default function handler(req, res) {
  const user_message = `<p>New enquiry from ${req.body.name} &lt;${req.body.email}&gt;\n`
    + `<h2>${req.body.subject}</h2>\n`
    + `<div>${req.body.message}</div>`;

  const options = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Enquiry: ${ascii_string(req.body.subject.slice(0,63))}`,
    html: DOMPurify.sanitize(user_message, {ALLOWED_TAGS: HTML_EMAIL_TAGS})
  };

  return transporter.sendMail(options)
    .then(info => {
      res.send({ success: true, message: "Thank you for your enquiry." });
      //console.log(JSON.stringify(JSON.parse(info.message),null,2));
    }).catch(err => {
      res.status(500).send({ success: false, message: "Something went wrong (server error). Try again later." });
      //console.log(err);
    });
}

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const HTML_EMAIL_TAGS = ["b", "i", "u", "h1", "h2", "h3", "h4", "h5", "h6",
  "span", "strong", "br", "hr", "div", "p", "a",
  "li", "ol", "ul", "table", "td", "th", "tr"];

function ascii_string(s) {
  let ss = "";
  for (let c of s) {
    let cc = c.charCodeAt();
    if (cc >= 32 && cc <= 126) ss += c;
  }
  return ss;
}
