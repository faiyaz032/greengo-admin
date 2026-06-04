# Contact API Integration Guide

This guide details how to integrate and send contact form submissions to the public contact API endpoint from the frontend application.

---

## Endpoint Details

*   **URL**: `/api/contact`
*   **Method**: `POST`
*   **Headers**: 
    *   `Content-Type: application/json`

---

## Request Body Schema

The API expects a JSON payload containing the following fields:

| Field Name | Type   | Required | Description                                                         |
| :--------- | :----- | :------- | :------------------------------------------------------------------ |
| `name`     | string | Yes      | The name of the person submitting the contact form.                 |
| `email`    | string | Yes      | Valid email address to reply to.                                    |
| `message`  | string | Yes      | Content of the message.                                             |
| `source`   | string | Yes      | String identifying the originating platform (e.g., `quoteplugin`, `wishlist`). |

### Example Payload
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "message": "Hello, I am interested in purchasing a commercial license.",
  "source": "quoteplugin"
}
```

---

## Responses

### 1. Success (200 OK)
Returned when the submission is successfully written to the database and forwarded via email.

```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "id": "6a1d5eb40003ac0c6daa1a2d",
    "emailSent": true
  }
}
```

### 2. Validation Error (400 Bad Request)
Returned if any required fields are missing, empty, or if the email format is invalid.

```json
{
  "error": "Valid email is required"
}
```

### 3. Server Error (500 Internal Server Error)
Returned if a database connection error or other unexpected error occurs.

```json
{
  "error": "Internal Server Error"
}
```

---

## Frontend Integration Examples

### 1. Vanilla JavaScript (Fetch API)
```javascript
async function submitContactForm(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        source: 'wishlist' // replace with correct source identifier
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Something went wrong');
    }

    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error submitting form:', error.message);
    throw error;
  }
}
```

### 2. React Form Handler Example
```tsx
import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      source: 'quoteplugin', // Origin source
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
    } catch (err: any) {
      setErrorMsg(err.message || 'Server error occurred');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name, Email, and Message inputs */}
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p>Thank you! Your message has been sent.</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Error: {errorMsg}</p>}
    </form>
  );
}
```
