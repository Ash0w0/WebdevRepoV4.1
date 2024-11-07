const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.webdevelopmentsolutions.in';

export async function registerDeveloper(data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/developers/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error registering developer:', error);
    throw error;
  }
}

export async function submitInquiry(data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit inquiry');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    throw error;
  }
}

export async function getDeveloperStatus(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/developers/${id}/status`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch status');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching developer status:', error);
    throw error;
  }
}