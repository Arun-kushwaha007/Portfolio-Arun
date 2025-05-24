import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactFormData } from '@/types'; // Assuming types are in @/types

type ResponseData = {
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { name, email, subject, message }: ContactFormData = req.body;
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    // Basic server-side validation
    if (!name || name.trim() === '') {
      errors.name = 'Name is required.';
    }
    if (!email || email.trim() === '') {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }
    if (!message || message.trim() === '') {
      errors.message = 'Message is required.';
    }
    // Optional: Validate subject length if provided
    if (subject && subject.length > 100) {
        errors.subject = 'Subject cannot exceed 100 characters.';
    }
    if (message && message.length > 1000) {
        errors.message = 'Message cannot exceed 1000 characters.';
    }


    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Validation failed.', errors });
    }

    // Process the data (e.g., send email, save to DB)
    // For now, just log it to the console
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject || '(No subject)');
    console.log('Message:', message);

    // Send success response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
