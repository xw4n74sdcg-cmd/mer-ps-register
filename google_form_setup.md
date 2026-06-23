# MER-PS Team Registration Google Form Setup

## Form Title

MER-PS Challenge Team Registration

## Form Description

To ensure fair evaluation and final result verification, each participating team must complete this registration form before making official submissions on Codabench.

Only the team leader should submit this form. Each participant may belong to only one registered team, and each Codabench account may appear in only one team record. If team information needs to be changed after submission, please contact the organizers by email.

## Recommended Settings

Open the form, then go to `Settings`.

- Responses > Collect email addresses: on, if suitable for your participants.
- Responses > Limit to 1 response: on, if participants can log in with Google accounts.
- Responses > Allow response editing: off, if you want all updates to be handled by email.
- Presentation > Confirmation message:

```text
Thank you for registering your team for the MER-PS Challenge. The organizing committee will use this information for final submission audit and result verification. If your team information needs to be updated, please contact the organizers by email.
```

## Questions

Make every question required unless noted otherwise.

1. Team name
   - Type: Short answer

2. Institution / affiliation
   - Type: Short answer

3. Team leader real name
   - Type: Short answer

4. Team leader Codabench username
   - Type: Short answer

5. Team leader email address
   - Type: Short answer
   - Response validation: Text > Email address

6. Number of team members
   - Type: Multiple choice
   - Options: 1, 2, 3, 4, 5, More than 5

7. Member 1 real name
   - Type: Short answer

8. Member 1 Codabench username
   - Type: Short answer

9. Member 1 email address
   - Type: Short answer
   - Response validation: Text > Email address

10. Member 2 real name
    - Type: Short answer

11. Member 2 Codabench username
    - Type: Short answer

12. Member 2 email address
    - Type: Short answer
    - Response validation: Text > Email address

13. Member 3 real name
    - Type: Short answer

14. Member 3 Codabench username
    - Type: Short answer

15. Member 3 email address
    - Type: Short answer
    - Response validation: Text > Email address

16. Additional members, if any
    - Type: Paragraph
    - Description:

```text
If your team has more than 3 members, list each additional member as: real name / Codabench username / email address.
```

17. Tracks / tasks your team plans to participate in
    - Type: Checkboxes
    - Options:
      - Track 1
      - Track 2
      - Track 3
      - Other / undecided

18. Agreement: one person, one team
    - Type: Checkboxes
    - Option:

```text
I confirm that each listed person belongs to only this team for the MER-PS Challenge.
```

19. Agreement: final audit
    - Type: Checkboxes
    - Option:

```text
I understand that final results and award eligibility will be audited according to the registered team information.
```

20. Additional notes
    - Type: Paragraph
    - Required: No

## After Creating the Form

1. Open the `Responses` tab.
2. Click `Link to Sheets`.
3. Create a new spreadsheet.
4. Click `Publish` or `Share`, depending on the current Google Forms interface.
5. Make sure respondents with the link can access the form.
6. Copy the responder link.
7. Copy the embed iframe link.
8. Replace the placeholders in `registration.html`:
   - `GOOGLE_FORM_PUBLIC_LINK`
   - `GOOGLE_FORM_EMBED_LINK`
   - `YOUR_EMAIL@example.com`

## Notes

Google Forms' `Limit to 1 response` requires respondents to sign in with Google. This can reduce duplicate form submissions, but it does not replace Codabench username and email auditing.
