process.env.MAIL_URL = Meteor.settings.mailgun.smtp;
process.env.MAIL_FROM = Meteor.settings.email.from;

Accounts.emailTemplates.siteName = Meteor.settings.email.siteName;
Accounts.emailTemplates.from = Meteor.settings.email.from;
