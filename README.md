
This is a [Next.js](https://nextjs.org/) project implementing a simple enquiry
form allowing visitors to send a message to the website owner.

You can visit
[a running instance of this project](https://nextmail.bamfordresearch.com/),
deployed via Vercel, and use it to contact the author!


## Environment Variables

Environment variables are used to provide mail server login details so these
can be kept secret.

For serving locally, these can be set in the file `.env.local` to be placed in
the project root folder.

```
mailto   = someone@example.com      # address where enquiries will be sent
mailhost = smtp.example.com         # server and user details for sending mail
username = user@example.com
password = examplepassword
```

When deploying with Vercel, environment variables are set through the
Vercel dashboard interface.


## Deploy on Vercel

Process I used to deploy on the [Vercel Platform](https://vercel.com/):

- **Vercel Home** > `New Project`
- Under **Import Git Repository** find appropriate repository > `Import`
- **Create A Team** > `Skip`
- Vercel will fetch and build project
- **Congratulations** > `Go to Dashboard`
- **Dashboard** > `View Domains`
- **Project Settings / Domains** > Enter desired (sub)domain to deploy on > `Add`
- **Invalid Configuration** -
- Copy details under **CNAME (Recommended)** to DNS settings at registrar
- Domain name update typically requires 5-10 minutes to propagate and go live
- **Project Settings** > **Environment Variables**
- Create environment variables one by one as given above
- It is necessary to redeploy to update environment variables used by app
- Go **Deployments** (at top) > this project's kebab menu > `Redeploy`
- Build time approx one minute, site now live


## Design Notes

This project is built from the standard `create-next-app` template.


### Send API

The "send" API route receives the message from the front end, and uses
*nodemailer* to email the message. It also uses *dompurify* to sanitize the
user input before emailing it.

A nodemailer *transporter* object is used for sending the message.
Called with a single *options* argument, this returns a promise. If the send
request succeeds, the promise will resolve, returning an object *info*;
if the request fails, the promise will reject, throwing the object *err*;
*info* and *err* are the callback parameters mentioned in
nodemailer's documentation [Usage :: Nodemailer](https://nodemailer.com/usage/).


### Homepage (index.js)

The value of environment variable NEXT_PUBLIC_MESSAGE will be displayed on the
page above the form, allowing a message to be shown and updated independently of
the git repository. On Vercel, it is necessary to 'redeploy' the project after
updating the environment variable.
# WORK
