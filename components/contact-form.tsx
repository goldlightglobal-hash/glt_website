"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send, CheckCircle, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [attachmentName, setAttachmentName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type") || "";
        let errorMessage = "Unable to send message.";

        if (contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } else {
          const responseText = await response.text();
          errorMessage = responseText || errorMessage;
        }

        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAttachmentName("");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleAttachmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttachmentName(event.target.files?.[0]?.name ?? "");
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-xl border border-gold/30 bg-gold/5 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle className="h-12 w-12 text-gold mb-4" aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted text-sm max-w-sm">
          Thank you for reaching out. Our team will get back to you within 1-2
          business days.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact form"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            aria-required="true"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          autoComplete="tel"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          aria-required="true"
          rows={5}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="attachment">Resume or Document (Optional)</Label>
        <Input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.txt,.rtf,.odt"
          aria-describedby="attachment-help"
          onChange={handleAttachmentChange}
          className="file:mr-4 file:rounded-md file:border-0 file:bg-gold/10 file:px-3 file:py-1 file:text-sm file:font-medium file:text-gold"
        />
        <p id="attachment-help" className="text-xs text-muted">
          <Paperclip className="mr-1 inline h-3 w-3" aria-hidden="true" />
          PDF, Word, OpenDocument, or text documents up to 10 MB.
          {attachmentName ? ` Selected: ${attachmentName}` : ""}
        </p>
      </div>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <Button type="submit" variant="default" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
        {!loading && <Send className="h-4 w-4" />}
      </Button>
    </form>
  );
}
