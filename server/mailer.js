import nodemailer from "nodemailer";

export const TO_EMAIL = process.env.mailto;
export const FROM_EMAIL = process.env.username;

export const transporter = nodemailer.createTransport({
  /**/
  host: process.env.mailhost,
  auth: {
    user: process.env.username,
    pass: process.env.password
  },
  secure: true
  /**/
  /*
  jsonTransport: true
  /**/
});
