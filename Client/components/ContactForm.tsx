'use client'; // If using App Router and state/effects

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/styles/ContactForm.module.css';
import { ContactFormData } from '@/types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    if (formData.subject && formData.subject.length > 100) {
        newErrors.subject = 'Subject cannot exceed 100 characters.';
    }
    if (formData.message.trim().length < 10) {
        newErrors.message = 'Message should be at least 10 characters long.';
    }
     if (formData.message.trim().length > 1000) {
        newErrors.message = 'Message cannot exceed 1000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    setStatusMessage('');

    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(result.message || 'Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'An error occurred.');
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <h2 className={styles.formTitle}>Send Me a Message</h2>
      
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          required
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          required
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>Subject (Optional)</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject || ''}
          onChange={handleChange}
          className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
        />
        {errors.subject && <p className={styles.errorMessage}>{errors.subject}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Your Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          required
        />
        {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className={styles.successMessage}>{statusMessage}</p>}
      {status === 'error' && Object.keys(errors).length === 0 && <p className={styles.errorMessageGlobal}>{statusMessage}</p>}
    </form>
  );
};

export default ContactForm;
