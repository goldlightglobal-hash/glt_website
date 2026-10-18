# Contact Form Resume/Document Upload Requirements

## Purpose

Allow visitors to include a resume or supporting document with a contact-form
enquiry and deliver that document as an attachment to the configured contact
email address.

## Scope

These requirements apply to the website contact form and its email submission
endpoint. The upload is optional; enquiries without a document must continue to
work.

## Functional Requirements

1. The contact form must provide an optional file picker labelled
   **Resume or Document (Optional)**.
2. The form must accept PDF, Microsoft Word, OpenDocument, and text documents
   with these extensions: `.pdf`, `.doc`, `.docx`, `.odt`, `.rtf`, and `.txt`.
3. A selected file must not exceed 10 MB. The form must communicate the
   supported file types and size limit to the visitor.
4. The form must continue to collect full name, email address, and message as
   required fields. Phone number remains optional.
5. On successful submission, the endpoint must send the existing enquiry
   details to the configured contact email. If a document was selected, it
   must be included as an email attachment with a safe filename.
6. The form must display a clear error when the submission or file validation
   fails, and a success confirmation only after the email has been sent.
7. After successful submission, the form must clear all fields and the selected
   file. If submission fails, entered values should remain available for retry.
8. Existing JSON submissions to the contact endpoint must remain supported for
   compatibility; such submissions have no file attachment.

## Validation and Error Handling

- The server must independently validate that the optional upload is a file,
  is no larger than 10 MB, and has an allowed extension. Client-side file
  picker restrictions alone are insufficient.
- Missing required contact fields, malformed submissions, unsupported file
  types, oversized files, and email delivery failures must not be reported as
  successful submissions.
- Invalid submissions must receive an appropriate client error response; email
  configuration or delivery failures must receive an appropriate server error
  response.

## Non-Functional Requirements

- Uploaded documents are used only as email attachments; the website must not
  persist them as public files.
- Submitted text must be safely represented in the HTML email.
- The upload flow must work over the existing contact endpoint and SMTP
  configuration without requiring a separate upload service.

## Acceptance Criteria

1. A visitor can submit all required fields without selecting a file and the
   enquiry email is sent as before.
2. A visitor can select an allowed document of 10 MB or less and the email
   arrives with that document attached and the submitted enquiry details.
3. An unsupported extension or document larger than 10 MB is rejected with a
   clear error, and no success confirmation is shown.
4. If email delivery fails, the visitor sees an error and can retry without
   re-entering the form.
5. A legacy JSON request with valid name, email, and message continues to work
   without an attachment.
