function createMerPsTeamRegistrationForm() {
  const form = FormApp.create('MER-PS Challenge Team Registration');

  form.setDescription(
    'To ensure fair evaluation and final result verification, each participating team must complete this registration form before making official submissions on Codabench.\n\n' +
    'Only the team leader should submit this form. Each participant may belong to only one registered team, and each Codabench account may appear in only one team record. If team information needs to be changed after submission, please contact the organizers by email.'
  );

  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false);
  form.setConfirmationMessage(
    'Thank you for registering your team for the MER-PS Challenge. The organizing committee will use this information for final submission audit and result verification. If your team information needs to be updated, please contact the organizers by email.'
  );

  addRequiredText(form, 'Team name');
  addRequiredText(form, 'Institution / affiliation');
  addRequiredText(form, 'Team leader real name');
  addRequiredText(form, 'Team leader Codabench username');
  addRequiredEmail(form, 'Team leader email address');

  form.addMultipleChoiceItem()
    .setTitle('Number of team members')
    .setChoiceValues(['1', '2', '3', '4', '5', 'More than 5'])
    .setRequired(true);

  addMemberFields(form, 1);
  addMemberFields(form, 2);
  addMemberFields(form, 3);

  form.addParagraphTextItem()
    .setTitle('Additional members, if any')
    .setHelpText('If your team has more than 3 members, list each additional member as: real name / Codabench username / email address.')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Tracks / tasks your team plans to participate in')
    .setChoiceValues(['Track 1', 'Track 2', 'Track 3', 'Other / undecided'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Agreement: one person, one team')
    .setChoiceValues(['I confirm that each listed person belongs to only this team for the MER-PS Challenge.'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Agreement: final audit')
    .setChoiceValues(['I understand that final results and award eligibility will be audited according to the registered team information.'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Additional notes')
    .setRequired(false);

  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Published URL: ' + form.getPublishedUrl());
}

function addMemberFields(form, index) {
  addRequiredText(form, 'Member ' + index + ' real name');
  addRequiredText(form, 'Member ' + index + ' Codabench username');
  addRequiredEmail(form, 'Member ' + index + ' email address');
}

function addRequiredText(form, title) {
  form.addTextItem()
    .setTitle(title)
    .setRequired(true);
}

function addRequiredEmail(form, title) {
  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText('Please enter a valid email address.')
    .build();

  form.addTextItem()
    .setTitle(title)
    .setValidation(emailValidation)
    .setRequired(true);
}
